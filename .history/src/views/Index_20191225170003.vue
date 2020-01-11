<template>

	<div class="template_root">
		<button v-show="false" href="#buy_success"  data-toggle="modal" id="buySuccess" > {{$t('market.marketSubscribe')}}</button>
		<div v-for="item in 10" :key="item">
			<div>{{item}}</div>
		</div>
		<!-- 轮播图 -->
		<div class="carousel slide auto carousel_box" style="" id="c-slide" data-wrap="true" data-pause="false" data-ride="carousel" data-interval="5000">
			<ol class='carousel-indicators out carousel_item_box'>

				<li data-target='#c-slide' data-slide-to='0' class='active carousel_item_common'></li>
				<li data-target='#c-slide' data-slide-to='1' class='carousel_item_common' ></li>
				<li data-target='#c-slide' data-slide-to='2' class='carousel_item_common' ></li>
			</ol>


			<div class='carousel-inner'>
				<div class='item text-center active'>
					<img v-show="$i18n.locale=='en-US'" class="img-fluid" :src="home_top_pic_1" style='width: 100%;'>
					<img v-show="$i18n.locale=='zh-CN'" class="img-fluid" :src="home_top_pic_1cn" style='width: 100%;'>
					<img v-show="$i18n.locale=='ko'" class="img-fluid" src="../assets/img/banner/banner_ko.png" style='width: 100%;'>
					<a id="twitter" class="a-cancel banner_btn light-btn" href="https://twitter.com/netcentricreal" target="_blank">
						{{$t('netnew.FollowNetCentric')}}
					</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img">

				</div>
				<div class='item text-center'>
					<img v-show="$i18n.locale=='en-US'" :src="home_top_pic_2" class="img-fluid" style="width: 100%;">
					<img v-show="$i18n.locale=='zh-CN'" :src="home_top_pic_2cn" class="img-fluid" style="width: 100%;">
					<img v-show="$i18n.locale=='ko'" class="img-fluid" src="../assets/img/banner/banner_2_ko.png" style='width: 100%;'>
					<a v-show="ifLogin" @click="toPre" class="a-cancel banner_btn light-btn" style="bottom: 32%">{{$t('netnew.RegisterNow')}}</a>
					<a v-show="!ifLogin" @click="toReg" class="a-cancel banner_btn light-btn" style="bottom: 32%">{{$t('netnew.RegisterNow')}}</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img" style="bottom: 32%">
				</div>
				<div class='item text-center'>
					<img v-show="$i18n.locale=='en-US'" :src="home_top_pic_3" class="img-fluid" style="width: 100%;">
					<img v-show="$i18n.locale=='zh-CN'" :src="home_top_pic_3cn" class="img-fluid" style="width: 100%;">
					<img v-show="$i18n.locale=='ko'" class="img-fluid" src="../assets/img/banner/banner_3_ko.png" style='width: 100%;'>
					<a class="a-cancel banner_btn light-btn" @click="toQ" style="bottom: 32%">{{$t('netnew.StartLearning')}}</a>
					<img src="../assets/img/kstybtn@2x.png" class="banner_img" style="bottom: 32%">
				</div>

			</div>
			<!--<a class='left carousel-control' style='top:-1em;margin-left: 2%;' href='#c-slide' data-slide='prev'>
				<i class='fa fa-angle-left' style='font-size: 1.6em;'></i>
			</a>
			<a class='right carousel-control' style='top:-1em;margin-right: 2%;' href='#c-slide' data-slide='next'>
				<i class='fa fa-angle-right' style='font-size: 1.6em;'></i>
			</a>-->
		</div>
		<!--<div class="swiper-container">
			<div class="swiper-wrapper">
					<div class="swiper-slide">
						<img v-if="$i18n.locale=='en-US'" class="img-fluid" :src="home_top_pic_1" style='width: 100%;'>
						<img v-if="$i18n.locale=='zh-CN'" class="img-fluid" :src="home_top_pic_1cn" style='width: 100%;'>
						<img v-if="$i18n.locale=='ko'" class="img-fluid" src="../assets/img/banner/banner_ko.png" style='width: 100%;'>

						<a id="twitter" class="a-cancel banner_btn light-btn" href="https://twitter.com/netcentricreal" target="_blank">
							{{$t('netnew.FollowNetCentric')}}
						</a>
						<img src="../assets/img/kstybtn@2x.png" class="banner_img">
					</div>
					<div class="swiper-slide">
						<img v-if="$i18n.locale=='en-US'" :src="home_top_pic_2" class="img-fluid" style="width: 100%;">
						<img v-if="$i18n.locale=='zh-CN'" :src="home_top_pic_2cn" class="img-fluid" style="width: 100%;">
						<img v-if="$i18n.locale=='ko'" class="img-fluid" src="../assets/img/banner/banner_2_ko.png" style='width: 100%;'>

						<a v-if="ifLogin" @click="toPre" class="a-cancel banner_btn light-btn">{{$t('netnew.RegisterNow')}}</a>
						<a v-if="!ifLogin" @click="toReg" class="a-cancel banner_btn light-btn">{{$t('netnew.RegisterNow')}}</a>
						<img src="../assets/img/kstybtn@2x.png" class="banner_img">
					</div>
					<div class="swiper-slide">
						<img v-if="$i18n.locale=='en-US'" :src="home_top_pic_3" class="img-fluid" style="width: 100%;">
						<img v-if="$i18n.locale=='zh-CN'" :src="home_top_pic_3cn" class="img-fluid" style="width: 100%;">
						<img v-if="$i18n.locale=='ko'" class="img-fluid" src="../assets/img/banner/banner_3_ko.png" style='width: 100%;'>

						<a class="a-cancel banner_btn light-btn" >{{$t('netnew.StartLearning')}}</a>
						<img src="../assets/img/kstybtn@2x.png" class="banner_img">
					</div>
				</div>
			<div class="swiper-pagination"></div>
		</div>-->
		<!-- 轮播图 End -->

		<!-- 机器人选择 -->
		<div class="lg-row width-limt select_robot_div" style="width: 1400px;margin: 0 auto;">
			<span class="midTitle select_robot_title_font">{{$t('net.markets')}}</span>
			<div class="lg-width" style="width: auto;float: right;margin-top: 10px;">
				<a @click="toMarket" style="cursor: pointer;color: #718EBD;font-size: 16px;">{{$t('net.seeMore')}}<img src="../assets/img/toRight.png" class="see_more_img"></a>
			</div>
			<hr style="width: 42px;height: 2px;background: #3a98d8;border:none;margin: 42px auto;">

			<div class="row lg-row select_robot_box">

				<!-- Card -->
				<div class="lg-width chartBox"  v-for="(list,index) in robotInfoList" :class="{'chartbox-right':index==2||index==5}" >

					<div class="lg-width rob-name" style="margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;width: 100%;">
						<span v-show="$i18n.locale!='zh-CN'" class="chartBox_robot_name_font">{{list.RobotName}}</span>
						<span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font">{{list.local_name}}</span>
					</div>
					<div class="lg-width robot_owner">
						<img :src="T2" style="width: 20px;">
						<span style="margin-left: 5px;" class="chartBox_robot_owner_font">{{list.owner}}</span>
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
							</div>
						</div>
						<div :id="'container'+index" style="height: 300px;width: 100%;"></div>
					</div>
					<div class="lg-width robot_info_div">
						<div class="lg-width quarter text_center">
							<div class="card-title chartBox_info_title_font">
								<span v-show="$i18n.locale=='en-US'">Trade <br>Type</span>
								<span v-show="$i18n.locale=='zh-CN'">交易类型</span>
								<span v-show="$i18n.locale=='ko'">거래 유형</span>
							</div>
							<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{list.trade_type|tradeType}}</span>
							</div>
						</div>
						<div class="lg-width text_center quarter">
							<div class="card-title chartBox_info_title_font"><span>{{$t('net.annualized')}}</span>
							</div>
							<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font" style="color: green;">{{list.annualized_return|tofix}}%</span>
							</div>
						</div>
						<div class="lg-width quarter text_center">
							<div class="card-title chartBox_info_title_font">
								<span v-show="$i18n.locale=='en-US'">Average <br>Return</span>
								<span v-show="$i18n.locale=='zh-CN'">平均收益(笔)</span>
								<span v-show="$i18n.locale=='ko'">평균수익(건)</span>
							</div>
							<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font" style="color: green;">{{list.average_return_per_trade|tofix}}%</span>
							</div>
						</div>
						<div class="lg-width quarter text_center">
							<div class="card-title chartBox_info_title_font">
								<span v-show="$i18n.locale=='en-US'">Accuracy  <br>Rate</span>
								<span v-show="$i18n.locale=='zh-CN'">准确率</span>
								<span v-show="$i18n.locale=='ko'">정확도</span>
							</div>
							<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{list.win_rate*100|tofix}}%</span>
							</div>
						</div>
					</div>
					<div class="lg-width left_div clearfix">
						<div>
							<a class="left_amount_color">{{$t('person.signalFe')}}：{{ list.base_multiple }}{{ list.BaseCurrency }}/{{ list.coin_limit }}{{ list.BaseCurrency }}</a>
						</div>
						<div>
							<a class="left_amount_color">{{$t('person.sellFe')}}：{{ list.occupied_limit }}{{ list.BaseCurrency }}/{{ list.max_quota }}{{ list.BaseCurrency }}</a>
						</div>
					</div>
					<div class="lg-width robot_card_bottom">
						<div class="lg-width chart-btn " @click="toMarkets(list.id)">
							<a class="robot_detail">{{$t('market.details')}}</a>
						</div>
						<div class="lg-width chart-btn ">
							<a href="#addBuy" data-toggle="modal" class="a-cancel">
								{{$t('market.marketSubscribe')}}
							</a>
						</div>
						<img src="../assets/img/dybtn@2x.png" v-if="ifLogin" @click="toBuy(list)" href="#buy_robot"  data-toggle="modal" class="light-btn chart-btnImg">
						<img src="../assets/img/dybtn@2x.png" v-if="!ifLogin" @click="loginCheck" class="light-btn chart-btnImg">
					</div>

				</div>
				<!-- Card  End-->

			</div>
			<!--<div>
	            <span class="midTitle select_robot_see_more" @click="toMarket">
	            	<a>{{$t('net.seeMore')}}<img :src="home_visit_market_icon" class="see_more_img"></a>
	            </span>
	        </div>-->

			<div v-show="userType==3"><!--专业用户   显示组件列表-->
				<div style="width: 1400px;margin: 100px auto 0px">
					<span class="midTitle select_robot_title_font">Top 3 {{$t('netnew.component')}}</span>
					<div class="lg-width" style="width: auto;float: right;margin-top: 10px;">
						<a @click="toUnitrobot" style="cursor: pointer;color: #718EBD;font-size: 16px;">{{$t('net.seeMore')}}<img src="../assets/img/toRight.png" class="see_more_img"></a>
					</div>
					<hr style="width: 42px;height: 2px;background: #3a98d8;border:none;margin: 42px auto;">
				</div>
				<div class="row lg-row select_robot_box">

					<!-- Card -->
					<div class="lg-width" :class="changeChartbox(index)" style="height: 228px;" v-for="(list,index) in componentList">

						<div class="lg-width rob-name" style="margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;">
							<span v-show="$i18n.locale!='zh-CN'" class="chartBox_robot_name_font" style="font-size: 18px;">{{list.Name}}</span>
							<span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font" style="font-size: 18px;">{{list.LocalName}}</span>
						</div>

						<div class="lg-width robot_owner">
							<img :src="T2" style="width: 20px;">
							<span style="margin-left: 5px;" class="chartBox_robot_owner_font">{{list.OwnerName}}</span>
							<div class="star_bg " style="float: right;" :style="{background:'url('+star+')'}">
								<a class="star star_1"></a>
								<a class="star star_2"></a>
								<a class="star star_3"></a>
								<a class="star star_4"></a>
								<a class="star star_5"></a>
							</div>
						</div>
                        <div class="lg-width" style='border-bottom: 1px solid #FFFFFF12;width:100%;'>
							<div class="robot_info_div">
								<div class="lg-width quarter text_center">
									<div class="card-title chartBox_info_title_font"><span>{{$t('netnew.RobotType')}}</span></div>
									<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{list.RobotType}}</span>
									</div>
								</div>
								<div class="lg-width text_center quarter">
									<div class="card-title chartBox_info_title_font"><span>{{$t('netnew.basicCurrency')}}</span>
									</div>
									<div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">{{list.BaseCurrency}}</span>
									</div>
								</div>
								<div class="lg-width quarter text_center">
									<div class="card-title chartBox_info_title_font">
										<span>{{$t('net.pair')}}</span>
									</div>
									<div style="margin-top: 5px;">
									<span class="card-data chartBox_info_value_font">
	                            		{{list.Pair}}
	                            	</span>
									</div>
								</div>
								<div class="lg-width quarter text_center">
									<div class="card-title chartBox_info_title_font">
										<span>{{$t('netnew.exchange')}}</span>
									</div>
									<div style="margin-top: 5px;">
									<span class="card-data chartBox_info_value_font">{{list.BaseExchange}}
	                            	</span>
									</div>
								</div>
							</div>
						</div>
						<!--<div class="lg-width left_div">
							<a class="left_amount_color">{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}:{{ list.LimitController }} {{ list.BaseCurrency }}</a>
						</div>-->
						<div class="lg-width robot_card_bottom">
							<div class="lg-width chart-btn" style="float: right;">
								<a href="#addBuy" data-toggle="modal" class="a-cancel">
									{{$t('market.marketSubscribe')}}
								</a>
							</div>
							<img src="../assets/img/dybtn@2x.png" v-if="ifLogin" @click="toMarkets2(list)" href="#buy_now"  data-toggle="modal" class="light-btn chart-btnImg">
							<img src="../assets/img/dybtn@2x.png" v-if="!ifLogin" @click="loginCheck" class="light-btn chart-btnImg">

						</div>

					</div>
					<!-- Card  End-->
				</div>
			</div>

			<div v-show="userType==3"><!--专业版用户 策略块展示-->
				<div style="width: 1400px;margin: 150px auto 0px;">
					<span class="midTitle select_robot_title_font">Top 3 {{$t('netnew.myStrategy')}}</span>
					<div class="lg-width" style="width: auto;float: right;margin-top: 10px;">
						<a @click="toStrategy" style="cursor: pointer;color: #718EBD;font-size: 16px;">{{$t('net.seeMore')}}<img src="../assets/img/toRight.png" class="see_more_img"></a>
					</div>
					<hr style="width: 42px;height: 2px;background: #3a98d8;border:none;margin: 42px auto;">
				</div>
				<div class="row lg-row select_robot_box">

					<!-- Card -->
					<div class="lg-width " :class="changeChartbox(index)" style="height: 275px;position: relative;" v-for="(list,index) in strategyList">

						<div class="lg-width rob-name" style="margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;">
							<span v-show="$i18n.locale!='zh-CN'" class="chartBox_robot_name_font" style="font-size: 18px;">{{list.StrategyType}}</span>
							<span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font" style="font-size: 18px;">{{list.LocalName}}</span>
						</div>

						<div class="lg-width robot_owner">
							<img :src="T2" style="width: 20px;">
							<span style="margin-left: 5px;" class="chartBox_robot_owner_font">{{list.Owner}}</span>
							<div class="star_bg" style="float: right;" :style="{background:'url('+star+')'}">
								<a class="star star_1"></a>
								<a class="star star_2"></a>
								<a class="star star_3"></a>
								<a class="star star_4"></a>
								<a class="star star_5"></a>
							</div>
						</div>

						<div class="lg-width robot_info_div">
							<div class="lg-width quarter" style="width: 100%;">
								<div class="card-title chartBox_info_title_font"><span>{{$t('netnew.Description')}}</span></div>
								<div style="margin-top: 5px;">
									<span v-show="$i18n.locale!='zh-CN'" class="card-data chartBox_info_value_font">{{list.Introduction}}</span>
									<span v-show="$i18n.locale=='zh-CN'" class="card-data chartBox_info_value_font">{{list.IntroductionCn}}</span>
								</div>
							</div>
						</div>

						<div class="lg-width" style="width: 100%;position: absolute;bottom: 0;">

							<div class="lg-width chart-btn" style="float: right;">
								<a href="#addBuy" data-toggle="modal" class="a-cancel">
									{{$t('market.marketSubscribe')}}
								</a>
							</div>
							<img src="../assets/img/dybtn@2x.png" v-if="ifLogin" @click="toMarkets3(list)" href="#buy_now"  data-toggle="modal" class="light-btn chart-btnImg">
							<img src="../assets/img/dybtn@2x.png" v-if="!ifLogin" @click="loginCheck" class="light-btn chart-btnImg">

						</div>

					</div>
					<!-- Card  End-->
				</div>
			</div>
			<!--<span class="midTitle select_robot_see_more" @click="toStrategy"><a>{{$t('net.seeMore')}}<img :src="home_visit_market_icon" class="see_more_img"></a></span>-->

		</div>

		<!-- 机器人选择 End -->

		<!-- 机器人选择 -->

		<!-- 解决方案 -->
		<div class="lg-row width-limt solution_box" style="margin-bottom: 150px;">

			<div class="lg-row width-limt" style="text-align: center;padding-top: 80px;">
				<p class="midTitle solution_title" style="margin-bottom: 25px;">{{ $t('net.solution_title') }}</p>
				<hr style="width: 177px;height: 2px;background: #3a98d8;border:none;margin: 0 auto;">
				<p style="color: #3A98D8;font-size: 18px;margin-top: 20px;margin-bottom: 40px;"> {{ $t('net.solution_title') }}</p>
				<div class="row lg-row" style="width: 1400px;margin: 20px auto; text-align: center;position: relative;">
					<div class="lg-width bf-box" style="margin-right: 28px;">
						<div style="margin-top: 38px;">
							<span style="color: #FFFFFF;font-size:18px ;">{{ $t('netnew.strategy') }}</span>
						</div>
						<div style="margin-top: 52px;text-align: left;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/jccl@2x.png" style="width: 139px;margin-left: 17px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/jccl_en@2x.png" style="width: 139px;margin-left: 17px;">
							<img v-show="$i18n.locale=='ko'" src="../assets/img/jccl_ko.png" style="width: 139px;margin-left: 17px;">
							<img src="../assets/img/link@2x.png" style="width: 28px;margin-left: -5px;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/clzj@2x.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/clzj_en@2x.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='ko'" src="../assets/img/clzj_ko.png" style="width: 139px;margin-left: -5px;">
						</div>
					</div>
					<img src="../assets/img/bs@2x.png" style="width: 47px;position: absolute;left:328px;top:205px">
					<div class="lg-width bf-box" style="margin-right: 28px;">
						<div style="margin-top: 38px;">
							<span style="color: #FFFFFF;font-size:18px ;">{{ $t('netnew.comMarket') }}</span>
						</div>
						<div style="margin-top: 52px;text-align: left;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/dyjqr@2x.png" style="width: 139px;margin-left: 17px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/dyjqr_en@2x.png" style="width: 139px;margin-left: 17px;">
							<img v-show="$i18n.locale=='ko'" src="../assets/img/dyjqr_ko.png" style="width: 139px;margin-left: 17px;">
							<img src="../assets/img/link2.png" style="width: 28px;margin-left: -5px;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/jqrzj@2x.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/jqrzj@2x_en.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='ko'" src="../assets/img/jqrzj_ko.png" style="width: 139px;margin-left: -5px;">
						</div>
					</div>
					<img src="../assets/img/bluebs@2x.png" style="position: absolute;left:679px;top:205px;width: 37px;">
					<div class="lg-width bf-box" style="margin-right: 28px;">
						<div style="margin-top: 38px;">
							<span style="color: #FFFFFF;font-size:18px ;">{{ $t('netnew.robotMarket') }}</span>
						</div>
						<div style="margin-top: 52px;text-align: left;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/lhjqr@2x.png" style="width: 296px;margin-left: 17px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/lhjqr_en@2x.png" style="width: 296px;margin-left: 17px;">
							<img v-show="$i18n.locale=='ko'" src="../assets/img/lhjqr_ko.png" style="width: 296px;margin-left: 17px;">
						</div>
					</div>
					<img src="../assets/img/yellowbs@2x.png" style="position: absolute;left:1043px;top:205px;width: 28px;">
					<div class="lg-width bf-box">
						<div style="margin-top: 38px;">
							<span style="color: #FFFFFF;font-size:18px ;">{{ $t('netnew.xnbMarket') }}</span>
						</div>
						<div style="margin-top: 52px;text-align: left;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/yellowlhjqr@2x.png" style="width: 139px;margin-left: 17px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/yellowlhjqr_en@2x.png" style="width: 139px;margin-left: 17px;">
							<img v-show="$i18n.locale=='ko'" src="../assets/img/yellowlhjqr_ko.png" style="width: 139px;margin-left: 17px;">
							<img src="../assets/img/yellowlink@2x.png" style="width: 28px;margin-left: -5px;">
							<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/jys@2x.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='en-US'" src="../assets/img/jys_en@2x.png" style="width: 139px;margin-left: -5px;">
							<img v-show="$i18n.locale=='ko'" src="../assets/img/jys_ko.png" style="width: 139px;margin-left: -5px;">
						</div>
					</div>
				</div>

			</div>

		</div>


		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="buy_robot" class="modal fade" >
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
										<span v-show="$i18n.locale!='zh-CN'" style="font-size: 16px;color: #FFFFFF;" >{{buyRbtParams.RobotName}}</span>
										<span v-show="$i18n.locale=='zh-CN'" style="font-size: 16px;color: #FFFFFF;" >{{buyRbtParams.RobotLocalName}}</span>
									</div>
								</div>
								<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
									<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
										<span style="font-size:16px;color: #718EBD;">{{$t('market.account')}}</span>
									</div>
									<div class="lg-width" style="width: 70%;margin-top: 25px;text-align: left;margin-left: 5%;">
										<select autocomplete="off" class="exchange" style="width: 280px;line-height: 35px;border: none;background: none;font-size: 16px;color: #fff;" @change="initAccount(buyRbtParams.account_id)" v-model="buyRbtParams.account_id">
											<option style="text-align: center;background: #006DCC;" v-if="buyInfo.accounts.length==0" value="" >{{$t('netnew.zwzh')}}</option>
											<option style="text-align: center;background: #006DCC;" v-for="items in buyInfo.accounts" :value="items.Id">{{ items.ExchangeAccountName }}</option>
										</select>
									</div>
								</div>
								<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
									<div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
										<span style="font-size:16px;color: #718EBD;"> {{$t('market.Numberdays')}} </span>
									</div>
									<div class="lg-width" style="width: 70%;margin-top: 30px;text-align: left;margin-left: 2%;">
										<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aWeek')}}</a>
										<a class="pair-time" style="margin-left: 60px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.aMonth')}}</a>
										<a class="pair-time" style="margin-left: 60px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
									</div>
								</div>
								<div style="display: table;width: 50%;border-bottom:1px solid #718EBD;float: left;">
									<div class="lg-width" style="width: 60%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
										<span style="font-size:16px;color: #718EBD;">{{$t('market.buyshare')}}</span>
									</div>
									<div class="lg-width" style="width: 36%;margin-top: 35px;text-align: left;margin-left: 2.5%;">
										<!--<input type="number" min="1" id="syfe"  style="text-align:center;width: 100px;margin-right:5px;height: 35px;margin-top: -7px;border:1px solid #dcdcdc"  />-->
										<input type="number" min="0"  style="text-align: left;font-size: 16px;color: #fff;width: 100%;margin-right: 5px;line-height: 35px;margin-top: -11px;padding-left:22px;background: none;border: none;"  v-model="buyRbtParams.amount" @change="changeShare" />
									</div>
								</div>
								<div style="display: table;width: 50%;float: left;padding-top: 17px;">
									<span style="font-size: 16px;color: #718EBD;line-height: 50px;">×{{buyRbtParams.base_multiple}}{{buyRbtParams.BaseCurrency}}= {{ buyRbtParams.base_multiple*buyRbtParams.amount }}{{buyRbtParams.BaseCurrency}}</span>
								</div>

								<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
									<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
										<span style="font-size:16px;color: #718EBD;">{{$t('market.balance')}}</span>
									</div>
									<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;">
										<div>
											<span style="font-size: 16px;color: #FFFFFF;margin-right: 8px;">{{buyInfo.net_value}}</span>
											<span style="font-size:16px;color:  #718EBD;">NET</span>

										</div>

									</div>
								</div>
								<div style="display: table;width: 100%;">
									<input class="boxs" checked="checked"  style="margin-top: 12px; margin-right: 5px;margin-bottom: 15px;" type="checkBox" @change="changeAuto">
									<!--<input name="checkbox" checked="checked" value="0" type="checkbox" class="tui-checkbox" v-model="buyRbtParams.auto_renew"  style="margin-top: 30px; margin-right: 5px;margin-bottom: 15px;">-->
									<span style="color: #718EBD;font-size: 14px">{{ $t("modalbox.renewal") }}</span>
								</div>

							</div>
							<div class="lg-width" style="width: 100%;margin-top: 10px;position: absolute;left: 0;bottom: 0;border-top: 1px #ffffff1a solid;">
								<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;margin-left: 57px;">{{buyRbtParams.pay}}<input type="hidden" v-model="originPrice"/></span>
								<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
								<button :class="{'card-btm':isPair==false,'unit-cantpair':isPair==true}" @click="buyRbt()" :disabled="isPair" style="position: relative;float: right;">
									{{$t('market.confirm')}}
								</button>
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
									<span v-show="$i18n.locale!='zh-CN'" style="font-size: 16px;color: #FFFFFF;" >{{unitName}}</span>
									<span v-show="$i18n.locale=='zh-CN'" style="font-size: 16px;color: #FFFFFF;" >{{unitLName}}</span>
								</div>
							</div>
							<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
								<div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
									<span style="font-size:16px;color: #718EBD;"> {{$t('market.Numberdays')}} </span>
								</div>
								<div class="lg-width" style="width: 70%;margin-top: 30px;text-align: left;margin-left: 2%;">
									<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime2(1)">{{$t('market.aMonth')}}</a>
									<a class="pair-time" style="margin-left: 60px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime2(2)">{{$t('market.season')}}</a>
									<a class="pair-time" style="margin-left: 60px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime2(3)">{{$t('market.aYear')}}</a>
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
						<div class="lg-width" style="width: 100%;margin-top: 10px;position: absolute;left: 0;bottom: 0;border-top: 1px #ffffff1a solid;">
							<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;margin-left: 57px;">{{payPrice}}<input type="hidden" v-model="originPrice"/></span>
							<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
							<button class="card-btm" @click="indexPair()"  style="position: relative;float: right;">
								{{$t('market.confirm')}}
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Buysuccess></Buysuccess>

	</div>

</template>

<script>
	import { getMainRobotInfo,getUserInfo,buyRbt,initAccount, robotBuy,getBuyInfo, timingtype, checkExchange,buyStrategy, initAccountBalance, robotordernow, getTopComponent, getTopStrategy ,getNetBalance,buyUnit} from '../api/api';
	import Buysuccess from "../components/Buysuccess.vue";
	import Swiper from "swiper"
	export default {
		name: "HomeRobotFactory",
		components: {
    		Buysuccess
  		},
		props: {
			home_solution_icon1: {
				type: String,
				default: require("@/assets/img/home_solution_icon1.png")
			},
			home_solution_icon2: {
				type: String,
				default: require("@/assets/img/home_solution_icon2.png")
			},
			home_solution_icon3: {
				type: String,
				default: require("@/assets/img/home_solution_icon3.png")
			},
			home_solution_icon4: {
				type: String,
				default: require("@/assets/img/home_solution_icon4.png")
			},
			home_solution_icon5: {
				type: String,
				default: require("@/assets/img/home_solution_icon5.png")
			},
			home_solution_icon6: {
				type: String,
				default: require("@/assets/img/home_solution_icon6.png")
			},
			home_solution_icon7: {
				type: String,
				default: require("@/assets/img/home_solution_icon7.png")
			},
			home_solution_icon8: {
				type: String,
				default: require("@/assets/img/home_solution_icon8.png")
			},
			home_top_pic_1: {
				type: String,
				default: require("@/assets/img/banner/banner_en.png")
			},
			home_top_pic_2: {
				type: String,
				default: require("@/assets/img/banner/banner2_en.png")
			},
			home_top_pic_3: {
				type: String,
				default: require("@/assets/img/banner/banner3_en.png")
			},
			home_top_pic_1cn: {
				type: String,
				default: require("@/assets/img/banner/banner@2x.png")
			},
			home_top_pic_2cn: {
				type: String,
				default: require("@/assets/img/banner/banner_2_cn@2x.png")
			},
			home_top_pic_3cn: {
				type: String,
				default: require("@/assets/img/banner/banner_3_cn@2x.png")
			},
			T2: {
				type: String,
				default: require("@/assets/img/20181211092127.png")
			},
			timeline1: {
				type: String,
				default: require("@/assets/img/timeline1.png")
			},
			timeline2: {
				type: String,
				default: require("@/assets/img/timeline2.png")
			},
			timeline3: {
				type: String,
				default: require("@/assets/img/timeline3.png")
			},
			star: {
				type: String,
				default: require("@/assets/img/star.png")
			},

			home_Ecosystem_pic: {
				type: String,
				default: require("@/assets/img/home_Ecosystem_pic.png")
			},
			home_Ecosystem_pic_cn: {
				type: String,
				default: require("@/assets/img/home_Ecosystem_pic_cn.png")
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

			Inv1un: {
				type: String,
				default: require("@/assets/img/Inv1un.png")
			},
			Inv2un: {
				type: String,
				default: require("@/assets/img/Inv2un.png")
			},
			Inv3un: {
				type: String,
				default: require("@/assets/img/Inv3un.png")
			},
			Inv4un: {
				type: String,
				default: require("@/assets/img/Inv4un.png")
			},
			Inv5un: {
				type: String,
				default: require("@/assets/img/Inv5un.png")
			},
			close: {
				type: String,
				default: require("@/assets/img/close.png")
			},
			group: {
				type: String,
				default: require("@/assets/img/group.png")
			},
		},
		data() {
			return {
				renewParams:{},
				waring: false,
				isUsdt: false,
				ifLogin: false,
				isAll: 1,
				userType: 1,
				pairSelected: 1,
				pairSuccess: true,
				backCD: 3,
				robotInfoList:[],
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
				useList:[],
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
				unitName:"",
				unitLName:"",
				netValue:"",
				choosedUnit:"",
				day_type:"",
				isPair:false,
				auto_renew:true,
				pairType:1,
				buyRbtParams:{
                	pay:0,
                	account_id:"",
                	day_type:"week",
                	auto_renew:true,
                	amount:0,
                	RobotName:"",
                },
                buyInfo:{
                	name:"",
                	accounts:[],
                },
			}
		},
		mounted() {
//			this.openLoding(),
			this.checkLogin(),
			this.getparams();
			this.getMainRobotInfo();
			this.inity();
//			var mySwiper = new Swiper('.swiper-container', {
//				slidesPerView :'auto',
//				autoplay:true,
//				direction:'vertical',
//				grabCursor:true,
//				autoplayDisableOnInteraction:false,
//				mousewheelControl:true,
//				autoHeight:true,
//				loop:true,
//				pagination: {
//					el: '.swiper-pagination',
//				},
//			})
		},

		methods: {
			buyRbt(){
          	 	if(this.buyRbtParams.pay>this.buyInfo.net_value){
          	 		this.$toast.center(this.$t('msg.msg100303'));
          	 		return false;
          	 	}

          	 	swal({
				  title: this.$t('netnew.ays')+"?",
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
				  if (willDelete) {
				  	if(this.buyRbtParams.account_id==""){
				  		if(this.$i18n.locale== 'zh-CN'){
							this.$toast.center(this.$t('netnew.selectJys'));
						}else{
							this.$toast.center('Please select the Exchange');
						}
				  		return false;
				  	}

				  	buyRbt(this.buyRbtParams).then(data => {
						if(data.code == 200) {
							$(".close").click();
							$("#buySuccess").click();
							setTimeout(function() {
								$(".close").click();
							},3500)
						} else {
							if(data.code == '102001'){//购买份额最少为xx份额
								this.$toast.center(this.$t('msg.msg'+data.code)+' '+data.msg+' '+ this.$t('netnew.Share'))
							}else{
								this.$toast.center(this.$t('msg.msg'+data.code));
							}
						}
					});
				  }
				})
          	 },
			 toBuy(val){
            	var params={};
            	this.renewParams = val
            	this.pairSelected="1";
            	this.buyRbtParams.pay=0;
            	this.buyRbtParams.amount=0;
            	this.buyRbtParams.day_type="week";
            	this.chosedRbtId=val.id;
            	params.robot_id=val.id;
            	params.user_id=this.useList.userId;
            	this.buyRbtParams.user_id=this.useList.userId
            	this.buyRbtParams.robot_id=val.id;
            	this.buyRbtParams.RobotName=val.RobotName;
            	if(val.RobotLocalName){
            		this.buyRbtParams.RobotLocalName=val.RobotLocalName;
            	}else{
            		this.buyRbtParams.RobotLocalName=val.local_name;
            	}

            	this.buyRbtParams.base_multiple=val.base_multiple;
            	this.buyRbtParams.UnitPrice=val.UnitPrice;
            	this.buyRbtParams.BaseCurrency=val.BaseCurrency;
        	  	getBuyInfo(params).then(data => {
                    if (data.code = 200) {
                    	this.buyInfo=data.data;
                       if(this.buyInfo.accounts){
                       	this.buyRbtParams.account_id=this.buyInfo.accounts[0].Id;
                       	this.initAccount(this.buyInfo.accounts[0].Id);
                       }else{
                       	this.buyInfo.accounts=[]
                       }
                    }else{
                    	this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });

            },
             choseTime(id) {//购买机器人时间选择
                this.pairSelected = id;
                var params={};
                params.robot_id=this.chosedRbtId;
				 var unitPrice1 = 0;
				 var unitPrice2 = 0;
				 var unitPrice3 = 0;
				 var allFe= parseInt(this.buyRbtParams.amount);//购买份数
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
                if(id==1){
                	this.buyRbtParams.day_type="week";
                	params.day_type="week"
                	/*this.buyRbtParams.pay=this.buyRbtParams.amount*7*this.buyRbtParams.UnitPrice*/
					if(allFe<=5){
						this.buyRbtParams.pay=(allFe*unitPrice1*7).toFixed(2)
					}else if(allFe>5 && allFe<=10){
						this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*7).toFixed(2)
					}else if(allFe>10){
						this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*7).toFixed(2)
					}
                }else if(id==2){
                	this.buyRbtParams.day_type="month";
                	params.day_type="month"
                	/*this.buyRbtParams.pay=this.buyRbtParams.amount*30*this.buyRbtParams.UnitPrice*/
					if(allFe<=5){
						this.buyRbtParams.pay=(allFe*unitPrice1*30).toFixed(2)
					}else if(allFe>5 && allFe<=10){
						this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*30).toFixed(2)
					}else if(allFe>10){
						this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*30).toFixed(2)
					}
                }
                else if(id==3){
                	this.buyRbtParams.day_type="year";
                	params.day_type="year"
                	/*this.buyRbtParams.pay=this.buyRbtParams.amount*365*this.buyRbtParams.UnitPrice*/
					if(allFe<=5){
						this.buyRbtParams.pay=(allFe*unitPrice1*365).toFixed(2)
					}else if(allFe>5 && allFe<=10){
						this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*365).toFixed(2)
					}else if(allFe>10){
						this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*365).toFixed(2)
					}
                }


            },
            initAccount(val){//初始化账户
				var params={};
				params.account_id=val;
				if(params.account_id){

				}else{
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
            changeShare(){//购买份额变化时
				var unitPrice1 = 0;
				var unitPrice2 = 0;
				var unitPrice3 = 0;
				var allFe= parseInt(this.buyRbtParams.amount);//购买份数
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
            	if(this.buyRbtParams.day_type=="week"){
            		/*this.buyRbtParams.pay=this.buyRbtParams.amount*7*this.buyRbtParams.UnitPrice*/
					if(allFe<=5){
						this.buyRbtParams.pay=(allFe*unitPrice1*7).toFixed(2)
					}else if(allFe>5 && allFe<=10){
						this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*7).toFixed(2)
					}else if(allFe>10){
						this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*7).toFixed(2)
					}
            	}else if(this.buyRbtParams.day_type=="month"){
            		/*this.buyRbtParams.pay=this.buyRbtParams.amount*30*this.buyRbtParams.UnitPrice*/
					if(allFe<=5){
						this.buyRbtParams.pay=(allFe*unitPrice1*30).toFixed(2)
					}else if(allFe>5 && allFe<=10){
						this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*30).toFixed(2)
					}else if(allFe>10){
						this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*30).toFixed(2)
					}
            	}else if(this.buyRbtParams.day_type=="year"){
            		/*this.buyRbtParams.pay=this.buyRbtParams.amount*365*this.buyRbtParams.UnitPrice*/
					if(allFe<=5){
						this.buyRbtParams.pay=(allFe*unitPrice1*365).toFixed(2)
					}else if(allFe>5 && allFe<=10){
						this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*365).toFixed(2)
					}else if(allFe>10){
						this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*365).toFixed(2)
					}
            	}
            },
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
			getTopComponent() {/*获取主页top3 component*/
				getTopComponent().then(data => {
					if(data.code == 200) {
						//						console.log(data);
						this.componentList = data.data;
					} else {
						this.$toast.center(this.$t('msg.msg' + data.code));
					}
				});
			},
			getTopStrategy() {//获取主页top3 strategy
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
				$('#toReg').click();
			},
			toPre() {//个人中心
				this.$router.push('/personInfo')
			},
			checkLogin() {//是否登陆
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
					$("#logbtn").click();
				}
			},
			changeChartbox(index) {
				if(index == 2) {
					return "chartBoxLast"
				} else {
					return "chartBox"
				}
			},
			getBalance(items) {//根据机器人ID，token拉取余额等数据
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
			//获取用户信息
			getUinfo() {
				getUserInfo(this.empty).then(data => {
					if(data.code == 200) {
						this.useList = data.data;
						this.userType=data.data.userType;
						if(this.userType==3){//userType === 1(普通用户) userType === 2（试用用户） userType === 3（专业用户）
							this.getTopComponent();
							this.getTopStrategy();
						}

					} else {
						document.location.reload();
						this.$toast.center(data.message);

					}
				});
			},

			indexPair(){
				if(this.pairType==1){
					this.toPair();
				}else{
					this.toPair2();
				}
			},

			toPair(){//购买组件

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


					buyUnit(params).then(data => {
						if(data.code == 200) {
							$(".close").click();
							$("#buySuccess").click();
							setTimeout(function() {
								$(".close").click();
							},3500)
						} else {
							this.$toast.center(this.$t('netnew.nonet'));

						}
					});

				  }
				})
			},
			toPair2(){//购买策略
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

				  }
				})
			},
			choseTime2(id) {
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
			getparams() {
				if(this.$route.params.relogin) {
					$('.login-check').click();
				}
			},
			toMarkets(robotId) {
				this.$router.push({
					path: 'marketDetails',
					query: {
						robotId: robotId
					}
				})
				window.scrollTo(0, 0);
				//this.$router.push('/markets')
			},
			toMarkets1(val) {
				this.$router.push({
					name: "markets",
					params: {
						name: "markets",
						id: val,
					}
				})
			},
			toMarkets2(list) {
				this.unitName=list.Name;
				this.unitLName=list.LocalName;
				this.choosedUnit=list;
				this.getNetBalance();
				this.pairSelected=1;
				this.pairType=1;
				this.payPrice=this.choosedUnit.UnitPrice*30
				this.day_type="30day";
			},
			toMarkets3(list) {
				this.unitName=list.StrategyType;
				this.unitLName=list.LocalName;
				this.choosedUnit=list;
				this.getNetBalance();
				this.pairSelected=1;
				this.pairType=2;
				this.payPrice=this.choosedUnit.UnitPrice*30
				this.day_type="30day";
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
			changeAuto(){
				this.auto_renew=!this.auto_renew;
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

			toPairSucc() {
				this.waring = false;
				this.addRobotOrder.originPrice = this.originPrice;
				this.addRobotOrder.timingType = this.timingTypeInfo.timingType;
				this.addRobotOrder.payPrice = this.payPrice;
				this.addRobotOrder.exchange = this.addRobotOrderList.exchange;
				this.addRobotOrder.robotId = this.items.robotId;
				this.addRobotOrder.timingType = this.pairSelected;
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

				robotordernow(this.addRobotOrder).then(data => {////机器人购买
					if(data.message == "success") {

						this.checkLogin(),
							this.pairSuccess = false;
						this.timerReg = setInterval(this.startRegCD, 1000);

						this.reload();
					} else {
						if(data.success == 10010) {
							var m = this.$t('market.kegm');
							this.$toast.center(m + " " + data.message)
							return false;
						} else if(data.success == 10000) {
							var m = this.$t('market.longError');
							this.$toast.center(m)
							return false;
						} else if(data.success == 10001) {
							var m = this.$t('market.netnoEngh');
							this.$toast.center(m)
							return false;
						} else if(data.success == 10002) {
							var m = this.$t('market.noRobot');
							this.$toast.center(m)
							return false;
						} else if(data.success == 10003) {
							var m = this.$t('market.alreadyBuy');
							this.$toast.center(m)
							return false;
						} else if(data.success == 10005) {
							var m = this.$t('market.accountNo');
							this.$toast.center(m)
							return false;
						} else if(data.success == 10006) {
							var m = this.$t('market.noMon');
							this.$toast.center(m)
							return false;
						}
					}
				});

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
			getMainRobotInfo() {
				getMainRobotInfo().then(data => {
//					this.closeLoading();
					if(data.code == 200) {
							if(data.data){
								this.robotInfoList=data.data
								for(var i=0;i<this.robotInfoList.length;i++){
									this.robotInfoList[i].annualized_return=this.robotInfoList[i].annualized_return*100;
									this.robotInfoList[i].average_return_per_trade=this.robotInfoList[i].average_return_per_trade*100;
									this.robotInfoList[i].max_drawdown_ratio=this.robotInfoList[i].max_drawdown_ratio*100;

								}
								let _this=this;
								setTimeout(function() {
									_this.startChart();
								},100)

							}
					} else {
						//   console.log(data)
					}
				});
			},
			startChart(){
				if(this.robotInfoList){
					for(var i=0;i<this.robotInfoList.length;i++){
						var xdata=[];
						var ydata=[];
						for(var j=0;j<this.robotInfoList[i].details.length;j++){
							xdata.push(this.$options.filters.tofixd(this.robotInfoList[i].details[j].cumprod_return))
							ydata.push(this.$options.filters.chartsData(this.robotInfoList[i].details[j].create_time))
						}
						this.drawLine(xdata,ydata,i);
					}
				}
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
				$("#buy_success").on("hidden.bs.modal", function () {
                    $("body").css("padding-right","0px")
                });
			},
			drawLine(xdata,ydata,index) {
				// 基于准备好的dom，初始化echarts实例

				let myChart = this.$echarts.init(document.getElementById('container'+index))

					// 绘制图表
				myChart.setOption({
					tooltip: {
						trigger: 'axis',
						formatter: '{b}<br/>{a}:\n{c}%'

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
						data: ydata,
						axisLine: {
							lineStyle: {
								color: "#ffffff",
							}
						}

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
								color: "#ffffff",
							}
						},
						axisLabel: {
							show: true,
							interval: 'auto',
							formatter: '{value}%',
							lineStyle: {
								color: "#fff",
							}

						},
					}],
					series: [{
						name: 'cumulative return',
						data: xdata,
						type: 'line',
						smooth:1,
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


	.carousel_box {
		min-width: 1400px;
	}

	.carousel_item_box {
		background: rgba(255, 255, 255, 0);
		width: 4px;
		height: 150px;
		left: 95%;
		border-radius: 25px;
		padding-top: 2px;
		margin-left: 0px;
	}

	.carousel_item_common {
		width: 2px;
		height: 32px;
		margin: 2px;
		background: #7FCEFF33;
	}

	.carousel_item_box .active {
		width: 4px;
		height: 32px;

	}

	.select_robot_title_font {
		font-size: 40px;
		color: #fff;
		letter-spacing: 0;
		margin-left: 75px;
	}

	.select_robot_div {
		text-align: center;
		padding-top: 80px;
		background: none;
		padding-bottom: 60px;
		min-width: 1400px;
	}

	.chartBox {
		width: 433px;
		height: 593px;
		margin-bottom: 45px;
		/*box-shadow: 3px 3px 10px 0 rgba(5, 92, 203, 0.2);*/
		transition: all .25s ease-in;
		-moz-transition: all .25s ease-in;
		-webkit-transition: all .25s ease-in;
		/*border-radius: 4px;*/
		background: url('../assets/img/chartbox.png');
		background-size: cover;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
		margin-right: 50px;
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
		font-size: 16px;
		color: #3158E4 !important;
		letter-spacing: 0;
	}

	.robot_detail {
		cursor: pointer;
		font-size: 14px;
		letter-spacing: 0;
		margin-right: 10px;
		padding: 24px 70px;
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
		font-size: 40px;
		color: #fff;
		letter-spacing: 0;
		line-height: 48px;
	}

	.solution_text {
		font-size: 24px;
		color: #909499;
		letter-spacing: 0;
	}

	.solution_item_font {
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
		font-size: 40px;
		color: #000000;
		letter-spacing: 0;
	}

	.ecosystem_pic {
		margin-top: 40px;
		margin-bottom: 40px;
	}

	.ecosystem_text {
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
		width: 250px;
		height: 75px;
		font-size: 24px;
		color: #FFFFFF;
		letter-spacing: 0;
		position: absolute;
		left: 13.5%;
		bottom: 32%;
		border: none;
		padding-top: 26px;
		cursor: pointer;
		z-index: 5000;
	}
	.chartbox-right{
		margin-right: 0 !important;
	}

	.banner_img {
		left: 13.5%;
		bottom: 32%;
		width: 250px;
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
	}

	.bf-box {
		width: 329px;
		height: 313px;
		background: url('../assets/img/robot factory box.png');
		background-size: cover;
	}

	.chart-btnImg {
		position: absolute;
		top: 0;
		left: 50%;
		width: 216.5px;
		height: 60px;
		cursor: pointer;
	}
</style>
