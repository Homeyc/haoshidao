<template>
	<div class="RobotDetails_body" >
		<div class="body-mains" style="margin-top: 170px;padding-bottom: 70px;">
			<div class="body-left col-lg-12 col-xs-12 col-sm-12" style="width: 100%;height: auto; overflow: hidden;padding: 0;">
				<div style="position: relative;">
					<div class="clearfix robot-compare-tit">&nbsp;&nbsp;
						<span style="color:#fff;font-size:25px;float:left;line-height: 30px;">{{$t("netnew.jqrbj")}}</span>
						<span style="display: inline-block;float: right;color:#333;font-size:14px;position:relative;line-height:20px;">
							<span style="display:inline-block;width:100%;color:#718EBD;font-size:14px;padding-top:10px;cursor: pointer;text-align: right;" @mouseover="popShow" @mouseleave="popShow">{{$t('netnew.howUse')}}</span>
							 <div class="popover-wrap" :class="{'pop_active':pop == true}">
								<p>{{$t('netnew.step1')}}</p>
								<div>{{$t('netnew.step1Cont')}}</div>
								<p>{{$t('netnew.step2')}}</p>
								<div>{{$t('netnew.step2Cont')}}</div>
								<p>{{$t('netnew.step3')}}</p>
								<div>{{$t('netnew.step3Cont')}}</div>
							 </div>
						</span>
					</div>
					<ul class="clearfix compare-wrap">
						<li>
							<div>
								<p>{{$t("netnew.robot")}}1</p>
								<select class="form-controls" v-model="frequency1"  style="margin-bottom: 30px;cursor: pointer" @change="clearRobtoList">
									<option  v-for="item in frequencyOption" :key="item.value" :value="item.value">{{item.label}}</option>
								</select>
								<self-cascader style='margin-top:30px;' :caseLoading="caseLoading" :levelList2="levelSecondData" :levelList1="levelOneData" :ifClearPath="ifClearPath" @getSecondList="getLevelSecondData($event,'1')"  @getList0="getLevelOneData" @clearList="clearListAll" @getValKey="getvalKeyPath1"></self-cascader>
							</div>
						</li>
						<li>
							<div>
								<p>{{$t("netnew.robot")}}2</p>
								<select class="form-controls" v-model="frequency2" style="margin-bottom: 30px;cursor: pointer" @change="clearRobtoList">
									<option  v-for="item in frequencyOption" :key="item.value" :value="item.value">{{item.label}}</option>
								</select>
								<self-cascader style='margin-top:30px;' :caseLoading="caseLoading" :levelList2="levelSecondData" :levelList1="levelOneData" @getSecondList="getLevelSecondData($event,'2')"  @getList0="getLevelOneData" @clearList="clearListAll" @getValKey="getvalKeyPath2"></self-cascader>
							</div>
						</li>
						<li>
							<div>
								<p>{{$t("netnew.robot")}}3</p>
								<select class="form-controls" v-model="frequency3"  style="margin-bottom: 30px;cursor: pointer" @change="clearRobtoList">
									<option  v-for="item in frequencyOption" :key="item.value" :value="item.value">{{item.label}}</option>
								</select>
								<self-cascader style='margin-top:30px;' :caseLoading="caseLoading" :levelList2="levelSecondData" :levelList1="levelOneData" @getSecondList="getLevelSecondData($event,'3')"  @getList0="getLevelOneData" @clearList="clearListAll" @getValKey="getvalKeyPath3"></self-cascader>
							</div>
						</li>
						<li>
							<span class="compare_btn" style="margin-top:66px;" @click="startCompare">{{$t('netnew.robotCompare')}}</span>
						</li>
					</ul>
					<!--<div>
						<div class=" lg-width crbt-inputLine"  >
                            <label class="lg-width crbt-leftlabel">{{$t("netnew.OperationFrequency")}}</label>
                            <div class="lg-width crbt-input">
                                <select class="form-control" v-model="frequency" @change="getRbtIdList">
                                	<option value="1d">1 Day</option>
                                    <option value="1h">1 Hour</option>
                                    <option value="30m">30 Min</option>
                                    <option value="15m">15 Min</option>
                                </select>
                            </div>
                        </div>
						<div class=" lg-width crbt-inputLine"  >
                            <label class="lg-width crbt-leftlabel">{{$t("netnew.robot")}}1</label>
                            <div class="lg-width crbt-input">
                                <select class="form-control"  v-model="robotId3" @change="checkChoice">
                                    <option value="">{{$t("netnew.zxjqr")}}</option>
                                    <option v-for="list in factoryList" :value="list"> {{list.robot_name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class=" lg-width crbt-inputLine"   >
                            <label class="lg-width crbt-leftlabel">{{$t("netnew.robot")}}2</label>
                            <div class="lg-width crbt-input">
                                <select class="form-control"  v-model="robotId2" :disabled="!robotId1" @change="checkChoice" >
                                    <option value="">{{$t("netnew.zxjqr")}}</option>
                                    <option v-for="list in factoryList" :value="list"> {{list.robot_name}}</option>
                                </select>
                            </div>
                        </div>
                        <div class=" lg-width crbt-inputLine"    >
                            <label class="lg-width crbt-leftlabel">{{$t("netnew.robot")}}3</label>
                            <div class="lg-width crbt-input">
                                <select class="form-control" v-model="robotId3" :disabled="!robotId1||!robotId2"  >
                                    <option value="">{{$t("netnew.zxjqr")}}</option>
                                    <option v-for="list in factoryList" :value="list"> {{list.robot_name}}</option>
                                </select>
                            </div>
                        </div>
					</div>
					<div class="lg-width" style="width:200px;margin-top: 10px;margin-bottom: 0px;position: absolute;right: 0;bottom: 0;">
						<img class="light-btn" @click="startCompare" style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						<button v-show="$i18n.locale=='zh-CN'" id="btn" class="btn lg-lgbt" style="width: 100%;" type="button"  :disabled="!robotId1&&!robotId2&&!robotId3">开始比较</button>
						<button v-show="$i18n.locale=='en-US'"  id="btn" class="btn lg-lgbt" style="width: 100%;" type="button"  :disabled="!robotId1&&!robotId2&&!robotId3">Start</button>
						<button v-show="$i18n.locale=='ko'"  id="btn" class="btn lg-lgbt" style="width: 100%;" type="button"  :disabled="!robotId1&&!robotId2&&!robotId3">비교를 시작하다</button>
					</div>-->
				</div>

				<!--画线-->
				<div class="" style="margin-top:50px;margin-bottom: 40px;">
					<div class="lg-width" style="width: 100%;text-align: left;margin-bottom: 0;">
						<div style="height: 350px;" class="ycsb3">
							<div id="container" style="height:310px;width: 100%;"></div>
						</div>
					</div>
				</div>
				<!--机器人参数对比-->
				<div class="" style="margin-bottom: 40px;">
					<div class="compare_tit">{{$t('netnew.rbtbase')}}</div>
					<div class="ycsb2">
						<section style="margin-bottom: 0;">
							<div>
								<table class="table" style="text-align: center;font-size:14px;color:#718EBD;">
									<thead>
									<tr class="" style="border-top:none;">
										<th style="font-weight: 500 ;width: 130px;"></th>
										<th style="font-weight: 500 ;width: 20%;padding-right: 7%;">{{$t("netnew.robot")}}1</th>
										<th style="font-weight: 500 ;width: 27%;">{{$t("netnew.robot")}}2</th>
										<th style="font-weight: 500 ;width: 27%;">{{$t("netnew.robot")}}3</th>
										<th style="font-weight: 500 ;"></th>
									</tr>
									</thead>
									<tbody>
									<tr  class="">
										<td style="font-weight: 500 ;">{{$t("netnew.RobotName")}}</td>
										<td style="font-weight: 500 ;padding-right: 7%;">{{robotBase1.RobotName}}</td>
										<td style="font-weight: 500 ;">{{robotBase2.RobotName}}</td>
										<td style="font-weight: 500 ;">{{robotBase3.RobotName}}</td>
										<td style="font-weight: 500 ;"></td>
									</tr>
									<tr  class="">
										<td style="font-weight: 500 ;">{{$t('netnew.StandardCoin')}}</td>
										<td style="font-weight: 500 ;padding-right: 7%;">{{robotBase1.BaseCurrency}}</td>
										<td style="font-weight: 500 ;">{{robotBase2.BaseCurrency}}</td>
										<td style="font-weight: 500 ;">{{robotBase3.BaseCurrency}}</td>
										<td style="font-weight: 500 ;"></td>
									</tr>
									<tr  class="">
										<td style="font-weight: 500 ;">{{$t("market.TransactionType") }}</td>
										<td style="font-weight: 500 ;padding-right: 7%;">{{robotBase1.TradeType | tradeType}}&nbsp;</td>
										<td style="font-weight: 500 ;">{{robotBase2.TradeType | tradeType}}&nbsp;</td>
										<td style="font-weight: 500 ;">{{robotBase3.TradeType | tradeType}}&nbsp;</td>
										<td style="font-weight: 500 ;"></td>
									</tr>
									</tbody>
								</table>
							</div>
						</section>
					</div>
				</div>

				<!--机器人回测数据对比-->
				<div class="">
					<div class="compare_tit2 clearfix">
						<span style="display: inline-block;float:left;color:#fff;font-size:20px;">{{$t("robotdetails.Robotdetails")}}</span>
						<span style="float:right;" @click="more = true" v-if="!more">{{$t('netnew.moreParams')}}</span>
					</div>
					<div class="ycsb2">
						<section style="margin-bottom: 0;">
							<div>
								<table class="table" style="text-align: center;font-size:14px;color:#718EBD;">
									<thead>
									<tr class="" style="border-top:none;">
										<th style="font-weight: 500 ;width: 130px;"></th>
										<th style="font-weight: 500 ;width: 20%;padding-right: 7%;">{{$t("netnew.robot")}}1</th>
										<th style="font-weight: 500 ;width: 27%;">{{$t("netnew.robot")}}2</th>
										<th style="font-weight: 500 ;width: 27%;">{{$t("netnew.robot")}}3</th>
										<th style="font-weight: 500 ;"></th>
									</tr>
									</thead>
									<tbody>
									<tr  class="">
										<td>{{$t("robotdetails.Annualinterest") }}</td>
										<td style="padding-right: 7%;">{{base1.AnnualizedReturn|tofixed}}&nbsp;</td>
										<td>{{base2.AnnualizedReturn|tofixed}}&nbsp;</td>
										<td>{{base3.AnnualizedReturn|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  class="">
										<td>{{$t("robotdetails.Averagereturn") }}</td>
										<td style="padding-right: 7%;">{{base1.AverageReturnPerTrade|tofixed}}&nbsp;</td>
										<td>{{base2.AverageReturnPerTrade|tofixed}}&nbsp;</td>
										<td>{{base3.AverageReturnPerTrade|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  class="">
										<td>{{$t("robotdetails.Averageweeklytransactions")}}</td>
										<td style="padding-right: 7%;">{{base1.TradeCountPerWeek|tofix}}&nbsp;</td>
										<td>{{base2.TradeCountPerWeek|tofix}}&nbsp;</td>
										<td>{{base3.TradeCountPerWeek|tofix}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  class="">
										<td>{{$t("robotdetails.Average")}}</td>
										<td style="padding-right: 7%;">{{base1.AverageHoldingPeriod|tofix}}&nbsp;H</td>
										<td>{{base2.AverageHoldingPeriod|tofix}}&nbsp;H</td>
										<td>{{base3.AverageHoldingPeriod|tofix}}&nbsp;H</td>
										<td></td>
									</tr>
									<tr  class="">
										<td>{{$t("robotdetails.Accuracy")}}</td>
										<td style="padding-right: 7%;">{{base1.WinRate|tofixed}}&nbsp;</td>
										<td>{{base2.WinRate|tofixed}}&nbsp;</td>
										<td>{{base3.WinRate|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  v-if="more">
										<td>{{$t("robotdetails.Numberof") }}</td>
										<td style="padding-right: 7%;">{{base1.TradeCount}}&nbsp;</td>
										<td>{{base2.TradeCount}}&nbsp;</td>
										<td>{{base3.TradeCount}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  class="" v-if="more">
										<td>{{$t("robotdetails.Maximumhistoricalretracement") }}</td>
										<td style="padding-right: 7%;">{{base1.MaxDrawdownRatio|tofixed}}&nbsp;</td>
										<td>{{base2.MaxDrawdownRatio|tofixed}}&nbsp;</td>
										<td>{{base3.MaxDrawdownRatio|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  v-if="more">
										<td>{{$t("robotdetails.Maximumweeklywithdrawal") }}</td>
										<td style="padding-right: 7%;">{{base1.MaxDrawdownWeek|tofixed}}&nbsp;</td>
										<td>{{base2.MaxDrawdownWeek|tofixed}}&nbsp;</td>
										<td>{{base3.MaxDrawdownWeek|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  v-if="more">
										<td>{{$t("robotdetails.Sharperatio") }}</td>
										<td style="padding-right: 7%;">{{base1.SharpeRatio|tofixed}}&nbsp;</td>
										<td>{{base2.SharpeRatio|tofixed}}&nbsp;</td>
										<td>{{base3.SharpeRatio|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  v-if="more">
										<td>{{$t("robotdetails.risk1")}}</td>
										<td style="padding-right: 7%;">{{base1.Var1|tofixed}}&nbsp;</td>
										<td>{{base2.Var1|tofixed}}&nbsp;</td>
										<td>{{base3.Var1|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									<tr  v-if="more">
										<td>{{$t("robotdetails.risk5")}}</td>
										<td style="padding-right:7%;">{{base1.Var5|tofixed}}&nbsp;</td>
										<td>{{base2.Var5|tofixed}}&nbsp;</td>
										<td>{{base3.Var5|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									<tr v-if="more">
										<td>{{$t("robotdetails.Volatility")}}</td>
										<td style="padding-right:7%;">{{base1.Std|tofixed}}&nbsp;</td>
										<td>{{base2.Std|tofixed}}&nbsp;</td>
										<td>{{base3.Std|tofixed}}&nbsp;</td>
										<td></td>
									</tr>
									</tbody>
								</table>
							</div>
						</section>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>
<script>
	import { getUserInfo,getRbtIdList,startCompare,getRbtIdListNew} from '../api/api';
	import SelfCascader from '../components/cascader.vue'
	export default {
		data() {
			return {
				pop:false,
				frequencyOption:[
					{ value: '6h', label: '6 Hour'},
					{ value: '4h', label: '4 Hour'},
					{ value: '1h', label: '1 Hour'},
					{ value: '30m', label: '30 Min'},
					{ value: '15m', label: '15 Min'},
				],
				caseLoading:false,
				more:false,
				ifClearPath:false,
				levelSecondData:[],
				levelOneData:[],
				defaultList:[{
					label:'net.kongtou',
					value:'Short'
				},{
					label:'net.duotou',
					value:'Long'
				}],
				useList:[],
				xdata: [],
				xSet: [],
				getFormatter:'{b}',
				factoryList:[],
				robotId1:"",
				robotId2:"",
				robotId3:"",
				chartY1:[],
				chartY2:[],
				chartY3:[],
				chartX1:[],
				chartX2:[],
				chartX3:[],
				frequency1:"1h",
				frequency2:"1h",
				frequency3:"1h",
				time:"1",
				base1:{
					name:"",
					TradeCount:0,
				},
				base2:{
					name:"",
					TradeCount:0,
				},
				base3:{
					name:"",
					TradeCount:0,
				},
				chartlegendData:[],
				robotBase1:{},
				robotBase2:{},
				robotBase3:{},
			}
		},
		mounted() {
			this.getUinfo();
			this.drawLine();
		},
		components:{SelfCascader},
		methods: {
			getLevelOneData() {//获取一级
				this.levelOneData = [];
				this.levelSecondData = []
				this.levelOneData = this.defaultList
			},
			clearListAll() {//清除级联所有数据
				this.levelOneData = [];
				this.levelSecondData = []
			},
			getLevelSecondData(type,val) {//获取二级数据
				let params = {}
				if(val === '1') {//机器人一
					this.getvalKeyPath1()
					params.frequency = this.frequency1
					params.type = type
					this.loadData(params)
				}else if(val === '2') { //机器人二
					this.getvalKeyPath2()
					params.frequency = this.frequency2
					params.type = type
					this.loadData(params)
				}else if(val === '3') { //机器人三
					this.getvalKeyPath3()
					params.frequency = this.frequency3
					params.type = type
					this.loadData(params)
				}
			},
			getvalKeyPath1(val) {
				if(val !== undefined && val.length>0) {
					if(val.length>1){
						this.robotId1 = val[1]
					}
				}
			},
			getvalKeyPath2(val) {
				if(val !== undefined && val.length>0) {
					if(val.length>1){
						this.robotId2 = val[1]
					}
				}
			},
			getvalKeyPath3(val) {
				if(val !== undefined && val.length>0) {
					if(val.length>1){
						this.robotId3 = val[1]
					}
				}
			},
			openLoding() {
				this.$loading('loading...');
			},
			closeLoading() {
				this.$loading.close();
			},
			getUinfo() {
				getUserInfo({}).then(data => {
					if(data.success == 0) {
						this.useList = data.data;
						/*this.getRbtIdList();*/
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
			clearRobtoList() {
				this.ifClearPath = true
				this.levelSecondData = []
				this.levelOneData = []
			},
			loadData (params) {//获取机器人列表
				this.levelSecondData = []
				this.caseLoading = true
				getRbtIdListNew(params).then(res => {
					if (res.code == 200) {
						this.caseLoading = false
						if(res.data==null){
							this.levelSecondData = []
						}else{
							this.levelSecondData = res.data.map((item,index)=>{
								return {'value':item.robot_id,'label':item.robot_name}
							})
						}
					} else {
						this.caseLoading = false
						this.$toast.center(this.$t('msg.msg'+res.code));
					}
				});
			},
			startCompare(){
				if(this.robotId1 == '' && this.robotId2 == '' && this.robotId3 == '') {
					this.$toast.center(this.$t('netnew.selectAccount'))
					return false
				}
				var params=[];
				this.chartlegendData=[];
				if(this.robotId1){
					this.getvalKeyPath1()
					params.push(this.robotId1.value)
					this.chartlegendData.push(this.robotId1.label);
				}
				if(this.robotId2){
					this.getvalKeyPath2()
					params.push(this.robotId2.value)
					this.chartlegendData.push(this.robotId2.label);
				}
				if(this.robotId3){
					this.getvalKeyPath3()
					params.push(this.robotId3.value)
					this.chartlegendData.push(this.robotId3.label);

				}
				this.openLoding();
				startCompare(params).then(data => {
					if (data.code == 200) {
						this.chartY1=[];
						this.chartY2=[];
						this.chartY3=[];
						this.chartX1=[];
						this.chartX2=[];
						this.chartX3=[];
						this.base1=[];
						this.base2=[];
						this.base3=[];
						this.getFormatter='';
						for(let i=0;i<data.data.length;i++){
							this.getFormatter=this.getFormatter+'<br/>'+'{a'+i+'}:\n{c'+i+'}%';
							if(data.data[i].RobotId == this.robotId1.value){
								if(this.chartX1.length == 0) {
									this.robotBase1 = data.data[i]
									this.base1=data.data[i].Base;

									for(let j=0;j<data.data[i].Detail.length;j++){
										this.chartY1.push(this.$options.filters.chartsData(data.data[i].Detail[j].create_time));
										this.chartX1.push((data.data[i].Detail[j].cumprod_return*100).toFixed(3));
									}
								}
							}
							if(data.data[i].RobotId == this.robotId2.value){
								if(this.chartX2.length == 0) {
									this.robotBase2 = data.data[i]
									this.base2=data.data[i].Base;
									for(let j=0;j<data.data[i].Detail.length;j++){
										this.chartY2.push(this.$options.filters.chartsData(data.data[i].Detail[j].create_time));
										this.chartX2.push((data.data[i].Detail[j].cumprod_return*100).toFixed(3));
									}
								}
							}
							if(data.data[i].RobotId == this.robotId3.value){
								if(this.chartX3.length == 0) {
									this.robotBase3 = data.data[i]
									this.base3=data.data[i].Base;
									for(let j=0;j<data.data[i].Detail.length;j++){
										this.chartY3.push(this.$options.filters.chartsData(data.data[i].Detail[j].create_time));
										this.chartX3.push((data.data[i].Detail[j].cumprod_return*100).toFixed(3));
									}
								}
							}
						}
						this.drawLine();
						this.closeLoading();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));
						this.closeLoading();
					}
				});



			},

			drawLine() {
				let myChart = this.$echarts.init(document.getElementById('container'))
				myChart.setOption({


					tooltip: {
						trigger: 'axis',
						formatter: this.getFormatter,
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#6a7985'
							}
						}
					},
					textStyle:{
						color:'#fff'
					},
					legend: {
						data:this.chartlegendData,
						textStyle:{
							color:'#718EBD',
							fontSize:12
						},
						icon: "rect",
						itemWidth: 10,  // 设置宽度
						itemHeight: 10, // 设置高度
						itemGap: 50, // 设置间距
						right: '4%',
						top:'0',
					},
					color: ['#718EBD', '#36A85B', '#FF6565'],
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
						data: this.chartY1,
						axisLine: {
							lineStyle: {
								color: "#ffffff",
							}
						}
					}],
					yAxis: [{
						type: 'value',
						/*scale: true,*/
						axisLine: {
							lineStyle: {
								color: "#ffffff",
							}
						}
					}],
					series: [
						{
							name: this.robotId1.label,
							type: 'line',
							data: this.chartX1,
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
						{
							name: this.robotId2.label,
							type: 'line',
							data: this.chartX2,
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
									}]
								}
							}
						},
						{
							name: this.robotId3.label,
							type: 'line',
							data: this.chartX3,
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
									}]
								}
							}
						},
					]
				},true);
			},
			popShow() {
				this.pop = !this.pop
			},
		},
	}
</script>

<style scoped>
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
		/*background: url('../assets/img/markbox@2x.png') no-repeat;
		background-size:cover;*/
		padding-bottom: 25px;
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
		text-align: center;
		color:#fff;
	}
	.table > tbody > tr > td:first-child{
		color:#718EBD
	}
	.table > thead > tr > th{
		border:none;
		text-align: center;
		color:#718EBD;
	}
	table tr{
		border-top:1px solid #ffffff12;
		border-bottom:1px solid #ffffff12;
	}
	.compare_tit{
		font-size:20px;
		color:#fff;
		margin-bottom: 30px;
	}
	.compare_tit2{
		width:100%;
	}
	.compare_tit2>span:first-child{
		font-size:20px;
		color:#fff;
		margin-bottom: 30px;
	}
	.compare_tit2>span:last-child{
		color:#718EBD;
		font-size:14px;
		cursor: pointer;
	}
	.robot-compare-tit{
		width:1334px;
	}
	.robot-compare-tit>span{
		display: inline-block;
		margin-bottom: 40px;
	}
	.compare-wrap{
		width:100%;
	}
	.compare-wrap>li{
		float:left;
		width:25%;
	}
	.compare-wrap>li>div{
		width:76%;
	}
	.compare-wrap>li>div>p{
		color:#fff;
		font-size: 20px;
		margin-bottom: 30px;
	}
	.compare_btn{
		display: inline-block;
		background: url("../assets/img/zcbtn@2x.png") no-repeat;
		background-size: 100% 100%;
		width:130px;
		height:45px;
		text-align: center;
		line-height: 45px;
		color:#fff;
		font-size:14px;
		cursor: pointer;
		margin-right:64px;
		float:right;
	}
	.select-type{
		display: block;
		width:100%;
		background: none!important;
		border:none!important;
		margin-top:35px;
	}
	.form-control,.form-controls{
		color:#718EBD!important;
		font-size:16px!important;
	}
</style>
<style>
	.el-input__inner{
		width:100%!important;
		background-color:transparent!important;
		border:none!important;
		border-bottom:1px solid #718EBD!important;
		color:#718EBD!important;
		font-size:16px!important;
		padding-left:0!important;
	}
	.el-input__suffix{
		color:#718EBD;
	}
	.el-input__icon{
		color:#718EBD!important;
	}
	.el-select-dropdown{
		/*background-color: #718EBD!important;*/
		padding-left: 10px!important;
	/*	color:#fff!important;*/
	}
	/*.el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
		background-color: #718EBD!important;
	}*/
	.popover-wrap{
		color:#718EBD!important;
		font-size:14px;
		line-height:20px;
		border:1px solid rgba(255,255,255,.1);
		border-radius: 8px;
		width:200px;
		padding:8px;
		display: none;
		transition: all .8s linear;
		position:absolute;
		right:0;
		top:40px;
		background-color: #011122;
		z-index:5;
	}
	.pop_active{
		display: block;
	}
</style>
