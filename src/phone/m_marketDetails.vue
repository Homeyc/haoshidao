<template>
	<div class="RobotDetails_body" @mouseenter="check_log" >
		<div  style="margin-top: 80px;">
			<div class="body-left col-lg-12 col-xs-12 col-sm-12" style="width: 100%;height: auto; overflow: hidden;padding: 0;">
				<div class="authorinfo_footer" style="overflow: hidden;display:none;">
					<span class="m_author_js" >
							&nbsp;&nbsp;{{$t("robotdetails.Robotdetailsy") }}</span>
					<div style="height: 100px" class="author_b2">
						<table class="col-lg-7 robtD" style="height: 70px;">
							<tr style="font-size: 15px;color: #444;padding-left: 15px;">
								<td style="padding: 20px;" class="m-mdbox-title"> {{$t("robotdetails.Transactionpairs") }}</td>
								<!--<td>{{$t("robotdetails.Usagestrategy") }}</td>-->
								<td style="color: #909499;" class="m-mdbox-title">{{$t("robotdetails.Standardcurrency") }}</td>
							</tr>
							<tr style="color: #999;font-size: 14px;">
								<td style="padding-left: 20px;" class="m-mdbox-text">{{robotInfo.Pair}} </td>
								<td class="m-mdbox-text">{{robotInfo.BaseCurrency}} </td>
							</tr>
						</table>
					</div>
				</div>
				<!--Robot Basic Information-->
				<div class="robot-basice-info">
					<span class="m_author_js">&nbsp;&nbsp;{{$t("netnew.BasicInformation")}}</span>
					<div>
						<section>
							<div >
								<table class="table" style="text-align: center">
									<thead>
										<tr class="m-mdbox-title">
											<th style="font-weight: 500 ;">{{$t("netnew.RobotName")}}</th>
											<th style="font-weight: 500 ;">{{$t("netnew.TradeType")}}</th>
											<th style="font-weight: 500 ;">{{$t("netnew.RobotRange")}}</th>
											<th style="font-weight: 500 ;">{{$t("netnew.OperationFrequency")}}</th>
										</tr>
									</thead>
									<tbody>
									<tr class="robot-info-text" >
										<td v-show="$i18n.locale=='en-US'">{{ robotBasicInfo.basicData.Name }}</td>
										<td v-show="$i18n.locale=='zh-CN'">{{ robotBasicInfo.basicData.LocalName }}</td>
										<td>{{ robotBasicInfo.basicData.TradeType }}</td>
										<td>{{robotBasicInfo.basicData.RobotRange}}</td>
										<td>{{robotBasicInfo.basicData.Frequency}}</td>
									</tr>
									<tr class="m-mdbox-title">
										<td>{{$t("netnew.BaseCurrency")}}</td>
										<td colspan="3">{{$t("netnew.Description")}}</td>
									</tr>
									<tr class="robot-info-text" >
										<td>{{ robotBasicInfo.basicData.BaseCurrency }}</td>
										<td v-show="$i18n.locale=='en-US'" colspan="3">{{ robotBasicInfo.basicData.Introduction }}</td>
										<td v-show="$i18n.locale=='zh-CN'" colspan="3">{{ robotBasicInfo.basicData.IntroductionCn }}</td>
									</tr>
									</tbody>
								</table>
							</div>
						</section>
					</div>
				</div>
				<!--Robot Component Information-->
				<div class="robot-component-info">
					<span class="m_author_js">&nbsp;&nbsp;{{$t("netnew.ComponentInfo")}}</span>
					<div>
						<section>
							<div>
								<table class="table " style="text-align: center">
									<thead>
										<tr class="m-mdbox-title">
											<th style="font-weight: 500 ;">{{$t("netnew.RiskManagement")}}</th>
											<th style="font-weight: 500 ;">{{$t("netnew.RobotWeighting")}}</th>

										</tr>
									</thead>
									<tbody>
										<tr class="robot-info-text" >
											<td>{{robotComponentInfo.compoentData.RiskManagement}}</td>
											<td>{{robotComponentInfo.compoentData.RobotWeighting}}</td>

										</tr>
									</tbody>
								</table>
								<table class="table" style="text-align: center;margin-top: 0px;">
									<thead>
										<tr class="m-mdbox-title">

											<th style="font-weight: 500 ;">{{$t("netnew.FundOptimization")}}</th>
											<th style="font-weight: 500 ;">{{$t("netnew.OrderExecution")}}</th>
										</tr>
									</thead>
									<tbody>
										<tr class="robot-info-text" >

											<td>{{robotComponentInfo.compoentData.FundOptimization}}</td>
											<td>{{robotComponentInfo.compoentData.OrderExecution}}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</section>
					</div>
				</div>
				<div class="details_bodys">
					<span class="m_author_js">
							&nbsp;&nbsp;{{$t("robotdetails.Robotdetails")}}
						</span>
					<div class="ycsb2">
						<section style="margin-bottom: 0;">
							<div >
								<table class="table mdtable" style="text-align: center;">
									<thead>
										<tr class="m-mdbox-title">
											<th style="font-weight: 500 ;">{{$t("robotdetails.Average")}}</th>
											<th style="font-weight: 500 ;">{{$t("robotdetails.Sharperatio") }}</th>
											<th style="font-weight: 500 ;">{{$t("robotdetails.Accuracy") }}</th>
											<th style="font-weight: 500 ;">{{$t("robotdetails.Averagereturn") }}</th>
										</tr>
									</thead>
									<tbody>
										<tr class="m-mdbox-text" >
											<td>{{ robotBaseInfo.AverageHoldingPeriod|tofix}} H</td>
											<td>{{ robotBaseInfo.SharpeRatio*100|tofix}}%</td>
											<td>{{ robotBaseInfo.WinRate*100|tofix }}%</td>
											<td>{{ robotBaseInfo.AverageReturnPerTrade*100|tofix}}%</td>
										</tr>
										<tr class="m-mdbox-title">
											<td>{{$t("robotdetails.Annualinterest") }}</td>
											<td>{{$t("robotdetails.Numberof") }}</td>
											<td>{{$t("robotdetails.Averageweeklytransactions")}}</td>
											<td>{{$t("robotdetails.Maximumhistoricalretracement") }}</td>
										</tr>
										<tr class="m-mdbox-text" >
											<td>{{ robotBaseInfo.AnnualizedReturn*100|tofix }}%</td>
											<td>{{ robotBaseInfo.TradeCount }}</td>
											<td>{{ robotBaseInfo.TradeCountPerWeek|tofix }}</td>
											<td>{{ robotBaseInfo.MaxDrawdownRatio*100|tofix }}%</td>
										</tr>
										<tr class="m-mdbox-title">
											<td>{{$t("robotdetails.Maximumweeklywithdrawal") }}</td>
											<td>{{$t("robotdetails.risk1")}}</td>
											<td>{{$t("robotdetails.risk5")}}</td>
											<td>{{$t("robotdetails.Volatility")}}</td>
										</tr>
										<tr class="m-mdbox-text" >
											<td>{{ robotBaseInfo.MaxDrawdownWeek*100|tofix }}%</td>
											<td>{{ robotBaseInfo.Var1|tofixd }}%</td>
											<td>{{ robotBaseInfo.Var5|tofixd}}%</td>
											<td>{{ robotBaseInfo.Std*100|tofix }}%</td>
										</tr>

									</tbody>
								</table>
							</div>
						</section>
					</div>

				</div>
				<div class="tbandtime" >
					<div class="lg-width" style="width: 100%;text-align: left;margin-bottom: 0;">
						<div>
							<span class="m_author_js" style="width: auto;display: inline-block;">&nbsp;&nbsp; {{ $t("robotdetails.cumulative") }} </span>
							<select style="float: right;margin-top: 15px;margin-right: 15px;" v-model="chartFrequency" @change="changeChart">
								<option value="base">Base</option>
								<option value="day">Day</option>
								<option value="week">Week</option>
							</select>
						</div>
						<div style="height: 520px;" class="ycsb3">
							<div id="container" style="height:500px;width: 100%;"></div>
							<div class="buy_choiceday" style="clear: both;" v-for="(item,index) in robotInfo">
							</div>
						</div>
					</div>

				</div>
				<div class="cyrobot">
					<span class="m_author_js">
						&nbsp;&nbsp;{{$t("robotdetails.Currentlyholdingtherobot") }}
					</span>
					<section class="ycsb4">
						<div >
							<table class="table" style="text-align: center;">
								<thead>
									<tr style="color: #fff;font-size: 14px;">
										<th style="text-align: left !important;">{{$t("robotdetails.name") }}</th>
										<th style="text-align: left !important;">{{$t("robotdetails.Buytime") }}</th>
										<th style="text-align: left !important;">{{$t("robotdetails.Current") }} (NET)</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(robot_owner,index) in robotOwners" style="color: #fff;">
										<td style="font-size: 14px;color: #fff;">{{ robot_owner.nickName}}</td>
										<td style="font-size: 14px;color: #fff;">{{ robot_owner.buyTime | timer}}</td>
										<td style="font-size: 14px;color: #fff;">{{ robot_owner.buyPrice }}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</div>

		</div>


	</div>
</template>
<script>
	import { robotOrder, robotBacktestDetail, robotBuy, timingtype, robotordernow, robotOwner, checkExchange, initAccountBalance, getRbtBasicInfo, getRbtComponentInfo,getRobotBase} from '../api/api';
	export default {
		props: {
			mdImg1: {
				type: String,
				default: require("@/assets/img/231946457712344710.jpg")
			},
			image5: {
				type: String,
				default: require("@/assets/img/image5.jpg")
			},
			mdImg2: {
				type: String,
				default: require("@/assets/img/754097673331947836.jpg")
			},
			mdImg3: {
				type: String,
				default: require("@/assets/img/231946457712344710.jpg")
			},
			close: {
				type: String,
				default: require("@/assets/img/close.png")
			},
			group: {
				type: String,
				default: require("@/assets/img/group.png")
			},
			T2: {
				type: String,
				default: require("@/assets/img/T2.jpeg")
			},
		},
		data() {
			return {
				isUsdt: false,
				noExchange: false,
				items: {
					robotId: "",
					robotLocalName: "",
					robotName: "",
				},
				addRobotOrder: {
					exchange: "",
					coinAmount: "",
					exchangAccountId: "",
					originPrice: "",
					payPrice: "",
					robotId: "",
					timingType: "",
				},
				waring: false,
				payPrice: "",
				chartFrequency:"day",
				originPrice: "",
				ifLogin: false,
				authList: {},
				robotOrderList: {},
				isAll: 1,
				robotInfo: {},
				roborInfoDate: {

				},
				robotBuyInfo: {
					robotId: "",
				},
				robotBuyList: {
					exchangeAccounts: [],
					id: {},
					netValue: "",
					coinLimit: "",
					coinSurplus: "",
				},
				addRobotOrderList: {

				},
				robotBaseInfo:{},
				lang: 0,
				pairSelected: "",
				pairSuccess: true,
				backCD: 3,
				xdata: [],
				xSet: [],
				ydata: [],
				robotOwners: [],
				timingTypeInfo: {
					robotId: "",
					timingType: "",
				},

				pairSuccess: true,
				backCD: 3,
				getrobotInfo: {
					robotId: "",
				},
				content:  this.$t('person.pEnter'),
				editorOption: {},
				checkWaring: false,
				pageInfo: {
					robotId: "",
					pageSize: 5,
					pageNum: 1,
				},
				isAutoState: true,
				exchangeIdInfo: {
					exchangeId: "",
				},
				exchangeList: {
					exchange: "",
				},
				robotBasicInfo:{
					id:"",
					basicData:{},
					description:""
				},
				robotComponentInfo:{
					id:"",
					compoentData:{},
				}

			}
		},
		mounted() {
				this.inity(),
				this.getId(),
				this.drawLine(),
//				this.robotOrder(),
				this.robotBacktestDetail(),
				this.checklog(),
				this.getRobotBase(),
				this.checkLogin(),
				this.robotOwner();
			    this.getBasicInfo();
			    this.getComponentInfo();
			//this.popularAuthor();
		},
		methods: {
			openLoding() {
				this.$loading('loading...');
			},
			closeLoading() {
				this.$loading.close();
			},
			robotOwner() {
				this.pageInfo.robotId = this.$route.query.robotId;
				robotOwner(this.pageInfo).then(data => {
					if(data.code == 200) {
						this.robotOwners = data.data.data;
						this.robotOwners.sort(compare('buyTime'));
						this.robotOwners.reverse();
					} else {
						//this.$toast.center(data.message);
					}
				});
			},
			toPairSucc() {
				this.waring = false;
				this.addRobotOrder.originPrice = this.originPrice;
				this.addRobotOrder.timingType = this.timingTypeInfo.timingType;
				this.addRobotOrder.payPrice = this.payPrice;
				this.addRobotOrder.exchange = this.addRobotOrderList.exchange;
				this.addRobotOrder.robotId = this.items.robotId;
				this.addRobotOrder.timingType = this.pairSelected;
				//				this.addRobotOrder.coinAmount=this.addRobotOrder.coinAmount;
				this.addRobotOrder.coinAmount = this.addRobotOrder.coinAmount;
				this.addRobotOrder.exchangAccountId = this.addRobotOrder.exchangAccountId;
				this.addRobotOrder.autoRenew = this.isAutoState;
				if(this.exchangeIdInfo.exchangeId == 0) {
					this.$toast.center(this.$t('market.choicechange'))
					return false;
				}
				if(this.addRobotOrder.timingType == "") {
					this.$toast.center(this.$t('market.selectLimit'))
					return false;
				}
				if((this.addRobotOrder.coinAmount > this.robotBuyList.coinSurplus) || this.robotBuyList.coinSurplus == 0) {
					this.$toast.center(this.$t('market.shareInsufficient'))
					return false;
				}
				if(this.addRobotOrder.payPrice > this.robotBuyList.netValue) {
					this.waring = true;
					return false;
				}

				robotordernow(this.addRobotOrder).then(data => {
					if(data.message == "success") {

						this.checkLogin(),
							this.pairSuccess = false;
						this.timerReg = setInterval(this.startRegCD, 1000);
					} else {
						if(data.success == 10010) {
							var m = this.$t('market.kegm');
							this.$toast.center(m + " " + data.message)
							return false;
						} else if(data.success == 10000) {
							var m = this.$t('market.longError');
							this.$toast.center(m + "" + data.message)
							return false;
						} else if(data.success == 10001) {
							var m = this.$t('market.netnoEngh');
							this.$toast.center(m + "" + data.message)
							return false;
						} else if(data.success == 10002) {
							var m = this.$t('market.noRobot');
							this.$toast.center(m + "" + data.message)
							return false;
						} else if(data.success == 10003) {
							var m = this.$t('market.alreadyBuy');
							this.$toast.center(m + "" + data.message)
							return false;
						} else if(data.success == 10005) {
							var m = this.$t('market.accountNo');
							this.$toast.center(m + "" + data.message)
							return false;
						} else if(data.success == 10006) {
							var m = this.$t('market.noMon');
							this.$toast.center(m + "" + data.message)
							return false;
						}
					}
				});

			},
			checkLogin() {
				if(localStorage.getItem("token")) {
					this.ifLogin = true;
				} else {
					this.ifLogin = false;
				}
			},
			goRecharge() {
				$("#closeNd").click();
				setTimeout(this.$router.push('/personInfo'), 3000);
			},
			choseTime(robotId, id) {
				//alert(id)
				this.timingTypeInfo.robotId = robotId;
				this.timingTypeInfo.timingType = id;
				timingtype(this.timingTypeInfo).then(res => {
					if(res.message = "success") {
						this.payPrice = res.data.payPrice;
						this.originPrice = res.data.originPrice;
						if(this.payPrice <= this.robotBuyList.netValue) {

							this.waring = false;

						}
					}
				});
				this.pairSelected = id;
			},
			getBalance(items, timingType) {
				//console.log(items)
				this.robotBuyInfo.robotId = items.robotId;
				this.pairSelected = timingType;
				this.items.robotId = items.robotId;
				this.items.robotLocalName = items.robotLocalName;
				this.items.robotName = items.robotName;
				// this.robotBuyInfo.token=localStorage.getItem("token")
				robotBuy(this.robotBuyInfo).then(data => {
					if(data.message == "success") {
						this.robotBuyList = data.data;
						if(data.data.standardCoin == "USDT") {
							this.isUsdt = true;
						} else {
							this.isUsdt = false;
						}
						// 	this.coinLimit=data.data.coinLimit;
						//	this.coinSurplus=data.data.coinSurplus;
						this.netValue = data.data.netValue;
						if(this.robotBuyList.exchangeAccounts.length == 0) {
							$(".childenop").remove();
							this.noExchange = false;
						} else {
							this.noExchange = true;
						}
						//				     	marketTop(this.empty).then(data => {
						//				             	if(data.message=="success"){
						//				             		this.robotTop=data.data;
						//				             	}
						//				        });
					}
				});
				this.timingTypeInfo.robotId = items.robotId;;
				this.timingTypeInfo.timingType = timingType;
				timingtype(this.timingTypeInfo).then(res => {
					if(res.message = "success") {
						this.payPrice = res.data.payPrice;
						this.originPrice = res.data.originPrice;
						if(this.payPrice <= this.robotBuyList.netValue) {
							this.waring = false;
						}
					}
				});

			},
			login() {
				this.$toast.center(this.$t('market.notLogin'));
				$(".login-check").click();
			},
			checklog() {
				if(localStorage.getItem("token")) {
					this.ifLogin = true;
				} else {
					this.ifLogin = false;
				}
			},
			getId() {
				this.getrobotInfo.robotId = this.$route.query.robotId;
				//alert(this.getrobot.robotId )
			},
			robotBacktestDetail() {
				this.openLoding();
				robotBacktestDetail(this.getrobotInfo).then(res => {
					this.closeLoading();
					if(res.code == 200) {
						this.robotInfo = res.data;
						for(var i = 0; i < this.robotInfo.Day.length; i++) {
								this.xdata.push((this.robotInfo.Day[i].cumprod_return*100).toFixed(3));
								this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Day[i].create_time));
						}
						this.drawLine();

					}
				});
			},
			changeChart(){
				if(this.chartFrequency=="day"){
					this.xdata=[];
					this.ydata=[];
					for(var i = 0; i < this.robotInfo.Day.length; i++) {
								this.xdata.push((this.robotInfo.Day[i].cumprod_return*100).toFixed(3));
								this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Day[i].create_time));
						}
						this.drawLine();

				}else if(this.chartFrequency=="week"){
					this.xdata=[];
					this.ydata=[];
					for(var i = 0; i < this.robotInfo.Week.length; i++) {
								this.xdata.push((this.robotInfo.Week[i].cumprod_return*100).toFixed(3));
								this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Week[i].create_time));
						}
						this.drawLine();
				}else{
					this.xdata=[];
					this.ydata=[];
					for(var i = 0; i < this.robotInfo.Base.length; i++) {
								this.xdata.push((this.robotInfo.Base[i].cumprod_return*100).toFixed(3));
								this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Base[i].create_time));
						}
						this.drawLine();
				}
			},
			getRobotBase(){
				getRobotBase(this.getrobotInfo).then(res => {
					if(res.code == 200) {
						this.robotBaseInfo = res.data;
					}else{
						this.$toast.center(res.msg)
					}
				});
			},
			check_log() {
				if(localStorage.getItem("token")) {
					this.ifLogin = true;
				} else {
					this.ifLogin = false;
				}
			},
			all_earnings(id) {
				this.isAll = id;
			},
			//3s成功倒计时
			startRegCD: function() {
				if(this.backCD <= 0) {
					this.backCD = 3;
					$("#closeNd").click();
					this.pairSuccess = true;
					clearInterval(this.timerReg);
				} else {
					this.backCD--;
				}
			},
			closeNow() {
				this.backCD = 3;
				$("#closeNd").click();
				this.pairSuccess = true;
				clearInterval(this.timerReg);
			},
			robotOrder() {
				robotOrder(this.empty).then(res => {
					if(res.code == 200) {
						this.robotOrderList = res.data;
					} else {
						//alert(res.msg)
						this.$toast.center(res.msg);
					}
				});
			},
			onEditorBlur() { //失去焦点事件
			},
			onEditorFocus() { //获得焦点事件
			},
			onEditorChange() { //内容改变事件
			},
			inity() {
				var _this = this;
				$("#buy_now").on("hidden.bs.modal", function() {
					$(".childenop").hide();
					_this.addRobotOrder.exchangAccountId = '';
					_this.addRobotOrderList = '';
					_this.infos = _this.addRobotOrder;

					_this.addRobotOrder.coinAmount = "";
					_this.pairSelected = "";
					_this.payPrice = "";
					$(".tui-checkbox").prop("checked", true)
				});
			},
			changeEx() {
				this.exchangeIdInfo.exchangeId = this.addRobotOrderList.exchangeId;
				if(this.addRobotOrderList == 0) {
					$(".childenop").hide()
					$(".card-btm").attr("disabled", true)
					$(".card-btm").css("background-color", "#dcdcdc")

				} else {
					$(".childenop").show()
					checkExchange(this.exchangeIdInfo).then(res => {
						if(res.message == 'success') {
							this.exchangeList = res.data;
							//	             		this.exchangeList.exchange = res.data[0].exchange;
							//	             	 	this.addRobotOrder.exchangAccountId=res.data[0].id;
							//console.log(this.exchangeList.exchange)
							//alert(this.exchangeList.exchange)
						}

					});
				}
			},
			ycs() {
				//var _this= $(this);var _this=$(this);
				if($(".author_b").css("display") == 'none') {
					$(".ycs_0").removeClass("fa-chevron-down")
					$(".ycs_0").addClass("fa-chevron-up")
					$(".author_b").slideToggle()
					$(".author_b").next().find("span").find("a").hide
				} else {
					$(".ycs_0").removeClass("fa-chevron-up")
					$(".ycs_0").addClass("fa-chevron-down")

					$(".author_b").slideToggle()
				}
			},
			ycs1() {

				if($(".author_b2").css("display") == 'none') {
					$(".ycs_1").removeClass("fa-chevron-down")
					$(".ycs_1").addClass("fa-chevron-up")
					$(".author_b2").slideToggle()
				} else {
					$(".ycs_1").removeClass("fa-chevron-up")
					$(".ycs_1").addClass("fa-chevron-down")

					$(".author_b2").slideToggle()
				}
			},
			ycs2() {
				//var _this= $(this);
				if($(".ycsb2").css("display") == 'none') {
					$(".ycs_2").removeClass("fa-chevron-down")
					$(".ycs_2").addClass("fa-chevron-up")
					$(".ycsb2").slideToggle()
				} else {
					$(".ycs_2").removeClass("fa-chevron-up")
					$(".ycs_2").addClass("fa-chevron-down")
					$(".ycsb2").slideToggle()
				}
			},
			ycs3() {
				$(".ycs_3").removeClass("fa-chevron-down")
				$(".ycs_3").addClass("fa-chevron-up")
				//var _this= $(this);
				if($(".ycsb3").css("display") == 'none') {
					$(".ycsb3").slideToggle()
				} else {
					$(".ycs_3").removeClass("fa-chevron-up")
					$(".ycs_3").addClass("fa-chevron-down")
					$(".ycsb3").slideToggle()
				}

			},
			ycs4() {
				//var _this= $(this);
				if($(".ycsb4").css("display") == 'none') {
					$(".ycs_4").removeClass("fa-chevron-down")
					$(".ycs_4").addClass("fa-chevron-up")
					$(".ycsb4").slideToggle()
				} else {
					$(".ycs_4").removeClass("fa-chevron-up")
					$(".ycs_4").addClass("fa-chevron-down")
					$(".ycsb4").slideToggle()
				}

			},
			drawLine() {
				let myChart = this.$echarts.init(document.getElementById('container'))
				myChart.setOption({


					 tooltip: {
                        trigger: 'none',
//                      formatter: '{b}<br/>{a}:\n{c}%',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                     textStyle:{
		                color:'#fff'
		            },
                    color: ['#95D6FF', '#7ea8e1', '#65cea7'],
                    grid: {
                        left: '4%',
                        right: '4%',
                         bottom: '1%',
                        top : "11%",
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: this.ydata,
                        axisLine: {
			                lineStyle: {
			                    color: "#ffffff",
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
                            formatter: '{value} %',
                            lineStyle: {
			                    color: "#FFFEFE",
			                }

                        },
                    }],
					series: [{
                    	name: 'cumulative return',
                        data: this.xdata,
                        type: 'line',
                        showSymbol:false,
                        itemStyle: {
                            normal: {
                                color: '#5bc0de',
                                label: {
                                    color: '#5bc0de',
                                    show: true,
                                    positiong: 'top',
                                    formatter: '{c}%',

                                },
                                lineStyle: {
                                    color: '#5bc0de'
                                }
                            }
                        }

                    }]





				});
			},
			getBasicInfo(){//机器人基本信息
				this.robotBasicInfo.id = this.$route.query.robotId;
				getRbtBasicInfo(this.robotBasicInfo).then( res => {
					if(res.code = 200 ) {
						this.robotBasicInfo.basicData = res.data;
						this.robotBasicInfo.description = res.data.Introduction;
					}
				});
			},
			getComponentInfo(){//机器人组件信息
				this.robotComponentInfo.id=this.$route.query.robotId;
				getRbtComponentInfo(this.robotComponentInfo).then( res => {
					if(res.code == 200 ){
						for(let i=0;i< res.data.length;i++){
							this.robotComponentInfo.compoentData[res.data[i].TypeName.split(" ").join('')] = res.data[i].ControlName
						}
					}
				})


			}
		},
	}
	function compare(property){
	    return function(a,b){
	        var value1 = new Date(a[property]).getTime();
	        var value2 = new Date(b[property]).getTime();
	        return value1 - value2;
	    }
	}

</script>

<style scoped>
	ul,li{
		padding:0;
		margilin:0;
	}
	li{
		list-style:none;
	}
	.robot-basice-info,.robot-component-info{
		width: 100%;
		-webkit-box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.1);
		box-shadow: 3px 3px 10px 0 rgba(0, 0, 0, 0.1);
		margin-bottom:48px;
		overflow: hidden;
		background: url('../assets/img/markbox@2x.png') no-repeat;
		background-size:cover;
	}
	.component-info-list>li,.robot-basice-list>li{
		font-size:14px;
		line-height:30px;
	}
	.component-info-list>li span:first-child,.robot-basice-list>li span:first-child{
		color:#909499;
		display: inline-block;
		width:120px;
		text-align: right;
	}
	.component-info-list>li span:nth-child(2),.robot-basice-list>li span:nth-child(2){
		color:#333;
	}

	table{
		border-collapse: collapse;
		border-spacing: 0;
		table-layout: fixed;
		margin-bottom: 0px;
	}
	.robot-info-text{
		font-size:16px;
		color:#fff;
	}
	thead{
		background: none;
	}
	table tr:nth-child(2n), thead{
		background: none;
	}
	.table > tbody > tr > td{
		border:none;
		padding:5%;
		text-align: left;
	}
	.table > thead > tr > th{
		border:none;
		padding:5%;
	}
	table tr{
		border-top:1px solid #ffffff12;
		border-bottom:1px solid #ffffff12;
	}
	.m_author_js{
		display: block;
	    line-height: 46px;
	    width: 100%;
	    height: 46px;
	    font-size: 24px;
	    padding-left: 20px;
	    font-family: SFProDisplay;
	    color: #fff;
	    margin-top: 10px;
	}
	.m-mdbox-title{
		color: #718EBD;
    	font-size: 14px;
	}
	.m-mdbox-text{
		color: #fff;
    	font-size: 14px;
	}
</style>
