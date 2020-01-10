<template>
    <div class="lg-width" style="width: 100%;min-height: 667px;background: #000;">
    	<div class="lg-width" style="width: 100%;text-align: center;margin-top: 80px;">
    		<img src="../assets/img/rbtd5@2x.png" style="width: 50%;">
    	</div>
    	<div class="lg-width" style="width: 100%;margin-top: 10px;">
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span v-show="$i18n.locale=='en-US'" class="m-rbdt-text">{{rbtDetailParm.RobotName}}</span>
    			<span v-show="$i18n.locale=='zh-CN'" class="m-rbdt-text">{{rbtDetailParm.RobotLocalName}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span class="m-rbdt-text">{{rbtDetailParm.SerialNo}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span class="m-rbdt-text">{{rbtDetailParm.TradeType}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span class="m-rbdt-title">{{$t('netnew.RobotName')}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span class="m-rbdt-title">{{$t('netnew.InstanceId')}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span class="m-rbdt-title">{{$t('netnew.TradeType')}}</span>
    		</div>

    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;margin-top: 15px;overflow: hidden;white-space: nowrap;">
    			<span class="m-rbdt-text">{{rbtDetailParm.ExchangeAccountName}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;margin-top: 15px;overflow: hidden;">
    			<span class="m-rbdt-text">{{rbtDetailParm.StandardCoin}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;margin-top: 15px;overflow: hidden;">
    			<span class="m-rbdt-text">{{rbtDetailParm.BuyTime|time}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span class="m-rbdt-title">{{$t('netnew.exchangeA')}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span class="m-rbdt-title">{{$t('netnew.StandardCoin')}}</span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;">
    			<span class="m-rbdt-title">{{$t('netnew.CreateTime')}}</span>
    		</div>

    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;margin-top: 15px;overflow: hidden;height: 30px;">
    			<span class="m-rbdt-text">{{rbtDetailParm.ExpireDate|time}}</span>
    		</div>
    		<div class="lg-width" style="width: 66.7%;text-align: center;padding: 5px 0;margin-top: 15px;overflow: hidden;height: 30px;">
    			<span class="m-rbdt-text"> </span>
    		</div>
    		<div class="lg-width" style="width: 33.3%;text-align: center;padding: 5px 0;overflow: hidden;height: 30px;">
    			<span class="m-rbdt-title">{{$t('netnew.ExpireDate')}}</span>
    		</div>
    		<div class="lg-width" style="width: 66.7%;text-align: center;padding: 5px 0;overflow: hidden;height: 30px;">
    			<span class="m-rbdt-title"> </span>
    		</div>
    	</div>


    	<div class="lg-width" style="width: 100%;margin-top: 45px;">
    		<div class="col-lg-4 left_four_box">
                <div class="left_item_box1">
                    <div class="lg-width" style="width: 60%;margin-left: 40%;">
                        <div class="t1">{{$t('netnew.OriginFund')}}</div>
                        <div class="t2">{{$t('netnew.Thecoinamount')}}</div>
                        <div class="t3"><label>{{rbtList.standard_coin}}</label> &nbsp;<i>{{rbtList.initial_fund|tofix4}}</i></div>
                    </div>
                </div>


                <div class="left_item_box2">
                    <div class="lg-width" style="width: 60%;margin-left: 40%;">
                        <div class="t1">{{$t('netnew.Currentfund')}}</div>
                        <div class="t2">{{$t('netnew.Showcurrentcoin')}}</div>
                        <div class="t4"><label>{{rbtList.standard_coin}}</label> &nbsp;<i>{{rbtList.total_fund|tofix4}}</i></div>
                    </div>
                </div>


                <div class="left_item_box3">
                    <div class="lg-width" style="width: 60%;margin-left: 40%;">
                        <div class="t1">{{$t('netnew.CumsumReturn')}}</div>
                        <div class="t2">{{$t('netnew.Thereturnfor')}}</div>
                        <div class="t3" v-show="rbtDetailParm.Status!=3"><label>{{rbtList.total_profit | floorT}}</label> &nbsp;<i>%</i></div>
                        <div class="t3" v-show="rbtDetailParm.Status==3"><label>0</label> &nbsp;<i>%</i></div>
                    </div>
                </div>


                <div class="left_item_box4">

                    <div class="lg-width" style="width: 60%;margin-left: 40%;">
                        <div class="t1">{{$t('netnew.Annualreturn')}}</div>
                        <div class="t2">{{$t('netnew.Theannualreturn')}}</div>
                        <div class="t4" v-show="rbtDetailParm.Status!=3"><label>{{rbtList.annual_profit | floorT}}</label> &nbsp;<i>%</i></div>
                        <div class="t4" v-show="rbtDetailParm.Status==3"><label>0</label> &nbsp;<i>%</i></div>
                    </div>
                </div>


            </div>
    	</div>

    	<div class="lg-width" style="width: 100%;margin-top: 45px;">
	    	<div id="container2" style="height: 400px;width: 100%;margin-top:10px;"></div>
	    </div>

	    <div class="lg-width" style="width:100%;overflow-x: scroll;margin-top: 15px;">
	    	<h2 class="overview_title clear_left">
                 <select v-model="orderTable"  style="background: none;color: #fff;border: none;">
                	<option value="1"  style="background-color: #000000;">{{$t('netnew.wtdlb')}}</option>
                	<option value="2"  style="background-color: #000000;">{{$t('netnew.jydmx')}}</option>

                </select>
                <span  v-show="orderTable==1"  style="font-size: 14px;float: right;margin-right: 25px;margin-top: 15px;">{{$t('netnew.orderNum')}}{{amount}}</span>
                <span  v-show="orderTable==2" style="font-size: 14px;float: right;margin-right: 25px;margin-top: 15px;">{{$t('netnew.orderNum')}}{{amount2}}</span>
            </h2>

            <div v-show="orderTable==1">
                <table class="table table-bordered table-hover general-table" style="min-width: 1400px;" >
                    <thead>
                    <tr>
                        <th>{{$t('netnew.TradeType')}}</th>
                        <th style="width: 8%;">{{$t('netnew.Time')}}</th>
                        <th style="width:8%;">{{$t('netnew.OrderCost')}}</th>
                        <th>{{$t('netnew.Amount')}}</th>
                        <th >{{$t('net.fee')}}</th>
                        <th>{{$t('netnew.orderStatus')}}</th>
                        <th style="width: 12%;">{{$t('netnew.ResultData')}}</th>

                    </tr>
                    </thead>
                    <tbody>

                    <tr class="tr_white" v-for="list in tradeList">

                        <td>{{list.OrderSide}}</td>
                        <td>{{list.FilledDate|timer}}</td>
                        <td>{{list.FilledPrice}}</td>
                        <td>{{list.FilledAmount}}</td>
                        <td>{{list.Fee}}</td>
                        <td>{{list.Status}}</td>
                        <td>{{list.ResultData}}</td>

                    </tr>
                    </tbody>
                </table>


                <div class="alert alert-warning fade in" v-show="tradeList.length==0" style="padding-top: 50px !important; padding-bottom: 50px !important;">
                    <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                    <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                    <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
                </div>
            </div>

            <div class="" v-show="orderTable==2">
                <table class="table table-bordered table-hover general-table" style="min-width: 1400px;">
                    <thead>
                    <tr>
                        <th>{{$t('netnew.TradeType')}}</th>
                        <th style="width: 8%;">{{$t('netnew.Time')}}</th>
                        <th style="width:8%;">{{$t('netnew.OrderCost')}}</th>
                        <th>{{$t('netnew.Amount')}}</th>
                        <th >{{$t('net.fee')}}</th>
                        <th>{{$t('netnew.orderStatus')}}</th>
                        <th style="width: 12%;">{{$t('netnew.ResultData')}}</th>

                    </tr>
                    </thead>
                    <tbody>

                    <tr class="tr_white" v-for="list in tradeList2">

                        <td>{{list.OrderSide}}</td>
                        <td>{{list.FilledDate|timer}}</td>
                        <td>{{list.FilledPrice}}</td>
                        <td>{{list.FilledAmount}}</td>
                        <td>{{list.Fee}}</td>
                        <td>{{list.Status}}</td>
                        <td>{{list.ResultData}}</td>

                    </tr>
                    </tbody>
                </table>


                <div class="alert alert-warning fade in" v-show="tradeList.length==0" style="padding-top: 50px !important; padding-bottom: 50px !important;">
                    <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                    <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                    <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
                </div>

            </div>
	    </div>


	    <div class="lg-width" style="width:100%;overflow-x: scroll;margin-top: 15px;">
	    	<h2 class="overview_title clear_left" style="margin-top: 50px;">
                {{$t('netnew.RobotSignal')}}

				<label style="font-size: 14px;color: #718EBD;float:right;margin-right: 25px;">{{$t('netnew.onlySignl')}}</label>
				<input class="boxs" style="margin-top: -2px;float:right;margin-right: 15px;" type="checkbox" v-model="checked" @click="changeCheck">
            </h2>

            <div class="">
                <table class="table table-bordered  general-table" >
                    <thead>
                    <tr>
                        <th style="width: 60%;text-align: left !important;">{{$t('netnew.Time')}}</th>
                        <th style="width: 40%;text-align: left !important;">{{$t('netnew.Signal')}}</th>

                    </tr>
                    </thead>
                    <tbody>

                    <tr class="tr_white" v-for="list in signalList">


                        <td style="width: 60%;text-align: left !important;">{{list.active_date}}</td>
                        <td style="width: 40%;text-align: left !important;">{{list.signal|signal}}</td>


                    </tr>
                    </tbody>
                </table>

            </div>
	    </div>

    </div>
</template>

<script>
    import {getProfit, getRobotDetail, getTradeLog,getSignal,getRunLog,getTradeLogD} from '../api/api';

    export default {
        data() {
            return {
                rbtDetailParm: {},
                rbtInfoParm: {},
                tradeParm: {},
                rbtList: [],
                tradeList: [],
                tradeList2: [],
                signalList:[],
                RunList:[],
                CurrentPage:1,
                perpage:1,
                CurrentPage2:1,
                perpage2:1,
                checked:false,
                amount:"",
                amount2:"",
                orderTable:1,
                type:'all',
            }
        },
        mounted() {
            this.rbtDetailParm = JSON.parse(localStorage.getItem('robotObj'));
            this.getProfit();
            this.getRbtDetail();
            this.getTradeLog(1);
            this.getTradeLogD(1);
            this.changeCheck();
            this.getRunLog();
        },
        methods: {
            getTradeLog(page) {
                this.tradeParm.InstanceId = this.rbtDetailParm.InstanceId;
                this.tradeParm.page = page;
                this.tradeParm.size = 10;
                getTradeLog(this.tradeParm).then(data => {
                    if (data.code == 200) {
                        this.tradeList = data.data.data;
						if(this.tradeList!=null){
							for(var i=0;i<this.tradeList.length;i++){
								this.tradeList[i].OrderSide=this.tradeList[i].OrderSide.substring(0,1).toUpperCase()+this.tradeList[i].OrderSide.substring(1);
							}
						}
						this.amount=data.data.count;
						this.CurrentPage=data.data.page;
						this.perpage=Math.ceil(data.data.count/10);
                    } else {
                        this.tradeList = [];
                    }
                });
            },
            getTradeLogD(page){
            	this.tradeParm.InstanceId = this.rbtDetailParm.InstanceId;
                this.tradeParm.page = page;
                this.tradeParm.size = 10;
                getTradeLogD(this.tradeParm).then(data => {
                    if (data.code == 200) {
                        this.tradeList2 = data.data.data;
						if(this.tradeList2!=null){
							for(var i=0;i<this.tradeList2.length;i++){
								this.tradeList2[i].OrderSide=this.tradeList2[i].OrderSide.substring(0,1).toUpperCase()+this.tradeList2[i].OrderSide.substring(1);
							}
						}
						this.amount2=data.data.count;
						this.CurrentPage2=data.data.page;
						this.perpage2=Math.ceil(data.data.count/10);
                    } else {
                        this.tradeList = [];
                    }
                });
            },
            getSignal(){
            	var params={}
            	params.instance_id=this.rbtDetailParm.InstanceId
            	params.type=this.type
            	   getSignal(params).then(data => {
            	   		this.signalList=[];
                    if (data.code == 200) {
                    	var forlength=0;
                    	if(data.data.length<8){
                    		forlength=data.data.length;
                    	}else{
                    		forlength=8
                    	}
                      for(var i=0;i<forlength;i++){
                      	this.signalList.push(data.data[i]);
                      }
                    } else {
                        this.tradeList = [];
                    }
                });
            },
            getRunLog(){
            	var params={}
            	params.instance_id=this.rbtDetailParm.InstanceId
            	   getRunLog(params).then(data => {
            	   		this.RunList=[];
                    if (data.code == 200) {
                    	this.RunList=data.data;
                    } else {

                    }
                });
            },
            getRbtDetail() {
                getRobotDetail(this.rbtDetailParm).then(data => {
                    if (data.code == 200) {
//					console.log(data);
                        this.rbtList = data.data;
                    } else {
                        // 	this.$toast.center(data.message);
                        //   console.log(data)
                    }
                });
            },
            changeCheck(){
            	this.checked=!this.checked
            	if(this.checked){
            		this.type=""
            	}else{
            		this.type="all"
            	}
            	this.getSignal();
            },
            getProfit() {
                getProfit(this.rbtDetailParm).then(data => {
                    if (data.code == 200) {
//					console.log(data);

                        this.profitList = data.data;
                        this.proxData = [];
                        this.proyData = [];
                        for (var i = 0; i < this.profitList.length; i++) {
                            this.proxData.push(this.$options.filters.chartsData2(this.profitList[i].ActiveTime));
                            this.proyData.push((this.profitList[i].ProfitPercent*100).toFixed(3));
                        }
                        this.proxData.reverse();
                        this.proyData.reverse();
                        this.drawLine2()
                    } else {
                        //	this.$toast.center(this.$t('msg.msg'+data.code));
                        // console.log(data)
                    }
                });
            },
            drawLine2() {
                let myChart2 = this.$echarts.init(document.getElementById('container2'))
                myChart2.setOption({
                    title: {
                        text: this.$t('net.totalprofitrate'),
                        color:"#fff"
                    },
                    tooltip: {
                        trigger: 'none',
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}

                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.proxData,
                        axisLine: {
			                lineStyle: {
			                    color: "#FFFEFE",
			                }
			            }

                    },
                    textStyle:{
		                color:'#FFFEFE'
		            },
                    grid: {
                        left: '0%',
                        right: '5%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
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


                    },
                    series: [{
                    	name: 'cumulative return',
                        data: this.proyData,
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
        },
        props: {
            robot_img: {
                type: String,
                default: require("@/assets/img/231946457712344710.jpg")
            },
            detail_icon1: {
                type: String,
                default: require("@/assets/img/myrobot/myrobots_detail_icon1@2x.png")
            },
            detail_icon2: {
                type: String,
                default: require("@/assets/img/myrobot/myrobots_detail_icon2@2x.png")
            },

        }
    }
</script>

<style scoped>
    .panel {
        background: none !important;
    }

    .instance_overview {
        padding-top: 20px !important;
    }

    .instance_overview .col-lg-4 {
        padding: 0;
    }

    .instance_overview .col-lg-2 {
        padding: 0;
    }

    .instance_overview i {
        font-style: normal;
        font-family: SFProText-Medium;
        font-size: 14px;
        color: #fff;
        letter-spacing: 0;
        font-weight: 700;
    }

    .instance_overview label {
        font-style: normal;
        ont-family: SFProText-Regular;
        font-size: 14px;
        color: #718EBD;
        letter-spacing: 0;
        font-weight: 300;
        width: 120px;
    }

    .robot_avatar {
        padding: 0;
    }

    .robot_avatar img {
        border-radius: 50%;
        width: 116px;
        height: 116px;
    }

    .des_item {
        margin-bottom: 10px;
    }

    .block_box {
        clear: left;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .block_box .col-lg-4 {
        padding: 0;
    }

    .block_box .col-lg-8 {
        padding: 0;
    }

    .left_item_box1 {
        width: 100%;
        height: 135px;

        margin-bottom: 16px;

        background: url(../assets/img/rbtd1@2x.png) no-repeat;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);

    }
    .left_item_box2 {
        width: 100%;
        height: 135px;

        margin-bottom: 16px;

        background: url(../assets/img/rbtd2@2x.png) no-repeat;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);

    }
    .left_item_box3 {
        width: 100%;
        height: 135px;

        margin-bottom: 16px;

        background: url(../assets/img/rbtd3@2x.png) no-repeat;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);

    }
    .left_item_box4 {
        width: 100%;
        height: 135px;

        margin-bottom: 16px;

        background: url(../assets/img/rbtd4@2x.png) no-repeat;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);

    }


    .left_item_box .col-lg-3 {
        padding: 0;
    }

    .left_item_box .col-lg-9 {
        padding: 0;
    }

    .icon_item img {
        width: 90%;
        margin-left: 3px;
        margin-top: 10px;
    }

    .t1 {
        font-size: 14px;
        color: #7FCEFF;
        letter-spacing: 0;
        font-weight: 700;
        margin-top: 25px;
    }

    .t2 {

        font-size: 14px;
        color: #7FCEFF52;
        letter-spacing: 0;
        margin-bottom: 15px;
    }
	.item_content{
		margin-left: 125px;
		padding-left:0 !important ;
	}
    .item_content label {
        font-family: SFProDisplay-Bold;
        font-size: 24px;
        letter-spacing: 0;
    }

    .item_content i {
        font-style: normal;
        font-family: SFProDisplay-Bold;
        font-size: 24px;

        letter-spacing: 0;
        font-weight: 700;
    }

    .t3 {
    	font-size:24px ;
        color: #7FCEFF;
    }

    .t4 {
    	font-size:24px ;
        color: #7FCEFF;
    }


    .clear_left {
        clear: left;
    }

    .td_status{

        font-size: 14px;
        color: #909499 !important;
        letter-spacing: 0;
    }
    .pagination{
    	float: none !important;
    }
    .m-rbdt-title{
    	color: #718EBD;
    	font-size: 14px;
    }
    .m-rbdt-text{
    	color: #fff;
    	font-size: 16px;
    }


</style>
