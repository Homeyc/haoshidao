<template>
	<!--<div class="bg_color" :style="background: url("+bg_img+")">-->
	<div class="bg_color">
		<div class="box">
			<!--头部-->
			<div class="topbox">
				<div class="top" style="height: 850px;">
					<!--banner位-->
					<img v-show="$i18n.locale=='zh-CN'" src='../assets/img/about_banner@2x.png'>
					<img v-show="$i18n.locale!='zh-CN'" src='../assets/img/about_banner_en.png'>
					<a href="./NetCentricWP_EN.pdf" class="ab-bannerbtnl" v-show="$i18n.locale=='en-US'" target="_blank" style="{background:'url('+arrow2x+')'}">White Paper<img :src="arrow2x" style="margin-left: 14px;"></a>
					<a href="./NetCentricWP_KR.pdf" class="ab-bannerbtnl" v-show="$i18n.locale=='ko'" target="_blank" style="{background:'url('+arrow2x+')'}">White Paper<img :src="arrow2x" style="margin-left: 14px;"></a>
					<a href="./NetCentricWP_CN.pdf" class="ab-bannerbtnl" v-show="$i18n.locale=='zh-CN'" target="_blank" style="{background:'url('+arrow2x+')'}">白皮书<img :src="arrow2x" style="margin-left: 14px;"></a>
					<a class="ab-bannerbtnr" data-toggle="modal" href="#netVideo"v-show="$i18n.locale!='zh-CN'" target="_blank" style="{background:'url('+arrow2x+')'}">Video Introduction<img :src="arrow2x" style="margin-left: 14px;"></a>
					<a class="ab-bannerbtnr" data-toggle="modal" href="#netVideo" v-show="$i18n.locale=='zh-CN'" target="_blank" style="{background:'url('+arrow2x+')'};cursor: pointer;">视频介绍<img :src="arrow2x" style="margin-left: 14px;"></a>

				</div>
			</div>

			<!--第二部分-->
			<div class="TCbox" style="padding: 60px 80px;height: 320px;">
				<div class="lg-width" style="width: 100%;text-align: center;">
					<span class="ab-title">
						{{$t('netnew.aboutTitle1')}}                		
                	</span>
				</div>
				<div class="lg-width" style="width: 100%;text-align: left;margin-top: 60px;">
					<label class="ab-text">
            			{{$t('netnew.aboutText1')}}
                	</label>
				</div>
				<!--<img :src="about_logo" style="float: right;width: 110px;margin-top: 32px;">-->
			</div>

			<div class="TCbox" style="padding: 60px 80px;height: 410px;">
				<div class="lg-width" style="width: 705px;text-align: center;">
					<span class="ab-title">
						{{$t('netnew.aboutTitle2')}}                		
                	</span>
				</div>
				<div class="lg-width" style="width: 705px;text-align: left;margin-top: 60px;">
					<label class="ab-text">
            			 {{$t('netnew.aboutText2')}}
                	</label>
				</div>
				<div class="lg-width" style="width: 480px;text-align: left;margin-top: 24px;margin-left: 24px;">
					<img src="../assets/img/about/aboutimg1@2x.png" style="width: 180px;">
					<img src="../assets/img/about/aboutimg2@2x.png" style="width: 148px;">
					<img src="../assets/img/about/aboutimg3@2x.png" style="width: 148px;">
				</div>
			</div>

			<div class="TCbox" style="padding: 60px 80px;height: 320px;">
				<div class="lg-width" style="width: 798px;text-align: center;float: right;">
					<span class="ab-title">
						{{$t('netnew.aboutTitle3')}}              		
                	</span>
				</div>
				
				<div class="lg-width" style="width: 390px;text-align: left;margin-top: 32px;margin-left: 52px;margin-top: 32px;">
					<img src="../assets/img/about/aboutimg4@2x.png" style="173px;">
				</div>
				<div class="lg-width" style="width: 798px;text-align: left;margin-top: 60px;">
					<label class="ab-text">
            			{{$t('netnew.aboutText3')}}
                	</label>
				</div>
			</div>

			<div class="TCbox" style="padding: 60px 80px;height: 750px;">
				<div class="lg-width" style="width: 100%;text-align: left;">
					<label class="ab-title">
						{{$t('netnew.aboutTitle4')}}              		
                	</label>
				</div>
				<div class="swiper-container swp1" style="margin-left: -30px;margin-top: 45px;">
					<ul class="Team1 swiper-wrapper">
						<li class="swiper-slide">
							<div class="teaminfo">
								<img :src="T1" class="uhead">
								<h4><a href="https://www.linkedin.com/in/%E9%BB%84%E9%9D%96-jim-huang-520ba578/ " class="teamin" target="_blank"><img
										 :src="in_img" width="15" height="15"></a>{{$t('netnew.hj')}}</h4>
								<span>{{$t('netnew.coFounder')}}</span>
							</div>
						</li>
						<li class="swiper-slide">
							<div class="teaminfo">
								<img :src="T2" class="uhead">
								<h4><a href="https://www.linkedin.com/in/conner-mo-7ab4477/ " target="_blank" class="teamin"><img :src="in_img"
										 width="15" height="15"></a>{{$t('netnew.my')}}</h4>
								<span>{{$t('netnew.coFounder')}}</span>
							</div>
						</li>

						<li class="swiper-slide">
							<div class="teaminfo">
								<img :src="T3" class="uhead">
								<h4><a href="https://www.linkedin.com/in/hanchao-yang-6956a122/ " target="_blank" class="teamin"><img :src="in_img"
										 width="15" height="15"></a>{{$t('netnew.yhc')}}</h4>
								<span>{{$t('netnew.coFounder')}}</span>
							</div>
						</li>

					</ul>
					<div class="swiper-pagination new-spage" ></div>
				</div>
				<div class="lg-width" style="margin-top: 60px;width: 100%;">
					<label style="font-size: 24px;">{{$t('netnew.aboutTitle5')}} </label>
				</div>
				<div class="swiper-container swp2" style="margin-left: -30px;margin-top: 100px;">
					<ul class="Team1 swiper-wrapper">
						<li class="swiper-slide">
							<div class="teaminfo">
								<img :src="G2" class="uhead">
								<h4><a href="https://www.linkedin.com/in/pierre-maarek-037a321/ " class="teamin" target="_blank"><img :src="in_img"
						 width="15" height="15"></a>Pierre Maarek</h4>
							</div>
						</li>
						<li class="swiper-slide">
							<div class="teaminfo">
								<img :src="G3" class="uhead">
								<h4><a href="https://www.linkedin.com/in/mshaalan/" class="teamin" target="_blank"><img :src="in_img" width="15"
						 height="15"></a>Mohammed S. Shaalan,<br />CFA, FRM</h4>
							</div>
						</li>
						<li class="swiper-slide">
							<div class="teaminfo">
								<img :src="G6" class="uhead">
								<h4><a href="https://www.linkedin.com/in/xunzou/ " target="_blank" class="teamin"><img :src="in_img" width="15"
						 height="15"></a>David Zou</h4>

							</div>
						</li>
						<li class="swiper-slide">
							<div class="teaminfo">
								<img :src="G7" class="uhead">
								<h4><a href="" class="teamin"><img :src="in_img" width="15" height="15"></a>Akatsuki Ryu</h4>
							</div>
						</li>
					</ul>
					<div class="swiper-pagination new-spage"></div>
				</div>
			</div>						 
		</div>
		
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="netVideo" class="modal fade"  @click="pause()">
			<div class="modal-dialog " >
                <div class="modal-content vodio-box" v-show="$i18n.locale=='zh-CN'">
                	<div style="background: #fff;">
                        <button type="button" class="close close1" style="height: 20px;width: 20px;" data-dismiss="modal" aria-hidden="true" onclick="document.getElementById('video').pause()"><img style="position:absolute;top: 5px;right:5px;" :src="close"/></button>                                          
                    </div>
                    <video id="video" width="600" height="400" controls>
					  <source :src="net_video" type="video/mp4">
					</video>
					   
              	</div>
              	<div class="modal-content vodio-box" v-show="$i18n.locale=='en-US'">
              		<div  style="background: #fff;">
                        <button type="button" class="close close1" style="height: 20px;width: 20px;" data-dismiss="modal" aria-hidden="true" onclick="document.getElementById('video2').pause()"><img style="position:absolute;top: 5px;right:5px;" :src="close"/></button>                                          
                    </div>
                    <video id="video2" width="600" height="400" controls>
					  <source :src="en_video" type="video/mp4">
					</video>					   
              	</div>
  			</div>
		</div>
	</div>

</template>

<script>
	import "../assets/css/about.css";
	import "../assets/css/swiper.css"
	import Swiper from 'swiper';
	export default {
		name: "About",
		props: {
			close:{
				type: String,
				default: require("@/assets/img/close.png")
			},			
			map_img: {
				type: String,
				default: require("@/assets/img/map.png")
			},
			Inv1: {
				type: String,
				default: require("@/assets/img/Inv1.png")
			},
			Inv2: {
				type: String,
				default: require("@/assets/img/Inv2.png")
			},
			Inv3: {
				type: String,
				default: require("@/assets/img/Inv3.png")
			},
			Inv4: {
				type: String,
				default: require("@/assets/img/Inv4.png")
			},
			Inv5: {
				type: String,
				default: require("@/assets/img/Inv5.png")
			},

			arrow2x: {
				type: String,
				default: require("@/assets/img/about/arrow@2x.png")
			},
			arrow: {
				type: String,
				default: require("@/assets/img/about/arrow@2x.png")
			},

			cm1: {
				type: String,
				default: require("@/assets/img/about/cm1.png")
			},
			cm1_2x: {
				type: String,
				default: require("@/assets/img/about/cm1@2x.png")
			},

			cm2: {
				type: String,
				default: require("@/assets/img/about/cm2.png")
			},
			cm2_2x: {
				type: String,
				default: require("@/assets/img/about/cm2@2x.png")
			},

			cm3: {
				type: String,
				default: require("@/assets/img/about/cm3.png")
			},
			cm3_2x: {
				type: String,
				default: require("@/assets/img/about/cm3@2x.png")
			},

			factory1: {
				type: String,
				default: require("@/assets/img/about/factory1.png")
			},
			factory1_2x: {
				type: String,
				default: require("@/assets/img/about/factory1@2x.png")
			},

			factory2_cn: {
				type: String,
				default: require("@/assets/img/about/factory2_cn.png")
			},
			factory2_cn_2x: {
				type: String,
				default: require("@/assets/img/about/factory2_cn@2x.png")
			},

			factory2_en: {
				type: String,
				default: require("@/assets/img/about/factory2_en.png")
			},
			factory2_en_2x: {
				type: String,
				default: require("@/assets/img/about/factory2_en@2x.png")
			},

			factory3: {
				type: String,
				default: require("@/assets/img/about/factory3.png")
			},
			factory3_2x: {
				type: String,
				default: require("@/assets/img/about/factory3@2x.png")
			},

			factory4: {
				type: String,
				default: require("@/assets/img/about/factory4.png")
			},
			factory4_2x: {
				type: String,
				default: require("@/assets/img/about/factory4@2x.png")
			},

			factory5: {
				type: String,
				default: require("@/assets/img/about/factory5.png")
			},
			factory5_2x: {
				type: String,
				default: require("@/assets/img/about/factory5@2x.png")
			},

			high_barrier_to_entry: {
				type: String,
				default: require("@/assets/img/about/High Barrier To Entry.png")
			},
			high_barrier_to_entry_2x: {
				type: String,
				default: require("@/assets/img/about/High Barrier To Entry@2x.png")
			},

			in_img: {
				type: String,
				default: require("@/assets/img/about/in@2x.png")
			},

			sol1: {
				type: String,
				default: require("@/assets/img/about/sol1.png")
			},
			sol1_2x: {
				type: String,
				default: require("@/assets/img/about/sol1@2x.png")
			},

			sol2: {
				type: String,
				default: require("@/assets/img/about/sol2.png")
			},
			sol2_2x: {
				type: String,
				default: require("@/assets/img/about/sol2@2x.png")
			},

			sol3: {
				type: String,
				default: require("@/assets/img/about/sol3.png")
			},
			sol3_2x: {
				type: String,
				default: require("@/assets/img/about/sol3@2x.png")
			},

			sol4: {
				type: String,
				default: require("@/assets/img/about/sol4.png")
			},
			sol4_2x: {
				type: String,
				default: require("@/assets/img/about/sol4@2x.png")
			},

			Time_Consuming: {
				type: String,
				default: require("@/assets/img/about/Time-Consuming.png")
			},
			Time_Consuming_2x: {
				type: String,
				default: require("@/assets/img/about/Time-Consuming@2x.png")
			},

			tra1: {
				type: String,
				default: require("@/assets/img/about/tra1.png")
			},
			tra1_2x: {
				type: String,
				default: require("@/assets/img/about/tra1@2x.png")
			},

			tra2: {
				type: String,
				default: require("@/assets/img/about/tra2.png")
			},
			tra2_2x: {
				type: String,
				default: require("@/assets/img/about/tra2@2x.png")
			},

			tra3: {
				type: String,
				default: require("@/assets/img/about/tra3.png")
			},
			tra3_2x: {
				type: String,
				default: require("@/assets/img/about/tra3@2x.png")
			},

			T1: {
				type: String,
				default: require("@/assets/img/T1.png")
			},
			T2: {
				type: String,
				default: require("@/assets/img/T2.png")
			},

			T3: {
				type: String,
				default: require("@/assets/img/T3.png")
			},

			G1: {
				type: String,
				default: require("@/assets/img/G1.png")
			},

			G2: {
				type: String,
				default: require("@/assets/img/G2.png")
			},

			G3: {
				type: String,
				default: require("@/assets/img/G3.png")
			},

			G4: {
				type: String,
				default: require("@/assets/img/G4.png")
			},

			G5: {
				type: String,
				default: require("@/assets/img/G5.png")
			},

			G6: {
				type: String,
				default: require("@/assets/img/G6.png")
			},

			G7: {
				type: String,
				default: require("@/assets/img/G7.png")
			},
			bg_img: {
				type: String,
				default: require("@/assets/img/about/about_header.gif")
			},
			about_logo: {
				type: String,
				default: require("@/assets/img/about/about_logo@2x.png")
			}

		},
		methods: {
			pause(){
				document.getElementById('video').pause();
				document.getElementById('video2').pause();
			},
			swiperTab() {
				var swiper = new Swiper('.swp1', {
					navigation: {
						nextEl: '.arrow1r',
						prevEl: '.arrow1l',
					},
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					initialSlide: 1,
					slideToClickedSlide: true,
					centeredSlides: true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					on: {
						touchMove: function(event) {
							//你的事件
							$(".teaminfo").css("height", "");
							$(".teaminfo").css("margin-top", "");
						},
					},
				});

				var swiper = new Swiper('.swp2', {
					slidesPerView: 3,
					spaceBetween: 30,
					loop: true,
					initialSlide: 1,
					slideToClickedSlide: true,
					centeredSlides: true,
					navigation: {
						nextEl: '.arrow2r',
						prevEl: '.arrow2l',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					on: {
						touchMove: function(event) {
							//你的事件
							$(".teaminfo").css("height", "");
							$(".teaminfo").css("margin-top", "");
						},
					},
				});
			}
		},
		mounted() {
			this.swiperTab();
		}
	}
</script>

<style scoped>
	.mod {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: none;
		z-index: 5000;
	}
	
	.sorry {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		display: none;
		z-index: 5000;
	}
	
	.mod1 {
		width: 600px;
		height: 400px;
		position: fixed;
		left: 50%;
		margin-top:100px;
		margin-left: -300px;
		background: white;
		/*border: 1px solid #000000;*/
	}
	
	.close {
		color: #fff;
		font-size: 25px;
		position: absolute;
		right: 5px;
		z-index: 5005;
	}
	
	.banner-btn>a:last-child {
		/*background: url(images/arrowright.png) no-repeat 160px center #0b0b6f;*/
		width: 170px;
		padding-left: 20px;
	}
	/*// now*/
	
	.topbox {
		width: 100%;
		overflow: hidden;
		height: 100%;
		/*background: url(../images/topbg.gif) no-repeat;*/
		background-size: cover;
		background-position: center;
	}
	
	.banner-btn>a {
		/*background: url(../images/arrowright.png) no-repeat 120px center #0b0b6f;*/
		color: #fff;
		float: left;
		padding-left: 18px;
		margin-right: 20px;
	}
	
	.beta>a {
		width: 170px;
		height: 40px;
		/*background: url(../images/betabg.png) no-repeat;*/
		display: block;
		color: #fff;
		line-height: 40px;
		padding-left: 20px;
		font-size: 14px;
		box-shadow: 2px 2px 5px #080856;
	}
	
	.solution {
		height: 784px;
		/*background: url(../images/bg.png) no-repeat top center;*/
		padding-top: 40px;
		position: relative;
		padding-bottom: 20px;
	}
	
	.Robotbox {
		background: bottom center;
		padding-bottom: 40px;
		padding-top: 20px;
	}
	
	.Investors>ul li {
		width: 224px;
		height: 178px;
		/*background: url(../images/Investors.png) no-repeat;*/
		display: block;
		float: left;
		margin: 0 10px;
	}
	
	.invester_title {
		font-family: SFProDisplay-Bold;
		font-size: 40px;
		color: #000000;
		letter-spacing: 0;
	}
	
	.sponsor-ul li {
		width: 20%;
		height: 178px;
		display: block;
		float: left;
	}
	
	.b_bg {
		/*background-image: linear-gradient(-180deg, #000000 2%, #242554 97%);*/
		padding: 80px 112px 0 112px;
		padding-top: 150px;
		padding-bottom: 200px;
		height: 650px;
	}
	
	.b_bg h3 {
		z-index: 999;
	}
	.vodio-box{
		width: 602px;
	}
	
	.b_bg h3 {
		font-family: SFProDisplay-Bold;
		font-size: 48px;
		color: #FFFFFF;
		letter-spacing: 0;
	}
	
	.new_btn a {
		border: 1px solid #FFFFFF;
		border-radius: 4px;
		font-family: SFProDisplay-Bold;
		font-size: 24px;
		color: #FFFFFF;
		letter-spacing: 0;
		height: 64px !important;
		width: 236px !important;
		line-height: 64px;
	}
	
	.new_btn a img {
		float: right;
		width: 18px;
		margin-right: 16px;
		margin-top: 24px;
	}
	
	.new_tc_title {
		font-family: SFProDisplay-Bold;
		font-size: 40px;
		color: #000000;
		letter-spacing: 0;
		padding-left: 10px;
	}
	
	.line_1_1_img {
		height: 58px;
		width: 27px;
		margin-right: 23px;
	}
	
	.line_1_2_img {
		height: 58px;
		width: 43px;
	}
	
	.line_2_1_img {
		height: 50px;
		width: 39px;
		margin-right: 11px;
	}
	
	.line_2_2_img {
		height: 29px;
		width: 45px;
	}
	
	.line_3_1_img {
		height: 50px;
		width: 53px;
		margin-left: 90px;
		margin-right: 10px;
	}
	
	.line_3_2_img {
		height: 58px;
		width: 37px;
	}
	
	.tctextl,
	.tctextr {
		font-family: SFProText-Semibold;
		font-size: 16px;
		color: #000000;
		letter-spacing: 0;
	}
	
	.bg_color {
		min-width: 1440px;
	}
	
	.map_img {
		position: absolute;
		left: 65%;
		top: 20%;
	}
	
	.ab-title {
		font-size: 38px;
		color: #fff;
		font-weight: 500;
	    padding-bottom: 19px;
    	border-bottom: 1px solid #3A98D8;
	}
	
	.ab-text {
		font-size: 16px;
		color: #718EBD;
		font-weight: 500;
		line-height: 2;
	} 
	.close{
		  color: #fff;
	    font-size: 25px;
	    position: absolute;
	    right: 5px;
	    z-index: 5005;
	}
	.ab-bannerbtnl{
	    position: absolute;
	    top: 460px;
	    left: 13.5%;
	    color: #718EBD;
	}	
	.ab-bannerbtnr{
	    position: absolute;
	    top: 460px;
	    left: 23.5%;
	    color: #718EBD;
	}	
</style>