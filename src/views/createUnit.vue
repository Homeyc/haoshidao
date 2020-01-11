<template>
	<section class="mail-list">
		<h1 class="crbt-bigTit">
    		 {{$t('netnew.CretaeUnitRobot')}}
    	</h1>
    	<div class="lg-width" style="width: 100%;" v-show="step==0">
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="back" >
				{{$t('net.back')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="nextStep(1)" :disabled="!crbtParams.name" >
				{{$t('netnew.nextstep')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
		</div>
		<div class="lg-width" style="width: 100%;" v-show="step==1">
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="back" >
				{{$t('net.back')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="nextStep(0)" >
				{{$t('netnew.laststep')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="nextStep(2)" :disabled="!baseStrategy1.Id||!strategy1.data_source_id||!decisionObj">
				{{$t('netnew.nextstep')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
		</div>
		<div class="lg-width" style="width: 100%;" v-show="step==2">
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="back" >
				{{$t('net.back')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="nextStep(1)" >
				{{$t('netnew.laststep')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
			</button>
			<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="createUnitRobot()" :disabled="isloading">
				{{$t('netnew.settlement')}}
				<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png"  >
			</button>
		</div>


		<div class="lg-width" style="width: 100%;margin-top: 45px;">
			<div class="lg-width" style="width: 10%;text-align: center;">
				<div style="width: 50px;height:50px;margin:0 auto;border-radius: 50%;border:1px solid #718EBD ;text-align: center;" v-bind:class="{'circular-none':step==0,'circular-bg':step>=1}">
					<span style="line-height: 50px;font-size: 16px;" >1</span>
				</div>
				<div style="width: 100%;color:#718EBD ;font-size: 14px;padding-top: 10px;">{{$t('netnew.txjcxx')}}</div>
			</div>
			<div class="lg-width" style="width: 35%;margin-top: 23px;" v-bind:class="{'nostep-bt':step==0,'steped-bt':step>=1}"></div>
			<div class="lg-width" style="width: 10%;text-align: center;">
				<div style="width: 50px;height:50px;margin:0 auto;border-radius: 50%;border:1px solid #718EBD ;text-align: center;" v-bind:class="{'circular-none':step!=2,'circular-bg':step==2}">
					<span style="line-height: 50px;font-size: 16px;" >2</span>
				</div>
				<div style="width: 100%;color:#718EBD ;font-size: 14px;padding-top: 10px;">{{$t('netnew.xzcl')}}</div>
			</div>
			<div class="lg-width" style="width: 35%;margin-top: 23px;" v-bind:class="{'nostep-bt':step!=2,'steped-bt':step==2}"></div>
			<div class="lg-width" style="width: 10%;text-align: center;">
				<div class="circular-none" style="width: 50px;height:50px;margin:0 auto;border-radius: 50%;border:1px solid #718EBD ;text-align: center;" >
					<span style="line-height: 50px;font-size: 16px;" >3</span>
				</div>
				<div style="width: 100%;color:#718EBD ;font-size: 14px;padding-top: 10px;">{{$t('netnew.bcjs')}}</div>
			</div>
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 50px;" v-show="step==0">
			<h1 class="crbt-bigTit" style="font-size: 18px;">
    			{{$t('netnew.txjcxx')}}
    			<span style="color: #718EBD;float: right;font-size: 14px;line-height: 18px;cursor: pointer;" @click="toqfa"><i class="fa fa-question-circle" aria-hidden="true" style="margin-right: 5px;"></i>{{$t('netnew.howuse')}}</span>
    		</h1>
    		<div class="lg-width" style="width: 100%;">
    			<div class="lg-width" style="width: 30%;">
    				<input type="text" class="form-control" :class="{'crbt-redrobder':!crbtParams.name}" :placeholder="$t('netnew.RobotName')" v-model="crbtParams.name"  maxlength="20" :disabled="ifview">
    			</div>
    			<div class="lg-width" style="width: 26%;margin-left: 4%;">
    				<select class="form-controls"  v-model="crbtParams.filter_id" @change="getBaseToken" >
                        <option v-for="list in pairList" :value="list.Id">{{list.PairList}}</option>
                    </select>
    			</div>
    			<div class="lg-width" style="width: 16%;margin-left: 4%;">
    				<select class="form-controls"  @change="getBaseToken" v-model="crbtParams.robot_type" >
	                    <option value="Long">{{$t('netnew.typelong')}}</option>
	                    <option value="Short">{{$t('netnew.typeshort')}}</option>
	                    <option value="Hedge" disabled="disabled">{{$t('netnew.Hedge')}}</option>
	                    <option value="Arbitrage" disabled="disabled">{{$t('netnew.Arbitrage')}}</option>
	                </select>
    			</div>
    			<div class="lg-width" style="width: 16%;margin-left: 4%;">
                    <input type="text" class="form-control"  maxlength="20" disabled="disabled" @change="getDataSource" v-model="crbtParams.base_currency" >
    			</div>
    			<div class="lg-width" style="width: 100%;margin-top: 15px;">
    				<input class="form-control" style="resize:none" :placeholder="$t('netnew.Description')" maxlength="255" v-model="crbtParams.introduction" >
    			</div>
    		</div>
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 50px;" v-show="step==1">
			<h1 class="crbt-bigTit" style="font-size: 18px;">
    			{{$t('netnew.BasicStrategy')}}
    			<span style="color: #718EBD;float: right;font-size: 14px;line-height: 18px;cursor: pointer;" @click="toqfa"><i class="fa fa-question-circle" aria-hidden="true" style="margin-right: 5px;"></i>{{$t('netnew.howuse')}}</span>
    		</h1>
    		<div class="lg-width" style="width: 100%;">
    			<div class="lg-width" style="width: 11%;">
    				<select class="form-controls"  @change="strategyTypeChange('1')" v-model="StrategyType1" >
                    	<option value="">{{$t('netnew.myStrategy')}}1</option>
                		<option v-for="list in StrategyTypeList" :value="list.StrategyShelfId">{{list.StrategyType}}</option>
                 	</select>
    			</div>
    			<div class="lg-width" style="width: 55%;margin-left: 4%;">
    				<select class="form-controls"  v-model="baseStrategy1">
                    	<option value="">{{$t('netnew.clcs')}}</option>
                		<option v-for="list in StrategyDataList1" :value="list">{{list.Strategy}}</option>
                 	</select>
    			</div>
    			<div class="lg-width" style="width: 11%;margin-left: 4%;">
    				<select class="form-controls" v-model="strategy1.data_source" @change="getDataCycle1()"  >
                    	<option value="">{{$t('netnew.datasource')}}</option>
                        <option v-for="list in sourceList " :value="list">{{list}}</option>
                    </select>
    			</div>
    			<div class="lg-width" style="width: 11%;margin-left: 4%;">
                     <select class="form-controls" v-model="strategy1.data_source_id"  >
                    	<option value="">{{$t('netnew.yszq')}}</option>
                        <option v-for="list in cycleList1" :value="list.Id">{{list.Frequency}}</option>
                    </select>
    			</div>
    		</div>
    		<div class="lg-width" style="width: 100%;margin-top: 15px;">
    			<div class="lg-width" style="width: 11%;">
    				<select class="form-controls"  @change="strategyTypeChange('2')" v-model="StrategyType2" >
                    	<option value="">{{$t('netnew.myStrategy')}}2</option>
                		<option v-for="list in StrategyTypeList" :value="list.StrategyShelfId">{{list.StrategyType}}</option>
                 	</select>
    			</div>
    			<div class="lg-width" style="width: 55%;margin-left: 4%;">
    				<select class="form-controls"  v-model="baseStrategy2">
                    	<option value="">{{$t('netnew.clcs')}}</option>
                		<option v-for="list in StrategyDataList2" :value="list">{{list.Strategy}}</option>
                 	</select>
    			</div>
    			<div class="lg-width" style="width: 11%;margin-left: 4%;">
    				<select class="form-controls" v-model="strategy2.data_source" @change="getDataCycle2()"  >
                    	<option value="">{{$t('netnew.datasource')}}</option>
                        <option v-for="list in sourceList " :value="list">{{list}}</option>
                    </select>
    			</div>
    			<div class="lg-width" style="width: 11%;margin-left: 4%;">
                     <select class="form-controls" v-model="strategy2.data_source_id"  >
                    	<option value="">{{$t('netnew.yszq')}}</option>
                        <option v-for="list in cycleList2" :value="list.Id">{{list.Frequency}}</option>
                    </select>
    			</div>
    		</div>
    		<div class="lg-width crbt-bigTit" style="font-size: 18px;margin-top: 25px;width: 100%;">
    			{{$t('netnew.StrategyDecision')}}
    		</div>
    		<div class="lg-width" style="width: 100%;">
    			<select class="form-controls" v-model="decisionObj" @change="getPrice"  >
                	<option value="">{{$t('netnew.StrategyDecision')}}</option>
            		<option v-for="list in decisionList" :value="list">{{list.StrategyDecisionName}}</option>
             	</select>
    		</div>
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 50px;" v-show="step==2">
			<h1 class="crbt-bigTit" style="font-size: 18px;">
    			{{$t('netnew.BasicStrategy')}}{{$t('netnew.bcjs')}}
    			<span style="color: #718EBD;float: right;font-size: 14px;line-height: 18px;cursor: pointer;" @click="toqfa"><i class="fa fa-question-circle" aria-hidden="true" style="margin-right: 5px;"></i>{{$t('netnew.howuse')}}</span>
    		</h1>
    		<div class="lg-width" style="width: 100%;">
    			<div class="lg-width" style="width: 25%;color:#718EBD;text-align: left;">
    				{{$t('netnew.UnitRobotName')}}
    			</div>
    			<div class="lg-width" style="width: 25%;color:#718EBD;text-align: left;">
    				{{$t('netnew.TradePair')}}
    			</div>
    			<div class="lg-width" style="width: 25%;color:#718EBD;text-align: left;">
    				{{$t('netnew.RobotType')}}
    			</div>
    			<div class="lg-width" style="width: 25%;color:#718EBD;text-align: left;">
    				{{$t('netnew.basicCurrency')}}
    			</div>
    			<div class="lg-width" style="width: 25%;color:#fff;text-align: left;margin-top:15px ;">
    				{{crbtParams.name}}
    			</div>
    			<div class="lg-width" style="width: 25%;color:#fff;text-align: left;margin-top:15px ;">
    				{{crbtParams.pair}}
    			</div>
    			<div class="lg-width" style="width: 25%;color:#fff;text-align: left;margin-top:15px ;">
    				{{crbtParams.robot_type|tradeType}}
    			</div>
    			<div class="lg-width" style="width: 25%;color:#fff;text-align: left;margin-top:15px ;">
    				{{crbtParams.base_currency}}
    			</div>


    			<div class="lg-width" style="width: 100%;color:#718EBD;text-align: left;margin-top: 15px;">
    				{{$t('netnew.Description')}}
    			</div>
    			<div class="lg-width" style="width: 100%;color:#fff;text-align: left;margin-top:15px ;">
    				{{crbtParams.introduction}}
    			</div>


    			<div class="lg-width" style="width: 20%;color:#718EBD;text-align: left;margin-top:15px ;">
    				{{$t('netnew.BasicStrategy')}}
    			</div>
    			<div class="lg-width" style="width: 15%;color:#718EBD;text-align: left;margin-top:15px ;">
    				{{$t('person.type5')}}
    			</div>
    			<div class="lg-width" style="width: 65%;color:#718EBD;text-align: left;margin-top:15px ;">
    				{{$t('netnew.syts')}}
    			</div>

    			<template v-for="list in strList">
    				<div class="lg-width" style="width: 20%;color:#fff;text-align: left;margin-top:15px ;">
	    				{{list.StrategyType}}
	    			</div>
	    			<div class="lg-width" style="width: 15%;color:#fff;text-align: left;margin-top:15px ;">
	    				{{list.UnitPrice}}NET/{{$t('market.day')}}
	    			</div>
	    			<div class="lg-width" style="width: 65%;color:#fff;text-align: left;margin-top:15px ;" v-show="list.LessDay>0">
	    				{{list.LessDay}}{{$t('market.day')}}
	    			</div>
	    			<div class="lg-width" style="width: 65%;color:#fff;text-align: left;margin-top:15px ;" v-show="list.LessDay<=0">
	    				{{$t('netnew.unbuy')}}
	    			</div>
    			</template>

    			<div class="lg-width" style="width: 100%;border-top:1px solid #ffffff1e;border-bottom:1px solid #ffffff1e;margin-top: 15px;padding-bottom: 15px;">
    				<div class="lg-width" style="width: 20%;color:#718EBD;text-align: left;margin-top:15px ;">
	    				{{$t('netnew.StrategyDecision')}}
	    			</div>
	    			<div class="lg-width" style="width: 15%;color:#718EBD;text-align: left;margin-top:15px ;">
	    				{{$t('person.type5')}}
	    			</div>
	    			<div class="lg-width" style="width: 65%;color:#718EBD;text-align: left;margin-top:15px ;">
	    				{{$t('netnew.syts')}}
	    			</div>

    				<div class="lg-width" style="width: 20%;color:#fff;text-align: left;margin-top:15px ;">
	    				{{decisionObj.StrategyDecisionName}}
	    			</div>
	    			<div class="lg-width" style="width: 15%;color:#fff;text-align: left;margin-top:15px ;">
	    				{{decisionObj.UnitPrice}}NET/{{$t('market.day')}}
	    			</div>
	    			<div class="lg-width" style="width: 65%;color:#fff;text-align: left;margin-top:15px ;" v-show="decisionObj.LessDay>0">
	    				{{decisionObj.LessDay}}{{$t('market.day')}}
	    			</div>
	    			<div class="lg-width" style="width: 65%;color:#fff;text-align: left;margin-top:15px ;" v-show="decisionObj.LessDay<=0">
	    				{{$t('netnew.unbuy')}}
	    			</div>

    			</div>

    			<div class="lg-width" style="width: 100%;margin-top: 25px;">
    				<div class="lg-width" style="width: 100%;color:#718EBD;text-align: left;margin-top: 15px;">
    					{{$t('netnew.gmcdyjqr')}}
    				</div>
    				<div class="lg-width" style="width: 45%;color:#fff;text-align: left;margin-top:15px ;" >
	    				<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aMonth')}}</a>
						<a class="pair-time" style="margin-left: 60px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.season')}}</a>
						<a class="pair-time" style="margin-left: 60px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
	    			</div>
	    			<div class="lg-width" style="width: 55%;color:#fff;text-align: right;margin-top:15px ;font-size: 18px;" >
	    				{{$t('netnew.Zjcb')}} ：{{totleNet}} NET &nbsp&nbsp&nbsp&nbsp{{$t('netnew.hxzf')}}：{{payNet}} NET
	    			</div>
    			</div>
    		</div>
		</div>

    </section>
</template>

<script>
	import { getUserInfo,geturbInfoByid,getDataSource,getDataCycle,geteurbInfoByid,createUnitRobot,editUnitRobot,getBaseToken,createRobot,getcrbtData,getUnitRobotList,getBaseControl,getrbInfoByid,getRobotType,getDecisionOp,getStrategyType,getStrategyOp,getPairFilter,createUnitRobotNew} from '../api/api';
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
						frequency:'',
						introduction:'',
						filter_id:'',
			      },
			     step:0,
			     dsList:[],
			     imgName:'',
			     ifview:false,
			     user_unit_robot_id:'',
			     decisionList:[],
			     StrategyTypeList:[],
			     StrategyDataList1:[],
			     StrategyDataList2:[],
			     StrategyDataList3:[],
			     pairList:[],//交易对
			     sourceList:[],
			     robotPrice:0,
			     strategyPrice1:0,
			     strategyPrice2:0,
			     isloading:false,
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
			     checkedStr1:{},
			     checkedStr2:{},
			     pairSelected:1,
			     strList:[],
			     strategy1:{
			     	data_source:"",
			     	base_strategy_id:"",
			     	data_source_id:"",
			     	strategy_expire_date:"",
			     },
			     strategy2:{
			     	data_source:"",
			     	base_strategy_id:"",
			     	data_source_id:"",
			     	strategy_expire_date:"",
			     },
			     strategy3:{
			     	base_strategy_id:"",
			     	data_source_id:"",
			     	strategy_expire_date:"",
			     },
			     decisionObj:"",
			     cycleList1:[],
			     cycleList2:[],
			     totleNet:0,
			     payNet:0,
			     netValue:0,
			}
		},
		mounted() {
			this.getuseInfo();
			this.getPairFilter();
		},
		methods: {

			getuseInfo(){//获取用户信息userid
				getUserInfo(this.empty).then(data => {
	              if (data.success == 0) {
					this.crbtParams.user_id=data.data.userId;
					this.netValue=data.data.netValue;
					this.getDecisionOp();
					this.getStrategyType();

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
			},
			back(){
        		history.back();
        	},
        	nextStep(id){
        		this.step=id
        		if(id==2){
        			this.strList=[];
        			if(JSON.stringify(this.checkedStr1) != "{}"){
        				this.strList.push(this.checkedStr1);
        			}
        			if(JSON.stringify(this.checkedStr2) != "{}"){
        				this.strList.push(this.checkedStr2);
        			}
        			this.choseTime(1);
        		}
        	},
        	 choseTime(id) {//购买天数改变
                this.pairSelected = id;
                var pay1=0;
                var pay2=0;
                var pay3=0;
                var tot1=0;
                var tot2=0;
                var tot3=0;
                if(id==1){//30天
                	console.log(this.strList)
                	for(var i=0;i<this.strList.length;i++){
                		if(i==0){
                			tot1=this.strList[i].UnitPrice*30
                			if(this.strList[i].LessDay<30){
                				pay1=(30-this.strList[i].LessDay)*this.strList[i].UnitPrice
                			}
                		}
                		if(i==1){
                			tot2=this.strList[i].UnitPrice*30
                			if(this.strList[i].LessDay<30){
                				pay2=(30-this.strList[i].LessDay)*this.strList[i].UnitPrice
                			}
                		}

                	}
                	tot3=this.decisionObj.UnitPrice*30
                	if(this.decisionObj.LessDay<30){
                		pay3=(30-this.decisionObj.LessDay)*this.decisionObj.UnitPrice
                	}
                }else if(id==2){//90天
                	for(var i=0;i<this.strList.length;i++){
                		if(i==0){
                			tot1=this.strList[i].UnitPrice*90
                			if(this.strList[i].LessDay<90){
                				pay1=(90-this.strList[i].LessDay)*this.strList[i].UnitPrice
                			}
                		}
                		if(i==1){
                			tot2=this.strList[i].UnitPrice*90
                			if(this.strList[i].LessDay<90){
                				pay2=(90-this.strList[i].LessDay)*this.strList[i].UnitPrice
                			}
                		}

                	}
                	tot3=this.decisionObj.UnitPrice*90
                	if(this.decisionObj.LessDay<90){
                		pay3=(90-this.decisionObj.LessDay)*this.decisionObj.UnitPrice
                	}
                }else if(id==3){//一年
                	for(var i=0;i<this.strList.length;i++){
                		if(i==0){//策略1
                			tot1=this.strList[i].UnitPrice*365
                			if(this.strList[i].LessDay<365){
                				pay1=(365-this.strList[i].LessDay)*this.strList[i].UnitPrice
                			}
                		}
                		if(i==1){//策略1
                			tot2=this.strList[i].UnitPrice*365
                			if(this.strList[i].LessDay<365){
                				pay2=(365-this.strList[i].LessDay)*this.strList[i].UnitPrice
                			}
                		}

                	}
                	tot3=this.decisionObj.UnitPrice*365
                	if(this.decisionObj.LessDay<365){
                		pay3=(365-this.decisionObj.LessDay)*this.decisionObj.UnitPrice
                	}
                }

                if(this.strList.length>1){//两个基础策略相同
                	if(this.strList[0].StrategyShelfId==this.strList[1].StrategyShelfId){
                		this.totleNet=tot1+tot3;
						this.payNet=pay1+pay3;
                	}else{
						this.totleNet=tot1+tot2+tot3;
						this.payNet=pay1+pay2+pay3;
					}
                }else{
                	this.totleNet=tot1+tot2+tot3;
					this.payNet=pay1+pay2+pay3;
                }

            },
			strategyTypeChange(val){//基础策略类型改变
				var params=''
//				this.checkedStr1={};
//				this.checkedStr2={};
				if(val==1){
					this.checkedStr1={};
					params=this.StrategyType1
					for(var i=0;i<this.StrategyTypeList.length;i++){
						if(this.StrategyType1==this.StrategyTypeList[i].StrategyShelfId){
							this.checkedStr1=this.StrategyTypeList[i]//已选择策略的具体信息
						}

					}
					if(params==''){
						this.baseStrategy1='';
						this.strategy1.data_source_id='';
						this.StrategyDataList1=[];
						this.strategyPrice1=0;
						this.robotPrice=this.strategyPrice2+this.decisionPrice+this.strategyPrice1;
					}else{
						this.getStrategyOp(params,1);//获取策略参数
						for(var i=0;i<this.StrategyTypeList.length;i++){
							if(params==this.StrategyTypeList[i].Id){
								this.strategyPrice1=this.StrategyTypeList[i].UnitPrice
							}
						}
						this.robotPrice=this.strategyPrice1+this.strategyPrice2+this.decisionPrice;
					}
				}else if(val==2){
					this.checkedStr2={};
					params=this.StrategyType2
					for(var i=0;i<this.StrategyTypeList.length;i++){
						if(this.StrategyType2==this.StrategyTypeList[i].StrategyShelfId){
							this.checkedStr2=this.StrategyTypeList[i]
						}

					}
					if(params==''){
						this.baseStrategy2='';
						this.strategy2.data_source_id='';
						this.StrategyDataList2=[];
						this.strategyPrice2=0;
						this.robotPrice=this.strategyPrice1+this.decisionPrice+this.strategyPrice2;
					}else{
						this.getStrategyOp(params,2);//获取策略参数
						for(var i=0;i<this.StrategyTypeList.length;i++){
							if(params==this.StrategyTypeList[i].Id){
								this.strategyPrice2=this.StrategyTypeList[i].UnitPrice
							}
						}
						this.robotPrice=this.strategyPrice1+this.strategyPrice2+this.decisionPrice;
					}
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

			getPrice(){
				this.decisionPrice=this.decisionObj.UnitPrice;
				this.robotPrice=this.strategyPrice1+this.strategyPrice2+this.decisionPrice;
			},
		   	reset(){
				this.crbtParams.name='';
				this.crbtParams.introduction='';
				this.StrategyType1='';
				this.StrategyType2='';
				this.StrategyType3='';
				this.baseStrategy1='';
				this.baseStrategy2='';
				this.baseStrategy3='';
				this.strategy1.data_source_id='';
				this.strategy2.data_source_id='';
				this.strategy3.data_source_id='';
		   	},

		   	getDecisionOp(){//根据userid获取策略决策
		   		var params={};
		   		params.id=this.crbtParams.user_id;
		   		getDecisionOp(params).then(data => {
	              if (data.code == 200) {
					this.decisionList=data.data;
					if(this.decisionList.length>0){
						this.decisionPrice=this.decisionObj.UnitPrice;
						this.robotPrice=this.strategyPrice1+this.strategyPrice2+this.decisionPrice;
					}
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
		   	getStrategyType(){//根据userid获取基础策略类型
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
		   	getStrategyOp(val,index){//根据userid,策略类型，获取策略参数 下拉框
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
		   	toStrategy(){
		   		this.$router.push('/strategy')
		   	},
		   	getPairFilter(){//获取交易对
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
		   	getBaseToken(){//创建unit机器人时获取本位币
		   		var params={};
		   		params.filter_id=this.crbtParams.filter_id
		   		params.robot_type=this.crbtParams.robot_type
		   		for(var i=0;i<this.pairList.length;i++){
		   			if(this.crbtParams.filter_id==this.pairList[i].Id){
		   				this.crbtParams.pair=this.pairList[i].PairList;
		   			}
		   		}
		   		getBaseToken(params).then(data => {
	              if (data.code == 200) {
					this.crbtParams.base_currency=data.data;
					this.getDataSource();
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });

		   	},
		   	getDataSource(){//根据本位币获取data source
		   		var params={};
		   		params.base_currency=this.crbtParams.base_currency;
		   		getDataSource(params).then(data => {
	              if (data.code == 200) {
	              	this.strategy1.data_source_id='';
	              	this.strategy2.data_source_id='';
					this.sourceList=data.data;
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
		   	},
		   	getDataCycle1(){//根据本位币，交易对，数据源获取运算周期
		   		var params={};
		   		var pair="";
		   		for(var i=0;i<this.pairList.length;i++){
		   			if(this.pairList[i].Id==this.crbtParams.filter_id){
		   				pair=this.pairList[i].PairList;
		   			}
		   		}
		   		params.data_source=this.strategy1.data_source
		   		params.base_currency=this.crbtParams.base_currency;
		   		params.pair=pair;
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
	   		getDataCycle2(){//根据本位币，交易对，数据源获取运算周期（数据源data_source两者可能不同）
		   		var params={};
		   		var pair="";
		   		for(var i=0;i<this.pairList.length;i++){
		   			if(this.pairList[i].Id==this.crbtParams.filter_id){
		   				pair=this.pairList[i].PairList;
		   			}
		   		}
		   		params.pair=pair;
		   		params.data_source=this.strategy2.data_source
		   		params.base_currency=this.crbtParams.base_currency;
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
		   	createUnitRobot(){
		   		if(this.netValue<this.payNet){
		   			this.$toast.center(this.$t('market.accountNo'));
		   			return false;
		   		}
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
		   		if(this.pairSelected==1){
		   			params.buy_day=30
		   		}else if(this.pairSelected==2){
		   			params.buy_day=90
		   		}else{
		   			params.buy_day=365
		   		}
		   		params.decision_shelf_id=this.decisionObj.StrategyDecisionShelfId


		   		swal({
				  title: this.$t('netnew.ays')+"?",
				  text: this.$t('netnew.unitRbtCost')+this.totleNet+"NET,"+this.$t('netnew.hxCost')+this.payNet+"NET.",
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
				  		this.isloading=true;
						createUnitRobot(params).then(data =>{
							this.isloading=false;
		                   if (data.code == 200) {
							this.$toast.center(this.$t('netnew.csuccess'));
	                        localStorage.setItem('compSelected','unitRbt')
							this.$router.push('/robot/component')
		                   }else{
		                   	this.$toast.center(this.$t('msg.msg'+data.code));

		                   }
	                });


				  }
				})


		   	},
		   	toqfa(){
		   		this.$router.push('/questions')
		   	},
		   geturbInfoByid(val){
		   	var params ={}
		   	params.Id=val;
		   	geturbInfoByid(params).then(data => {
	              if (data.code == 200) {
					this.crbtParams=data.data;
					if(data.data.strategy_list.length<2){
							this.base_strategy1=data.data.strategy_list[0].base_strategy
							this.data_source_name1=data.data.strategy_list[0].data_source.Name

						}else{
							this.base_strategy1=data.data.strategy_list[0].base_strategy
							this.base_strategy2=data.data.strategy_list[1].base_strategy
							this.data_source_name1=data.data.strategy_list[0].data_source.Name
							this.data_source_name2=data.data.strategy_list[1].data_source.Name
						}
					if(this.crbtParams.decision_id){
						for(var i=0;this.decisionList.length;i++){
							if(this.decisionList[i].Id==this.crbtParams.decision_id){
								this.decisionObj=this.decisionList[i];
							}
						}
					}

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
//	                console.log(data)
	              }
	         });
		   },
		   geteurbInfoByid(val){//获取自定义unit Robot编辑信息
		   		var params ={}
			   	params.Id=val;
			   	geteurbInfoByid(params).then(data => {
		              if (data.code == 200) {
						this.crbtParams=data.data;
						this.user_unit_robot_id=data.data.user_unit_robot_id;
						if(data.data.strategy_list.length<2){
							this.StrategyType1=data.data.strategy_list[0].strategy_type_id
							this.getStrategyOp(this.StrategyType1,1);
							this.strategy1.data_source_id=data.data.strategy_list[0].data_source_id
						}else{
							this.StrategyType1=data.data.strategy_list[0].strategy_type_id
							this.StrategyType2=data.data.strategy_list[1].strategy_type_id
							this.getStrategyOp(this.StrategyType1,1);
							this.getStrategyOp(this.StrategyType1,2);
							this.strategy1.data_source_id=data.data.strategy_list[0].data_source_id
							this.strategy2.data_source_id=data.data.strategy_list[1].data_source_id
						}

		              } else {
		              	this.$toast.center(this.$t('msg.msg'+data.code));
		              }
		         });
		   },


		}
	}
</script>

<style scoped="scoped">

	.crbt-bigTit{
		color: #fff ;
		font-size:25px ;
	    padding-left: 51px;
	    padding-top: 0px;
	    padding-bottom: 20px;
	    padding-left: 0px;
	    border-bottom:none ;
	    margin-top: 0px;
	}
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
</style>
