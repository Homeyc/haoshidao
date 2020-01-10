<template>
	<div class="login-box" style="min-height: 667px;">		
		<div style="text-align: center;padding-top: 20px;margin-bottom: 35px;">	
			<span style="color: #718EBD;font-size: 22px;margin-left: 10%;">{{$t('net.resetpassword')}}</span>
			<img src="../assets/img/menuClose@2x.png" style="height: 20px;float: right;margin-right: 15px;" alt="" @click="close">
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 25px;padding:0 10%;">
			<div class="lg-width" v-model="forgetpwData.countryCode" style="width: 30% ;">
				<select  class="form-control lg-border">
					<option value="86">{{$t('net.china')}}</option>
					<option value="1">{{$t('net.us')}}</option>
					<option value="1">{{$t('net.canada')}}</option>
					<option value="7">{{$t('net.russia')}}</option>
					<option value="44">{{$t('net.unitedkingdom')}}</option>
					<option value="79">{{$t('net.germany')}}</option>
					<option value="81">{{$t('net.japan')}}</option>
					<option value="82">{{$t('net.southkorea')}}</option>
				</select>
			</div>
			<div class="lg-width" style="width:65%;margin-left: 5%;">
				<input type="text" class="form-control lg-border" :placeholder="$t('net.phonenumber')" v-model="forgetpwData.phone" >
			</div>
			<div class="lg-width" style="width:65%;margin-right: 5%;margin-top: 15px;">
				<input type="text" class="form-control lg-border":placeholder="$t('net.verificationCode')" v-model="forgetpwData.code">
				<!--<input type="text" id="isCk"  style="display: none;">-->
			</div>
			<div class="lg-width" style="width:30%;text-align: center;margin-top: 15px;">
				<button id="btn" style="height: 40px;" class="btn bt-getcode" type="button" @click="getMessage()">{{$t('net.send')}}<span v-show="!isGet">({{messageCD}}s)</span></button>
			</div>
			<div class="lg-width" style="width:100%;margin-top: 15px;">
				<input type="password" class="form-control lg-border" :placeholder="$t('net.password')" v-model="forgetpwData.password">
			</div>
			<div class="lg-width" style="width:100%;margin-top: 15px;">
				<input type="password" class="form-control lg-border" :placeholder="$t('net.confirmpassword')" v-model="forgetpwData.repassword">
			</div>
			<div class="lg-width" style="margin: 0 auto;margin-top: 60px;width:100%;position: relative;">
				<img class="light-btn" @click="sureModify" style="position: absolute;top: 0px;left: 25%;width: 50%;height: 100%;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
				<button id="btn" class="btn lg-lgbt" type="button" style="margin-left: 25%;" >{{$t('net.resetpassword')}}</button>
			</div>			
		</div>

	</div>	
</template>

<script>
	import { getMessage,forgetPw } from '../api/api';

	export default {
		data() {
			return {
				forgetpwData: {
					phone: "",
					code: "",
					password: "",
					countryCode: "86",
					repasssword: "",
					smid:"",
				},
				isMess: false,
				isGet: true,
				messageCD: 60,
			};
		},
		methods: {
			close(){
				history.back();
			},
			//获取短信验证码
			getMessage() {
				if(this.isGet == true) {
					this.isGet = false;
					this.timer = setInterval(this.startCD, 1000);
					var messageData = {};					
					messageData.countryCode = this.forgetpwData.countryCode;
					messageData.phone = this.forgetpwData.phone;
					if(messageData.countryCode == '86') {
						messageData.templateCode = '5';
					} else {
						messageData.templateCode = '8'
					}

					if(/^\d{8,11}$/.test(messageData.phone) == false) {
						this.$toast.center(this.$t('login.phonenum'));
						this.isGet = true;
						clearInterval(this.timer);
					} else {
						getMessage(messageData).then(data => {
							if(data.code == 200) {
								// 	console.log(data)
								this.forgetpwData.smid = data.data;
							} else {
								this.$toast.center(this.$t('msg.msg'+data.code))
							}
						});
					}
				}
			},
			//60s倒计时
			startCD: function() {
				if(this.messageCD <= 0) {
					this.messageCD = 60;
					this.isGet = true;
					clearInterval(this.timer);
				} else {
					this.messageCD--;
				}
			},
			//忘记密码  确认修改
			sureModify() {
				if(this.forgetpwData.phone == "" || this.forgetpwData.phone == undefined || typeof this.forgetpwData.phone == "undefined") {
					this.$toast.center(this.$t('login.phoneNull'));
					return false;
				}
				if(/^\d{8,11}$/.test(this.forgetpwData.phone) == false) {
					this.$toast.center(this.$t('login.phonenum'));
					return false;
				}
				if(this.forgetpwData.code == "" || this.forgetpwData.code == undefined || typeof this.forgetpwData.code == "undefined") {
					this.$toast.center(this.$t('login.smscode'));
					return false;
				}
				if(this.forgetpwData.password == "" || this.forgetpwData.password == undefined || typeof this.forgetpwData.password == "undefined") {
					this.$toast.center(this.$t('login.passNull'));
					return false;
				}
				if(this.forgetpwData.password != this.forgetpwData.repassword) {
					this.$toast.center(this.$t('login.conPass'));
					return false;
				}
				
				if(this.forgetpwData.countryCode=='86'){
					this.forgetpwData.templateCode = "5";
				}else if(this.forgetpwData.countryCode=='82'){
					this.forgetpwData.templateCode = "16";
				}else{
					this.forgetpwData.templateCode = "8";
				}
				
				
				
				let formData = new FormData();
                formData.append('forget_password',  JSON.stringify(this.forgetpwData));                
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };
				
				forgetPw(formData,config).then(data => {
					if(data.code == 200) {
						this.$toast.center(this.$t('login.passSuccess'));
						history.back();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});

			},
			getParams() {
				if(this.$route.query.userInfo){
					this.forgetpwData.phone = this.$route.query.userInfo.mobile;
					this.forgetpwData.countryCode = this.$route.query.userInfo.country;
				}
				
			},
			
		},
		mounted() {
			this.getParams();
		},

	};
</script>

<style scoped>
	

</style>
