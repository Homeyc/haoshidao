<template>
	<div>
		<div class="m-login-box" v-show="step==1">
			<div class="lg-row">
				<div style="text-align: center;padding-top: 20px;margin-bottom: 20px;">
					<span v-show="$i18n.locale=='zh-CN'" style="font-size: 18px;color: #718EBD;">限量测试免责声明</span>
					<span v-show="$i18n.locale=='en-US'" style="font-size: 18px;color: #718EBD;">Internal Testing Disclaimer</span>
					<img src="../assets/img/menuClose@2x.png" style="height: 20px;float: right;margin-right: 15px;" alt="" @click="close">
				</div>
			</div>
			<div class="lg-row" style="margin-left:0px; margin-right:0px;height: 450px;overflow: auto;padding: 0px 25px 5px 25px;border-bottom: 1px solid #ffffff12;border-top: 1px solid #ffffff12;">
				<div v-show="$i18n.locale=='zh-CN'" style="margin-top: 5px;">
					<span class="mz-text">
						<div  class="context" v-html="termcn"></div>
						<div  class="context" v-html="usercn"></div>
					</span>
				</div>
				<div v-show="$i18n.locale=='en-US'" style="margin-top: 5px;">
					<span class="mz-text">
						<div  class="context" v-html="termen"></div>
						<div  class="context" v-html="useren"></div>
					</span>
				</div>		
			</div>
			<div class="lg-row" style="margin-left: 20px;margin-top: 20px;">
				<input class="boxs" style="margin-top: -2px;" type="checkBox" @click="checkPact">
				<label v-show="$i18n.locale=='zh-CN'" style="font-size: 10px;color: #718EBD;margin-left: 5px;">我已阅读并同意用户协议！</label>
				<label v-show="$i18n.locale=='en-US'" style="font-size: 10px;color: #718EBD;margin-left: 5px;">I have read and agree to the terms of use！</label>
			</div>
			<div class="lg-row" style="margin-left: 20px;margin-top: 5px;">
				<input class="boxs" style="margin-top: -2px;" type="checkBox" @click="checkPact2">
				<label v-show="$i18n.locale=='zh-CN'" style="font-size: 10px;color: #718EBD;margin-left: 5px;">我已阅读并同意使用协议！</label>
				<label v-show="$i18n.locale=='en-US'" style="font-size: 10px;color: #718EBD;margin-left: 5px;">I have read and agree to the terms of service！</label>
			</div>
			<div class="lg-row" style="margin: 0 auto;margin-top: 10px;width: 202px;position: relative;background: none !important;">
				<img class="light-btn" @click="toRegSucc"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;cursor: pointer;" src="../assets/img/zcbtn@2x.png" > 
				<button v-show="$i18n.locale=='zh-CN'" id="btn" class="btn lg-lgbt" style="width: 100%;" type="button"  :disabled="!pact||!pact2">下一步</button>
				<button v-show="$i18n.locale=='en-US'" id="btn" class="btn lg-lgbt" style="width: 100%;" type="button"  :disabled="!pact||!pact2">Next</button>
			</div>
		</div>
		<div class="m-login-box" v-show="step==2">
			<div style="text-align: center;padding-top: 20px;margin-bottom: 35px;">
				
				<img src="../assets/img/menuClose@2x.png" style="height: 20px;float: right;margin-right: 15px;" alt="" @click="close">
			</div>
			<div class="row lg-row" style="padding-top: 20px;margin-left: 0px;margin-right: 0px;">
				<div class="lg-width" style="width: 50%;text-align: center;">
					<div class="panel-body1" v-bind:class="{ 'lg-checked':regType==1 }">
						<a class="netlg-ac" style="cursor: pointer;" v-bind:class="{ 'bm-checkbox':regType==1 }" @click="toCommon">{{$t('net.phoneregister')}}</a>
					</div>
				</div>
				<div class="lg-width" style="width: 50%;text-align: center;">
					<div class="panel-body1"  v-bind:class="{ 'lg-checked':regType==2 }">
						<a class="netlg-ac" style="cursor:no-drop" v-bind:class="{ 'bm-checkbox':regType==2 }" @click="toMessage" >{{$t('net.accountregister')}}</a>
					</div>
				</div>
			</div>
			<!--手机注册-->
			<div v-show="regType==1">
				<div class="lg-width" style="margin-top: 30px;width: 80%;margin-left: 10%;">
					<div class="lg-width" style="width: 30% ;height: 45px;">
						<select v-model="registerData.countryCode" class="form-control m-bot15 lg-border">
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
						<input type="text" class="form-control lg-border" :placeholder="$t('net.phonenumber')" v-model="registerData.phone">
					</div>
				</div>
				<div class="lg-width" style="margin-top: 20px;width: 80%;margin-left: 10%;">
					<div class="lg-width" style="width:100%">
						<input type="password" class="form-control lg-border" :placeholder="$t('net.password')" v-model="registerData.password">
					</div>
				</div>
				<div class="lg-width" style="margin-top: 20px;width: 80%;margin-left: 10%;">
					<div class="lg-width" style="width:100%">
						<input type="password" class="form-control lg-border" :placeholder="$t('net.confirmpassword')" v-model="registerData.repassword">
					</div>
				</div>
				<div class="lg-width" style="margin-top: 20px;width: 80%;margin-left: 10%;">
					<div class="lg-width" style="width:65%;margin-right: 5%;">
						<input type="text" class="form-control lg-border" v-model="registerData.code" :placeholder="$t('net.verificationCode')">
						<!--<input type="text" id="isCk"  style="display: none;">-->
					</div>
					<div class="lg-width" style="width:30%;text-align: center;">
						<button id="btn" style="height: 40px;" class="btn bt-getcode" type="button" @click="getMessage('1')">{{$t('net.send')}}<span v-show="!isGet">({{messageCD}}s)</span></button>
					</div>
				</div>
				<div class="lg-width" style="margin-top: 45px;width: 80%;margin-left: 10%;text-align: center;position: relative;">
					<img class="light-btn" @click="toPhoneReg" style="position: absolute;top: 0px;left:25%;width: 50%;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
					<button id="btn" class="btn lg-lgbt" type="button" >{{$t('net.registers')}}</button>
				</div>
				<div class="lg-width" style="margin-top: 15px;width: 80%;margin-left: 10%;margin-right: 10%;">
					<div class="lg-width" style="width: 100%;text-align: center;margin-top: 10px;">
						<span style="font-weight: initial;color: #fff;">{{$t('net.Existingaccounts')}}</span>
						<a @click="toLogin" style="font-weight: initial;color: #718EBD; cursor: pointer;">{{$t('net.backLogin')}}</a>
					</div>
				</div>
	
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import { loginU, loginM, getVcode, getMessage, phoneReg, forgetPw, getUserInfo } from '../api/api';
	import marked from 'marked/marked.min.js';
	import termcnload from "../assets/doc/term_cn.md";	
	import usercnload from '../assets/doc/user_cn.md';
	import termenload from "../assets/doc/term_en.md";	
	import userenload from '../assets/doc/user_en.md';
	export default {
		props: {
			group: {
				type: String,
				default: require("@/assets/img/group.png")
			},
			loginLogo: {
				type: String,
				default: require("@/assets/img/login_logo.png")
			},
			facebook: {
				type: String,
				default: require("@/assets/img/facebook.png")
			},			
		},
		data() {
			return {
				classicModal: false,
				freeWeek: false,
				freeWeekM: false,
				pact: false,
				loginData: {
					username: '',
					password: '',
					freeWeek: "0",
					imgid: "",
					imgcode: "",
					countryCode: "86",
					code: "",
					
					
				},
				registerData: {
					phone: "",
					code: "",
					password: "",
					countryCode: "86",
					repasssword: "",
					templateCode:""
				},
				empty: {},
				useList: {},
				headImg: "",
				forgetpwData: {
					phone: "",
					code: "",
					password: "",
					countryCode: "86",
					repasssword: ""
				},
				lang: 'zh-CN',
				isCom: true,
				isMess: false,
				isGet: true,
				ifLogin: false, //false未登录，true已登录
				regType: 1, //1手机注册，2账号注册,
				messageCD: 60,
				backCD: 3,
				step: 1, //1获取验证码，2输入新密码
				termcn:termcnload,
				usercn:usercnload,
				termen:termenload,
				useren:userenload,
				pact2:false,
			};
		},
		name: "modal",
		methods: {
			closeModal: function() {
				this.$emit("close");
			},		
		
			changeFreeWeek() {
				this.freeWeek = !this.freeWeek;
			},
			changeFreeWeekM() {
				this.freeWeekM = !this.freeWeekM;
			},

			toCommon() {
				this.isCom = true;
				this.isMess = false;
			},
			toMessage() {
				this.isCom = false;
				this.isMess = true;
			},
			checkPact() {
				this.pact = !this.pact;
			},
			checkPact2() {
				this.pact2 = !this.pact2;
			},
			modefiyReg() {
				if(this.regType == 1) {
					this.regType = 2;
				} else {
					this.regType = 1;
				}
			},
			close(){
				this.$router.push('/m_index')
			},
			
			toRegSucc() {
				if(this.pact&&this.pact2){
					this.step = 2;
				}
				
				
			},
			
			//获取短信验证码
			getMessage(id) {
				if(this.isGet == true) {
					this.isGet = false;
					this.timer = setInterval(this.startCD, 1000);
					var messageData = {};
					//id为短信验证码模板 1是注册 2是登录5忘记密码
					if(id == "2") {
						messageData.countryCode = this.loginData.countryCode;
						messageData.phone = this.loginData.username;
						if(messageData.countryCode == '86') {
							messageData.templateCode = id;
						} else {
							messageData.templateCode = '9'
						}

					} else if(id == "1") {
						messageData.countryCode = this.registerData.countryCode;
						messageData.phone = this.registerData.phone;
						if(messageData.countryCode == '86') {
							messageData.templateCode = id;
						} else {
							messageData.templateCode = '7'
						}
					} else if(id == "5") {
						messageData.countryCode = this.forgetpwData.countryCode;
						messageData.phone = this.forgetpwData.phone;
						if(messageData.countryCode == '86') {
							messageData.templateCode = id;
						} else {
							messageData.templateCode = '8'
						}
					}
					this.registerData.templateCode=messageData.templateCode;
					if(/^\d{8,11}$/.test(messageData.phone) == false) {
						this.$toast.center(this.$t('login.phonenum'));
						this.isGet = true;
						clearInterval(this.timer);
					} else {
						getMessage(messageData).then(data => {
							if(data.code == 200) {
								// 	console.log(data)
								this.loginData.smid = data.data;
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
			toLogin(){
				this.$router.push('/m_login');
			},
	
		
	
			
			//手机注册
			toPhoneReg() {
				var regData = {}
				regData.phone = this.registerData.phone;
				regData.code = this.registerData.code;
				regData.smid = this.loginData.smid;
				regData.password = this.registerData.password;
				regData.countryCode = this.registerData.countryCode;
				regData.templateCode =this.registerData.templateCode;
				if(/^\d{8,11}$/.test(regData.phone) == false) {
					this.$toast.center(this.$t('login.phonenum'));
					return false;
				}
				if(this.registerData.password == "" || this.registerData.password == undefined || typeof this.registerData.password == "undefined") {
					this.$toast.center(this.$t('login.passwords'));
					return false;
				}
				if(regData.smid == "" || regData.smid == undefined || typeof regData.smid == "undefined") {
					this.$toast.center(this.$t('login.verifycode'));
					return false;
				}
				if(this.registerData.password != this.registerData.repassword) {
					this.$toast.center(this.$t('login.conPass'));
					return false;
				}
				
				
				let formData = new FormData();
                formData.append('reg_info',  JSON.stringify(regData));                
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };
				
				phoneReg(formData,config).then(data => {
					if(data.code == 200) {						
						this.$toast.center('恭喜注册成功');
						this.$router.push('/m_login');
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code))
					}
				});
			},
		},
		mounted() {
			
		},
		computed:{
	       compiledMarkdown () {
	        
	         return marked(markload, { sanitize: true })
	       }
	       
	     },
	};
</script>

<style>

	
	.netlg-ac {
		color: #718EBD;
		underline: none;
		text-decoration: none;
	}
	
	.netlg-ac:hover {
		color: #718EBD;
		underline: none;
		text-decoration: none;
	}
	
	.netlg-ac:focus {
		color: #000;
		underline: none;
		text-decoration: none;
	}
	
	.form-control {
		height: 40px !important;
	}
	.modal-content{
		background: none !important;
	}
	.m-login-box{
		min-height: 667px;
	}

</style>