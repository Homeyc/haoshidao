<template>
    <section class="mail-list">
        <div class="lg-row robot-box">
            <div class="overview_box strategy_wrap">
                <section>
                    <h2 class="overview_title" style="margin-top:30px;font-weight: 500;">
                       {{$t('netnew.MyRobotSide8')}}
                    </h2>
                    <ul class="strategy_sub_tit clearfix">
                        <li :class="{'sub_tit_active': ifBase === true}" @click="ifBase = true"> {{$t('netnew.BasicStrategy')}}</li>
                        <li :class="{'sub_tit_active': ifBase === false}" @click="ifBase = false">{{$t('netnew.StrategyDecision')}}</li>
                    </ul>
                    <!--基础策略  start-->
                    <div v-if="ifBase === true" style="padding-bottom:60px;position:relative;min-height:740px;">
                        <div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading1">{{$t('netnew.jzz')}}...</div>
                        <table class="table table-bordered general-table">
                            <thead>
                            <tr>
                                <th>{{$t('netnew.Status')}}</th>
                                <th>{{$t('netnew.strategyName')}}</th>
                                <th>{{$t('netnew.Price')}}</th>
                                <!--<th>Use Count</th>-->
                                <th>{{$t('netnew.createday')}}</th>
                                <th>{{$t('netnew.ExpireDate')}}</th>
                                <th>{{$t('netnew.Actions')}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="tr_white" v-for="(list,index) in cptList">
                                <!--<td class="check_box"><input type="checkbox" v-model="selectArr" :value="index"></td>-->
                                <td>
                                    <a v-bind:class="{'label-primary':list.Status==1,'label-primary2':list.Status!=1}">{{list.Status|strategyStatus}}</a>
                                </td>
                                <td v-show="$i18n.locale!='zh-CN'">{{list.Name}}</td>
                                <td v-show="$i18n.locale=='zh-CN'">{{list.LocalName}}</td>
                                <td>{{list.UnitPrice}} NET</td>
                                <!--<td>{{list.UseCount}}</td>-->
                                <td>{{list.BuyTime|time}}</td>
                                <td>{{list.ExpireDate|time}}</td>
                                <td>
                                	<div class="action_item" href="#strategyModal" data-toggle="modal" @click="toRenew(list,1)">{{$t('netnew.xufei')}}</div><br/>
                                    <div class="action_item" @click="changeSubscribe(list.Id)" v-show="list.AutoRenew">{{$t('netnew.Unsubscribe')}}</div>
                                    <div class="action_item" @click="changeSubscribe(list.Id)" v-show="!list.AutoRenew">{{$t('netnew.Resubscribe')}}</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="alert alert-warning fade in" v-show="cptList.length==0 && !ifLoading1">
	                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
	                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
	                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
	                    </div>
                        <div class="pigna" v-if="cptList.length>0" style="width: 100%;text-align: center;position:absolute;bottom:4px;left:0;right:0">
                            <paginate v-model="CurrentPage1" :page-count="perpage1" :click-handler="withDrawRecord1" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
                            </paginate>
                        </div>
                    </div>
                    <div class="bottom_box">
                        <!--<input type="checkbox" @click="selectAll"><label class="select_all">Select all</label>-->
                    </div>
                    <!--策略决策  start-->
                    <div v-if="ifBase === false" style="position:relative;padding-bottom: 60px;min-height:740px;">
                        <div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading2">{{$t('netnew.jzz')}}...</div>
                        <table class="table table-bordered general-table">
                            <thead>
                            <tr>
                                <!--<th class="check_box"></th>-->
                                <th>{{$t('netnew.Status')}}</th>
                                <th>{{$t('netnew.strategyName')}}</th>
                                <th>{{$t('netnew.Price')}}</th>
                                <!--<th>Use Count</th>-->
                                <th>{{$t('netnew.createday')}}</th>
                                <th>{{$t('netnew.ExpireDate')}}</th>
                                <th>{{$t('netnew.Actions')}}</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr class="tr_white" v-for="(list,index) in sdList">
                                <!--<td class="check_box"><input type="checkbox" v-model="selectArr" :value="index"></td>-->
                                <td>
                                    <a v-bind:class="{'label-primary':list.Status==1,'label-primary2':list.Status!=1}">{{list.Status|strategyStatus}}</a>
                                </td>
                                <td v-show="$i18n.locale!='zh-CN'" >{{list.Name}}</td>
                                <td v-show="$i18n.locale=='zh-CN'">{{list.LocalName}}</td>
                                <td>{{list.UnitPrice}} NET</td>
                                <!--<td>{{list.UseCount}}</td>-->
                                <td>{{list.BuyTime|time}}</td>
                                <td>{{list.ExpireDate|time}}</td>
                                <td>
                                    <div class="action_item" href="#strategyModal" data-toggle="modal" @click="toRenew(list,2)">{{$t('netnew.xufei')}}</div><br/>
                                    <div class="action_item" @click="changeSubscribe(list.Id)" v-show="list.AutoRenew">{{$t('netnew.Unsubscribe')}}</div>
                                    <div class="action_item" @click="changeSubscribe(list.Id)" v-show="!list.AutoRenew">{{$t('netnew.Resubscribe')}}</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="alert alert-warning fade in" v-show="sdList.length==0 && !ifLoading2">
                            <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                            <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                            <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
                        </div>
                        <div class="pigna" v-if="sdList.length>0" style="width: 100%;text-align: center;position:absolute;bottom:4px;left:0;right:0">
                            <paginate v-model="CurrentPage2" :page-count="perpage2" :click-handler="withDrawRecord2" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
                            </paginate>
                        </div>
                    </div>
                </section>
                <section>
                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="strategyModal" class="modal fade" style="z-index: 5001;">
						<button type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>
						<div class="modal-dialog" >
							<div class="modal-content login-box">
								<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
									<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.xufei')}}</span>
								</div>
								<div style="padding-left: 57px;padding-right: 57px;">
									<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
										<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
											<span style="font-size:16px;color: #718EBD;">{{$t('market.theNameMarket')}}</span>
										</div>
										<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;margin-bottom: 15px;">
											<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale!='zh-CN'" >{{renewParams.Name}}</span>
											<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale=='zh-CN'">{{renewParams.LocalName}}</span>
										</div>
									</div>
									<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
										<div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
											<span style="font-size:16px;color: #718EBD;"> {{$t('market.Numberdays')}} </span>
										</div>
										<div class="lg-width" style="width: 74%;margin-top: 30px;text-align: left;margin-left: 2%;">
											<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aMonth')}}</a>
											<a class="pair-time" style="margin-left: 60px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.season')}}</a>
											<a class="pair-time" style="margin-left: 60px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
										</div>
									</div>
									<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
										<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
											<span style="font-size:16px;color: #718EBD;">{{$t('market.balance')}}</span>
										</div>
										<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;">
											<div>
												<span style="font-size: 16px;color: #FFFFFF;margin-right: 8px;">{{netValue}}</span>
												<span style="font-size:16px;color:  #718EBD;">NET</span>
											</div>
										</div>
									</div>
								</div>
								<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;border-top:1px solid #718EBD40 ;">
									<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;margin-left: 57px;">{{renewParams.pay}}</span>
									<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
									<button class="card-btm"  style="position: relative;float: right;" @click="startRenew" :disabled="isloading">
										{{$t('market.confirm')}}
									</button>
								</div>
							</div>
						</div>
					</div>
                </section>
            </div>
        </div>
    </section>
</template>

<script>
    import { getRobotInfo, getUserInfo,getWarehouse,getMyStrategy, getMyDecision, changeSubscribe,strategyRenew,decisionRenew,baseStrategyList,decisionStrategyList} from '../api/api';

    export default {
        data() {
            return {
                ifLoading1:true,
                ifLoading2:true,
                CurrentPage1: 1,
                perpage1: 1,//总页数
                CurrentPage2: 1,
                perpage2: 1,//总页数
                ifBase: true,
                selectArr: [],
                cptList: [],
                sdList:[],
                first: 0,
                isloading:false,
                renewParams:{},
                day_type:"30day",
                netValue:0,
                pairSelected:1,
                buyInfo:{},
                ifstrategy:1,
                baseStragyParams:{page:1,size:10},
                decisionParams: {page:1,size:10}
            }
        },
        mounted() {
            this.getuseInfo();
        },
        methods: {
            getuseInfo() {
                getUserInfo(this.empty).then(data => {
                    if (data.success == 0) {
                        this.baseStragyParams.user_id = data.data.userId;
                        this.decisionParams.user_id = data.data.userId;
                        this.netValue=data.data.netValue;
                        this.getWarehouse();
                        this.getDecision();
                    } else {
                        this.$toast.center(data.message);
                    }
                });
            },
            toRenew(val,id){
				this.renewParams=val;
				this.ifstrategy=id;
				this.choseTime(1);
			},
			choseTime(id) {
                this.pairSelected = id;
                if(id=='1'){
                	this.renewParams.pay=this.renewParams.UnitPrice*30
                	this.day_type="30day";
                }else if(id=='2'){
                	this.renewParams.pay=this.renewParams.UnitPrice*90
                	this.day_type="90day";
                }else if(id=='3'){
                	this.renewParams.pay=this.renewParams.UnitPrice*365
                	this.day_type="year";
                }
            },
            startRenew(){
				var params={}
				params.id=this.renewParams.Id
				params.day_type=this.day_type;
				if(this.ifstrategy==1){
					this.isloading=true;
					strategyRenew(params).then(data => {
						this.isloading=false;
						if(data.code == 200) {
							if(this.$i18n.locale== 'zh-CN'){
								this.$toast.center(this.$t('netnew.xfSuccess'));
							}else{
								this.$toast.center('Renewal of success');
							}
	                        $(".close").click();
	                        this.getuseInfo();
						} else {
							this.$toast.center(this.$t('msg.msg'+data.code));

						}
					});
				}else{
					decisionRenew(params).then(data => {
						if(data.code == 200) {
							if(this.$i18n.locale== 'zh-CN'){
								this.$toast.center(this.$t('netnew.xfSuccess'));
							}else{
								this.$toast.center('Renewal of success');
							}
	                        $(".close").click();
	                        this.getuseInfo();
						} else {
							this.$toast.center(this.$t('msg.msg'+data.code));

						}
					});
				}

			},
			getWarehouse(){//基础策略列表
                this.ifLoading1 = true
                baseStrategyList(this.baseStragyParams).then(res => {
					if(res.code == 200) {
					    this.ifLoading1 = false
                        if(res.data.data==null){
                            this.CurrentPage1 = 1
                            this.perpage1 = 0
                            this.cptList=[];
                        }else{
                            this.CurrentPage1 = res.data.page
                            this.perpage1 = res.data.total_page
                            this.cptList=res.data.data;
                        }
					} else {
                        this.ifLoading1 = false
						this.$toast.center(this.$t('msg.msg'+res.code));

					}
				});
			},
            withDrawRecord1(val) {//基础策略页码改变
                this.baseStragyParams.page = val
                this.getWarehouse()
            },
			changeSubscribe(val){
				var params={}
				params.id=val
				changeSubscribe(params).then(data => {
					if(data.code == 200) {
						this.getWarehouse();
						this.getDecision();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
			getDecision(){//策略决策列表
                this.ifLoading2 = true
                decisionStrategyList(this.decisionParams).then(res => {
					if(res.code == 200) {
                        this.ifLoading2 = false
                        if(res.data.data==null){
                            this.CurrentPage2 = 1
                            this.perpage2 = 0
                            this.sdList=[];
                        }else{
                            this.CurrentPage2 = res.data.page
                            this.perpage2 = res.data.total_page
                            this.sdList=res.data.data;
                        }
					} else {
                        this.ifLoading2 = false
						this.$toast.center(this.$t('msg.msg'+res.code));

					}
				});
			},
            withDrawRecord2(val) {//策略决策页码改变
                this.decisionParams.page = val
                this.getDecision()
            },
            selectAll(event) {
                var _this = this;
                console.log(event.currentTarget)
                if (!event.currentTarget.checked) {
                    this.selectArr = [];
                } else { //实现全选
                    _this.selectArr = [];
                    _this.cptList.forEach(function (item, i) {
                        _this.selectArr.push(i);
                    });
                }
            },
            cretaUm(){
				this.$router.push('/robot/createUnit')
			}

        }
    }
</script>

<style scoped>
table{
    margin-top:0!important;
}
.strategy_sub_tit{
    margin-bottom:0;
    padding-left:40px;
}
.strategy_sub_tit>li{
    height:50px;
    float:left;
    margin-right:30px;
    padding:5px 16px 0;
    cursor: pointer;
    color:#718EBD;
    font-size:16px;
}
.strategy_sub_tit .sub_tit_active{
    color:#fff;
    background: url("../assets/img/tab_bg.png") no-repeat center bottom;
    background-size: 100% 100%;
}
.mail-list{
    /*background: url("../assets/img/robotbox@2x.png") no-repeat;*/
    background-size: cover;
    min-height: 897px;
    position:relative;
    padding-bottom: 50px;
}
.mail-list .table > tbody > tr > td:last-child{
    padding-top: 0!important;
    padding-bottom: 0!important;
}
.pigna{
    padding:30px 0;
}
</style>
