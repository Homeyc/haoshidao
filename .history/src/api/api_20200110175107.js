import axios from 'axios';

//测试环境（外网）
/*let list ='http://47.89.248.189:9003';
let base ='http://47.89.248.189:8086';
let base1='http://47.89.248.189:9002';
let base3='http://47.89.248.189:9010';
let base4='http://47.89.248.189:9011';*/

//实盘环境（外网）
//let list = 'http://47.89.248.189:19003';
//let base = 'http://47.89.248.189:18086';
//let base1='http://47.89.248.189:19002';
//let base3='http://47.89.248.189:19010';
//let base4='http://47.89.248.189:19011';

//开发环境（内网）
/*let list = 'http://192.168.0.114:9003';
let base = 'http://192.168.0.114:8086';
let base1='http://192.168.0.114:9002';
let base3='http://192.168.0.114:9010';
let base4='http://192.168.0.114:9011';*/


//生产环境
let list = 'https://jrobot.netcentric.io';
let base = 'https://juser.netcentric.io';//外网
let base1 = 'https://jmd.netcentric.io';
let base3 = 'https://goapi.netcentric.io';
let base4 = 'https://goother.netcentric.io';


//开发环境
let hsdApi = 'http://120.55.127.135:8010'
//调试环境
/*let list ='http://192.168.0.17:9003'
let base ='http://192.168.0.17:8086'
let base1='http://192.168.0.17:9002';
let base3='http://192.168.0.17:9010';//老周
let base4='http://192.168.0.17:9011'*/
//let base4='http://192.168.0.76:9011';//老周
//let base='http://192.168.0.76:8086'

//let tempBase = 'http://192.168.0.59:8086';//刘瑞冰

axios.interceptors.request.use(
  config => {
    let token = localStorage.getItem("token");
    // 登录不需要传token,看一下自己登录的接口包含哪个特殊字段
    if (token) {
      config.headers.common['token'] = token;
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
);

//好师到接口
export const getHsdGrade = params => { return axios.get(`${hsdApi}/api/v1/base/grade`).then(res => res.data); };


//修改性别
export const updateSexApi = params => { return axios.post(`${tempBase}/api/v1/user/mod_gender`, params).then(res => res.data); };
//修改昵称
export const updateNickApi = params => { return axios.post(`${tempBase}/api/v1/user/mod_gender`, params).then(res => res.data); };
//修改头像
export const updatePhotoApi = params => { return axios.post(`${tempBase}/api/v1/user/mod_gender`, params).then(res => res.data); };

//普通登录
export const loginU = params => { return axios.post(`${base}/api/v1/user/login_user`, params).then(res => res.data); };
//export const loginM = params => { return axios.post('${base}/api/v1/user/loginU', { params: params }); };
//获取图形验证码
export const getVcode = params => { return axios.post(`${base}/api/v1/user/img_code`).then(res => res.data); };
//获取短信验证码
export const getMessage = params => { return axios.post(`${base}/api/v1/user/sms_code`, params).then(res => res.data); };
//短信登录
export const loginM = params => { return axios.post(`${base}/api/v1/user/login_mobile`, params).then(res => res.data); };
//手机号注册
export const phoneReg = params => { return axios.post(`${base}/api/v1/user/reg_mobile`, params).then(res => res.data); };
//忘记密码
export const forgetPw = params => { return axios.post(`${base}/api/v1/user/forget_password`, params).then(res => res.data); };
//拉取市场列表TOP3
export const marketTop = params => { return axios.get(`${base4}/api/v1/robot/all_market_robot`).then(res => res.data); };
//拉取市场列表
export const getRobotList = params => { return axios.post(`${list}/api/v1/robotmarket/robotlist`, params).then(res => res.data); };
//获取用户基本信息
export const getUserInfo = params => { return axios.post(`${base}/api/v1/user/get_user_info`, params).then(res => res.data); };
//获取国家信息
export const countrys = params => { return axios.get(`${base}/api/v1/user/country`, params).then(res => res.data); };
//用户头像信息
export const uploadphoto = params => { return axios.post(`${base}/api/v1/user/uploadphoto`, params).then(res => res.data); };
//生成钱包地址
export const generateWallet = params => { return axios.post(`${base}/api/v1/user/generateWalletPoid`, params).then(res => res.data); };
//区块链信息
export const regionalChain = params => { return axios.post(`${base}/api/v1/account/create_account`, params).then(res => res.data); };
//修改密码
export const updatePassword = params => { return axios.post(`${base}/api/v1/user/update_password`, params).then(res => res.data); };
//验证短信验证码
export const authenticate = params => { return axios.post(`${base}/api/v1/user/user_check`, params).then(res => res.data); };
//获取交易所信息
export const exchanges = params => { return axios.get(`${base}/api/v1/user/exchange`, params).then(res => res.data); };
//基本信息上传
export const userinfomod = params => { return axios.post(`${base}/api/v1/user/user_info_mod`, params).then(res => res.data); };
//根据用户ID获取机器人实例运行
export const getRobotInfo = params => { return axios.get(`${base3}/api/v1/robot_instance/by_user_run?user_id=` + params.user_id + '&status=' + params.status).then(res => res.data); };
//根据机器人实例ID获取机器人详情
export const getRobotDetail = params => { return axios.get(`${base3}/api/v1/robot_instance/summary?id=` + params.InstanceId).then(res => res.data); };
//根据机器人实例ID获取机器人信号
export const getRobotLog = params => { return axios.get(`${base3}/api/v1/robot_instance/log?id=` + params.InstanceId).then(res => res.data); };
//根据机器人实例ID获取机器人运行日志
export const getRobotRun = params => { return axios.get(`${base3}/api/v1/robot_instance/run_log?instance_id=` + params.InstanceId).then(res => res.data); };
//删除交易所信息
export const delexaccount = params => { return axios.get(`${base}/api/v1/account/del_account?account_id=` + params.exchangeId).then(res => res.data); };
//获取交易所信息
export const getAccountList = params => { return axios.get(`${base}/api/v1/account/get_account?user_id=` + params.user_id).then(res => res.data); };
//修改交易所信息
export const editaccount = params => { return axios.post(`${base}/api/v1/account/edit_account`, params).then(res => res.data); };
//根据机器人实例ID获取机器人持仓货币信息
export const getBalance = params => { return axios.get(`${base3}/api/v1/robot_instance/balance?id=` + params.InstanceId + '&exchange=' + params.exchange).then(res => res.data); };
//根据机器人实例ID获取机器人交易信息
export const getTradeOrder = params => { return axios.get(`${base3}/api/v1/robot_instance/trade_orders?id=` + params.InstanceId).then(res => res.data); };
//拉取热门作者列表
export const popularAuthor = params => { return axios.get(`${base4}/api/v1/temp/popular_author`, params).then(res => res.data); };
//拉取交易记录
export const robotOrder = params => { return axios.get(`${base4}/api/v1/temp/recent_robot_order`, params).then(res => res.data); };
//根据机器人ID，token拉取余额等数据
export const robotBuy = params => { return axios.post(`${list}/api/v1/robotmarket/robotbuy`, params).then(res => res.data); };
//查询用户消费记录接口
export const getInoutLog = params => { return axios.post(`${base}/api/v1/user/user_net_change_log`, params).then(res => res.data); };
//购买时间判断价格
export const timingtype = params => { return axios.post(`${list}/api/v1/robotmarket/timingtype`, params).then(res => res.data); };
//查询用户充值记录接口
export const rechargeOrder = params => { return axios.post(`${base}/api/v1/user/user_recharge_order`, params).then(res => res.data); };
//机器人购买
export const robotordernow = params => { return axios.post(`${list}/api/v1/robotmarket/robotorder`, params).then(res => res.data); };
//根据机器人实例ID获取机器人交易订单
export const getTradeLog = params => { return axios.get(`${base3}/api/v1/robot_instance/trade_orders?id=` + params.InstanceId + '&page=' + params.page + '&size=' + params.size).then(res => res.data); };

//根据机器人实例ID获取机器人交易订单
export const getTradeLogD = params => { return axios.get(`${base3}/api/v1/robot_instance/trade_orders_detail?id=` + params.InstanceId + '&page=' + params.page + '&size=' + params.size).then(res => res.data); };

//根据机器人实例ID获取机器人实例的收益
export const getProfit = params => { return axios.get(`${base3}/api/v1/robot_instance/profit?id=` + params.InstanceId).then(res => res.data); };
//获取新闻分类
export const getNewsClassify = params => { return axios.get(`${base4}/api/v1/news/classify`).then(res => res.data); };
//获取新闻分页cn
export const getNewsListcn = params => { return axios.get(`${base4}/api/v1/news/list?cat_id=` + params.cat_id + '&page=' + params.page + '&size=' + params.size + '&location=cn').then(res => res.data); };
//获取新闻分页en
export const getNewsListen = params => { return axios.get(`${base4}/api/v1/news/list?cat_id=` + params.cat_id + '&page=' + params.page + '&size=' + params.size + '&location=en').then(res => res.data); };
//获取新闻简讯
export const getNewsFlash = params => { return axios.get(`${base4}/api/v1/news/flash?` + 'page=' + params.page + '&size=' + params.size).then(res => res.data); };
//根据新闻id获取新闻详情
export const getNewsDetail = params => { return axios.get(`${base4}/api/v1/news/detail?` + 'news_id=' + params.id).then(res => res.data); };
//获取主页机器人信息
export const getMainRobotInfo = params => { return axios.get(`${base4}/api/v1/home/recommend_robots`).then(res => res.data); };
//取消订阅机器人
export const toUnsubscribe = params => { return axios.post(`${list}/api/v1/robotmarket/subscribe_ornot`, params).then(res => res.data); };
//停止/启动机器人
export const runOrStop = params => { return axios.post(`${list}/api/v1/robotmarket/run_stop`, params).then(res => res.data); };
//机器人详情图表
export const robotBacktestDetail = params => { return axios.get(`${base4}/api/v1/robot/robot_back_test_detail?robot_id=` + params.robotId).then(res => res.data); }
//机器人详情回测数据
export const getRobotBase = params => { return axios.get(`${base4}/api/v1/robot/robot_base?robot_id=` + params.robotId).then(res => res.data); };
//机器人持有人
export const robotOwner = params => { return axios.get(`${base4}/api/v1/user/robot_owner?pageNum=` + params.pageNum + '&pageSize=' + params.pageSize + '&robotId=' + params.robotId).then(res => res.data); }
//账号验证
export const checkExchange = params => { return axios.post(`${base}/api/v1/user/check_exchange_account`, params).then(res => res.data); }
//实例化账户余额
export const initAccountBalance = params => { return axios.post(`${list}/api/v1/robotmarket/initAccountBalance`, params).then(res => res.data); }
//通过useid获取factory数据
export const getFactoryData = params => { return axios.get(`${base3}/api/v1/robot/query_by_user?user_id=` + params.user_id).then(res => res.data); };
//createRobot
export const createRobot = params => { return axios.post(`${base3}/api/v1/robot/create_robot_new`, params).then(res => res.data); };
//获取createRobot data_source各下拉框数据
export const getcrbtData = params => { return axios.get(`${base3}/api/v1/robot/get_data_source_list`).then(res => res.data); };
//通过base currency获取base pair
export const getPairList = params => { return axios.get(`${base3}/api/v1/robot/get_pair_list_by_base_currency?base_currency=` + params.base_currency).then(res => res.data); };
//获取策略组
export const getStrategyList = params => { return axios.get(`${base3}/api/v1/robot/get_strategy_list`).then(res => res.data); };
//根据typename获取下拉框数据
export const getBaseControl = params => { return axios.get(`${base3}/api/v1/robot/get_control_base?type_name=` + params.type_name + '&user_id=' + params.user_id).then(res => res.data); };
//获取自定义robot实例信息
//export const getrbInfoByid = params => { return axios.get(`${base3}/api/v1/robot/robot_info?robot_id=`+params.robot_id).then(res => res.data); };
//获取自定义unit Robot信息
export const geturbInfoByid = params => { return axios.get(`${base3}/api/v1/unit_robot/unit_robot_info?id=` + params.Id).then(res => res.data); };
//获取自定义unit Robot编辑信息
export const geteurbInfoByid = params => { return axios.get(`${base3}/api/v1/unit_robot/unit_robot_edit_info?id=` + params.Id).then(res => res.data); };
//overview页面获取数据
export const getOverviewInfo = params => { return axios.get(`${base3}/api/v1/robot_instance/overview?user_id=` + params.id).then(res => res.data); };
//factouy删除机器人
export const factoryDel = params => { return axios.get(`${base3}/api/v1/robot/by_id_del?robot_id=` + params).then(res => res.data); };
//获取组件市场数据
export const getComponentList = params => { return axios.get(`${base4}/api/v1/product_shelf/show`).then(res => res.data); };
//获取策略市场数据
export const getStrategy = params => { return axios.get(`${base4}/api/v1/strategy/show`).then(res => res.data); };
//获取unit robot list
export const getUnitRobotList = params => { return axios.post(`${base3}/api/v1/robot/unit_robot_list`, params).then(res => res.data); };
//获取账户余额
export const getNetBalance = params => { return axios.get(`${base3}/api/v1/temp/balance?user_id=` + params.id).then(res => res.data); };
//购买组件
export const buyUnit = params => { return axios.get(`${base3}/api/v1/product_shelf/buy?user_id=` + params.user_id + '&product_id=' + params.product_id + '&day_type=' + params.day_type + '&auto_renew=' + params.auto_renew).then(res => res.data); };
//购买strategy
export const buyStrategy = params => { return axios.get(`${base3}/api/v1/strategy/buy_strategy?user_id=` + params.user_id + '&product_id=' + params.product_id + '&day_type=' + params.day_type + '&auto_renew=' + params.auto_renew).then(res => res.data); };
//购买Decision
export const buyDecision = params => { return axios.get(`${base3}/api/v1/strategy/buy_decision?user_id=` + params.user_id + '&product_id=' + params.product_id + '&day_type=' + params.day_type + '&auto_renew=' + params.auto_renew).then(res => res.data); };
//unit购买交易所验证
export const checkUnit = params => { return axios.get(`${base3}/api/v1/product_shelf/check?user_id=` + params.user_id).then(res => res.data); };
//获取warehouse List
export const getWarehouse = params => { return axios.get(`${base3}/api/v1/product_shelf/warehouse?user_id=` + params.id).then(res => res.data); };
//获取account List
export const getAcount = params => { return axios.get(`${base3}/api/v1/robot_instance/select_account?user_id=` + params.id).then(res => res.data); };
//开始生成实例
export const startIs = params => { return axios.post(`${base3}/api/v1/robot_instance/create`, params).then(res => res.data); };
//初始化用户账户
export const initAccount = params => { return axios.get(`${base3}/api/v1/robot_instance/init_account_balance?account_id=` + params.account_id).then(res => res.data); };
//初始化创建机器人选择条件
export const getRobotType = params => { return axios.get(`${base3}/api/v1/robot/unit_robot_type?user_id=` + params.user_id).then(res => res.data); };
//robot上架
export const RobotOnshelf = params => { return axios.post(`${base3}/api/v1/robot/release`, params).then(res => res.data); };
//获取购买信息
export const getBuyInfo = params => { return axios.get(`${base3}/api/v1/robot/check_buy_info?user_id=` + params.user_id + '&robot_id=' + params.robot_id).then(res => res.data); };
//计算robot总价
export const getRbtPrice = params => { return axios.get(`${base3}/api/v1/robot/time_buying?robot_id=` + params.robot_id + '&day_type=' + params.day_type).then(res => res.data); };
//购买机器人
export const buyRbt = params => { return axios.get(`${base3}/api/v1/robot/robot_order?robot_id=` + params.robot_id + '&user_id=' + params.user_id + '&amount=' + params.amount + '&day_type=' + params.day_type + '&account_id=' + params.account_id + '&auto_renew=' + params.auto_renew).then(res => res.data); };
//回测接口
export const getBacktestList = params => { return axios.get(`${base}/api/v1/back_test/back_test_by_robot?robot_id=` + params.robot_id + '&user_id=' + params.user_id + '&data_depth=' + params.data_depth).then(res => res.data); };
//strategy list
export const getMyStrategy = params => { return axios.get(`${base3}/api/v1/strategy/base_strategy?user_id=` + params.id).then(res => res.data); };
//Decision list
export const getMyDecision = params => { return axios.get(`${base3}/api/v1/strategy/strategy_decision?user_id=` + params.id).then(res => res.data); };


//获取Decision下拉框
export const getDecisionOp = params => { return axios.get(`${base3}/api/v1/unit_robot/strategy_decision?user_id=` + params.id).then(res => res.data); };
//获取strategy type下拉框
export const getStrategyType = params => { return axios.get(`${base3}/api/v1/unit_robot/strategy_type?user_id=` + params.id).then(res => res.data); };
//获取strategy 下拉框
export const getStrategyOp = params => { return axios.get(`${base3}/api/v1/unit_robot/base_strategy?user_id=` + params.id + '&strategy=' + params.strategy).then(res => res.data); };
//创建unit时获取交易对
export const getPairFilter = params => { return axios.get(`${base3}/api/v1/unit_robot/pair_filter`).then(res => res.data); };
//创建unit时获取本位币
export const getBaseToken = params => { return axios.get(`${base3}/api/v1/unit_robot/base_currency?filter_id=` + params.filter_id + '&robot_type=' + params.robot_type).then(res => res.data); };
//创建unit时获取data source
export const getDataSource = params => { return axios.get(`${base3}/api/v1/unit_robot/data_source?base_currency=` + params.base_currency).then(res => res.data); };
//创建unit时获取运算周期
export const getDataCycle = params => { return axios.get(`${base3}/api/v1/unit_robot/data_source_date?base_currency=` + params.base_currency + '&data_source=' + params.data_source + '&pair=' + params.pair).then(res => res.data); };

//create Unit Robot
export const createUnitRobot = params => { return axios.post(`${base3}/api/v1/unit_robot/create_unit_robot`, params).then(res => res.data); };
//edit Unit Robot
export const editUnitRobot = params => { return axios.post(`${base3}/api/v1/unit_robot/edit_unit_robot`, params).then(res => res.data); };

//获取my Unit Robot list
export const getMyUnitRbt = params => { return axios.get(`${base3}/api/v1/unit_robot/query_by_user?user_id=` + params.id).then(res => res.data); };
//获取主页top3 component
export const getTopComponent = params => { return axios.get(`${base4}/api/v1/product_shelf/recommend_component`).then(res => res.data); };
//获取主页top3 strategy
export const getTopStrategy = params => { return axios.get(`${base4}/api/v1/product_shelf/recommend_strategy`).then(res => res.data); };
//机器人实例暂停接口
export const instancePause = params => { return axios.get(`${base3}/api/v1/robot_instance/pause?instance_id=` + params.instance_id).then(res => res.data); };
//机器人实例运行接口
export const instanceRun = params => { return axios.get(`${base3}/api/v1/robot_instance/run?instance_id=` + params.instance_id).then(res => res.data); };
//机器人详情中---基本信息
export const getRbtBasicInfo = params => { return axios.get(`${base3}/api/v1/robot/query_by_id?robot_id=` + params.id).then(res => res.data); };
//机器人详情中---组件信息
export const getRbtComponentInfo = params => { return axios.get(`${base3}/api/v1/robot/component_info?robot_id=` + params.id).then(res => res.data); };
//获取实例买卖信号
export const getSignal = params => { return axios.get(`${base3}/api/v1/robot_instance/signal?instance_id=` + params.instance_id + '&type=' + params.type).then(res => res.data); };
//机器人市场模糊查询
export const serachRobot = params => { return axios.get(`${base3}/api/v1/robot/search?keyword=` + params.name).then(res => res.data); };
//取消/开启自动订阅
export const changeSubscribe = params => { return axios.get(`${base3}/api/v1/product_shelf/renew?id=` + params.id).then(res => res.data); };
//取消/开启实例自动订阅
export const changeItSubscribe = params => { return axios.get(`${base3}/api/v1/robot_instance/auto_renew?instance_id=` + params.id).then(res => res.data); };
//获取机器人下拉列表
export const getRbtIdList = params => { return axios.get(`${base3}/api/v1/robot/user_robot_list?frequency=` + params.frequency + '&tradeType=' + params.type).then(res => res.data); };
//比较机器人
export const startCompare = params => { return axios.post(`${base4}/api/v1/robot/contrast_robot`, params).then(res => res.data); };
//获取运行日志
export const getRunLog = params => { return axios.get(`${base3}/api/v1/robot_instance/run_log?instance_id=` + params.instance_id).then(res => res.data); };
//获取overview个别机器人图标数据
export const getOverViewList = params => { return axios.post(`${base3}/api/v1/robot_instance/overview_report`, params).then(res => res.data); };
//刷新实例过期时间
export const freshInstance = params => { return axios.get(`${base3}/api/v1/robot_instance/instance_refresh?instance_id=` + params.instance_id).then(res => res.data); };
//停止实例
export const stopInstance = params => { return axios.get(`${base3}/api/v1/robot_instance/stop?instance_id=` + params.instance_id + '&force=' + params.force).then(res => res.data); };
//重启实例
export const initInstance = params => { return axios.get(`${base3}/api/v1/robot_instance/init_start?instance_id=` + params.instance_id).then(res => res.data); };
//刷新单元机器人过期时间
export const freshUnitRbt = params => { return axios.get(`${base3}/api/v1/unit_robot/unit_robot_refresh?id=` + params.id).then(res => res.data); };
//刷新机器人仓库过期时间
export const freshRbt = params => { return axios.get(`${base3}/api/v1/robot/robot_refresh?id=` + params.id).then(res => res.data); };
//刷新单元机器人过期时间
export const startRenew = params => { return axios.get(`${base3}/api/v1/robot/instance_add_Date?instance_id=` + params.instance_id + '&day_type=' + params.day_type).then(res => res.data); };
//增持弹出框获取实例剩余时间
export const getInstanceRD = params => { return axios.get(`${base3}/api/v1/robot/instance_days_remaining?instance_id=` + params.instance_id).then(res => res.data); };
//增持接口
export const toAddLimit = params => { return axios.get(`${base3}/api/v1/robot/instance_add_limit?instance_id=` + params.instance_id + '&add_amount=' + params.add_amount).then(res => res.data); };
//实例删除接口
export const deleteInstance = params => { return axios.get(`${base3}/api/v1/robot_instance/del?instance_id=` + params.instance_id).then(res => res.data); };
//自建机器人和单元机器人开关自动订阅
export const urbtRenew = params => { return axios.get(`${base3}/api/v1/unit_robot/renew?id=` + params.id).then(res => res.data); };
//check cookie
export const checkCookie = params => { return axios.get(`${base4}/api/v1/home/visit`).then(res => res.data); };
//增持接口
export const toAddUserLimit = params => { return axios.get(`${base3}/api/v1/robot/user_instance_add_limit?instance_id=` + params.instance_id + '&add_amount=' + params.add_amount).then(res => res.data); };
//自建单元机器人删除
export const urbtDetele = params => { return axios.get(`${base3}/api/v1/unit_robot/del_unit_robot?id=` + params.id).then(res => res.data); };
//组件续费
export const componentRenew = params => { return axios.get(`${base3}/api/v1/product_shelf/component_add_date?id=` + params.id + '&day_type=' + params.day_type).then(res => res.data); };
//策略续费
export const strategyRenew = params => { return axios.get(`${base3}/api/v1/strategy/add_date?id=` + params.id + '&day_type=' + params.day_type).then(res => res.data); };
//决策续费
export const decisionRenew = params => { return axios.get(`${base3}/api/v1/strategy/decision_add_date?id=` + params.id + '&day_type=' + params.day_type).then(res => res.data); };
//获取回测次数
export const getBacktestNum = params => { return axios.get(`${base}/api/v1/back_test/Query_back_test_by_user?robot_id=` + params.robot_id + '&user_id=' + params.user_id).then(res => res.data); };
//专业and试用申请
export const toApplication = params => { return axios.get(`${base}/api/v1/user/application?type=` + params.type).then(res => res.data); };
//提现
export const withDraw = params => { return axios.post(`${base}/api/v1/user/withdraw`, params).then(res => res.data); };
//提现记录
export const withDrawRecord = params => { return axios.post(`${base}/api/v1/user/user_withdraw_log`, params).then(res => res.data); };
//创建钱包地址
export const createWallet = params => { return axios.get(`${base}/api/v1/account/create_wallet`).then(res => res.data); };
//获取账户资金
export const ovBalance = params => { return axios.get(`${base3}/api/v1/robot_instance/overview_balance`).then(res => res.data); };
//概览获取机器人详情
export const getOvri = params => { return axios.get(`${base3}/api/v1/robot_instance/overview_run_instances?pageNum=` + params.pageNum + '&pageSize=' + params.pageSize).then(res => res.data); };
//获取机器人续费详情
export const getrenewDetail = params => { return axios.get(`${base3}/api/v1/robot/instance_renew_check?instance_id=` + params.instance_id).then(res => res.data); };
//新购买机器人续费接口
export const toRadl = params => { return axios.get(`${base3}/api/v1/robot/instance_renew_and_add_limit?instance_id=` + params.instance_id + '&add_amount=' + params.add_amount + '&day_type=' + params.day_type + '&auto_renew=' + params.auto_renew).then(res => res.data); };
//机器人详情基础信息
export const getRobotbd = params => { return axios.get(`${base3}/api/v1/robot_instance/base_info?instance_id=` + params.instance_id).then(res => res.data); };
//机器人详情收益信息
export const getRobotpd = params => { return axios.get(`${base3}/api/v1/robot_instance/return_info?instance_id=` + params.instance_id).then(res => res.data); };
//机器人详情订单信息
export const getRobotod = params => { return axios.get(`${base3}/api/v1/robot_instance/trade_order?instance_id=` + params.instance_id).then(res => res.data); };
//机器人详情订单信息详情
export const getRobotord = params => { return axios.get(`${base3}/api/v1/robot_instance/trade_order_detail?order_id=` + params.order_id).then(res => res.data); };
//获取历史机器人信息
export const getHistoryInfo = params => { return axios.get(`${base3}/api/v1/robot_instance/by_user_restart`).then(res => res.data); };
//机器人下架
export const rbtOffLoading = params => { return axios.get(`${base3}/api/v1/robot/off_loading?robot_id=` + params.robot_id + '&off_type=' + params.off_type).then(res => res.data); };

//自建机器人实例
export const selfBuiltRobotList = params => { return axios.get(`${base3}/api/v1/robot_instance/user_robot_run?user_id=` + params.user_id + '&status=' + params.status + '&pageNum=' + params.page + '&pageSize=' + params.size).then(res => res.data); };
//市场购买机器人实例
export const marketRobotList = params => { return axios.get(`${base3}/api/v1/robot_instance/market_robot_run?user_id=` + params.user_id + '&status=' + params.status + '&pageNum=' + params.page + '&pageSize=' + params.size).then(res => res.data); };
//机器人仓库列表
export const robotStoreList = params => { return axios.get(`${base3}/api/v1/robot/query_user_robot?user_id=` + params.user_id + '&pageNum=' + params.page + '&pageSize=' + params.size).then(res => res.data); };
//历史机器人列表
export const getHistoryList = params => { return axios.get(`${base3}/api/v1/robot_instance/robot_restart?pageNum=` + params.page + '&pageSize=' + params.size).then(res => res.data); };
//我的单元机器人列表
export const myUnitRobot = params => { return axios.get(`${base3}/api/v1/unit_robot/user_unit_robot?user_id=` + params.user_id + '&pageNum=' + params.page + '&pageSize=' + params.size).then(res => res.data); };
//组件仓库列表
export const componentStoreList = params => { return axios.get(`${base3}/api/v1/warehouse/component?user_id=` + params.user_id + '&pageNum=' + params.page + '&pageSize=' + params.size).then(res => res.data); };
//基础策略
export const baseStrategyList = params => { return axios.get(`${base3}/api/v1/strategy/user_base_strategy?user_id=` + params.user_id + '&pageNum=' + params.page + '&pageSize=' + params.size).then(res => res.data); };
//策略决策列表
export const decisionStrategyList = params => { return axios.get(`${base3}/api/v1/strategy/user_strategy_decision?user_id=` + params.user_id + '&pageNum=' + params.page + '&pageSize=' + params.size).then(res => res.data); };
//创建单元机器人
export const createUnitRobotNew = params => { return axios.post(`${base3}/api/v1/unit_robot/create_unit_robot_new`, params).then(res => res.data); };
//新获取个人机器人信息
export const getrbInfoByid = params => { return axios.get(`${base3}/api/v1/robot/robot_info_new?robot_id=` + params.robot_id).then(res => res.data); };
//获取邮箱验证码
export const getMailCode = params => { return axios.post(`${base}/api/v1/user/mail_code`, params).then(res => res.data); };
//邮箱注册
export const mailReg = params => { return axios.post(`${base}/api/v1/user/reg_mail`, params).then(res => res.data); };
//获取机器人下拉列表
export const getRbtIdListNew = params => { return axios.get(`${base3}/api/v1/robot/contrast_robot_list?frequency=` + params.frequency + '&tradeType=' + params.type).then(res => res.data); };
//自建机器人续费获取组件信息
export const getRenewInfo = params => { return axios.get(`${base3}/api/v1/robot/renew?robot_id=` + params.robot_id).then(res => res.data); };
//自建机器人续费接口
export const renewtodo = params => { return axios.get(`${base3}/api/v1/robot/do_renew?days=` + params.days + '&robot_id=' + params.robot_id).then(res => res.data); };
//自建实例续费接口
export const userIR = params => { return axios.get(`${base3}/api/v1/robot_instance/renew?days=` + params.days + '&instance_id=' + params.instance_id).then(res => res.data); };
//自建实例增持接口
export const userAddLimit = params => { return axios.get(`${base3}/api/v1/robot_instance/overweight?limit=` + params.limit + '&instance_id=' + params.instance_id).then(res => res.data); };
//app下载链接
export const appLink = params => { return axios.get(`${base4}/api/v1/user/get_app_download_url`).then(res => res.data); };
//修改用户头像
export const userPhoto = params => { return axios.post(`${base}/api/v1/user/mod_photo`, params).then(res => res.data); };
//修改用户昵称
export const userNickname = params => { return axios.post(`${base}/api/v1/user/mod_nickname`, params).then(res => res.data); };
//修改用户性别
export const userGender = params => { return axios.post(`${base}/api/v1/user/mod_gender`, params).then(res => res.data); };
//验证原手机号
export const codeVerify = params => { return axios.post(`${base}/api/v1/user/code_verify`, params).then(res => res.data); };
//修改绑定手机
export const modPhone = params => { return axios.post(`${base}/api/v1/user/mod_phone`, params).then(res => res.data); };
//修改绑定邮箱
export const modEmail = params => { return axios.post(`${base}/api/v1/user/mod_email`, params).then(res => res.data); };
