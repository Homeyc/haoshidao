<template>
	<section class="mail-list">
		<h1 class="crbt-bigTit">
    		 {{unitInfo.name}}
    		 <a v-bind:class="{'label-primary':unitInfo.status==1,'label-primary2':unitInfo.status!=1}" style="margin-left: 15px;">{{unitInfo.status | murStatus}}</a>
    	</h1>
    	<div class="lg-width" style="width: 100%;" >
    		<button class="btn rbdbtn btn-md" type="button" style="position: relative;" v-show="ifview" @click="changeView(0)" >
				{{$t('netnew.Edit')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" v-show="!ifview" @click="createUnitRobot" >
				{{$t('netnew.saveRbt')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="back" >
				{{$t('net.back')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>

		</div>
		<div class="lg-width" style="width: 100%;margin-top: 25px;" >
			<div class="lg-width" style="width: 17.5%;text-align: center;">
				<img src="../assets/img/unithead.png" />
			</div>
			<div class="lg-width" style="width: 77.5%;margin-left: 5%;margin-top: 10px;">
				<div class="lg-width" style="width: 100%;color: #fff;font-size: 18px;">
				 {{$t('netnew.BasicInformation')}}
				</div>
				<div class="lg-width" style="width: 35%;margin-right: 5%;margin-top: 10px;">
					<div class="lg-width" style="color:#718EBD;border-bottom:1px solid #718EBD ;line-height: 39px;width: 100%;">{{$t('netnew.RobotName')}} : {{crbtParams.name}}</div>
				</div>
				<div class="lg-width" style="width: 35%;margin-right: 25%;margin-top: 10px;">
					<div class="lg-width" style="color:#718EBD;border-bottom:1px solid #718EBD ;line-height: 39px;width: 100%;">{{$t('netnew.OperationFrequency')}} : {{crbtParams.frequency | operatfrequency}}</div>
				</div>
				<div class="lg-width" style="width: 35%;margin-right: 5%;margin-top: 10px;">
					<div class="lg-width" style="color:#718EBD;border-bottom:1px solid #718EBD ;line-height: 39px;width: 100%;">{{$t('netnew.TradePair')}} : {{unitInfo.pair}}</div>
				</div>
				<div class="lg-width" style="width: 35%;margin-right: 25%;margin-top: 10px;">
					<div class="lg-width" style="color:#718EBD;border-bottom:1px solid #718EBD ;line-height: 39px;width: 100%;">{{$t('netnew.TradeType')}} : {{crbtParams.robot_type|tradeType}}</div>
				</div>
				<div class="lg-width" style="width: 35%;margin-right: 5%;margin-top: 10px;">
					<div class="lg-width" style="color:#718EBD;border-bottom:1px solid #718EBD ;line-height: 39px;width: 100%;">{{$t('netnew.StandardCoin')}} : {{crbtParams.base_currency}}</div>
				</div>
				<div class="lg-width" style="width: 35%;margin-right: 25%;margin-top: 10px;">
					<div class="lg-width" style="color:#718EBD;border-bottom:1px solid #718EBD ;line-height: 39px;width: 100%;">{{$t('netnew.Description')}} : {{crbtParams.introduction}}</div>
				</div>
			</div>
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 50px;" >
			<h1 class="crbt-bigTit" style="font-size: 18px;">
    			{{$t('netnew.BasicStrategy')}}
    		</h1>
    		<div class="lg-width" style="width: 100%;">
    			<div class="lg-width" style="width: 11%;">
    				<select class="form-controls"  v-model="StrategyType1" disabled="disabled">
                    	<option value="">{{$t('netnew.myStrategy')}}1</option>
                		<option v-for="list in StrategyTypeList" :value="list.StrategyShelfId">{{list.StrategyType}}</option>
                 	</select>
    			</div>
    			<div class="lg-width" style="width: 55%;margin-left: 4%;" >
    				<select class="form-controls"  v-model="baseStrategy1" :disabled="ifview">
                    	<option value="">{{$t('netnew.clcs')}}</option>
                		<option v-for="list in StrategyDataList1" :value="list">{{list.Strategy}}</option>
                 	</select>
    			</div>
    			<div class="lg-width" style="width: 11%;margin-left: 4%;">
    				<select class="form-controls" v-model="strategy1.data_source" @change="getDataCycle1()"  :disabled="ifview" >
                    	<option value="">{{$t('netnew.datasource')}}</option>
                        <option v-for="list in sourceList " :value="list">{{list}}</option>
                    </select>
    			</div>
    			<div class="lg-width" style="width: 11%;margin-left: 4%;" >
                     <select class="form-controls" v-model="strategy1.data_source_id" :disabled="ifview" >
                    	<option value="">{{$t('netnew.yszq')}}</option>
                        <option v-for="list in cycleList1" :value="list.Id">{{list.Frequency}}</option>
                    </select>
    			</div>
    		</div>
    		<div class="lg-width" style="width: 100%;margin-top: 15px;">
    			<div class="lg-width" style="width: 11%;">
    				<select class="form-controls"   v-model="StrategyType2" disabled="disabled">
                    	<option value="">{{$t('netnew.myStrategy')}}2</option>
                		<option v-for="list in StrategyTypeList" :value="list.StrategyShelfId">{{list.StrategyType}}</option>
                 	</select>
    			</div>
    			<div class="lg-width" style="width: 55%;margin-left: 4%;">
    				<select class="form-controls"  v-model="baseStrategy2" :disabled="ifview">
                    	<option value="">{{$t('netnew.clcs')}}</option>
                		<option v-for="list in StrategyDataList2" :value="list">{{list.Strategy}}</option>
                 	</select>
    			</div>
    			<div class="lg-width" style="width: 11%;margin-left: 4%;" >
    				<select class="form-controls" v-model="strategy2.data_source" @change="getDataCycle2()" :disabled="ifview" >
                    	<option value="">{{$t('netnew.datasource')}}</option>
                        <option v-for="list in sourceList " :value="list">{{list}}</option>
                    </select>
    			</div>
    			<div class="lg-width" style="width: 11%;margin-left: 4%;" >
                     <select class="form-controls" v-model="strategy2.data_source_id" :disabled="ifview" >
                    	<option value="">{{$t('netnew.yszq')}}</option>
                        <option v-for="list in cycleList2" :value="list.Id">{{list.Frequency}}</option>
                    </select>
    			</div>
    		</div>
    		<div class="lg-width crbt-bigTit" style="font-size: 18px;margin-top: 25px;width: 100%;">
    			{{$t('netnew.StrategyDecision')}}
    		</div>
    		<div class="lg-width" style="width: 100%;">
    			<select class="form-controls" v-model="decisionObj" @change="getPrice"  disabled="disabled">
                	<option value="">{{$t('netnew.StrategyDecision')}}</option>
            		<option v-for="list in decisionList" :value="list">{{list.StrategyDecisionName}}</option>
             	</select>
    		</div>
		</div>
    </section>
</template>

<script>
	import { getUserInfo,geturbInfoByid,getDataSource,getDataCycle,geteurbInfoByid,createUnitRobot,editUnitRobot,getBaseToken,createRobot,getcrbtData,getUnitRobotList,getBaseControl,getrbInfoByid,getRobotType,getDecisionOp,getStrategyType,getStrategyOp,getPairFilter} from '../api/api';
	export default {
		data() {
			return {
					type:'',
			      options2: [
			      ],
			      options1: [

			      ],
			      crbtParams:{
			      		robot_type:"Long",
			      		name:'',
						base_currency:'',
						frequency:'1h',
						introduction:'',
						filter_id:'',
			      },
			     dsList:[],
			     imgName:'',
			     ifview:true,
			     user_unit_robot_id:'',
			     decisionList:[],
			     StrategyTypeList:[],
			     StrategyDataList1:[],
			     StrategyDataList2:[],
			     StrategyDataList3:[],
			     pairList:[],
			     sourceList:[],
			     robotPrice:0,
			     strategyPrice1:0,
			     strategyPrice2:0,
			     decisionPrice:0,
			     baseStrategy1:'',
			     baseStrategy2:'',
			     baseStrategy3:'',
			     StrategyType1:'',
			     StrategyType2:'',
			     StrategyType3:'',
			     base_strategy1:'',
			     base_strategy2:'',
			     data_source_name1:"",
			     data_source_name2:"",
			     strategy1:{
			     	base_strategy_id:"",
			     	data_source_id:"",
			     	strategy_expire_date:"",
			     },
			     strategy2:{
			     	base_strategy_id:"",
			     	data_source_id:"",
			     	strategy_expire_date:"",
			     },
			     strategy3:{
			     	base_strategy_id:"",
			     	data_source_id:"",
			     	strategy_expire_date:"",
			     },
			     decisionObj:{},
			     unitInfo:{},
			     cycleList1:[],
			     cycleList2:[],
			}
		},
		mounted() {
			this.getParams();
			this.getuseInfo();
			this.getPairFilter();
		},
		methods: {

			getuseInfo(){
				getUserInfo(this.empty).then(data => {
	              if (data.success == 0) {
					this.crbtParams.user_id=data.data.userId;
					this.getDecisionOp();

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
			},
			changeView(id){
				if(id==0){
					this.ifview=false;
				}else{
					this.ifview=true;
				}
			},
			strategyTypeChange(val){
				var params=''
				if(val==1){
					params=this.StrategyType1
					if(params==''){
						this.baseStrategy1='';
						this.strategy1.data_source_id='';
						this.StrategyDataList1=[];
						this.strategyPrice1=0;
						this.robotPrice=this.strategyPrice2+this.decisionPrice+this.strategyPrice1;
					}else{
//						this.getStrategyOp(params,1);
						for(var i=0;i<this.StrategyTypeList.length;i++){
							if(params==this.StrategyTypeList[i].Id){
								this.strategyPrice1=this.StrategyTypeList[i].UnitPrice
							}
						}
						this.robotPrice=this.strategyPrice1+this.strategyPrice2+this.decisionPrice;
					}
					this.getStrategyOpEd(this.StrategyType1,1,this.crbtParams.strategy_list[0].base_strategy_id);
				}else if(val==2){
					params=this.StrategyType2
					if(params==''){
						this.baseStrategy2='';
						this.strategy2.data_source_id='';
						this.StrategyDataList2=[];
						this.strategyPrice2=0;
						this.robotPrice=this.strategyPrice1+this.decisionPrice+this.strategyPrice2;
					}else{
//						this.getStrategyOp(params,2);
						for(var i=0;i<this.StrategyTypeList.length;i++){
							if(params==this.StrategyTypeList[i].Id){
								this.strategyPrice2=this.StrategyTypeList[i].UnitPrice
							}
						}
						this.robotPrice=this.strategyPrice1+this.strategyPrice2+this.decisionPrice;
					}
					this.getStrategyOpEd(this.StrategyType2,2,this.crbtParams.strategy_list[1].base_strategy_id);
				}else if(val==3){
					params=this.StrategyType3
					if(params==''){
						this.baseStrategy3='';
						this.strategy3.data_source_id='';
						this.StrategyDataList3=[];
					}else{
						this.getStrategyOp(params,3);
					}
				}


			},
			getDataCycle1(){
		   		var params={};
		   		params.data_source=this.strategy1.data_source
		   		params.base_currency=this.crbtParams.base_currency;
		   		params.pair=this.unitInfo.pair;
		   		getDataCycle(params).then(data => {
	              if (data.code == 200) {
	              	if(data.data==null){
	              		this.cycleList1=[];
	              		this.strategy1.data_source_id=""
	              	}else{
	              		this.cycleList1=data.data;
	              	}

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
	   		getDataCycle2(){
		   		var params={};
		   		params.data_source=this.strategy2.data_source
		   		params.base_currency=this.crbtParams.base_currency;
		   		params.pair=this.unitInfo.pair;
		   		getDataCycle(params).then(data => {
	              if (data.code == 200) {
	              	if(data.data==null){
	              		this.cycleList2=[];
	              		this.strategy2.data_source_id=""
	              	}else{
	              		this.cycleList2=data.data;
	              	}

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
			getPrice(){
				this.decisionPrice=this.decisionObj.UnitPrice;
				this.robotPrice=this.strategyPrice1+this.strategyPrice2+this.decisionPrice;
			},
		   	getDecisionOp(){
		   		var params={};
		   		params.id=this.crbtParams.user_id;
		   		getDecisionOp(params).then(data => {
	              if (data.code == 200) {
					this.decisionList=data.data;
					if(this.decisionList.length>0){
						this.decisionObj=this.decisionList[0];
						this.decisionPrice=this.decisionObj.UnitPrice;
						this.robotPrice=this.strategyPrice1+this.strategyPrice2+this.decisionPrice;

					}
					if(this.crbtParams.decision_shelf_id){
						for(var i=0;i<this.decisionList.length;i++){
							if(this.decisionList[i].StrategyDecisionShelfId==this.crbtParams.decision_shelf_id){
								this.decisionObj=this.decisionList[i];
							}
						}
					}
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
		   	getStrategyType(){
		   		var params={};
		   		params.id=this.crbtParams.user_id;
		   		getStrategyType(params).then(data => {
	              if (data.code == 200) {
					this.StrategyTypeList=data.data
					if(this.StrategyTypeList==null){
						this.$toast.center(this.$t('netnew.clwk'))
					}
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
		   	getStrategyOp(val,index){
		   		var params={};
		   		params.id=this.crbtParams.user_id;
		   		params.strategy=val
		   		getStrategyOp(params).then(data => {
	              if (data.code == 200) {
	              	if(index==1){
	              		this.StrategyDataList1=data.data;
	              		this.baseStrategy1=data.data[0];
	              	}else if(index==2){
	              		this.StrategyDataList2=data.data;
	              		this.baseStrategy2=data.data[0];
	              	}else if(index==3){
	              		this.StrategyDataList3=data.data;
	              	}

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
		   	getStrategyOpEd(val,index,val2){
		   		var params={};
		   		params.id=this.crbtParams.user_id;
		   		params.strategy=val
		   		getStrategyOp(params).then(data => {
	              if (data.code == 200) {
	              	if(index==1){
	              		this.StrategyDataList1=data.data;
	              		var flag=0;
	              		for(var i=0;i<this.StrategyDataList1.length;i++){
	              			if(this.StrategyDataList1[i].Id==val2){
	              				flag=i
	              			}
	              		}
	              		this.baseStrategy1=data.data[flag];
	              	}else if(index==2){
	              		this.StrategyDataList2=data.data;
	              		var flag=0;
	              		for(var i=0;i<this.StrategyDataList2.length;i++){
	              			if(this.StrategyDataList2[i].Id==val2){
	              				flag=i
	              			}
	              		}
	              		this.baseStrategy2=data.data[flag];
	              	}
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
		   	toStrategy(){
		   		this.$router.push('/strategy')
		   	},
		   	getPairFilter(){
		   		getPairFilter().then(data => {
	              if (data.code == 200) {
					this.pairList=data.data;
					if(this.pairList.length>0){
						this.crbtParams.filter_id=this.pairList[0].Id
						this.getBaseToken();
					}

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
		   	getBaseToken(){
		   		var params={};
		   		params.filter_id=this.crbtParams.filter_id
		   		params.robot_type=this.crbtParams.robot_type
		   		getBaseToken(params).then(data => {
	              if (data.code == 200) {
					this.crbtParams.base_currency=data.data;
					this.getDataSource();
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });

		   	},
		   	getDataSource(){
		   		var params={};
		   		params.base_currency=this.crbtParams.base_currency;
		   		getDataSource(params).then(data => {
	              if (data.code == 200) {
//	              	this.strategy1.data_source_id='';
//	              	this.strategy2.data_source_id='';
					this.sourceList=data.data;

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
	   		getEditDataSource(val){
		   		var params={};
		   		params.base_currency=this.crbtParams.base_currency;
		   		getDataSource(params).then(data => {
	              if (data.code == 200) {
					this.sourceList=data.data;
					if(val==2){
						this.strategy1.data_source=this.sourceList[0];
						this.strategy2.data_source=this.sourceList[0];
						this.getDataCycle1();
						this.getDataCycle2();
					}else{
						this.strategy1.data_source=this.sourceList[0];
						this.strategy2.data_source="";
						this.getDataCycle1();
					}

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
		   	createUnitRobot(){
		   		var params={};
		   		params=this.crbtParams;
		   		params.strategy_list=[]
		   		if(this.StrategyType1){
		   			var obj={};
		   			obj.strategy_shelf_id=this.StrategyType1;
		   			obj.base_strategy_id=this.baseStrategy1.Id;
		   			obj.data_source_id=this.strategy1.data_source_id
		   			params.strategy_list.push(obj);
		   		}
		   		if(this.StrategyType2){
		   			var obj={};
		   			obj.strategy_shelf_id=this.StrategyType2;
		   			obj.base_strategy_id=this.baseStrategy2.Id;
		   			obj.data_source_id=this.strategy2.data_source_id
		   			params.strategy_list.push(obj);
		   		}
		   		params.decision_shelf_id=this.decisionObj.StrategyDecisionShelfId

	                editUnitRobot( params).then(data =>{
	                   if (data.code == 200) {
						if(this.$i18n.locale== 'zh-CN'){
							this.$toast.center('编辑成功');
						}else{
							this.$toast.center('Edit Success');
						}
						this.changeView(1);
						this.getParams();
	                   }else{
	                   	this.$toast.center(this.$t('msg.msg'+data.code));
	                   }
	                });
		   	},
		   	back(){
        		history.back();
        	},
		   geteurbInfoByid(val){
		   		var params ={}
			   	params.Id=val;
			   	geteurbInfoByid(params).then(data => {
		              if (data.code == 200) {
						this.crbtParams=data.data;
						this.user_unit_robot_id=data.data.user_unit_robot_id;
						if(data.data.strategy_list.length<2){
							this.getStrategyType();
							this.StrategyType1=this.crbtParams.strategy_list[0].strategy_shelf_id
							this.strategyTypeChange(1);
							this.getEditDataSource(1);
							this.strategy1.data_source_id=data.data.strategy_list[0].data_source_id

						}else{
							this.getStrategyType();
							this.StrategyType1=this.crbtParams.strategy_list[0].strategy_shelf_id
							this.StrategyType2=this.crbtParams.strategy_list[1].strategy_shelf_id
							this.strategyTypeChange(1);
							this.strategyTypeChange(2);
							this.getEditDataSource(2);
							this.strategy1.data_source_id=data.data.strategy_list[0].data_source_id
							this.strategy2.data_source_id=data.data.strategy_list[1].data_source_id
						}
						console.log(this.strategy1.data_source_id+"eeeeeeee")


		              } else {
		              	this.$toast.center(this.$t('msg.msg'+data.code));
		              }
		         });
		   },
		   getParams(){
		   	this.unitInfo=JSON.parse(localStorage.getItem('unitInfo'));
			this.geteurbInfoByid(this.unitInfo.id);

			},


		}
	}
</script>

<style scoped="scoped">
	.crbt-redrobder{
		border: 1px solid red;
	}
	.crbt-redrobder:focus{
		border-color: red;
	}
	.netcrb-header{
		font-size: 24px;
		color: #fff;
		margin-top: 40px;
		margin-left: 51px;
		display: inline-block;
	}
	.crbt-leftlabel{
		width: 100%;
	    text-align: left;
	    margin-top: 10px;
	    color: #718EBD;
	    padding-left: 36.5px !important;

	}
	.crbt-input{
		width: 804px;
		padding-left: 36.5px !important;
	}
	.crbt-inputLine{
		width: 100%;
		margin-top: 15px;
	}
	.crbt-btn{
	   	background: url(../assets/img/dybtn@2x.png) no-repeat !important;
       	background-size: cover !important;
	    cursor: pointer;
	    height: 60px;
	    line-height: 60px;
	    width: 200px;
	    margin: 0;
	    padding: 0 35px !important;
	    color: #fff;
	}
	.crbt-bigTit{
		color: #fff ;
		font-size:25px ;
	    padding-left: 51px;
	    padding-top: 0px;
	    padding-bottom: 20px;
	    padding-left: 0px;
	    border-bottom:none;
	    margin-top: 0px;
	}
</style>
