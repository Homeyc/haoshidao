<template>
	<section>
		<div class="main_img" style="position: relative;">
            <img v-show="$i18n.locale=='zh-CN'" src="../assets/img/banner/banner_4_cn.png">
            <img v-show="$i18n.locale=='en-US'" src="../assets/img/banner/banner_4_cn.png">

        </div>
        <div class="lg-row prop-bg" style="width: 1400px; height: 300px;margin:0 auto;margin-top:-450px;text-align: center;padding-top: 35px;">
        	<div style="font-size:30px ;color: #fff;line-height: 30px;">参与流程</div>
            <hr style="width: 125px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0 auto;margin-top: 22px;">
            <div class="lg-width" style="width: 100%;margin-top: 18px;">
            	<img src="../assets/img/propimg1.png">
				<div class="lg-width" style="width: 100%;margin-top: -20px;text-align: left;">
					<span style="color: #718EBD; font-size: 18px;margin-left: 95px;">1. 账户注册</span>
					<span style="color: #718EBD; font-size: 18px;margin-left: 425px;">2. 申请领取测试NET币</span>
					<span style="color: #718EBD; font-size: 18px;margin-left: 380px;">3. 获得空投奖励</span>
				</div>
            </div>
        </div>
        
        <div class="lg-row prop-bg" style="width: 1400px; height: 695px;margin:0 auto;margin-top:40px;text-align: center;padding-top: 35px;">
        	<div style="font-size:30px ;color: #fff;line-height: 30px;">活动内容</div>
            <hr style="width: 125px;height: 2px;border-color: rgb(58, 152, 216);background: none;margin: 0 auto;margin-top: 22px;">
            <div class="lg-width" style="width: 100%;padding-left: 60px; padding-right:60px ;text-align: left;margin-top: 30px;">
            	<span style="font-size: 18px;color: #718EBD;line-height: 2.5;  ">所有官网注册用户可添加官方客服微信，申请领取测试NET币，本次限额100名用户，申请通过用户均可得到8888测试NET币，可用作订阅机器人、组件、策略。 截止至4月30日期间有成功下单交易的用户，我们都将根据实际使用情况空投<span style="color: #fff;">100——1000NET</span>作为奖励，直接分发到钱包中。</span>
            	
            </div>
            <div class="lg-width" style="width: 100%;padding-left: 60px; padding-right:60px ;text-align: left;margin-top: 30px;">
            	<span style="font-size: 18px;color: #fff;">测试资格申请，请联系微信客服：</span><span style="font-size: 18px;color: #718EBD;">Arthas@NET的小哥哥</span>
           	</div>
           	<div class="lg-width" style="width: 100%;padding-left: 60px; padding-right:60px ;text-align: center;margin-top: 60px;">
           		<span style="font-size: 18px;color: #fff;">微信客服号</span>
           		<div style="margin-top: 10px;">
           			<img src="../assets/img/qr/xggqr@2x.png">
           		</div>		
           	</div>
           	<div class="lg-width" style="position: relative;width: 100%;margin-top: 50px;">
            <img src="../assets/img/kstybtn@2x.png" @click="toReg" class="banner_img light-btn" style="cursor: pointer;">
            <img src="../assets/img/kstybtn@2x.png" v-show="ifLogin" @click="toPre" class="banner_img light-btn" style="cursor: pointer;margin-left: 100px;">
            <img src="../assets/img/kstybtn@2x.png" v-show="!ifLogin" @click="toReg" class="banner_img light-btn" style="cursor: pointer;margin-left: 100px;">
            <img src="../assets/img/kstybtn@2x.png" @click="toQue" class="banner_img light-btn" style="cursor: pointer;margin-left: 100px;">
            <div style="position: absolute;font-size: 18px;color: #fff;top: 23px; left:366px ;cursor: pointer; " @click="toReg">注册账号</div>
            <div v-show="ifLogin" style="position: absolute;font-size: 18px;color: #fff;top: 23px; left:627px ;cursor: pointer;" @click="toPre">添加交易所ApiKey</div>
            <div v-show="!ifLogin" style="position: absolute;font-size: 18px;color: #fff;top: 23px; left:627px ;cursor: pointer;" @click="toReg">添加交易所ApiKey</div>
            <div style="position: absolute;font-size: 18px;color: #fff;top: 23px; left:953px ;cursor: pointer;"  @click="toQue" >更多使用帮助</div>
            </div>
        </div>
	</section>
</template>

<script>
	 export default {
        data() {
            return {
				ifLogin:false,
                
            }
        },
        mounted() {
			this.checkLogin();
        },
        methods: {
        	checkLogin() {
                if (localStorage.getItem("token")) {
                    this.ifLogin = true;
                } else {
                    this.ifLogin = false;
                }
            },
           	toReg(){
            	$('#toReg').click();
            },
            toPre() {
				this.$router.push('/personInfo')
			},
			toQue(){
				this.$router.push('/questions')
			}
        }
    }
</script>

<style>
	.prop-bg{
		background: url(../assets/img/robotbox@2x.png) no-repeat;
		background-size: cover;
	}
</style>