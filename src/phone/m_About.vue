<template>
	<div class="lg-width bg_color" style="min-height: 667px;width: 100%;">
		<div class="main_img" style="position: relative;margin-bottom: 0px;">
			<img v-show="$i18n.locale=='zh-CN'" src="../assets/img/banner/m_about_banner.png">
			<img v-show="$i18n.locale=='en-US'" src="../assets/img/banner/m_about_banner_en.png">
			<a class="m_banner_btn1" href="./NetCentricWP_EN.pdf"  v-show="$i18n.locale=='en-US'" target="_blank">White Paper<img src="../assets/img/about/arrow@2x.png" style="margin-left: 10px;width: 45px;"></a>
			<a class="m_banner_btn1" href="./NetCentricWP_CN.pdf"  v-show="$i18n.locale=='zh-CN'" target="_blank" >白皮书<img src="../assets/img/about/arrow@2x.png" style="margin-left: 10px;width: 45px;"></a>
			<a class="m_banner_btn1" href="./NetCentricWP_KR.pdf"  v-show="$i18n.locale=='ko'" target="_blank" >白皮书<img src="../assets/img/about/arrow@2x.png" style="margin-left: 10px;width: 45px;"></a>
			<a class="m_banner_btn2" data-toggle="modal" href="#netVideo" v-show="$i18n.locale=='en-US'" target="_blank" >Video Introduction<img src="../assets/img/about/arrow@2x.png" style="margin-left: 10px;width: 45px;"></a>
			<a class="m_banner_btn2" data-toggle="modal" href="#netVideo" v-show="$i18n.locale=='zh-CN'" target="_blank">视频介绍<img src="../assets/img/about/arrow@2x.png" style="margin-left: 10px;width: 45px;"></a>
		</div>
		<div class="lg-width about-box">
			<div class="lg-width" style="width: 100%;color: #fff;text-align: center;font-size: 30px;padding: 25px 0;">
				{{$t('netnew.aboutTitle1')}}
			</div>
			<hr style="width: 177px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0px auto;">
			<div class="lg-width" style="width: 100%;color: #718EBD;text-align: left;font-size: 16px;padding: 15px 30px;line-height: 1.5;margin-top: 10px;">
				{{$t('netnew.aboutText1')}}
			</div>
		</div>
		<div class="lg-width about-box" style="margin-top: 25px;">
			<div class="lg-width" style="width: 100%;color: #fff;text-align: center;font-size: 30px;padding: 25px 0;">
				{{$t('netnew.aboutTitle2')}}
			</div>
			<hr style="width: 177px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0px auto;">
			<div class="lg-width" style="width: 100%;color: #718EBD;text-align: left;font-size: 16px;padding: 15px 30px;line-height: 1.5;margin-top: 10px;">
				{{$t('netnew.aboutText2')}}
			</div>
		</div>
		<div class="lg-width about-box" style="margin-top: 25px;">
			<div class="lg-width" style="width: 100%;color: #fff;text-align: center;font-size: 30px;padding: 25px 0;">
				{{$t('netnew.aboutTitle3')}}
			</div>
			<hr style="width: 177px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0px auto;">
			<div class="lg-width" style="width: 100%;color: #718EBD;text-align: left;font-size: 16px;padding: 15px 30px;line-height: 1.5;margin-top: 10px;">
				{{$t('netnew.aboutText3')}}
			</div>
		</div>


		<div class="lg-width m-TCbox" style="height: 750px;width: 100%;">
			<div class="lg-width" style="width: 100%;color: #fff;text-align: center;font-size: 30px;padding: 25px 0;">
				{{$t('netnew.aboutTitle4')}}
			</div>
			<hr style="width: 177px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0px auto;">
			<div class="swiper-container swp1" style="margin-left: -18%;margin-top: 25px;">
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
				<div class="swiper-pagination new-spage" style="margin-left: 10%;"></div>
			</div>
			<!--<div class="lg-width" style="margin-top: 60px;width: 100%;">
				<label style="font-size: 24px;">{{$t('netnew.aboutTitle5')}} </label>
			</div>-->
			<div class="lg-width" style="width: 100%;color: #fff;text-align: center;font-size: 30px;padding: 25px 0;">
				{{$t('netnew.aboutTitle5')}}
			</div>
			<hr style="width: 177px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0px auto;">
			<div class="swiper-container swp2" style="margin-left: -18%;margin-top: 25px;">
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
				<div class="swiper-pagination new-spage" style="margin-left: 10%;"></div>
			</div>
		</div>


		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 80px;">
			<div ><span style="font-size: 24px;font-weight: 500;color: #fff;">{{$t('net.help')}}</span></div>
			<div style="margin-top: 40px;"><span  style="font-size: 20px;cursor: pointer;color: #718EBD;" @click="toQuotation()">{{$t('net.allquestion')}}</span></div>
			<div style="margin-top: 40px;"><a class="a-cancel" style="font-size: 20px;cursor: pointer;color: #718EBD;" @click="toQuotation2()">{{$t('net.lxwm')}}</a></div>

		</div>
		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 40px;">
			<div><span style="font-size: 24px;font-weight: 500;color: #fff;">{{$t('net.centect')}}</span></div>
			<div style="margin-top: 40px;"  v-show="$i18n.locale=='zh-CN'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_CN.pdf" style="font-size: 20px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
			<div style="margin-top: 40px;"  v-show="$i18n.locale=='en-US'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_EN.pdf" style="font-size: 20px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
			<div style="margin-top: 40px;"  v-show="$i18n.locale=='ko'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_KR.pdf" style="font-size: 20px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
			<div style="margin-top: 40px;"><span style="font-size: 20px;color: #718EBD;" >{{$t('net.projectLog')}}</span></div>
			<div style="margin-top: 40px;"><span style="font-size: 20px;color: #718EBD;" >{{$t('net.brandsnow')}}</span></div>
		</div>
		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 40px;">
			<div><span  style="font-size: 24px;font-weight: 500;color: #fff;">{{$t('net.supportExchange')}}</span></div>
			<div style="margin-top: 40px;"><a target="_blank" href="https://www.bibox365.com" class=" a-cancel" style="font-size: 20px;color: #718EBD;">Bibox</a></div>
			<div style="margin-top: 40px;"><a target="_blank" href="https://www.huobi.co" class=" a-cancel" style="font-size: 20px;color: #718EBD;">Huobi</a></div>
			<div style="margin-top: 40px;"><a target="_blank" href="https://www.binance.co" class=" a-cancel" style="font-size: 20px;color: #718EBD;">Binance</a></div>
		</div>
		<div class="lg-width" style="width: 100%;text-align:center;margin-top: 40px;">
			<div class="lg-width" style="width:100%;text-align: center;">
				<div style="font-size: 20px;color: #718EBD;font-weight: 500;text-align:center;">{{$t('net.WeChatSubscription')}}</div>
				<img :src="p_wechat" style="margin:10px 0;width:110px;">
			</div>
			<div class="lg-width" style="width:100%;text-align: center;">
				<div style="font-size: 20px;color: #718EBD;font-weight: 500;text-align:center;">{{$t('net.WeChatcustomservice')}}</div>
				<img :src="customer_service" style="margin:10px 0;width: 110px;">
			</div>
		</div>
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="netVideo" class="modal fade"  @click="pause()">
			<div class="modal-dialog " >
                <div class="modal-content vodio-box" v-show="$i18n.locale=='zh-CN'">
                	<div style="background: #fff;">
                        <button type="button" class="close close1" style="height: 20px;width: 20px;" data-dismiss="modal" aria-hidden="true" onclick="document.getElementById('video').pause()"><img style="position:absolute;top: 5px;right:5px;" :src="close"/></button>
                    </div>
                    <video  id="video" height="200" controls>
					  <source :src="net_video" type="video/mp4">
					</video>

              	</div>
              	<div class="modal-content vodio-box" v-show="$i18n.locale=='en-US'">
              		<div  style="background: #fff;">
                        <button type="button" class="close close1" style="height: 20px;width: 20px;" data-dismiss="modal" aria-hidden="true" onclick="document.getElementById('video2').pause()"><img style="position:absolute;top: 5px;right:5px;" :src="close"/></button>
                    </div>
                    <video  id="video2" height="200" controls>
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
			p_wechat: {
				type: String,
				default: require("@/assets/img/qr/public_wechat.png")
			},
			customer_service: {
				type: String,
				default: require("@/assets/img/qr/customer_service.png")
			},
			in_img: {
				type: String,
				default: require("@/assets/img/about/in@2x.png")
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
	.bg_color{
		background-color: #000;
	}
	.m_banner_btn1{
		position: absolute;
		top: 50%;
		left: 50%;
		color: #718EBD;
		font-size: 24px;
		transform: translate(-50%, -50%);
	}
	.m_banner_btn2{
		position: absolute;
		top: 60%;
		left: 50%;
		color: #718EBD;
		font-size: 24px;
		transform: translate(-50%, -50%);
	}
	.about-box{
		width: 100%;
		background: url('../assets/img/m_about_box.png');
		background-size: cover;
	}
	.m-TCbox {
    margin: 0 auto;
    text-align: center;
    position: relative;
    height: 450px;
    margin-top: 50px;
    color: #fff;
    background: url(/img/markbox@2x.aa806e52.png) no-repeat;
    background-size: cover;
}
</style>
