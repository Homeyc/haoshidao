<template>
	<div class="main-content content"  style="background:none;">
		<div class="main_img" style="position: absolute;">
			<img  src="../assets/img/banner/help.png">
			<div style="width:1400px;margin:0 auto;position:absolute;top:0;left:50%;margin-left:-700px;">
				<div style="color:#fff;font-size:38px;padding-bottom:22px;padding-top:245px;line-height:50px;">{{$t('net.allquestion')}}</div>
				<div style="width:60px;height:2px;background-color:#3AB3FF;"></div>
			</div>
        </div>
        <div class="market_sort_box" id="qstt" style="margin-left: 14%;width: 72%;height: 60px;position: absolute;top:465px;z-index: 1;">
            <div class="sort_item lg-width" :class="{'select_sort':mkTab==1}" style="width: 15%;margin-left: 27.5%;font-size: 15px;" @click="changemk(1)">{{$t('netnew.mk1')}}</div>
            <div class="sort_item lg-width" :class="{'select_sort':mkTab==2}" style="width: 15%;font-size: 15px;" @click="changemk(2)">{{$t('netnew.mk2')}}</div>
            <div class="sort_item lg-width" :class="{'select_sort':mkTab==3}" style="width: 15%;font-size: 15px;" @click="changemk(3)">{{$t('netnew.mk3')}}</div>
        </div>
    	<div class="list-left" v-show="mkTab!=3">
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==0}" @click="showIt(0)" v-show="mkTab==1"> {{$t('netnew.qt0')}} <i class="fa fa-angle-right" style="float: right;margin-top: 7px;margin-right: -15px;" v-show="currTitle==0"></i></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==1}" @click="showIt(1)" v-show="mkTab==1"> {{$t('netnew.qt1')}}<i class="fa fa-angle-right" style="float: right;margin-top: 7px;margin-right: -15px;" v-show="currTitle==1"></i></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==2}" @click="showIt(2)" v-show="mkTab==1"> {{$t('netnew.qt2')}}<i class="fa fa-angle-right" style="float: right;margin-top: 7px;margin-right: -15px;" v-show="currTitle==2"></i></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==3}" @click="showIt(3)" v-show="mkTab==1"> {{$t('netnew.qt3')}}<i class="fa fa-angle-right" style="float: right;margin-top: 7px;margin-right: -15px;" v-show="currTitle==3"></i></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==4}" @click="showIt(4)" v-show="mkTab==1"> {{$t('netnew.qt4')}}<i class="fa fa-angle-right" style="float: right;margin-top: 7px;margin-right: -15px;" v-show="currTitle==4"></i></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==5}" @click="showIt(5)" v-show="mkTab==1"> {{$t('netnew.qt5')}}<i class="fa fa-angle-right" style="float: right;margin-top: 7px;margin-right: -15px;" v-show="currTitle==5"></i></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==6}" @click="showIt(6)" v-show="mkTab==1"> {{$t('netnew.qt6')}}<i class="fa fa-angle-right" style="float: right;margin-top: 7px;margin-right: -15px;" v-show="currTitle==6"></i></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==13}" @click="showIt(13)" v-show="mkTab==2"> {{$t('netnew.qtext25')}}<i class="fa fa-angle-right" style="float: right;margin-top: 7px;margin-right: -15px;" v-show="currTitle==13"></i></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==11}" @click="showIt(11)" v-show="mkTab==2"><span id="marquee1" class="mqspan" @mouseenter="marqueeStart(1)"  @mouseleave="marqueeOut(1)"> {{$t('netnew.qtext21')}}</span></a>
    		<a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==9}" @click="showIt(9)" v-show="mkTab==2">  <span id="marquee2" class="mqspan" @mouseenter="marqueeStart(2)"  @mouseleave="marqueeOut(2)">{{$t('netnew.qtext17')}}</span></a>
   		    <a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==7}" @click="showIt(7)" v-show="mkTab==2">  <span id="marquee3" class="mqspan" @mouseenter="marqueeStart(3)"  @mouseleave="marqueeOut(3)">{{$t('netnew.qtext13')}}</span></a>
   		    <a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==8}" @click="showIt(8)" v-show="mkTab==2">  <span id="marquee4" class="mqspan" @mouseenter="marqueeStart(4)"  @mouseleave="marqueeOut(4)">{{$t('netnew.qtext15')}}</span></a>
   		    <a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==12}" @click="showIt(12)" v-show="mkTab==2"><span id="marquee5" class="mqspan" @mouseenter="marqueeStart(5)"  @mouseleave="marqueeOut(5)"> {{$t('netnew.qtext23')}}</span></a>
   		    <a class="wtitle1 per-sidebtn" v-bind:class="{'currActive':currTitle==10}" @click="showIt(10)" v-show="mkTab==2"><span id="marquee6" class="mqspan" @mouseenter="marqueeStart(6)"  @mouseleave="marqueeOut(6)" >{{$t('netnew.qtext19')}}</span></a>



    	</div>
    	<div class="list-right lg-width"  v-show="mkTab!=3">
    		<div class="lg-width qt-box" v-show="mkTab==1">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext1')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext2')}}
    			</span>
    		</div>
    		<div class="lg-width qt-box" v-show="mkTab==1">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext3')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext4')}}
    			</span>
    		</div>
    		<div class="lg-width qt-box" v-show="$i18n.locale=='en-US'&&mkTab==1">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext5')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext6')}}
    			</span>
    		</div>
    		<div class="lg-width qt-box" v-show="$i18n.locale!='en-US'&&mkTab==1">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext5')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext6')}}
    			</span>
    			<span style="font-size: 18px;padding: 5px 35px 5px 35px;display: table;width: 100%;line-height: 1.5;">
					1.{{$t('netnew.qtext7')}}
    			</span>
    			<span style="font-size: 18px;padding: 5px 35px 5px 35px;display: table;width: 100%;line-height: 1.5;">
					2.{{$t('netnew.qtext8')}}
    			</span>
    			<span style="font-size: 18px;padding: 5px 35px 5px 35px;display: table;width: 100%;line-height: 1.5;">
					3.{{$t('netnew.qtext9')}}
    			</span>
    			<span style="font-size: 18px;padding: 5px 35px 5px 35px;display: table;width: 100%;line-height: 1.5;">
					4.{{$t('netnew.qtext10')}}
    			</span>
    			<span style="font-size: 18px;padding: 5px 35px 5px 35px;display: table;width: 100%;line-height: 1.5;">
					5.{{$t('netnew.qtext11')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext12')}}
    			</span>
    		</div>
    		<div class="lg-width qt-box" v-show="mkTab==2">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext25')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext26')}}
    			</span>
    		</div>
    		<div class="lg-width qt-box" v-show="mkTab==2">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext21')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext22')}}
    			</span>
    		</div>
    		<div class="lg-width qt-box" v-show="mkTab==2">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext17')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext18')}}
    			</span>
    		</div>
    		<div class="lg-width qt-box" v-show="mkTab==2" >
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext13')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext14')}}
    			</span>
    		</div>
    		<div class="lg-width qt-box" v-show="mkTab==2">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext15')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext16')}}
    			</span>
    		</div>

    		<div class="lg-width qt-box" v-show="mkTab==2">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext23')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext24')}}
    			</span>
    		</div>

    		<div class="lg-width qt-box" v-show="mkTab==2">
    			<span style="color: #fff;font-size: 25px;border-bottom: rgba(255,255,255,0.1) solid 1px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
    				{{$t('netnew.qtext19')}}
    			</span>
    			<span style="font-size: 18px;padding: 25px;display: table;width: 100%;line-height: 1.5;">
					{{$t('netnew.qtext20')}}
    			</span>
    		</div>

			<div v-show="$i18n.locale=='en-US'&&mkTab==1"  class="lg-width context" style="width: 100%;" v-html="marken"></div>
			<div v-show="$i18n.locale=='zh-CN'&&mkTab==1"  class="lg-width context" style="width: 100%;" v-html="markcn"></div>
			<div v-show="$i18n.locale=='ko'&&mkTab==1"  class="lg-width context" style="width: 100%;" v-html="markko"></div>

    	</div>
    	<div class="lg-width contact-us" v-if="mkTab==3">
    		<div class="lg-width qt-box">
    			<div class="lg-width" style="width: 100%;border-bottom: 1px solid rgba(255,255,255,0.1);">
    				<div class="lg-width" style="width: 60%;margin-top: 42px;">
    					<span style="color: #fff;margin-left: 40%;">{{$t('netnew.kfyx')}}:<a style="color: #718EBD;margin-left: 2px;" href="mailto:service@netcentric.io">service@netcentric.io</a></span>
    				</div>
    				<div class="lg-width" style="width: 40%;margin-top: 42px;">
    					<span style="color: #fff;">{{$t('netnew.zwdbq')}}:<a style="color: #718EBD;margin-left: 2px;" target="_blank" href="http://t.me/NetCentric_cn">t.me/NetCentric_cn</a></span>
    				</div>
    				<div class="lg-width" style="width: 60%;margin-top: 20px;">
    					<span style="color: #fff;margin-left: 40%;">{{$t('netnew.jszc')}}:<a style="color: #718EBD;margin-left: 2px;" href="mailto:support@netcentric.io">support@netcentric.io</a></span>
    				</div>
    				<div class="lg-width" style="width: 40%;margin-top: 20px;">
    					<span style="color: #fff;">{{$t('netnew.ywdbq')}}:<a style="color: #718EBD;margin-left: 2px;" target="_blank" href="http://t.me/NetCentricEnglish">t.me/NetCentricEnglish</a></span>
    				</div>
    				<div class="lg-width" style="width: 60%;margin-top: 20px;margin-bottom: 40px;">
    					<span style="color: #fff;margin-left: 40%;">{{$t('netnew.swhz')}}:<a style="color: #718EBD;margin-left: 2px;" href="mailto:bd@netcentric.io">bd@netcentric.io</a></span>
    				</div>
    			</div>
    			<div class="lg-width" style="width: 100%;">
    				<div class="lg-width" style="width: 50%;margin-top: 42px;">
    					<div class="lg-width" style="width: 100%;">
    						<div class="lg-width" style="width:275px;text-align: center;color: #fff;float: right;">{{$t('netnew.wxgzh')}}</div>
    					</div>
    					<div class="lg-width" style="margin-top: 20px;float: right;margin-bottom: 50px;">
    						<img src="../assets/img/qr/public_wechat.png" style="width: 125px;height: 125px;margin-right: 75px;">
    					</div>

					</div>
					<div class="lg-width" style="width: 50%;margin-top: 42px;">
    					<div class="lg-width" style="width: 100%;">
    						<div class="lg-width" style="width:275px;text-align: center;color: #fff;">{{$t('netnew.wxkfh')}}</div>
    					</div>
    					<div class="lg-width" style="margin-top: 20px;margin-bottom: 50px;">
    						<img src="../assets/img/wcsQR.png" style="width: 125px;height: 125px;margin-left: 75px;">
    					</div>

					</div>
    			</div>
			</div>
    	</div>

	</div>
</template>
<script>
	import marked from 'marked/marked.min.js'
	import "../assets/github.css";
	import markenload from "../assets/doc/faq_en.md";
	import markcnload from "../assets/doc/faq_cn.md";
	import markkoload from "../assets/doc/faq_ko.md";
	export default {

		data(){
			return{
				currTitle:0,
				scrollTop:0,
				scrollTop1:0,
				show:1,
				mkTab:1,
				marken:markenload,
				markcn:markcnload,
				markko:markkoload,
			}
		},

		computed:{
	       compiledMarkdown () {
	        //this.articleDetail.context数据
	         return marked(markload, { sanitize: true })
	       }

	     },
		methods:{
			showIt(id){
				this.currTitle=id;
				this.show=id;
				if(this.$i18n.locale== 'zh-CN'){
					if(id==0){
						document.documentElement.scrollTop =360;
						document.body.scrollTop =360;
					}else if(id==1){
						document.documentElement.scrollTop =670;
						document.body.scrollTop =670;
					}else if(id==2){
						document.documentElement.scrollTop =670;
						document.body.scrollTop =670;
					}else if(id==3){
						document.documentElement.scrollTop =1578;
						document.body.scrollTop =1578;
					}else if(id==4){
						document.documentElement.scrollTop =3976;
						document.body.scrollTop =3976;
					}else if(id==5){
						document.documentElement.scrollTop =5980;
						document.body.scrollTop =5980;
					}else if(id==6){
						document.documentElement.scrollTop =10356;
						document.body.scrollTop =10356;
					}else if(id==7){
						document.documentElement.scrollTop =1160;
						document.body.scrollTop =1160;
					}else if(id==8){
						document.documentElement.scrollTop =1360;
						document.body.scrollTop =1360;
					}else if(id==9){
						document.documentElement.scrollTop =760;
						document.body.scrollTop =760;
					}else if(id==10){
						document.documentElement.scrollTop =1560;
						document.body.scrollTop =1560;
					}else if(id==11){
						document.documentElement.scrollTop =560;
						document.body.scrollTop =560;
					}else if(id==12){
						document.documentElement.scrollTop =1560;
						document.body.scrollTop =1560;
					}else if(id==13){
						document.documentElement.scrollTop =360;
						document.body.scrollTop =360;
					}

				}else if(this.$i18n.locale== 'ko'){
					if(id==0){
						document.documentElement.scrollTop =360;
					}else if(id==1){
						document.documentElement.scrollTop =670;
					}else if(id==2){
						document.documentElement.scrollTop =905;
					}else if(id==3){
						document.documentElement.scrollTop =3133;
					}else if(id==4){
						document.documentElement.scrollTop =5533;
					}else if(id==5){
						document.documentElement.scrollTop =7533;
					}else if(id==6){
						document.documentElement.scrollTop =12133;
					}else if(id==7){
						document.documentElement.scrollTop =1571;
					}else if(id==8){
						document.documentElement.scrollTop =1815;
					}else if(id==9){
						document.documentElement.scrollTop =2010;
					}else if(id==10){
						document.documentElement.scrollTop =2209;
					}else if(id==11){
						document.documentElement.scrollTop =2426;
					}else if(id==12){
						document.documentElement.scrollTop =2680;
					}else if(id==13){
						document.documentElement.scrollTop =2915;
					}
				}else{
					if(id==0){
						document.documentElement.scrollTop =360;
					}else if(id==1){
						document.documentElement.scrollTop =670;
					}else if(id==2){
						document.documentElement.scrollTop =905;
					}else if(id==3){
						document.documentElement.scrollTop =3133;
					}else if(id==4){
						document.documentElement.scrollTop =5533;
					}else if(id==5){
						document.documentElement.scrollTop =7533;
					}else if(id==6){
						document.documentElement.scrollTop =12133;
					}else if(id==7){
						document.documentElement.scrollTop =1571;
					}else if(id==8){
						document.documentElement.scrollTop =1815;
					}else if(id==9){
						document.documentElement.scrollTop =2010;
					}else if(id==10){
						document.documentElement.scrollTop =2209;
					}else if(id==11){
						document.documentElement.scrollTop =2426;
					}else if(id==12){
						document.documentElement.scrollTop =2680;
					}else if(id==13){
						document.documentElement.scrollTop =2915;
					}
				}


			},
			marqueeOut(id){
				$('#marquee'+id).removeClass("animate");
			},
			marqueeStart(id){
				$('#marquee'+id).addClass("animate");
			},
			changemk(id){
				if(this.$i18n.locale== 'zh-CN'){
					if(id==1){
						this.mkTab=1;
//						alert(document.documentElement.scrollTop);
					}else if(id==2){
						this.mkTab=2;
					}else if(id==3){
						this.mkTab=3;

					}
				}else if(this.$i18n.locale== 'ko'){
					if(id==1){
						this.mkTab=1;

					}else if(id==2){
						this.mkTab=2;

					}else if(id==3){
						this.mkTab=3;

					}
				}else{
					if(id==1){
						this.mkTab=1;

					}else if(id==2){
						this.mkTab=2;

					}else if(id==3){
						this.mkTab=3;

					}
				}
			},
			handleScroll(){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		  		if(scrollTop>380){
			  		$(".list-left").css("position","fixed")
			  		$(".list-left").css("top","165px");
			  		$("#qstt").css("position","fixed")
			  		$("#qstt").css("top","100px")
			  		$("#qstt").css("background","#000812")
			  	}else if(scrollTop<380){
			  		$(".list-left").css("position","absolute");
			  		$(".list-left").css("top","525px");
			  		$("#qstt").css("position","absolute");
			  		$("#qstt").css("top","465px");
			  		$("#qstt").css("background","none");
			  	}
			},
			showsc(){
				alert(document.documentElement.scrollTop);
			},
			getParams(){
				var params=this.$route.params;
				if(params.contact){
					this.mkTab=3;
				}
			},

		},
		mounted () {
			window.addEventListener('scroll', this.handleScroll)
			$('.list-left').css("min-height", document.documentElement.clientHeight-66 + "px");
			$('#qaMain').css("min-height", document.documentElement.clientHeight-66 + "px");
			this.getParams();
		 }
	}
</script>

<style scoped>
	.floatright{
		margin-left: 15px;
	}
	.qt-box{
		background: url('../assets/img/markbox@2x.png') no-repeat;
		background-size:cover;
		width: 100%;
		margin-bottom: 45px;
	}
	.amiss:hover,.amiss:focus{
		color:#0d679a;
	}
	.borderight{
		position: fixed;
		width:760px;
		height:100%;
		border: 1px solid #dcdcdc;
	}
	.us{
		color:#0d679a;
	}
	.tps{
		width:650px;
		margin:10px 50px;
	}
	.tps img{
		width:650px;
	}
	.btitle{
		font-size: 18px;
		color:#333333;
		font-weight: 400;
	}

	.blocks{
		padding-left:50px;
	}
	.codel{
	     font-size: 18px;
    margin-top: 5px;
    margin-left: 22px;
    float: left;
    text-align: center;
    width: 175px;
	}
	.coder{
   text-align: center;
    font-size: 18px;
    margin-top: 6px;
    float: left;
    width: 165px;
    margin-left: 30px;
	}
	.t1{
		margin-right: 20px;
	}
	.list-left{
		width:14%;
		min-height:575px;
		color:#718EBD;
		background:none;
		position: absolute;
		top:525px;
		left: 13.5%;
	}
	.target-fix {
	    position: relative;
	    top: 244px;
	    display: block;
	    height: 0;
	    overflow: hidden;
	    line-height: 22px;
	}
	.list-right{
	    overflow-y: auto;
	    overflow: hidden;
	    color: #718EBD;
	    font-size: 18px;
	    width: 60%;
	    position: relative;
	    height: 100%;
	    text-align: justify;
	    padding-left: 25px;
	    background: none;
	    padding-top: 25px;
	    margin-top: 525px;
	    padding-bottom: 50px;
	    padding-right: 50px;
	    margin-left: 28.5%
	}
	.list-left a{
		color:#718EBD;
		width: 100%;
	}
	.wtitle{
		/*width:100%;*/
		display: inline-block;
		font-size:20px;
		font-weight: 400;
	    margin: 0;
    	padding: 5px 25px;
    	text-align: left;

	}
	.lxwm{
		width:100%;
		display: inline-block;
		font-size:20px;
		font-weight: 400;
	    margin: 0;
    	padding: 5px 25px;
    	text-align: left;
    	cursor: pointer;
	}
	.texts{
		color:#32323A;
		font-size: 16px;
		padding-left: 40px;
		margin:6px 0;
	}
	.questions{
		 text-indent: 2em;
		font-size: 14px;
		margin:4px 25px;
		padding-left: 20px;
		line-height: 20px;
  		letter-spacing: normal;
  		text-align:justify;
		text-justify:inter-ideograph;
		word-wrap: break-word;word-break: normal;
	}
	.ques{
		font-size: 14px;
		padding-left: 25px;
		margin:10px 15px 10px 15px;
	}
	.wtitle1{
		cursor: pointer;
		/*width:100%;*/
		display: inline-block;
		font-size: 16px;
		margin:2px 0;
		padding:5px 20px 5px 20px;
		cursor: pointer;
		text-align: justify;
	}
	.currActive{
	   	background: url(../assets/img/schover@2x.png) no-repeat;
    	background-size: contain;
    	color: #fff !important;
	}
	.currActive1{
		width:100%;
		display: inline-block;
		font-size:20px;
		margin:0;
		padding:5px 25px;
		background: #EAF0F0;
		}
	.context{
		padding: 25px;
		background: #ffffff0d;
		border:1px #ffffff1a solid;
	}
	img{
		margin-left: 5%;
		max-width: 100%;
	}
	.context h2{
		color:#fff!important;
	}
	.context h1,h2,p{
		padding-bottom: 0px;
	}
	.context h2{
		color: #fff !important;
	}
	.per-sidebtn{
		line-height: 30px !important;
		overflow: hidden;
		text-align: center;
	}

	.contact-us{
		overflow-y: auto;
	    overflow: hidden;
	    color: #718EBD;
	    font-size: 18px;
	    width: 72%;
	    position: relative;
	    height: 100%;
	    text-align: justify;
	    background: none;
	    padding-top: 25px;
	    margin-top: 525px;
	    padding-bottom: 50px;
	    margin-left: 14%;
	}



</style>
