import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={   //要设置的全局访问的state对象
    isLogin: 1,////1登录 ，2注册，3重置密码,4注册成功5免责声明
    step:1, //1获取验证码，2输入新密码*/
    ifShowLogin:1,//忘记密码弹窗中登陆入口是否显示
    //要设置的初始属性值
};
const getters = {   //实时监听state值的变化(最新状态)
    getLoginStatus(state) {  //承载变化的isLogin的值
        return state.isLogin
    },
    getStep(){  //承载变化的step的值
        return state.step
    },
    getShowLogin(){ //承载变化的ifShowLogin的值
        return state.ifShowLogin
    }
};
const mutations = {
    changeLoginStatue(state,NUM) {   //自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数(变量或对象);
        state.isLogin = NUM;
    },
    changeStep(state,NUM){ //同上，这里面的参数除了state之外还传了需要增加的值sum
        state.step=NUM;
    },
    changeLoginStatus(state,NUM) {//同上，这里面的参数除了state之外还传了需要增加的值sum
        state.ifShowLogin = NUM;
        console.log(NUM+"YYY")
    }
};
const actions = {
    sChangeLoginStatus(context,NUM) {  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
        context.commit('changeLoginStatue',NUM);
    },
    mChangeStep(context,NUM) {  //同上注释
        context.commit('changeStep',NUM);
    },
    mChangeLogin(context,NUM) {
        context.commit('changeLoginStatus',NUM);
    }
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
export default store;
