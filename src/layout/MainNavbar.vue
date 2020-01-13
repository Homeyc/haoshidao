<template>
	<section>
		<nav class="navbar navbar-fixed-top net-mainnav" id="topNav" role="navigation" >
			<div class="lg-width" style="width: 100%;display:flex;margin: 0 auto;float: none;">	<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header nav-marginl">
					<a @click="toMain" class="nav-aimg">
						<img :src="nav_logo" class="nav-logoImg" alt="">
					</a>
				</div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div>
					<ul class="nav navbar-nav netnav-left">
						<!--<li class="cur-cancle"><span class="net-version">Beta {{version}}</span></li>-->
						<li>
							<a class="cur-pot" @click="toMain">{{$t('net.home')}}</a>
						</li>
						<!--<li ><a style="cursor: pointer;" @click="toRobots">{{$t('net.myrobot')}}</a></li>-->
						<li class="dropdown">
							<a class="dropdown-toggle"  data-toggle="dropdown" style="cursor: pointer;"  role="button" aria-haspopup="true" aria-expanded="false">{{$t('net.investmentMarket')}}<i style="margin-left: 5px;" class="fa fa-angle-down" aria-hidden="true"></i></a>
							<ul class="dropdown-menu" >
								<li class="sc-border sc-light">
									<a @click="toMarkets" style="cursor: pointer;">{{$t('netnew.robotMarket')}} </a>
								</li>
								<li class="sc-border sc-light" v-show="userType!=1">
									<a @click="toUnitMarket" style="cursor: pointer;">{{$t('netnew.comMarket')}}</a>
								</li >
								<li class="sc-border sc-light" v-show="userType!=1">
									<a @click="toStrategy" style="cursor: pointer;">{{$t('netnew.strategy')}}</a>
								</li>
							</ul>
						</li>
						<li>
							<a class="cur-pot" @click="toquestions">{{$t('net.allquestion')}}</a>
						</li>
						<li>
							<a target="cur-pot"  href="http://wp.netcentric.io" style="cursor: pointer;">{{$t('net.centect')}}</a>
						</li>

					</ul>
					<ul class="nav navbar-nav netnav-right">
						<li class="dropdown" style="width: 100px;">
							<a  class="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu1" aria-haspopup="true" aria-expanded="true"><i class="fa fa-globe fa-marginr" aria-hidden="true" ></i>{{$t('net.language')}}<i style="margin-left: 5px;" class="fa fa-angle-down" aria-hidden="true"></i></a>
							<ul class="dropdown-menu" aria-labelledby="dropdownMenu1" >
								<li class="sc-border sc-light">
									<a  @click="changeLang('us')" style="cursor: pointer;" >English</a>
								</li>
								<li class="sc-border sc-light">
									<a  @click="changeLang('cn')" style="cursor: pointer;" >简体中文</a>
								</li>
								<li class="sc-border sc-light">
									<a  @click="changeLang('ko')" style="cursor: pointer;" >한국어</a>
								</li>
							</ul>

						</li>
						<li class="dropdown" style="width: 100px;" v-show="!ifLogin">
							<a id="logbtn" class="login-check" href="#myModal"  data-toggle="modal" style="text-align: center;padding-right: 0;" >
								{{$t('net.login')}}
							</a>
						</li>
						<li class="dropdown" v-show="!ifLogin"  style="width: 100px;">
							<!--<img  class=""   style="position: absolute;top: 25px;left: 0;width: 100%;height: 50%;z-index: 5000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" > -->
							<a id="toReg" class="login-check" href="#myModal"  data-toggle="modal"  style="text-align: center;padding-left: 0;">
								{{$t('net.register')}}
							</a>
						</li>
						<li class="dropdown" v-show="!ifLogin"  style="position: relative;">
							<img class=""   @click="topa"  style="position: absolute;top: 25px;left: 16.5px;width: 75%;height: 50%;z-index: 5000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							<a   style="text-align: center;color: #fff;">
								{{$t('netnew.zyb')}}
							</a>
						</li>


						 <!--<li class="dropdown">
			              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown menu<span class="caret"></span></a>
			              <ul class="dropdown-menu">
			                <li><a href="#">Action</a></li>
			                <li><a href="#">Another action</a></li>
			                <li><a href="#">Something else here</a></li>
			                <li role="separator" class="divider"></li>
			                <li class="dropdown-header">Nav header</li>
			                <li><a href="#">Separated link</a></li>
			                <li><a href="#">One more separated link</a></li>
			              </ul>
			            </li>-->




						<li class="dropdown" v-show="ifLogin" >
							<a class="dropdown-toggle" style="cursor: pointer;padding: 34px 0px 34px 0px !important;text-align: center;" data-toggle="dropdown"> <img style="height:32px;width: 32px;border-radius:16px ;" id="headImg"></a>
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
						</li>
						<li class="dropdown" v-show="ifLogin"  style="position: relative;">
							<img class=""   @click="topa"  style="position: absolute;top: 25px;left: 16.5px;width: 75%;height: 50%;z-index: 5000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							<a   style="text-align: center;color: #fff;">
								{{$t('netnew.zyb')}}
							</a>
						</li>

					</ul>
				</div>
				<!-- /.navbar-collapse -->
			<!-- /.container-fluid -->
			</div>
		</nav>
		<modal></modal>
	</section>
</template>


<script>
	import Modal from "../components/Modal.vue";
	import { loginU,loginM, getVcode,getMessage,phoneReg,forgetPw,getUserInfo,checkCookie} from '../api/api';

	$('.dropdown-toggle').click(function(e) {
        console.log("test write******")
	  if ($(document).width() > 768) {
	    e.preventDefault();
	    var url = $(this).attr('href');
	    if (url !== '#') {
	      window.location.href = url;
	    }

	  }
	});

	export default {
		components: {
    	Modal
  		},
		props: {
			nav_logo: {
				type: String,
				default: require("@/assets/img/logo.png")
			},
		},
		data() {
			return {
				classicModal: false,
				freeWeek: false,
				freeWeekM: false,
				pact: false,
				userType:1,
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
				/*isLogin: 1, //1登录 ，2注册，3重置密码,4注册成功5免责声明*/
				regType: 1, //1手机注册，2账号注册,
				messageCD: 60,
				backCD: 3,
				/*steps: 1 //1获取验证码，2输入新密码*/
			};
		},
		computed: {
			isLogin(){
				return this.$store.getters.getLoginStatus;
			},
			step(){
				return this.$store.getters.getStep;
			}
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
				} else if(value == 'cn') {
					this.lang = 'zh-CN';
					this.$i18n.locale = this.lang; //关键语句
					localStorage.setItem('lang', this.lang)
				}else{
					this.lang = 'ko';
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

			//注册
			toreg() {
				/*this.isLogin = 2;*/
				this.$store.dispatch('sChangeLoginStatus',2)
			},
			//登录
			tolog() {
				/*this.isLogin = 1;*/
				this.$store.dispatch('sChangeLoginStatus',1)
			},
			topa(){
				this.$router.push('/proApply')
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
				this.$router.push('/');
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
			//前往pre页面
			toPre() {
				this.$router.push('/personInfo');
			},
			//前往首页
			toMain() {
				this.$router.push('/')
			},
			toMarkets() {
				this.$router.push('/markets')
			},
			toabout(){
				this.$router.push('/about')
			},
			//前往我的机器人
			toRobots() {
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
			handleScroll () {
			  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
			  if(scrollTop>0){
			  	$('#topNav').addClass("bg-black");
			  }else if(scrollTop<1){
			  	$('#topNav').removeClass("bg-black");
			  }
			},


		},
		mounted() {
			this.checkLang();
			this.checkLogin();
			this.checkUpdate();
			this.checkCookie();
			window.addEventListener('scroll', this.handleScroll);
			var ifshowLogin = localStorage.getItem('ifShowLoginLayout')
			if(ifshowLogin == 'yes'){
				let _this = this;
				setTimeout(() => {
					_this.tolog();
					$("#logbtn").click();
					localStorage.removeItem('ifShowLoginLayout')
				},3000)
			}
		},
		beforeDestroy() {

		}
	};
</script>
<style>
	a{
		background-color: transparent!important;
	}
	a:visited,a:active{
		background-color: transparent!important;
	}
	label{
		font-weight: 500 !important;
	}
	.net-mainnav{
		min-width: 1400px;
	}
	.bg-black {
		background: url('../assets/img/navboard.png') !important;
	}

	.nav-logoImg {
		height: 36px;
	}

	.nav-marginl {
		margin-right: 80px !important;
	}

	.net-version {
		font-size: 12px;
		margin-top: 21px;
		margin-left: 12px;
		border: 1px solid #fff;
		padding: 0px 5px;
		margin-right: 64px;
		display: block;
		color: #fff;
		border-radius: 2px;
	}
	.nav-aimg{
		margin-top: 30px;
	    display: inline-block;
	    cursor: pointer;
	}
	.navbar-left li{
		margin-top: 2px;
		cursor: pointer;
	}
	.cur-cancle{
		cursor: default !important;
	}
	.nav > li > a:hover{
    	background-color: #00000000 !important;
    	opacity: 1;
    	border: none;
    	color: #fff;
	}
	.nav > li > a:focus{
		background-color: #00000000 !important;
    	opacity: 1;
    	border: none;
	}
	.nav .open > a, .nav .open > a:hover, .nav .open > a:focus{
		background-color: #00000000!important;
		color: #fff !important;
		border: none;
	}
	.dropdown-menu{
		min-width: 100px !important;
		background: #011122 !important;
	}
	.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus{
		background-color: #00000000 !important;
		color: #fff !important;
		border: none;
	}
	.fa-marginr{
		margin-right: 5px;
	}
	.netnav-left{
		float: left !important;
	    margin: 0 !important;
	}
	.netnav-right{
	    float: right !important;
	    margin: 0 !important;
	}
	.navbar-nav > li{
		float: left;
	}
	.navbar-header{
	    float: left;
	}
	.navbar-nav > li > a{
		color: #718EBD;
	    padding-top: 40px !important;
    	padding-bottom: 40px !important;
    	border: none;
    	margin-top: 1px;
    	font-size: 16px;

	}
	.netnav-left > li > a{
		padding-left: 25px !important;
		padding-right: 25px !important;
	}

	.netnav-left > li > a:hover{
		background: url('../assets/img/nav bar hilight@2x.png') no-repeat;
		background-size:100% ;
	}
	.dropdown-menu > li > a{
		color: #718EBD !important;
		padding: 12px 20px !important;
	}
	.netnav-right >li {
		width: 125px;
	}
	.:hover{
		background: url('../assets/img/bmon.png') no-repeat bottom;
		background-size:100% ;
	}
	.navbar{
		border:none !important;
	}
	.sc-light:hover{
		background: url('../assets/img/schover@2x.png') no-repeat left;
	}
	.sc-border{
		border-bottom: 1px solid #ffffff12;
	}



</style>
