<template>
	<div class="lg-width" style="width:100%;min-height: 667px;position: relative;background: #000;">
		<div class="lg-row" >
			<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
				<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('market.marketSubscribe')}}</span>
				<img src="../assets/img/menuClose@2x.png" style="height: 20px;float: right;margin-right: 15px;margin-top: 20px;" alt="" @click="close">
			</div>
			<div style="padding-left: 28px;padding-right: 28px;">
				<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
					<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
						<span style="font-size:16px;color: #718EBD;">{{$t('market.theNameMarket')}}</span>
					</div>
					<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;margin-bottom: 15px;">
						<span v-show="$i18n.locale=='en-US'" style="font-size: 16px;color: #FFFFFF;" >{{buyRbtParams.RobotName}}</span>
						<span v-show="$i18n.locale=='zh-CN'" style="font-size: 16px;color: #FFFFFF;" >{{buyRbtParams.RobotLocalName}}</span>
					</div>
				</div>
				<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
					<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
						<span style="font-size:16px;color: #718EBD;">{{$t('market.account')}}</span>
					</div>
					<div class="lg-width" style="width: 70%;margin-top: 30px;text-align: left;margin-left: 5%;">
						<select autocomplete="off" class="exchange" style="width: 200px;line-height: 35px;border: none;background: none;font-size: 16px;color: #fff;" @change="initAccount(buyRbtParams.account_id)" v-model="buyRbtParams.account_id">
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
						<a class="pair-time" style="margin-left: 18%;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.aMonth')}}</a>
						<a class="pair-time" style="margin-left: 18%;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
					</div>
				</div>
				<div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
					<div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
						<span style="font-size:16px;color: #718EBD;">{{$t('market.buyshare')}}</span>
					</div>
					<div class="lg-width" style="width: 68%;margin-top: 35px;text-align: left;margin-left: 3%;">
						<!--<input type="number" min="1" id="syfe"  style="text-align:center;width: 100px;margin-right:5px;height: 35px;margin-top: -7px;border:1px solid #dcdcdc"  />-->
						<input type="number" min="0" onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" id="syfe" style="text-align: center;font-size: 16px;color: #fff;width: 100px;margin-right: 5px;line-height: 35px;margin-top: -11px;background: none;border: none;"  v-model="buyRbtParams.amount" @change="changeShare" />

						<span style="font-size: 16px;color: #718EBD;">×{{buyRbtParams.base_multiple}}{{buyRbtParams.BaseCurrency}}</span>

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
				<div style="display: table;width: 100%;">
					<input class="boxs" checked="checked"  style="margin-top: 12px; margin-right: 5px;margin-bottom: 15px;" type="checkBox" @change="changeAuto">
					<!--<input name="checkbox" checked="checked" value="0" type="checkbox" class="tui-checkbox" v-model="buyRbtParams.auto_renew"  style="margin-top: 30px; margin-right: 5px;margin-bottom: 15px;">-->
					<span style="color: #718EBD;font-size: 14px">{{ $t("modalbox.renewal") }}</span>
				</div>

			</div>
			<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 5px;position: absolute;left: 0;bottom: 0;">
				<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;margin-left: 57px;">{{buyRbtParams.pay}}<input type="hidden" v-model="originPrice"/></span>
				<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
				<button :class="{'card-btm':isPair==false,'unit-cantpair':isPair==true}" @click="buyRbt()" :disabled="isPair" style="position: relative;float: right;">
					{{$t('market.confirm')}}
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	  import { getUserInfo, getBuyInfo ,initAccount,buyRbt} from '../api/api';

    export default {
        data() {
            return {
            	useList:{},
            	originPrice: "",
            	lastUrl:"",
	     	   	buyRbtParams:{
                	pay:0,
                	account_id:"",
                	day_type:"week",
                	auto_renew:true,
                	amount:0,
                	RobotName:"",
                },
                isPair:false,
         		buyInfo: {
					name: "",
					accounts: [],
				},
				pairSelected:1,
            }
        },
        beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.lastUrl = from.path;
			})
		},
        mounted() {
        	this.$nextTick(() => {
				this.getuseInfo();
			})

        },
        methods: {
            getuseInfo(){
                getUserInfo().then(data => {
                    if (data.success == 0) {
                        this.useList=data.data;
                        if(this.lastUrl=="/m_index"){
                        	this.getparams2();
                        }else{
                        	this.getparams();
                        }

                    } else {
                        this.$toast.center(data.message);
                    }
                });
            },
          	changeAuto(){
            	this.buyRbtParams.auto_renew=!this.buyRbtParams.auto_renew;
            },
            changeShare(){
            	if(this.buyRbtParams.day_type=="week"){
            		this.buyRbtParams.pay=this.buyRbtParams.amount*7*this.buyRbtParams.UnitPrice
            	}else if(this.buyRbtParams.day_type=="month"){
            		this.buyRbtParams.pay=this.buyRbtParams.amount*30*this.buyRbtParams.UnitPrice
            	}else if(this.buyRbtParams.day_type=="year"){
            		this.buyRbtParams.pay=this.buyRbtParams.amount*365*this.buyRbtParams.UnitPrice
            	}
            },
            getparams(){
            	var params={};
            	this.buyRbtParams.pay=0;
            	this.buyRbtParams.amount=0;
            	this.chosedRbtId=this.$route.params.iteam.Id;
            	params.robot_id=this.$route.params.iteam.Id;
            	params.user_id=this.useList.userId;
            	this.buyRbtParams.user_id=this.useList.userId
            	this.buyRbtParams.robot_id=this.$route.params.iteam.Id;
            	this.buyRbtParams.RobotName=this.$route.params.iteam.RobotName;
            	this.buyRbtParams.RobotLocalName=this.$route.params.iteam.RobotLocalName;
            	this.buyRbtParams.base_multiple=this.$route.params.iteam.base_multiple;
            	this.buyRbtParams.UnitPrice=this.$route.params.iteam.UnitPrice;
            	this.buyRbtParams.BaseCurrency=this.$route.params.iteam.BaseCurrency;
        	  	getBuyInfo(params).then(data => {
                    if (data.code = 200) {
                    	this.buyInfo=data.data;
                       if(this.buyInfo.accounts){
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
            getparams2(){
            	var params={};
            	this.buyRbtParams.pay=0;
            	this.buyRbtParams.amount=0;
            	this.chosedRbtId=this.$route.params.iteam.id;
            	params.robot_id=this.$route.params.iteam.id;
            	params.user_id=this.useList.userId;
            	this.buyRbtParams.user_id=this.useList.userId
            	this.buyRbtParams.robot_id=this.$route.params.iteam.id;
            	this.buyRbtParams.RobotName=this.$route.params.iteam.RobotName;
            	this.buyRbtParams.RobotLocalName=this.$route.params.iteam.local_name;
            	this.buyRbtParams.base_multiple=this.$route.params.iteam.base_multiple;
            	this.buyRbtParams.UnitPrice=this.$route.params.iteam.UnitPrice;
            	this.buyRbtParams.BaseCurrency=this.$route.params.iteam.BaseCurrency;
        	  	getBuyInfo(params).then(data => {
                    if (data.code = 200) {
                    	this.buyInfo=data.data;
                       if(this.buyInfo.accounts){
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
            close(){
            	if(this.lastUrl=="/m_index"){
            		this.$router.push('/m_index')
            	}else{
            		this.$router.push('/m_RobotMarket')
            	}

			},
            choseTime(id) {
                this.pairSelected = id;
                var params={};
                params.robot_id=this.chosedRbtId;
                if(id==1){
                	this.buyRbtParams.day_type="week";
                	params.day_type="week"
                	this.buyRbtParams.pay=this.buyRbtParams.amount*7*this.buyRbtParams.UnitPrice
                }else if(id==2){
                	this.buyRbtParams.day_type="month";
                	params.day_type="month"
                	this.buyRbtParams.pay=this.buyRbtParams.amount*30*this.buyRbtParams.UnitPrice
                }
                else if(id==3){
                	this.buyRbtParams.day_type="year";
                	params.day_type="year"
                	this.buyRbtParams.pay=this.buyRbtParams.amount*365*this.buyRbtParams.UnitPrice
                }


            },
            changeShare(){
            	if(this.buyRbtParams.day_type=="week"){
            		this.buyRbtParams.pay=this.buyRbtParams.amount*7*this.buyRbtParams.UnitPrice
            	}else if(this.buyRbtParams.day_type=="month"){
            		this.buyRbtParams.pay=this.buyRbtParams.amount*30*this.buyRbtParams.UnitPrice
            	}else if(this.buyRbtParams.day_type=="year"){
            		this.buyRbtParams.pay=this.buyRbtParams.amount*365*this.buyRbtParams.UnitPrice
            	}
            },
            initAccount(val){
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
           	 buyRbt(){


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
							this.$toast.center(this.$t('netnew.SubscribeSuccess'));
							$(".close").click();
						} else {
							this.$toast.center(this.$t('msg.msg'+data.code));

						}
					});

				  }
				})




          	 },



        },


    }
</script>

<style>


</style>
