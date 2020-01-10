<template>

    <div class="template_root">

        <!-- 轮播图 -->
        <div class="carousel slide auto carousel_box" style="" id="c-slide" data-wrap="true" data-ride="carousel"
             data-interval="3000">
            <ol class='carousel-indicators out carousel_item_box'
            >

                <li data-target='#c-slide' data-slide-to='0' class='active carousel_item_common'></li>
                <li data-target='#c-slide' data-slide-to='1' class='carousel_item_common' style='margin-left:5px;'></li>
                <li data-target='#c-slide' data-slide-to='2' class='carousel_item_common' style='margin-left:5px;'></li>
            </ol>
            <div class='carousel-inner'>
                <div class='item text-center active' @click='toPropaganda'>
                    <img v-show="$i18n.locale=='zh-CN'" :src="home_top_pic_1"
                         style='cursor:pointer;width: 100%;'>
                    <img v-show="$i18n.locale=='en-US'" :src="home_top_pic_1"
                         style='cursor:pointer;width: 100%;'>
                </div>
                <div class='item text-center'>
                    <img :src="home_top_pic_1" style="width: 100%;">
                </div>
                <div class='item text-center'>
                    <img :src="home_top_pic_1" style="width: 100%;">
                </div>

            </div>
            <a class='left carousel-control' style='top:-1em;margin-left: 2%;' href='#c-slide' data-slide='prev'>
                <i class='fa fa-angle-left' style='font-size: 1.6em;'></i>
            </a>
            <a class='right carousel-control' style='top:-1em;margin-right: 2%;' href='#c-slide' data-slide='next'>
                <i class='fa fa-angle-right' style='font-size: 1.6em;'></i>
            </a>
        </div>
        <!-- 轮播图 End -->

        <!-- 机器人选择 -->
        <div class="lg-row width-limt select_robot_div">
            <span class="midTitle select_robot_title_font">{{$t('net.markets')}}</span>

            <div class="row lg-row select_robot_box">

                <!-- Card -->
                <div class="lg-width chartBox">

                    <div class="lg-width rob-name"
                         style="width: 60%;margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;">
                        <span v-show="$i18n.locale=='en-US'" class="chartBox_robot_name_font">Robot Name</span>
                        <span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font">Robot local_name</span>
                    </div>

                    <div class="lg-width robot_owner">
                        <img :src="T2" style="width: 20px;border-radius: 10px;">
                        <span style="margin-left: 5px;" class="chartBox_robot_owner_font">Robot owner</span>
                    </div>
                    <div class="lg-width"
                         style="width: 90%;margin-left: 5%;margin-right: 5%;text-align: left;margin-top: 5px;position: relative;">
                        <div style="position: absolute;top: 5px;left: 5px;">
                            <span class="return_font">{{$t('net.Cumulative')}}</span>
                            <div class="chartBox_info_title_font robot_return">
                                <span><span><img
                                        style="margin:0 4px" :src="timeline1"/></span>{{$t('net.Return')}}</span>
                                <span style="color:#61a0a8;margin-left:6px;font-size: 12px;"><span><img
                                        style="margin:0 4px" :src="timeline3"/></span>{{$t('net.cumprod')}}</span>
                                <span style="color:#2f4554;margin-left:6px;font-size: 12px;"><span><img
                                        style="margin:0 4px" :src="timeline2"/></span>{{$t('net.pricechange')}}</span>
                            </div>
                        </div>
                        <div id="container" style="height: 300px;width: 100%;"></div>
                    </div>
                    <div class="lg-width robot_info_div">
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.type1')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">多头</span>
                            </div>
                        </div>
                        <div class="lg-width text_center quarter">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.annualized')}}</span>
                            </div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font"
                                                                style="color: red;">80 %</span>
                            </div>
                        </div>
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.manel')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font"
                                                                style="color: red;">120 %</span>
                            </div>
                        </div>
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.maxBack')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">200 %</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg-width left_div">
                        <a class="left_amount_color">{{$t('market.theRemainingShare')}}:</a>

                        <a class="left_amount_font">
                            400
                        </a>/500 ETH
                    </div>
                    <div class="lg-width robot_card_bottom">


                        <!-- 星星🌟 -->


                        <div class="star_bg float_left" :style="{background:'url('+star+')'}">
                            <a class="star star_1"></a>
                            <a class="star star_2"></a>
                            <a class="star star_3"></a>
                            <a class="star star_4"></a>
                            <a class="star star_5"></a>
                        </div>


                        <!-- 订阅 -->
                        <div class="float_right subscript_box">
                            <div>
                                <a @click="toMarkets(robotId1)" class="robot_detail">{{$t('market.details')}}</a>
                                <a href="#addBuy" v-if="ifLogin" @click="getBalance(roborInfoList1)"
                                   data-toggle="modal">
                                    <button class="card-btm1">{{$t('market.marketSubscribe')}}</button>
                                </a>
                                <a v-if="!ifLogin" @mouseenter="mouseover" @click="loginCheck" data-toggle="modal">
                                    <button class="card-btm1 subscript_btn">{{$t('market.marketSubscribe')}}</button>
                                </a>
                            </div>
                        </div>


                    </div>


                </div>
                <!-- Card  End-->


                <!-- Card -->
                <div class="lg-width chartBox">

                    <div class="lg-width rob-name"
                         style="width: 60%;margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;">
                        <span v-show="$i18n.locale=='en-US'" class="chartBox_robot_name_font">Robot Name</span>
                        <span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font">Robot local_name</span>
                    </div>

                    <div class="lg-width robot_owner">
                        <img :src="T2" style="width: 20px;border-radius: 10px;">
                        <span style="margin-left: 5px;" class="chartBox_robot_owner_font">Robot owner</span>
                    </div>
                    <div class="lg-width"
                         style="width: 90%;margin-left: 5%;margin-right: 5%;text-align: left;margin-top: 5px;position: relative;">
                        <div style="position: absolute;top: 5px;left: 5px;">
                            <span class="return_font">{{$t('net.Cumulative')}}</span>
                            <div class="chartBox_info_title_font robot_return">
                                <span><span><img
                                        style="margin:0 4px" :src="timeline1"/></span>{{$t('net.Return')}}</span>
                                <span style="color:#61a0a8;margin-left:6px;font-size: 12px;"><span><img
                                        style="margin:0 4px" :src="timeline3"/></span>{{$t('net.cumprod')}}</span>
                                <span style="color:#2f4554;margin-left:6px;font-size: 12px;"><span><img
                                        style="margin:0 4px" :src="timeline2"/></span>{{$t('net.pricechange')}}</span>
                            </div>
                        </div>
                        <div id="container" style="height: 300px;width: 100%;"></div>
                    </div>
                    <div class="lg-width robot_info_div">
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.type1')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">多头</span>
                            </div>
                        </div>
                        <div class="lg-width text_center quarter">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.annualized')}}</span>
                            </div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font"
                                                                style="color: red;">80 %</span>
                            </div>
                        </div>
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.manel')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font"
                                                                style="color: red;">120 %</span>
                            </div>
                        </div>
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.maxBack')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">200 %</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg-width left_div">
                        <a class="left_amount_color">{{$t('market.theRemainingShare')}}:</a>

                        <a class="left_amount_font">
                            400
                        </a>/500 ETH
                    </div>
                    <div class="lg-width robot_card_bottom">


                        <!-- 星星🌟 -->


                        <div class="star_bg float_left" :style="{background:'url('+star+')'}">
                            <a class="star star_1"></a>
                            <a class="star star_2"></a>
                            <a class="star star_3"></a>
                            <a class="star star_4"></a>
                            <a class="star star_5"></a>
                        </div>


                        <!-- 订阅 -->
                        <div class="float_right subscript_box">
                            <div>
                                <a @click="toMarkets(robotId1)" class="robot_detail">{{$t('market.details')}}</a>
                                <a href="#addBuy" v-if="ifLogin" @click="getBalance(roborInfoList1)"
                                   data-toggle="modal">
                                    <button class="card-btm1">{{$t('market.marketSubscribe')}}</button>
                                </a>
                                <a v-if="!ifLogin" @mouseenter="mouseover" @click="loginCheck" data-toggle="modal">
                                    <button class="card-btm1 subscript_btn">{{$t('market.marketSubscribe')}}</button>
                                </a>
                            </div>
                        </div>


                    </div>


                </div>
                <!-- Card  End-->


                <!-- Card -->
                <div class="lg-width chartBox">

                    <div class="lg-width rob-name"
                         style="width: 60%;margin-left: 5%;text-align: left;margin-top: 20px;min-height: 25px;">
                        <span v-show="$i18n.locale=='en-US'" class="chartBox_robot_name_font">Robot Name</span>
                        <span v-show="$i18n.locale=='zh-CN'" class="chartBox_robot_name_font">Robot local_name</span>
                    </div>

                    <div class="lg-width robot_owner">
                        <img :src="T2" style="width: 20px;border-radius: 10px;">
                        <span style="margin-left: 5px;" class="chartBox_robot_owner_font">Robot owner</span>
                    </div>
                    <div class="lg-width"
                         style="width: 90%;margin-left: 5%;margin-right: 5%;text-align: left;margin-top: 5px;position: relative;">
                        <div style="position: absolute;top: 5px;left: 5px;">
                            <span class="return_font">{{$t('net.Cumulative')}}</span>
                            <div class="chartBox_info_title_font robot_return">
                                <span><span><img
                                        style="margin:0 4px" :src="timeline1"/></span>{{$t('net.Return')}}</span>
                                <span style="color:#61a0a8;margin-left:6px;font-size: 12px;"><span><img
                                        style="margin:0 4px" :src="timeline3"/></span>{{$t('net.cumprod')}}</span>
                                <span style="color:#2f4554;margin-left:6px;font-size: 12px;"><span><img
                                        style="margin:0 4px" :src="timeline2"/></span>{{$t('net.pricechange')}}</span>
                            </div>
                        </div>
                        <div id="container" style="height: 300px;width: 100%;"></div>
                    </div>
                    <div class="lg-width robot_info_div">
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.type1')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">多头</span>
                            </div>
                        </div>
                        <div class="lg-width text_center quarter">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.annualized')}}</span>
                            </div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font"
                                                                style="color: red;">80 %</span>
                            </div>
                        </div>
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.manel')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font"
                                                                style="color: red;">120 %</span>
                            </div>
                        </div>
                        <div class="lg-width quarter text_center">
                            <div class="card-title chartBox_info_title_font"><span>{{$t('net.maxBack')}}</span></div>
                            <div style="margin-top: 5px;"><span class="card-data chartBox_info_value_font">200 %</span>
                            </div>
                        </div>
                    </div>
                    <div class="lg-width left_div">
                        <a class="left_amount_color">{{$t('market.theRemainingShare')}}:</a>

                        <a class="left_amount_font">
                            400
                        </a>/500 ETH
                    </div>
                    <div class="lg-width robot_card_bottom">


                        <!-- 星星🌟 -->


                        <div class="star_bg float_left" :style="{background:'url('+star+')'}">
                            <a class="star star_1"></a>
                            <a class="star star_2"></a>
                            <a class="star star_3"></a>
                            <a class="star star_4"></a>
                            <a class="star star_5"></a>
                        </div>


                        <!-- 订阅 -->
                        <div class="float_right subscript_box">
                            <div>
                                <a @click="toMarkets(robotId1)" class="robot_detail">{{$t('market.details')}}</a>
                                <a href="#addBuy" v-if="ifLogin" @click="getBalance(roborInfoList1)"
                                   data-toggle="modal">
                                    <button class="card-btm1">{{$t('market.marketSubscribe')}}</button>
                                </a>
                                <a v-if="!ifLogin" @mouseenter="mouseover" @click="loginCheck" data-toggle="modal">
                                    <button class="card-btm1 subscript_btn">{{$t('market.marketSubscribe')}}</button>
                                </a>
                            </div>
                        </div>


                    </div>


                </div>
                <!-- Card  End-->


            </div>

            <span class="midTitle select_robot_see_more"><a>{{$t('net.seeMore')}}<img :src="home_visit_market_icon"
                                                                                      class="see_more_img"></a></span>

        </div>

        <!-- 机器人选择 End -->

        <!-- 解决方案 -->
        <div class="lg-row width-limt solution_box">

            <div class="lg-row width-limt"
                 style="background-color: #fff;text-align: center;padding-top: 20px;">
                <p class="midTitle solution_title">{{ $t('net.solution_title') }}</p>
                <p class="midTitle solution_text">{{ $t('net.solution_text') }}</p>

                <div class="lg-row row_width_auto">
                    <div class="lg-width card_marign">

                        <img :src="home_solution_icon1">
                        <div style="margin-top: 25px;"><span
                                class="solution_item_font">{{$t('net.Design')}}</span></div>
                    </div>
                    <div class="lg-width card_marign">

                        <img :src="home_solution_icon2">
                        <div style="margin-top: 25px;"><span class="solution_item_font">{{$t('net.Spontaneous')}}</span>
                        </div>
                    </div>
                    <div class="lg-width card_marign">

                        <img :src="home_solution_icon3">
                        <div style="margin-top: 25px;"><span
                                class="solution_item_font">{{$t('net.Earn')}}</span></div>
                    </div>
                    <div class="lg-width card_marign">

                        <img :src="home_solution_icon4">
                        <div style="margin-top: 25px;"><span
                                class="solution_item_font">{{$t('net.stop')}}</span></div>
                    </div>
                </div>

                <div class="row lg-row row_width_auto">
                    <div class="lg-width card_marign">

                        <img :src="home_solution_icon5">
                        <div style="margin-top: 25px;"><span
                                class="solution_item_font">{{$t('net.Design')}}</span></div>
                    </div>
                    <div class="lg-width card_marign">

                        <img :src="home_solution_icon6">
                        <div style="margin-top: 25px;"><span class="solution_item_font">{{$t('net.Spontaneous')}}</span>
                        </div>
                    </div>
                    <div class="lg-width card_marign">

                        <img :src="home_solution_icon7">
                        <div style="margin-top: 25px;"><span
                                class="solution_item_font">{{$t('net.Earn')}}</span></div>
                    </div>
                    <div class="lg-width card_marign">

                        <img :src="home_solution_icon8">
                        <div style="margin-top: 25px;"><span
                                class="solution_item_font">{{$t('net.stop')}}</span></div>
                    </div>
                </div>

            </div>

        </div>
        <!-- 解决方案 End -->

        <!-- Explore NetCentric Ecosystem -->
        <div class="lg-row width-limt ecosystem_box"
        >
            <p class="midTitle ecosystem_title">{{$t('net.robotFactory')}}</p>

            <img :src="home_Ecosystem_pic" class="ecosystem_pic">

            <div class="ecosystem_text">
                NetCentric aims to improve the transparency and efficiency of wealth management by decentralizing and

                simplifying the investment and trading processes.


            </div>

            <div class="ecosystem_text">
                NetCentric lowers the bar on cost and time commitment for individual investors to experiment with
                hedge
                fund and mutual fund services in the crypto market.
            </div>

        </div>

        <!-- Explore NetCentric Ecosystem End-->


        <!-- invester -->

        <div class="lg-row" style="margin-top: 35px;background-color: #fff;text-align: center;padding-top: 20px;">
            <span class="midTitle invester_title">{{$t('net.agency')}}</span>
            <div class="row lg-row" style="width:1200px;margin: 25px auto;">
                <ul class="sponsor-ul">
                    <li><img :src="Inv1" style="background-color: #fff;"></li>
                    <li><img :src="Inv3" style="background-color: #fff;"></li>
                    <li><img :src="Inv4" style="background-color: #fff;"></li>
                    <li><img :src="Inv2" style="background-color: #fff;"></li>
                    <li><img :src="Inv5" style="background-color: #fff;"></li>
                </ul>
            </div>
        </div>


        <!-- invester -->

    </div>


</template>

<script>
    export default {
        name: "HomeRobotFactory",
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
            banner1en: {
                type: String,
                default: require("@/assets/img/banner1en.png")
            },
            banner1cn: {
                type: String,
                default: require("@/assets/img/banner1cn.png")
            },
            banner_2: {
                type: String,
                default: require("@/assets/img/banner2.jpg")
            },
            home_top_pic_1: {
                type: String,
                default: require("@/assets/img/home_top_pic_1.jpg")
            },
            home_top_pic_2: {
                type: String,
                default: require("@/assets/img/home_top_pic_1.jpg")
            },
            home_top_pic_3: {
                type: String,
                default: require("@/assets/img/home_top_pic_1.jpg")
            },
            T2: {
                type: String,
                default: require("@/assets/img/T2.jpeg")
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

            home_visit_market_icon: {
                type: String,
                default: require("@/assets/img/home_visit market_icon.png")
            },
        }
    }
</script>

<style scoped>
    .carousel_box {
        min-width: 1200px;
        margin-top: 53px;
    }

    .carousel_item_box {
        background: rgba(255, 255, 255, 0);
        width: 130px;
        left: 47.5%;
        border-radius: 25px;
        margin-left: 0px;
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
        font-size: 40px;
        color: #000000;
        letter-spacing: 0;
    }

    .chartBox {
        width: 368px;
        height: 608px;
        /*box-shadow: 3px 3px 10px 0 rgba(5, 92, 203, 0.2);*/

        transition: all .25s ease-in;
        -moz-transition: all .25s ease-in;
        -webkit-transition: all .25s ease-in;
        /*border-radius: 4px;*/

        background: #FFFFFF;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
        border-radius: 4px;

        margin-right: 30px;
    }

    .chartBox_robot_name_font {
        font-family: SFProDisplay-Bold;
        font-size: 24px;
        color: #000000;
        letter-spacing: 0;
    }

    .left_div {
        width: 100%;
        margin-top: 20px;
        text-align: left;
        padding-left: 28px;
        margin-bottom: 10px;
    }

    .robot_return {
        margin-top: 15px;
        margin-left: 5px;

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
        width: 90%;
        margin-left: 5%;
        margin-right: 5%;
        text-align: left;
        margin-top: 15px;
        margin-bottom: 10px;
    }

    .chartBox_robot_owner_font {

        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
    }

    .chartBox_info_title_font {

        font-size: 12px;
        color: #909499 !important;
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
        color: #000000;
        letter-spacing: 0;
    }

    .left_amount_color {

        font-size: 12px;

        letter-spacing: 0;
        color: #909499 !important;
    }

    .left_amount_font {
        font-family: SFProDisplay-Bold;
        font-size: 16px;
        color: #3158E4 !important;
        letter-spacing: 0;
    }

    .robot_detail {

        font-size: 14px;
        color: #3158E4 !important;
        letter-spacing: 0;
        margin-right: 15px;
    }

    .subscript_box a:hover {
        text-decoration-line: none;
        cursor: pointer;
    }

    .chartBox:hover {
        transform: translateY(-15px);
    }

    .select_robot_see_more {

    }

    .select_robot_see_more a{

        font-size: 14px;
        color: #3158E4 !important;
        letter-spacing: 0;
    }

    .see_more_img {
        margin-left: 5px;
        margin-bottom: 3px;
    }

    .select_robot_div {
        text-align: center;
        padding-top: 55px;
        background: #EBEEF3;
        padding-bottom: 60px;
    }

    .select_robot_box {
        width: 1200px;
        margin: 45px auto;
        margin-bottom: 50px;
    }

    .select_robot_see_more a:hover {
        text-decoration-line: none;
        cursor: pointer;
    }

    .row_width_auto {
        width: 1200px;
        margin: 25px auto;
    }

    .card_marign {
        width: 25%;
        margin-top: 35px;
    }

    .solution_title {
        font-family: PingFang-SC-Bold;
        font-size: 40px;
        color: #000000;
        letter-spacing: 0;
        line-height: 48px;
    }

    .solution_text {
        font-family: SFProDisplay-Regular;
        font-size: 24px;
        color: #909499;
        letter-spacing: 0;
    }

    .solution_box {
        text-align: center;
        padding-top: 55px;

        padding-top: 50px;
        padding-bottom: 40px;
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

    .robot_card_bottom {
        width: 100%;
        margin-top: 15px;
        margin-right: 5%;
        margin-bottom: 15px;
        padding-left: 28px;
        padding-right: 28px;
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
    }

    /* 灰色背景星星5个平铺 */
    .star_bg {
        width: 80px;
        height: 17px;
        position: relative;
        overflow: hidden;
        margin-top: 7px;
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
        background: #e8ebf1;
        margin-top: 35px;
        text-align: center;
        padding-top: 50px;

        padding-bottom: 40px;
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
        color: #000000;
        letter-spacing: 0;
    }

</style>
