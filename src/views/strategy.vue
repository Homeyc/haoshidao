<template>
	<div class="market_box">
		<button v-show="false" href="#buy_now" id="buyStr" data-toggle="modal"> {{$t('market.marketSubscribe')}}</button>
		<button v-show="false" href="#buy_success"  data-toggle="modal" id="buySuccess" > {{$t('market.marketSubscribe')}}</button>
		<div class="main_img" style="position: relative;">
			<img  v-show="$i18n.locale=='zh-CN'" :src="main_img">
			<img v-show="$i18n.locale=='en-US'" src="../assets/img/clsc_banner_en.png">
			<img v-show="$i18n.locale=='ko'" src="../assets/img/strategymarket_ko.png">
		</div>
		<div style="width: 1400px;margin: 0 auto;padding-bottom: 20px;margin-top: -450px;position: relative;">
			<div class="market_sort_box">
				<div class="lg-width sort_item" style="width: 10%;text-align: left;padding-left: 40px;padding-right: 40px;" :class="{'select_sort':mkTab==1}" @click="changeMktab(1)">{{$t('netnew.all')}}({{allStrategyNum}})</div>
				<div class="lg-width sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==2}" @click="changeMktab(2)">{{$t('netnew.BasicStrategy')}}({{baseStrategyNum}})</div>
				<div class="lg-width sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==3}" @click="changeMktab(3)">{{$t('netnew.StrategyDecision')}}({{decisionStrategyNum}})</div>
			</div>
			<div class="market_item_box" v-show="mkTab==1">


				<div class="component-box" v-for="list in strategyList" v-show="userType!=2||list.UnitPrice==0">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 260px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'" class="des_title">{{ list.StrategyType }}</div>
                            <div v-show="$i18n.locale=='zh-CN'" class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox" >
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.BasicStrategy')}}</div>
                            <div class="des_field">{{$t('netnew.StrategyType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 70%;">
                            <div v-show="$i18n.locale!='zh-CN'" style="color: #718EBD;" >{{list.Introduction}}</div>
                            <div v-show="$i18n.locale=='zh-CN'" style="color: #718EBD;" >{{list.IntroductionCn}}</div>
                        </div>
                    </div>
                    <div class="lg-width" style="width: 1159px;padding-left:8px;">
                       	<div class="price_box netWhite" style="display: inline-block;margin-top: 25px;">
                            <i class="current_price">{{list.UnitPrice}}</i><label class="unit">NET/{{$t('market.day')}}</label>
                        </div>
                        <div class="subscript_box" style="display: inline-block;float: right;">
                            <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseStrategy(list,'1')" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>

				<!--<div class="component-box" v-for="list in strategyList">
					<div class="lg-width cmp-imgbox" >
						<img :src="rw" style="width: 100%;" >
					</div>

					<div class="lg-width" style="width: 1080px;padding-left: 32px;">
						<div class="lg-width" style="width: 100%;">
							<div class="des_title" style="font-weight: 600;" >{{list.StrategyType}}</div>
						</div>

						<div class="lg-width" style="width:100%;margin-top:16px;">
								<div class="lg-width" style="width: 100%;text-align: left;">
									<label class="cmp-box-tit">{{$t('netnew.Description')}}: &nbsp;&nbsp;</label>
									<span >{{list.Introduction}}</span>
								</div>
						</div>
						<div class="lg-width" style="width:100%;margin-top:16px;">
								<div class="lg-width" style="width: 100%;text-align: left;">
									<label class="cmp-box-tit">{{$t('netnew.StrategyType')}}: &nbsp;&nbsp;</label>
									<span style="color: #3158E4;">{{$t('netnew.BasicStrategy')}} &nbsp;&nbsp;</span>
								</div>

						</div>
					</div>
					<div class="lg-width" style="width: 180px;">
						<div class="lg-width" style="text-align: center;width: 100%;margin-top: 15px;">
							<span style="font-size: 40px;color: #FF3232;font-weight: 600;margin-right: 5px;">{{list.UnitPrice}}</span>
							<span style="font-size: 14px;color: #FF3232;font-weight: 600;">NET/{{$t('market.day')}}</span>
							<div v-show="!ifLogin" style="margin-top: 40px;"><span class="cmp-botton" data-toggle="modal" href="#myModal" >{{$t('market.marketSubscribe')}}</span></div>
							<div v-show="ifLogin" style="margin-top: 40px;"><span class="cmp-botton" data-toggle="modal" href="#buy_now" @click="choseStrategy(list,'1')">{{$t('market.marketSubscribe')}}</span></div>
						</div>

					</div>
				</div>-->


				<div class="component-box" v-for="list in decisionList" v-show="userType!=2||list.UnitPrice==0">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 260px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'" class="des_title">{{ list.DecisionName }}</div>
                            <div v-show="$i18n.locale=='zh-CN'" class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox" >
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.StrategyDecision')}}</div>
                            <div class="des_field">{{$t('netnew.StrategyType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 70%;">
                            <div v-show="$i18n.locale!='zh-CN'" style="color: #718EBD;" >{{list.Introduction}}</div>
                            <div v-show="$i18n.locale=='zh-CN'" style="color: #718EBD;" >{{list.IntroductionCn}}</div>
                        </div>
                    </div>
                    <div class="lg-width" style="width: 1159px;padding-left:8px;">
                       	<div class="price_box netWhite" style="display: inline-block;margin-top: 25px;">
                            <i class="current_price">{{list.UnitPrice}}</i><label class="unit">NET/{{$t('market.day')}}</label>
                        </div>
                        <div class="subscript_box" style="display: inline-block;float: right;">
                            <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseStrategy(list,'2')" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>

				<!--<div class="component-box" v-for="list in decisionList">
					<div class="lg-width cmp-imgbox" >
						<img :src="rm" style="width: 100%;" >
					</div>

					<div class="lg-width" style="width: 1080px;padding-left: 32px;">
						<div class="lg-width" style="width: 100%;">
							<div class="des_title" style="font-weight: 600;" >{{list.DecisionName}}</div>
						</div>

						<div class="lg-width" style="width:100%;margin-top:16px;">
								<div class="lg-width" style="width: 100%;text-align: left;">
									<label class="cmp-box-tit">{{$t('netnew.Description')}}: &nbsp;&nbsp;</label>
									<span >{{list.Introduction}}</span>
								</div>
						</div>
						<div class="lg-width" style="width:100%;margin-top:16px;">
								<div class="lg-width" style="width: 100%;text-align: left;">
									<label class="cmp-box-tit">{{$t('netnew.StrategyType')}}: &nbsp;&nbsp;</label>
									<span style="color: #3158E4;">{{$t('netnew.StrategyDecision')}} &nbsp;&nbsp;</span>
								</div>

						</div>
					</div>
					<div class="lg-width" style="width: 180px;">
						<div class="lg-width" style="text-align: center;width: 100%;margin-top: 15px;">
							<span style="font-size: 40px;color: #FF3232;font-weight: 600;margin-right: 5px;">{{list.UnitPrice}}</span>
							<span style="font-size: 14px;color: #FF3232;font-weight: 600;">NET/{{$t('market.day')}}</span>
							<div v-show="!ifLogin" style="margin-top: 40px;"><span class="cmp-botton" data-toggle="modal" href="#myModal" >{{$t('market.marketSubscribe')}}</span></div>
							<div v-show="ifLogin" style="margin-top: 40px;"><span class="cmp-botton" data-toggle="modal" href="#buy_now" @click="choseStrategy(list,'2')">{{$t('market.marketSubscribe')}}</span></div>
						</div>

					</div>
				</div>-->







			</div>
			<div class="market_item_box" v-show="mkTab==2">
				<div class="component-box" v-for="list in strategyList" v-show="userType!=2||list.UnitPrice==0">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 260px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'" class="des_title">{{ list.StrategyType }}</div>
                            <div v-show="$i18n.locale=='zh-CN'" class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox" >
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.BasicStrategy')}}</div>
                            <div class="des_field">{{$t('netnew.StrategyType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 70%;">
                            <div v-show="$i18n.locale!='zh-CN'" style="color: #718EBD;" >{{list.Introduction}}</div>
                            <div v-show="$i18n.locale=='zh-CN'" style="color: #718EBD;" >{{list.IntroductionCn}}</div>
                        </div>
                    </div>
                    <div class="lg-width" style="width: 1159px;padding-left:8px;">
                       	<div class="price_box netWhite" style="display: inline-block;margin-top: 25px;">
                            <i class="current_price">{{list.UnitPrice}}</i><label class="unit">NET/{{$t('market.day')}}</label>
                        </div>
                        <div class="subscript_box" style="display: inline-block;float: right;">
                            <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseStrategy(list,'1')" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>
			</div>

			<div class="market_item_box" v-show="mkTab==3">
				<div class="component-box" v-for="list in decisionList" v-show="userType!=2||list.UnitPrice==0">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 260px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'" class="des_title">{{ list.DecisionName }}</div>
                            <div v-show="$i18n.locale=='zh-CN'" class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox" >
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.StrategyDecision')}}</div>
                            <div class="des_field">{{$t('netnew.StrategyType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 70%;">
                            <div v-show="$i18n.locale!='zh-CN'" style="color: #718EBD;" >{{list.Introduction}}</div>
                            <div v-show="$i18n.locale=='zh-CN'" style="color: #718EBD;" >{{list.IntroductionCn}}</div>
                        </div>
                    </div>
                    <div class="lg-width" style="width: 1159px;padding-left:8px;">
                       	<div class="price_box netWhite" style="display: inline-block;margin-top: 25px;">
                            <i class="current_price">{{list.UnitPrice}}</i><label class="unit">NET/{{$t('market.day')}}</label>
                        </div>
                        <div class="subscript_box" style="display: inline-block;float: right;">
                            <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseStrategy(list,'2')" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>
			</div>
		</div>
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="buy_now" class="modal fade" >
			<div class="modal-dialog" style="width: 505px !important;">
				<div class="modal-content pair-box" style="width: 505px !important;height: 550px;position: relative;">
					<div class="lg-row" >
						<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
							<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('market.marketSubscribe')}}</span>
							<button type="button" class="close" style="position: absolute;right: 5px;top: 5px; display: none;" data-dismiss="modal" aria-hidden="true"><img :src="close"/></button>
						</div>
						<div style="padding-left: 57px;padding-right: 57px;">
							<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
								<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
									<span style="font-size:16px;color: #718EBD;">{{$t('market.theNameMarket')}}</span>
								</div>
								<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;margin-bottom: 15px;">
									<span v-show="$i18n.locale!='zh-CN'" style="font-size: 16px;color: #FFFFFF;" >{{thisName}}</span>
									<span v-show="$i18n.locale=='zh-CN'" style="font-size: 16px;color: #FFFFFF;" >{{thisLName}}</span>
								</div>
							</div>
							<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
								<div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
									<span style="font-size:16px;color: #718EBD;"> {{$t('market.Numberdays')}} </span>
								</div>
								<div class="lg-width" style="width: 70%;margin-top: 30px;text-align: left;margin-left: 2%;">
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
							<div style="display: table;width: 100%;">
								<input class="boxs" checked="checked"  style="margin-top: 12px; margin-right: 5px;margin-bottom: 15px;" type="checkBox" @change="changeAuto">
								<!--<input name="checkbox" checked="checked" value="0" type="checkbox" class="tui-checkbox" v-model="auto_renew"  style="margin-top: 30px; margin-right: 5px;margin-bottom: 15px;">-->
								<span style="color: #718EBD;font-size: 14px">{{ $t("modalbox.renewal") }}</span>
							</div>

						</div>
						<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;border-top: 1px #ffffff1a solid;">
							<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;margin-left: 57px;">{{payPrice}}<input type="hidden" v-model="originPrice"/></span>
							<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
							<button class="card-btm" @click="toPair()"  style="position: relative;float: right;">
								{{$t('market.confirm')}}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Buysuccess></Buysuccess>
		 <!--<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="buy_now" class="modal fade">
			<div class="modal-dialog">
				<div class="modal-content pair-box" style="width: 520px;padding: 20px;height: 300px;">
					<div class="lg-row" v-show="pairSuccess">
						<div class="lg-width" style="width: 100%;margin-top: 3px;text-align: center;">
							<span style="color:#055ccb;font-size: 30px;">{{$t('market.buy')}}</span>
							<button type="button" class="close" style="position: absolute;right: 5px;top: 5px;" data-dismiss="modal" aria-hidden="true"><img :src="close"/></button>
						</div>
						<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;">
							<span style="font-size: 24px;color: #999999;">{{$t('market.theNameMarket')}}</span>
						</div>
						<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;">
							<span style="font-size: 24px;color: #055ccb;" >{{thisName}}</span>
						</div>
						<div class="lg-width" style="width: 24%;margin-top: 37px;text-align: left;">
							<span style="font-size: 24px;color: #999999;"> {{$t('market.Numberdays')}} </span>
						</div>
						<div class="lg-width" style="width: 70%;margin-top: 30px;text-align: left;margin-left: 3%;">
							<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime('1')">{{$t('market.aMonth')}}</a>
							<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime('2')">{{$t('market.season')}}</a>
							<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime('3')">{{$t('market.aYear')}}</a>
						</div>

						<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;">
							<span style="font-size: 24px;color: #999999;">{{$t('market.balance')}}</span>
						</div>
						<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;">
							<div>
								<span style="font-size: 22px;color: #e80d0d;">{{netValue}}</span>
								<span style="font-size:
                					 20px;color: #999999;">NET</span>
								<input name="checkbox" checked="checked" value="0" type="checkbox" class="tui-checkbox" v-model="auto_renew"  style="margin-left: 60px;margin-top: -2px; margin-right: 5px;"> <span style="color: #055ccb;">{{ $t("modalbox.renewal") }}</span>
							</div>

						</div>
						<div class="lg-width" style="width: 100%;margin-top: 10px;text-align: right;margin-bottom: 5px;">
							<span style="font-size: 22px;color: #055ccb;">{{payPrice}}<input type="hidden" v-model="originPrice"/></span>
							<span style="font-size: 20px;color: #999999;margin-right: 10px;">NET</span>
							<button class="card-btm" @click="toPair()" >{{$t('market.confirm')}}</button>
						</div>

					</div>
				</div>
			</div>
		</div>-->

	</div>
</template>
<script>
	import {getComponentList,getNetBalance,getUserInfo,buyUnit,checkUnit,getStrategy,buyStrategy,buyDecision} from '../api/api';
	import swal from 'sweetalert';
	import Buysuccess from "../components/Buysuccess.vue";
	export default {
		components: {
    		Buysuccess
  		},
		data() {
			return {
				baseStrategyNum:0,
				decisionStrategyNum:0,
				src: [
			        { img: require("../assets/img/header/Basic Strategy.png")},
					{ img: require("../assets/img/header/Strategy Decision.png") },


			    ],
				isUsdt: false,
				noExchange: false,
				checkWaring: false,
				lang: 0,
				mkTab: 1,
				thisLName:"",
				waring: false,
				ifLogin: false,
				isAll: 1,
				pairSelected: 1,
				pairSuccess: true,
				backCD: 3,
				totalPage: 1,
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
				authList: [],
				robotOrderList: [],
				//Sequence:"",
				robotTop: {},
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
				useList:[],
				UnitRobotList:[],
				DecisionMakingRuleList:[],
				RiskManagementList:[],
				AssetAllocationList:[],
				RobotWeightingList:[],
				FundOptimizationList:[],
				OrderSmartRouterList:[],
				OrderExecutionList:[],
				strategyList:[],
				decisionList:[],
				thisName:"",
				netValue:"",
				choosedUnit:"",
				day_type:"",
				isPair:true,
				buyType:'',
				auto_renew:true,
				userType:1,
			}
		},
		methods: {
			//获取用户信息
			getUinfo() {
				getUserInfo({}).then(data => {
					if(data.success == 0) {
						this.useList = data.data;
						this.userType=data.data.userType;
						this.getParams();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},

			getNetBalance(){
				var params={}
				params.id=this.useList.userId
				getNetBalance(params).then(data => {
					if(data.code == 200) {
						this.netValue=data.data

					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
			getStrategy(){
				 getStrategy().then(data => {
                    if (data.code == 200) {
                    	this.allStrategyNum = 0;
                    	this.baseStrategyNum = 0;
                    	this.decisionStrategyNum =0;
                      this.strategyList=[];
                      this.decisionList=[];

                      if(data.data.strategy!=null){
                      	this.strategyList=data.data.strategy;
                      	for(var i=0;i<this.strategyList.length;i++){
                      		this.baseStrategyNum++
                      		this.strategyList[i].imgurl=0;
                      	}
                      }

                      if(data.data.decision!=null){
                      	this.decisionList=data.data.decision;
                      	for(var i=0;i<this.decisionList.length;i++){
                      		this.decisionStrategyNum++
                      		this.decisionList[i].imgurl=1;
                      	}
                      }
                    }else{
                    	this.$toast.center(this.$t('msg.msg'+data.code))
                    }
                });
			},
			changeMktab(val){
				this.mkTab=val;
			},
			choseTime(id) {
                this.pairSelected = id;
                if(id=='1'){
                	this.payPrice=this.choosedUnit.UnitPrice*30
                	this.day_type="30day";
                }else if(id=='2'){
                	this.payPrice=this.choosedUnit.UnitPrice*90
                	this.day_type="90day";
                }else if(id=='3'){
                	this.payPrice=this.choosedUnit.UnitPrice*365
                	this.day_type="year";
                }
            },
			choseStrategy(list,type){
				if(type=='1'){
					this.thisName=list.StrategyType;
					this.thisLName=list.LocalName;
				}else{
					this.thisName=list.DecisionName;
					this.thisLName=list.LocalName;
				}
				this.choosedUnit=list;
				this.buyType=type;
				this.getNetBalance();
				this.pairSelected=1;
				this.payPrice=this.choosedUnit.UnitPrice*30
				this.day_type="30day";
			},
			changeAuto(){
				this.auto_renew=!this.auto_renew;
			},
			toPair(){


				swal({
				  title: this.$t('netnew.ays')+"?",
				  text: this.$t('netnew.buythisiteam'),
				  buttons: {
				    cancel: this.$t('login.tips3'),
				    catch: {
				      text: this.$t('login.tips2'),
				      value: "catch",
				    },
				  },
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {

	                var params={};
					params.day_type=this.day_type;
					params.user_id=this.useList.userId;
					params.product_id=this.choosedUnit.Id;
					params.auto_renew=this.auto_renew;
					if(this.buyType=='1'){
						buyStrategy(params).then(data => {
							if(data.code == 200) {
								$(".close").click();
								$("#buySuccess").click();
								setTimeout(function() {
									$(".close").click();
								},3500)
							} else {
								this.$toast.center(this.$toast.center(this.$t('netnew.nonet')));

							}
						});
					}else{
						buyDecision(params).then(data => {
							if(data.code == 200) {
								$(".close").click();
								$("#buySuccess").click();
								setTimeout(function() {
									$(".close").click();
								},3500)
							} else {
								this.$toast.center(this.$toast.center(this.$t('netnew.nonet')));

							}
						});
					}
				  }
				})
			},
			inity() {
                var _this = this;
                 $("#buy_success").on("hidden.bs.modal", function () {
                    $("body").css("padding-right","0px")
                });
            },
			getParams(){
				if(this.$route.params.id){
					$('#buyStr').click();
					var params={}
					params=this.$route.params.id
					this.choseStrategy(params,'1');
				}
			},
		},
		mounted(){
			this.getStrategy();
			this.inity();
			if(localStorage.getItem('token')){
				this.getUinfo();
				this.ifLogin=true;
			}else{
				this.ifLogin=false;
			}
		},
		computed:{//setter
			allStrategyNum:{
				get(){
					let sum = this.baseStrategyNum + this.decisionStrategyNum
					return sum
				},
				set(){
					let sum = this.baseStrategyNum + this.decisionStrategyNum
					return sum
				}
			}
		},
		props: {
			main_img: {
				type: String,
				default: require("@/assets/img/strategymarket_banner@2x.png")
			},
			search_icon: {
				type: String,
				default: require("@/assets/img/search.png")
			},
			robot_img: {
				type: String,
				default: require("@/assets/img/005-artificial-intelligence-20@2x.png")
			},
			T2: {
				type: String,
				default: require("@/assets/img/T2.jpeg")
			},
			login_logo: {
				type: String,
				default: require("@/assets/img/login_logo.png")
			},
			unitrbt: {
				type: String,
				default: require("@/assets/img/unitrbt.png")
			},
			dmr: {
				type: String,
				default: require("@/assets/img/dmr.png")
			},
			rw: {
				type: String,
				default: require("@/assets/img/icon_Robot Weighting@2x.png")
			},
			osr: {
				type: String,
				default: require("@/assets/img/icon_Order Smart Router@2x.png")
			},
			ioe: {
				type: String,
				default: require("@/assets/img/icon_Order Execution@2x.png")
			},
			ifo: {
				type: String,
				default: require("@/assets/img/icon_Fund Optimization@2x.png")
			},
			iaa: {
				type: String,
				default: require("@/assets/img/icon_Asset Allocation@2x.png")
			},
			rm: {
				type: String,
				default: require("@/assets/img/rm.png")
			},
			close:{
				type: String,
				default: require("@/assets/img/close.png")
			},
			group:{
				type: String,
				default: require("@/assets/img/group.png")
			},
		}
	}
</script>
<style>

</style>
