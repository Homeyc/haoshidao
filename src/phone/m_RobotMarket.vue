<template>
	<div class="market_box">
		<div class="main_img" style="position: relative;margin-bottom: 0px;">
			<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/banner/m_market_banner@2x.png">
			<img v-show="$i18n.locale=='en-US'" src="../assets/img/banner/m_market_banner_en@2x.png">
		</div>
		<div class="m-center_box">
			<div class="market_sort_box" style="margin-bottom: 0px;">
				<div class="lg-width sort_item" style="width: 25%;" :class="{'select_sort':mkTab==1}" @click="changeMktab(1)">{{$t('netnew.all')}}</div>
				<div class="lg-width sort_item" style="width: 25%;" :class="{'select_sort':mkTab==2}" @click="changeMktab(2)">{{$t('netnew.typelong')}}</div>
				<div class="lg-width sort_item" style="width: 25%;" :class="{'select_sort':mkTab==3}" @click="changeMktab(3)">{{$t('netnew.typeshort')}}</div>
			</div>
		</div>
		<div class="m_market_item_box" v-show="mkTab==1">

			<div class="lg-width" v-for="(item,index) in robotTop" style="margin-top: 20px;width: 100%;">
				<div class="lg-width" style="width: 100%;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="lg-width m_robot_img" style="text-align: center;width: 25%;height: 75px;">
						<img :src="src[item.imgurl].img" style="width: 50%;padding: 15px 0;">
					</div>
					<div v-show="$i18n.locale=='en-US'" class="lg-width m_des_title">{{ item.RobotName }}</div>
					<div v-show="$i18n.locale=='zh-CN'" class="lg-width m_des_title">{{ item.RobotLocalName }}</div>
					<div class="lg-width" style="width: 75%;margin-top:10px ;">
						<img :src="T2" style="width: 25px;">&nbsp;<i class="m_v_author">{{ item.Owner }}</i>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.TradeType}}</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex1')}}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value green_font">{{ item.AnnualizedReturn|tofixd }}%</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex2')}}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value green_font">{{ item.AverageReturnPerTrade|tofixd }}%</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex3')}}</div>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.WinRate|tofixd }}%</div>
						<div class="m_des_field">{{$t("robotdetails.Accuracy") }}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.SharpeRatio|tofixd }}%</div>
						<div class="m_des_field">{{$t("robotdetails.Sharperatio") }}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.AverageHoldingPeriod|fix2 }}</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex6')}}</div>
					</div>

				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="m_avaliable_box" style="display: inline-block;">
						<label style="margin-bottom: 0px;">{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.Quota }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
					</div>
					<div class="m_price_box netWhite" style="display: inline-block;">
						<i class="m_current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="subscript_box" style="display: inline-block;width: 100%;">
						<button @click="toRobotDetail(item.Id)" style="width: 50%;">{{$t('market.details')}}</button>
						<button style="color:#fff;width: 50%;"> {{$t('market.marketSubscribe')}}</button>
						<img v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn" style="width: 50%;" @click="toBuy(item)">
						<img v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn" style="width: 50%;" @click="toLogin">
					</div>
				</div>
			</div>
		</div>
		<div class="m_market_item_box" v-show="mkTab==2">
            <div class="lg-width" v-for="(item,index) in robotLong" style="margin-top: 20px;width: 100%;">
            	<div class="lg-width" style="width: 100%;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="lg-width m_robot_img" style="text-align: center;width: 25%;height: 75px;">
						<img :src="src[item.imgurl].img" style="width: 50%;padding: 15px 0;">
					</div>
					<div v-show="$i18n.locale=='en-US'" class="lg-width m_des_title">{{ item.RobotName }}</div>
					<div v-show="$i18n.locale=='zh-CN'" class="lg-width m_des_title">{{ item.RobotLocalName }}</div>
					<div class="lg-width" style="width: 75%;margin-top:10px ;">
						<img :src="T2" style="width: 25px;">&nbsp;<i class="m_v_author">{{ item.Owner }}</i>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.TradeType}}</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex1')}}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value green_font">{{ item.AnnualizedReturn|tofixd }}%</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex2')}}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value green_font">{{ item.AverageReturnPerTrade|tofixd }}%</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex3')}}</div>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.WinRate|tofixd }}%</div>
						<div class="m_des_field">{{$t("robotdetails.Accuracy") }}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.SharpeRatio|tofixd }}%</div>
						<div class="m_des_field">{{$t("robotdetails.Sharperatio") }}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.AverageHoldingPeriod|fix2 }}</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex6')}}</div>
					</div>

				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="m_avaliable_box" style="display: inline-block;">
						<label style="margin-bottom: 0px;">{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.Quota }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
					</div>
					<div class="m_price_box netWhite" style="display: inline-block;">
						<i class="m_current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="subscript_box" style="display: inline-block;width: 100%;">
						<button @click="toRobotDetail(item.Id)" style="width: 50%;">{{$t('market.details')}}</button>
						<button style="color:#fff;width: 50%;"> {{$t('market.marketSubscribe')}}</button>
						<img v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn" style="width: 50%;" @click="toBuy(item)">
						<img v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn" style="width: 50%;" @click="toLogin">
					</div>
				</div>
        	</div>
		</div>
		<div class="m_market_item_box" v-show="mkTab==3">
            <div class="lg-width" v-for="(item,index) in robotShort" style="margin-top: 20px;width: 100%;">
            	<div class="lg-width" style="width: 100%;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="lg-width m_robot_img" style="text-align: center;width: 25%;height: 75px;">
						<img :src="src[item.imgurl].img" style="width: 50%;padding: 15px 0;">
					</div>
					<div v-show="$i18n.locale=='en-US'" class="lg-width m_des_title">{{ item.RobotName }}</div>
					<div v-show="$i18n.locale=='zh-CN'" class="lg-width m_des_title">{{ item.RobotLocalName }}</div>
					<div class="lg-width" style="width: 75%;margin-top:10px ;">
						<img :src="T2" style="width: 25px;">&nbsp;<i class="m_v_author">{{ item.Owner }}</i>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.TradeType}}</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex1')}}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value green_font">{{ item.AnnualizedReturn|tofixd }}%</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex2')}}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value green_font">{{ item.AverageReturnPerTrade|tofixd }}%</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex3')}}</div>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.WinRate|tofixd }}%</div>
						<div class="m_des_field">{{$t("robotdetails.Accuracy") }}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.SharpeRatio|tofixd }}%</div>
						<div class="m_des_field">{{$t("robotdetails.Sharperatio") }}</div>
					</div>

					<div class="lg-width" style="width: 33%;">
						<div class="m_des_value">{{ item.AverageHoldingPeriod|fix2 }}</div>
						<div class="m_des_field">{{$t('netnew.RbmarketTex6')}}</div>
					</div>

				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="m_avaliable_box" style="display: inline-block;">
						<label style="margin-bottom: 0px;">{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.Quota }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
					</div>
					<div class="m_price_box netWhite" style="display: inline-block;">
						<i class="m_current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>
					</div>
				</div>
				<div class="lg-width" style="width: 100%;border-bottom:1px solid rgba(255,255,255,0.1);">
					<div class="subscript_box" style="display: inline-block;width: 100%;">
						<button @click="toRobotDetail(item.Id)" style="width: 50%;">{{$t('market.details')}}</button>
						<button style="color:#fff;width: 50%;"> {{$t('market.marketSubscribe')}}</button>
						<img v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn" style="width: 50%;" @click="toBuy(item)">
						<img v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn" style="width: 50%;" @click="toLogin">
					</div>
				</div>
        	</div>
		</div>

	</div>
</template>
<script>
	import {
		loginU,
		loginM,
		getVcode,
		getMessage,
		phoneReg,
		forgetPw,
		marketTop,
		getRobotList,
		popularAuthor,
		robotOrder,
		robotBuy,
		timingtype,
		robotordernow,
		checkExchange,
		initAccountBalance,
		getBuyInfo,
		getUserInfo,
		getRbtPrice,
		buyRbt,
		initAccount,
		serachRobot
	} from '../api/api';

	export default {
		data() {
			return {
				src: [{
						img: require("../assets/img/header/NetCentricShort.png")
					},
					{
						img: require("../assets/img/header/NetCentricLong.png")
					},
					{
						img: require("../assets/img/header/NetCentriclong_and_short.png")
					},
					{
						img: require("../assets/img/header/NetCentricHedge.png")
					},

				],
				isUsdt: false,
				noExchange: false,
				checkWaring: false,
				lang: 0,
				waring: false,
				ifLogin: false,
				isAll: 1,
				serachName: "",
				pairSelected: "1",
				pairSuccess: true,
				backCD: 3,
				mkTab: 1,
				totalPage: 1,
				useList: {},
				pageInfo: {
					pageNum: 1,
					pageSize: 5,
				},
				robotBuyInfo: {
					robotId: "",
				},
				items: {
					robotId: "",
					robotLocalName: "",
					robotName: "",
				},
				timingTypeInfo: {
					robotId: "",
					timingType: "",
				},
				robotBuyList: {
					exchangeAccounts: [],
					id: {},
					netValue: "",
					coinLimit: "",
					coinSurplus: "",
				},
				addRobotOrderList: {},
				addRobotOrder: {
					coinAmount: "",
					exchangeAccountId: "",
					originPrice: "",
					payPrice: "",
					robotId: "",
					timingType: "",
					exchange: "",
				},
				buyInfo: {
					name: "",
					accounts: [],
				},
				authList: [],
				robotOrderList: [],
				//Sequence:"",
				robotTop: [],
				robotLong: [],
				robotShort: [],
				robotLs: [],
				robotList: {},
				empty: {},
				payPrice: "",
				originPrice: "",
				isAutoState: true,
				exchangeIdInfo: {
					exchangeId: "",
				},
				exchangeList: {
					exchange: "",
				},
				isPair: false,
				chosedRbtId: "",
				buyRbtParams: {
					pay: 0,
					account_id: "",
					day_type: "week",
					auto_renew: true,
					amount: 0,
					RobotName: "",
				},
			}
		},
		methods: {
			check_waring() {
				this.checkWaring = !this.checkWaring;
				if($(".childenop").val() == null) {
					$(".card-btm").attr("disabled", true)
					$(".card-btm").css("background-color", "#dcdcdc")
					$(".market-btm").attr("disabled", true)
					$(".market-btm").css("background-color", "#dcdcdc")
				} else {
					if(this.checkWaring == true) {
						$(".market-btm").attr("disabled", false)
						$(".market-btm").css("background-color", "#055ccb")
					} else {
						$(".market-btm").css("background-color", "#dcdcdc")
						$(".market-btm").attr("disabled", true)
					}
				}
			},
			toLogin() {
				this.$router.push('/m_login')
			},
			toBuy(val){
				this.$router.push({
					name: "m_buy",
					params: {
						name: "m_buy",
						iteam: val,
					}
				})
			},
			checkT() {
				var initAccountBalanceInfo = {};
				initAccountBalanceInfo.exchange = this.addRobotOrderList.exchange;
				initAccountBalanceInfo.exchangAccountId = this.addRobotOrder.exchangAccountId;
				initAccountBalanceInfo.robotId = this.items.robotId;
				if(this.checkWaring == true) {
					$(".market-btm").attr("disabled", false)
					$(".market-btm").css("background-color", "#055ccb")
				}
				initAccountBalance(initAccountBalanceInfo).then(data => {});

			},
			changeAuto() {
				this.buyRbtParams.auto_renew = !this.buyRbtParams.auto_renew;
			},
			initAccount(val) {
				var params = {};
				params.account_id = val;
				if(params.account_id) {

				} else {
					return false;
				}
				initAccount(params).then(data => {
					//					if(data.code == 200) {
					//
					//					} else {
					//						this.$toast.center(this.$t('msg.msg'+data.code));
					//
					//					}
				});
			},

			buyRbt() {

				swal({
						title: this.$t('netnew.ays') + "?",
						text: this.$t('netnew.buythisiteam'),
						buttons: {
							cancel: this.$t('login.tips3'),
							catch: {
								text: this.$t('login.tips2'),
							},
						},
						dangerMode: true,
					})
					.then((willDelete) => {
						if(willDelete) {
							if(this.buyRbtParams.account_id == "") {
								this.$toast.center(this.$t('netnew.selectjysAccount'));
								return false;
							}
							buyRbt(this.buyRbtParams).then(data => {
								if(data.code == 200) {
									this.$toast.center(this.$t('netnew.SubscribeSuccess'));
									$(".close").click();
								} else {
									this.$toast.center(this.$t('msg.msg' + data.code));

								}
							});

						}
					})

			},

			checkLogin() {
				if(localStorage.getItem("token")) {
					this.ifLogin = true;
					this.getUinfo();
				} else {
					this.ifLogin = false;
				}
			},
			loginCheck() {
				if(localStorage.getItem("token")) {
					this.ifLogin = true;
				} else {
					//	 this.$toast.center(this.$t('market.notLogin'));
					$(".login-check").click();
				}
			},
			checkLang() {
				if(localStorage.getItem("lang") == "zh-CN") {
					this.lang = 0;
				} else {
					this.lang = 1;
				}
			},
			marketTop() {
				marketTop().then(data => {
					if(data.code == 200) {
						this.robotTop = data.data;
						this.robotLong = [];
						this.robotShort = [];
						this.robotLs = [];
						if(this.robotTop.length > 0) {
							for(var i = 0; i < this.robotTop.length; i++) {
								//0 Short,1 Long, 2 short and long, 3 Hedg
								if(this.robotTop[i].TradeType == "Short") {
									this.robotTop[i].imgurl = 0;
								} else if(this.robotTop[i].TradeType == "Long") {
									this.robotTop[i].imgurl = 1;
								} else if(this.robotTop[i].TradeType == "Hedge") {
									this.robotTop[i].imgurl = 3;
								} else {
									this.robotTop[i].imgurl = 2;
								}

								if(this.robotTop[i].TradeType == "Long") {
									this.robotLong.push(this.robotTop[i]);
								} else if(this.robotTop[i].TradeType == "Short") {
									this.robotShort.push(this.robotTop[i]);
								} else {
									this.robotLs.push(this.robotTop[i]);
								}
							}
						}
					} else {
						this.$toast.center(this.$t('msg.msg' + data.code));
					}
				});
			},
			getRobotList() {
				getRobotList(this.pageInfo).then(data => {
					if(data.message == "success") {
						this.robotList = data.data.list;
						this.closeLoading();
					}
				});
			},
			stop_parent() {
				$("#diy_s").click();
			},
			toRobotDetail(robotId) {
				this.$router.push({
					path: 'm_marketDetails',
					query: {
						robotId: robotId
					}
				})
			},
			all_earnings(id) {
				this.isAll = id;
			},
			choseTime(id) {
				this.pairSelected = id;
				var params = {};
				params.robot_id = this.chosedRbtId;
				if(id == 1) {
					this.buyRbtParams.day_type = "week";
					params.day_type = "week"
					this.buyRbtParams.pay = this.buyRbtParams.amount * 7 * this.buyRbtParams.UnitPrice
				} else if(id == 2) {
					this.buyRbtParams.day_type = "month";
					params.day_type = "month"
					this.buyRbtParams.pay = this.buyRbtParams.amount * 30 * this.buyRbtParams.UnitPrice
				} else if(id == 3) {
					this.buyRbtParams.day_type = "year";
					params.day_type = "year"
					this.buyRbtParams.pay = this.buyRbtParams.amount * 365 * this.buyRbtParams.UnitPrice
				}

			},
			changeShare() {
				if(this.buyRbtParams.day_type == "week") {
					this.buyRbtParams.pay = this.buyRbtParams.amount * 7 * this.buyRbtParams.UnitPrice
				} else if(this.buyRbtParams.day_type == "month") {
					this.buyRbtParams.pay = this.buyRbtParams.amount * 30 * this.buyRbtParams.UnitPrice
				} else if(this.buyRbtParams.day_type == "year") {
					this.buyRbtParams.pay = this.buyRbtParams.amount * 365 * this.buyRbtParams.UnitPrice
				}
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
			isAuto() {
				this.isAutoState = !this.isAutoState;
			},
			openLoding() {
				this.$loading('loading...');
			},
			closeLoading() {
				this.$loading.close();
			},
			closeNow() {
				this.backCD = 3;
				$("#closeNd").click();

				this.pairSuccess = true;
				clearInterval(this.timerReg);
			},
			popularAuthor() {
				popularAuthor(this.empty).then(res => {
					if(res.code == 200) {
						this.authList = res.data;
					} else {
						this.$toast.center(res.msg)
					}
				});
			},
			changeMktab(val) {
				this.mkTab = val;
			},

			inity() {
				var _this = this;
				$("#addBuy").on("hidden.bs.modal", function() {
					$(".childenop").hide();
					_this.addRobotOrder.exchangAccountId = '';
					_this.addRobotOrderList = '';
					_this.infos = _this.addRobotOrder;
					_this.addRobotOrder.coinAmount = "";
					_this.pairSelected = "";
					_this.marketTop();
					_this.getRobotList();
					_this.payPrice = "";
					$(".tui-checkbox").prop("checked", true)
				});
			},
			getUinfo() {
				getUserInfo({}).then(data => {
					if(data.success == 0) {
						//						console.log(data.data);
						this.useList = data.data;
						this.getParams();
					} else {
						this.$toast.center(this.$t('msg.msg' + data.code));

					}
				});
			},
			getParams() {
				if(this.$route.params.id) {
					$('#buyRot').click();
					var params = {}
					params = this.$route.params.id
					params.Id = params.id;
					this.toBuy(params);
				}
			},
			serachRobot() {
				var params = {}
				params.name = this.serachName;
				serachRobot(params).then(data => {
					if(data.code = 200) {
						//                   console.log(data);
						this.robotTop = data.data;
						//0 Short,1 Long, 2 short and long, 3 Hedg
						if(this.robotTop != null) {
							for(var i = 0; i < this.robotTop.length; i++) {
								if(this.robotTop[i].TradeType == "Short") {
									this.robotTop[i].imgurl = 0;
								} else if(this.robotTop[i].TradeType == "Long") {
									this.robotTop[i].imgurl = 1;
								} else if(this.robotTop[i].TradeType == "Hedge") {
									this.robotTop[i].imgurl = 3;
								} else {
									this.robotTop[i].imgurl = 2;
								}
							}
						}
					} else {
						this.$toast.center(this.$t('msg.msg' + data.code));
					}
				});

			}

		},
		mounted: function() {
			this.checkLang(),
				this.marketTop(),
				this.checkLogin(),
				this.inity()

		},

		props: {

			main_img: {
				type: String,
				default: require("@/assets/img/robotmarket_header@2x.png")
			},
			search_icon: {
				type: String,
				default: require("@/assets/img/search@2x.png")
			},
			robot_img: {
				type: String,
				default: require("@/assets/img/005-artificial-intelligence-20@2x.png")
			},

			T2: {
				type: String,
				default: require("@/assets/img/20181211092127.png")
			},
			close: {
				type: String,
				default: require("@/assets/img/close.png")
			},
			group: {
				type: String,
				default: require("@/assets/img/group.png")
			},
		}
	}
</script>
<style>
	.m-center_box {
		width: 100%;
		position: relative;
	}

	.m_market_item_box {
		display: table;
		width: 100%;
	}

	.m_robot_item {
		font-size: 14px;
		letter-spacing: 0;
		/*border-bottom: 1px solid #ffffff12;*/
	}

	.m_robot_img {
		background: url('../assets/img/dw@2x.png') no-repeat;
		background-size: 100% 100%;
	}

	.m_des_title {
		font-size: 20px;
		color: #fff;
		width: 75%;
		margin-top: 15px;
	}

	.m_v_author {
		color: #718EBD;
		font-size: 14px;
	}

	.m_des_value {
		font-size: 15px;
		color: #fff;
		padding: 10%;
	}

	.m_des_field {
		font-size: 14px;
		color: #718EBD;
		padding: 10%;
	}

	.m_avaliable_box {
		line-height: 70px;
		margin-left: 10px;
		color: #718EBD;
	}

	.m_price_box {
		float: right;
		margin-right: 15px;
		line-height: 70px;
	}

	.m_current_price {
		font-size: 20px;
		margin-right: 5px;
	}
</style>
