<template>
	<div class="lg-width" style="min-height: 667px;background: #000;width: 100%;">
		<div class="lg-width" style="width: 100%;margin-top: 80px;border:1px solid rgba(255,255,255,0.1);">
			<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				{{$t('netnew.MyRobotSide3')}}
			</span>
		</div>
		<div class="lg-width" style="width: 100%;padding: 5%;">
			<div class="quarter_item1">
				<div class="lg-width" style="width: 100%;margin-top: 15px;padding-left: 40%;text-align: center;">
					<span class="m_rbt_num">{{overList.run_robot}}</span>
				</div>
				<div class="lg-width" style="width: 100%;margin-top: 8px;padding-left: 40%;text-align: center;">
					<span class="m_rbt_text">{{$t('netnew.rbtrunning')}} </span>
				</div>
			</div>
			<div class="quarter_item2">
				<div class="lg-width" style="width: 100%;margin-top: 15px;padding-left: 40%;text-align: center;">
					<span class="m_rbt_num">{{overList.stop_robot}}</span>
				</div>
				<div class="lg-width" style="width: 100%;margin-top: 8px;padding-left: 40%;text-align: center;">
					<span class="m_rbt_text">{{$t('netnew.rbtstop')}} </span>
				</div>
			</div>
			<div class="quarter_item3">
				<div class="lg-width" style="width: 100%;margin-top: 15px;padding-left: 40%;text-align: center;">
					<span class="m_rbt_num">{{overList.error_robot}}</span>
				</div>
				<div class="lg-width" style="width: 100%;margin-top: 8px;padding-left: 40%;text-align: center;">
					<span class="m_rbt_text">{{$t('netnew.errorRunning')}}</span>
				</div>
			</div>
			<div class="quarter_item4">
				<div class="lg-width" style="width: 100%;margin-top: 15px;padding-left: 40%;text-align: center;">
					<span class="m_rbt_num">{{overList.expire_robot}}</span>
				</div>
				<div class="lg-width" style="width: 100%;margin-top: 8px;padding-left: 40%;text-align: center;">
					<span class="m_rbt_text">{{$t('netnew.rbtOverdue')}} </span>
				</div>
			</div>
		</div>
		<div class="lg-width overview_chartbox" style="width: 100%;margin-top: 25px;">
			<div class="lg-width" style="width: 100%;border:1px solid rgba(255,255,255,0.1);">
				<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
					{{$t('netnew.rbtChart')}}
				</span>
			</div>
			<div class="lg-width" style="width: 100%;">
				<div  id="container2" style="height: 400px;width: 100%;"></div>
			</div>
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 25px;border:1px solid rgba(255,255,255,0.1);">
			<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				{{$t('netnew.exchangeMoney')}}
			</span>
		</div>
		<div class="lg-width" style="width: 100%;overflow-x: scroll;">			
			<table class="table table-bordered general-table" style="min-width: 960px;margin-top: 0px;" >
                <thead>
	                <tr >
	                    <th style="line-height: 50px;" colspan="2" rowspan="2">API {{$t('netnew.exchangeAccount')}}</th>
	                    <th style="line-height: 50px;" rowspan="2">USDT</th>
	                    <th style="line-height: 50px;" rowspan="2">ETH</th>
	                    <th style="line-height: 50px;" rowspan="2">BTC</th>
	                    <th style="line-height: 50px;" rowspan="2">EOS</th>
	                    <th style="line-height: 50px;" rowspan="2">XRP</th>
	                </tr>
                </thead>
                <tbody>
                	<template v-for="item in abList">
	                    <tr class="tr_white" >
	                    	<td rowspan="2">{{item.account_name}} </td>
	                    	<td>{{$t('netnew.changerequ')}}</td>
	                        <td>{{item.account_USDT|tofix4}}</td> 
	                        <td>{{item.account_ETH|tofix4}}</td>
	                        <td>{{item.account_BTC|tofix4}}</td>
	                        <td>{{item.account_EOS|tofix4}}</td>
	                        <td>{{item.account_XRP|tofix4}}</td>
	                    </tr>
	                    <tr class="tr_white" >
	                    	<td>{{$t('netnew.rbtrequ')}}</td>
	                        <td>{{item.used_USDT|tofix4}}</td> 
	                        <td>{{item.used_ETH|tofix4}}</td>
	                        <td>{{item.used_BTC|tofix4}}</td>
	                    	<td>{{item.used_EOS|tofix4}}</td>
	                        <td>{{item.used_XRP|tofix4}}</td>
	                    </tr>
					</template>
                </tbody>
            </table>
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 25px;border:1px solid rgba(255,255,255,0.1);">
			<span v-show="$i18n.locale=='zh-CN'" style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				我的机器人
			</span>
			<span v-show="$i18n.locale=='en-US'" style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				My Robot
			</span>
		</div>
		<div class="lg-width" style="width: 100%;overflow-x: scroll;">			
			<table class="table table-bordered general-table" style="min-width: 960px;margin-top: 0px;">
                <thead>
                <tr>
                    <th>{{$t('netnew.InstanceId')}}</th>
                    <th>{{$t('netnew.RobotName')}}</th>
                    <th>{{$t('netnew.TradeType')}}</th>
                    <th>{{$t('netnew.exchangeA')}}</th>
                    <th>{{$t('netnew.AccountAmount')}}</th>
                    <th>{{$t('netnew.StandardCoin')}}</th>                              
                    <th>{{$t('netnew.CumsumReturn')}}</th>
                    <th>{{$t('netnew.RunningDays')}}</th>
                    <th>{{$t('netnew.NumberofOrders')}}</th>
                    <th>{{$t('netnew.Status')}}</th>
                    <th style="width: 9%;">{{$t('netnew.Actions')}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(list,index) in robotList">
                    <td>{{list.SerialNo}}</td>
                    <td v-show="$i18n.locale=='en-US'">{{list.RobotName}}</td>
                    <td v-show="$i18n.locale=='zh-CN'">{{list.RobotLocalName}}</td>
                    <td>{{list.TradeType}}</td>
                    <td>{{list.ExchangeAccountName}}</td>                               
                    <td>{{list.Amount|tofix4}}</td>
                    <td>{{list.StandardCoin}}</td>
                    <td v-show="list.Status!=3">{{list.CumprodReturn|fix2}}%</td>
                    <td v-show="list.Status==3">-</td>
                    <td>{{list.RunningDays}}</td>
                    <td>{{list.OrderCount}}</td>
                    <td>
                        <label class="external-event label ui-draggable"
                               v-bind:class="{'label-success':list.Status==1,'label-primary':list.Status==2,'label-default':list.Status==3,'label-warning':list.Status==4,'label-danger':list.Status==99}"
                               style="padding-top:8px ;">
                            {{list.Status|robotStatus}}
                        </label>
                    </td>
                    <td>
                    	<div class="action_item" @click="instancePause(list.InstanceId)" v-show="list.Status==1">{{$t('net.pause')}}</div>
                    	<div class="action_item" @click="instanceRun(list.InstanceId)" v-show="list.Status==2||list.Status==99">{{$t('net.run')}}</div>
                    	<!--<div class="action_item" @click="freshInstance(list.InstanceId)" v-show="list.Status==4||list.Status==1">{{$t('net.refresh')}}</div>-->
                    	<div class="action_item" @click="stopInstance(list.InstanceId)" v-show="list.Status!=3">{{$t('net.stops')}}</div>
                    	<div class="action_item" @click="initInstance(list.InstanceId)" v-show="list.Status==3&&list.ReStartFlag==false">{{$t('netnew.restart')}}</div>
                        <div class="action_item" @click="goDetail(list)">{{$t('net.detail')}}</div>
                        <div class="action_item" v-show="list.ReStartFlag==false" @click="toRenew(list)">{{$t('netnew.xufei')}}</div>
                        <div class="action_item" @click="addlimit(list)"  v-show="list.Status==1||list.Status==2">{{$t('netnew.zengchi')}}</div>
                        <div class="action_item" @click="deleteInstance(list.InstanceId)" v-show="list.Status==3">{{$t('netnew.Delete')}}</div>
                        <div class="action_item" @click="changeItSubscribe(list.InstanceId)" v-show="list.AutoRenew">{{$t('netnew.Unsubscribe')}}</div>
                        <div class="action_item" @click="changeItSubscribe(list.InstanceId)" v-show="!list.AutoRenew">{{$t('netnew.Resubscribe')}}</div>
                    </td>
                </tr>

                </tbody>
            </table>
            <div class="alert alert-warning fade in" v-show="robotList.length==0">
                <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
            </div>
		</div>
	</div>

</template>

<script>
	import {getUserInfo,getOverviewInfo,getRobotInfo,instancePause,instanceRun,stopInstance,initInstance,deleteInstance,changeItSubscribe} from '../api/api';
	export default {		
	 	name: "Robot",
		
		data() {
			return {
				userList:{},
				user_id:'',
				robotLists: [],
				userType:1,
				overList:{},
				chartList:[],
				ydata:[],
				xdata:[],
				abList:[
					{
					account_name:"",
	                account_USDT:0,
	                account_ETH:0,
	                account_BTC:0,
	                used_USDT:0,
	                used_ETH:0,
	                used_BTC:0
					}
				],
				rbtInfoParm:{},
				robotList:[],
				sideMenu:1,
				chart1data:[],
				chart2data:[],
				chart2legendData:[],
				URL1:'./static/images/coin/',
				URL2:'.png',
				getFormatter:'{b}',
				checked:true,
			}
		},
		mounted() {
			this.getUinfo();
		},
		methods: {
			getUinfo() {
				getUserInfo(this.empty).then(data => {
					if(data.code == 200) {
						this.userList=data.data;
						this.getOverviewInfo();
						this.getrbtInfo();
					} else {
						this.$toast.center(data.message);
					}
				});
			},
			goDetail(val) {
                localStorage.setItem('robotObj', JSON.stringify(val))
                this.$router.push('/m_RobotDetail')
            },
		    instancePause(val){
            	var params={};
            	params.instance_id=val;
            	instancePause(params).then(data => {
                    if (data.code == 200) {
                        console.log(data);
                        this.getrbtInfo();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
//	                console.log(data)
                    }
                });
            },
            toRenew(list){
            	this.$router.push({
					name: "m_rbtOperation",
					params: {
						name: "m_rbtOperation",
						flag:1,
						iteam: list,
					}
				})
            },
            addlimit(list){
            	this.$router.push({
					name: "m_rbtOperation",
					params: {
						name: "m_rbtOperation",
						flag:2,
						iteam: list,
					}
				})
            },
            stopInstance(val){
               var params={};
            	params.instance_id=val;
                    
            swal({            	
			  title: this.$t('netnew.ays2')+"?",
			  text: this.$t('netnew.ays3'),			  
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
			  	
                stopInstance(params).then(data => {
                    if (data.code == 200) {
                        this.getrbtInfo(0);
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
			  } 
			})


            },
            
            deleteInstance(val){
            	var params={};
            	params.instance_id=val;
	                    
	            swal({            	
				  title: this.$t('netnew.ays')+"?",
				  text: this.$t('netnew.DeleteYourRobot'),			  
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
				  	
	                deleteInstance(params).then(data => {
	                    if (data.code == 200) {
	                    	this.$toast.center(this.$t('netnew.Robothasbeendeleted'));
	                        this.getrbtInfo(0);
	                    } else {
	                        this.$toast.center(this.$t('msg.msg'+data.code));
	                    }
	                });
				  } 
				})
            },
            instanceRun(val){
            	var params={};
            	params.instance_id=val;
            	instanceRun(params).then(data => {
                    if (data.code == 200) {
//                      console.log(data);
                        this.getrbtInfo(0);
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            initInstance(val){
            	var params={};
            	params.instance_id=val;
            	initInstance(params).then(data => {
                    if (data.code == 200) {
                        console.log(data);
                        this.getrbtInfo(0);
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            changeItSubscribe(val){
				var params={}
				params.id=val
				changeItSubscribe(params).then(data => {
					if(data.code == 200) {
//						console.log(data);
						this.getrbtInfo(0);
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
			getOverviewInfo(){
				var params ={};
				params.id=this.userList.user_id;
				getOverviewInfo(params).then(data => {
	              if (data.code == 200) {	              	
					this.overList=data.data
					if(data.data.account_balance!=null){
						this.abList=data.data.account_balance;
					}
					if(data.data.robot_list!=null){
						this.robotLists=data.data.robot_list;
					}
					
					if(this.overList.robot_return_report==null){
						
						for(var i=0;i<100;i++){
								this.ydata.push(this.$options.filters.chartsData(new Date()-1000*3600*i));
								
							}
						this.ydata.reverse()
					}else{
							for(var i=0;i<this.overList.robot_return_report.length;i++){
								var Xdata=[];
								this.getFormatter=this.getFormatter+'<br/>'+'{a'+i+'}:\n{c'+i+'}%';
								if(this.overList.robot_return_report[i].data){
									for(var j=0;j<this.overList.robot_return_report[i].data.length;j++){
										Xdata.push((this.overList.robot_return_report[i].data[j].profit_percent*100).toFixed(3));							
									}
									Xdata.reverse();
								}
								
								var chartObj ={
									data:Xdata,
									name:this.overList.robot_return_report[i].robot_name,
									type:'line',
									showSymbol:false,
									itemStyle: {
			                            normal: {
			                                label: {
			                                    show: true,
			                                    positiong: 'top',
			                                    formatter: '{c}%',
			
			                                },
			                            }
			                        }
								};
								this.chart2legendData.push(this.overList.robot_return_report[i].robot_name);
								this.chart2data.push(chartObj);
						}
						if(this.overList.robot_return_report.length>0){
							if(this.overList.robot_return_report[0].data){
								for(var i=0;i<this.overList.robot_return_report[0].data.length;i++){
									this.ydata.push(this.$options.filters.chartsData2(this.overList.robot_return_report[0].data[i].active_time));
									
								}
								this.ydata.reverse()
							}
							
						}
					}
					
					
					this.drawLine2();
	              } else {
	              	this.$toast.center(data.message);
	              }
	            });
			},
			getrbtInfo() {
                this.rbtInfoParm.user_id=this.userList.user_id;                
                getRobotInfo(this.rbtInfoParm).then(data => {
                    if (data.code == 200) {
//                      console.log(data);
						if(data.data==null){							
							this.robotList=[];											
						}else{							
							this.robotList=[];
							for(var i=0;i<data.data.length;i++){
								if(data.data[i].OwnerType!='user'){
									this.robotList.push(data.data[i]);
								}									
							}
						}
							
                        
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
			
			drawLine2() {
				let myChart = this.$echarts.init(document.getElementById('container2'))	
				
				myChart.setOption({
					color: ['#fb8575','#7ea8e1','#65cea7','#ffa705','#3bcddd'],
					tooltip: {	
						trigger: 'none',
						formatter: this.getFormatter,
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#666'
							}
						}
					},
					textStyle:{
		                color:'#FFFEFE'
		            },
					legend: {
						data:this.chart2legendData,
						textStyle:{
							color:'#fff',
						}
					},
					grid: {
						left: '3%',
						right: '3%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: this.ydata,
						axisLine: {
			                lineStyle: {
			                    color: "#FFFEFE",
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
                            formatter: '{value}%',
                            lineStyle: {
			                    color: "#FFFEFE",
			                }

                       },
						
					}],
					series: this.chart2data
				},true);
			}


		}
	}
</script>

<style scoped>
	.quarter_item1 {
		width: 100%;
		padding: 24px 11px;
		background: url(../assets/img/overview1@2x.png) no-repeat;
		background-size:cover ;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
		border-radius: 4px;
		margin: 0;
		margin-bottom: 15px;
		height: 112px;
	}
	.quarter_item2 {
		width: 100%;
		padding: 24px 11px;
		background: url(../assets/img/overview2@2x.png) no-repeat;
		background-size:cover ;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
		border-radius: 4px;
		margin: 0;
		margin-bottom: 15px;
		height: 112px;
	}
	.quarter_item3 {
		width: 100%;
		padding: 24px 11px;
		background: url(../assets/img/overview3@2x.png) no-repeat;
		background-size:cover ;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
		border-radius: 4px;
		margin: 0;
		margin-bottom: 15px;
		height: 112px;
	}
	.quarter_item4 {
		width: 100%;
		padding: 24px 11px;
		background: url(../assets/img/overview4@2x.png) no-repeat;
		background-size:cover ;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
		border-radius: 4px;
		margin: 0;
		margin-bottom: 15px;
		height: 112px;
	}
	.m_rbt_text{
		font-size: 18px;
		color: #7FCEFF;
	}
	.m_rbt_num{
		font-size: 36px;
		color: #7FCEFF;
	}
	





</style>