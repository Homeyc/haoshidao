<template>
	<div class="market_box">
		<button v-show="false" href="#buy_now" id="buyUnit" data-toggle="modal"> {{$t('market.marketSubscribe')}}</button>
		<button v-show="false" href="#buy_success"  data-toggle="modal" id="buySuccess" > {{$t('market.marketSubscribe')}}</button>
		<div class="main_img" style="position: relative;">
			<img  v-show="$i18n.locale=='zh-CN'" :src="main_img">
			<img v-show="$i18n.locale=='en-US'" src="../assets/img/zjsc_banner_en.png">
			<img v-show="$i18n.locale=='ko'" src="../assets/img/unitmarker_ko.png">
		</div>
		<div style="width: 1400px;margin: 0 auto;padding-bottom: 20px;margin-top: -450px;position: relative;">
			<div class="market_sort_box">
				<div class="lg-width sort_item" style="width: 10%;text-align: left;padding-left: 40px;padding-right:40px ;" :class="{'select_sort':mkTab==1}" @click="changeMktab(1)">{{$t('netnew.all')}}({{allRbtAmount}})</div>
				<div class="lg-width sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==2}" @click="changeMktab(2)">{{$t('netnew.UnitRobot')}}({{unitRbtAmount}})</div>
				<!--<div class="col-lg-2 sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==3}" @click="changeMktab(3)">Decision Making</div>-->
				<div class="lg-width sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==4}" @click="changeMktab(4)">{{$t('netnew.RiskManagement')}}({{riskRbtAmount}})</div>
				<!--<div class="col-lg-2 sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==5}" @click="changeMktab(5)">Asset Allocation</div>-->
				<div class="lg-width sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==6}" @click="changeMktab(6)">{{$t('netnew.RobotWeighting')}}({{WeightRbtAmount}})</div>
				<div class="lg-width sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==7}" @click="changeMktab(7)">{{$t('netnew.FundOptimization')}}({{fundRbtAmount}})</div>
				<!--<div class="col-lg-2 sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==8}" @click="changeMktab(8)">Order Smart Router</div>-->
				<div class="lg-width sort_item" style="width: 11.5%;" :class="{'select_sort':mkTab==9}" @click="changeMktab(9)">{{$t('netnew.OrderExecution')}}({{orderRbtAmount}})</div>
			</div>
			<div class="market_item_box" v-show="mkTab==1">

				<div class="robot_item" v-for="(item,index) in UnitRobotList" v-show="userType!=2||item.UnitPrice==0">
                    <div class="main_body">
                        <div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[item.imgurl].img">
                        </div>

                        <div class="lg-width robot_des" style="width:1158px ;">
                            <div class="unitmarket_top_box">
                                <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ item.Name }}</div>
                                <div v-show="$i18n.locale=='zh-CN'"   class="des_title">{{ item.LocalName }}</div>
                            </div>

                            <div class="unitmarket_main">

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.RobotType|tradeType}}</div>
                                    <div class="des_field">{{$t('netnew.RobotType')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;" >
                                    <div class="des_value green_font">{{ item.BaseCurrency}}</div>
                                    <div class="des_field">{{$t('netnew.basicCurrency')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value green_font">{{ item.Pair}}</div>
                                    <div class="des_field">{{$t('net.pair')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.BaseExchange }}</div>
                                    <div class="des_field">{{$t('netnew.exchange1')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.SecondExchange }}</div>
                                    <div class="des_field">{{$t('netnew.exchange2')}}</div>
                                </div>

                                <div class="lg-width" style="width: 17%;">
                                    <div class="des_value">{{$t('netnew.UnitRobot')}}</div>
                                    <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                                </div>

                            </div>

                            <div class="item_footer" >
                                <div class="lg-width des_czline" >
                                    <div class="avaliable_box" style="display: inline-block;">
                                        <label>{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.LimitController }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
                                    </div>
                                    <div class="price_box netWhite" style="display: inline-block;">
                                        <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET/{{$t('market.day')}}</label>
                                    </div>
                                    <div class="subscript_box" style="display: inline-block;float: right;">
                                        <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                                        <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseUnit(item)" href="#buy_now"  data-toggle="modal">
                                        <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>


				<div class="component-box" v-for="list in RobotWeightingList">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ list.Name }}</div>
                    		<div v-show="$i18n.locale=='zh-CN'"  class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox" >
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.RobotWeighting')}}</div>
                            <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 74%;">
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
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseComponent(list)" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>



				<div class="component-box" v-for="list in OrderExecutionList">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ list.Name }}</div>
                    		<div v-show="$i18n.locale=='zh-CN'"  class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox">
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.OrderExecution')}}</div>
                            <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 74%;">
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
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseComponent(list)" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>




				<div class="component-box" v-for="list in FundOptimizationList">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ list.Name }}</div>
                    		<div v-show="$i18n.locale=='zh-CN'"   class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox">
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.FundOptimization')}}</div>
                            <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 74%;">
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
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseComponent(list)" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>




				<div class="component-box" v-for="list in RiskManagementList">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ list.Name }}</div>
                    		<div v-show="$i18n.locale=='zh-CN'"   class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox">
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.DecisionMakingRule')}}</div>
                            <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 74%;">
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
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseComponent(list)" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>


			</div>
			<div class="market_item_box" v-show="mkTab==2">
				<div class="robot_item" v-for="(item,index) in UnitRobotList" v-show="userType!=2||item.UnitPrice==0">
                    <div class="main_body">
                        <div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[item.imgurl].img">
                        </div>

                        <div class="lg-width robot_des" style="width:1158px ;">
                            <div class="unitmarket_top_box">
                                <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ item.Name }}</div>
                    			<div v-show="$i18n.locale=='zh-CN'"   class="des_title">{{ item.LocalName }}</div>
                            </div>

                            <div class="unitmarket_main">

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.RobotType|tradeType}}</div>
                                    <div class="des_field">{{$t('netnew.RobotType')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;" >
                                    <div class="des_value green_font">{{ item.BaseCurrency}}</div>
                                    <div class="des_field">{{$t('netnew.basicCurrency')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value green_font">{{ item.Pair}}</div>
                                    <div class="des_field">{{$t('net.pair')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.BaseExchange }}</div>
                                    <div class="des_field">{{$t('netnew.exchange1')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.SecondExchange }}</div>
                                    <div class="des_field">{{$t('netnew.exchange2')}}</div>
                                </div>

                                <div class="lg-width" style="width: 17%;">
                                    <div class="des_value">{{$t('netnew.UnitRobot')}}</div>
                                    <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                                </div>

                            </div>

                            <div class="item_footer" >
                                <div class="lg-width des_czline" >
                                    <div class="avaliable_box" style="display: inline-block;">
                                        <label>{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.LimitController }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
                                    </div>
                                    <div class="price_box netWhite" style="display: inline-block;">
                                        <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET/{{$t('market.day')}}</label>
                                    </div>
                                    <div class="subscript_box" style="display: inline-block;float: right;">
                                        <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                                        <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseUnit(item)" href="#buy_now"  data-toggle="modal">
                                        <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
			</div>

			<div class="market_item_box" v-show="mkTab==4">
				<div class="component-box" v-for="list in RiskManagementList">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ list.Name }}</div>
                    		<div v-show="$i18n.locale=='zh-CN'"  class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox">
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.DecisionMakingRule')}}</div>
                            <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 74%;">
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
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseComponent(list)" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>
			</div>
			<div class="market_item_box" v-show="mkTab==6">
				<div class="component-box" v-for="list in RobotWeightingList">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ list.Name }}</div>
                    		<div v-show="$i18n.locale=='zh-CN'"   class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox" >
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.RobotWeighting')}}</div>
                            <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 74%;">
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
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseComponent(list)" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>

			</div>
			<div class="market_item_box" v-show="mkTab==7">
				<div class="component-box" v-for="list in FundOptimizationList">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ list.Name }}</div>
                    		<div v-show="$i18n.locale=='zh-CN'"   class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox">
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.FundOptimization')}}</div>
                            <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 74%;">
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
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseComponent(list)" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>
			</div>
			<div class="market_item_box" v-show="mkTab==9">
				<div class="component-box" v-for="list in OrderExecutionList">
					<div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[list.imgurl].img">
                        </div>

					<div class="lg-width" style="width: 1159px;padding-left:8px;">
						<div class="unitmarket_top_box">
                            <div v-show="$i18n.locale!='zh-CN'"  class="des_title">{{ list.Name }}</div>
                    		<div v-show="$i18n.locale=='zh-CN'"  class="des_title">{{ list.LocalName }}</div>
                       </div>
					</div>

					<div class="lg-width unitmarket_midbox">
                        <div class="lg-width" style="width: 26%;">
                            <div class="des_value">{{$t('netnew.OrderExecution')}}</div>
                            <div class="des_field">{{$t('netnew.ComponentType')}}</div>
                        </div>
                        <div class="lg-width" style="width: 74%;">
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
                            <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  @click="choseComponent(list)" href="#buy_now"  data-toggle="modal">
                            <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="unitmarket_img light-btn"  data-toggle="modal" href="#myModal">
                        </div>
                    </div>


				</div>
			</div>


		</div>
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="buy_now" class="modal fade" >
			<div class="modal-dialog" style="width: 505px !important;">
				<button id="close" type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>
				<div class="modal-content pair-box" style="width: 505px !important;height: 550px;position: relative;">
					<div class="lg-row" >
						<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
							<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('market.marketSubscribe')}}</span>
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
							<span style="font-size: 24px;color: #055ccb;" >{{unitName}}</span>
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
								<span style="font-size:20px;color: #999999;">NET</span>
								<button href="javascript:(0)" class="pair-btn" style="margin-left: 15px;" @click="goRecharge">{{$t('market.topup')}}</button>
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
	import {getComponentList,getNetBalance,getUserInfo,buyUnit} from '../api/api';
	import Buysuccess from "../components/Buysuccess.vue";
	import swal from 'sweetalert';
	export default {
		components: {
    		Buysuccess
  		},
		data() {
			return {
                unitRbtAmount:0,
                riskRbtAmount:0,
                WeightRbtAmount:0,
                fundRbtAmount:0,
                orderRbtAmount:0,
				src: [
			        { img: require("../assets/img/header/UnitShort.png")},
					{ img: require("../assets/img/header/UnitLong.png") },
					{ img: require("../assets/img/header/Unitlong_and_short.png")},
					{ img: require("../assets/img/header/UnitHedge.png")},
					{ img: require("../assets/img/header/Decision Making Rule.png")},
					{ img: require("../assets/img/header/Robot Weighting.png") },
					{ img: require("../assets/img/header/Fund Optimization.png")},
					{ img: require("../assets/img/header/Order Execution.png")},

			    ],
				isUsdt: false,
				noExchange: false,
				checkWaring: false,
				lang: 0,
				mkTab: 1,
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
				unitName:"",
				unitLName:"",
				netValue:"",
				choosedUnit:"",
				day_type:"",
				isPair:true,
				auto_renew:true,
				userType:1,
			}
		},
        computed:{//setter
            allRbtAmount:{
                get(){
                    let sum = this.unitRbtAmount + this.riskRbtAmount + this.WeightRbtAmount + this.fundRbtAmount + this.orderRbtAmount
                    return sum
                },
                set(){
                    let sum = this.unitRbtAmount + this.riskRbtAmount + this.WeightRbtAmount + this.fundRbtAmount + this.orderRbtAmount
                    return sum
                }
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
			getComponent(){
				 getComponentList().then(data => {
                    if (data.code == 200) {
                        this.allRbtAmount = 0;
                        this.unitRbtAmount = 0;
                        this.riskRbtAmount = 0;
                        this.WeightRbtAmount = 0;
                        this.fundRbtAmount = 0;
                        this.orderRbtAmount = 0 ;
                      for(var i=0;i<data.data.productShelf.length;i++){
                      	if(data.data.productShelf[i].Category=="Risk Management"){
                            this.riskRbtAmount++;
                      		data.data.productShelf[i].imgurl=4;
                      		this.RiskManagementList.push(data.data.productShelf[i]);
                      	}else if(data.data.productShelf[i].Category=="Robot Weighting"){
                            this.WeightRbtAmount++
                      		data.data.productShelf[i].imgurl=5;
                      		this.RobotWeightingList.push(data.data.productShelf[i]);
                      	}else if(data.data.productShelf[i].Category=="Fund Optimization"){
                            this.fundRbtAmount++
                      		data.data.productShelf[i].imgurl=6;
                      		this.FundOptimizationList.push(data.data.productShelf[i]);
                      	}else if(data.data.productShelf[i].Category=="Order Execution"){
                            this.orderRbtAmount++
                      		data.data.productShelf[i].imgurl=7;
                      		this.OrderExecutionList.push(data.data.productShelf[i]);
                      	}
                      }

                      for(var i=0;i<data.data.shelfUnitRobot.length;i++){
                      	if(data.data.shelfUnitRobot[i].RobotType=="Short"){
                      		data.data.shelfUnitRobot[i].imgurl=0
                      	}else if(data.data.shelfUnitRobot[i].RobotType=="Long"){
                      		data.data.shelfUnitRobot[i].imgurl=1
                      	}else if(data.data.shelfUnitRobot[i].RobotType=="Hedge"){
                      		data.data.shelfUnitRobot[i].imgurl=3
                      	}else{
                      		data.data.shelfUnitRobot[i].imgurl=2
                      	}
                          this.unitRbtAmount++;
                      	this.UnitRobotList.push(data.data.shelfUnitRobot[i]);
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
			choseUnit(list){
				this.unitName=list.Name;
				this.unitLName=list.LocalName;
				this.choosedUnit=list;
				this.getNetBalance();
				this.pairSelected=1;
				this.payPrice=this.choosedUnit.UnitPrice*30
				this.day_type="30day";
			},
			choseComponent(list){
				this.unitName=list.Name;
				this.unitLName=list.LocalName;
				this.choosedUnit=list;
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
			inity() {
                var _this = this;
                 $("#buy_success").on("hidden.bs.modal", function () {
                    $("body").css("padding-right","0px")
                });
            },
			getParams(){
				if(this.$route.params.id){
					$('#buyUnit').click();
					var params={}
					params=this.$route.params.id
					this.choseUnit(params);
				}
			},
		},
		mounted(){
			this.inity();
			this.getComponent();
			if(localStorage.getItem('token')){
				this.getUinfo();
				this.ifLogin=true;
			}else{
				this.ifLogin=false;
			}
		},

		props: {
			main_img: {
				type: String,
				default: require("@/assets/img/unitmarket_banner@2x.png")
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

	.component-box{
	    height: 263px;

	    font-size: 14px;
	    letter-spacing: 0;
	    background-color:none;
	    border-bottom: 1px solid #ffffff12;
	}
	.cmp-imgbox{
		width: 116px;
		height:116px;
		border-radius:68px ;
		border: 4px solid #DBDEDE;
		overflow: hidden;
	}
	.cmp-box-tit{
		font-size: 14px;
		color: #909499;
		font-weight: 500;
	}
	.cmp-botton{
		background: #3158E4;
		border-radius: 4px;
		padding: 11px 20px;
		color: #fff;
		cursor: pointer;
		font-size: 16px;
	}
	.unit-cantpair{
		background: #c6c6c6;
	    border: none;
	    color: #fff;
	    border-radius: 5px;
	    padding: 8px 10px 8px 10px;
	    font-size: 16px;
	    width: 100px;
	}
	.unitmarket_img{
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 224px;
	    height: 70px;
	    cursor: pointer;
	}
	.unitmarket_main {
        clear: left;
        padding-top: 26px;
        display: table;
    	width: 100%;
    	border-bottom: 1px solid #ffffff12;
    	padding-bottom: 26px;
    }

    .unitmarket_top_box{
    	width: 100%;
	    display: table;
	    padding-top: 25px;
	    padding-bottom: 30px;
	    border-bottom: 1px solid #ffffff12;
    }

    .unitmarket_midbox{
    	width: 1151px;
    	height: 108px;
    	padding-left: 8px !important;
    	padding-top: 26px !important;
    	padding-bottom: 26px !important;
    	border-bottom: 1px solid #ffffff12;
    }
</style>
