<template>
	<section class="mail-list">
        <div class="lg-row">
            <div class="overview_box padding_left">
                <section class="">
                    <h2 class="overview_title" style="width: 70%;display: table;float: left;">
                        {{$t('netnew.RobotBackTest')}}
                    </h2>
                    <h2 style="width: 30%;display: table;color: #718EBD;font-size: 16px;float: left;">
                        {{$t('netnew.BackTestDepth')}}
                    </h2>
                    <div class="lg-width" style="width: 65%;margin-right: 5%;">
                    	<div  class="lg-width" style="width: 25%;text-align: center;margin-top: 15px;">
                    		<span style="color: #7FCEFF;font-size: 40px;">{{numList.robot_limit}}</span><br/><br/>
                    		<span v-show="$i18n.locale=='zh-CN'" style="color: #7FCEFF;font-size:16px ;">机器人回测次数限制</span>
                    		<span v-show="$i18n.locale=='en-US'"  style="color: #7FCEFF;font-size:16px ;">Robot Re-test Num</span>
                    		<span v-show="$i18n.locale=='ko'"  style="color: #7FCEFF;font-size:16px ;">로봇 백테스트의 횟수 제한</span>
                    	</div>
                    	<div  class="lg-width" style="width: 25%;text-align: center;margin-top: 15px;">
                    		<span style="color: #7FCEFF;font-size: 40px;">{{numList.user_limit}}</span><br/><br/>
                    		<span v-show="$i18n.locale=='zh-CN'" style="color: #7FCEFF;font-size:16px ;">账户回测次数限制</span>
                    		<span v-show="$i18n.locale=='en-US'"  style="color: #7FCEFF;font-size:16px ;">User Re-test Num</span>
                    		<span v-show="$i18n.locale=='ko'"  style="color: #7FCEFF;font-size:16px ;">계정 백테스트의 횟수 제한</span>
                    	</div>
                    	<div  class="lg-width" style="width: 25%;text-align: center;margin-top: 15px;">
                    		<span style="color: #7FCEFF;font-size: 40px;">{{numList.robot_used}}</span><br/><br/>
                    		<span v-show="$i18n.locale=='zh-CN'" style="color: #7FCEFF;font-size:16px ;">机器人回测已用次数</span>
                    		<span v-show="$i18n.locale=='en-US'"  style="color: #7FCEFF;font-size:16px ;">Robot Re-test Used Num</span>
                    		<span v-show="$i18n.locale=='ko'"  style="color: #7FCEFF;font-size:16px ;">로봇 백테스트를 사용한 횟수</span>
                    	</div>
                    	<div  class="lg-width" style="width: 25%;text-align: center;margin-top: 15px;">
                    		<span style="color: #7FCEFF;font-size: 40px;">{{numList.user_used}}</span><br/><br/>
                    		<span v-show="$i18n.locale=='zh-CN'" style="color: #7FCEFF;font-size:16px ;">账户回测已用次数</span>
                    		<span v-show="$i18n.locale=='en-US'"  style="color: #7FCEFF;font-size:16px ;">User Re-test Used Num</span>
                    		<span v-show="$i18n.locale=='ko'"  style="color: #7FCEFF;font-size:16px ;">계정 백테스트를 사용한 회수</span>
                    	</div>
                    </div>
	                <div class=" lg-width crbt-inputLine" style="width: 30%;" >
	               		<!--<label class="lg-width crbt-leftlabel" style="text-align: left;width: 160px;"></label>-->
	                    <div class="lg-width crbt-input" style="width: 100%;padding-left: 0 !important;">
	                         <select class="form-control" v-model="dataDepth"  >
	                         	<!--<option value="default">default</option>-->
	                            <option  value="2000">2000</option>
	                            <option  value="5000">5000</option>
	                            <option  value="10000">10000</option>
	                        </select>
	                    </div>
	                    <div class="lg-width" style="margin-left: 50px;margin-top: 26px;margin-bottom: 15px;">
							<span class="submit_robt_btn" @click="toTest()">{{$t('netnew.Submit')}}</span>
	                    	<!--<button type="button" class="btn crbt-btn"  @click="toTest()">{{$t('netnew.Submit')}}</button>-->
	                    </div>
	                </div>


	               	<div class="tbandtime" style="margin-top: 125px;">
						<div class="lg-width" style="width: 100%;text-align: left;margin-bottom: 0;">
							<div style="height: 520px;" class="ycsb3">
								<div id="container2" style="height:500px;width: 100%;"></div>
							</div>
						</div>

					</div>

                   	<div class="details_bodys" style="margin-top: 50px;">
						<span class="author_js">
								&nbsp;&nbsp;{{$t("robotdetails.Robotdetails")}}
							</span>
						<div class="ycsb2">
							<section style="margin-bottom: 0;">
								<div >
									<table class="table mdtable" style="text-align: center;">
										<thead>
											<tr class="mdbox-title">
												<th style="font-weight: 500 ;text-align: left!important;">{{$t("robotdetails.Average")}}</th>
												<th style="font-weight: 500 ;text-align: left!important;">{{$t("robotdetails.Sharperatio") }}</th>
												<th style="font-weight: 500 ;text-align: left!important;">{{$t("robotdetails.Accuracy") }}</th>
												<th style="font-weight: 500 ;text-align: left!important;">{{$t("robotdetails.Averagereturn") }}</th>
											</tr>
										</thead>
										<tbody>
											<tr class="mdbox-text" >
												<td >{{ robotBaseInfo.AverageHoldingPeriod|tofix}} H</td>
												<td>{{ robotBaseInfo.SharpeRatio|tofixd}}%</td>
												<td>{{ robotBaseInfo.WinRate|tofixd }}%</td>
												<td>{{ robotBaseInfo.AverageReturnPerTrade|tofixd}}%</td>
											</tr>
											<tr class="mdbox-title">
												<td>{{$t("robotdetails.Annualinterest") }}</td>
												<td>{{$t("robotdetails.Numberof") }}</td>
												<td>{{$t("robotdetails.Averageweeklytransactions")}}</td>
												<td>{{$t("robotdetails.Maximumhistoricalretracement") }}</td>
											</tr>
											<tr class="mdbox-text" >
												<td>{{ robotBaseInfo.AnnualizedReturn|tofixd }}%</td>
												<td>{{ robotBaseInfo.TradeCount}}</td>
												<td>{{ robotBaseInfo.TradeCountPerWeek|tofix }}</td>
												<td>{{ robotBaseInfo.MaxDrawdownRatio|tofixd }}%</td>
											</tr>
											<tr class="mdbox-title">
												<td>{{$t("robotdetails.Maximumweeklywithdrawal") }}</td>
												<td>{{$t("robotdetails.risk1")}}</td>
												<td>{{$t("robotdetails.risk5")}}</td>
												<td>{{$t("robotdetails.Volatility")}}</td>
											</tr>
											<tr class="mdbox-text" >
												<td>{{ robotBaseInfo.MaxDrawdownWeek|tofixd }}%</td>
												<td>{{ robotBaseInfo.Var1|tofixd }}%</td>
												<td>{{ robotBaseInfo.Var5|tofixd}}%</td>
												<td>{{ robotBaseInfo.Std|tofixd }}%</td>
											</tr>

										</tbody>
									</table>
								</div>
							</section>
						</div>

					</div>

                    <div style="margin-top: 50px;">
                        <table class="table table-bordered table-hover general-table">
                            <thead>
                            <tr>
                                <th>{{$t('netnew.TradeType')}}</th>
                                <th @click="toSort" style="cursor: pointer;">{{$t('netnew.Time')}} <i class="fa" :class="sort" aria-hidden="true"></i></th>
                                <th>{{$t('netnew.Price')}}</th>
                                <th>{{$t('net.pair')}}</th>
                                <th>{{$t('netnew.Amount')}}</th>

                            </tr>
                            </thead>
                            <tbody>

                            <tr class="tr_white" v-for="list in tradeList">

                                <td>{{list.Action}}</td>
                                <td>{{list.ActionTime}}</td>
                                <td>{{list.Price}}</td>
                                <td>{{list.Symbol}}</td>
                                <td>{{list.Amount|fix8}}</td>

                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        </div>
    </section>
</template>

<script>
	import {getRobotInfo, getUserInfo,getWarehouse,getBacktestList,getBacktestNum} from '../api/api';

    export default {
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

       },
        data() {
            return {
            	sort:"fa-caret-up",
               rbtInfoParm:{},
               backRbtId:"",
               dataDepth:2000,
               rbtDetailParm:{},
               profitList:[],
               proxData:[],
               proyData:[],
               tradeList:[],
               numList:{},
               robotBaseInfo:{
               	TradeCount:0
               }
            }
        },
        mounted() {
//          $('.mail-list').css("height", document.documentElement.clientHeight - 100 + "px");
           	this.getuseInfo();
        },
        methods: {
            getuseInfo() {
                getUserInfo(this.empty).then(data => {
                    if (data.success == 0) {
//					console.log(data);
                        this.rbtInfoParm.user_id = data.data.userId;
                        this.getParams();
                        this.getBacktestNum();
                    } else {
                        this.$toast.center(data.message);
//	                console.log(data)
                    }
                });
            },
            getBacktestNum(){
            	var params={};
            	params.user_id=this.rbtInfoParm.user_id;
				params.robot_id=this.backRbtId;
				getBacktestNum(params).then(data => {
                    if (data.code == 200) {
						this.numList=data.data;
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            getParams(){
            	if(this.$route.params.id){
            		this.backRbtId=this.$route.params.id
            		localStorage.setItem('backRbtId',this.backRbtId)
            	}else{
            		this.backRbtId=localStorage.getItem('backRbtId');
            	}
            },
            closeLoading() {
                this.$loading.close();
            },
            toSort(){
            	if(this.sort=="fa-caret-up"){
            		this.sort="fa-caret-down";
            		this.tradeList.reverse();
            	}else{
            		this.sort="fa-caret-up"
            		this.tradeList.reverse();
            	}

            },
			toTest(){
				var params={};
				this.$loading('loading...');
				params.user_id=this.rbtInfoParm.user_id;
				params.robot_id=this.backRbtId
				params.data_depth=this.dataDepth
				getBacktestList(params).then(data => {
					this.closeLoading();
                    if (data.code == 200) {
//						console.log(data);
						this.profitList=data.data.TestReturn;
						this.proxData=[];
						this.proyData=[];
						this.tradeList=data.data.TestOrder;
						this.robotBaseInfo=data.data.TestReport;

						for (var i = 0; i < this.profitList.length; i++) {
                            this.proxData.push(this.profitList[i].ActionTime);
                            this.proyData.push((this.profitList[i].CumprodReturn*100).toFixed(3));
                       }
                        this.drawLine2();
                        this.getBacktestNum();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                        this.getBacktestNum();
                    }
                });
			},
			drawLine2() {
                let myChart2 = this.$echarts.init(document.getElementById('container2'))
                myChart2.setOption({

                     tooltip: {
                        trigger: 'axis',
                        formatter: '{b}<br/>{a}:\n{c}%'

                    },
                     textStyle:{
		                color:'#fff'
		            },
                    color: ['#95D6FF', '#65cea7', '#e467db'],
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
                        data: this.proxData,
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

                        }

                    }],
                    series: [
                        {
                            name: 'cumulative return',
                            type: 'line',
                            data: this.proyData,
                            showSymbol:false,
                            itemStyle: {
	                            normal: {
	                                color: '#5bc0de',
	                                label: {
	                                    color: '#5bc0de',
	                                    show: false,
	                                    positiong: 'top',
	                                    formatter: '{c}%',

	                                },
	                                lineStyle: {
	                                    color: '#5bc0de'
	                                }
	                            }
	                        },
							areaStyle: {
								color: {
									type: 'linear',
									x: 0,
									y: 0,
									x2: 0,
									y2: 1,
									colorStops: [{
										offset: 0, color: 'rgba(113,142,189,0.8)' // 0% 处的颜色
									}, {
										offset: 1, color: 'rgba(113,142,189,0.1)' // 100% 处的颜色
									}],
								}
							}
                        },
                    ]
                });
            },

        }
    }
</script>

<style>

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
		font-size:18px;
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
		/*padding:12px 0px 12px 38px;*/
		text-align: left;
	}
	.table > thead > tr > th{
		border:none;
		/*padding:12px 0px 12px 38px;*/
	}
	table tr{
		border-top:1px solid #ffffff12;
		border-bottom:1px solid #ffffff12;
	}

	.mdbox-title th{
		padding: 12px 0px 12px 38px !important;
	}
	.mdbox-title td{
		padding: 12px 0px 12px 38px !important;
		text-align: left!important;
	}
	.mdbox-text td{
		padding: 12px 0px 12px 38px !important;
	}
.submit_robt_btn{
	display: inline-block;
	background: url("../assets/img/zcbtn@2x.png") no-repeat;
	background-size: 100% 100%;
	width:140px;
	height:45px;
	text-align: center;
	line-height: 45px;
	color:#fff;
	font-size:14px;
	margin-left:40px;
	cursor: pointer;
}
</style>
