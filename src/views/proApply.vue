<template>
	<section>
		<div class="main_img" style="position: relative;">
            <img v-show="$i18n.locale=='zh-CN'" src="../assets/img/banner/pro_banner.png">
            <img v-show="$i18n.locale!='zh-CN'" src="../assets/img/banner/pro_banner_en.png">
			<a v-show="ifLogin" @click="toPre" class="a-cancel banner_btn light-btn" style="bottom: 52%;font-size: 18px;z-index: 1;">{{$t('netnew.ktzyb')}}</a>
			<a v-show="ifLogin" class="a-cancel banner_btn" style="bottom: 52%;font-size: 16px;left: 26%;color: #718EBD;z-index: 1;" @click="toPre">{{$t('netnew.mfsyqt')}}</a>
			<a v-show="!ifLogin" class="a-cancel banner_btn" style="bottom: 52%;font-size: 16px;left: 26%;color: #718EBD;z-index: 1;" @click="toReg">{{$t('netnew.mfsyqt')}}</a>
			<a v-show="!ifLogin" @click="toReg" class="a-cancel banner_btn light-btn" style="bottom: 52%;font-size: 18px;z-index: 1;">{{$t('netnew.ktzyb')}}</a>
			<img src="../assets/img/kstybtn@2x.png" class="banner_imgs" style="bottom: 52%">
        </div>
        <div class="market_item_box" style="width: 1400px;margin: 0 auto;margin-top:-450px ;margin-bottom: 120px;">
            <table class="table table-bordered general-table" style="margin-top: 0;margin-bottom: 0;">
                <thead>
                <tr>
                    <th style="width: 25%;"></th>
                    <th v-show="$i18n.locale=='en-US'">Lite Version</th>
                    <th v-show="$i18n.locale=='zh-CN'">普通版</th>
                    <th v-show="$i18n.locale=='ko'">일반 버전</th>
                    <th v-show="$i18n.locale=='en-US'" style="color: #fff;">Pro Version</th>
                    <th v-show="$i18n.locale=='zh-CN'" style="color: #fff;">专业版</th>
                    <th v-show="$i18n.locale=='ko'" style="color: #fff;">프로 버전</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                	<td v-show="$i18n.locale=='en-US'"  style="text-align: left !important;padding-left: 25px !important;color: #fff;">Buy robot instance in Robot Market</td>
                	<td v-show="$i18n.locale=='zh-CN'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">购买机器人市场上的机器人生成实例</td>
                	<td v-show="$i18n.locale=='ko'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">로봇 시장의 로봇을 구매하여 실례로 생성합니다</td>
                    <td><img src="../assets/img/yes.png"></td>
                    <td><img src="../assets/img/yes.png"></td>
                </tr>
                <tr>
                	<td v-show="$i18n.locale=='en-US'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">Buy high quality strategy in Strategy Market</td>
                	<td v-show="$i18n.locale=='zh-CN'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">购买策略市场上的优质策略</td>
                	<td v-show="$i18n.locale=='ko'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">전략 시장의 양질 전략을 구매합니다</td>
                    <td><img src="../assets/img/no.png"></td>
                    <td><img src="../assets/img/yes.png"></td>
                </tr>
                <tr>
                	<td v-show="$i18n.locale=='en-US'"  style="text-align: left !important;padding-left: 25px !important;color: #fff;">Combine different strategies to generate Unit Robots</td>
                	<td v-show="$i18n.locale=='zh-CN'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">组合不同的策略生成单元机器人</td>
                	<td v-show="$i18n.locale=='ko'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">서로 다른 전략을 조합하여 단원 로봇을 생성합니다</td>
                    <td><img src="../assets/img/no.png"></td>
                    <td><img src="../assets/img/yes.png"></td>
                </tr>
                <tr>
                	<td v-show="$i18n.locale=='en-US'"  style="text-align: left !important;padding-left: 25px !important;color: #fff;">Buy well-performing Unit Robots</td>
                	<td v-show="$i18n.locale=='zh-CN'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">购买表现优秀的单元机器人</td>
                	<td v-show="$i18n.locale=='ko'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">표현이 우수한 단원 로봇을 구매합니다</td>
                    <td><img src="../assets/img/no.png"></td>
                    <td><img src="../assets/img/yes.png"></td>
                </tr>
                <tr>
                	<td v-show="$i18n.locale=='en-US'"  style="text-align: left !important;padding-left: 25px !important;color: #fff;">Combine Unit Robot and Components to generate Robot</td>
                	<td v-show="$i18n.locale=='zh-CN'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">组合单元机器人和组件生成机器人</td>
                	<td v-show="$i18n.locale=='ko'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">단원 조합 로봇과 컴포넌트 생성 로봇</td>
                    <td><img src="../assets/img/no.png"></td>
                    <td><img src="../assets/img/yes.png"></td>
                </tr>
                <!--<tr>
                	<td style="text-align: left !important;padding-left: 25px !important;color: #fff;">自组机器人可以无限运行实例，不受份额影响，不用额外花费NET</td>
                    <td><img src="../assets/img/no.png"></td>
                    <td><img src="../assets/img/yes.png"></td>
                </tr>-->
                <tr>
                	<td v-show="$i18n.locale=='en-US'"  style="text-align: left !important;padding-left: 25px !important;color: #fff;">Self-building unit robots can be submitted to the shelf, getting NET rewards when other users purchase these unit robots</td>
                	<td v-show="$i18n.locale=='zh-CN'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">自组单元机器人可以提交上架，通过后，其他用户购买单元机器人后可以获得NET奖励</td>
                	<td v-show="$i18n.locale=='ko'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">자체 조합의 단원 로봇은 제출이 가능하며 통과된 후 다른 사용자가 단원 로봇을 구매한다면 NET 장려를 획득할수 있습니다</td>
                    <td><img src="../assets/img/no.png"></td>
                    <td><img src="../assets/img/yes.png"></td>
                </tr>
                <tr>
                	<td v-show="$i18n.locale=='en-US'"  style="text-align: left !important;padding-left: 25px !important;color: #fff;">Self-building robots can be submitted to the shelf, getting NET rewards when other users purchase these robots</td>
                	<td v-show="$i18n.locale=='zh-CN'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">自组机器人可以提交上架，通过后，其他用户购买机器人后可以获得NET奖励</td>
                	<td v-show="$i18n.locale=='ko'" style="text-align: left !important;padding-left: 25px !important;color: #fff;">자체 조합 로봇은 재출이 가능하며 통과된 후 다른 사용자가 로봇을 구매한다면NET를 획득할수 있습니다</td>
                    <td><img src="../assets/img/no.png"></td>
                    <td><img src="../assets/img/yes.png"></td>
                </tr>
                </tbody>
            </table>
            <span v-show="$i18n.locale=='en-US'" style="color: #718EBD;font-size: 16px;padding: 15px 25px;line-height: 45px;">Application conditions：NET balance more than 50,000</span>
            <span v-show="$i18n.locale=='zh-CN'" style="color: #718EBD;font-size: 16px;padding: 15px 25px;line-height: 45px;">申请条件：NET余额5万以上。</span>
            <span v-show="$i18n.locale=='ko'" style="color: #718EBD;font-size: 16px;padding: 15px 25px;line-height: 45px;">신청 조건: NET 잔액이 5만 이상이여야 합니다</span>

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
            	$('#logbtn').click();
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

<style scoped>
	.prop-bg{
		background: url(../assets/img/robotbox@2x.png) no-repeat;
		background-size: cover;
	}
	.banner_imgs {
		left: 13.5%;
		bottom: 32%;
		width: 250px !important;
		position: absolute;
	}
	.banner_btn {
		background-size: 100%;
		border-radius: 4px;
		width: 250px;
		height: 75px;
		font-family: SFProDisplay-Bold;
		font-size: 24px;
		color: #FFFFFF;
		letter-spacing: 0;
		position: absolute;
		left: 13.5%;
		bottom: 32%;
		border: none;
		padding-top: 26px;
		cursor: pointer;
		z-index: 5000;
		text-align: center;
	}
	.market_item_box {
		background: url('../assets/img/markbox@2x.png') no-repeat;
		background-size:cover;
		display: table;
		min-height: 263px;
    	min-width: 1400px;
    }
    .table > thead > tr > th{
    	padding-top: 15px !important;
    	padding-bottom: 15px !important;
    }
    .table > tbody > tr > td{
    	padding-top: 15px !important;
    	padding-bottom: 15px !important;
    }
</style>
