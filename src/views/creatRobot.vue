<template>
	<section class="mail-list">
					<form class="form-horizontal adminex-form" >
					<h1 class="crbt-bigTit">
                		{{$t('netnew.MyRobotSide2')}}
                	</h1>
                    <div class="panel" style="margin-bottom: 1px;">

                        <header class="netcrb-header" style="margin-top: 20px;">
                            {{$t('netnew.BasicInformation')}}
                        </header>
                        <div class="panel-body">

                                <div class="lg-width crbt-inputLine" >
                                    <label class="lg-width crbt-leftlabel" > {{$t('netnew.RobotName')}} </label>
                                    <div class="lg-width crbt-input">
                                        <input type="text" class="form-control" :class="{'crbt-redrobder':!crbtParams.robot_info.robot_name}" v-model="crbtParams.robot_info.robot_name" maxlength="20" :disabled="ifview">
                                        <p class="help-block" style="color: red;margin-bottom: 0px;padding-bottom: 0px;" v-show="!crbtParams.robot_info.robot_name">{{$t('netnew.PfiRN')}}</p>
                                    </div>
                                </div>
                                <!--<div class="lg-width crbt-inputLine" >
                                    <label class="lg-width crbt-leftlabel">Robot Icon</label>
                                    <div class="lg-width crbt-input">
                                       <div class="input-group m-bot15" style="margin-bottom: 0px;">
                                            <button type="button" class="btn btn-default" style="padding: 9px 12px;" @click="upload">upload</button>
                                    		<label style="font-size: 14px;color: #909499;font-weight: 500;margin-left: 5px;">{{imgName}}</label>
                                    		<input type="file" name="file_1" id="fileToUpload"  ref="file1" @change="changeimage($event)" style="display: none;" :disabled="ifview">
                                    	</div>
                                    </div>
                                </div>-->
                                <div class=" lg-width crbt-inputLine"  >
                                	<label class="lg-width crbt-leftlabel">{{$t('netnew.TradeType')}}</label>
                                    <div class="lg-width crbt-input">
                                        <select class="form-controls" v-model="crbtParams.robot_info.robot_type" @change="changeUnitRobotList" :disabled="ifview">
                                            <option value="Long">{{$t('netnew.typelong')}}</option>
                                            <option value="Short">{{$t('netnew.typeshort')}}</option>
                                            <!--<option value="Hedge">{{$t('netnew.Hedge')}}</option>
                                            <option value="Arbitrage">{{$t('netnew.Arbitrage')}}</option>-->
                                        </select>
                                    </div>
                             	</div>
                             	<div class=" lg-width crbt-inputLine"  >
                                	<label class="lg-width crbt-leftlabel">{{$t('netnew.RobotRange')}}</label>
                                    <div class="lg-width crbt-input">
                                        <select class="form-controls" v-model="crbtParams.robot_info.robot_range" :disabled="ifview">
                                            <!--<option value="public">Public</option>-->
                                            <option value="private">{{$t('netnew.Private')}}</option>
                                        </select>
                                    </div>
                             	</div>

                                <div class=" lg-width crbt-inputLine"  >
                                    <label class="lg-width crbt-leftlabel">{{$t('netnew.OperationFrequency')}}</label>
                                    <div class="lg-width crbt-input">
                                    	<multiselect :disabled="ifview" tag-placeholder="Add this as new tag" placeholder="Unselect" label="name" track-by="value" :value="value1" :options="options1"  @input="onChange1" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
                                        <!--<select class="form-controls" v-model="crbtParams.robot_info.operation_frequency" @change="changeUnitRobotList" :disabled="ifview">
                                            <option value="1d">1 Day</option>
                                            <option value="1h">1 Hour</option>
                                            <option value="30m">30 Min</option>
                                            <option value="15m">15 Min</option>
                                            <option value="5m">5 Min</option>
                                        </select>-->
                                    </div>
                                </div>
                                <div class=" lg-width crbt-inputLine"  >
                                    <label class="lg-width crbt-leftlabel">{{$t('netnew.BaseCurrency')}}</label>
                                    <div class="lg-width crbt-input">
                                        <select class="form-controls" v-model="crbtParams.robot_info.base_currency" @change="changeUnitRobotList"  :disabled="ifview">
                                            <option value="ETH">ETH</option>
                                            <option value="USDT">USDT</option>
                                            <option value="BTC">BTC</option>
                                        </select>
                                    </div>
                                </div>
                                <div class=" lg-width crbt-inputLine"  >
                                    <label class="lg-width crbt-leftlabel">{{$t('netnew.Description')}}</label>
                                    <div class="lg-width crbt-input">
                                        <textarea rows="3" class="form-control" style="resize:none" maxlength="255" v-model="crbtParams.robot_info.description" :disabled="ifview"></textarea>
                                    </div>
                                </div>
                                <div class=" lg-width crbt-inputLine"  >
                           		</div>
                        </div>
                    </div>
                    <div class="panel" style="margin-bottom: 0px;">
                        <header class="netcrb-header">
                            {{$t('netnew.ComponentInformation')}}
                        </header>
                        <div class="panel-body">

                                <div class=" lg-width crbt-inputLine"  >
                                    <label class="lg-width crbt-leftlabel">{{$t('netnew.multipleChoices')}}</label>
                                    <div class="lg-width crbt-input">
										<multiselect :disabled="ifview" tag-placeholder="Add this as new tag" placeholder="Unselect" label="name" track-by="Id" :value="value2" :options="options2" :custom-label="customLabe2" @input="onChange2" :multiple="true" :taggable="true" @tag="addTag"></multiselect>
		                            </div>
                                </div>
                                <div class=" lg-width crbt-inputLine"  >
                               		<label class="lg-width crbt-leftlabel">{{$t('netnew.RiskManagement')}}</label>
                                    <div class="lg-width crbt-input" >
                                        <select class="form-controls"  v-model="crbtParams.robot_info.risk_management_id" :disabled="ifview">
                                        	<!--<option value="default">default</option>-->
                                    		<option v-for="list in optionsRM" :value="list.Id" v-if="$i18n.locale=='zh-CN'">{{list.ControlLocalName}}</option>
                                    		<option v-for="list in optionsRM" :value="list.Id" v-if="$i18n.locale!='zh-CN'">{{list.ControlParam}}</option>
                                     	</select>
                                    </div>
                                </div>
                                <div class=" lg-width crbt-inputLine"  >
                               		<label class="lg-width crbt-leftlabel">{{$t('netnew.RobotWeighting')}}</label>
                                    <div class="lg-width crbt-input" >
                                        <select class="form-controls"  v-model="crbtParams.robot_info.robot_weighting_id" :disabled="ifview">
                                        	<!--<option value="default">default</option>-->
                                            <option v-for="list in optionsRW" :value="list.Id" v-if="$i18n.locale=='zh-CN'">{{list.ControlLocalName}}</option>
                                            <option v-for="list in optionsRW" :value="list.Id" v-if="$i18n.locale!='zh-CN'">{{list.ControlParam}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class=" lg-width crbt-inputLine"  >
                               		<label class="lg-width crbt-leftlabel">{{$t('netnew.FundOptimization')}}</label>
                                    <div class="lg-width crbt-input" >
                                         <select class="form-controls" v-model="crbtParams.robot_info.fund_optimization_id" :disabled="ifview">
                                         	<!--<option value="default">default</option>-->
                                            <option v-for="list in optionsFO" :value="list.Id" v-if="$i18n.locale!='zh-CN'">{{list.ControlParam}}</option>
                                            <option v-for="list in optionsFO" :value="list.Id" v-if="$i18n.locale=='zh-CN'">{{list.ControlLocalName}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class=" lg-width crbt-inputLine"  >
                               		<label class="lg-width crbt-leftlabel">{{$t('netnew.OrderExecution')}}</label>
                                    <div class="lg-width crbt-input" >
                                         <select class="form-controls"  v-model="crbtParams.robot_info.order_execution_id" :disabled="ifview">
                                         	<!--<option value="default">default</option>-->
                                            <option v-for="list in optionsOE" :value="list.Id" v-if="$i18n.locale!='zh-CN'">{{list.ControlParam}}</option>
                                            <option v-for="list in optionsOE" :value="list.Id" v-if="$i18n.locale=='zh-CN'">{{list.ControlLocalName}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class=" lg-width crbt-inputLine"  >
                                	<div class="lg-width" style="width: 325px;margin-left: 35px;">
                                		<span v-show="$i18n.locale=='zh-CN'" style="font-size: 16px;color: #fff;line-height: 56px;">{{$t('netnew.rbtCostSum')}}:{{robotPrice}} NET/{{$t('market.day')}}</span>
                                	</div>
                                    <div class="lg-width" style="margin-left: 29px;">
                                    	<button type="button" class="btn crbt-btn" @click="createRobot()" :disabled="!crbtParams.robot_info.robot_name||value2.length==0||ifview||isloading" >{{$t('netnew.Submit')}}</button>
                                        <button type="button" class="btn crbt-btn" style="margin-left: 12px;" @click="reset" :disabled="ifview">{{$t('netnew.Reset')}}</button>
                                    </div>
                                </div>

                        </div>
                    </div>
                 </form>
                </section>
</template>

<script>
	import { getUserInfo,createRobot,getcrbtData,getUnitRobotList,getBaseControl,getrbInfoByid,getRobotType} from '../api/api';
	export default {
		data() {
			return {
					type:'',
			      options2: [
			      ],
			      options1: [
			        {name:"6Hour",value:"6h"},
			        {name:"4Hour",value:"4h"},
			        {name:"1Hour",value:"1h"},
			        {name:"30Min",value:"30m"},
			        {name:"15Min",value:"15m"},
			      ],
			      crbtParams:{
			      	icon_url:'',
			      	robot_info:{
			      		robot_type:"Long",
			      		robot_range:"private",
			      		operation_frequency:"1h",
			      		base_currency:"ETH",
			      		risk_management_id:"default",
			      		robot_weighting_id:"default",
			      		fund_optimization_id:"default",
			      		order_execution_id:"default",
			      	}
			      },
			      otherPrice:0,
			      unitPrice:0,
			      robotPrice:0,
			     dsList:[],
			     value1:[
			     	{name:"1Hour",value:"1h"},
			     ],
			     value2:[],
			      imgName:'',
			     optionsDMR:[],
			     optionsRM:[],
			     optionsAA:[],
			     optionsRW:[],
			     isloading:false,
			     optionsFO:[],
			     optionsOSR:[],
			     optionsOE:[],
			     ifview:false,
			}
		},
		mounted() {
//			$('.mail-list').css("height",document.documentElement.clientHeight-170+"px");
			this.getuseInfo();
//			this.getPairList('ETH');


		},
		methods: {
			addTag (newTag) {
		      const tag = {
		        name: newTag,
		        code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
		      }
		      this.options.push(tag)
		      this.value.push(tag)
		   },

		   upload(){
		   	$('#fileToUpload').click();
		   },
		   	getObjectURL(file) {
				var url = null ;
				 // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
				 if (window.createObjectURL!=undefined) { // basic
				     url = window.createObjectURL(file) ;
				 } else if (window.URL!=undefined) { // mozilla(firefox)
				     url = window.URL.createObjectURL(file) ;
				 } else if (window.webkitURL!=undefined) { // webkit or chrome
				     url = window.webkitURL.createObjectURL(file) ;
				 }
				 return url ;
			},
		   	changeimage (event) {
			    // 调用上面的方法
			 	var objurl = this.getObjectURL(event.target.files[0])
	      		this.crbtParams.icon_url = this.$refs.file1.files[0];
	      		this.imgName=$('#fileToUpload').val();

			},
			getuseInfo(){
				getUserInfo(this.empty).then(data => {
	              if (data.success == 0) {
					this.crbtParams.user_id=data.data.userId;
					this.crbtParams.user_name=data.data.nickName;
					this.getRobotType();
					this.getBaseControl('Risk Management');
					this.getBaseControl('Robot Weighting');
					this.getBaseControl('Fund Optimization');
					this.getBaseControl('Order Execution');

					this.getParams();

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
			},
			getUnitRobotList(){
				var params=this.crbtParams.robot_info;
				params.user_id=this.crbtParams.user_id;
				params.frequency=[];
				for(var i=0;i<this.value1.length;i++){
					params.frequency.push(this.value1[i].value);
				}
				getUnitRobotList(params).then(data => {
	              if (data.code == 200) {
	              	if(data.data!=null){
	              		this.options2=data.data;
	              	}else{
	              		this.options2=[];
	              		this.value2=[];
	              		this.$toast.center(this.$t('netnew.nounitrbt'));
	              	}

	              } else {
	              	this.options2=[];
	              	this.value2=[];
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
			},
			changeUnitRobotList(){
				var params=this.crbtParams.robot_info;
				params.user_id=this.crbtParams.user_id;
				params.frequency=[];
				for(var i=0;i<this.value1.length;i++){
					params.frequency.push(this.value1[i].value);
				}
//				params.frequency=this.value1;
				getUnitRobotList(params).then(data => {
	              if (data.code == 200) {
//	              	console.log(data.data);
	              	if(data.data!=null){
	              		this.value2=[];
	              		this.options2=data.data;
	              	}else{
	              		this.options2=[];
	              		this.value2=[];
	              		this.$toast.center(this.$t('netnew.nounitrbt'));
	              	}

	              } else {
	              	this.options2=[];
	              	this.value2=[];
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
			},
			getRobotType(){
				var params={};
				params.user_id=this.crbtParams.user_id;
				getRobotType(params).then(data => {
	              if (data.code == 200) {
	              	if(data.data.robot_type.length>0){
	              		console.log(data);
	              		this.crbtParams.robot_info.robot_type=data.data.robot_type[0];
	              		this.crbtParams.robot_info.base_currency=data.data.base_currency[0];
	              		this.getUnitRobotList();
	              	}
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
	              }
	            });
			},
			createRobot(){
				this.crbtParams.robot_info.robot_local_name=this.crbtParams.robot_info.robot_name;
				this.crbtParams.robot_info.unit_robots=this.value2;

				let formData = new FormData();
                formData.append('user_id', this.crbtParams.user_id);
                formData.append('user_name',  this.crbtParams.user_name);
                formData.append('robot_info',  JSON.stringify(this.crbtParams.robot_info));
                formData.append('icon_url',this.crbtParams.icon_url);
                if(this.type=='edit'){
					this.crbtParams.robot_id=localStorage.getItem('rbtinId');
					formData.append('robot_id',this.crbtParams.robot_id);
				}
				this.isloading=true;
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };
                createRobot( formData, config).then(data =>{
                	this.isloading=false;
                   if (data.code == 200) {
//						console.log(data);
					if(this.type!='edit'){
						this.$toast.center(this.$t('netnew.csuccess'));
					}else{
						this.$toast.center(this.$t('netnew.edsuccess'));
					}


					this.$router.push('/robot/factory')
                   }else{
                   	this.$toast.center(this.$t('msg.msg'+data.code));

                   }
                });


			},
		 	customLabel ({ name,LocalName }) {
		 		if(this.$i18n.locale=='zh-CN'){
		 			return `${LocalName}`
		 		}else{
		 			return `${name}`
		 		}


		   	},
		   	customLabe2 ({ Name,LocalName,pair_filter_name }) {
		   		if(this.$i18n.locale=='zh-CN'){
		   			return `${LocalName} - ${pair_filter_name}`
		   		}else{
		   			return `${Name} - ${pair_filter_name}`
		   		}

		   	},
		   	onChange1(value){
		   		var list=[];
		   		for(var i=0;i<value.length;i++){
		   			list.push(value[i]);
		   		}
		   		this.value1=list;
		   		this.changeUnitRobotList();
		   	},
		   	onChange2(value){
		   		var price=0;
		   		for(var i=0;i<value.length;i++){
		   			price=price+value[i].unit_price
		   		}
		   		this.unitPrice=price;
		   		this.robotPrice=this.otherPrice+this.unitPrice;
		   		this.value2=value;
		   	},
		   	getBaseControl(val){
		   		var params = {};
				params.type_name=val;
				params.user_id=this.crbtParams.user_id;
				getBaseControl(params).then(data => {
	              if (data.code == 200) {
					if(val=='Risk Management'){
						this.optionsRM=data.data;
						if(data.data.length>0){
							this.crbtParams.robot_info.risk_management_id=data.data[0].Id;
							this.otherPrice=this.otherPrice+data.data[0].unit_price;
						}
					}
					else if(val=='Robot Weighting'){
						this.optionsRW=data.data;
						if(data.data.length>0){
							this.crbtParams.robot_info.robot_weighting_id=data.data[0].Id;
							this.otherPrice=this.otherPrice+data.data[0].unit_price;
						}
					}
					else if(val=='Fund Optimization'){
						this.optionsFO=data.data;
						if(data.data.length>0){
							this.crbtParams.robot_info.fund_optimization_id=data.data[0].Id;
							this.otherPrice=this.otherPrice+data.data[0].unit_price;
						}
					}

					else if(val=='Order Execution'){
						this.optionsOE=data.data;
						if(data.data.length>0){
							this.crbtParams.robot_info.order_execution_id=data.data[0].Id;
							this.otherPrice=this.otherPrice+data.data[0].unit_price;
						}
					}
					this.robotPrice=this.otherPrice+this.unitPrice;
	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
//	                console.log(data)
	              }
	            });
		   },
		   getrbInfoByid(val){
		   	var params ={}
		   	params.robot_id=val;
		   	getrbInfoByid(params).then(data => {
	              if (data.code == 200) {
//					console.log(data);
					this.crbtParams.robot_info=data.data
					this.value2=data.data.unit_robots;
					var price=0;
			   		for(var i=0;i<this.value2.length;i++){
			   			price=price+this.value2[i].unit_price
			   		}
			   		this.unitPrice=price;
			   		this.robotPrice=this.otherPrice+this.unitPrice;

	              } else {
	              	this.$toast.center(this.$t('msg.msg'+data.code));
//	                console.log(data)
	              }
	         });
		   },
		   getParams(){
		   		this.type=this.$route.params.type
				if(this.$route.params.type=='create'){
					localStorage.removeItem('rbtinId');
					localStorage.setItem('rbtinType',this.$route.params.type);
				}else if(this.$route.params.type=='edit'){
					localStorage.setItem('rbtinId',this.$route.params.id);
					localStorage.setItem('rbtinType',this.$route.params.type);
					this.getrbInfoByid(this.$route.params.id);
				}else if(this.$route.params.type=='view'){
					localStorage.setItem('rbtinId',this.$route.params.id);
					localStorage.setItem('rbtinType',this.$route.params.type);

					this.getrbInfoByid(this.$route.params.id);
					this.ifview=true
				}else{

					if(localStorage.getItem('rbtinType')=='edit'){
						this.getrbInfoByid(localStorage.getItem('rbtinId'));
						this.type='edit'
					}else if(localStorage.getItem('rbtinType')=='view'){
						this.getrbInfoByid(localStorage.getItem('rbtinId'));
						this.ifview=true
						this.type='view'
					}else{
						this.type='create'
					}
				}

			},
		   	reset(){
		   		this.crbtParams.robot_info.robot_name='';
		   		this.crbtParams.robot_info.introduction='';
		   		this.value1=[];
		   		this.value2=[];
		   	}
		}
	}
</script>

<style scoped="scoped">
	.crbt-bigTit{
		color: #fff ;
		font-size:25px ;
	    padding-left: 51px;
	    padding-top: 9px;
	    padding-bottom: 25px;
	    border-bottom:1px solid #ffffff12 ;
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
