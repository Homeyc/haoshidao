<template>
    <footer  class="sticky-footer" style="text-align: center;padding-top: 20px;padding-bottom:20px;min-width: 1440px;color: #718EBD;">
    		<div class="row lg-row" style="width:1400px;margin: 15px auto;">
    			<div class="lg-width" style="width: 18%;text-align: left;margin-left: 4%;">
    				<div><span style="font-size: 16px;font-weight: 600;">{{$t('net.help')}}</span></div>
    				<div style="margin-top: 10px;"><span  style="font-size: 14px;cursor: pointer;" @click="toQuotation()">{{$t('net.allquestion')}}</span></div>
    				<div style="margin-top: 10px;"><a class="a-cancel" style="font-size: 14px;cursor: pointer;color: #718EBD;" @click="toQuotation2()">{{$t('net.lxwm')}}</a></div>
    				
    			</div>
    			<div class="lg-width" style="width: 18%;text-align: left;">
    				<div><span style="font-size: 16px;font-weight: 600;">{{$t('net.centect')}}</span></div>
    				<div style="margin-top: 10px;"  v-show="$i18n.locale=='zh-CN'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_CN.pdf" style="font-size: 14px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
    				<div style="margin-top: 10px;"  v-show="$i18n.locale=='en-US'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_EN.pdf" style="font-size: 14px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
    				<div style="margin-top: 10px;"  v-show="$i18n.locale=='ko'"><a class=" a-cancel" target="_blank" href="./NetCentricWP_KR.pdf" style="font-size: 14px;color: #718EBD;cursor: pointer;">{{$t('net.whitebook')}}</a></div>
    				<div style="margin-top: 10px;"><span style="font-size: 14px;" >{{$t('net.projectLog')}}</span></div>
    				<div style="margin-top: 10px;"><span style="font-size: 14px;" >{{$t('net.brandsnow')}}</span></div>    				   				
    			</div>
    			<div class="lg-width" style="width: 18%;text-align: left;">
    				<div><span  style="font-size: 16px;font-weight: 600;">{{$t('net.supportExchange')}}</span></div>
    				<div style="margin-top: 10px;"><a target="_blank" href="https://www.bibox365.com" class=" a-cancel" style="font-size: 14px;color: #718EBD;">Bibox</a></div>
    				<div style="margin-top: 10px;"><a target="_blank" href="https://www.huobi.co" class=" a-cancel" style="font-size: 14px;color: #718EBD;">Huobi</a></div>
    				<div style="margin-top: 10px;"><a target="_blank" href="https://www.binance.co" class=" a-cancel" style="font-size: 14px;color: #718EBD;">Binance</a></div>
    			</div>
    			<div class="lg-width" style="width: 42%;text-align:center;">
    				<div class="lg-width" style="width: 300px;text-align: center;float: right;">
    					<div style="font-size: 16px;font-weight: 600;text-align:center;">{{$t('net.WeChatSubscription')}}</div>
    					<img :src="p_wechat" style="margin:10px 0;width:110px;">
    				</div>
    				<div class="lg-width" style="width:200px;text-align: center;float: right;">
    					<div style="font-size: 16px;font-weight: 600;text-align:center;">{{$t('net.WeChatcustomservice')}}</div>
    					<img :src="customer_service" style="margin:10px 0;width: 110px;">
    				</div>
				</div>
    		</div>
		</footer >   
</template>
<script>
export default {
  props: {
    p_wechat: {
		type: String,
		default: require("@/assets/img/qr/public_wechat.png")
	},
	customer_service: {
		type: String,
		default: require("@/assets/img/qr/customer_service.png")
	},
  },
  data() {
    return {
      
    };
  },
  methods: {
  	toQuotation() {
		this.$router.push('/Questions')
	},
	toQuotation2() {		
		 this.$router.push({
			name: 'questions',
			params: {
				name: "questions",
				contact: true
			}
		})
	},
  }
};
</script>
<style>
	


	.netWhite{
		color: #fff;
	}



</style>
