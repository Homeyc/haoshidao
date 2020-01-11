<template>
	<div class="lg-width" style="background: #000710;width: 100%;">
		<div class="swiper-container" v-show="$i18n.locale=='zh-CN'">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img class="img-fluid" src="../assets/img/banner/m_banner1@2x.png" style='width: 100%;'>

					<a id="twitter" class="a-cancel banner_btn light-btn" href="https://twitter.com/netcentricreal" target="_blank">
						{{$t('netnew.FollowNetCentric')}}
					</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img">
				</div>
				<div class="swiper-slide">
					<img  class="img-fluid" src="../assets/img/banner/m_banner2@2x.png" style='width: 100%;'>

					<a v-if="ifLogin" @click="toPre" class="a-cancel banner_btn light-btn">{{$t('netnew.RegisterNow')}}</a>
					<a v-if="!ifLogin" @click="toReg" class="a-cancel banner_btn light-btn">{{$t('netnew.RegisterNow')}}</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img">
				</div>
				<div class="swiper-slide">
					<img class="img-fluid" src="../assets/img/banner/m_banner3@2x.png" style='width: 100%;'>

					<a class="a-cancel banner_btn light-btn" >{{$t('netnew.StartLearning')}}</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="swiper-container" v-show="$i18n.locale=='en-US'">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img class="img-fluid" src="../assets/img/banner/m_banner1_en@2x.png" style='width: 100%;'>
					<a id="twitter" class="a-cancel banner_btn light-btn" href="https://twitter.com/netcentricreal" target="_blank">
						Follow NetCentric
					</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img">
				</div>
				<div class="swiper-slide">
					<img class="img-fluid" src="../assets/img/banner/m_banner2_en@2x.png" style='width: 100%;'>
					<a v-if="ifLogin" @click="toPre" class="a-cancel banner_btn light-btn">Register Now</a>
					<a v-if="!ifLogin" @click="toReg" class="a-cancel banner_btn light-btn">Register Now</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img">
				</div>
				<div class="swiper-slide">
					<img class="img-fluid" src="../assets/img/banner/m_banner3_en@2x.png" style='width: 100%;'>
					<a class="a-cancel banner_btn light-btn" >Start Learning</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>

		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 30px;">
			<span class="midTitle select_robot_title_font">{{$t('net.markets')}}</span>
			<hr style="width: 42px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 32px auto;">
		</div>


		<!--机器人1-->
		<div class="lg-width chartBox">

			<div class="lg-width rob-name" style="margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;width: 95%;">
				<span v-show="$i18n.locale=='en-US'" class="chartBox_robot_name_font">{{roborInfoList1.RobotName}}</span>
				<span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font">{{roborInfoList1.local_name}}</span>
			</div>
			<div class="lg-width robot_owner">
				<img src="../assets/img/20181211092127.png" style="width: 20px;">
				<span style="margin-left: 5px;" class="chartBox_robot_owner_font">{{roborInfoList1.owner}}</span>
				<div class="star_bg" style="float: right;" :style="{background:'url('+star+')'}">
					<a class="star star_1"></a>
					<a class="star star_2"></a>
					<a class="star star_3"></a>
					<a class="star star_4"></a>
					<a class="star star_5"></a>
				</div>

			</div>
			<div class="lg-width" style="width: 90%;margin-left: 5%;margin-right: 5%;text-align: left;margin-top: 5px;position: relative;">
				<div style="position: absolute;top: 0px;left: 5px;">
					<!--<span class="return_font">{{$t('net.Cumulative')}}</span>-->
					<div class="chartBox_info_title_font robot_return">
						<span><span><img
	                                        style="margin:0 4px" :src="timeline1"/></span>{{$t('net.Return')}}</span>
						<!--<span style="color:#61a0a8;margin-left:6px;font-size: 12px;"><span><img
	                                        style="margin:0 4px" :src="timeline3"/></span>{{$t('net.cumprod')}}</span>
	                                <span style="color:#2f4554;margin-left:6px;font-size: 12px;"><span><img
	                                        style="margin:0 4px" :src="timeline2"/></span>{{$t('net.pricechange')}}</span>-->
					</div>
				</div>
				<div id="container" style="height: 300px;width: 100%;"></div>
			</div>
			<div class="lg-width robot_info_div">
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Trade <br>Type</span>
						<span v-show="$i18n.locale=='zh-CN'">交易类型</span>
						<span v-show="$i18n.locale=='ko'">거래 유형</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{roborInfoList1.trade_type}}</span>
					</div>
				</div>
				<div class="lg-width text_center quarter">
					<div class="card-title chartBox_info_title_font"><span>{{$t('net.annualized')}}</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font" style="color: green;">{{roborInfoList1.annualized_return|tofix}}%</span>
					</div>
				</div>
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Average <br>Return</span>
						<span v-show="$i18n.locale=='zh-CN'">平均收益(笔)</span>
						<span v-show="$i18n.locale=='ko'">평균수익(건)</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font" style="color: green;">{{roborInfoList1.average_return_per_trade|tofix}}%</span>
					</div>
				</div>
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Accuracy  <br>Rate</span>
						<span v-show="$i18n.locale=='zh-CN'">准确率</span>
						<span v-show="$i18n.locale=='ko'">정확도</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{roborInfoList1.win_rate*100|tofix}}%</span>
					</div>
				</div>
			</div>
			<div class="lg-width left_div">
				<div>
					<a class="left_amount_color">{{$t('netnew.unitfe')}}/{{$t('market.theRemainingShare')}}：{{ roborInfoList1.base_multiple }}{{ roborInfoList1.BaseCurrency }}/{{ roborInfoList1.coin_limit }}{{ roborInfoList1.BaseCurrency }}</a>
				</div>
				<div>
					<a class="left_amount_color">{{$t('netnew.sellfe')}}/{{$t('netnew.sumfe')}}：{{ roborInfoList1.occupied_limit }}{{ roborInfoList1.BaseCurrency }}/{{ roborInfoList1.max_quota }}{{ roborInfoList1.BaseCurrency }}</a>
				</div>

			</div>
			<div class="lg-width robot_card_bottom">
				<div class="lg-width chart-btn " @click="toMarkets(robotId1)">
					<a class="robot_detail">{{$t('market.details')}}</a>
				</div>
				<div class="lg-width chart-btn ">
					<a  class="a-cancel">
						{{$t('market.marketSubscribe')}}
					</a>
				</div>
				<img src="../assets/img/dybtn@2x.png" v-if="ifLogin" @click="toBuy(roborInfoList1)" class="light-btn chart-btnImg">
				<img src="../assets/img/dybtn@2x.png" v-if="!ifLogin" @click="loginCheck" class="light-btn chart-btnImg">
			</div>

		</div>

		<!--机器人2-->
		<div class="lg-width chartBox" style="margin-top: 35px;">

			<div class="lg-width rob-name" style="margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;">
				<span v-show="$i18n.locale=='en-US'" class="chartBox_robot_name_font">{{roborInfoList2.RobotName}}</span>
				<span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font">{{roborInfoList2.local_name}}</span>
			</div>

			<div class="lg-width robot_owner">
				<img src="../assets/img/20181211092127.png" style="width: 20px;">
				<span style="margin-left: 5px;" class="chartBox_robot_owner_font">{{roborInfoList2.owner}}</span>
				<div class="star_bg" style="float: right;" :style="{background:'url('+star+')'}">
					<a class="star star_1"></a>
					<a class="star star_2"></a>
					<a class="star star_3"></a>
					<a class="star star_4"></a>
					<a class="star star_5"></a>
				</div>
			</div>
			<div class="lg-width" style="width: 90%;margin-left: 5%;margin-right: 5%;text-align: left;margin-top: 5px;position: relative;">
				<div style="position: absolute;top: 0px;left: 5px;">
					<!--<span class="return_font">{{$t('net.Cumulative')}}</span>-->
					<div class="chartBox_info_title_font robot_return">
						<span><span><img
	                                        style="margin:0 4px" :src="timeline1"/></span>{{$t('net.Return')}}</span>
						<!--<span style="color:#61a0a8;margin-left:6px;font-size: 12px;"><span><img
	                                        style="margin:0 4px" :src="timeline3"/></span>{{$t('net.cumprod')}}</span>
	                                <span style="color:#2f4554;margin-left:6px;font-size: 12px;"><span><img
	                                        style="margin:0 4px" :src="timeline2"/></span>{{$t('net.pricechange')}}</span>-->
					</div>
				</div>
				<div id="container2" style="height: 300px;width: 100%;"></div>
			</div>
			<div class="lg-width robot_info_div">
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Trade <br>Type</span>
						<span v-show="$i18n.locale=='zh-CN'">交易类型</span>
						<span v-show="$i18n.locale=='ko'">거래 유형</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{roborInfoList2.trade_type}}</span>
					</div>
				</div>
				<div class="lg-width text_center quarter">
					<div class="card-title chartBox_info_title_font"><span>{{$t('net.annualized')}}</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font" style="color: green;">{{roborInfoList2.annualized_return|tofix}}%</span>
					</div>
				</div>
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Average <br>Return</span>
						<span v-show="$i18n.locale=='zh-CN'">平均收益(笔)</span>
						<span v-show="$i18n.locale=='ko'">평균수익(건)</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font" style="color: green;">{{roborInfoList2.average_return_per_trade|tofix}}%</span>
					</div>
				</div>
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Accuracy  <br>Rate</span>
						<span v-show="$i18n.locale=='zh-CN'">准确率</span>
						<span v-show="$i18n.locale=='ko'">정확도</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{roborInfoList2.win_rate*100|tofix}}%</span>
					</div>
				</div>
			</div>
			<div class="lg-width left_div">
				<div>
					<a class="left_amount_color">{{$t('netnew.unitfe')}}/{{$t('market.theRemainingShare')}}：{{ roborInfoList2.base_multiple }}{{ roborInfoList2.BaseCurrency }}/{{ roborInfoList2.coin_limit }}{{ roborInfoList2.BaseCurrency }}</a>
				</div>
				<div>
					<a class="left_amount_color">{{$t('netnew.sellfe')}}/{{$t('netnew.sumfe')}}：{{ roborInfoList2.occupied_limit }}{{ roborInfoList2.BaseCurrency }}/{{ roborInfoList2.max_quota }}{{ roborInfoList2.BaseCurrency }}</a>
				</div>
			</div>
			<div class="lg-width robot_card_bottom">
				<div class="lg-width chart-btn " @click="toMarkets(robotId2)">
					<a class="robot_detail">{{$t('market.details')}}</a>
				</div>
				<div class="lg-width chart-btn ">
					<a  class="a-cancel">
						{{$t('market.marketSubscribe')}}
					</a>
				</div>
				<img src="../assets/img/dybtn@2x.png" v-if="ifLogin" @click="toBuy(roborInfoList2)" class="light-btn chart-btnImg">
				<img src="../assets/img/dybtn@2x.png" v-if="!ifLogin" @click="loginCheck" class="light-btn chart-btnImg">
			</div>

		</div>

		<!--机器人3-->
		<div class="lg-width chartBox" style="margin-top: 35px;">
			<div class="lg-width rob-name" style="margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;">
				<span v-show="$i18n.locale=='en-US'" class="chartBox_robot_name_font">{{roborInfoList3.RobotName}}</span>
				<span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font">{{roborInfoList3.local_name}}</span>
			</div>

			<div class="lg-width robot_owner">
				<img src="../assets/img/20181211092127.png" style="width: 20px;">
				<span style="margin-left: 5px;" class="chartBox_robot_owner_font">{{roborInfoList3.owner}}</span>
				<div class="star_bg" style="float: right;" :style="{background:'url('+star+')'}">
					<a class="star star_1"></a>
					<a class="star star_2"></a>
					<a class="star star_3"></a>
					<a class="star star_4"></a>
					<a class="star star_5"></a>
				</div>
			</div>
			<div class="lg-width" style="width: 90%;margin-left: 5%;margin-right: 5%;text-align: left;margin-top: 5px;position: relative;">
				<div style="position: absolute;top: 0px;left: 5px;">
					<div class="chartBox_info_title_font robot_return">
						<span><span><img style="margin:0 4px" :src="timeline1"/></span>{{$t('net.Return')}}</span>
					</div>
				</div>
				<div id="container3" style="height: 300px;width: 100%;"></div>
			</div>
			<div class="lg-width robot_info_div">
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Trade <br>Type</span>
						<span v-show="$i18n.locale=='zh-CN'">交易类型</span>
						<span v-show="$i18n.locale=='ko'">거래 유형</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{roborInfoList3.trade_type}}</span>
					</div>
				</div>
				<div class="lg-width text_center quarter">
					<div class="card-title chartBox_info_title_font"><span>{{$t('net.annualized')}}</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font" style="color: green;">{{roborInfoList3.annualized_return|tofix}}%</span>
					</div>
				</div>
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Average <br>Return</span>
						<span v-show="$i18n.locale=='zh-CN'">平均收益(笔)</span>
						<span v-show="$i18n.locale=='ko'">평균수익(건)</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font" style="color: green;">{{roborInfoList3.average_return_per_trade|tofix}}%</span>
					</div>
				</div>
				<div class="lg-width quarter text_center">
					<div class="card-title chartBox_info_title_font">
						<span v-show="$i18n.locale=='en-US'">Accuracy  <br>Rate</span>
						<span v-show="$i18n.locale=='zh-CN'">准确率</span>
						<span v-show="$i18n.locale=='ko'">정확도</span>
					</div>
					<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{roborInfoList3.win_rate*100|tofix}}%</span>
					</div>
				</div>
			</div>
			<div class="lg-width left_div">
				<div>
					<a class="left_amount_color">{{$t('netnew.unitfe')}}/{{$t('market.theRemainingShare')}}：{{ roborInfoList3.base_multiple }}{{ roborInfoList3.BaseCurrency }}/{{ roborInfoList3.coin_limit }}{{ roborInfoList3.BaseCurrency }}</a>
				</div>
				<div>
					<a class="left_amount_color">{{$t('netnew.sellfe')}}/{{$t('netnew.sumfe')}}：{{ roborInfoList3.occupied_limit }}{{ roborInfoList3.BaseCurrency }}/{{ roborInfoList3.max_quota }}{{ roborInfoList3.BaseCurrency }}</a>
				</div>
			</div>
			<div class="lg-width robot_card_bottom">
				<div class="lg-width chart-btn " @click="toMarkets(robotId3)">
					<a class="robot_detail">{{$t('market.details')}}</a>
				</div>
				<div class="lg-width chart-btn ">
					<a  class="a-cancel">
						{{$t('market.marketSubscribe')}}
					</a>
				</div>
				<img src="../assets/img/dybtn@2x.png" v-if="ifLogin" @click="toBuy(roborInfoList3)" class="light-btn chart-btnImg">
				<img src="../assets/img/dybtn@2x.png" v-if="!ifLogin" @click="loginCheck" class="light-btn chart-btnImg">
			</div>
		</div>

		<div class="lg-width" style="text-align: center;margin-top: 60px;width: 100%;">
				<p class="midTitle solution_title">{{ $t('net.solution_title') }}</p>
				<hr style="width: 177px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0 auto;">
				<div class="row lg-row" style="margin: 20px auto; text-align: center;position: relative;">
					<div class="lg-width bf-box">
						<div style="margin-top: 12%;">
							<span style="color: #FFFFFF;font-size:18px ;">{{ $t('netnew.strategy') }}</span>
						</div>
						<div style="margin-top: 15%;text-align: center;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/jccl@2x.png" style="width: 139px;margin-left: 5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/jccl_en@2x.png" style="width: 139px;margin-left: 5px;">
							<img src="../assets/img/link@2x.png" style="width: 28px;margin-left: -5px;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/clzj@2x.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/clzj_en@2x.png" style="width: 139px;margin-left: -5px;">
						</div>
					</div>
					<img src="../assets/img/lsjt@2x.png" style="width: 36px;position: absolute;left:24.5%;top:18%">
					<div class="lg-width bf-box" style="margin-top: 25px;" >
						<div style="margin-top: 12%;">
							<span style="color: #FFFFFF;font-size:18px ;">{{ $t('netnew.comMarket') }}</span>
						</div>
						<div style="margin-top: 15%;text-align: center;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/dyjqr@2x.png" style="width: 139px;margin-left: 5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/dyjqr_en@2x.png" style="width: 139px;margin-left: 5px;">
							<img src="../assets/img/link2.png" style="width: 28px;margin-left: -5px;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/jqrzj@2x.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/jqrzj@2x_en.png" style="width: 139px;margin-left: -5px;">
						</div>
					</div>
					<img src="../assets/img/lansjt@2x.png" style="width: 36px;position: absolute;left:46%;top:47.5%">
					<div class="lg-width bf-box" style="margin-top: 25px;">
						<div style="margin-top: 12%;">
							<span style="color: #FFFFFF;font-size:18px ;">{{ $t('netnew.robotMarket') }}</span>
						</div>
						<div style="margin-top: 15%;text-align: center;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/lhjqr@2x.png" style="width: 296px;margin-left: 0px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/lhjqr_en@2x.png" style="width: 296px;margin-left: 0px;">
						</div>
					</div>
					<img src="../assets/img/lansjt@2x.png" style="width: 36px;position: absolute;left:46%;top:72.5%">
					<div class="lg-width bf-box" style="margin-top: 25px;">
						<div style="margin-top: 12%;">
							<span style="color: #FFFFFF;font-size:18px ;">{{ $t('netnew.xnbMarket') }}</span>
						</div>
						<div style="margin-top: 15%;text-align: center;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/yellowlhjqr@2x.png" style="width: 139px;margin-left: 5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/yellowlhjqr_en@2x.png" style="width: 139px;margin-left: 5px;">
							<img src="../assets/img/yellowlink@2x.png" style="width: 28px;margin-left: -5px;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/jys@2x.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/jys_en@2x.png" style="width: 139px;margin-left: -5px;">
						</div>
					</div>

				</div>

			</div>
			<!--<div class="lg-width" style="text-align: center;margin-top: 60px;width: 100%;">
				<p class="midTitle solution_title">{{$t('net.agency')}}</p>
				<hr style="width: 177px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0 auto;">
				<div class="lg-width" style="width: 100%;text-align: center;">
					<img :src="Inv1" style="width: 60%;margin-top: 10%;">
					<img :src="Inv3" style="width: 60%;margin-top: 10%;">
					<img :src="Inv4" style="width: 60%;margin-top: 10%;">
					<img :src="Inv2" style="width: 60%;margin-top: 10%;">
					<img :src="Inv5" style="width: 60%;margin-top: 10%;">
				</div>
			</div>-->
			<div class="lg-width" style="width: 100%;text-align: center;margin-top: 80px;">
				<div ><span style="font-size: 24px;font-weight: 500;color: #fff;">{{$t('net.help')}}</span></div>
				<div style="margin-top: 40px;"><span  style="font-size: 20px;cursor: pointer;color: #718EBD;" @click="toQuotation()">{{$t('net.allquestion')}}</span></div>
				<div style="margin-top: 40px;"><a class="a-cancel" style="font-size: 20px;cursor: pointer;color: #718EBD;" @click="toQuotation2()">{{$t('net.lxwm')}}</a></div>

			</div>
			<div class="lg-width" style="width: 100%;text-align: center;margin-top: 40px;">
				<div><span style="font-size: 24px;font-weight: 500;color: #fff;">{{$t('net.centect')}}</span></div>
				<div style="margin-top: 40px;"  v-show="$i18n.locale=='zh-CN'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_CN.pdf" style="font-size: 20px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
				<div style="margin-top: 40px;"  v-show="$i18n.locale=='en-US'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_EN.pdf" style="font-size: 20px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
				<div style="margin-top: 40px;"  v-show="$i18n.locale=='ko'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_KR.pdf" style="font-size: 20px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
				<div style="margin-top: 40px;"><span style="font-size: 20px;color: #718EBD;" >{{$t('net.projectLog')}}</span></div>
				<div style="margin-top: 40px;"><span style="font-size: 20px;color: #718EBD;" >{{$t('net.brandsnow')}}</span></div>
			</div>
			<div class="lg-width" style="width: 100%;text-align: center;margin-top: 40px;">
				<div><span  style="font-size: 24px;font-weight: 500;color: #fff;">{{$t('net.supportExchange')}}</span></div>
				<div style="margin-top: 40px;"><a target="_blank" href="https://www.bibox365.com" class=" a-cancel" style="font-size: 20px;color: #718EBD;">Bibox</a></div>
				<div style="margin-top: 40px;"><a target="_blank" href="https://www.huobi.co" class=" a-cancel" style="font-size: 20px;color: #718EBD;">Huobi</a></div>
				<div style="margin-top: 40px;"><a target="_blank" href="https://www.binance.co" class=" a-cancel" style="font-size: 20px;color: #718EBD;">Binance</a></div>
			</div>
			<div class="lg-width" style="width: 100%;text-align:center;margin-top: 40px;">
				<div class="lg-width" style="width:100%;text-align: center;">
					<div style="font-size: 20px;color: #718EBD;font-weight: 500;text-align:center;">{{$t('net.WeChatSubscription')}}</div>
					<img :src="p_wechat" style="margin:10px 0;width:110px;">
				</div>
				<div class="lg-width" style="width:100%;text-align: center;">
					<div style="font-size: 20px;color: #718EBD;font-weight: 500;text-align:center;">{{$t('net.WeChatcustomservice')}}</div>
					<img :src="customer_service" style="margin:10px 0;width: 110px;">
				</div>
			</div>
	</div>

</template>

<script>
	import Swiper from "swiper"
	import { getMainRobotInfo, robotBuy, timingtype, checkExchange, initAccountBalance, robotordernow, getTopComponent, getTopStrategy } from '../api/api';
	export default {
		name: "HomeRobotFactory",
		props: {
			star: {
				type: String,
				default: require("@/assets/img/star.png")
			},
			timeline1: {
				type: String,
				default: require("@/assets/img/timeline1.png")
			},
			Inv1: {
				type: String,
				default: require("@/assets/img/Inv1.png")
			},
			Inv2: {
				type: String,
				default: require("@/assets/img/Inv2.png")
			},
			Inv3: {
				type: String,
				default: require("@/assets/img/Inv3.png")
			},
			Inv4: {
				type: String,
				default: require("@/assets/img/Inv4.png")
			},
			Inv5: {
				type: String,
				default: require("@/assets/img/Inv5.png")
			},
			p_wechat: {
				type: String,
				default: require("@/assets/img/qr/public_wechat.png")
			},
			customer_service: {
				type: String,
				default: require("@/assets/img/qr/customer_service.png")
			},
		},
		data() {
			return {
				waring: false,
				isUsdt: false,
				ifLogin: false,
				isAll: 1,
				userType: 2,
				pairSelected: 1,
				pairSuccess: true,
				backCD: 3,
				roborInfoList1: {},
				roborInfoList2: {},
				roborInfoList3: {},
				list1x1data: [],
				list1x2data: [],
				list1x3data: [],
				list1x4data: [],
				list2x4data: [],
				list3x4data: [],
				list1ydata: [],
				list2x1data: [],
				list2x2data: [],
				list2x3data: [],
				list2ydata: [],
				list3x1data: [],
				list3x2data: [],
				list3x3data: [],
				list3ydata: [],
				voidoShow: false,
				noExchange: false,
				Inv1show: false,
				Inv2show: false,
				Inv3show: false,
				Inv4show: false,
				Inv5show: false,
				payPrice: "",
				originPrice: "",
				isAutoState: true,
				pairSelected: "",
				robotId1: "",
				robotId2: "",
				robotId3: "",
				robotBuyInfo: {
					robotId: "",
				},
				timingTypeInfo: {
					robotId: "",
					timingType: "",
				},
				items: {
					robotId: "",
					robotLocalName: "",
					robotName: "",
				},
				addRobotOrder: {
					coinAmount: "",
					exchangAccountId: "",
					originPrice: "",
					payPrice: "",
					robotId: "",
					timingType: "",
					exchange: "",
				},
				robotBuyList: {
					exchangeAccounts: [],
					id: {},
					netValue: "",
					coinLimit: "",
					coinSurplus: "",
				},
				addRobotOrderList: {},
				exchangeList: {
					exchange: "",
				},
				exchangeIdInfo: {
					exchangeId: "",
				},
				componentList: {},
				strategyList: {},
			}
		},
		mounted() {
			this.openLoding(),
			this.checkLogin(),
			this.getMainRobotInfo();
			this.getparams();
			this.userType = this.COMMON.userType;
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: {
					delay: 5000, //1秒切换一次
				},
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
			})
		},

		methods: {
			mouseover() {

				if(localStorage.getItem("token")) {
					this.ifLogin = true;
				} else {
					this.ifLogin = false;
					//this.loginCheck();
				}
			},
			enter(index) {
				if(index == 1) {
					this.Inv1show = true;
				} else if(index == 2) {
					this.Inv2show = true;
				} else if(index == 3) {
					this.Inv3show = true;
				} else if(index == 4) {
					this.Inv4show = true;
				} else if(index == 5) {
					this.Inv5show = true;
				}
			},
			leave(index) {
				if(index == 1) {
					this.Inv1show = false;
				} else if(index == 2) {
					this.Inv2show = false;
				} else if(index == 3) {
					this.Inv3show = false;
				} else if(index == 4) {
					this.Inv4show = false;
				} else if(index == 5) {
					this.Inv5show = false;
				}
			},
			getTopComponent() {
				getTopComponent().then(data => {
					if(data.code == 200) {
						//						console.log(data);
						this.componentList = data.data;
					} else {
						this.$toast.center(this.$t('msg.msg' + data.code));
					}
				});
			},
			getTopStrategy() {
				getTopStrategy().then(data => {
					if(data.code == 200) {
						console.log(data);
						this.strategyList = data.data;
					} else {
						this.$toast.center(this.$t('msg.msg' + data.code));
					}
				});
			},
			toReg() {
				this.$router.push('/m_register')
			},
			toPre() {
				this.$router.push('/m_personInfo')
			},
			checkLogin() {
				if(localStorage.getItem("token")) {
					this.ifLogin = true;
				} else {
					this.ifLogin = false;
				}
			},
			loginCheck() {
				if(localStorage.getItem("token")) {
					this.ifLogin = true;
				} else {
					this.$router.push('/m_login')

				}
			},
			changeChartbox(index) {
				if(index == 2) {
					return "chartBoxLast"
				} else {
					return "chartBox"
				}
			},
			getBalance(items) {
				//console.log(items)
				this.robotBuyInfo.robotId = items.id;
				this.items.robotId = items.id;
				this.items.robotLocalName = items.local_name;
				this.items.robotName = items.name;
				// this.robotBuyInfo.token=localStorage.getItem("token")
				robotBuy(this.robotBuyInfo).then(data => {
					if(data.message == "success") {
						this.robotBuyList = data.data;
						this.robotBuyList.exchangeAccounts = data.data.exchangeAccounts;
						if(data.data.standardCoin == "USDT") {
							this.isUsdt = true;
						} else {
							this.isUsdt = false;
						}
						if(this.robotBuyList.exchangeAccounts.length == 0) {
							$(".childenop").remove()
							this.noExchange = false;
						} else {
							this.noExchange = true;
						}
						this.netValue = data.data.netValue;
					}
				});
			},
			getparams() {
				if(this.$route.params.relogin) {
					$('.login-check').click();
				}
			},
			toMarkets(robotId) {
				this.$router.push({
					path: 'm_marketDetails',
					query: {
						robotId: robotId
					}
				})
				window.scrollTo(0, 0);
				//this.$router.push('/markets')
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
			toMarket() {
				this.$router.push('/markets');
			},
			toUnitrobot() {
				this.$router.push('/unitMarket');
			},
			toStrategy() {
				this.$router.push('/strategy');
			},

			changeVshow() {
				this.voidoShow = !this.voidoShow;
				localStorage.setItem('voidoShow', this.voidoShow);
			},
			alertS() {
				this.$toast.center(data.message);
				alert(this.voidoShow);
			},
			playV() {
				if(localStorage.getItem("voidoShow")) {
					if(localStorage.getItem("voidoShow") == "false") {
						$("#playVideo").click();
					} else {
						return false;
					}
				} else {
					$("#playVideo").click();
				}
			},
			all_earnings(id) {
				this.isAll = id;
			},
			toPropaganda() {
				this.$router.push('/propaganda')
			},
			getMainRobotInfo() {
				getMainRobotInfo().then(data => {
					this.closeLoading();
					if(data.code == 200) {
						for(var i = 0; i < data.data.length; i++) {
							if(i == 0) {
								this.robotId1 = data.data[i].id;
								this.roborInfoList1 = data.data[i];
								this.roborInfoList1.annualized_return = this.roborInfoList1.annualized_return * 100;
								this.roborInfoList1.average_return_per_trade = this.roborInfoList1.average_return_per_trade * 100;
								this.roborInfoList1.max_drawdown_ratio = this.roborInfoList1.max_drawdown_ratio * 100;
								if(this.roborInfoList1.details) {
									for(var j = 0; j < this.roborInfoList1.details.length; j++) {
										this.list1x4data.push(this.$options.filters.tofixd(this.roborInfoList1.details[j].cumprod_return));
										this.list1ydata.push(this.$options.filters.chartsData(this.roborInfoList1.details[j].create_time));
									}
								}

							} else if(i == 1) {
								this.robotId2 = data.data[i].id;
								this.roborInfoList2 = data.data[i];
								this.roborInfoList2.annualized_return = this.roborInfoList2.annualized_return * 100;
								this.roborInfoList2.average_return_per_trade = this.roborInfoList2.average_return_per_trade * 100;
								this.roborInfoList2.max_drawdown_ratio = this.roborInfoList2.max_drawdown_ratio * 100;
								if(this.roborInfoList2.details) {
									for(var j = 0; j < this.roborInfoList2.details.length; j++) {
										this.list2x4data.push(this.$options.filters.tofixd(this.roborInfoList2.details[j].cumprod_return));
										this.list2ydata.push(this.$options.filters.chartsData(this.roborInfoList2.details[j].create_time));
									}
								}
							} else if(i == 2) {
								this.robotId3 = data.data[i].id;
								this.roborInfoList3 = data.data[i];
								this.roborInfoList3.annualized_return = this.roborInfoList3.annualized_return * 100;
								this.roborInfoList3.average_return_per_trade = this.roborInfoList3.average_return_per_trade * 100;
								this.roborInfoList3.max_drawdown_ratio = this.roborInfoList3.max_drawdown_ratio * 100;
								if(this.roborInfoList3.details) {
									for(var j = 0; j < this.roborInfoList3.details.length; j++) {
										this.list3x4data.push(this.$options.filters.tofixd(this.roborInfoList3.details[j].cumprod_return));
										this.list3ydata.push(this.$options.filters.chartsData(this.roborInfoList3.details[j].create_time));
									}
								}

							}
						}
						this.drawLine();
					} else {
						//   console.log(data)
					}
				});
			},
			goUser() {
				$(".close").click()
				this.$router.push({
					name: 'personInfo',
					params: {
						name: "personInfo",
						relogin: true
					}
				})
			},
			closeNow() {
				this.backCD = 3;
				$("#closeNd").click();
				this.pairSuccess = true;
				clearInterval(this.timerReg);
			},
			openLoding() {
				this.$loading('loading...');
			},
			closeLoading() {
				this.$loading.close();
			},
			toQ() {
				this.$router.push('/questions')
			},
			toP() {
				this.$router.push('/propaganda')
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
					_this.payPrice = "";
					$(".tui-checkbox").prop("checked", true)
				});
			},
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('container'))
				let myChart2 = this.$echarts.init(document.getElementById('container2'))
				let myChart3 = this.$echarts.init(document.getElementById('container3'))
				//let myChart3a = this.$echarts.init(document.getElementById('container3a'))
				// 绘制图表
				myChart.setOption({
					tooltip: {
//						trigger: 'axis',
//						formatter: '{b}<br/>{a}:\n{c}%'
						trigger: 'none',
				        axisPointer: {
				            type: 'cross',
				            label: {
								backgroundColor: '#6a7985'
							}
				        }
					},
					textStyle: {
						color: '#fff'
					},
					color: ['#95D6FF', '#7ea8e1', '#65cea7'],
					grid: {
						left: '0%',
						right: '0%',
						bottom: '1%',
						top: "11%",
						containLabel: true
					},

					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: this.list1ydata,
						axisLine: {
							lineStyle: {
								color:'#FFFEFE',
							}
						},
						axisPointer: {
			                label: {
			                    formatter: function (params) {
			                        return params.value;
			                    }
			                }
			            },

					}],

					yAxis: [{
						type: 'value',
						splitLine: {
							lineStyle: {
								// 使用深浅的间隔色
								color: ['#777']
							}
						},
						axisLine: {
							lineStyle: {
								color: '#FFFEFE',
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
					series: [{
						name: 'cumulative return',
						data: this.list1x4data,
						type: 'line',
						showSymbol: false,
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
				myChart2.setOption({
					tooltip: {
						trigger: 'none',
//						formatter: '{b}<br/>{a}:\n{c}%',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					textStyle: {
						color: '#fff'
					},
					color: ['#95D6FF', '#7ea8e1', '#65cea7'],
					grid: {
						left: '0%',
						right: '0%',
						bottom: '1%',
						top: "11%",
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: this.list2ydata,
						axisLine: {
							lineStyle: {
								color: "#fff",
							}
						}
					}],
					yAxis: [{
						type: 'value',
						scale: true,
						splitLine: {
							lineStyle: {
								// 使用深浅的间隔色
								color: ['#777']
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
					//                  series: [
					//                      {
					//                          name: 'cumulative return',
					//                          type: 'line',
					//                          data: this.list2x4data,
					//                      },
					//
					//                  ]
					series: [{
						name: 'cumulative return',
						data: this.list2x4data,
						type: 'line',
						showSymbol: false,
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
				myChart3.setOption({
					tooltip: {
						trigger: 'none',
//						formatter: '{b}<br/>{a}:\n{c}%',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					textStyle: {
						color: '#fff'
					},
					color: ['#95D6FF', '#7ea8e1', '#65cea7'],
					grid: {
						left: '0%',
						right: '0%',
						bottom: '1%',
						top: "11%",
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: this.list3ydata,
						axisLine: {
							lineStyle: {
								color: "#fff",
							}
						}
					}],
					yAxis: [{
						type: 'value',
						scale: true,
						splitLine: {
							lineStyle: {
								// 使用深浅的间隔色
								color: ['#777']
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
					//                  series: [
					//                      {
					//                          name: 'cumulative return',
					//                          type: 'line',
					//                          data: this.list3x4data,
					//                      },
					//
					//                  ]
					series: [{
						name: 'cumulative return',
						data: this.list3x4data,
						type: 'line',
						showSymbol: false,
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

			}
		}
	}
</script>

<style scoped>
	.carousel_item_box {
		background: rgba(255, 255, 255, 0);
		width: 40%;
		left: 60%;
		border-radius: 25px;
		padding-top: 2px;
	}

	.carousel_item_common {
		width: 32px;
		height: 4px;
	}

	.carousel_item_box .active {
		width: 32px;
		height: 4px;
		margin: 1px;
	}

	.select_robot_title_font {
		font-family: SFProDisplay-Bold;
		font-size: 32px;
		color: #fff;
		letter-spacing: 0;
	}

	.select_robot_div {
		text-align: center;
		padding-top: 80px;
		background: none;
		padding-bottom: 60px;
		min-width: 1400px;
	}

	.chartBox {
		width: 100%;
	/*	height: 575px;*/
		background: url('../assets/img/chartbox.png');
		background-size: cover;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
	}

	.chartBoxLast {
		width: 433px;
		height: 610px;
		/*box-shadow: 3px 3px 10px 0 rgba(5, 92, 203, 0.2);*/
		/*border-radius: 4px;*/
		background: url('../assets/img/chartbox.png');
		background-size: cover;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
		/*margin-right: 50px;*/
	}

	.chartBox_robot_name_font {
		font-family: SFProDisplay-Bold;
		font-size: 24px;
		color: #fff;
		letter-spacing: 0;
	}

	.left_div {
		width: 100%;
		text-align: left;
		padding-left: 28px;
		padding-top: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #FFFFFF12;
		border-top: 1px solid #FFFFFF12;
	}

	.robot_return {
		margin-top: 3px;
		margin-left: 10px;
		font-size: 12px;
		color: #909499 !important;
		letter-spacing: 0;
	}

	.return_font {
		font-size: 12px;
		color: #909499 !important;
		letter-spacing: 0;
	}

	.robot_owner {
		width: 100%;
		text-align: left;
		margin-top: 10px;
		padding: 0px 15px 10px 15px;
		border-bottom: 1px solid #FFFFFF12;
	}

	.chartBox_robot_owner_font {
		font-size: 14px;
		color: #718EBD;
		letter-spacing: 0;
	}

	.chartBox_info_title_font {
		font-size: 12px;
		color: #718EBD !important;
		letter-spacing: 0;
	}

	.robot_info_div {
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
		text-align: left;
		margin-top: 15px;
	}

	.chartBox_info_value_font {
		font-family: SFProDisplay-Bold;
		font-size: 16px;
		color: #fff;
		letter-spacing: 0;
	}

	.left_amount_color {
		font-size: 12px;
		letter-spacing: 0;
		color: #718EBD !important;
	}

	.left_amount_font {
		font-family: SFProDisplay-Bold;
		font-size: 16px;
		color: #3158E4 !important;
		letter-spacing: 0;
	}

	.robot_detail {
		cursor: pointer;
		font-size: 14px;
		letter-spacing: 0;
	}

	.row_width_auto {
		width: 1200px;
		margin: 25px auto;
	}

	.card_marign {
		width: 25%;
		margin-top: 35px;
		height: 177px;
	}

	.solution_title {
		font-family: PingFang-SC-Bold;
		font-size: 24px;
		color: #fff;
		letter-spacing: 0;
		line-height: 48px;
	}

	.solution_text {
		font-family: SFProDisplay-Regular;
		font-size: 24px;
		color: #909499;
		letter-spacing: 0;
	}

	.solution_item_font {
		font-family: SFProDisplay-Bold;
		font-size: 20px;
		color: #000000;
		letter-spacing: 0;
	}

	.subscript_btn {
		width: 80px;
		height: 34px;
		background: #3158E4;
		border-radius: 4px;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 0;
	}

	.select_robot_see_more {
		font-size: 14px;
		color: #3158E4 !important;
		letter-spacing: 0;
	}

	.select_robot_see_more a {
		font-size: 14px;
		color: #3158E4 !important;
		letter-spacing: 0;
	}

	.select_robot_see_more a:hover {
		text-decoration-line: none;
		color: #6E8AEC !important;
		cursor: pointer;
	}

	.subscript_box a:hover {
		text-decoration-line: none;
		cursor: pointer;
	}

	.select_robot_box {
		width: 1400px;
		margin: 45px auto;
		margin-bottom: 50px;
	}

	.see_more_img {
		margin-left: 5px;
		margin-bottom: 3px;
	}

	.robot_card_bottom {
		width: 100%;
		position: relative;
	}

	.float_left {
		float: left;
	}

	.float_right {
		float: right;
	}

	.text_center {
		text-align: center;
	}

	.quarter {
		width: 25%;
		height: 66px;
	}
	/* 灰色背景星星5个平铺 */

	.star_bg {
		width: 80px;
		height: 17px;
		position: relative;
		overflow: hidden;
		margin-left: 17px;
	}
	/* 这是5个小星星们的默认状态的定位 */

	.star {
		height: 100%;
		line-height: 6em;
		position: absolute;
		z-index: 3;
	}

	.star_1 {
		left: 0;
	}

	.star_2 {
		left: 24px;
	}

	.star_3 {
		left: 48px;
	}

	.star_4 {
		left: 72px;
	}

	.star_5 {
		left: 96px;
	}

	.ecosystem_box {
		background: none;
		margin-top: 35px;
		text-align: center;
		padding-top: 80px;
		padding-bottom: 40px;
		min-width: 1440px;
	}

	.ecosystem_title {
		font-family: SFProDisplay-Bold;
		font-size: 40px;
		color: #000000;
		letter-spacing: 0;
	}

	.ecosystem_pic {
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.ecosystem_text {
		font-family: SFProText-Italic;
		font-size: 16px;
		color: #000000;
		letter-spacing: 0;
		line-height: 24px;
		width: 60%;
		margin-left: 20%;
		text-align: left;
		margin-bottom: 40px;
	}

	.sponsor-ul li {
		width: 20%;
		height: 178px;
		display: block;
		float: left;
	}

	.invester_title {
		font-family: SFProDisplay-Bold;
		font-size: 40px;
		color: #fff;
		letter-spacing: 0;
	}

	.carousel-inner {
		margin-bottom: 0px !important;
	}

	.card-btm1 {
		background: #055ccb;
		border: none;
		color: #fff;
		border-radius: 5px;
		padding: 8px 0;
		font-size: 14px;
		min-width: 70px;
	}

	.card-btm1:hover {
		background: #5A7AEA;
	}

	.carousel-inner .item {
		/*height: 680px;*/
		/*background-repeat:no-repeat;*/
		/*background-position:center;*/
		/*background-size:680px 100%;*/
	}

	.banner_btn {
		background-size: 100%;
		border-radius: 4px;
		width: 60%;
		height: 75px;
		font-family: SFProDisplay-Bold;
		font-size: 24px;
		color: #FFFFFF;
		letter-spacing: 0;
		position: absolute;
		left: 20%;
		bottom: 15%;
		border: none;
		padding-top: 29px;
		cursor: pointer;
		z-index: 5000;
		text-align: center;
	}

	.banner_img {
		left: 20%;
		bottom: 15%;
		width: 60% !important;
		position: absolute;
	}

	.solution_box {
		min-width: 1440px;
	}

	.chart-btn {
		width: 50%;
		padding-top: 20px;
		padding-bottom: 20px;
		color: #718EBD;
		cursor: pointer;
		text-align: center;
	}

	.bf-box {
		width: 100%;
		height: 313px;
		background: url('../assets/img/robot factory box.png');
		background-size: cover;
	}

	.chart-btnImg {
		position: absolute;
		top: 0;
		left: 50%;
		width: 50%;
		height: 60px;
		cursor: pointer;
	}
</style>



