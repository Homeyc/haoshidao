<template>
	<section>
		<nav class="navbar navbar-fixed-top net-m-mainnav" :class="{'bg-black':!sideMenu,'bg-m-black':sideMenu}" id="topNav" role="navigation" >
			<div class="lg-width" style="width: 100%;margin: 0 auto;float: none;">	<!-- Brand and toggle get grouped for better mobile display -->
				<div class="lg-width" style="width: 100%;" v-show="!sideMenu">
					<a @click="toMain" class="nav-m-aimg">
						<img src="../assets/img/m_logo@2x.png" class="nav-logoImg" alt="">
					</a>
					<a @click="changeSide" style="float: right;margin-right: 30px;margin-top: 20px;">
						<img src="../assets/img/m_side@2x.png" style="height: 30px;" alt="">
					</a>
				</div>
				<div class="lg-width" style="width: 100%;min-height: 667px;" v-show="sideMenu">
					<a @click="toMain" class="nav-m-aimg">
						<img src="../assets/img/m_logo@2x.png" class="nav-logoImg" alt="">
					</a>
					<a @click="changeSide" style="float: right;margin-right: 30px;margin-top: 20px;">
						<img src="../assets/img/menuClose@2x.png" style="height: 30px;" alt="">
					</a>
					<div class="lg-width" style="width: 100%;margin-top: 20px;text-align: center;">
						<span @click="toMain" style="font-size: 20px;color: #718EBD;">{{$t('net.home')}}</span>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 40px;text-align: center;">
						<span @click="toMarket" style="font-size: 20px;color: #718EBD;">{{$t('netnew.robotMarket')}}</span>
					</div>
					<!--<div class="lg-width" style="width: 100%;margin-top: 40px;text-align: center;">
						<span style="font-size: 20px;color: #718EBD;">{{$t('net.allquestion')}}</span>
					</div>-->
					<div class="lg-width" style="width: 100%;margin-top: 40px;text-align: center;">
						<a href="http://wp.netcentric.io"  style="font-size: 20px;color: #718EBD;">{{$t('net.centect')}}</a>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 40px;text-align: center;color: #718EBD;">
						<span style="font-size: 20px;margin-right: 15px;" @click="changeCn" :class="{'m-white':$i18n.locale=='zh-CN','m-blue':$i18n.locale=='en-US'}">Chinese</span>
						|
						<span style="font-size: 20px;margin-left: 15px;" @click="changeEn" :class="{'m-blue':$i18n.locale=='zh-CN','m-white':$i18n.locale=='en-US'}">English</span>
					</div>
					<div v-show="!ifLogin"  class="lg-width" style="width: 100%;margin-top: 40px;text-align: center;">
						<span	@click="toLogin" style="font-size: 20px;color: #718EBD;">{{$t('net.login')}}</span>
					</div>
					<div v-show="!ifLogin"  class="lg-width" style="width: 100%;margin-top: 40px;text-align: center;">
						<button @click="toReg" class="card-btm"   style="position: relative;">
							{{$t('net.register')}}
						</button>
					</div>
					<div v-show="ifLogin"  class="lg-width" style="width: 100%;margin-top: 40px;text-align: center;">
						<a class="dropdown-toggle" style="cursor: pointer;padding: 34px 0px 34px 0px !important" @click="changeList">
							<img style="height:48px;width: 48px;border-radius:24px ;margin-right: 10px;" id="headImg">
							<span id="headName" style="color:#718EBD;font-size: 20px;">{{useList.nickName}}</span><b class="caret"></b>
						</a>
						<div style="margin-top: 40px;" v-show="openList">
							<a @click="toRbtCenter" style="cursor: pointer;color:#718EBD;font-size: 20px;" >{{$t('net.myrobot')}}</a>
						</div>
						<div style="margin-top: 40px;" v-show="openList">
							<a @click="toPerson" style="cursor: pointer;color:#718EBD;font-size: 20px;">{{$t('net.pcenter')}}</a>
						</div>
						<div style="margin-top: 40px;" v-show="openList">
							<a id="logout" @click="goOut" style="cursor: pointer;color:#718EBD;font-size: 20px;">{{$t('net.loginout')}}</a>
						</div>
					</div>

					<!--<li class="dropdown" v-show="ifLogin" style="width: 185px;" >
						<a class="dropdown-toggle" style="cursor: pointer;padding: 34px 0px 34px 0px !important" data-toggle="dropdown"> <img style="height:32px;width: 32px;border-radius:16px ;margin-right: 10px;" id="headImg"><span id="headName">{{useList.nickName}}</span><b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li class="sc-border sc-light">
								<a style="cursor: pointer;" @click="toRobots">{{$t('net.myrobot')}}</a>
							</li>
							<li class="sc-border sc-light">
								<a @click="toPre" style="cursor: pointer;">{{$t('net.pcenter')}}</a>
							</li>
							<li class="sc-border sc-light">
								<a id="logout" @click="goOut" style="cursor: pointer;">{{$t('net.loginout')}}</a>
							</li>
						</ul>
					</li>-->
				</div>
			</div>
		</nav>
	</section>
</template>


<script>
	import { loginU,loginM, getVcode,getMessage,phoneReg,forgetPw,getUserInfo,checkCookie} from '../api/api';
	export default {
		data() {
			return {
				classicModal: false,
				freeWeek: false,
				freeWeekM: false,
				pact: false,
				sideMenu:false,
				userType:1,
				openList:false,
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
				version: 'V0.7.2',
				isMess: false,
				isGet: true,
				ifLogin: false, //false未登录，true已登录
				isLogin: 1, //1登录 ，2注册，3重置密码,4注册成功5免责声明
				regType: 1, //1手机注册，2账号注册,
				messageCD: 60,
				backCD: 3,
				step: 1 //1获取验证码，2输入新密码
			};
		},
		computed: {

		},
		methods: {

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
			changeSide(){
				this.sideMenu=!this.sideMenu;
			},
			changeCn(){
				this.$i18n.locale ='zh-CN';
				localStorage.setItem('lang', this.$i18n.locale);
			},
			changeEn(){
				this.$i18n.locale ='en-US';
				localStorage.setItem('lang', this.$i18n.locale);
			},
			toLogin(){
				this.sideMenu=false;
				this.$router.push('/m_login')
			},
			toRbtCenter(){
				this.sideMenu=false;
				this.$router.push('/m_Robot')
			},
			changeList(){
				this.openList=!this.openList;
			},
			//注册
			toReg() {
				this.sideMenu=false;
				this.$router.push('/m_register')
			},

			checkUpdate() {
				if(localStorage.getItem('version')) {
					if(localStorage.getItem('version') == this.version) {
						return false;
					} else {
						localStorage.setItem('version', this.version);
						document.location.reload();
					}
				} else {
					localStorage.setItem('version', this.version);
					document.location.reload();
				}
			},

			//退出登录
			goOut() {
				localStorage.removeItem('token');
				localStorage.removeItem('phonenum');
				this.$router.push('/m_index');
				document.location.reload();
			},
			success:function(){
				this.checkLogin();
			},
			//检查是否登录
			checkLogin() {

				if(localStorage.getItem('token')) {
					this.ifLogin = true
					this.getUinfo();

				} else {
					this.ifLogin = false;

				}
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
					if(data.code == 200) {
						this.useList = data.data;
						this.COMMON.userType =data.data.userType;
						this.userType=data.data.userType;
						this.headImg = "data:image/png;base64," + data.data.photoUrl;
						document.getElementById('headImg').setAttribute('src', this.headImg);
					} else {
						document.location.reload();
						this.$toast.center(data.message);

					}
				});
			},
			//前往首页
			toMain() {
				this.sideMenu=false;
				this.$router.push('/m_index')
			},
			toPerson(){
				this.sideMenu=false;
				this.$router.push('/m_personInfo')
			},
			toMarket() {
				this.sideMenu=false;
				this.$router.push('/m_RobotMarket')
			},
			toAbout(){
				this.sideMenu=false;
				this.$router.push('/m_About')
			},
			//前往我的机器人
			toRobots() {
				//this.$router.push('/myBot')
				this.$router.push('/robot')
			},
			//前往新闻资讯
			toNews() {
				this.$router.push('/news')
			},
			toquestions(value) {

				this.$router.push({
					name: "questions",
					params: {
						name: "questions",
						id: value
					}
				})
			},
			//消息页面

			toMessages() {
				this.$router.push('/Messages')
			},
			//跟投交易
			toandTrading() {
				this.$router.push('/AndTrading')
			},
			toQuotation() {
				this.$router.push('/quotation')
			},
			toStrategy(){
				this.$router.push('/strategy')
			},
			toUnitMarket(){
				this.$router.push('/unitMarket')
			},
			checkCookie(){
				if(this.$cookies.get("view")){

				}else{
					checkCookie().then(data => {
						this.$cookies.set("view",true,60 * 60);
					});
				}
			},



		},
		mounted() {
			this.checkLang();
			this.checkLogin();
			this.checkUpdate();
			this.checkCookie();
			window.addEventListener('scroll', this.handleScroll);
			document.getElementById('topNav').addEventListener('touchmove', function (event) {//出现遮罩层，禁止遮罩层下面页面跟着滑动
				event.preventDefault();
			})
		},
		beforeDestroy() {

		}
	};
</script>
<style>
.bg-m-black{
	background: black;
}
.net-m-mainnav{
	width: 100%;
	padding-bottom: 20px;
}
.nav-m-aimg{
	margin-top: 20px;
	display: inline-block;
	cursor: pointer;
	margin-left: 30px;
}
.m-white{
	color: #fff;
}
.m-blue{
  color: #718EBD;
}
</style>
