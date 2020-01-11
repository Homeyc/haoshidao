<template>
    <section class="mail-list component-wrap">
        <div class="lg-row robot-box">
            <div class="overview_box component-container">
                <section style="margin-top:30px;">
                    <h2 class="overview_title" style="font-weight: 500;">
                        {{$t('netnew.MyRobotSide7')}}
                    </h2>
                    <ul class="component_sub_tit clearfix">
                        <li :class="{'sub_tit_active': ifRobtComp === true}" @click="ifRobtComp = true">{{$t('netnew.marketzj')}}</li>
                        <li :class="{'sub_tit_active': ifRobtComp === false}" @click="ifRobtComp = false" style="margin-right:0;">{{$t('netnew.myUnitRobot')}}</li>
                        <li @click="cretaUm"><span class="create_unitrobt_btn">{{$t('netnew.createUb')}}</span></li>
                    </ul>
                    <!--组件仓库-->
                    <div v-if="ifRobtComp === true" class="compStor-wrap" style="position:relative;padding-bottom: 60px;min-height:740px;">
                        <div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading1">{{$t('netnew.jzz')}}...</div>
                        <table class="table table-bordered general-table">
                            <thead>
                                <tr>
                                    <th style="width:70px;">{{$t('netnew.Status')}}</th>
                                    <th>{{$t('netnew.ComponentName')}}</th>
                                    <th>{{$t('netnew.ComponentType')}}</th>
                                    <th>{{$t('netnew.Price')}}</th>
                                    <!--<th>Use Count</th>-->
                                    <th>{{$t('netnew.createday')}}</th>
                                    <th>{{$t('netnew.ExpireDate')}}</th>
                                    <th>{{$t('netnew.Actions')}}</th>
                                </tr>
                            </thead>
                            <tbody>

                            <tr class="tr_white" v-for="(list,index) in cptList">
                                <td style="">
                                    <a v-bind:class="{'label-primary':list.Status==1,'label-primary2':list.Status!=1}">{{list.Status|cptStatus}}</a>
                                </td>
                                <td v-show="$i18n.locale!='zh-CN'">{{list.ComponentName}}</td>
                                <td v-show="$i18n.locale=='zh-CN'">{{list.ComponentLocalName}}</td>
                                <td v-show="$i18n.locale!='zh-CN'" >{{list.ComponentType}}</td>
                                <td v-show="$i18n.locale=='zh-CN'">{{list.ComponentLocalType}}</td>
                                <td>{{list.Price}} NET</td>
                                <!--<td>{{list.UseCount}}</td>-->
                                <td>{{list.CreateDate|time}}</td>
                                <td>{{list.ExpireDate|time}}</td>
                                <td style="padding:0;">
                                	<div class="action_item" href="#componentModal" data-toggle="modal" @click="toRenew(list)">{{$t('netnew.xufei')}}</div>
                                   <div class="action_item" @click="changeSubscribe(list.ComponentId)" v-show="list.AutoRenew">{{$t('netnew.Unsubscribe')}}</div>
                                   <div class="action_item" @click="changeSubscribe(list.ComponentId)" v-show="!list.AutoRenew">{{$t('netnew.Resubscribe')}}</div>

                                </td>
                            </tr>


                            </tbody>
                        </table>
                        <div class="alert alert-warning fade in" v-show="cptList.length==0 && !ifLoading1">
	                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
	                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
	                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
	                    </div>
                        <!--组件仓库  分页-->
                        <div class="pigna" v-if="cptList.length>0" style="width: 100%;text-align: center;position:absolute;bottom:4px;left:0;right:0">
                            <paginate v-model="CurrentPage1" :page-count="perpage1" :click-handler="withDrawRecord1" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
                            </paginate>
                        </div>
                    </div>
                    <!--我的单元机器人  列表-->
                    <div v-if="ifRobtComp === false" style="position:relative;padding-bottom: 60px;min-height:740px;">
                        <div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading2">{{$t('netnew.jzz')}}...</div>
                        <table class="table table-bordered general-table">
                            <thead>
                            <tr>
                                <th style="width:88px;padding-left:24px;">{{$t('netnew.Status')}}</th>
                                <th>{{$t('netnew.UnitRobotName')}}</th>
                                <th>{{$t('netnew.TradePair')}}</th>
                                <th>{{$t('netnew.TradeType')}}</th>
                                <th>{{$t('netnew.StandardCoin')}}</th>
                                <th>{{$t('netnew.OperationFrequency')}}</th>
                                <th>{{$t('netnew.createday')}}</th>
                                <th>{{$t('netnew.ExpireDate')}}</th>
                                <th style="width:90px;">{{$t('netnew.Actions')}}</th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr class="tr_white" v-for="(list,index) in myUnitList">
                                <td style="padding-left:24px;">
                                    <a v-bind:class="{'label-primary':list.status==1,'label-primary2':list.status!=1}">{{list.status | murStatus}}</a>
                                </td>
                                <td>{{list.name}}</td>
                                <td>{{list.pair}}</td>
                                <td>{{list.trade_type | tradeType}}</td>
                                <td>{{list.base_currency}}</td>
                                <td>{{list.frequency | operatfrequency}}</td>
                                <td>{{list.create_time|time}}</td>
                                <td>{{list.expire_date|time}}</td>
                                <td>
                                    <div class="action_item" style="margin: 0;padding:0 8px;" @click="freshUnitRbt(list.id)" v-show="!list.status">{{$t('net.refresh')}}</div>
                                    <div class="action_item" style="margin: 0;padding:0 8px;" @click="goEdit(list)" v-show="list.status">{{$t('net.detail')}}</div>
                                    <!--<div class="action_item" style="margin: 0;padding:0 8px;" @click="goEdit(list.id)" v-show="list.status">{{$t('netnew.Edit')}}</div>-->
                                    <div class="action_item" style="margin: 0;padding:0 8px;" @click="urbtDetele(list.id)">{{$t('netnew.Delete')}}</div>
                                    <!--<div class="action_item" @click="urbtRenew(list.Id)" v-show="list.AutoRenew">{{$t('netnew.Unsubscribe')}}</div>
                                    <div class="action_item" @click="urbtRenew(list.Id)" v-show="!list.AutoRenew">{{$t('netnew.Resubscribe')}}</div>-->

                                </td>
                            </tr>


                            </tbody>
                        </table>
                        <div class="alert alert-warning fade in" v-show="myUnitList.length==0 && !ifLoading2">
                            <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                            <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                            <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
                        </div>
                        <!--我的单元机器人  分页-->
                        <div class="pigna" v-if="myUnitList.length>0" style="width: 100%;text-align: center;position:absolute;bottom:24px;left:0;right:0">
                            <paginate v-model="CurrentPage2" :page-count="perpage2" :click-handler="withDrawRecord2" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
                            </paginate>
                        </div>
                    </div>
                    <div class="bottom_box">
                        <!--<input type="checkbox" @click="selectAll"><label class="select_all">Select all</label>-->
                        <!--<button type="submit" class="btn btn-primary run_all_btn" @click="cretaUm" style="width: 145px !important;">Create UnitRobot</button>-->
                    </div>
                </section>
				<section class="">
                   <!-- <h2 class="overview_title">
                        {{$t('netnew.myUnitRobot')}}
                    </h2>-->

                    <div class="bottom_box">
                        <!--<input type="checkbox" @click="selectAll"><label class="select_all">Select all</label>-->
                        <!--<button type="submit" class="btn btn-primary run_all_btn" @click="cretaUm" style="width: 145px !important;">Create UnitRobot</button>-->
                    </div>

                    <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="componentModal" class="modal fade" style="z-index: 5001;">
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
											<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale!='zh-CN'" >{{renewParams.ComponentName}}</span>
											<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale=='zh-CN'">{{renewParams.ComponentLocalName}}</span>

										</div>
									</div>
									<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
										<div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
											<span style="font-size:16px;color: #718EBD;"> {{$t('market.Numberdays')}} </span>
										</div>
										<div class="lg-width" style="width: 74%;margin-top: 30px;text-align: left;margin-left: 2%;">
											<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aMonth')}}</a>
											<a class="pair-time" style="margin-left: 58px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.season')}}</a>
											<a class="pair-time" style="margin-left: 58px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
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
    import {getRobotInfo, getUserInfo,getWarehouse,getMyUnitRbt,changeSubscribe,freshUnitRbt,urbtRenew,urbtDetele,componentRenew,myUnitRobot,componentStoreList} from '../api/api';

    export default {
        data() {
            return {
                ifLoading1:true,
                ifLoading2:true,
                CurrentPage1: 1,
                perpage1: 1,//总页数
                CurrentPage2: 1,
                perpage2: 1,
                ifRobtComp: true,
                selectArr: [],
                cptList: [],
                myUnitList:[],
                first: 0,
                isloading:false,
                renewParams:{},
                day_type:"30day",
                netValue:0,
                pairSelected:1,
                buyInfo:{},
                unitRobotParams: {page:1,size:10},//我的单元机器人参数
                storeParams: {page:1,size:10},//组件仓库参数
                componentType:''
            }
        },
        mounted() {
            this.componentType = localStorage.getItem('compSelected');
            if( this.componentType  == 'unitRbt') {
                this.ifRobtComp = false;
                localStorage.removeItem('compSelected')
            }
            this.getuseInfo();
        },
        methods: {
            getuseInfo() {
                getUserInfo(this.empty).then(data => {
                    if (data.success == 0) {
                        this.storeParams.user_id = data.data.userId;
                        this.unitRobotParams.user_id=data.data.userId;
                        this.netValue=data.data.netValue;
                        this.getWarehouse();
                        this.getMyUnitRbt();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            choseTime(id) {
                this.pairSelected = id;
                if(id=='1'){
                	this.renewParams.pay=this.renewParams.Price*30
                	this.day_type="30day";
                }else if(id=='2'){
                	this.renewParams.pay=this.renewParams.Price*90
                	this.day_type="90day";
                }else if(id=='3'){
                	this.renewParams.pay=this.renewParams.Price*365
                	this.day_type="year";
                }
            },
			getWarehouse(){//组件仓库列表
                this.cptList=[];
                this.ifLoading1 = true
                componentStoreList(this.storeParams).then(res => {
					if(res.code == 200) {
					    this.ifLoading1 = false
                        if(res.data.data == null) {
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
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});
			},
			toRenew(val){
				this.renewParams=val;
				this.choseTime(1);
			},

			urbtDetele(val){//自建单元机器人删除


				swal({
				  title: this.$t('netnew.ays')+"?",
				  text: this.$t('netnew.DeleteYourURobot')+"?",
				  buttons: {
					    cancel: this.$t('login.tips3'),
					    catch: {
					      text: this.$t('login.tips2'),
					    },
					  },
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {
				  	var params={}
						params.id=val
						urbtDetele(params).then(data => {
							if(data.code == 200) {
								this.$toast.center(this.$t('login.delete'));
								this.getMyUnitRbt();
							} else {
								this.$toast.center(this.$t('msg.msg'+data.code));

							}
						});

				  }
				})



			},
			startRenew(){//组件续费
				var params={}
				params.id=this.renewParams.ComponentId
				params.day_type=this.day_type;
				this.isloading=true;
				componentRenew(params).then(data => {
					this.isloading=false;
					if(data.code == 200) {
						 this.$toast.center(this.$t('netnew.xfSuccess'))
                        $(".close").click();
                        this.getuseInfo();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
			freshUnitRbt(val){//刷新单元机器人过期时间
            	var params={};
            	params.id=val;
            	freshUnitRbt(params).then(data => {
                    if (data.code == 200) {
//                      console.log(data);
						this.$toast.center(this.$t('msg.msgsucces'));
                        this.getMyUnitRbt();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
			getMyUnitRbt(){//我的单元机器人列表
                this.myUnitList=[];
                this.ifLoading2 = true
                myUnitRobot(this.unitRobotParams).then(res => {
                if(res.code == 200) {
                    this.ifLoading2 = false
                    if(res.data.data == null) {
                        this.CurrentPage2 = 1
                        this.perpage2 = 0
                        this.myUnitList=[];
                    }else{
                        this.CurrentPage2 = res.data.page
                        this.perpage2 = res.data.total_page
                        this.myUnitList=res.data.data;
                    }
                } else {
                    this.ifLoading2 = false
                    this.myUnitList=[];
                    this.$toast.center(this.$t('msg.msg'+data.code));
                }
				});
			},
			changeSubscribe(val){//取消/开启自动订阅
				var params={}
				params.id=val
				changeSubscribe(params).then(data => {
					if(data.code == 200) {
						this.getWarehouse();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
			urbtRenew(val){
				var params={}
				params.id=val
				urbtRenew(params).then(data => {
					if(data.code == 200) {
						this.getMyUnitRbt();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
			toDetail(val){
				this.$router.push({
                    name:"createUnit",
                    params:{
                        name:"createUnit",
                        id:val,
                        type:'view'
                    }
                })
			},
			goEdit(val){
				localStorage.setItem('unitInfo',JSON.stringify(val))
				this.$router.push('/robot/editUnit');
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
				this.$router.push({
                    name:"createUnit",
                    params:{
                        name:"createUnit",
                        type:'create'
                    }
                })
			},
            withDrawRecord1(val) {//组件仓库页码改变
                this.storeParams.page = val
                this.getWarehouse()
            },
            withDrawRecord2(val) {//我的单元机器人页码改变
                this.unitRobotParams.page = val
                this.getMyUnitRbt()
            }
        }
    }
</script>

<style>

    .overview_box {
       /* font-family: SFProDisplay-Bold !important;*/

        color: #000000;
        letter-spacing: 0;
    }

    .padding_left {
        padding-left: 34px;
    }


    .instance_box {

    }

    .general-table thead {
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;

        background: none;
        border-radius: 1px;
    }

    .table-bordered {
        border: none !important;
        table-layout: fixed;
    }

    .table-bordered thead {
        /*height: 80px !important;*/

        font-family: SFProText-Medium;
        font-size: 14px;
        color: #718EBD;
        letter-spacing: 0;
    }

    .table-bordered thead tr th {
        border-bottom-width: 0 !important;
        border: none !important;

        width: 64px;
        vertical-align: middle !important;

        text-align: center !important;


        /*padding-bottom: 28px !important;*/

    }

    .table-bordered tbody tr td {
        border-bottom-width: 0 !important;
        border: none !important;
        font-size: 14px;
        color: #718EBD;
        letter-spacing: 0;
        vertical-align: middle !important;
        text-align: center !important;
        word-break: break-all;

    }

    .check_box {
        width: 10px !important;
    }

    .tr_white {
        /*background: #FFFFFF;*/
        border-radius: 1px;
    }

    .tr_grey {
        background: #F8F8F8;
        box-shadow: 0 1px 0 0 #DBDEDE;
        border-radius: 1px;
    }

    .running_btn {
        background: #12CD2E;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF !important;
        letter-spacing: 0;

    }

    .pause_btn {
        background: #909499;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF !important;
        letter-spacing: 0;
    }
    .stop_btn {
        background: #47CEFF;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF !important;
        letter-spacing: 0;
    }
    .overdue_btn {
        background: #3158E4;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
    }

    .error_btn {
        background-color: #FF3232;
        border-radius: 4px;
        font-size: 14px;
        color: #FFFFFF !important;
        letter-spacing: 0;
    }







    .alert-warning{
    	color: #7FCEFF52 !important;
	    background: none !important;
	    border:none !important;
	    text-align: center;
	    padding-top: 103px !important;
	    padding-bottom: 250px !important;
    }
    .component_sub_tit{
        margin-bottom:0;
        padding-left: 40px;
    }
    .component_sub_tit>li{
        height:50px;
        float:left;
        margin-right:30px;
        padding:5px 16px 0;
        cursor: pointer;
        color:#718EBD;
        font-size:16px;
    }
   .component_sub_tit .sub_tit_active{
       color:#fff;
       background: url("../assets/img/tab_bg.png") no-repeat center bottom;
       background-size: 100% 100%;
    }
    .create_unitrobt_btn{
        display: inline-block;
        background: url("../assets/img/zcbtn@2x.png") no-repeat;
        background-size: 100% 100%;
       /* width:200px;*/
        height:45px;
        text-align: center;
        line-height: 45px;
        color:#fff;
        font-size:14px;
        cursor: pointer;
        padding:0 16px;
        margin-top:-20px;
    }
    .component-container table{
        margin-top:0!important;
    }
    .action_item{
        color:#718EBD
    }
    .component-wrap{
        /*background: url("../assets/img/robotbox@2x.png") no-repeat;*/
        background-size: cover;
        min-height: 897px;
        padding-bottom: 50px;
    }
    .compStor-wrap .action_item{
        display: block;
    }
    .compStor-wrap .table > tbody > tr > td:last-child{
        padding-top: 0!important;
        padding-bottom: 0!important;
    }
    .pigna{
        padding:30px 0;
    }
</style>
