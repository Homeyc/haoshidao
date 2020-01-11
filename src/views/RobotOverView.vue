<template>
	<div class="lg-row" >
		<h2 style="color: #fff;margin-top: 0px;font-size: 25px;font-weight: 500;">
           {{$t('netnew.MyRobotSide3')}}
        </h2>
        <div class="lg-width" style="width: 100%;color: #fff;font-size: 18px;padding-top: 15px;padding-bottom: 15px;">
        	{{$t('netnew.zjgl')}}
        </div>
		<!--资金管理  start-->
        <div class="lg-width" style="width: 67%;" v-if="jzz==false && ovbList.length>0">
        	<div class="lg-width ovbv-tit" style="width: 10%;">{{$t('netnew.bz')}}</div>
        	<div class="lg-width ovbv-tit" style="width: 18%;">{{$t('netnew.ljtr')}}</div>
        	<div class="lg-width ovbv-tit" style="width: 18%;">{{$t('netnew.ljsy')}}</div>
        	<div class="lg-width ovbv-tit" style="width: 18%;">{{$t('netnew.jyszh')}}</div>
        	<div class="lg-width ovbv-tit" style="width: 18%;">{{$t('netnew.jysje')}}</div>
        	<div class="lg-width ovbv-tit" style="width: 18%;">{{$t('netnew.jqrzy')}}</div>
        	<template v-for="item in ovbList"><!--资金管理首次进入两条数据-->
        		<div class="lg-width" style="width: 100%;border-bottom: 1px rgba(255,255,255,0.1) solid;">
	        		<div class="lg-width" style="width:46%;">
	        			<div class="lg-width ovbv-text" style="width:21.73%;">
	        				{{item.coin_name}}
	        			</div>
	        			<div class="lg-width ovbv-text" style="width:39.13%;">
	        				{{item.cost_amount|tofix4}}
	        			</div>
	        			<div class="lg-width ovbv-text" style="width:39.13%;">
	        				<img src="../assets/img/upflag@2x.png" v-show="item.return_amount>0">
	        				<img src="../assets/img/downflag@2x.png" v-show="item.return_amount<0">
	        				{{item.return_amount|tofix4}}
	        			</div>
	        		</div>
	        		<div class="lg-width" style="width:54%;">
	        			<template v-for="items in item.balance">
	        				<div class="lg-width ovbv-text" style="width:33.33%;">
	        					{{items.account_name}}
	        				</div>
	        				<div class="lg-width ovbv-text" style="width:33.33%;">
	        					{{items.account_amount|tofix4}}
	        				</div>
	        				<div class="lg-width ovbv-text" style="width:33.33%;">
	        					{{items.robot_amount|tofix4}}
	        				</div>
	        			</template>
	        		</div>
	        	</div>
        	</template>
        	<template v-for="item in ovmList"><!--资金管理点击‘更多’展示数据-->
        		<div class="lg-width" v-show="allshow" style="width: 100%;border-bottom: 1px rgba(255,255,255,0.1) solid;">
	        		<div class="lg-width" style="width:46%;">
	        			<div class="lg-width ovbv-text" style="width:21.73%;">
	        				{{item.coin_name}}
	        			</div>
	        			<div class="lg-width ovbv-text" style="width:39.13%;">
	        				{{item.cost_amount|tofix4}}
	        			</div>
	        			<div class="lg-width ovbv-text" style="width:39.13%;">
	        				<img src="../assets/img/upflag@2x.png" v-show="item.return_amount>0">
	        				<img src="../assets/img/downflag@2x.png" v-show="item.return_amount<0">
	        				{{item.return_amount|tofix4}}
	        			</div>
	        		</div>
	        		<div class="lg-width" style="width:54%;">
	        			<template v-for="items in item.balance">
	        				<div class="lg-width ovbv-text" style="width:33.33%;">
	        					{{items.account_name}}
	        				</div>
	        				<div class="lg-width ovbv-text" style="width:33.33%;">
	        					{{items.account_amount|tofix4}}
	        				</div>
	        				<div class="lg-width ovbv-text" style="width:33.33%;">
	        					{{items.robot_amount|tofix4}}
	        				</div>
	        			</template>
	        		</div>
	        	</div>
        	</template>
        	<div class="lg-width" style="color: #718EBD;margin-top: 15px;cursor: pointer;" v-show="!allshow" @click="changeAllshow">{{$t('netnew.zkgd')}}<img src="../assets/img/arrow@2x.png"></div>
        	<div class="lg-width" style="color: #718EBD;margin-top: 10px;margin-bottom:5px;cursor: pointer;" v-show="allshow" @click="changeAllshow">{{$t('netnew.yc')}}<img src="../assets/img/arrow@2x.png" class="tran-180"></div>
        </div>
		<!--资金管理  END-->
        <div class="lg-width" style="width: 67%;margin-top: 60px;margin-bottom: 60px;" v-show="ovbList.length==0&&jzz==false" ><!--资金管理数据为空   ===》去市场购买机器人按钮-->
        	<button class="btn rbdbtn btn-md" type="button" style="position: relative;font-size: 14px;" @click="goMarket" >
				{{$t('netnew.qscgmjqr')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
			</button>
        </div>
        <div class="lg-width" style="width: 67%;margin-top: 60px;margin-bottom: 60px;" v-show="jzz" >
        	<div class="lg-width" style="width: 100%;color: #718EBD;text-align: center;">{{$t('netnew.jzz')}}...</div>
    	</div>
        <div class="lg-width" style="width: 33%;"><!--右侧环形画图-->
        	<div  id="container" style="height: 225px;width: 100%;"></div>
        </div>
         <!--机器人管理   start-->
		<div class="lg-width" style="width: 100%;color: #fff;font-size: 18px;padding-bottom: 15px;">
        	{{$t('netnew.jqrgl')}}
        </div>
		<div class="lg-width overview_chartbox" style="width: 100%;margin-bottom: 200px;">
			<h2 style="font-size: 20px;margin-left: 25px;color: #fff;font-weight: 500;">
           		{{$t('netnew.rbtChart')}}
	        </h2>
			<!--机器人曲线收益表   画图  start-->
			<div  id="container2" style="height: 400px;width: 100%;"></div>
            <!--机器人实例列表  start-->
			<div class="">
                <table class="table table-bordered general-table">
                    <thead>
                    <tr>
                        <!--<th>{{$t('netnew.InstanceId')}}</th>-->
                        <th>{{$t('netnew.Status')}}</th>
                        <th>{{$t('netnew.RobotName')}}</th>
                        <th>{{$t('net.tradetype')}}</th>
                        <th>{{$t('netnew.StandardCoin')}}</th>
                        <th>{{$t('netnew.ljsyl')}}</th>
                        <th style="width:70px;">{{$t('market.Averagereturn')}}</th>
                        <th>{{$t('netnew.RunningDays')}}</th>
                        <th style="width:70px;">{{$t('netnew.ExpireDate')}}</th>
                        <!--<th>{{$t('netnew.exchangeA')}}</th>-->
                        <!--<th>{{$t('netnew.AccountAmount')}}</th>-->
                        <th>{{$t('netnew.NumberofOrders')}}</th>

                        <th style="width: 6%;">{{$t('netnew.Actions')}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(list,index) in robotList">
                        <!--<td>{{list.SerialNo}}</td>-->
                        <td>
                            <label class="external-event label ui-draggable "
                                   v-bind:class="{'label-success':list.Status==1,'label-primary':list.Status==2,'label-default':list.Status==3,'label-warning':list.Status==4,'label-danger':list.Status==99}"
                                   style="padding-top:8px ;padding-bottom: 8px;">
                                {{list.Status|robotStatus}}
                            </label>
                        </td>
                        <td v-show="$i18n.locale!='zh-CN'" >
                        	{{list.RobotName}}<br>
                        	<span style="color: #718EBD;">{{list.ExchangeAccountName}}</span>
                        </td>
                        <td v-show="$i18n.locale=='zh-CN'">
                        	{{list.RobotLocalName}}<br>
                        	<span style="color: #718EBD;">{{list.ExchangeAccountName}}</span>
                        </td>
                        <td>{{list.TradeType|tradeType}}</td>
                        <td>{{list.StandardCoin}}</td>
                        <td>
                        	<img src="../assets/img/upflag@2x.png" v-show="list.CumprodReturn>0">
	        				<img src="../assets/img/downflag@2x.png" v-show="list.CumprodReturn<0">
                        	{{list.LastReturnPercent|fix2}}%
                        </td>
                        <td>{{list.AvgTickReturn|fix2}}%</td>
                        <td>{{list.RunDays}}</td>
                        <td>
                        	<img src="../assets/img/clock@2x.png">
                        	{{list.ExpireDate|time}}
                        </td>
                        <!--<td>{{list.ExchangeAccountName}}</td>-->
                        <!--<td>{{list.Amount|tofix4}}</td>-->
                        <td v-show="list.Status==3">-</td>

                        <td>{{list.TotalTickCount}}</td>

                        <td style="color: #718EBD !important;">
                        	<div class="action_item" @click="instancePause(list.InstanceId)" v-show="list.Status==1">{{$t('net.pause')}}</div>
                        	<div class="action_item" @click="instanceRun(list.InstanceId)" v-show="list.Status==2||list.Status==99">{{$t('net.run')}}</div><!--暂停，出错===》可以运行-->
                        	<!--<div class="action_item" @click="freshInstance(list.InstanceId)" v-show="list.Status==4||list.Status==1">{{$t('net.refresh')}}</div>-->
                        	<div class="action_item" @click="stopInstance(list.InstanceId)" v-show="list.Status!=3">{{$t('net.stops')}}</div><!--没有停止-->
                        	<div class="action_item" @click="initInstance(list.InstanceId)" v-show="list.Status==3&&list.ReStartFlag==false">{{$t('netnew.restart')}}</div>
                            <div class="action_item" @click="goDetail(list)">{{$t('net.detail')}}</div>
                            <div class="action_item" href="#instanceModal" data-toggle="modal" v-show="list.ReStartFlag==false" @click="toRenew(list)">{{$t('netnew.xufei')}}</div>
                            <!--<div class="action_item" href="#instanceModal" data-toggle="modal" @click="addlimit(list)"  v-show="list.Status==1||list.Status==2">{{$t('netnew.zengchi')}}</div>-->
                            <div class="action_item" @click="deleteInstance(list.InstanceId)" v-show="list.Status==3">{{$t('netnew.Delete')}}</div>
                            <!--<div class="action_item" @click="changeItSubscribe(list.InstanceId)" v-show="list.AutoRenew">{{$t('netnew.Unsubscribe')}}</div>
                            <div class="action_item" @click="changeItSubscribe(list.InstanceId)" v-show="!list.AutoRenew">{{$t('netnew.Resubscribe')}}</div>-->
                        </td>
                    </tr>

                    </tbody>
                </table>
                <div class="alert alert-warning fade in" v-show="robotList.length==0">
                    <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                    <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                    <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
                </div>
                <div class="pigna" v-show="robotList.length>0" style="width: auto;text-align: center;">
					<paginate v-model="pageNum" :page-count="totalPage" :click-handler="getOvri" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
					</paginate>
				</div>
            </div>
            <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="instanceModal" class="modal fade" style="z-index: 5001;">
				<button id="close" type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-dialog">
					<div class="modal-content login-box">
						<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
							<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.xufei')}}</span>
						</div>
						<div style="padding-left: 45px;padding-right: 45px;">
							<div style="display: table;width: 100%;border-bottom:1px solid #718EBD70;">
								<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
									<span style="font-size:16px;color: #718EBD;">{{$t('market.theNameMarket')}}</span>
								</div>
								<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;margin-bottom: 15px;">
									<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale!='zh-CN'" >{{renewParams.RobotName}}</span>
									<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale=='zh-CN'">{{renewParams.RobotLocalName}}</span>

								</div>
							</div>
							<div style="display: table;width: 100%;">
								<div class="lg-width" style="width: 24%;margin-top: 20px;text-align: left;margin-bottom: 15px;">
									<span style="font-size:16px;color: #718EBD;"> {{$t('market.Numberdays')}} </span>
								</div>
								<div class="lg-width" style="width: 74%;margin-top: 20px;text-align: left;">
									<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aWeek')}}</a>
									<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.aMonth')}}</a>
									<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
									<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==4}" @click="choseTime(4)">{{$t('netnew.bxf')}}</a>
								</div>
							</div>
							<div style="margin-top: 20px;text-align: left;margin-bottom: 15px;">
								<span v-show="$i18n.locale=='zh-CN'" style="font-size:16px;color: #718EBD;">增加份额</span>
								<span v-show="$i18n.locale=='en-US'"  style="font-size:16px;color: #718EBD;">Increase share</span>
								<span v-show="$i18n.locale=='ko'"  style="font-size:16px;color: #718EBD;">배당을 증식하다</span>
							</div>
							<div style="display: table;width: 100%;border-bottom:1px solid #718EBD70;">
								<div class="lg-width clearfix" style="width: 100%;text-align: left;">
									<input type="number" min='0' :max="maxLimit" :placeholder="avLimit" class="form-control change-limit" v-model="addLimit" @change="getPrice"  style="border-bottom:none !important;padding: 0;text-align: left;width: 200px !important;float:left;"   />
									<span style="font-size: 16px;color: #718EBD;float: left;">×{{addlimitParams.Multiple}}{{addlimitParams.StandardCoin}}={{addlimitParams.Multiple*addLimit}}{{addlimitParams.StandardCoin}}</span>
								</div>
							</div>
							<div class="lg-width unchecked-quota" style="margin-left: 10px;margin-bottom: 8px;float: right;">{{$t('netnew.zdkyfs')}}:{{maxLimit}}</div>
							<div class="lg-width unchecked-quota" style="float: right;">{{$t('netnew.dqyyfs')}}:{{auLimit}}</div>
							<!--<div class="lg-width" v-bind:class="{'checked-quota':quotaFlag==1,'unchecked-quota':quotaFlag!=1}" style="width: 25%;" @click="choseQuota(1)">1/4</div>
							<div class="lg-width" v-bind:class="{'checked-quota':quotaFlag==2,'unchecked-quota':quotaFlag!=2}" style="width: 25%;" @click="choseQuota(2)">1/3</div>
							<div class="lg-width" v-bind:class="{'checked-quota':quotaFlag==3,'unchecked-quota':quotaFlag!=3}" style="width: 25%;" @click="choseQuota(3)">1/2</div>
							<div class="lg-width" v-bind:class="{'checked-quota':quotaFlag==4,'unchecked-quota':quotaFlag!=4}" style="width: 25%;" @click="choseQuota(4)">全部</div>-->
							<div style="display: table;width: 100%;border-bottom:1px solid #718EBD70;">
								<div class="lg-width" style="width: 20%;margin-top: 10px;text-align: left;margin-bottom: 15px;">
									<span style="font-size:16px;color: #718EBD;">{{$t('market.balance')}}</span>
								</div>
								<div class="lg-width" style="width: 75%;margin-top: 10px;text-align: left;margin-left: 5%;">
									<div>
										<span style="font-size: 16px;color: #FFFFFF;margin-right: 8px;">{{buyInfo.net_value}}</span>
										<span style="font-size:16px;color:  #718EBD;">NET</span>

									</div>

								</div>
							</div>
							<div class="lg-width" style="width:67%;margin-top: 20px;">
								<input id="auto" class="boxs" style="margin-top: -2px;" type="checkBox" @click="changeAuto" checked="checked">
								<label style="margin-left: 6px;color:#718EBD;" @click="changeAuto2">{{$t('modalbox.renewal')}}</label>
							</div>
						</div>
						<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;border-top:1px solid #718EBD40 ;">
							<span style="color: #718EBD;font-size: 16px;margin-left: 55px;">{{$t('netnew.xiaofei')}}:</span>
							<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;">{{totalPrice}}</span>
							<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
							<!--<span style="color: #718EBD;margin-left: 10px;font-size: 16px;">{{renewParams.UnitPrice}}NET份/天</span>-->
							<button class="card-btm"  style="position: relative;float: right;" @click="startRenew">
								{{$t('market.confirm')}}
							</button>
						</div>

					</div>
				</div>
			</div>

		</div>
	</div>
</template>


<script>
	import { getOverviewInfo,getUserInfo,getOverViewList,ovBalance,getOvri,getRobotInfo,toRadl,getrenewDetail,instancePause,changeItSubscribe,toAddUserLimit,instanceRun,freshInstance,stopInstance,initInstance,getBuyInfo,startRenew,getInstanceRD,toAddLimit,deleteInstance} from '../api/api';
	export default {
		name: "RobotOverView",
		props: {
			overview_icon_1: {
				type: String,
				default: require("@/assets/img/myrobot/myrobot_overview_icon1.png")
			},
			overview_icon_2: {
				type: String,
				default: require("@/assets/img/myrobot/myrobot_overview_icon2.png")
			},
			overview_icon_3: {
				type: String,
				default: require("@/assets/img/myrobot/myrobot_overview_icon3.png")
			},
			overview_icon_4: {
				type: String,
				default: require("@/assets/img/myrobot/myrobot_overview_icon4.png")
			},
			USDT: {
				type: String,
				default: require("@/assets/img/coin/USDT.png")
			},
			ETH: {
				type: String,
				default: require("@/assets/img/coin/ETH.png")
			},
			BTC: {
				type: String,
				default: require("@/assets/img/coin/BTC.png")
			},
		},
		data() {
			return {
				user_id:'',
				userType:1,
				overList:{
					robot_return_report:{}
				},
				chartList:[],
				robotList:[],
				pageNum:1,
				pageSize:5,
				totalPage:1,
				ydata:[],
				xdata:[],
				x2data:[],
				x3data:[],
				x4data:[],
				x5data:[],
				x6data:[],
				x7data:[],
				abList:[
					{
					account_name:"",
	                account_USDT:0,
	                account_ETH:0,
	                account_BTC:0,
	                used_USDT:0,
	                used_ETH:0,
	                used_BTC:0
					}
				],
				robotList:[],
				sideMenu:1,
				ovbList:[],
				ovmList:[],
				ovData:[],
				ovName:[],
				chart1data:[],
				chart2data:[],
				chart2legendData:[],
				URL1:'./static/images/coin/',
				URL2:'.png',
				getFormatter:'{b}',
				checked:true,
				allshow:false,
				selectArr: [],
                robotList: [],
                ownRobotList:[],
                addLimitPrice:0,
                addLimit:0,
                addUserLimit:0,
                rbtInfoParm: {},
                first: 0,
                renewList:[],
                instanceModal:1,
                status1:"1",
                status2:"1",
                datePay:0,
                quotaPay:0,
                renewParams:{},
                addlimitParams:{},
                adduserlimitParams:{},
                pairSelected:4,
                buyInfo:{},
                userType:1,
                quotaFlag:1,
                auto_renew:true,
                totalPrice:0,
                auLimit:0,
                avLimit:"",
                maxLimit:0,
                jzz:true,
			}
		},
		mounted() {
			this.getuseInfo();
		},
		methods: {
			openLoding() {
                this.$loading('loading...');
            },
            changeAllshow(){
            	this.allshow=!this.allshow;
            },
            closeLoading() {
                this.$loading.close();
            },
            goMarket(){
            	 this.$router.push('/markets')
            },
			getuseInfo(){
				getUserInfo(this.empty).then(data => {
	              if (data.success == 0) {
					this.user_id=data.data.userId;
					this.userType=data.data.userType;
//					this.getOverviewInfo();
					this.ovBalance();
					this.getOvri();
	              } else {
	              	this.$toast.center(data.message);
	              }
	            });
			},
			goDetail(val) {
                localStorage.setItem('robotObj', JSON.stringify(val))
                this.$router.push('/robot/instanceDetail')
            },
			getPrice(val){
	          /*	this.quotaPay=parseInt(this.renewList.lost_day)*parseInt(this.addLimit)*this.renewParams.UnitPrice;
	          	if(isNaN(this.quotaPay)){
	          		this.quotaPay=0;
	          	}
	          	this.totalPrice=this.quotaPay+this.datePay;*/
				if(val.srcElement.valueAsNumber>this.maxLimit){
					this.addLimit = this.maxLimit
				}
				var unitPrice1 = 0;
				var unitPrice2 = 0;
				var unitPrice3 = 0;
				var allFe=parseInt(this.auLimit)+parseInt(this.addLimit);//已用份数+增持份额
				if(this.renewParams.robot_grade == 'OTO'){//一级机器人
					unitPrice1 = 0.1
					unitPrice2 = 0.15
					unitPrice3 = 0.23
				}else if(this.renewParams.robot_grade == 'OTM') {//二级机器人
					unitPrice1 = 0.17
					unitPrice2 = 0.27
					unitPrice3 = 0.41
				}else if(this.renewParams.robot_grade == 'MTM') {//三级机器人
					unitPrice1 = 0.25
					unitPrice2 = 0.45
					unitPrice3 = 0.65
				}
				if(allFe<=5){
					this.quotaPay=parseInt(this.addLimit)*unitPrice1*parseInt(this.renewList.lost_day);
				}else if(allFe>5 && allFe<=10){
					if(this.auLimit<=5){
						this.quotaPay=((5 - parseInt(this.auLimit))*unitPrice1+(allFe - 5)*unitPrice2)*parseInt(this.renewList.lost_day)
					}else if(this.auLimit>5){
						this.quotaPay=parseInt(this.addLimit)*unitPrice2*parseInt(this.renewList.lost_day)
					};
				}else if(allFe>10){
					if(this.auLimit<=5){
						this.quotaPay=((5 - parseInt(this.auLimit))*unitPrice1+5*unitPrice2+(allFe - 10)*unitPrice3)*parseInt(this.renewList.lost_day)
					}else if(this.auLimit>5 && this.auLimit<=10){
						this.quotaPay=((10 - parseInt(this.addLimit))*unitPrice2+(allFe - 10)*unitPrice3)*parseInt(this.renewList.lost_day)
					}else if(this.auLimit>10){
						this.quotaPay=parseInt(this.addLimit)*unitPrice3*parseInt(this.renewList.lost_day)
					};
				}
				if(this.pairSelected == '1'){//7天
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*7
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*7
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*7
					}
				}else if(this.pairSelected == '2') {//30天
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*30
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*30
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*30
					}

				}else if(this.pairSelected == '3') {//365天
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*365
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*365
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*365
					}
				}else if(this.pairSelected == '4'){//不续费
					this.datePay=0;
				}
				if(isNaN(this.quotaPay)){
					this.quotaPay=0;
				}
				this.totalPrice=(this.quotaPay+this.datePay).toFixed(2);
            },
            choseTime(id) {
               /* this.pairSelected = id;
                var addLimit=0;
                if(this.addLimit==""){
                	addLimit=0;
                }else{
                	addLimit=this.addLimit;
                }
                if(id==1){
                	this.renewParams.day_type="week";
                	this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*7*this.renewParams.UnitPrice
                }else if(id==2){
                	this.renewParams.day_type="month";
                	this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*30*this.renewParams.UnitPrice
                }
                else if(id==3){
                	this.renewParams.day_type="year";
                	this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*365*this.renewParams.UnitPrice
                }else if(id==4){
                	this.renewParams.day_type=""
                	this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*0*this.renewParams.UnitPrice
                }
            	this.totalPrice=this.datePay+this.quotaPay;*/
				this.pairSelected = id;
				var addLimit=0;
				if(this.addLimit==""){
					addLimit=0;
				}else{
					addLimit=this.addLimit;
				}
				var unitPrice1 = 0;
				var unitPrice2 = 0;
				var unitPrice3 = 0;
				var allFe= parseInt(this.auLimit)+parseInt(this.addLimit);//已用份数+增持份额
				if(this.renewParams.robot_grade == 'OTO'){//一级机器人
					unitPrice1 = 0.1
					unitPrice2 = 0.15
					unitPrice3 = 0.23
				}else if(this.renewParams.robot_grade == 'OTM') {//二级机器人
					unitPrice1 = 0.17
					unitPrice2 = 0.27
					unitPrice3 = 0.41
				}else if(this.renewParams.robot_grade == 'MTM') {//三级机器人
					unitPrice1 = 0.25
					unitPrice2 = 0.45
					unitPrice3 = 0.65
				}
				if(id==1){//week
					this.renewParams.day_type="week";
					/*this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*7*this.renewParams.UnitPrice*/
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*7
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*7
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*7
					}
				}else if(id==2){//month
					this.renewParams.day_type="month";
					/*this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*30*this.renewParams.UnitPrice*/
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*30
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*30
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*30
					}
				}else if(id==3){//year
					this.renewParams.day_type="year";
					/*this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*365*this.renewParams.UnitPrice*/
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*365
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*365
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*365
					}
				}else if(id==4){//不续费（增持份额）
					this.renewParams.day_type=""
					/*this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*0*this.renewParams.UnitPrice*/
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*0
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*0
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*0
					}
				}
				this.totalPrice=(this.datePay+this.quotaPay).toFixed(2);

            },
            choseQuota(id){
            	this.quotaFlag=id;
            },
            changeAuto(){
            	this.auto_renew=!this.auto_renew;
            },
            changeAuto2(){
            	this.auto_renew=!this.auto_renew;
            	$('#auto').click();
            },
            instancePause(val){
            	var params={};
            	params.instance_id=val;
            	instancePause(params).then(data => {
                    if (data.code == 200) {
                        this.getOvri();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            instanceRun(val){
            	var params={};
            	params.instance_id=val;
            	instanceRun(params).then(data => {
                    if (data.code == 200) {
                       this.getOvri();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            initInstance(val){
            	var params={};
            	params.instance_id=val;
            	initInstance(params).then(data => {
                    if (data.code == 200) {
                       this.getOvri();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            startRenew(){
            	var params={}
            	params.day_type=this.renewParams.day_type;
            	params.instance_id=this.renewParams.InstanceId;
            	params.add_amount=parseInt(this.addLimit);
            	params.auto_renew=this.auto_renew;
	           	toRadl(params).then(data => {
                    if (data.code == 200) {
                        this.getOvri();
                        if(this.$i18n.locale== 'zh-CN'){
							this.$toast.center(this.$t('netnew.xfSuccess'));
						}else{
							this.$toast.center('Renewal of success');
						}
                        $(".close").click();
                    } else {
						if(data.code == '102001'){//购买份额最少为xx份额
							this.$toast.center(this.$t('msg.msg'+data.code)+' '+data.msg+' '+ this.$t('netnew.Share'))
						}else{
							this.$toast.center(this.$t('msg.msg'+data.code));
						}
                    }
                });
            },
            stopInstance(val){
               var params={};
            	params.instance_id=val;

            swal({
			  title: this.$t('netnew.ays2')+"?",
			  text: this.$t('netnew.ays3'),
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

                stopInstance(params).then(data => {
                    if (data.code == 200) {
                        this.getOvri();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
			  }
			})


            },
            deleteInstance(val){
            	var params={};
            	params.instance_id=val;

	            swal({
				  title: this.$t('netnew.ays')+"?",
				  text: this.$t('netnew.DeleteYourRobot'),
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

	                deleteInstance(params).then(data => {
	                    if (data.code == 200) {
	                    	this.$toast.center(this.$t('netnew.Robothasbeendeleted'));
	                        this.getOvri();
	                    } else {
	                        this.$toast.center(this.$t('msg.msg'+data.code));
	                    }
	                });
				  }
				})
            },
           	getBuyInfo(val){
            	var params={};
            	params.robot_id=val.RobotId;
            	params.user_id=this.rbtInfoParm.user_id;
            	getBuyInfo(params).then(data => {
                    if (data.code = 200) {
                    	this.buyInfo=data.data;
                    	this.choseTime(4);
                    }else{
                    	this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            toRenew(list){//续费
            	this.instanceModal=1;
            	this.renewParams=list;
				this.quotaFlag=1;
				this.quotaPay=0;
				this.addLimit=0;
            	this.addlimitParams=list;
            	this.getrenewDetail(list.InstanceId);
            	this.getBuyInfo(list);
            },
            addlimit(list){//增持
            	this.instanceModal=2;
            	this.addLimit=0;
            	this.addLimitPrice=0;
            	this.addlimitParams=list;
            	this.getBuyInfo(list);
            	this.getInstanceRD();
            },
            adduserlimit(list){
            	this.instanceModal=3;
            	this.addUserLimit=0;
            	this.adduserlimitParams=list;

            },
            getrenewDetail(id){//获取机器人续费详情
            	var params={};
            	params.instance_id=id;
            	getrenewDetail(params).then(data => {
                    if (data.code == 200) {
                        this.renewList=data.data;
                        this.auLimit=this.renewList.last_limit/this.renewParams.Multiple;//已用份数
                        this.maxLimit=(this.renewList.quota-this.renewList.last_limit)/this.renewParams.Multiple;//最大可用份数
                        if(this.renewList.less_amount>0){
                        	this.avLimit=this.$t('netnew.dqkyw')+ " "+parseInt(this.renewList.less_amount/this.renewParams.Multiple);
                        }else{
                        	this.avLimit=this.$t('netnew.dqkyw')+" 0"
                        }

                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
			toFactory(){
				$('#sideMenu3').click();
			},
			toComponent(){
				$('#sideMenu5').click();
			},
			toStrategy(){
				$('#sideMenu6').click();
			},
			ovBalance(){////获取账户资金
				this.jzz=true;
				ovBalance().then(data => {
					if(data.code==200){
						this.jzz=false;
						if(data.data){
							this.ovbList=data.data.base;//资金管理首次数据
							this.ovmList=data.data.more;//点击‘更多’展示数据
						}

						if(this.ovbList){
							var _this = this
							for(var i=0;i<_this.ovbList.length;i++){
								_this.ovName.push(_this.ovbList[i].coin_name);
								var ecd={};
								ecd.value=_this.ovbList[i].total_amount.toFixed(2)
								ecd.name=_this.ovbList[i].coin_name
								_this.ovData.push(ecd);
							}
						}
						if(this.ovData.length>0){
							this.drawLine();
						}
					}else{
					}
				});
			},
			getOvri(){//概览获取机器人详情
				var params={}
				params.pageNum=this.pageNum;
				params.pageSize=this.pageSize;
				this.ydata=[];
				this.chart2legendData=[];
				this.chart2data=[];
				getOvri(params).then(data => {
					if (data.code == 200) {
						if(data.data.data==null){
							this.robotList=[];
							this.overList.robot_return_report=[];
						}
						if(data.data.data){
							this.overList.robot_return_report=data.data.data.report;
							this.robotList=data.data.data.instance;
						}
						this.totalPage=data.data.total_page;
						if(this.overList.robot_return_report==null){

							for(var i=0;i<100;i++){
									this.ydata.push(this.$options.filters.chartsData(new Date()-1000*3600*i));
								}
							this.ydata.reverse()
						}else{
								for(var i=0;i<this.overList.robot_return_report.length;i++){
									var Xdata=[];
									this.getFormatter=this.getFormatter+'<br/>'+'{a'+i+'}:\n{c'+i+'}%';
									if(this.overList.robot_return_report[i].data){
										for(var j=0;j<this.overList.robot_return_report[i].data.length;j++){
											Xdata.push((this.overList.robot_return_report[i].data[j].profit_percent*100).toFixed(3));
										}
										Xdata.reverse();
									}
									var chartObj ={
										data:Xdata,
										name:this.overList.robot_return_report[i].robot_name,
										type:'line',
										smooth:true,
										showSymbol:false,
										itemStyle: {
				                            normal: {
				                                label: {
				                                    show: true,
				                                    positiong: 'top',
				                                    formatter: '{c}%',

				                                },
				                            }
				                        }
									};
									this.chart2legendData.push(this.overList.robot_return_report[i].robot_name);
									this.chart2data.push(chartObj);
							     }
							if(this.overList.robot_return_report.length>0){
								if(this.overList.robot_return_report[0].data){
									for(var i=0;i<this.overList.robot_return_report[0].data.length;i++){
										this.ydata.push(this.$options.filters.chartsData2(this.overList.robot_return_report[0].data[i].active_time));

									}
									this.ydata.reverse();
								}
							}
						}
						this.drawLine2();
					}else{
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				})
			},
			getOverviewInfo(){
				var params ={};
				params.id=this.user_id;
				this.openLoding();
				getOverviewInfo(params).then(data => {
	              if (data.code == 200) {
					this.closeLoading();
					this.overList=data.data
					if(data.data.account_balance!=null){
						this.abList=data.data.account_balance;
					}
					if(data.data.robot_list!=null){
						this.robotList=data.data.robot_list;
					}

					if(this.overList.robot_return_report==null){

						for(var i=0;i<100;i++){
								this.ydata.push(this.$options.filters.chartsData(new Date()-1000*3600*i));

							}
						this.ydata.reverse()
					}else{
							for(var i=0;i<this.overList.robot_return_report.length;i++){
								var Xdata=[];
								this.getFormatter=this.getFormatter+'<br/>'+'{a'+i+'}:\n{c'+i+'}%';
								if(this.overList.robot_return_report[i].data){
									for(var j=0;j<this.overList.robot_return_report[i].data.length;j++){
										Xdata.push((this.overList.robot_return_report[i].data[j].profit_percent*100).toFixed(3));
									}
									Xdata.reverse();
								}

								var chartObj ={
									data:Xdata,
									name:this.overList.robot_return_report[i].robot_name,
									type:'line',
									smooth:true,
									showSymbol:false,
									itemStyle: {
			                            normal: {
			                                label: {
			                                    show: true,
			                                    positiong: 'top',
			                                    formatter: '{c}%',

			                                },
			                            }
			                        }
								};
								this.chart2legendData.push(this.overList.robot_return_report[i].robot_name);
								this.chart2data.push(chartObj);
						}
						if(this.overList.robot_return_report.length>0){
							if(this.overList.robot_return_report[0].data){
								for(var i=0;i<this.overList.robot_return_report[0].data.length;i++){
									this.ydata.push(this.$options.filters.chartsData2(this.overList.robot_return_report[0].data[i].active_time));

								}
								this.ydata.reverse();
							}

						}
					}


					this.drawLine2();
	              } else {
	              	this.$toast.center(data.message);
	              }
	            });
			},

			drawLine(){
				let myChart = this.$echarts.init(document.getElementById('container'))

				myChart.setOption({
					color: ['#084379','#7FCEFF','#3AB3FF','#36A85B','#FF6565'],
				    legend: {
				        orient: 'vertical',
				        x: 'right',
				        top:'40%',
				        itemWidth:12,
				        itemHeight:12,
				        align:"left",
				        formatter: function (name) {
						    var data = myChart.getOption().series[0].data;
				            var total = 0;
				            var tarValue;
			              for (var i = 0, l = data.length; i < l; i++) {
			                  total += parseFloat(data[i].value);
			                  if (data[i].name == name) {
			                      tarValue = parseFloat(data[i].value);
			                  }
			              }
			              var p = (tarValue / total * 100).toFixed(2);
			              return name + ' ' + p + '%';
						},
				        textStyle:{
							color:'#fff',
							fontSize:"14"
						},
				        data:this.ovName
				    },
				    series: [
				        {
				            name:this.$t('netnew.bz'),
				            type:'pie',
				            radius: ['50%', '70%'],
				            avoidLabelOverlap: false,
							center:['35%','50%'],
				            label: {
				                normal: {
				                    show: false,
				                    formatter:"资金占比",
				                    position: 'center'
				                },

				                emphasis: {
				                    show: true,
				                    formatter:'{d}%\n{b}',
				                    textStyle: {
				                        fontSize: '16',
				                        color:"#fff",
//				                        fontWeight:"bold",
				                    }
				                }
				            },
				            labelLine: {
				                normal: {
				                    show: false
				                }
				            },
				            data:this.ovData
				        }
				    ]
				})
			},
			drawLine2() {
				let myChart = this.$echarts.init(document.getElementById('container2'))
				myChart.setOption({
					color: ['#7FCEFF','#084379','#718EBD','#36A85B','#FF6565'],
					tooltip: {
						trigger: 'axis',
						formatter: this.getFormatter,
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#666'
							}
						}
					},
					textStyle:{
		                color:'#718EBD'
		            },
					legend: {
						data:this.chart2legendData,
						textStyle:{
							color:'#fff',
						}
					},
					grid: {
						left: '5%',
						right: '1%',
						bottom: '5%',
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: this.ydata,
						axisLine: {
			                lineStyle: {
			                    color: "#FFFEFE",
			                }
			            }
					}],
					yAxis: [{
						type: 'value',
						scale: true,

						splitLine: {
						    lineStyle: {
						        // 使用深浅的间隔色
						        color:  ['#777']
						    }
						},
						axisLine: {
			                lineStyle: {
			                    color: "#ffffff",
			                }
			           	},
						axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value}%',
                            lineStyle: {
			                    color: "#FFFEFE",
			                }
                       },

					}],
					series: this.chart2data
				},true);
			}
		}
	}
</script>

<style scoped>
	.table-bordered tbody tr td{
		color: #fff !important;
	}
	.ovbv-tit{
	    color: #718EBD;
	    height: 50px;
	    padding: 15px 0px;
	    text-align: center;
	}
	.ovbv-text{
		color: #fff;
		line-height:50px ;
		text-align: center;
	}
	.overview_box {
		padding: 20px 32px;
		font-family: SFProDisplay-Bold !important;
		font-size: 36px;
		color: #7FCEFF;
		letter-spacing: 0;
	}

	.overview_title {
		color: #fff !important;
		font-size:25px;
		font-family: SFProDisplay-Bold !important;
	}

	.left_quarter_box {
		padding: 0;
	}

	.half_box {
		padding: 0;
	}

	.crack_right {
		margin-right: 3% !important;
	}



	.overview_icon {
		padding: 0;
	}

	.overview_content {
		padding: 0;
	    padding-left: 0px;
	    padding-top: 10px;
	    margin-left: 105px;
	}

	.quarter_item_value {
		margin-bottom: 10px;
	}

	.quarter_item_title {
		font-size: 14px;
		color: #7FCEFF;
	}

	.right_view_box {
		height: 480px;
		background: url(../assets/img/ovbox@2x.png) no-repeat;
		background-size:cover ;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
		border-radius: 4px;
		padding: 0;
	}

	.clean_both {
		clear: both;
	}

	.report_box {
		margin-top: 250px;
		padding: 0 32px;

	}

	.balance_coin_icon {
		padding: 0;
		margin-right: 10px;
	}

	.balance_coin_icon img {
		height: 24px;
		margin: 10px;
		margin-left: 0;
	}

	.balance_content {
		font-size: 14px;
		color: #fff;
		letter-spacing: 0;
		line-height: 20px;
		padding: 0;
		margin-bottom: 15px;
	}

	.balance_content i {
		font-style: inherit;
	}

	.exchange_name,
	.coin_value {

		font-size: 14px;
		color: #718EBD;
		letter-spacing: 0;
		line-height: 20px;
	}

	.balance_item {
		clear: both;
	}
	.alert-warning{
		color: #718EBD !important;
		background: none !important;
		border:none !important;
	}
	.working-box{
		background: url(../assets/img/workbox@2x.png) no-repeat;
		background-size:cover ;
		height: 299px;
		width:426px ;
		margin-top: 12px;
	}
	.other-box{
		background: url(../assets/img/otherbox@2x.png) no-repeat;
		background-size:cover ;
		height: 150px;
		width:129px ;
		margin-top: 12px;
		margin-left: 30px;
	}
	.over-box{
		background: url(../assets/img/overbox@2x.png) no-repeat;
		background-size:cover ;
		height: 299px;
		width: 100%;
		margin-top: 12px;
	}
	.errbtn-title{
		font-size: 14px;
		color: #718EBD;
		margin-top:15px;
		margin-bottom:15px;
		width: 135px;
		line-height: 59px;
		text-align: center;
	}
	.errbtn-text{
		font-size: 30px;
	    color: #7FCEFF;
	    width: 100%;
	    text-align: center;
	}
	.overview_chartbox{
		background: #ffffff0d;
		background-size:cover ;
		border:1px #ffffff4d solid;
		margin-top: 15px;

	}
	.tran-180{
		transform:rotate(180deg);
		-ms-transform:rotate(180deg); /* Internet Explorer */
		-moz-transform:rotate(180deg); /* Firefox */
		-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
		-o-transform:rotate(180deg);
	}

</style>
