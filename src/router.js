import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import m_index from "./phone/m_Index.vue";
import m_register from "./phone/m_register.vue";
import m_login from "./phone/m_login.vue";
import m_rbtOperation from "./phone/m_rbtOperation.vue";
import m_buy from "./phone/m_buy.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import m_MainNavbar from "./layout/m_MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import marketDetails from "./views/marketDetails";
import m_marketDetails from "./phone/m_marketDetails";
import HomeRobotFactory from "./layout/HomeRobotFactory";
import Robot from "./layout/Robot";
import m_Robot from "./phone/m_Robot";
import m_changePw from "./phone/m_changePw";
import RobotOverView from "./views/RobotOverView";
import creatRobot from "./views/creatRobot";
import editRobot from "./views/editRobot";
import editUnit from "./views/editUnit";
import propaganda from "./views/propaganda";
import proApply from "./views/proApply";
import createUnit from "./views/createUnit";
import MyInstance from "./views/MyInstance";
import Factory from "./views/Factory";
import warehouse from "./views/warehouse"
import RobotDetail from "./views/RobotDetail";
import m_RobotDetail from "./phone/m_RobotDetail";
import personInfo from "./views/personInfo";
import m_personInfo from "./phone/m_personInfo";
import RobotMarket from "./views/RobotMarket";
import m_RobotMarket from "./phone/m_RobotMarket";
import unitMarket from "./views/unitMarket";
import strategy from "./views/strategy";
import myStrategy from "./views/myStrategy";
import Questions from "./views/Questions";
import About from "./views/About";
import m_About from "./phone/m_About";
import component from "./views/component"
import robotCompare from "./views/robotCompare"
import backTest from "./views/backTest"
import robotConfig from './views/robotConfig'
import Download from './views/download'
import m_Download from './phone/m_download'

Vue.use(Router);

const router = new Router({
	mode:'history',
    routes: [
        {
            path: "/",
            name: "index",
            components: {default: Index, header: MainNavbar, footer: MainFooter},
        },
        {
        	path: "/m_index",
            name: "m_index",
            components: {default: m_index,header:m_MainNavbar},
        },
         {
        	path: "/m_RobotMarket",
            name: "m_RobotMarket",
            components: {default: m_RobotMarket,header:m_MainNavbar},
        },
         {
        	path: "/m_personInfo",
            name: "m_personInfo",
            components: {default: m_personInfo,header:m_MainNavbar},
        },
        {
        	path: "/m_Robot",
            name: "m_Robot",
            components: {default: m_Robot,header:m_MainNavbar},
        },
        {
        	path: "/m_register",
            name: "m_register",
            components: {default: m_register},
        },
        {
        	path: "/m_changePw",
            name: "m_changePw",
            components: {default: m_changePw},
        },
        {
        	path: "/m_About",
            name: "m_About",
            components: {default: m_About,header:m_MainNavbar},
        },
        {
        	path: "/m_login",
            name: "m_login",
            components: {default: m_login},
        },
         {
        	path: "/m_rbtOperation",
            name: "m_rbtOperation",
            components: {default: m_rbtOperation},
        },
        {
        	path: "/m_buy",
            name: "m_buy",
            components: {default: m_buy},
        },
        {
            path: "/m_appTest",
            name: "m_appTest",
            components: {default: m_Download},
            meta: {
                name:"viewport",
                content: 'width=device-width,initial-scale=1.0'
            }
        },
        {
            path: "/robot",
            name: "robot",
            components: {default: Robot, header: MainNavbar},
            redirect:'/robot/overview',
            children:[
                {path:'/robot/overview', component:RobotOverView,name:'overview'},
                {path:'/robot/creatRobot', component: creatRobot, name: 'creatRobot'},
                {path:'/robot/editRobot', component: editRobot, name: 'editRobot'},
                {path:'/robot/createUnit', component: createUnit, name: 'createUnit'},
                {path:'/robot/editUnit', component: editUnit, name: 'editUnit'},
                {path:'/robot/instance', component: MyInstance, name: 'myInstance'},
                {path:'/robot/factory', component: Factory, name: 'factory'},
                {path:'/robot/warehouse', component: warehouse, name: 'warehouse'},
                {path:'/robot/instanceDetail', component: RobotDetail, name: 'instanceDetail'},
                {path:'/robot/component', component: component, name: 'component'},
                {path:'/robot/myStrategy', component: myStrategy, name: 'myStrategy'},
                {path:'/robot/backTest', component: backTest, name: 'backTest'},
                {path:'/robot/robotConfig',component:robotConfig,name:'robotConfig'}

            ],

        },
        {
            path: "/marketDetails",
            name: "marketDetails",
            components: {default: marketDetails, header: MainNavbar, footer: MainFooter},
        },
        {
            path: "/m_marketDetails",
            name: "m_marketDetails",
            components: {default: m_marketDetails, header: m_MainNavbar},
        },
        {
            path: "/m_RobotDetail",
            name: "m_RobotDetail",
            components: {default: m_RobotDetail, header: m_MainNavbar},
        },
         {
            path: "/robotCompare",
            name: "robotCompare",
            components: {default: robotCompare, header: MainNavbar, footer: MainFooter},
        },
         {
            path: "/propaganda",
            name: "propaganda",
            components: {default: propaganda, header: MainNavbar, footer: MainFooter},
        },
        {
            path: "/proApply",
            name: "proApply",
            components: {default: proApply, header: MainNavbar, footer: MainFooter},
        },
        {
            path: "/unitMarket",
            name: "unitMarket",
            components: {default: unitMarket, header: MainNavbar, footer: MainFooter},
        },
        {
            path: "/strategy",
            name: "strategy",
            components: {default: strategy, header: MainNavbar, footer: MainFooter},
        },
        {
            path: "/personInfo",
            name: "personInfo",
            components: {default: personInfo, header: MainNavbar},
        },
        {
            path: "/markets",
            name: "markets",
            components: {default: RobotMarket, header: MainNavbar, footer: MainFooter}

        },
        {
            path: "/questions",
            name: "questions",
            components: {default: Questions, header: MainNavbar, footer: MainFooter}

        },
        {
            path: "/about",
            name: "about",
            components: {default: About, header: MainNavbar, footer: MainFooter}

        },
        {
            path: "/appTest",
            name: "appTest",
            components: {default: Download, header: MainNavbar, footer: MainFooter}
        }


    ],
    scrollBehavior: to => {
        if (to.hash) {
            return {selector: to.hash};
        } else {
            return {x: 0, y: 0};
        }
    }
});
router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {//判断是否有标题
        document.title = to.meta.title
    }
    if(to.path == '/m_appTest'){
        console.log(to)
        let head = document.getElementsByTagName('head');
        let meta = document.createElement('meta');
        meta.content = to.meta.content;
        meta.name = to.meta.name;
        head[0].appendChild(meta)
    }
    next()//执行进入路由，如果不写就不会进入目标页
})
export default router
