<template>
    <section class="mail-list">
        <div class="lg-row">
            <div class="overview_box padding_left config_detailt_cont">
                <section class="">
                    <h2 class="clearfix" style="font-size:25px;color:#fff;">
                        <span style="float:left">{{crbtParams.robot_info.robot_name}}</span>
                        <label class="external-event label ui-draggable"
                               :class="{'label-primary':crbtParams.robot_info.Status==1,'label-primary2':crbtParams.robot_info.Status!=1}"
                               style="font-weight: 500 !important;font-size: 14px;margin-left:20px;float:left">
                            {{crbtParams.robot_info.Status|cptStatus}}
                        </label>
                    </h2>
                    <div class="lg-width" style="width: 100%;">
                        <!--编辑-->
                        <button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="ifEdit = false"  v-show="(crbtParams.robot_info.release_status==0||crbtParams.robot_info.release_status==4)&&crbtParams.robot_info.Status!=2 && ifEdit && !crbtParams.robot_info.IsRun">
                            {{$t('netnew.Edit')}}
                            <img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
                        </button>
                        <!--保存-->
                        <button class="btn rbdbtn btn-md" type="button" style="position: relative;"
                                @click="createRobot()"
                                v-if="!ifEdit"
                                :disabled="!crbtParams.robot_info.robot_name||
                                unitRobotValue.length==0||!crbtParams.robot_info.order_execution_id||!crbtParams.robot_info.fund_optimization_id||!crbtParams.robot_info.robot_weighting_id||!crbtParams.robot_info.risk_management_id" >
                            {{$t('netnew.saveRbt')}}
                            <img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
                        </button>
                         <!--机器人运行状态  以及对应操作-->
                        <!--<button class="btn rbdbtn btn-md" type="button" style="position: relative;"  v-show="crbtParams.robot_info.Status!=2 &&ifEdit"  href="#submitModal" data-toggle="modal" @click="toCreateIs(rbtDetailParm)">
                            {{$t('netnew.Operate')}}
                            <img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
                        </button>-->
                        <button class="btn rbdbtn btn-md" type="button" style="position: relative;"  @click="toBacktest()" v-show="crbtParams.robot_info.Status!=2 &&ifEdit"><!--回测-->
                            {{$t('netnew.Backtest')}}
                            <img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
                        </button>
                        <!--提交-->
                        <!--<button class="btn rbdbtn btn-md" type="button" style="position: relative;"
                                v-show="!crbtParams.robot_info.IsRelease&&crbtParams.robot_info.release_status!=2&&crbtParams.robot_info.release_status!=3&&crbtParams.robot_info.Status!=2&&ifEdit"
                                href="#submitModal" data-toggle="modal"
                                @click="toOnShelf(rbtDetailParm)">
                            {{$t('netnew.Submit')}}
                            <img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
                        </button>-->
                        <button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="back"><!--返回-->
                            {{$t('net.back')}}
                            <img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
                        </button>
                    </div>


                    <!--基础数据  start-->
                    <div class="instance_overview clearfix" style="width: 100%;padding-top:0;">
                        <div  style="float:left;width:185px;height:193px;margin-right: 55px;">
                            <img src="../assets/img/rbtd5@2x.png" style="margin-left:-15px;width:185px;height:193px;">
                        </div>

                        <!--基础数据 start-->
                        <div style="float:left;width:calc(100% - 240px)">
                            <div class="config_sub_title">{{$t('netnew.BasicInformation')}}</div>
                            <div class="clearfix" style="width:100%;">
                                <div class="config_base_wrap" style="width:38%;float:left;margin-right:6%;">
                                    <div class="des_item" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
                                        <input type="text" style="height:52px!important;" class="form-control" :placeholder="$t('netnew.RobotName')" maxlength="20" v-model="crbtParams.robot_info.robot_name"  :disabled="ifEdit">
                                    </div>
                                    <div class="des_item">
                                        <multiselect  style="height:100%;" :tag-placeholder="$t('netnew.OperationFrequency')" :placeholder="$t('netnew.fMulti')" label="name" track-by="value"
                                                      :disabled="ifEdit"
                                                      :value="frequencyData"
                                                      :options="frequencyList"
                                                      :multiple="true"
                                                      :taggable="true"
                                                      @input="onChange1"
                                                      @tag="addTag">

                                        </multiselect>
                                    </div>
                                    <div class="des_item">
                                        <select class="form-controls" style="height:100%;" :placeholder="$t('netnew.RobotRange')" v-model="crbtParams.robot_info.robot_range" :disabled="ifEdit">
                                            <option value="private">{{$t('netnew.Private')}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="config_base_wrap" style="float:left;width:38%;">
                                    <div class="des_item">
                                        <select class="form-controls" style="height:100%;" :disabled="ifEdit" v-model="crbtParams.robot_info.robot_type" @change="changeUnitRobotList">
                                            <option value="Long">{{$t('netnew.typelong')}}</option>
                                            <option value="Short">{{$t('netnew.typeshort')}}</option>
                                        </select>
                                    </div>
                                    <div class="des_item">
                                        <select class="form-controls" style="height:100%;" :disabled="ifEdit" v-model="crbtParams.robot_info.base_currency" @change="changeUnitRobotList">
                                            <option value="ETH">ETH</option>
                                            <option value="USDT">USDT</option>
                                            <option value="BTC">BTC</option>
                                        </select>
                                    </div>
                                    <div class="des_item">
                                        <textarea rows="3" class="form-control" style="resize:none;height:52px!important;" maxlength="255" :placeholder="$t('netnew.Description')" :disabled="ifEdit"  v-model="crbtParams.robot_info.description"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--下半部分  start-->
                    <div class="config_main-wrap">
                        <div class="config_nav_cont">
                            <ul class="config_nav_tab_wrap">
                                <li class="config_nav_item" :class="{'item_tab_active':tabIndex == 1}" @click="tabIndex = 1">{{$t('netnew.ComponentInfo')}}</li>
                                <li class="config_nav_item" :class="{'item_tab_active':tabIndex == 2}" @click="tabIndex = 2">{{$t('netnew.hcmx')}}</li>
                                <li class="config_nav_item" :class="{'item_tab_active':tabIndex == 3}" @click="tabIndex = 3">{{$t('robotdetails.Currentlyholdingtherobot')}}</li>
                            </ul>
                        </div>
                        <div class="config_container">
                            <!--组件信息  start-->
                            <section class="config_component_wrap" v-if="tabIndex == 1">
                                <div class="des_item" style="padding-top:20px;margin-bottom: 40px;">
                                    <multiselect  :tag-placeholder="$t('netnew.multipleChoices')" :placeholder="$t('netnew.multipleChoices')" label="name" track-by="Id"
                                                  :disabled="ifEdit"
                                                  :value="unitRobotValue"
                                                  :options="unitRobotData"
                                                  :multiple="true"
                                                  :taggable="true"
                                                  :custom-label="customLabe2"
                                                  @input="onChange2"
                                                  @tag="addTag">

                                    </multiselect>
                                </div>
                                <div class="clearfix" style="width:100%;">
                                    <div style="float:left;width:46%;margin-right:8%;" class="des_item">
                                        <select class="form-controls" :placeholder="$t('netnew.RiskManagement')" :disabled="ifEdit"  v-model="crbtParams.robot_info.risk_management_id">
                                            <option  v-for="list in optionsRM" :value="list.Id">{{list.ControlParam}}</option>
                                        </select>
                                    </div>
                                    <div style="float:right;width:46%;" class="des_item">
                                        <select class="form-controls" :placeholder="$t('netnew.RobotWeighting')" :disabled="ifEdit" v-model="crbtParams.robot_info.robot_weighting_id">
                                            <option v-for="list in optionsRW" :value="list.Id">{{list.ControlParam}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="clearfix" style="width:100%;">
                                    <div style="float:left;width:46%;" class="des_item">
                                        <select class="form-controls" :placeholder="$t('netnew.FundOptimization')" v-model="crbtParams.robot_info.fund_optimization_id" :disabled="ifEdit">
                                            <!--<option value="default">default</option>-->
                                            <option v-for="list in optionsFO" :value="list.Id">{{list.ControlParam}}</option>
                                        </select>
                                    </div>
                                    <div style="float:right;width:46%;" class="des_item">
                                        <select class="form-controls"  :placeholder="$t('netnew.OrderExecution')" v-model="crbtParams.robot_info.order_execution_id" :disabled="ifEdit">
                                            <!--<option value="default">default</option>-->
                                            <option v-for="list in optionsOE" :value="list.Id">{{list.ControlParam}}</option>
                                        </select>
                                    </div>
                                </div>
                                <p style="color:#fff;font-size: 16px">{{$t('netnew.rbtCostSum')}}：{{robotPrice}}NET/{{$t('market.day')}}</p>
                            </section>
                            <!--回测明细  start-->
                            <section class="config_backtest_wrap" v-show="tabIndex == 2">
                                <div class="clearfix" style="width:100%">
                                    <div style="width: 30%;text-align: left;font-size: 20px;color: #fff;line-height: 60px;float:left;">{{$t('netnew.hcljsy')}}</div>
                                    <div class="clearfix" style="float:right;padding-right:150px;">
                                       <!-- <div class="line-type" :class="{'line-checked':lineCheck==1}" @click="changeChart('1')" style="padding-right:33px;">{{$t('netnew.jz')}}</div>-->
                                        <div class="line-type" :class="{'line-checked':lineCheck==1}" @click="changeChart('1')" style="padding-right:33px;">{{$t('netnew.md')}}</div>
                                        <div class="line-type" :class="{'line-checked':lineCheck==2}" @click="changeChart('2')" style="">{{$t('netnew.mz')}}</div>
                                    </div>
                                </div>
                                <!--加载中-->
                                <div  style="width: 100%;color: #718EBD;padding:150px 0 ;text-align: center;" v-show="chartLoading">{{$t('netnew.jzz')}}...</div>
                                <div  style="width: 100%;"  v-show="!chartLoading"><!--机器人回测明细-->
                                    <!--图表-->
                                    <div id="backChart" style="height:300px;width: 970px;"></div>
                                </div>

                                <div  style="width: 100%;text-align: left;font-size: 20px;color: #fff;line-height: 60px;padding-top:40px;">{{$t('netnew.jqrzcsj')}}</div>
                                <div  style="width: 100%;">
                                    <table class="table mdtable" style="text-align: center;">
                                        <thead>
                                        <tr class="box-title" style="border-top:none;">
                                            <th style="font-weight: 500 ;" :class="{'lg-wd':$i18n.locale=='en-US','md-wd':$i18n.locale=='ko','sm-wd':$i18n.locale=='zh-CN'}">{{$t("robotdetails.Average")}}</th>
                                            <th style="font-weight: 500 ;" :class="{'sm-pd':$i18n.locale=='zh-CN'}">{{$t("robotdetails.Sharperatio") }}</th>
                                            <th style="font-weight: 500 ;">{{$t("robotdetails.Accuracy") }}</th>
                                            <th style="font-weight: 500 ;">{{$t("robotdetails.Averagereturn") }}</th>
                                            <th style="width:2%;"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="box-text">
                                            <td>{{ robotBackBaseInfo.AverageHoldingPeriod|tofix}} H</td>
                                            <td :class="{'sm-pd':$i18n.locale=='zh-CN'}">{{ robotBackBaseInfo.SharpeRatio*100|tofix}}%</td>
                                            <td>{{ robotBackBaseInfo.WinRate*100|tofix }}%</td>
                                            <td>{{ robotBackBaseInfo.AverageReturnPerTrade*100|tofix}}%</td>
                                            <td></td>
                                        </tr>
                                        <tr class="box-title">
                                            <td>{{$t("robotdetails.Annualinterest") }}</td>
                                            <td :class="{'sm-pd':$i18n.locale=='zh-CN'}">{{$t("robotdetails.Numberof") }}</td>
                                            <td>{{$t("robotdetails.Averageweeklytransactions")}}</td>
                                            <td>{{$t("robotdetails.Maximumhistoricalretracement") }}</td>
                                            <td></td>
                                        </tr>
                                        <tr class="box-text" >
                                            <td>{{ robotBackBaseInfo.AnnualizedReturn*100|tofix }}%</td>
                                            <td :class="{'sm-pd':$i18n.locale=='zh-CN'}">{{ robotBackBaseInfo.TradeCount }}</td>
                                            <td>{{ robotBackBaseInfo.TradeCountPerWeek|tofix }}</td>
                                            <td>{{ robotBackBaseInfo.MaxDrawdownRatio*100|tofix }}%</td>
                                            <td></td>
                                        </tr>
                                        <tr class="box-title">
                                            <td>{{$t("robotdetails.Maximumweeklywithdrawal") }}</td>
                                            <td :class="{'sm-pd':$i18n.locale=='zh-CN'}">{{$t("robotdetails.risk1")}}</td>
                                            <td>{{$t("robotdetails.risk5")}}</td>
                                            <td>{{$t("robotdetails.Volatility")}}</td>
                                            <td></td>
                                        </tr>
                                        <tr class="box-text" >
                                            <td>{{ robotBackBaseInfo.MaxDrawdownWeek*100|tofix }}%</td>
                                            <td :class="{'sm-pd':$i18n.locale=='zh-CN'}">{{ robotBackBaseInfo.Var1|tofixd }}%</td>
                                            <td>{{ robotBackBaseInfo.Var5|tofixd}}%</td>
                                            <td>{{ robotBackBaseInfo.Std*100|tofix }}%</td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <!--购买记录  start-->
                            <section class="config_bugrecord_wrap" v-show="tabIndex == 3">
                                <div style="color:#fff;font-size:20px;padding:27px 0 10px;">{{$t('robotdetails.Currentlyholdingtherobot')}}</div>
                                <div class="buyRecordWrap" style="padding-bottom:60px;position:relative;min-height: 300px;">
                                    <table class="table mdtable" style="text-align: center;">
                                        <thead>
                                        <tr class="corder-tit" style="border-top:none;width:337px;">
                                            <th style="font-weight: 500 ;width:220px;">{{$t('netnew.userName')}}</th>
                                            <th style="font-weight: 500 ;text-align: center;width:160px;padding:0;">{{$t("robotdetails.Buytime") }}</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr class="corder-text" v-for="(robot_owner,index) in robotOwners">
                                            <td>{{robot_owner.nickName}}</td>
                                            <td style="text-align:center;width:160px;">{{robot_owner.buyTime | timer}}</td>
                                            <td></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div class="pigna lg-width" v-show="robotOwners.length>0" style="width: 100%;text-align: center;margin-top: 15px;position:absolute;bottom:4px;left:0;right:0">
                                        <paginate v-model="CurrentPage" :page-count="perpage" :click-handler="withDrawRecord" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
                                        </paginate>
                                    </div>
                                    <div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading">{{$t('netnew.jzz')}}...</div>
                                    <div class="alert alert-warning fade in" v-show="robotOwners.length==0 && !ifLoading">
                                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <!--提交按钮  上架功能弹出窗-->
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="submitModal" class="modal fade" style="z-index: 5001;">
            <div class="modal-dialog" v-show="factoryModal==1">
                <div class="modal-content login-box">

                    <div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
                        <span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.Operate')}}</span>
                        <button type="button" class="close" style="position: absolute;right: 5px;top: 5px; display: none;" data-dismiss="modal" aria-hidden="true"><img src="@/assets/img/close.png"  /></button>
                    </div>
                    <div style="padding-left: 57px;padding-right: 57px;">

                        <!--<div class="lg-width" style="width: 20%;margin-top: 25px;text-align: left;margin-left: 6%;padding-top: 10px;">
                            <label style="font-size: 18px;">{{$t('netnew.Account')}}</label>
                        </div>
                        <div class="lg-width" style="width: 68%;margin-top: 25px;text-align: left;margin-left: 6%;">
                            <select autocomplete="off" class="exchange" style=" width: 100px;height: 35px;border: solid 1px #dcdcdc;" v-model="cisParams.account_id" @change="initAccount">
                                <option style="text-align: center;" v-if="accountList.length==0" >{{$t('netnew.noAccount')}}</option>
                                <option style="text-align: center;" v-for="items in accountList" :value="items.Id">{{ items.ExchangeAccountName }}</option>
                            </select>

                        </div>-->

                        <div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
                            <div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
                                <span style="font-size:16px;color: #718EBD;">{{$t('market.account')}}</span>
                            </div>
                            <div class="lg-width" style="width: 70%;margin-top: 30px;text-align: left;margin-left: 5%;">
                                <select autocomplete="off" class="exchange" style="width: 200px;line-height: 35px;border: none;background: none;font-size: 16px;color: #fff;" @change="initAccount" v-model="cisParams.account_id">
                                    <option style="text-align: center;background: #006DCC;" v-if="accountList.length==0" value="" >{{$t('netnew.zwzh')}}</option>
                                    <option style="text-align: center;background: #006DCC;" v-for="items in accountList" :value="items.Id">{{ items.ExchangeAccountName }}</option>
                                </select>
                            </div>
                        </div>

                        <!--<div class="lg-width" style="width: 20%;margin-top: 25px;text-align: left;margin-left: 6%;">
                            <label style="font-size: 18px;">{{$t('netnew.Share')}}</label>
                        </div>
                        <div class="lg-width" style="width: 68%;margin-top: 25px;text-align: left;margin-left: 6%;">
                            <input type="number" id="syfe" style="text-align:center;width: 100px;margin-right:5px;height: 35px;margin-top: -7px;border:1px solid #dcdcdc" v-model="cisParams.coin_amount"  />

                            <span style="font-size: 12px;">{{baseToken}}</span>

                        </div>-->

                        <div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
                            <div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
                                <span style="font-size:16px;color: #718EBD;">{{$t('netnew.yxfe')}}</span>
                            </div>
                            <div class="lg-width" style="width: 68%;margin-top: 35px;text-align: left;margin-left: 3%;">
                                <input type="number" min="0" max="5" id="syfe" style="text-align: center;font-size: 16px;color: #fff;width: 100px;margin-right: 5px;line-height: 35px;margin-top: -11px;background: none;border: none;"  v-model="cisParams.amount"  />
                                <span style="font-size: 16px;color: #718EBD;">×{{multiples}}{{baseToken}}</span>
                                <!--								<span style="font-size: 16px;color: #718EBD;">{{baseToken}}</span>	-->

                            </div>
                        </div>

                    </div>

                    <div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;border-top:1px solid #718EBD40 ;">
                        <button class="card-btm" @click="startIs"  style="position: relative;float: right;">
                            {{$t('market.confirm')}}
                        </button>
                    </div>

                </div>
            </div>
            <div class="modal-dialog" v-show="factoryModal==2">
                <div class="modal-content login-box" style="position: relative">
                    <div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
                        <span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.Submit')}}</span>
                        <button type="button" class="close" style="position: absolute;right: 5px;top: 5px; display: none;" data-dismiss="modal" aria-hidden="true"><img src="@/assets/img/close.png" /></button>
                    </div>
                    <div style="padding-left: 57px;padding-right: 57px;">
                        <div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
                            <div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
                                <span style="font-size:16px;color: #718EBD;">{{$t('netnew.Price')}}</span>
                            </div>
                            <div class="lg-width" style="width: 68%;margin-top: 35px;text-align: left;margin-left: 3%;">
                                <input type="number"   style="text-align: center;font-size: 16px;color: #fff;width: 100px;margin-right: 5px;line-height: 35px;margin-top: -11px;background: none;border: none;"  v-model="onshelfParams.unit_price"  />
                                <span style="font-size: 16px;color: #718EBD;">NET/Day</span>
                            </div>
                        </div>
                        <div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
                            <div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
                                <span style="font-size:16px;color: #718EBD;">{{$t('market.buyshare')}}</span>
                            </div>
                            <div class="lg-width" style="width: 68%;margin-top: 35px;text-align: left;margin-left: 3%;">
                                <input type="number" min="0" max="5"  style="text-align: center;font-size: 16px;color: #fff;width: 100px;margin-right: 5px;line-height: 35px;margin-top: -11px;background: none;border: none;"  v-model="onshelfParams.quota"  />
                                <span style="font-size: 16px;color: #718EBD;">×{{multiples}}{{baseToken}}</span>
                            </div>
                        </div>
                        <div style="display: table;width: 100%;border-bottom:1px solid #718EBD;">
                            <div class="lg-width" style="width: 24%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
                                <span style="font-size:16px;color: #718EBD;">{{$t('robotdetails.Robotintroduction')}}</span>
                            </div>
                            <div class="lg-width" style="width: 68%;margin-top: 35px;text-align: left;margin-left: 3%;">
                                <input type="text" maxlength="255" style="font-size: 16px;color: #fff;margin-right: 5px;line-height: 35px;margin-top: -11px;background: none;border: none;"  v-model="onshelfParams.introduction"  />
                            </div>
                        </div>
                    </div>
                    <div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;border-top:1px solid #718EBD40 ;">
                        <button class="card-btm" @click="RobotOnshelf"  style="position: relative;float: right;">
                            {{$t('market.confirm')}}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {getUserInfo,getRobotType,getRobotBase,getUnitRobotList,robotBacktestDetail,getBaseControl,getrbInfoByid,createRobot,robotOwner,RobotOnshelf,initAccount,getAcount,startIs} from '../api/api';
    export default {
        name: "robotConfig",
        data() {
            return {
                ifLoading:true,
                CurrentPage: 1,
                perpage: 1,//总页数
                getrobotInfo: {
                    robotId: "",
                },
                robotInfo:{},
                type:'',
                tabIndex:1,
                chartLoading:true,
                lineCheck:1,//回测收益图标初始默认选中  ’每天‘
                robotBackBaseInfo:{},//机器人回测详情
                rbtDetailParm:{},//机器人所有信息集合,从locaStorage获取
                unitRobotData:[],//单元机器人list
                unitRobotValue:[],
                frequencyData:[
                    {name:"1Hour",value:"1h"},
                ],
                frequencyList: [//频次
                    {name:"6Hour",value:"6h"},
                    {name:"4Hour",value:"4h"},
                    {name:"1Hour",value:"1h"},
                    {name:"30Min",value:"30m"},
                    {name:"15Min",value:"15m"}
                ],
                crbtParams:{
                    icon_url:'',
                    robot_info:{
                        robot_name:'',
                        robot_type:"Long",
                        robot_range:"private",
                        operation_frequency:"1h",
                        base_currency:"ETH",
                        risk_management_id:"default",
                        robot_weighting_id:"default",
                        fund_optimization_id:"default",
                        order_execution_id:"default",
                        IsRun:false,
                    }
                },
                optionsDMR:[],
                optionsRM:[],//风险管理下拉列表数据
                optionsAA:[],
                optionsRW:[],//机器人权重下拉列表数据
                optionsFO:[],//资金优化下拉列表数据
                optionsOSR:[],
                optionsOE:[],//订单执行下拉列表数据
                ifEdit:true,//是否input,select,  是否disabled
                robotPrice:0,//合计成本
                unitPrice:0,//单元机器人成本
                otherPrice:0,//风险管理，机器人权重，资金优化，订单执行成本
                xdata: [],
                ydata: [],
                robotOwners: [],//购买记录
                pageInfo: {
                    robotId: "",
                    pageSize: 5,
                    pageNum: 1,
                },
                baseToken:"",
                multiples:"",
                factoryModal:2,
                onshelfParams:{
                    robot_id:"",
                    unit_price:"",
                    quota:"",
                    introduction_cn:"",
                    introduction:""
                },
                cisParams:{
                    robot_id:"",
                    account_id:"",
                    amount:'',
                },
                accountList:[],
            }
        },
        mounted() {
            this.rbtDetailParm = JSON.parse(localStorage.getItem('robotInfoObj'));
            this.getUserInfo();
            this.getrbInfoByid(this.rbtDetailParm.RobotId);//获取个人机器人信息
            this.getRobotBase();//机器人回测列表基础数据
            this.robotBacktestDetail();//机器人累计收益图表
            this.robotOwner();//购买记录
        },
        methods:{
            openLoding() {
                this.$loading('loading...');
            },
            closeLoading() {
                this.$loading.close();
            },
            async getUserInfo() {//获取用户基本信息
                this.openLoding();
                try{
                    await getUserInfo(this.empty).then(res => {
                        if (res.success == 0) {
                            this.crbtParams.user_id=res.data.userId;
                            this.crbtParams.robot_info.user_name=res.data.nickName;
                            this.getAcount();//获取account List
                          /*  this.getRobotType();//机器人类型  long  short*/
                        } else {
                            this.$toast.center(this.$t('msg.msg'+res.code));
                        }
                    });
                    //根据typename获取下拉框数据
                    await Promise.all([this.getBaseControl('Risk Management'), this.getBaseControl('Robot Weighting'),this.getBaseControl('Fund Optimization'),this.getBaseControl('Order Execution')]);
                    this.closeLoading()
                }catch(error){
                    this.closeLoading()
                    console.log(error)
                }
            },
            getrbInfoByid(val){//获取自定义robot实例信息
                var params ={}
                params.robot_id=val;
                getrbInfoByid(params).then(data => {
                    if (data.code == 200) {
                        this.frequencyData = []
                        this.crbtParams.robot_info=data.data
                        this.unitRobotValue=data.data.unit_robots;
                        for(var i=0;i<data.data.query_frequency.length;i++){
                            if(data.data.query_frequency[i]=='4d'){
                                var param={};
                                param.name="4Day";
                                param.value="4d"
                                this.frequencyData.push(param);
                            }else if(data.data.query_frequency[i]=='1d'){
                                var param={};
                                param.name="1Day";
                                param.value="1d"
                                this.frequencyData.push(param);
                            }else if(data.data.query_frequency[i]=='1h'){
                                var param={};
                                param.name="1Hour";
                                param.value="1h"
                                this.frequencyData.push(param);
                            }else if(data.data.query_frequency[i]=='30m'){
                                var param={};
                                param.name="30Min";
                                param.value="30m"
                                this.frequencyData.push(param);
                            }else if(data.data.query_frequency[i]=='15m'){
                                var param={};
                                param.name="15MIn";
                                param.value="15m"
                                this.frequencyData.push(param);
                            }else if(data.data.query_frequency[i]=='5m'){
                                var param={};
                                param.name="5Min";
                                param.value="5m"
                                this.frequencyData.push(param);
                            }
                        }
                        var price=0;
                        for(var i=0;i<this.unitRobotValue.length;i++){
                            price=price+this.unitRobotValue[i].unit_price
                        }
                        this.unitPrice=price;
                        this.robotPrice=this.otherPrice+this.unitPrice;//机器人成本合计
                        this.getUnitRobotList();//单元机器人列表
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            getRobotType(){//机器人类型
                var params={};
                params.user_id=this.crbtParams.user_id;
                getRobotType(params).then(res => {
                    if (res.code == 200) {
                        if(res.data.robot_type.length>0){
                            this.crbtParams.robot_info.robot_type=res.data.robot_type[0];
                            this.crbtParams.robot_info.base_currency=res.data.base_currency[0];
                            this.getUnitRobotList();//单元机器人列表
                        }
                    } else {
                        this.$toast.center(this.$t('msg.msg'+res.code));
                    }
                });
            },
            getUnitRobotList(){//获取单元机器人列表
                var params=this.crbtParams.robot_info;
                params.user_id=this.crbtParams.user_id;
                params.frequency=[];
                for(let i=0;i<this.frequencyData.length;i++){
                    params.frequency.push(this.frequencyData[i].value);
                }
                getUnitRobotList(params).then(data => {
                    if (data.code == 200) {
                        if(data.data!=null){
                            this.unitRobotData=data.data;
                        }else{
                            this.unitRobotData=[];
                            this.unitRobotValue=[];
                            this.$toast.center(this.$t('netnew.nounitrbt'));
                        }
                    } else {
                        this.unitRobotData=[];
                        this.unitRobotValue=[];
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            changeUnitRobotList(){//选择单元机器人
                var params=this.crbtParams.robot_info;
                params.user_id=this.crbtParams.user_id;
                params.frequency=[];
                for(let i=0;i<this.frequencyData.length;i++){
                    params.frequency.push(this.frequencyData[i].value);
                }
                getUnitRobotList(params).then(data => {
                    if (data.code == 200) {
                        if(data.data!=null){
                            this.unitRobotValue=[];
                            this.unitRobotData=data.data;
                        }else{
                            this.unitRobotData=[];
                            this.unitRobotValue=[];
                            this.$toast.center(this.$t('netnew.nounitrbt'));
                        }

                    } else {
                        this.unitRobotData=[];
                        this.unitRobotValue=[];
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            getBaseControl(val){//根据typename获取下拉框数据   组件信息中所需数据  风险管理，机器人权重，资金优化，订单执行
                var params = {};
                params.type_name=val;
                params.user_id=this.crbtParams.user_id;
                getBaseControl(params).then(data => {
                    if (data.code == 200) {
                        if(val=='Risk Management'){//风险管理
                            this.optionsRM=data.data;
                            if(data.data.length>0){
                                this.crbtParams.robot_info.risk_management_id=data.data[0].Id;
                                this.otherPrice=this.otherPrice+data.data[0].unit_price;
                            }
                        }else if(val=='Robot Weighting'){//机器人权重
                            this.optionsRW=data.data;
                            if(data.data.length>0){
                                this.crbtParams.robot_info.robot_weighting_id=data.data[0].Id;
                                this.otherPrice=this.otherPrice+data.data[0].unit_price;
                            }
                        }else if(val=='Fund Optimization'){//资金优化
                            this.optionsFO=data.data;
                            if(data.data.length>0){
                                this.crbtParams.robot_info.fund_optimization_id=data.data[0].Id;
                                this.otherPrice=this.otherPrice+data.data[0].unit_price;
                            }
                        }else if(val=='Order Execution'){//订单执行
                            this.optionsOE=data.data;
                            if(data.data.length>0){
                                this.crbtParams.robot_info.order_execution_id=data.data[0].Id;
                                this.otherPrice=this.otherPrice+data.data[0].unit_price;
                            }
                        }
                        this.robotPrice=this.otherPrice+this.unitPrice;
                        /*this.closeLoading()*/
                    } else {
                       /* this.closeLoading()*/
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            addTag (newTag) {//多选  添加tag
                const tag = {
                    name: newTag,
                    code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
                }
                this.options.push(tag)
                this.value.push(tag)
            },
            getRobotBase(){//机器人详情回测数据
                this.getrobotInfo.robotId = this.rbtDetailParm.RobotId;
                getRobotBase(this.getrobotInfo).then(res => {
                    if(res.code == 200) {
                        this.robotBackBaseInfo = res.data;
                    }else{
                        this.$toast.center(res.msg)
                    }
                });
            },
            robotBacktestDetail() {//机器人回测累计收益图表
               /* this.openLoding();*/
                var params={}
                params.robotId=this.rbtDetailParm.RobotId;
                this.chartLoading=true;
                robotBacktestDetail(params).then(res => {
                   /* this.closeLoading();*/
                    this.chartLoading=false;
                    if(res.code == 200) {
                        this.robotInfo = res.data;
                        this.xdata=[];
                        this.ydata=[];
                        for(let i = 0; i < this.robotInfo.Day.length; i++) {//默认基准
                            this.xdata.push((this.robotInfo.Day[i].cumprod_return*100).toFixed(3));
                            this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Day[i].create_time));
                        }
                        this.drawLine();
                    }else{
                        this.drawLine();
                    }
                });
            },
            drawLine() {//机器人回测累计收益画图
                let myChart = this.$echarts.init(document.getElementById('backChart'))
                myChart.setOption({
                    tooltip: {
                        trigger: 'axis',
                        formatter: '{b}<br/>{a}:\n{c}%',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    textStyle:{
                        color:'#fff'
                    },
                    color: ['#95D6FF', '#7ea8e1', '#65cea7'],
                    grid: {
                        left: '1%',
                        right: '4%',
                        bottom: '1%',
                        top : "11%",
                        containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: this.ydata,
                        axisLine: {
                            lineStyle: {
                                color: "#ffffff",
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        scale: true,
                        splitLine: {
                            lineStyle: {
                                // 使用深浅的间隔色
                                color:  ['#777']
                            }
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#ffffff",
                            }
                        },
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value} %',
                            lineStyle: {
                                color: "#FFFEFE",
                            }
                        },
                    }],
                    series: [{
                        name: 'cumulative return',
                        data: this.xdata,
                        smooth:true,
                        type: 'line',
                        showSymbol:false,
                        itemStyle: {
                            normal: {
                                color: '#5bc0de',
                                label: {
                                    color: '#5bc0de',
                                    show: true,
                                    positiong: 'top',
                                    formatter: '{c}%',
                                },
                                lineStyle: {
                                    color: '#5bc0de'
                                }
                            }
                        },
                        areaStyle: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(113,142,189,0.8)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(113,142,189,0.1)' // 100% 处的颜色
                                }],
                            }
                        }
                    }]
                });
            },
            changeChart(val){//回测数据 切换 基准，每天，每周
                if(val=='1'){//每天数据
                    this.lineCheck = 1;
                    this.xdata=[];
                    this.ydata=[];
                    if(this.robotInfo && this.robotInfo.Day) {
                        for(var i = 0; i < this.robotInfo.Day.length; i++) {
                            this.xdata.push((this.robotInfo.Day[i].cumprod_return*100).toFixed(3));
                            this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Day[i].create_time));
                        }
                    }
                    this.drawLine();
                }else if(val == '2'){//每周数据
                    this.lineCheck = 2;
                    this.xdata=[];
                    this.ydata=[];
                    if(this.robotInfo && this.robotInfo.Week) {
                        for(var i = 0; i < this.robotInfo.Week.length; i++) {
                            this.xdata.push((this.robotInfo.Week[i].cumprod_return*100).toFixed(3));
                            this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Week[i].create_time));
                        }
                    }
                    this.drawLine();
                }
            },
            onChange1(value){//频次多选  值改变
                var list=[];
                for(var i=0;i<value.length;i++){
                    list.push(value[i]);
                }
                this.frequencyData=list;
                this.changeUnitRobotList();//频次变化，单元机器人列表跟着改变
            },
            onChange2(value){//选择单元机器人改变时
                var price=0;
                for(var i=0;i<value.length;i++){
                    price=price+value[i].unit_price
                }
                this.unitPrice=price;
                this.robotPrice=this.otherPrice+this.unitPrice;
                this.unitRobotValue=value;
            },
            customLabe2 ({ Name,pair_filter_name }) {
                return `${Name} - ${pair_filter_name}`
            },
            createRobot() {//提交单元机器人修改
                this.crbtParams.robot_info.robot_local_name=this.crbtParams.robot_info.robot_name;
                this.crbtParams.robot_info.unit_robots=this.unitRobotValue;

                let formData = new FormData();
                formData.append('user_id', this.crbtParams.user_id);
                formData.append('user_name',  this.crbtParams.user_name);
                formData.append('robot_info',  JSON.stringify(this.crbtParams.robot_info));
                formData.append('icon_url',this.crbtParams.icon_url);
                this.crbtParams.robot_id=this.rbtDetailParm.RobotId;
                formData.append('robot_id',this.crbtParams.robot_id);

                let config = {
                    headers:{'Content-Type':'multipart/form-data'}
                };
                createRobot( formData, config).then(data =>{
                    if (data.code == 200) {
                        this.$toast.center(this.$t('netnew.edsuccess'));
                        this.$router.push('/robot/factory')
                    }else{
                        this.$toast.center(this.$t('msg.msg'+data.code));

                    }
                });
            },
            robotOwner(){//购买记录
                this.robotOwners = []
                this.ifLoading = true
                this.pageInfo.robotId = this.rbtDetailParm.RobotId;
                robotOwner(this.pageInfo).then(data => {
                    this.ifLoading = false;
                    if(data.code == 200) {
                        if(data.data.data== null){
                            this.CurrentPage = 1;
                            this.perpage = 0;
                            this.robotOwners = []
                        }else{
                            this.CurrentPage = data.data.page
                            this.perpage = data.data.total_page
                            this.robotOwners = data.data.data;
                            this.robotOwners.sort(compare('buyTime'));
                            this.robotOwners.reverse();
                        }
                    } else {
                        //this.$toast.center(data.message);
                    }
                });
            },
            withDrawRecord(val) {//页码改变
                this.pageInfo.pageNum = val
                this.robotOwner()
            },
            back(){//返回
                history.back();
            },
            toBacktest(){//跳转至回测页面
                this.$router.push({
                    name:"backTest",
                    params:{
                        name:"backTest",
                        id:this.getrobotInfo.robotId,
                    }
                })
            },
            toOnShelf(val){//上架    ===》提交按钮弹窗
                this.baseToken=val.BaseCurrency;
                this.multiples=val.multiples;
                this.onshelfParams.robot_id=val.RobotId;
                this.onshelfParams.quota="";
                this.onshelfParams.unit_price="";
                this.onshelfParams.introduction="";
                this.factoryModal=2;

            },
            RobotOnshelf(){//上架功能   ===》提交按钮
                this.onshelfParams.user_id=this.crbtParams.user_id;
                this.onshelfParams.introduction_cn=this.onshelfParams.introduction;
                RobotOnshelf(this.onshelfParams).then(data => {
                    if(data.code == 200) {
                        this.getrbInfoByid(this.rbtDetailParm.RobotId);//获取个人机器人信息
                        this.$toast.center(this.$t('netnew.OnselfSuccess'));
                        $(".close").click();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            toCreateIs(val){//运行弹窗
                this.baseToken=val.BaseCurrency;
                this.multiples=val.multiples;
                this.cisParams.robot_id=val.RobotId;
                this.cisParams.amount="";
                this.factoryModal=1;
               // this.getAcount();//获取account List
            },
            initAccount(){//初始化用户账户==》获取交易所账户余额
                initAccount(this.cisParams).then(data => {
                    if(data.code == 200) {
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            getAcount(){//获取account List
                var params={};
                params.id=this.crbtParams.user_id;
                getAcount(params).then(data => {
                    if(data.code == 200) {
                        this.accountList=data.data;
                        if(this.accountList.length>0){
                            this.cisParams.account_id=this.accountList[0].Id;
                            this.initAccount();//初始化用户账户
                        }else{
                            //this.$toast.center(this.$t('msg.msg100201'));
                        }
                    } else {
                       // this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            startIs(){//运行机器人
                this.cisParams.user_id=this.crbtParams.user_id;
                if(this.cisParams.account_id==""){
                    this.$toast.center(this.$t('netnew.selectjysAccount'));
                    return false;
                }
                startIs(this.cisParams).then(data => {
                    if(data.code == 200) {
                        this.getrbInfoByid(this.rbtDetailParm.RobotId);//获取个人机器人信息
                        this.$toast.center(this.$t('netnew.createsuccess'));
                        $(".close").click();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
        }
    }
    function compare(property){
        return function(a,b){
            var value1 = new Date(a[property]).getTime();
            var value2 = new Date(b[property]).getTime();
            return value1 - value2;
        }
    }
</script>

<style scoped>
    .mail-list{
        padding-bottom: 100px;
    }
.config_sub_title{
    color:#fff;
    font-size:20px;
    line-height: 60px;
}
    .config_detailt_cont .des_item{
        height:52px;
    }

    .config_main-wrap{
        width:100%;
        padding-top:30px;;
    }
    .config_nav_cont{
        width:100%;
        border-bottom:1px solid rgba(255,255,255,.1)
    }
    .config_nav_tab_wrap{
        padding-left:224px;
    }
    .config_nav_item{
        display: inline-block;
        padding:0 16px 28px;
        color:#718EBD;
        font-size: 16px;
        margin-right:20px;
        cursor: pointer;
    }
    .item_tab_active{
        background: url("../assets/img/tab_bg.png") no-repeat center bottom;
        background-size: 100% 100%;
        color:#fff;
    }
    .config_component_wrap{
        width:700px;
        margin-left:240px;
    }
    .config_main-wrap .mdbox-title{
        font-size:14px;
        font-weight: 500;
        color:#718EBD
    }
    .config_main-wrap .mdbox-text{
        font-size:14px;
        font-weight: 500;
        color:#fff;
    }
    .line-type{
        float:left;
        display: inline-block;
        color:#718EBD;
    }
    .mdbox-title th,.mdbox-title td{
        padding-left: 20px!important;
    }
    .corder-tit th{
        color:#718EBD;
        font-size:14px;
        text-align: center;
    }
    .corder-tit th:first-child{
        text-align: left!important;
        padding-left: 20px;
    }
    .corder-text td{
        color:#fff;
        font-size:14px;
        text-align: center!important;
    }
    .corder-text td:first-child{
        text-align: left!important;
        padding-left: 20px;
    }

















input::-webkit-input-placeholder{
    color:#718EBD!important;
}
input::-moz-placeholder{   /* Mozilla Firefox 19+ */
    color:#718EBD!important;
}
input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
    color:#718EBD!important;
}
input:-ms-input-placeholder{  /* Internet Explorer 10-11 */
    color:#718EBD!important;
}
textarea::-webkit-input-placeholder {
    color:#718EBD!important;
}
textarea:-moz-placeholder {
    color:#718EBD!important;
}
textarea::-moz-placeholder {
    color:#718EBD!important;
}
textarea::-ms-input-placeholder {
    color:#718EBD!important;
}
.form-control,.form-controls{
    color:#718EBD!important;
    font-size:16px!important;
}
    .box-title{
        color:#718EBD;
        font-size:14px;
    }
    .box-title>th,.box-title>td{
        text-align: center!important;
    }
    .box-text{
        color:#fff;
        font-size:14px;
    }
    .box-text>th,.box-text>td{
        text-align: center!important;
    }
    .lg-wd{
        width:66px;
    }
    .md-wd{
        width:50px;
    }
.sm-wd{
    width:30px;
}
  .sm-pd{
      padding-left:7%;
  }
</style>
<style>
    .multiselect__tags{
        width:100%;
        max-height: 52px;
        min-height: 52px;
        overflow: auto;
        display: inline-block!important;
        height:52px!important;
        padding-top:1px!important;
    }
</style>
