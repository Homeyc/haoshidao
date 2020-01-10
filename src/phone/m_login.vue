<template>
	<div class="login-box" style="min-height: 667px;">
		<div style="text-align: center;padding-top: 20px;margin-bottom: 35px;">				
			<img src="../assets/img/menuClose@2x.png" style="height: 20px;float: right;margin-right: 15px;" alt="" @click="close">
		</div>
		<div class="row lg-row" style="padding-top: 20px;margin-left: 0px;margin-right: 0px;">
			<div class="lg-width" style="width: 50%;text-align: center;">
				<div class="panel-body1"  v-bind:class="{ 'lg-checked':isCom }">
					<a class="netlg-ac" style="cursor: pointer;" v-bind:class="{ 'bm-checkbox':isCom }" @click="toCommon">{{$t('net.accountlogin')}}</a>
				</div>
			</div>
			<div class="lg-width" style="width: 50%;text-align: center;">
				<div class="panel-body1"  v-bind:class="{ 'lg-checked':isMess }">
					<a class="netlg-ac" style="cursor: pointer;" v-bind:class="{ 'bm-checkbox':isMess }" @click="toMessage">{{$t('net.SMSlogin')}}</a>
				</div>
			</div>
		</div>
		<!--普通登录-->
		<div v-show="isCom">
			<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width: 30% ;">
					<select v-model="loginData.countryCode" class="form-control lg-border">
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
				<div class="lg-width" style="width:68%;margin-left: 2%;">
					<input type="text" class="form-control lg-border" :placeholder="$t('net.phonenumber')" v-model="loginData.username">
				</div>
			</div>
			<div class="row lg-row" style="margin-top: 25px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width:100%">
					<input type="password" class="form-control lg-border" :placeholder="$t('net.password')" v-model="loginData.password">
				</div>
			</div>
			<div class="row lg-row" style="margin-top: 25px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width:50%">
					<input type="text" class="form-control lg-border" v-model="loginData.imgcode" :placeholder="$t('net.verificationCode')">
					<!--<input type="text" id="isCk"  style="display: none;">-->
				</div>
				<div class="lg-width" style="width: 50%;text-align: center;height: 40px;background: #fff;">
					<img id="codeImg" style="height: 45px;" @click="getVcode" />
				</div>
			</div>
			<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width:50%;">
					<input class="boxs" style="margin-top: -2px;" type="checkBox" @click="changeFreeWeek">
					<label style="margin-left: 8px;color:#718EBD;"> {{$t('net.nologinweek')}} </label>
				</div>
				<div class="lg-width" style="width: 5%">
					<div style="height: 20px;"> </div>
				</div>
				<div class="lg-width" style="width: 45%;text-align: right;">
					<a @click="toForgetpw" style="font-weight: initial;color:#718EBD;cursor: pointer;">{{$t('net.forgetpw')}}?</a>
				</div>
			</div>
			<div class="row lg-row" style="margin-top: 40px;width: 80%;margin-left: 10%;text-align: center;position: relative;">
				<img class="light-btn" @click="toLoginU" style="position: absolute;top: 0px;left:25%;width: 50%;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
				<button id="btn" class="btn lg-lgbt" type="button"  style="cursor: pointer;">{{$t('net.logins')}}</button>
			</div>
			<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width: 100%;text-align: right;">
					<img :src="facebook" style="float: left;">
					<a style="font-weight: initial;color: #718EBD;cursor: pointer;display: block;float: right;margin-top: 2px;" @click="toRegister">{{$t('net.register')}}</a>
				</div>
			</div>

		</div>
		<!--短信登录-->
		<div v-show="isMess">
			<div class="row lg-row" style="margin-top: 45px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width: 30% ;height: 45px;">
					<select v-model="loginData.countryCode" class="form-control m-bot15 lg-border">
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
					<input type="text" class="form-control lg-border" :placeholder="$t('net.phonenumber')" v-model="loginData.username">
				</div>
			</div>

			<div class="row lg-row" style="margin-top: 25px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width:65%;margin-right: 5%;">
					<input type="text" class="form-control lg-border" v-model="loginData.code" :placeholder="$t('net.verificationCode')">
					<!--<input type="text" id="isCk"  style="display: none;">-->
				</div>
				<div class="lg-width" style="width:30%;text-align: center;">
					<button id="btn" style="height: 40px;" class="btn bt-getcode" type="button" @click="getMessage('2')">{{$t('net.send')}}<span v-show="!isGet">({{messageCD}}s)</span></button>
				</div>
			</div>
			<div class="row lg-row" style="margin-top: 40px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width:50%;">
					<input class="boxs" style="margin-top: -2px;" type="checkBox" @click="changeFreeWeekM">
					<label style="margin-left: 8px;color: #718EBD;"> {{$t('net.nologinweek')}} </label>
				</div>
				<div class="lg-width" style="width: 5%">
					<div style="height: 20px;"> </div>
				</div>
				<div class="lg-width" style="width: 45%;text-align: right;">
					<a @click="toForgetpw" style="font-weight: initial;color: #718EBD;cursor: pointer;">{{$t('net.forgetpw')}}？</a>
				</div>
			</div>
			<div class="row lg-row" style="margin-top: 80px;width: 80%;margin-left: 10%;text-align:center;position: relative;">
				<img class="light-btn" @click="toLoginM" style="position: absolute;top: 0px;left:25%;width: 50%;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
				<button id="btn" class="btn lg-lgbt" type="button"  style="cursor: pointer;">{{$t('net.logins')}}</button>
			</div>
			<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
				<div class="lg-width" style="width: 100%;text-align: right;">
					<img :src="facebook" style="float: left;">
					<a style="font-weight: initial;color: #718EBD;cursor: pointer;display: block;float: right;margin-top: 2px;" @click="toRegister">{{$t('net.register')}}</a>
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
			}
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
					code: ""
				},
				registerData: {
					phone: "",
					code: "",
					password: "",
					countryCode: "86",
					repasssword: ""
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
			//普通登录
			toLoginU() {
				if(this.loginData.username == "" || this.loginData.username == undefined || typeof this.loginData.username == "undefined") {
					this.$toast.center(this.$t('login.name'));
					return false;
				}
				if(this.loginData.password == "" || this.loginData.password == undefined || typeof this.loginData.password == "undefined") {
					this.$toast.center(this.$t('login.passNull'));
					return false;
				}
				if(this.freeWeek) {
					this.loginData.freeWeek = "1"
				} else {
					this.loginData.freeWeek = "0"
				}
				
				let formData = new FormData();
                formData.append('login_info',  JSON.stringify(this.loginData));                
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };
				
				loginU(formData,config).then(data => {
					if(data.code == 200) {
						//	              	this.$toast.center("登录成功");
						//	console.log(data);
						localStorage.setItem('token', data.data.token);
						localStorage.setItem('phonenum', data.data.phone);
						this.$emit('checkLogin', 'success');
						this.$router.push('/m_index');
						location.reload();
					} else {
						this.getVcode();
						this.$toast.center(this.$t('msg.msg'+data.code))
					}
				});
			},
			//检查中英文
			checkLang() {
				if(localStorage.getItem('lang')) {
					this.lang = localStorage.getItem('lang');
					this.$i18n.locale = this.lang; //关键语句
				} else {
					var type = navigator.appName;　　
					if(type == "Netscape") {　　
						var lang = navigator.language; //获取浏览器配置语言，支持非IE浏览器
						　　
					} else {　　
						var lang = navigator.userLanguage; //获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
						　　
					};　　
					var lang = lang.substr(0, 2); //获取浏览器配置语言前两位
					　　
					if(lang == "zh") {　　
						this.lang = 'zh-CN';
						this.$i18n.locale = this.lang; //关键语句
						localStorage.setItem('lang', this.lang)　　
					} else {　　
						this.lang = 'en-US';
						this.$i18n.locale = this.lang; //关键语句
						localStorage.setItem('lang', this.lang);　　
					}
				}
			},
			//中英文切换
			changeLang(value) {
				if(value == 'us') {
					this.lang = 'en-US';
					this.$i18n.locale = this.lang; //关键语句
					localStorage.setItem('lang', this.lang);
				} else {
					this.lang = 'zh-CN';
					this.$i18n.locale = this.lang; //关键语句
					localStorage.setItem('lang', this.lang)
				}
			},
			changeFreeWeek() {
				this.freeWeek = !this.freeWeek;
			},
			changeFreeWeekM() {
				this.freeWeekM = !this.freeWeekM;
			},

			checkUpdate() {
				if(localStorage.getItem('version')) {
					if(localStorage.getItem('version') == this.version) {
						return false;
					} else {
						localStorage.setItem('version', this.version);
						location.reload();
					}
				} else {
					localStorage.setItem('version', this.version);
					location.reload();
				}
			},
			//登录
			tolog() {
				this.getVcode();
				this.isLogin = 1;
			},
			//退出登录
			goOut() {
				localStorage.removeItem('token');
				localStorage.removeItem('phonenum');
				this.$router.push('/main');
				location.reload();
			},
			close(){
				this.$router.push('/m_index')
			},
			//获取验证码
			getVcode() {
				getVcode().then(data => {
					if(data.success == 0) {
						//	              	console.log(data)
//						"data:image/png;base64,"+
						var file =data.data.codeImage;
						this.loginData.imgid = data.data.imgid;
						document.getElementById('codeImg').setAttribute('src', file);
					} else {
						this.$toast.center(data.message);
						// console.log(data)
					}
				});
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
			//获取用户信息
			getUinfo() {
				getUserInfo(this.empty).then(data => {
					if(data.success == 0) {

						this.useList = data.data;
						this.headImg = "data:image/png;base64," + data.data.photoUrl;
						document.getElementById('headImg').setAttribute('src', this.headImg);
					} else {
						this.$toast.center(data.message);

					}
				});
			},
			toPact() {
				this.isLogin = 4;
				this.timerReg = setInterval(this.startRegCD, 1000);
			},
			toRegSucc() {
				if(this.pact&&this.pact2){
					this.isLogin = 5;
				}
				
				
			},
			toForgetpw(){
				this.$router.push('/m_changePw')
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
			//3s成功倒计时
			startRegCD: function() {
				if(this.backCD <= 0) {
					this.backCD = 3;
					this.toLogin();
					clearInterval(this.timerReg);
				} else {
					this.backCD--;
				}
			},
			//短信登录
			toLoginM() {
				if(this.freeWeekM) {
					this.loginData.freeWeek = "1"
				} else {
					this.loginData.freeWeek = "0"
				}
				var loginMdata = {};
				loginMdata.freeWeek = this.loginData.freeWeek;
				loginMdata.countryCode = this.loginData.countryCode;

				loginMdata.code = this.loginData.code;

				loginMdata.phone = this.loginData.username;
				loginMdata.smid = this.loginData.smid;
				if(loginMdata.countryCode == '86') {
					loginMdata.templateCode = "2";
				} else {
					loginMdata.templateCode = "9";
				}
				if(/^\d{8,11}$/.test(loginMdata.phone) == false) {
					this.$toast.center(this.$t('login.phonenum'));
					return false;
				}
				if(loginMdata.smid == "" || loginMdata.smid == undefined || typeof loginMdata.smid == "undefined") {
					this.$toast.center(this.$t('login.verifycode'));
					return false;
				}
				
				let formData = new FormData();
                formData.append('login_info_mobile',  JSON.stringify(loginMdata));                
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };
												
				loginM(formData,config).then(data => {
					if(data.code == 200) {
						//	              	this.$toast.center("登录成功");
						//	console.log(data);
						
						localStorage.setItem('token', data.data.token);
						this.$emit('checkLogin', 'success');
						this.$router.push('/m_index');
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code))

					}
				});

			},
			//切换注册页面
			toRegister() {
				this.$router.push('/m_register');
			},

			
			
		},
		mounted() {
			this.getVcode();
		},
		computed:{
	       compiledMarkdown () {
	        //this.articleDetail.context数据
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

</style>





