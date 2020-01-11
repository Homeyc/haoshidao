import Vue from "vue";
import App from "./App.vue";
import store from './store'//引入store
import router from "./router";
import VueI18n from 'vue-i18n'; //国际化组件
import axios from 'axios';
import util from './common/js/util.js'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "vue-multiselect/dist/vue-multiselect.min.css";
import "swiper/dist/css/swiper.min.css";
import "./assets/css/style.css";
import './components/Toast/Toast.css';
import echarts from 'echarts';
import Multiselect from 'vue-multiselect';
import Paginate from 'vuejs-paginate'
import VueClipboard from 'vue-clipboard2'
import VueCookies from 'vue-cookies'
import global from './components/global.vue'
import Toast from "./plugins/Toast"
Vue.prototype.COMMON = global
//import markdownLoader from 'markdown-loader'
//import htmlLoad from 'html-loader'

Vue.config.productionTip = false;
Vue.component('multiselect', Multiselect)
Vue.component('paginate', Paginate)

Vue.use(VueClipboard);
Vue.use(VueCookies);
Vue.use(Toast);

//Vue.use(htmlLoad);
//vue.use(markdownLoader);
Vue.use(VueI18n) // 通过插件的形式挂载
Vue.prototype.$echarts = echarts
axios.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		if(error.response.status == 401) {
			localStorage.removeItem('token');
			router.push('/');
			location.reload();
		}
		return Promise.reject(error.response.data) // 返回接口返回的错误信息
	});

const NavbarStore = {
	showNavbar: false
};

const i18n = new VueI18n({
	locale: 'zh-CN', // 语言标识
	//this.$i18n.locale // 通过切换locale的值来实现语言切换
	messages: {
		'zh-CN': require('./common/lang/zh.js'), // 中文语言包
		'en-US': require('./common/lang/en.js'), // 英文语言包
		'ko': require('./common/lang/ko.js'),//韩文语言包
	}
});

Vue.mixin({
	data() {
		return {
			NavbarStore
		};
	}
});

Vue.filter('chartsData', function(value) {
	return util.formatDate.format(new Date(value), 'yyyy-MM-dd');
})


Vue.filter('orderSide', function(value) {
	if(value == 'sell') {
		return i18n.t('net.sell')
	} else if(value == 'buy') {
		return i18n.t('net.buy')
	}
})

Vue.filter('component', function(value) {
	if(value == '1') {
		return i18n.t('netnew.StrategyDecision')
	} else if(value == '2') {
		return i18n.t('netnew.BasicStrategy')
	}
})

Vue.filter('chartsData2', function(value) {
	return util.formatDate.format(new Date(value), 'MM-dd hh:mm');
})

Vue.filter('tradeType', function(value) {
	if(value == '1'||value == 'Long') {
		return i18n.t('net.duotou')
	} else if(value == '2'||value == 'Short') {
		return i18n.t('net.kongtou')
	} else if(value == '3') {
		return 'long and short'
	}
})

Vue.filter('tofix', function(value) {
	if(value == "" || value == undefined|| value == NaN) {
		return '0'
	} else {
		return parseFloat(value).toFixed(2);
	}

})

Vue.filter('tofix4', function(value) {
	if(value == "" || value == undefined|| value == NaN) {
		return '0'
	} else {
		return parseFloat(value).toFixed(4);
	}

})

Vue.filter('tofixd', function (value) {
	if(value==undefined||value==""|| value == NaN){
		return '0';
	}else{
		return parseFloat(value*100).toFixed(3);
	}

	})

Vue.filter('tofixed', function (value) {
	if(value==undefined||value==""|| value == NaN){
		return '0';
	}else{
		return parseFloat(value*100).toFixed(2)+"%";
	}
})



Vue.filter('releaseStatus', function(value) {
	if(value == 0) {//未上架
		return i18n.t('netnew.wsj')
	} else if(value == 2) {//已提交
		return i18n.t('netnew.ytj')
	} else if(value == 3) {//已上架
		return i18n.t('netnew.ysj')
	} else if(value == 4) {//拒绝
		return i18n.t('netnew.jujue')
	}
})

Vue.filter('robotStatus', function(value) {
	if(value == 1) {
		return i18n.t('net.running')
	} else if(value == 2) {
		return i18n.t('net.pause')
	} else if(value == 3) {
		return i18n.t('net.stops')
	} else if(value == 4) {
		return i18n.t('net.overdue')
	}else if(value == 5){
	    return i18n.t('netnew.ddq')
	}else if(value == 99) {
		return i18n.t('net.error')
	}
})

Vue.filter('signal', function(value) {
	if(value == 0) {
		return i18n.t('netnew.nosignal')
	} else if(value == 1) {
		return i18n.t('netnew.buysignal')
	}else if(value == -1){
		return i18n.t('netnew.sellsignal')
	}
})


Vue.filter('cptStatus', function(value) {
	if(value == 1) {
		return i18n.t('netnew.Rent')
	} else  {
		return i18n.t('netnew.Expired')
	}
})

Vue.filter('murStatus', function(value) {
	if(value == true) {
		return i18n.t('netnew.Rent')
	} else  {
		return i18n.t('netnew.Expired')
	}
})

Vue.filter('strategyStatus', function(value) {
	if(value == true) {
		return i18n.t('netnew.Rent')
	} else {
		return i18n.t('netnew.Expired')
	}
})

Vue.filter('floorT', function (value) {
	if(value==""||value==undefined){
		return '0'
	}else{
		return Math.floor(value * 1000) / 1000;
	}

	})

Vue.filter('timer', function (value) {
	if(value == undefined || value == "") {
		return "-";
	} else {
		 return util.formatDate.format(new Date(value), 'yyyy-MM-dd hh:mm:ss');
	}

})

Vue.filter('time', function(value) {
	if(value == undefined || value == "") {
		return "-";
	} else {
		return util.formatDate.format(new Date(value), 'yyyy-MM-dd ');
	}

})

Vue.filter('fix2', function(value) {
	if(value == undefined || value == ""|| value == NaN) {
		return "0";
	} else {
		return parseFloat(value).toFixed(2);
	}

})



Vue.filter('fix8', function(value) {
	if(value == undefined || value == ""|| value == NaN) {
		return "0";
	} else {
		return parseFloat(value).toFixed(8);
	}

})

Vue.filter('infoStatus', function (value) {
	  if(value==1){
	  	return i18n.t('person.rx')
	  }else if(value==2){
	  	return i18n.t('person.cx')
	  }else if(value==10){
	  	return i18n.t('person.czsr')
	  }else if(value==11){
	  	return i18n.t('person.games')
	  }else if(value==20){
	  	return i18n.t('person.robots')
	  }else if(value==12){
	  	return i18n.t('netnew.buyItem')
	  }else if(value==13){
	  	return i18n.t('netnew.buyUnit')
	  }else if(value==14){
	  	return i18n.t('netnew.buyStrategy')
	  }else if(value==15){
	  	return i18n.t('netnew.buyDecision')
	  }else if(value==20){
	  	return i18n.t('netnew.buyRobot')
	  }
	})

Vue.filter('', function (value) {
	  if(value==1){
	  	return "已申请";
	  }else if(value==2){
	  	return "处理中";
	  }else if(value==3){
	  	return "成功";
	  }else if(value==4){
	  	return "失败";
	  }
	})

Vue.filter('textStatus', function (value){
	var text="";
	  if(value.length>20){
	  	for(var m=0;m<20;m++){
	  	 text=text+value[m];
	  }
	  	text=text+"...."
	  	return text
	  }
		if(value.length<21){
			return value
		}
})

Vue.filter('timePoint', function(value) {
   if(value == undefined || value == "") {
      return "-";
   } else {
      return util.formatDate.format(new Date(value), 'yyyy.MM.dd ');
   }

})

Vue.filter('operatfrequency', function (value){
	if(value == '1h'){
		return '1 Hour'
	}else if(value == '30m'){
		return '30 Min'
	}else if(value == '15m'){
		return '15 Min'
	}else if(value == '5m') {
		return '5 Min'
	}else{
		return value
	}
})

new Vue({
	router,
	i18n,
	store,//使用store
	render: h => h(App)
}).$mount("#app");
