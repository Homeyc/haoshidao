<template>


    <div class="wrapper_box" >
        <div class="mail-box">
            <aside class="mail-nav mail-nav-bg-color nav_box">
                <!--<header class="header" v-show="userType!=1"><h4 class="nav_title" >{{$t('netnew.MyRobotSide1')}}</h4></header>-->
                <div class="mail-nav-body">
                   <!-- <div style="position: relative;" v-show="userType!=1">
                    	<img class="light-btn" @click="changeMenu(0)" style="position: absolute;top: 0px;left:3.5px;width: 203px;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
                    	<img class="light-btn" @click="cretaUm" style="position: absolute;top: 75px;left:3.5px;width: 203px;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
                        <a class="btn btn-compose create_btn" >{{$t('netnew.MyRobotSide2')}}</a>
                        <a class="btn btn-compose create_btn"  style="margin-top: 15px;">{{$t('netnew.createUb')}}</a>
                    </div>-->
                    <ul class="nav nav-stacked nav_item_font" style="margin:0 auto;width: 95%;">
                        <li><a style="cursor: pointer;" v-bind:class="{'rbt-active':sideMenu==1}" @click="changeMenu(1)">{{$t('netnew.MyRobotSide3')}} <i class="fa fa-angle-right" style="top: 50%;margin-top:-7px;position: absolute;right: 5px;" v-show="sideMenu==1"></i></a></li>
                        <li><a style="cursor: pointer;" v-bind:class="{'rbt-active':sideMenu==2}" @click="changeMenu(2)">{{$t('netnew.MyRobotSide4')}} <i class="fa fa-angle-right" style="top: 50%;margin-top:-7px;position: absolute;right: 5px;" v-show="sideMenu==2"></i></a></li>
                        <li v-show="userType!=1"><a id="sideMenu3" style="cursor: pointer;" v-bind:class="{'rbt-active':sideMenu==3}" @click="changeMenu(3)">{{$t('netnew.MyRobotSide6')}}<i class="fa fa-angle-right" style="top: 50%;margin-top:-7px;position: absolute;right: 5px;" v-show="sideMenu==3"></i></a></li>
                        <li v-show="userType!=1"><a id="sideMenu5" style="cursor: pointer;" v-bind:class="{'rbt-active':sideMenu==5}" @click="changeMenu(5)">{{$t('netnew.MyRobotSide7')}}<i class="fa fa-angle-right" style="top: 50%;margin-top:-7px;position: absolute;right: 5px;" v-show="sideMenu==5"></i></a></li>
                        <li v-show="userType!=1"><a id="sideMenu6" style="cursor: pointer;" v-bind:class="{'rbt-active':sideMenu==6}" @click="changeMenu(6)">{{$t('netnew.MyRobotSide8')}}<i class="fa fa-angle-right" style="top: 50%;margin-top:-7px;position: absolute;right: 5px;" v-show="sideMenu==6"></i></a></li>
                    </ul>
                </div>
            </aside>
            <section class="crack"></section>
            <section class="page_body">
                <section class="crack_top"></section>
                <router-view></router-view>
				<section class="crack_top"></section>
            </section>
        </div>
        <!--<GroupChild @description="description"></GroupChild>-->
    </div>


</template>

<script>
	import {getUserInfo} from '../api/api';
	export default {
	 	name: "Robot",
		props: {
            home_solution_icon1: {
                type: String,
                default: require("@/assets/img/home_solution_icon1.png")
            },
       	},
		data() {
			return {
				sideMenu:1,
				userType:"",
			}
		},
		mounted() {
			this.hideFoot();
			this.checkMenu();
			this.getUinfo();
			$('.wrapper_box').css("min-height", document.documentElement.clientHeight+ "px");
		},
        watch: {//监听路由变化
            $route(to,from){
                console.log(to.path);
                if(to.path=='/robot/overview'){
                    this.sideMenu=1
                }else if(to.path=='/robot/instance'){
                    this.sideMenu=2
                }else if(to.path=='/robot/factory'){
                    this.sideMenu=3
                }else if(to.path=='/robot/warehouse'){
                    this.sideMenu=4
                }else if(to.path=='/robot/component'){
                    this.sideMenu=5
                }else if(to.path=='/robot/myStrategy'){
                    this.sideMenu=6
                }
            }
        },
		methods: {
			hideFoot(){
				$('#footers').hide();
			},
			description(description){
				this.sideMenu=description;
			},
			getUinfo() {
				getUserInfo(this.empty).then(data => {
					if(data.code == 200) {
						this.userType=data.data.userType;
					} else {
						this.$toast.center(data.message);
					}
				});
			},
			changeMenu(val){
				this.sideMenu=val;
				if(val==1){
					this.$router.push('/robot/overview')
				}else if(val==2){
					this.$router.push('/robot/instance')
				}else if(val==3){
					this.$router.push('/robot/factory')
				}else if(val==4){
					this.$router.push('/robot/warehouse')
				}else if(val==5){
					this.$router.push('/robot/component')
				}else if(val==6){
					this.$router.push('/robot/myStrategy')
				}
				else{
					if(this.userType!=1){
						this.$router.push({
							name:"creatRobot",
							params:{
								name:"creatRobot",
								id:val,
								type:'create'
							}
						})
					}else{
                        this.$toast.center(this.$t('netnew.sorrySpecial'));
					}
				}
			},
			checkMenu(){
				if(window.location.pathname=='/robot/overview'){
					this.sideMenu=1
				}else if(window.location.pathname=='/robot/instance'){
					this.sideMenu=2
				}else if(window.location.pathname=='/robot/factory'){
					this.sideMenu=3
				}else if(window.location.pathname=='/robot/warehouse'){
					this.sideMenu=4
				}else if(window.location.pathname=='/robot/component'){
					this.sideMenu=5
				}else if(window.location.pathname=='/robot/myStrategy'){
					this.sideMenu=6
				}
			},
			cretaUm(){
				if(this.userType!=1){
					this.$router.push({
						name:"createUnit",
						params:{
							name:"createUnit",
							id:'',
							type:'create'
						}
					})
				}else{
                    this.$toast.center(this.$t('netnew.sorrySpecial'));
				}
			}
		}
	}
</script>

<style scoped>

    .wrapper_box {
	    min-width: 1400px;
	    width: 1400px;
	    margin: 0 auto;
	    padding-top: 183px;
    }

    .nav_box {

    }

    .nav_box header {
        margin-top: 20px;
        text-align: center;
    }

    .nav_title {
        font-size: 18px;
        color: #fff;
        letter-spacing: 0;
        background: none;
    }

    .create_btn {
        background:none !important;
        cursor: pointer;
        width: 203px;
        height: 60px;
        line-height: 60px;
        margin: 0;
        padding: 0;
    }

    .create_btn:hover {
        background: #3158E4;
    }

    .crack {
        width: 44px;
    }

    .crack_top {

    }



    .nav_item_font {
        font-size: 16px;
        letter-spacing: 0;
        color: #000000;
    }
    .nav_item_font li:first-child a{
        border-top: 1px solid rgba(255,255,255,.1);
    }
    .nav_item_font li a{
        font-family: SFProText-Regular !important;
        font-size: 14px !important;
        letter-spacing: 0 !important;
        color: #718EBD ;
        border-bottom: 1px solid #ffffff12;
    }
    .nav_item_font li a:hover,
    .nav > li > a:focus{
        color: #fff ;
        opacity: 1 !important;
    }
    .rbt-active{
    	background: url(../assets/img/schover@2x.png) no-repeat;
    	background-size: contain;
    	color: #fff !important;
    }

.mail-box .nav-stacked > li{
    height:60px;
    line-height: 60px;
}
    .mail-box .nav-stacked > li > a{
        padding:0;
    }
    .mail-box .mail-nav-body{
        padding-top:0;
    }
</style>
