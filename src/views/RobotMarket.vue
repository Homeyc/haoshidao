<template>
    <div class="market_box"><!--顶部banner-->
		<button v-show="false" href="#buy_now" id="buyRot" data-toggle="modal"> {{$t('market.marketSubscribe')}}</button>
		<button v-show="false" href="#buy_success"  data-toggle="modal" id="buySuccess" > {{$t('market.marketSubscribe')}}</button>
        <div class="main_img" style="position: relative;">
            <img v-show="$i18n.locale=='zh-CN'" :src="main_img">
            <img v-show="$i18n.locale=='en-US'" src="../assets/img/jqrsc_banner_en.png">
            <img v-show="$i18n.locale=='ko'" src="../assets/img/robotmarket_ko.png">
        </div>
            <!--tabNav-->
        <div class="center_box">
            <div class="market_sort_box">
                <div class="lg-width sort_item" style="width: 15%;" :class="{'select_sort':mkTab==1}" @click="changeMktab(1)">{{$t('netnew.all')}}({{allRbtAmount}})</div>
                <div class="lg-width sort_item" style="width: 15%;" :class="{'select_sort':mkTab==2}" @click="changeMktab(2)">{{$t('netnew.typelong')}}({{longRbtAmount}})</div>
                <div class="lg-width sort_item" style="width: 15%;" :class="{'select_sort':mkTab==3}" @click="changeMktab(3)">{{$t('netnew.typeshort')}}({{shortRbtAmount}})</div>
				<!-- <div class="lg-width sort_item" style="width: 15%;" :class="{'select_sort':mkTab==4}" @click="changeMktab(4)">{{$t('netnew.longandshort')}}</div>-->
                <div class="lg-width search_item " style="width: 20%;margin-left: 10%;text-align: left;float: right;" v-show="mkTab==1">
                    <div class="search_box" style="position: relative;border-bottom: 1px solid #3a6196;height: 60px;">
                        <img :src="search_icon">
                        <input v-show="$i18n.locale=='en-US'" type="text" class="search_input" placeholder="Search Robot" v-model="serachName" @change="serachRobot">
                        <input v-show="$i18n.locale=='zh-CN'" type="text" class="search_input" placeholder="搜索机器人" v-model="serachName" @change="serachRobot">
                        <input v-show="$i18n.locale=='ko'" type="text" class="search_input" placeholder="기계를 검색하다" v-model="serachName" @change="serachRobot">
                    </div>
                </div>
            </div>

            <!--全部机器人列表-->
            <div class="market_item_box" v-show="mkTab==1">

                <div class="robot_item" v-for="(item,index) in robotTop" >
                    <div class="main_body">
                        <div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <img :src="src[item.imgurl].img">
                            <!--<img src="../assets/img/header/NetCentricShort.png">-->
                        	<!--<img :src="robot_img">-->
                        </div>

                        <div class="lg-width robot_des" style="width:1158px ;">
                            <div class="des_top_box">
                                <div v-show="$i18n.locale!='zh-CN'" class="des_title">{{ item.RobotName }}</div>
                                <div v-show="$i18n.locale=='zh-CN'" class="des_title">{{ item.RobotLocalName }}</div>
                            </div>
                            <div class="des_author">
                                <label class="l_author">{{$t('net.author')}}: &nbsp;&nbsp;</label><img :src="T2">&nbsp;<i class="v_author">{{ item.Owner }}</i>
                            </div>

                            <div class="des_main">

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.TradeType|tradeType}}</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex1')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;" >
                                    <div class="des_value green_font">{{ item.AnnualizedReturn|tofixd }}%</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex2')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value green_font">{{ item.AverageReturnPerTrade|tofixd }}%</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex3')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.WinRate|tofixd }}%</div>
                                    <div class="des_field">{{$t("robotdetails.Accuracy") }}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.SharpeRatio|tofixd }}%</div>
                                    <div class="des_field">{{$t("robotdetails.Sharperatio") }}</div>
                                </div>

                                <div class="lg-width" style="width: 18%;">
                                    <div class="des_value">{{ item.AverageHoldingPeriod|fix2 }}</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex6')}}</div>
                                </div>

                            </div>

                            <div class="item_footer" >
                                <div class="lg-width des_czline" >
                                    <div class="avaliable_box" style="display: inline-block;">
                                        <label>{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.Quota }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
                                    </div>
                                    <div class="price_box netWhite" style="display: inline-block;">
                                        <span v-show="item.robot_grade == 'OTO'" class="price_white"><span style="font-size:24px;">0.1</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--一级机器人-->
                                        <span v-show="item.robot_grade == 'OTM'" class="price_white"><span style="font-size:24px;">0.17</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--二级机器人-->
                                        <span v-show="item.robot_grade == 'MTM'" class="price_white"><span style="font-size:24px;">0.25</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--三级机器人-->
                                        <i class="fa fa-question-circle" aria-hidden="true" style="margin-left: 10px;color:#718EBD;cursor: pointer;font-size:14px;" @mouseover="feIfshow = item.Id" @mouseleave="feIfshow = false"></i>
                                       <!-- <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>-->
                                    </div>
                                    <div style="display: inline-block;position:relative" v-show="feIfshow == item.Id">
                                        <div style="position:absolute;left:10px;top:-10px;">
                                            <div class="trialSj"></div>
                                            <div style="position:absolute;left:0;top:0;color:#718EBD;font-size:12px;padding:10px;background-color: #24334A;border-radius: 0 4px 4px 4px;min-width:200px;">
                                                <ul  v-show="item.robot_grade == 'OTO'"><!--1级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.1NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.15NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.23NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                                <ul v-show="item.robot_grade == 'OTM'"><!--2级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.17NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.27NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.41NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                                <ul v-show="item.robot_grade == 'MTM'"><!--3级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.25NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.45NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.65NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscript_box" style="display: inline-block;float: right;">
                                        <button  @click="toRobotDetail(item.Id)">{{$t('market.details')}}</button>
                                        <button style="color:#fff;" > {{$t('market.marketSubscribe')}}</button>
                                        <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn"  @click="toBuy(item)" href="#buy_now"  data-toggle="modal" >
                                        <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn" data-toggle="modal" href="#myModal">
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <!--多头列表-->
            <div class="market_item_box" v-show="mkTab==2">

                <div class="robot_item" v-for="(item,index) in robotLong">
                    <div class="main_body">
                        <div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[item.imgurl].img">
                        </div>

                        <div class="lg-width robot_des" style="width:1158px ;">
                            <div class="des_top_box">
                                 <div v-show="$i18n.locale!='zh-CN'" class="des_title">{{ item.RobotName }}</div>
                                <div v-show="$i18n.locale=='zh-CN'" class="des_title">{{ item.RobotLocalName }}</div>
                            </div>
                            <div class="des_author">
                                <label class="l_author">{{$t('net.author')}}: &nbsp;&nbsp;</label><img :src="T2">&nbsp;<i class="v_author">{{ item.Owner }}</i>
                            </div>

                            <div class="des_main">

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.TradeType|tradeType}}</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex1')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;" >
                                    <div class="des_value green_font">{{ item.AnnualizedReturn|tofixd }}%</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex2')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value green_font">{{ item.AverageReturnPerTrade|tofixd }}%</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex3')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.WinRate|tofixd }}%</div>
                                    <div class="des_field">{{$t("robotdetails.Accuracy") }}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.SharpeRatio|tofixd }}%</div>
                                    <div class="des_field">{{$t("robotdetails.Sharperatio") }}</div>
                                </div>

                                <div class="lg-width" style="width: 18%;">
                                    <div class="des_value">{{ item.AverageHoldingPeriod|fix2 }}</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex6')}}</div>
                                </div>

                            </div>

                            <div class="item_footer" >
                                <div class="lg-width des_czline" >
                                    <div class="avaliable_box" style="display: inline-block;">
                                        <label>{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.Quota }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
                                    </div>
                                   <!-- <div class="price_box netWhite" style="display: inline-block;">
                                        <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>
                                    </div>-->
                                    <div class="price_box netWhite" style="display: inline-block;">
                                        <span v-show="item.robot_grade == 'OTO'" class="price_white"><span style="font-size:24px;">0.1</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--一级机器人-->
                                        <span v-show="item.robot_grade == 'OTM'" class="price_white"><span style="font-size:24px;">0.17</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--二级机器人-->
                                        <span v-show="item.robot_grade == 'MTM'" class="price_white"><span style="font-size:24px;">0.25</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--三级机器人-->
                                        <i class="fa fa-question-circle" aria-hidden="true" style="margin-left: 10px;color:#718EBD;cursor: pointer;font-size:14px;" @mouseover="feIfshow = item.Id" @mouseleave="feIfshow = false"></i>
                                        <!-- <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>-->
                                    </div>
                                    <div style="display: inline-block;position:relative" v-show="feIfshow == item.Id">
                                        <div style="position:absolute;left:10px;top:-10px;">
                                            <div class="trialSj"></div>
                                            <div style="position:absolute;left:0;top:0;color:#718EBD;font-size:12px;padding:10px;background-color: #24334A;border-radius: 0 4px 4px 4px;min-width:200px;">
                                                <ul  v-show="item.robot_grade == 'OTO'"><!--1级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.1NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.15NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.23NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                                <ul v-show="item.robot_grade == 'OTM'"><!--2级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.17NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.27NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.41NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                                <ul v-show="item.robot_grade == 'MTM'"><!--3级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.25NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.45NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.65NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscript_box" style="display: inline-block;float: right;">
                                        <button  @click="toRobotDetail(item.Id)">{{$t('market.details')}}</button>
                                        <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                                        <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn"  @click="toBuy(item)" href="#buy_now"  data-toggle="modal">
                                        <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn"  data-toggle="modal" href="#myModal">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>



            </div>

            <!--空头列表-->
            <div class="market_item_box" v-show="mkTab==3">

                <div class="robot_item" v-for="(item,index) in robotShort">
                    <div class="main_body">
                        <div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[item.imgurl].img">
                        </div>

                        <div class="lg-width robot_des" style="width:1158px ;">
                            <div class="des_top_box">
                                 <div v-show="$i18n.locale!='zh-CN'" class="des_title">{{ item.RobotName }}</div>
                                <div v-show="$i18n.locale=='zh-CN'" class="des_title">{{ item.RobotLocalName }}</div>
                            </div>
                            <div class="des_author">
                                <label class="l_author">{{$t('net.author')}}: &nbsp;&nbsp;</label><img :src="T2">&nbsp;<i class="v_author">{{ item.Owner }}</i>
                            </div>

                            <div class="des_main">

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.TradeType|tradeType}}</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex1')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;" >
                                    <div class="des_value green_font">{{ item.AnnualizedReturn|tofixd }}%</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex2')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value green_font">{{ item.AverageReturnPerTrade|tofixd }}%</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex3')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.WinRate|tofixd }}%</div>
                                    <div class="des_field">{{$t("robotdetails.Accuracy") }}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.SharpeRatio|tofixd }}%</div>
                                    <div class="des_field">{{$t("robotdetails.Sharperatio") }}</div>
                                </div>

                                <div class="lg-width" style="width: 18%;">
                                    <div class="des_value">{{ item.AverageHoldingPeriod|fix2 }}</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex6')}}</div>
                                </div>

                            </div>

                            <div class="item_footer" >
                                <div class="lg-width des_czline" >
                                    <div class="avaliable_box" style="display: inline-block;">
                                        <label>{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.Quota }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
                                    </div>
                                  <!--  <div class="price_box netWhite" style="display: inline-block;">
                                        <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>
                                    </div>-->
                                    <div class="price_box netWhite" style="display: inline-block;">
                                        <span v-show="item.robot_grade == 'OTO'" class="price_white"><span style="font-size:24px;">0.1</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--一级机器人-->
                                        <span v-show="item.robot_grade == 'OTM'" class="price_white"><span style="font-size:24px;">0.17</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--二级机器人-->
                                        <span v-show="item.robot_grade == 'MTM'" class="price_white"><span style="font-size:24px;">0.25</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--三级机器人-->
                                        <i class="fa fa-question-circle" aria-hidden="true" style="margin-left: 10px;color:#718EBD;cursor: pointer;font-size:14px;" @mouseover="feIfshow = item.Id" @mouseleave="feIfshow = false"></i>
                                        <!-- <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>-->
                                    </div>
                                    <div style="display: inline-block;position:relative" v-show="feIfshow == item.Id">
                                        <div style="position:absolute;left:10px;top:-10px;">
                                            <div class="trialSj"></div>
                                            <div style="position:absolute;left:0;top:0;color:#718EBD;font-size:12px;padding:10px;background-color: #24334A;border-radius: 0 4px 4px 4px;min-width:200px;">
                                                <ul  v-show="item.robot_grade == 'OTO'"><!--1级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.1NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.15NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.23NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                                <ul v-show="item.robot_grade == 'OTM'"><!--2级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.17NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.27NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.41NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                                <ul v-show="item.robot_grade == 'MTM'"><!--3级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.25NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.45NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.65NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscript_box" style="display: inline-block;float: right;">
                                        <button  @click="toRobotDetail(item.Id)">{{$t('market.details')}}</button>
                                        <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                                        <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn"  @click="toBuy(item)" href="#buy_now"  data-toggle="modal">
                                        <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn"  data-toggle="modal" href="#myModal">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
             <!--多空头列表-->
            <div class="market_item_box" style="min-height: 400px;" v-show="mkTab==4">

                <div class="robot_item" v-for="(item,index) in robotLs">
                    <div class="main_body">
                        <div class="lg-width robot_img" style="text-align: center;width: 241px;height: 263px;">
                            <!--<img :src="robot_img">-->
                            	<img :src="src[item.imgurl].img">
                        </div>

                        <div class="lg-width robot_des" style="width:1158px ;">
                            <div class="des_top_box">
                                <div v-show="$i18n.locale!='zh-CN'" class="des_title">{{ item.RobotName }}</div>
                                <div v-show="$i18n.locale=='zh-CN'" class="des_title">{{ item.RobotLocalName }}</div>
                            </div>
                            <div class="des_author">
                                <label class="l_author">{{$t('net.author')}}: &nbsp;&nbsp;</label><img :src="T2">&nbsp;<i class="v_author">{{ item.Owner }}</i>
                            </div>

                            <div class="des_main">

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.TradeType|tradeType}}</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex1')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;" >
                                    <div class="des_value green_font">{{ item.AnnualizedReturn|tofixd }}%</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex2')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value green_font">{{ item.AverageReturnPerTrade|tofixd }}%</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex3')}}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.WinRate|tofixd }}%</div>
                                    <div class="des_field">{{$t("robotdetails.Accuracy") }}</div>
                                </div>

                                <div class="lg-width" style="width: 16%;">
                                    <div class="des_value">{{ item.SharpeRatio|tofixd }}%</div>
                                    <div class="des_field">{{$t("robotdetails.Sharperatio") }}</div>
                                </div>

                                <div class="lg-width" style="width: 18%;">
                                    <div class="des_value">{{ item.AverageHoldingPeriod|fix2 }}</div>
                                    <div class="des_field">{{$t('netnew.RbmarketTex6')}}</div>
                                </div>

                            </div>

                            <div class="item_footer" >
                                <div class="lg-width des_czline" >
                                    <div class="avaliable_box" style="display: inline-block;">
                                        <label>{{$t('market.theRemainingShare')}}/{{$t('netnew.StandardCoin')}}: &nbsp;</label><i class="value_left">{{ item.Quota }}</i><i style="color: #718EBD;">   {{ item.BaseCurrency }}</i>
                                    </div>
                                   <!-- <div class="price_box netWhite" style="display: inline-block;">
                                        <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>
                                    </div>-->
                                    <div class="price_box netWhite" style="display: inline-block;">
                                        <span v-show="item.robot_grade == 'OTO'" class="price_white"><span style="font-size:24px;">0.1</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--一级机器人-->
                                        <span v-show="item.robot_grade == 'OTM'" class="price_white"><span style="font-size:24px;">0.17</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--二级机器人-->
                                        <span v-show="item.robot_grade == 'MTM'" class="price_white"><span style="font-size:24px;">0.25</span>NET/{{$t('netnew.unitFe')}}  {{$t('netnew.start')}}</span><!--三级机器人-->
                                        <i class="fa fa-question-circle" aria-hidden="true" style="margin-left: 10px;color:#718EBD;cursor: pointer;font-size:14px;" @mouseover="feIfshow = item.Id" @mouseleave="feIfshow = false"></i>
                                        <!-- <i class="current_price">{{ item.UnitPrice }}</i><label class="unit">NET({{$t('netnew.pershare')}})/{{$t('market.day')}}</label>-->
                                    </div>
                                    <div style="display: inline-block;position:relative" v-show="feIfshow == item.Id">
                                        <div style="position:absolute;left:10px;top:-10px;">
                                            <div class="trialSj"></div>
                                            <div style="position:absolute;left:0;top:0;color:#718EBD;font-size:12px;padding:10px;background-color: #24334A;border-radius: 0 4px 4px 4px;min-width:200px;">
                                                <ul  v-show="item.robot_grade == 'OTO'"><!--1级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.1NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.15NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.23NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                                <ul v-show="item.robot_grade == 'OTM'"><!--2级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.17NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.27NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.41NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                                <ul v-show="item.robot_grade == 'MTM'"><!--3级机器人-->
                                                    <li>{{$t('netnew.oneToFive')}}0.25NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.fiveToTen')}}0.45NET/{{$t('netnew.unitFe')}}</li>
                                                    <li>{{$t('netnew.eleven')}}0.65NET/{{$t('netnew.unitFe')}}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="subscript_box" style="display: inline-block;float: right;">
                                        <button  @click="toRobotDetail(item.Id)">{{$t('market.details')}}</button>
                                        <button style="color:#fff;"> {{$t('market.marketSubscribe')}}</button>
                                        <img  v-show="ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn"  @click="toBuy(item)" href="#buy_now"  data-toggle="modal">
                                        <img  v-show="!ifLogin" src="../assets/img/dybtn@2x.png" class="market_img light-btn"  data-toggle="modal" href="#myModal">

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


            <!--<div class="market_page_box">
                <button class="page_normal left_btn">&lt;</button>

                <button class="page_normal page_item page_selected" style="border-radius: 0px">1</button>

                <button class="page_normal right_btn" style=" border-radius: 0px 4px 4px 0px;">&gt;</button>

            </div>-->
            <!--购买机器人弹窗  start-->
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
										<input type="number" min="0" class="buyNum" v-model="buyRbtParams.amount" @change="changeShare" />
									</div>
								</div>
								<div style="display: table;width: 50%;float: left;padding-top: 17px;">
									<span style="font-size: 16px;color: #718EBD;line-height: 50px;">×{{buyRbtParams.base_multiple}}{{buyRbtParams.BaseCurrency}}= {{ buyRbtParams.base_multiple*buyRbtParams.amount }}{{buyRbtParams.BaseCurrency}}</span>
								</div>
                                <!--<div style="display: table;width: 37%;float: left;padding-top: 17px;">
                                    <span style="font-size: 12px;color: #718EBD;line-height: 50px;">{{buyRbtParams.base_multiple}}{{buyRbtParams.BaseCurrency}} = {{ buyRbtParams.base_multiple*buyRbtParams.amount }}{{buyRbtParams.BaseCurrency}}</span>
                                </div>-->
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
            <!--购买弹窗 end-->

            <!--购买成功提醒框  start-->
			<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog"  id="buy_success" class="modal fade" style="padding-right: 0px !important;" >
				<div class="modal-dialog" style="width: 400px !important; top:250px">
					<div class="modal-content pair-box" style="width: 400px !important;height: 200px;position: relative;text-align: center;">
							<img src="../assets/img/buysuccess.png">
							<div style="color: #fff;">{{ $t("netnew.SubscribeSuccess") }}</div>
					</div>
				</div>

			</div>
      	</div>
        <!--登陆注册弹窗  start-->
	  	<modal :isLogin="isLogin"></modal>
    </div>
</template>
<script>
	import Modal from "../components/Modal.vue";
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
    	components: {
    	Modal
  		},
        data() {
            return {
                feIfshow:false,//份额等级显示与否
                allRbtAmount:0,
                longRbtAmount:0,
                shortRbtAmount:0,
	     	  	src: [
			        { img: require("../assets/img/header/NetCentricShort.png")},
					{ img: require("../assets/img/header/NetCentricLong.png") },
					{ img: require("../assets/img/header/NetCentriclong_and_short.png")},
					{ img: require("../assets/img/header/NetCentricHedge.png")},

			    ],
                isUsdt: false,
                noExchange: false,
                checkWaring: false,
                lang: 0,
                waring: false,
                ifLogin: false,
                isAll: 1,
                serachName:"",
                pairSelected: "1",
                pairSuccess: true,
                backCD: 3,
                mkTab:1,
                totalPage: 1,
                useList:{},
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
                buyInfo:{
                	name:"",
                	accounts:[],
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
                isPair:false,
                isLogin:1,
                chosedRbtId:"",
                buyRbtParams:{
                	pay:0,
                	account_id:"",
                	day_type:"week",
                	auto_renew:true,
                	amount:0,
                	RobotName:"",
                },
                renewParams:{},//单个机器人信息
            }
        },
        methods: {
            check_waring() {
                this.checkWaring = !this.checkWaring;
                if ($(".childenop").val() == null) {
                    $(".card-btm").attr("disabled", true)
                    $(".card-btm").css("background-color", "#dcdcdc")
                    $(".market-btm").attr("disabled", true)
                    $(".market-btm").css("background-color", "#dcdcdc")
                } else {
                    if (this.checkWaring == true) {
                        $(".market-btm").attr("disabled", false)
                        $(".market-btm").css("background-color", "#055ccb")
                    } else {
                        $(".market-btm").css("background-color", "#dcdcdc")
                        $(".market-btm").attr("disabled", true)
                    }
                }
            },
            checkT() {
                var initAccountBalanceInfo = {};
                initAccountBalanceInfo.exchange = this.addRobotOrderList.exchange;
                initAccountBalanceInfo.exchangAccountId = this.addRobotOrder.exchangAccountId;
                initAccountBalanceInfo.robotId = this.items.robotId;
                if (this.checkWaring == true) {
                    $(".market-btm").attr("disabled", false)
                    $(".market-btm").css("background-color", "#055ccb")
                }
                initAccountBalance(initAccountBalanceInfo).then(data => {//实例化账户余额
                });

            },
            changeAuto(){//购买机器人时，自动续费复选框
            	this.buyRbtParams.auto_renew=!this.buyRbtParams.auto_renew;
            },
            toBuy(val){//获取购买信息
                this.renewParams=val;//机器人所有信息
            	var params={};
            	this.pairSelected="1";
            	this.buyRbtParams.pay=0;
            	this.buyRbtParams.amount=0;
            	this.buyRbtParams.day_type="week";
            	this.chosedRbtId=val.Id;
            	params.robot_id=val.Id;
            	params.user_id=this.useList.userId;
            	this.buyRbtParams.user_id=this.useList.userId
            	this.buyRbtParams.robot_id=val.Id;
            	this.buyRbtParams.RobotName=val.RobotName;
            	if(val.RobotLocalName){
            		this.buyRbtParams.RobotLocalName=val.RobotLocalName;
            	}else{
            		this.buyRbtParams.RobotLocalName=val.local_name;
            	}

            	this.buyRbtParams.base_multiple=val.base_multiple;
            	this.buyRbtParams.UnitPrice=val.UnitPrice;
            	this.buyRbtParams.BaseCurrency=val.BaseCurrency;
        	  	getBuyInfo(params).then(data => {//获取购买信息
                    if (data.code = 200) {
                    	this.buyInfo=data.data;
                       if(this.buyInfo.accounts && this.buyInfo.accounts.length>0){
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
            initAccount(val){//购买机器人
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

          	 buyRbt(){//购买机器人
                 if(this.renewParams.robot_grade !='MTM' && this.buyRbtParams.amount>20){
                     this.$toast.center('购买份额最多为20');
                     return false;
                 }
          	 	if(this.buyRbtParams.pay>this.buyInfo.net_value){
          	 		this.$toast.center(this.$t('msg.msg100303'));
          	 		return false;
          	 	};
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
            checkLogin() {
                if (localStorage.getItem("token")) {
                    this.ifLogin = true;
                    this.getUinfo();
                } else {
                    this.ifLogin = false;
                }
            },
            loginCheck() {
                if (localStorage.getItem("token")) {
                    this.ifLogin = true;
                } else {
                    //	 this.$toast.center(this.$t('market.notLogin'));
                    $(".login-check").click();
                }
            },
            checkLang() {//监测语言
                if (localStorage.getItem("lang") == "zh-CN") {
                    this.lang = 0;
                } else {
                    this.lang = 1;
                }
            },
            marketTop() {//获取机器人列表数据
                marketTop().then(data => {
                    if (data.code == 200) {
                        this.allRbtAmount=0;
                        this.longRbtAmount=0;
                        this.shortRbtAmount=0;
                        this.robotTop = data.data;
                        this.robotLong=[];
                        this.robotShort=[];
                        this.robotLs=[];
                        if(this.robotTop.length>0){
                        	for(var i=0;i<this.robotTop.length;i++){
                                this.allRbtAmount++;
                        		//0 Short,1 Long, 2 short and long, 3 Hedg
                     			if(this.robotTop[i].TradeType=="Short"){
                     				this.robotTop[i].imgurl=0;
                     			}else if(this.robotTop[i].TradeType=="Long"){
                     				this.robotTop[i].imgurl=1;
                     			}else if(this.robotTop[i].TradeType=="Hedge"){
                     				this.robotTop[i].imgurl=3;
                     			}else {
                     				this.robotTop[i].imgurl=2;
                     			}

                        		if(this.robotTop[i].TradeType=="Long"){
                                    this.longRbtAmount++;
                        			this.robotLong.push(this.robotTop[i]);
                        		}else if(this.robotTop[i].TradeType=="Short"){
                        		    this.shortRbtAmount++
                        			this.robotShort.push(this.robotTop[i]);
                        		}else{
                        			this.robotLs.push(this.robotTop[i]);
                        		}
                        	}
                        }
                    }else{
                    	this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            getRobotList() {
                getRobotList(this.pageInfo).then(data => {
                    if (data.message == "success") {
                        this.robotList = data.data.list;
                        this.closeLoading();
                    }
                });
            },
            stop_parent() {
                $("#diy_s").click();
            },
            toRobotDetail(robotId) {
                this.$router.push({path: 'marketDetails', query: {robotId: robotId}})
            },
            all_earnings(id) {
                this.isAll = id;
            },
            choseTime(id) {//购买机器人时，选择购买天数
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
                	//this.buyRbtParams.pay=this.buyRbtParams.amount*7*this.buyRbtParams.UnitPrice;
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
                	//this.buyRbtParams.pay=this.buyRbtParams.amount*30*this.buyRbtParams.UnitPrice
                    if(allFe<=5){
                        this.buyRbtParams.pay=(allFe*unitPrice1*30).toFixed(2)
                    }else if(allFe>5 && allFe<=10){
                        this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*30).toFixed(2)
                    }else if(allFe>10){
                        this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*30).toFixed(2)
                    }
                }else if(id==3){
                	this.buyRbtParams.day_type="year";
                	params.day_type="year"
                	//this.buyRbtParams.pay=this.buyRbtParams.amount*365*this.buyRbtParams.UnitPrice
                    if(allFe<=5){
                        this.buyRbtParams.pay=(allFe*unitPrice1*365).toFixed(2)
                    }else if(allFe>5 && allFe<=10){
                        this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*365).toFixed(2)
                    }else if(allFe>10){
                        this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*365).toFixed(2)
                    }
                }
            },
            changeShare(){//购买份数变化时，计算需net数额
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
            		//this.buyRbtParams.pay=this.buyRbtParams.amount*7*this.buyRbtParams.UnitPrice;
                    if(allFe<=5){
                        this.buyRbtParams.pay=(allFe*unitPrice1*7).toFixed(2)
                    }else if(allFe>5 && allFe<=10){
                        this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*7).toFixed(2)
                    }else if(allFe>10){
                        this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*7).toFixed(2)
                    }
            	}else if(this.buyRbtParams.day_type=="month"){
            		//this.buyRbtParams.pay=this.buyRbtParams.amount*30*this.buyRbtParams.UnitPrice
                    if(allFe<=5){
                        this.buyRbtParams.pay=(allFe*unitPrice1*30).toFixed(2)
                    }else if(allFe>5 && allFe<=10){
                        this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*30).toFixed(2)
                    }else if(allFe>10){
                        this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*30).toFixed(2)
                    }
            	}else if(this.buyRbtParams.day_type=="year"){
            		//this.buyRbtParams.pay=this.buyRbtParams.amount*365*this.buyRbtParams.UnitPrice
                    if(allFe<=5){
                        this.buyRbtParams.pay=(allFe*unitPrice1*365).toFixed(2)
                    }else if(allFe>5 && allFe<=10){
                        this.buyRbtParams.pay=((5*unitPrice1+(allFe-5)*unitPrice2)*365).toFixed(2)
                    }else if(allFe>10){
                        this.buyRbtParams.pay=((5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*365).toFixed(2)
                    }
            	}
            },
            //3s成功倒计时
            startRegCD: function () {
                if (this.backCD <= 0) {
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
                    if (res.code == 200) {
                        this.authList = res.data;
                    } else {
                        this.$toast.center(res.msg)
                    }
                });
            },
            changeMktab(val){
				this.mkTab=val;
			},

            inity() {
                var _this = this;
                $("#addBuy").on("hidden.bs.modal", function () {//当弹出的模态框消失
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
                 $("#buy_success").on("hidden.bs.modal", function () {
                    $("body").css("padding-right","0px")
                });
            },
            getUinfo() {//获取用户基本信息
				getUserInfo({}).then(data => {
					if(data.success == 0) {
						this.useList = data.data;
						this.getParams();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
			getParams(){
				if(this.$route.params.id){
					$('#buyRot').click();
					var params={}
					params=this.$route.params.id
					params.Id=params.id;
					this.toBuy(params);
				}
			},
			serachRobot(){//搜索
				var params={}
				params.name=this.serachName;
				serachRobot(params).then(data => {
                    if (data.code = 200) {
                        this.allRbtAmount=0;
                        this.longRbtAmount=0;
                        this.shortRbtAmount=0;
                        this.robotLong=[];
                        this.robotShort=[];
                        this.robotLs=[];
                     this.robotTop = data.data;
                     //0 Short,1 Long, 2 short and long, 3 Hedg
	         			if(this.robotTop!=null){
	         				for(var i=0;i<this.robotTop.length;i++){
	         					if(this.robotTop[i].TradeType=="Short"){
			         				this.robotTop[i].imgurl=0;
			         			}else if(this.robotTop[i].TradeType=="Long"){
			         				this.robotTop[i].imgurl=1;
			         			}else if(this.robotTop[i].TradeType=="Hedge"){
			         				this.robotTop[i].imgurl=3;
			         			}else {
			         				this.robotTop[i].imgurl=2;
			         			}

                                this.allRbtAmount++;
                                if(this.robotTop[i].TradeType=="Long"){
                                    this.longRbtAmount++;
                                    this.robotLong.push(this.robotTop[i]);
                                }else if(this.robotTop[i].TradeType=="Short"){
                                    this.shortRbtAmount++
                                    this.robotShort.push(this.robotTop[i]);
                                }else{
                                    this.robotLs.push(this.robotTop[i]);
                                }
	         				}
	         			}
                    }else{
                    	this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });

			}

        },
        mounted: function () {
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

    .market_box {
        /*margin-top: 64px;*/
        /*background-color: #e8ebf1;*/
        padding-bottom:120px ;
        width:100%;
    }

    .main_img {
        margin-bottom: 40px;
    }

    .main_img img {
        width: 100%;
    }

    .center_box {
/*		min-width: 1440px;*/
		width: 1400px;
		margin: 0 auto;
		margin-top: -450px;
		position: relative;
    }

    .buy_success{
    	width: 478px;
	    opacity: 0;
	    pointer-events: none;
	    background-color: #fff;
	    text-align: center;
	    border-radius: 5px;
	    position: static;
	    margin: 20px auto;
	    display: inline-block;
	    vertical-align: middle;
	    -webkit-transform: scale(1);
	    transform: scale(1);
	    -webkit-transform-origin: 50% 50%;
	    transform-origin: 50% 50%;
	    z-index: 10001;
	    transition: opacity .2s,-webkit-transform .3s;
	    transition: transform .3s,opacity .2s;
	    transition: transform .3s,opacity .2s,-webkit-transform .3s;
    }


    .market_sort_box {
        height: 60px;
        /*background-color: #ffffff;*/
        margin-bottom: 40px;
        border-bottom: 1px solid #ffffff12;
    }


    .select_sort {
        color: #ffffff !important;
        background: url('../assets/img/tab_bg.png') no-repeat bottom;
    }

    .market_item_box {
		background: #ffffff0d;
		background-size:cover ;
		border:1px #ffffff4d solid;
		display: table;
		min-height: 263px;
    	min-width: 1402px;
    }

    .
    .market_page_box {
        height: 50px;
        border: 1px solid antiquewhite;
    }

    .market_sort_box .col-lg-2 {
        padding: 0;
    }

    .market_sort_box .col-lg-4 {
        padding: 0;
    }

    .market_sort_box {
        line-height: 60px;

    }

    .sort_item {
        text-align: center;
        cursor: pointer;
        color: #718EBD;
    }

    .search_item {
        text-align: right;

    }

    .search_box {

    }

    .search_icon {
        position: absolute;
        bottom: 33px;
    }


    .search_input {
        line-height: 30px;
        outline: none;
        border: none;
        padding-left: 15px;
        background: none;
    }

    .robot_item {
	    height: 263px;
	    font-size: 14px;
	    letter-spacing: 0;
	    border-bottom: 1px solid #ffffff12;
	    display: table;
    }
	.robot_img{
		background: url('../assets/img/dw@2x.png') no-repeat;
		background-size:100% 100%;

	}
    .robot_img img {
		width: 166px;
		margin-top: 41.5px;

    }

    .main_body .col-lg-2 {
        padding: 0;
    }

    .main_body .col-lg-2 {
        padding: 0;
    }

    .item_footer .col-lg-10 {
        padding: 0;

    }

    .des_title {
        font-size: 30px;
        color: #fff;
        letter-spacing: 0;
        line-height: 29px;
        font-weight:100;
        float: left;
    }

    .des_author {
        float: left;
        width: 100%;
        padding-top: 20px;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #ffffff12;
    }

    .des_author label {

        font-size: 14px;
        color: #718EBD;
        letter-spacing: 0;
        font-weight: 300;
    }

    .des_author img {
        height: 32px;
        /*border-radius: 16px;*/
    }

    .des_author i {
        font-style: normal;

        font-size: 14px;
        color: #fff;
        letter-spacing: 0;
        font-weight: 500;
    }

    .des_main {
        clear: left;
        margin-top: 50px;
        display: table;
    	width: 100%;
    	border-bottom: 1px solid #ffffff12;
    	padding-bottom: 15px;
    }

    .des_main .col-lg-2 {
        margin-bottom: 30px;
    }

    .des_value {
        font-family: SFProDisplay-Regular;
        font-size: 24px;
        color: #fff;
        letter-spacing: 0;
        margin-bottom: 10px;
        min-height: 29px;
        min-width: 185px;
    }

    .des_field {

        font-size: 14px;
        color: #718EBD;
        letter-spacing: 0;
        font-weight: 300;
        line-height: 16px;
    }

    .des_czline{
	    width: 100%;
	    height: 70px;
    }

    .red_font {
        color: #FF3232;
        box-sizing: border-box;
	    max-width: 100%;
	    overflow-wrap: break-word;
	    text-shadow: 2px 2px 10px #FF3232;
    }
    .green_font {
        color: #9DF5BB;
	    box-sizing: border-box;
	    max-width: 100%;
	    overflow-wrap: break-word;
	    text-shadow: 2px 2px 10px #65cea7;
    }

    .avaliable_box {
        margin-right: 50px;
        line-height: 70px;
    }

    .avaliable_box label {
        font-weight: 400;

        font-size: 14px;
        color: #718EBD;
        letter-spacing: 0;
        line-height: 16px;
    }

    .avaliable_box i {
        font-style: normal;
    }

    .avaliable_box .value_left {
        font-family: SFProDisplay-Bold;
        font-size: 14px;
        color: #718EBD;
        letter-spacing: 0;
        line-height: 16px;
    }

    .avaliable_box .total_amount {

        font-size: 14px;
        color: #718EBD;
        letter-spacing: 0;
        line-height: 16px;
    }
    .price_white{
        text-shadow: 0px 0px 10px #fff;
    }

    .price_box i {
        font-style: normal;
        font-weight: 700;
        font-size: 30px;
        letter-spacing: 0;
        margin-right: 5px;
    }

    .price_box label {

        font-size: 14px;

        letter-spacing: 0;
        font-weight: 400;
    }
    .subscript_box{
    	position: relative;
    }
    .subscript_box label {
        font-weight: 500;

        font-size: 14px;
        color: #3158E4;
        letter-spacing: 0;
        margin-right: 20px;

    }

    .subscript_box button {
     	font-size: 16px;
	    color: #718EBD;
	    letter-spacing: 0;
	    height: 70px;
	    width: 224px;
	    border: none;
	    background: none;
    }
    .subscript_box button:hover{
    	color: #fff !important;
    }

    .des_top_box{
    	width: 100%;
	    display: table;
	    padding-top: 20px;
    }

    .item_footer .col-lg-4,
    .item_footer .col-lg-3,
    .item_footer .col-lg-9,
    .item_footer .col-lg-8,
    .item_footer .col-md-2,
    .item_footer .col-md-10,
    .item_footer .col-sm-1,
    .item_footer .col-sm-11 {
        padding: 0;
    }
    .robot_des{
    	padding-left: 8px !important;
    }

    .market_page_box {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    .page_normal {
        background: #FFFFFF;
        border: 1px solid #DBDEDE;
        border-radius: 4px 0 0 4px;
        height: 40px;
        width: 40px;
        margin-right: 5px;
        margin-top: 16px;
        margin-bottom: 40px;
    }

    .page_selected {
        background: #3158E4;
        color: #FFFFFF;
    }


	.swal-button--catch:hover{
		background-color: #00000000 !important;
		color: #fff;
	}
	.swal-button--cancel:hover{
		background-color: #00000000 !important;
		color: #fff;
	}
	.swal-modal{
		background-color:#011122d9!important;
		border:1px #ffffff30 solid;
		border-radius:0px ;
	}
	.swal-title{
		color: #718EBD;
		font-weight: 500;
		padding: 18px 13px;
		font-size: 18px;
		border-bottom: 1px solid rgb(255,255,255,0.1);

	}
	.swal-title:first-child{
		margin-top: 0px;
	}
	.swal-text{
		padding: 20px 10px;
		color: #fff;
	}

	.swal-button-container{
		margin: 0 !important;
		width: 50% !important;
	}
	.swal-button--cancel {
	    background: none;
	    border: none;
	    color: #718EBD;
	    padding: 8px 10px 8px 10px;
	    font-size: 16px;
	    width: 95%;
	    height: 60px;
	    font-weight: 500;
	}
    .swal-button--catch {
	        background: url(/img/dybtn@2x.018fd623.png) no-repeat;
	    background-size: cover;
	    border: none;
	    color: #718EBD;
	    padding: 8px 10px 8px 10px;
	    font-size: 16px;
	    margin-left: 10%;
	    width: 95%;
	    height: 60px;
	    font-weight: 500;
	}
	.market_img{
		position: absolute;
		left: 50%;
		top: 0;
		width: 224px;
		height: 70px;
		cursor: pointer;
	}
    .trialSj{
        width:0;
        height:0;
        border-color:transparent #24334A;
        border-width:0 10px 10px 0;
        border-style:solid;
        position:absolute;
        left:-10px;
        top:0;
    }
    .buyNum{
        text-align: left;
        font-size: 16px;
        color: #fff;
        width: 100%;
        margin-right: 5px;
        line-height: 35px;
        margin-top: -11px;
        padding-left:22px;
        background: none;
        border: none;
    }

</style>

