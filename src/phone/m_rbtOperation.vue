<template>
	<div class="lg-width" style="width:100%;min-height: 667px;position: relative;background: #000;">
		<div class="lg-row" >
			<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
				<span style="color:#718EBD;font-size: 18px;line-height: 67px;" v-show="instanceModal==1">{{$t('netnew.xufei')}}</span>
				<span style="color:#718EBD;font-size: 18px;line-height: 67px;" v-show="instanceModal==2">{{$t('netnew.zengchi')}}</span>
				<img src="../assets/img/menuClose@2x.png" style="height: 20px;float: right;margin-right: 15px;margin-top: 20px;" alt="" @click="close">
			</div>
			<div v-show="instanceModal==1">
				<div style="padding-left: 27px;padding-right: 27px;">
					<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
						<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
							<span style="font-size:16px;color: #718EBD;">{{$t('market.theNameMarket')}}</span>
						</div>
						<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;margin-bottom: 15px;">
							<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale=='en-US'" >{{renewParams.RobotName}}</span>
							<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale=='zh-CN'">{{renewParams.RobotLocalName}}</span>

						</div>
					</div>
					<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
						<div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
							<span style="font-size:16px;color: #718EBD;"> {{$t('market.Numberdays')}} </span>
						</div>
						<div class="lg-width" style="width: 74%;margin-top: 30px;text-align: left;margin-left: 2%;">
							<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aWeek')}}</a>
							<a class="pair-time" style="margin-left: 20%;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.aMonth')}}</a>
							<a class="pair-time" style="margin-left: 20%;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
						</div>
					</div>
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
				</div>
				<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 5px;position: absolute;left: 0;bottom: 0;">
					<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;margin-left: 57px;">{{renewParams.pay}}</span>
					<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
					<button class="card-btm"  style="position: relative;float: right;" @click="startRenew">
						{{$t('market.confirm')}}
					</button>
				</div>
			</div>
			<div  v-show="instanceModal==2">

				<div style="padding-left: 27px;padding-right: 27px;">
					<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
						<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
							<span style="font-size:16px;color: #718EBD;">{{$t('market.theNameMarket')}}</span>
						</div>
						<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;margin-bottom: 15px;">
							<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale=='en-US'" >{{addlimitParams.RobotName}}</span>
							<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale=='zh-CN'">{{addlimitParams.RobotLocalName}}</span>
						</div>
					</div>
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
					<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
							<div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.zcShare')}}</span>
							</div>
							<div class="lg-width" style="width: 68%;margin-top: 35px;text-align: left;margin-left: 3%;">
								<!--<input type="number" min="1" id="syfe"  style="text-align:center;width: 100px;margin-right:5px;height: 35px;margin-top: -7px;border:1px solid #dcdcdc"  />-->
								<input type="number" min="0" v-model="addLimit" @change="getPrice" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" id="syfe" style="text-align: center;font-size: 16px;color: #fff;width: 100px;margin-right: 5px;line-height: 35px;margin-top: -11px;background: none;border: none;"   />

								<span style="font-size: 16px;color: #718EBD;">×{{addlimitParams.Multiple}}{{addlimitParams.StandardCoin}}</span>

							</div>
						</div>

				</div>
				<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 5px;position: absolute;left: 0;bottom: 0;">
					<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;margin-left: 57px;">{{addLimitPrice}}</span>
					<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
					<button class="card-btm"  style="position: relative;float: right;" @click="toAddLimit">
						{{$t('market.confirm')}}
					</button>
				</div>


			</div>
		</div>
	</div>
</template>

<script>
	  import { getUserInfo,startRenew,getBuyInfo,toAddLimit,getInstanceRD} from '../api/api';

    export default {
        data() {
            return {
            	renewParams:{},
            	instanceModal:1,
            	pairSelected:1,
            	addlimitParams:{},
            	addLimit:0,
            	addLimitPrice:0,
            	buyInfo:{
            		net_value:"",
            	},
            }
        },

        mounted() {
        	this.instanceModal=this.$route.params.flag;
        	this.getuseInfo();

        },
        methods: {
            getuseInfo(){
                getUserInfo().then(data => {
                    if (data.success == 0) {
                        this.useList=data.data;
                        if(this.instanceModal==1){
                        	this.getparams();
                        }else{
                        	this.getparams2();
                        }


                    } else {
                        this.$toast.center(data.message);
                    }
                });
            },
            close(){
            	history.back();
			},
   			getPrice(){
            	this.addLimitPrice=this.addlimitParams.remainDate*this.addLimit*this.addlimitParams.UnitPrice;
            },
            choseTime(id) {
                this.pairSelected = id;
                if(id==1){
                	this.renewParams.day_type="week";
                	this.renewParams.day_type="week";
                	this.renewParams.pay=(this.renewParams.Limit/this.renewParams.Multiple)*7*this.renewParams.UnitPrice
                }else if(id==2){
                	this.renewParams.day_type="month";
                	this.renewParams.day_type="month";
                	this.renewParams.pay=(this.renewParams.Limit/this.renewParams.Multiple)*30*this.renewParams.UnitPrice
                }
                else if(id==3){
                	this.renewParams.day_type="year";
                	this.renewParams.day_type="year";
                	this.renewParams.pay=(this.renewParams.Limit/this.renewParams.Multiple)*365*this.renewParams.UnitPrice
                }


            },
            toAddLimit(){
            	var params={}
            	params.add_amount=this.addLimit;
            	params.instance_id=this.addlimitParams.InstanceId;
	           	toAddLimit(params).then(data => {
                    if (data.code == 200) {
                        if(this.$i18n.locale== 'zh-CN'){
							this.$toast.center(this.$t('netnew.zcSuccess'));
						}else{
							this.$toast.center('Increase success');
						}
						history.back();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            getInstanceRD(){
            	var params={};
            	params.instance_id=this.addlimitParams.InstanceId;
            	getInstanceRD(params).then(data => {
                    if (data.code == 200) {
						this.addlimitParams.remainDate=data.data;
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            getBuyInfo(val){
            	var params={};
            	params.robot_id=val.RobotId;
            	params.user_id=this.useList.user_id;
            	getBuyInfo(params).then(data => {
                    if (data.code = 200) {
                    	this.buyInfo=data.data;
                    	this.choseTime(1);
                    }else{
                    	this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            startRenew(){
            	var params={}
            	params.day_type=this.renewParams.day_type;
            	params.instance_id=this.renewParams.InstanceId;
	           	startRenew(params).then(data => {
                    if (data.code == 200) {
                        if(this.$i18n.locale== 'zh-CN'){
							this.$toast.center(this.$t('netnew.xfSuccess'));
						}else{
							this.$toast.center('Renewal of success');
						}
						history.back();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
          	getparams(){

            	this.renewParams=this.$route.params.iteam;
            	this.getBuyInfo(this.renewParams);
            },
            getparams2(){
            	this.instanceModal=2;
            	this.addLimit=0;
            	this.addLimitPrice=0;
            	this.addlimitParams=this.renewParams=this.$route.params.iteam;
            	this.getBuyInfo(this.addlimitParams);
            	this.getInstanceRD();
            },


        },


    }
</script>

<style>


</style>
