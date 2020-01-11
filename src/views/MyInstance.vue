<template>
    <section class="mail-list instance-wrap">
        <div class="lg-row robot-box">
            <div class="overview_box" style="padding:30px 0 0;">
                <section class="">
                    <div v-show="!lishi"  class="overview_title" >
                       	{{$t('netnew.MyRobotSide4')}}
                       	<span style="float: right;color: #718EBD;font-size: 14px;padding-top: 8px;cursor: pointer;" @click="changeLishi"><img src="../assets/img/clock_fresh.png" @click="changeLishi" style="margin-right:10px;">{{$t('netnew.lsjqr')}}</span>
                    </div>
                    <div v-show="lishi"  class="overview_title" >
                       	{{$t('netnew.lsjqr')}}
                       	<span style="float: right;color: #718EBD;font-size: 14px;padding-top: 8px;cursor: pointer;" @click="changeLishi"><img src="../assets/img/rot_tool.png" @click="changeLishi" style="margin-right:10px;">{{$t('netnew.MyRobotSide4')}}</span>
                    </div>
					<div class="robot_manage_container" v-show="!lishi">
						<ul class="overview_sub_tit clearfix">
							<li :class="{'sub_tit_active': ifRobtManage === true}" @click="ifRobtManage = true">{{$t('netnew.buyRobot')}}</li>
							<li :class="{'sub_tit_active': ifRobtManage === false}" @click="ifRobtManage = false" v-show="userType!=1">{{$t('netnew.zjjqr')}}</li>
						</ul>

						<!--市场购买机器人列表  start-->
						<div v-show="ifRobtManage" style="padding-bottom: 60px;position:relative;min-height:740px;">
							<div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading1">{{$t('netnew.jzz')}}...</div>
							<table class="table table-bordered general-table">
								<thead>
								<tr>
									<!--<th>{{$t('netnew.InstanceId')}}</th>-->
									<th style="width:100px;padding-left:30px;"><select v-model="status1" @change="getrbtInfo" style="">
										<option value="">{{$t('netnew.AllStates')}}</option>
										<option value="1">{{$t('net.running')}}</option>
										<option value="2">{{$t('net.pause')}}</option>
										<option value="3">{{$t('net.stops')}}</option>
										<option value="4">{{$t('net.overdue')}}</option>
										<option value="99">{{$t('net.error')}}</option>
									</select></th>
									<th style="width: 8%;">{{$t('netnew.RobotName')}}</th>
									<th>{{$t('net.tradetype')}}</th>
									<th>{{$t('netnew.StandardCoin')}}</th>
									<th>{{$t('netnew.ljsyl')}}</th>
									<th style="width:80px;">{{$t('market.Averagereturn')}}</th>
									<th>{{$t('netnew.RunningDays')}}</th>
									<th style="width: 8%;">{{$t('netnew.ExpireDate')}}</th>
									<!--<th>{{$t('netnew.exchangeA')}}</th>-->
									<!--<th>{{$t('netnew.AccountAmount')}}</th>-->
									<th>{{$t('netnew.NumberofOrders')}}</th>

									<th style="width: 9%;padding-left: 0px;">{{$t('netnew.Actions')}}</th>
								</tr>
								</thead>
								<tbody>
								<tr v-for="(list,index) in robotList">
									<!--<td>{{list.SerialNo}}</td>-->
									<td style="">
										<label class="ui-draggable"
											   v-bind:class="{'label-success':list.Status==1,'label-default':list.Status==2,'label-stop':list.Status==3,'label-primary2':list.Status==4,'label-wait':list.Status==5,'label-danger':list.Status==99}">
											{{list.Status|robotStatus}}
										</label>
									</td>
									<td v-show="$i18n.locale!='zh-CN'" >
										{{list.RobotName}}<br>
										<span style="color: #718EBD;">{{list.ExchangeAccountName}}</span>
									</td>
									<td v-show="$i18n.locale=='zh-CN'">
										{{list.RobotLocalName}}<br>
										<span style="color: #718EBD;">{{list.ExchangeAccountName}}</span>
									</td>
									<td>{{list.TradeType|tradeType}}</td>
									<td>{{list.StandardCoin}}</td>
									<td>
										<img src="../assets/img/upflag@2x.png" v-show="list.CumprodReturn>0">
										<img src="../assets/img/downflag@2x.png" v-show="list.CumprodReturn<0">
										{{list.CumprodReturn|fix2}}%</td>
									<td>{{list.annual_profit|fix2}}%</td>
									<td>{{list.RunningDays}}</td>
									<td>{{list.ExpireDate|timePoint}}</td>
									<td>{{list.OrderCount}}</td>
									<td style="color: #718EBD !important;padding-left: 0px;">
										<div style="text-align: center;position: relative;">
											<div class="action_item" @click="goDetail(list)">{{$t('net.detail')}}</div>
											<div class="action_item" @click="instancePause(list.InstanceId)" v-show="list.Status==1">{{$t('net.pause')}}</div>
											<div class="action_item" @click="instanceRun(list.InstanceId)" v-show="list.Status==2||list.Status==99">{{$t('net.run')}}</div>
											<div class="action_item" href="#instanceModal" data-toggle="modal" v-show="list.ReStartFlag==false&&list.Status!=3" @click="toRenew(list)">{{$t('netnew.xufei')}}</div>
											<!--<div class="action_item" @click="freshInstance(list.InstanceId)" v-show="list.Status==4||list.Status==1">{{$t('net.refresh')}}</div>-->
											<div class="action_item" href="#stopRbt" data-toggle="modal" @click="toStop(list)" v-show="list.Status!=3">{{$t('net.stops')}}</div>
											<div class="action_item" @click="initInstance(list.InstanceId)" v-show="list.Status==3&&list.ReStartFlag==false">{{$t('netnew.restart')}}</div>
											<div class="action_item" @click="deleteInstance(list.InstanceId)" v-show="list.Status==3">{{$t('netnew.Delete')}}</div>
											<img src="../assets/img/warning.png" style="position: absolute;right: -8px; top: 2px;cursor: pointer;" v-show="list.Status==5" @click="waitwm=!waitwm;waitIndex=index">
											<div class="warning-bg" v-show="waitwm&&list.Status==5&&waitIndex==index">
												{{$t('netnew.jqrslygq')}}
											</div>
										</div>
									</td>
								</tr>

								</tbody>
							</table>
							<div class="alert alert-warning fade in" v-show="robotList.length==0 && !ifLoading1">
								<span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
								<span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
								<span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
							</div>
							<!--市场购买机器人分页-->
							<div class="pigna lg-width" v-if="robotList.length>0" style="width: 100%;text-align: center;position:absolute;bottom:4px;left:0;right:0">
								<paginate v-model="CurrentPage1" :page-count="perpage1" :click-handler="withDrawRecord1" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
								</paginate>
							</div>
						</div>
						<!--自建机器人  start-->
						<div v-show="!ifRobtManage && userType!=1" style="padding-bottom: 60px;position:relative;min-height: 740px;">
							<!--<h2 v-show="$i18n.locale=='zh-CN'" class="overview_title" >
								自建机器人
							</h2>
							<h2 v-show="$i18n.locale=='en-US'" class="overview_title" >
								Self-built robot
							</h2>
							<h2 v-show="$i18n.locale=='ko'" class="overview_title" >
								자건 로봇
							</h2>-->
							<div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading2">{{$t('netnew.jzz')}}...</div>

							<table class="table table-bordered general-table">
								<thead>
								<tr>
									<th style="width:100px;padding-left:30px;"><select v-model="status2" @change="getSelfBuiltRobotList">
										<option value="">{{$t('netnew.AllStates')}}</option>
										<option value="1"> {{$t('net.running')}}</option>
										<option value="2">{{$t('net.pause')}}</option>
										<option value="3">{{$t('net.stops')}}</option>
										<option value="4">{{$t('net.overdue')}}</option>
										<option value="99">{{$t('net.error')}}</option>
									</select></th>
									<th style="width: 8%;">{{$t('netnew.RobotName')}}</th>
									<th>{{$t('net.tradetype')}}</th>
									<th>{{$t('netnew.StandardCoin')}}</th>
									<th>{{$t('netnew.ljsyl')}}</th>
									<th style="width:80px;">{{$t('market.Averagereturn')}}</th>
									<th>{{$t('netnew.RunningDays')}}</th>
									<th style="width: 8%;">{{$t('netnew.ExpireDate')}}</th>
									<th>{{$t('netnew.NumberofOrders')}}</th>
									<th style="width: 9%;padding-left: 0px;" v-show="userType!=1">{{$t('netnew.Actions')}}</th>
								</tr>
								</thead>
								<tbody>
								<tr v-for="(list,index) in ownRobotList">
									<td>
										<label class="ui-draggable"
											   v-bind:class="{'label-success':list.Status==1,'label-default':list.Status==2,'label-stop':list.Status==3,'label-primary2':list.Status==4,'label-wait':list.Status==5,'label-danger':list.Status==99}">
											{{list.Status|robotStatus}}
										</label>
									</td>
									<td v-show="$i18n.locale!='zh-CN'" >{{list.RobotName}}</td>
									<td v-show="$i18n.locale=='zh-CN'">{{list.RobotLocalName}}</td>
									<td>{{list.TradeType|tradeType}}</td>
									<td>{{list.StandardCoin}}</td>
									<td>{{list.CumprodReturn|fix2}}%</td>
									<td>{{list.annual_profit|fix2}}%</td>
									<td>{{list.RunningDays}}</td>
									<td>{{list.ExpireDate|timePoint}}</td>
									<td>{{list.OrderCount}}</td>
									<td v-show="userType!=1" style="padding-left: 0px;">
										<div style="text-align: center;position: relative;color: #718EBD;">
											<div class="action_item" @click="instancePause(list.InstanceId)" v-show="list.Status==1">{{$t('net.pause')}}</div>
											<div class="action_item" @click="instanceRun(list.InstanceId)" v-show="list.Status==2||list.Status==99">{{$t('net.run')}}</div>
											<div class="action_item" href="#instanceModal" data-toggle="modal" @click="userRenew(list)" v-show="list.Status==4||list.Status==1">{{$t('netnew.xufei')}}</div>
											<div class="action_item" href="#stopRbt" data-toggle="modal" @click="toStop(list)" v-show="list.Status!=3">{{$t('net.stops')}}</div>
											<div class="action_item" @click="initInstance(list.InstanceId)" v-show="list.Status==3&&list.ReStartFlag==false">{{$t('netnew.restart')}}</div>
											<div class="action_item" @click="deleteInstance(list.InstanceId)" v-show="list.Status==3">{{$t('netnew.Delete')}}</div>
											<div class="action_item" href="#instanceModal" data-toggle="modal" @click="useraddlimit(list)"  v-show="list.Status==1||list.Status==2">{{$t('netnew.zengchi')}}</div>
											<div class="action_item" @click="goDetail(list)">{{$t('net.detail')}}</div>
											<img src="../assets/img/warning.png" style="position: absolute;right: -8px; top: 2px;cursor: pointer;" v-show="list.Status==5" @click="waitwr=!waitwr;waitIndex=index">
											<div class="warning-bg" v-show="waitwr&&list.Status==5&&waitIndex==index">
												{{$t('netnew.jqrslygq')}}
											</div>
										</div>
									</td>
								</tr>

								</tbody>
							</table>
							<div class="alert alert-warning fade in" v-show="ownRobotList.length==0 && !ifLoading2">
								<span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
								<span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
								<span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
							</div>

							<div class="col-lg-10 bottom_box">
								<!--<input type="checkbox" @click="selectAll"><label class="select_all">{{$t('netnew.selectall')}}</label>-->
								<!--<button type="submit" class="btn btn-primary run_all_btn">Run</button>-->
							</div>
							<!--自建机器人分页-->
							<div class="pigna lg-width" v-if="ownRobotList.length>0" style="width: 100%;text-align: center;position:absolute;bottom:4px;left:0;right:0">
								<paginate v-model="CurrentPage2" :page-count="perpage2" :click-handler="withDrawRecord2" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
								</paginate>
							</div>
						</div>
					</div>
					<!--历史机器人列表  start-->
                    <div v-show="lishi" style="padding-bottom: 60px;position:relative;min-height:740px;">
						<div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading3">{{$t('netnew.jzz')}}...</div>
                        <table class="table table-bordered general-table">
                            <thead>
                            <tr>
                                <!--<th>{{$t('netnew.InstanceId')}}</th>-->
                                <th style="width:80px;padding-left:10px;">{{$t('netnew.Status')}}</th>
                                <th style="width: 8%;">{{$t('netnew.RobotName')}}</th>
                                <th>{{$t('net.tradetype')}}</th>
                                <th>{{$t('netnew.StandardCoin')}}</th>
                                <th>{{$t('netnew.ljsyl')}}</th>
                                <th style="width:80px;">{{$t('market.Averagereturn')}}</th>
                                <th>{{$t('netnew.RunningDays')}}</th>
                                <th style="width: 8%;">{{$t('netnew.ExpireDate')}}</th>
                                <!--<th>{{$t('netnew.exchangeA')}}</th>-->
                                <!--<th>{{$t('netnew.AccountAmount')}}</th>-->
                                <th>{{$t('netnew.NumberofOrders')}}</th>

                                <th style="width: 8%;">{{$t('netnew.Actions')}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(list,index) in historyList">
                                <!--<td>{{list.SerialNo}}</td>-->
                                <td>
                                    <label class="external-event label ui-draggable label-default">
                                        {{$t('netnew.history')}}
                                    </label>
                                </td>
                                <td v-show="$i18n.locale!='zh-CN'" >{{list.RobotName}}</td>
                                <td v-show="$i18n.locale=='zh-CN'">{{list.RobotLocalName}}</td>
                                <td>{{list.TradeType|tradeType}}</td>
                                <td>{{list.StandardCoin}}</td>
                                <td>
                                	<img src="../assets/img/upflag@2x.png" v-show="list.CumprodReturn>0">
	        						<img src="../assets/img/downflag@2x.png" v-show="list.CumprodReturn<0">
                                	{{list.CumprodReturn|fix2}}%</td>
                                <td>{{list.annual_profit|fix2}}%</td>
                                <td>{{list.RunningDays}}</td>
                                <td>

                                	{{list.ExpireDate|timePoint}}</td>
                                <!--<td>{{list.ExchangeAccountName}}</td>-->
                                <!--<td>{{list.Amount|tofix4}}</td>-->

                                <td>{{list.OrderCount}}</td>

                                <td>
                                	<div class="action_item" @click="instancePause(list.InstanceId)" v-show="list.Status==1">{{$t('net.pause')}}</div>
                                	<div class="action_item" @click="instanceRun(list.InstanceId)" v-show="list.Status==2||list.Status==99">{{$t('net.run')}}</div>
                                	<!--<div class="action_item" @click="freshInstance(list.InstanceId)" v-show="list.Status==4||list.Status==1">{{$t('net.refresh')}}</div>-->
                                	<div class="action_item" @click="stopInstance(list.InstanceId)" v-show="list.Status!=3">{{$t('net.stops')}}</div>
                                	<div class="action_item" @click="initInstance(list.InstanceId)" v-show="list.Status==3&&list.ReStartFlag==false">{{$t('netnew.restart')}}</div>
                                    <div class="action_item" @click="goDetail(list)">{{$t('net.detail')}}</div>
                                    <div class="action_item" href="#instanceModal" data-toggle="modal" v-show="list.ReStartFlag==false" @click="toRenew(list)">{{$t('netnew.xufei')}}</div>
                                    <!--<div class="action_item" href="#instanceModal" data-toggle="modal" @click="addlimit(list)"  v-show="list.Status==1||list.Status==2">{{$t('netnew.zengchi')}}</div>-->
                                    <div class="action_item" @click="deleteInstance(list.InstanceId)" v-show="list.Status==3">{{$t('netnew.Delete')}}</div>
                                    <!--<div class="action_item" @click="changeItSubscribe(list.InstanceId)" v-show="list.AutoRenew">{{$t('netnew.Unsubscribe')}}</div>
                                    <div class="action_item" @click="changeItSubscribe(list.InstanceId)" v-show="!list.AutoRenew">{{$t('netnew.Resubscribe')}}</div>-->
                                </td>
                            </tr>

                            </tbody>
                        </table>
                        <div class="alert alert-warning fade in" v-show="historyList.length==0 && !ifLoading3">
	                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
	                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
	                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
	                    </div>
						<!--历史机器人分页-->
						<div class="pigna lg-width" v-if="historyList.length>0" style="width: 100%;text-align: center;position:absolute;bottom:4px;left:0;right:0">
							<paginate v-model="CurrentPage3" :page-count="perpage3" :click-handler="withDrawRecord3" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
							</paginate>
						</div>
                    </div>
                </section>

            </div>
        </div>
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog"  id="stopRbt" class="modal fade" style="padding-right: 0px !important;" >
			<div class="modal-dialog" style="width: 402px !important;">
				<button id="close" type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>
				<div v-show="stopStep==1" class="modal-content pair-box" style="width: 402px !important;height: 283px;position: relative;text-align: center;">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.tzjqrsl')}}</span>
					</div>
					<div class="lg-width" style="width: 100%;text-align: center;color: #fff;margin-top: 65px;">
						{{$t('netnew.tzjqrslh')}}
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;">
						<div class="lg-width" style="width: 50%;line-height: 60px;color: #718EBD;cursor: pointer;font-size: 16px;" data-dismiss="modal" aria-hidden="true">
							{{$t('netnew.Cancle')}}
						</div>
						<div class="lg-width" style="width: 50%;">
							<button class="card-btm"  style="position: relative;float: right;width: 200px;" @click="stopInstance" >
							{{$t('market.confirm')}}
							</button>
						</div>

					</div>
				</div>
				<div v-show="stopStep==2" class="modal-content pair-box" style="width: 402px !important;height: 346px;position: relative;text-align: center;">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.tzjqrsl')}}</span>
					</div>
					<div class="lg-width" style="width: 100%;text-align: center;color: #718EBD;margin-top: 20px;padding: 0 25px;">
						{{$t('netnew.njyjxtz')}}<br>{{$t('netnew.xtjzdgsl')}}
					</div>
					<div class="lg-width" style="width: 100%;text-align: center;color: #fff;margin-top: 20px;">
						{{$t('netnew.sfxybnaz')}}？
					</div>
					<div class="lg-width" style="width: 100%;text-align: center;color: #718EBD;margin-top: 39px;">
						<input id="closeT" class="boxs" style="margin-top: -2px;" type="checkBox" @click="closeTrue">
						<span style="margin-left: 5px;">{{$t('netnew.xyqzpc')}}</span>
						<input id="closeF" class="boxs" style="margin-top: -2px;margin-left: 49px;" type="checkBox" @click="closeFalse">
						<span style="margin-left: 5px;">{{$t('netnew.bxyqzpc')}}</span>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;">
						<div class="lg-width" style="width: 50%;line-height: 60px;color: #718EBD;cursor: pointer;font-size: 16px;" data-dismiss="modal" aria-hidden="true">
							{{$t('netnew.Cancle')}}
						</div>
						<div class="lg-width" style="width: 50%;">
							<button class="btn rbdbtn btn-md" type="button" style="position: relative;float: right;width: 200px;height: 60px;margin-right: 0px;font-size: 16px;"  @click="nextStep" :disabled="closeOrder==-1">
								{{$t('netnew.nextstep')}}
								<img class="light-btn"  style="position: absolute;top: 3px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
							</button>
							<!--<button class="card-btm"  style="position: relative;float: right;width: 200px;" @click="stopInstance" :disabled="closeOrder==-1" >
							{{$t('netnew.nextstep')}}
							</button>-->
						</div>

					</div>
				</div>
				<div v-show="stopStep==3" class="modal-content pair-box" style="width: 402px !important;height: 283px;position: relative;text-align: center;">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.tzjqrsl')}}</span>
					</div>
					<div class="lg-width" style="width: 100%;text-align: center;color: #718EBD;margin-top: 20px;padding: 0 25px;" v-show="closeOrder==1">
						{{$t('netnew.nyxzxyqz')}}
					</div>
					<div class="lg-width" style="width: 100%;text-align: center;color: #718EBD;margin-top: 20px;padding: 0 25px;" v-show="closeOrder==0">
						{{$t('netnew.nyxzbxy')}}
					</div>
					<div class="lg-width" style="width: 100%;text-align: center;color: #fff;margin-top: 20px;">
						{{$t('netnew.zzwch')}}
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;">
						<div class="lg-width" style="width: 50%;line-height: 60px;color: #718EBD;cursor: pointer;font-size: 16px;" @click="lastStep">
							{{$t('netnew.laststep')}}
						</div>
						<div class="lg-width" style="width: 50%;">
							<button class="btn rbdbtn btn-md" type="button" style="position: relative;float: right;width: 200px;height: 60px;margin-right: 0px;font-size: 16px;"  @click="stopInstance" >
								{{$t('market.confirm')}}
								<img class="light-btn"  style="position: absolute;top: 3px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
							</button>
							<!--<button class="card-btm"  style="position: relative;float: right;width: 200px;" @click="stopInstance" :disabled="closeOrder==-1" >
							{{$t('netnew.nextstep')}}
							</button>-->
						</div>

					</div>
				</div>
			</div>

		</div>
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="instanceModal" class="modal fade" style="z-index: 5001;">
			<button id="close" type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>
			<div class="modal-dialog"  v-show="instanceModal==1"><!--续费-->
				<div class="modal-content login-box">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.xufei')}}</span>
					</div>
					<div style="padding-left: 45px;padding-right: 45px;">
						<div style="display: table;width: 100%;border-bottom:1px solid #718EBD70;">
							<div class="lg-width" style="width: 20%;margin-top: 30px;text-align: left;margin-bottom: 15px;">
								<span style="font-size:16px;color: #718EBD;">{{$t('market.theNameMarket')}}</span>
							</div>
							<div class="lg-width" style="width: 75%;margin-top: 30px;text-align: left;margin-left: 5%;margin-bottom: 15px;">
								<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale!='zh-CN'" >{{renewParams.RobotName}}</span>
								<span style="font-size: 16px;color: #FFFFFF;" v-show="$i18n.locale=='zh-CN'">{{renewParams.RobotLocalName}}</span>

							</div>
						</div>
						<div style="display: table;width: 100%;">
							<div class="lg-width" style="width: 24%;margin-top: 20px;text-align: left;margin-bottom: 15px;">
								<span style="font-size:16px;color: #718EBD;"> {{$t('market.Numberdays')}} </span>
							</div>
							<div class="lg-width" style="width: 74%;margin-top: 20px;text-align: left;margin-left: 2%;">
								<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aWeek')}}</a>
								<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.aMonth')}}</a>
								<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
								<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==4}" @click="choseTime(4)">{{$t('netnew.bxf')}}</a>
							</div>
						</div>
						<div style="display: table;width: 100%;border-bottom:1px solid #718EBD70;">
							<div class="lg-width" style="width: 100%;margin-top: 20px;text-align: left;margin-bottom: 15px;">
								<span v-show="$i18n.locale=='zh-CN'" style="font-size:16px;color: #718EBD;">增加份额</span>
								<span v-show="$i18n.locale=='en-US'"  style="font-size:16px;color: #718EBD;">Increase share</span>
								<span v-show="$i18n.locale=='ko'"  style="font-size:16px;color: #718EBD;">배당을 증식하다</span>
							</div>
							<div class="lg-width" style="width: 100%;text-align: left;">
								<!--<input type="number" min="1" id="syfe"  style="text-align:center;width: 100px;margin-right:5px;height: 35px;margin-top: -7px;border:1px solid #dcdcdc"  />-->
								<input type="number"  min="0" :placeholder="avLimit" class="form-control change-limit" v-model="addLimit" @change="getPrice"  style="border-bottom:none !important;padding: 0;text-align: left;width: 180px !important;"   />
								<span style="font-size: 16px;color: #718EBD;">×{{addlimitParams.Multiple}}{{addlimitParams.StandardCoin}}= {{addlimitParams.Multiple*addLimit}}{{addlimitParams.StandardCoin}}</span>
							</div>
						</div>
						<div class="lg-width unchecked-quota" style="margin-left: 10px;margin-bottom: 8px;float: right;">{{$t('netnew.zdkyfs')}}:{{maxLimit}}</div>
						<div class="lg-width unchecked-quota" style="float: right;">{{$t('netnew.dqyyfs')}}:{{auLimit}}</div>
						<!--<div class="lg-width" v-bind:class="{'checked-quota':quotaFlag==1,'unchecked-quota':quotaFlag!=1}" style="width: 25%;" @click="choseQuota(1)">1/4</div>
						<div class="lg-width" v-bind:class="{'checked-quota':quotaFlag==2,'unchecked-quota':quotaFlag!=2}" style="width: 25%;" @click="choseQuota(2)">1/3</div>
						<div class="lg-width" v-bind:class="{'checked-quota':quotaFlag==3,'unchecked-quota':quotaFlag!=3}" style="width: 25%;" @click="choseQuota(3)">1/2</div>
						<div class="lg-width" v-bind:class="{'checked-quota':quotaFlag==4,'unchecked-quota':quotaFlag!=4}" style="width: 25%;" @click="choseQuota(4)">全部</div>-->
						<div style="display: table;width: 100%;border-bottom:1px solid #718EBD70;">
							<div class="lg-width" style="width: 20%;margin-top: 10px;text-align: left;margin-bottom: 15px;">
								<span style="font-size:16px;color: #718EBD;">{{$t('market.balance')}}</span>
							</div>
							<div class="lg-width" style="width: 75%;margin-top: 10px;text-align: left;margin-left: 5%;">
								<div>
									<span style="font-size: 16px;color: #FFFFFF;margin-right: 8px;">{{buyInfo.net_value}}</span>
									<span style="font-size:16px;color:  #718EBD;">NET</span>
								</div>
							</div>
						</div>
						<div class="lg-width" style="width:67%;margin-top: 20px;">
							<input id="auto" class="boxs" style="margin-top: -2px;" type="checkBox" @click="changeAuto" checked="checked">
							<label style="margin-left: 6px;color:#718EBD;" @click="changeAuto2">{{$t('modalbox.renewal')}} </label>
						</div>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;border-top:1px solid #718EBD40 ;">
						<span style="color: #718EBD;font-size: 16px;margin-left: 55px;">{{$t('netnew.xiaofei')}}:</span>
						<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;">{{totalPrice}}</span>
						<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
						<!--<span style="color: #718EBD;margin-left: 10px;font-size: 16px;">{{renewParams.UnitPrice}}NET份/天</span>-->
						<button class="card-btm"  :class="{'forbidStatus':ifSubmit}" style="position: relative;float: right;" @click="startRenew">
							{{$t('market.confirm')}}
						</button>
					</div>

				</div>
			</div>
			<div class="modal-dialog" v-show="instanceModal==2"><!--机器人实例续费-->
				<div class="modal-content login-box" style="height: 270px;">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.jqrslxf')}}</span>
					</div>
					<div style="padding-left: 57px;padding-right: 57px;">
						<div style="clear:both;">
							<div class="lg-width" style="width: 50%;margin-top: 30px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.sldqrq')}}</span>
							</div>
							<div class="lg-width" style="width: 50%;margin-top: 30px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{usrRenewParams.ExpireDate|time}}</span>
							</div>
						</div>
						<div style="clear:both;">
							<div class="lg-width" style="width: 50%;margin-top: 20px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.dqjqrdq')}}</span>
							</div>
							<div class="lg-width" style="width: 50%;margin-top: 20px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{usrRenewParams.ExpireDate|time}}</span>
							</div>
						</div>
						<div class="lg-width" style="width: 100%;margin-top: 20px;text-align: left;">
							<!--<span style="font-size:16px;color: #718EBD;">请先去</span>-->
							<span style="font-size:16px;color: #fff;cursor: pointer;text-decoration: underline;" @click="toFarcty">{{$t('netnew.qxqzxf')}}</span>
							<!--<span style="font-size:16px;color: #718EBD;">后，再续费实例</span>-->
						</div>
					</div>
				</div>
			</div>
			<div class="modal-dialog" v-show="instanceModal==3">
				<div class="modal-content login-box" style="height: 580px;">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.jqrslxf')}}</span>
					</div>
					<div style="padding-left: 57px;padding-right: 57px;">
						<div class="lg-width" style="width: 50%;margin-top: 30px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.sldqrq')}}</span>
						</div>
						<div class="lg-width" style="width: 50%;margin-top: 30px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{usrRenewParams.ExpireDate|time}}</span>
						</div>
						<div class="lg-width" style="width: 50%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.dqjqrdq')}}</span>
						</div>
						<div class="lg-width" style="width: 50%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{usrRenewParams.robot_expire_date|time}}</span>
						</div>
						<div class="lg-width" style="width: 50%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.slkxfsj')}}</span>
						</div>
						<div class="lg-width" style="width: 50%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{canRenewday}}{{$t('market.day')}}</span>
						</div>
						<div class="lg-width" style="width: 100%;margin-top:15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.qsrxyxf')}}</span>
							<input type="number" class="num-change" min="1"  v-bind:max="canRenewday" @change="changeDays" v-model="userRenewday"  />
							<span style="font-size:16px;color: #718EBD;">{{$t('market.day')}}</span>
						</div>
						<div class="lg-width" style="width: 100%;margin-top:15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.jqryxfy')}}</span>
							<span style="font-size:16px;color: #718EBD;margin-left: 20px;">{{usrRenewParams.limit_unit_price}} NET/{{$t('netnew.Share')}}/{{$t('market.day')}}</span>
						</div>
						<div class="lg-width" style="width: 100%;margin-top:15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.jqrdqfe')}}</span>
							<span style="font-size:16px;color: #718EBD;margin-left: 20px;">{{usrRenewParams.Limit/usrRenewParams.Multiple}} {{$t('netnew.Share')}}</span>
						</div>
						<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.xfhdqrq')}}</span>
							<span style="font-size:16px;color: #718EBD;margin-left: 20px;">{{renewAfterday|time}}</span>
						</div>
						<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.xfze')}}</span>
							<span style="font-size:16px;color: #718EBD;margin-left: 20px;">{{renewTotal}} NET</span>
						</div>
						<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.dqye')}}</span>
							<span style="font-size:16px;color: #718EBD;margin-left: 20px;">{{netValue}} NET</span>
							<span style="font-size:16px;color: #718EBD;float: right;cursor: pointer;text-decoration: underline;">{{$t('netnew.chzhi')}}</span>
						</div>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 15px;text-align: center;">
						<button class="btn rbdbtn btn-md" type="button" style="position: relative;width: 170px;height: 55px;" @click="userIR(usrRenewParams.InstanceId)" :disabled="userRenewday<=0||userRenewday>canRenewday">
							{{$t('market.confirm')}}
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
						</button>
					</div>

				</div>
			</div>
			<div class="modal-dialog" v-show="instanceModal==4"><!--机器人实例增持-->
				<div class="modal-content login-box" style="height:556px;">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.jqrslzc')}}</span>
					</div>
					<div style="padding-left: 40px;padding-right: 40px;">
						<div class="lg-width" style="width: 40%;margin-top: 30px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.ExpireDate')}}</span>
						</div>
						<div class="lg-width" style="width: 60%;margin-top: 30px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{usraddParams.ExpireDate|time}}</span>
						</div>
						<div class="lg-width" style="width: 40%;margin-top:15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.csczfe')}}</span>
						</div>
						<div class="lg-width" style="width: 60%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #fff;display: inline-block;width: 90px;text-align: center;padding-right:10px ;">{{usraddParams.Limit/usraddParams.Multiple}}</span>
							<span style="font-size:16px;color: #718EBD;">x{{usraddParams.Multiple}}{{usraddParams.StandardCoin}}</span>
						</div>
						<div class="lg-width" style="width: 100%;margin-top:15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.jqrzfew')}}5{{$t('netnew.Share')}}，{{$t('netnew.dqkzj')}}{{usraddParams.available}}{{$t('netnew.Share')}}</span>
						</div>
						<div class="lg-width" style="width: 40%;margin-top:15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.zcczfe')}}</span>

						</div>
						<div class="lg-width" style="width: 60%;margin-top:15px;text-align: left;">
							<input type="number" class="num-change" min="0"   v-bind:max="usraddParams.available" @change="changeQuota" v-model="addQuota"  />
							<span style="font-size:16px;color: #718EBD;">x{{usraddParams.Multiple}}{{usraddParams.StandardCoin}}</span>
						</div>

						<div class="lg-width" style="width: 100%;margin-top:15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.syts')}}{{usraddParams.remain_days}}{{$t('market.day')}}</span>
						</div>
						<div class="lg-width" style="width: 100%;margin-top:15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.zcfy')}}={{usraddParams.limit_unit_price}} NET/{{$t('netnew.Share')}}/{{$t('market.day')}}x{{addQuota}}{{$t('netnew.Share')}}x{{usraddParams.remain_days}}{{$t('market.day')}}</span>
						</div>

						<div style="clear:both;">
							<div class="lg-width" style="width: 40%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.xfze')}}</span>
							</div>
							<div class="lg-width" style="width: 60%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{addTotal}} NET</span>
							</div>
						</div>
						<div style="clear:both;">
							<div class="lg-width" style="width: 40%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.dqye')}}</span>
							</div>
							<div class="lg-width" style="width: 60%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{netValue}} NET</span>
								<span style="font-size:16px;color: #718EBD;float: right;cursor: pointer;text-decoration: underline;">{{$t('netnew.chzhi')}}</span>
							</div>
						</div>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 15px;text-align: center;">
						<button class="btn rbdbtn btn-md" type="button" style="position: relative;width: 170px;height: 55px;" @click="userAddLimit(usraddParams.InstanceId)" :disabled="addQuota<=0||addQuota>usraddParams.available">
							{{$t('market.confirm')}}
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
						</button>
					</div>

				</div>
			</div>
		</div>
    </section>
</template>

<script>
    import {getRobotInfo,toRadl,getrenewDetail, getUserInfo,instancePause,getHistoryInfo,changeItSubscribe,toAddUserLimit,userAddLimit,userIR,instanceRun,freshInstance,stopInstance,initInstance,getBuyInfo,startRenew,getInstanceRD,toAddLimit,deleteInstance,selfBuiltRobotList,marketRobotList,getHistoryList} from '../api/api';

    export default {
        data() {
            return {
				ifSubmit:true,//续费按钮是否可点击
            	ifLoading1:true,
				ifLoading2:true,
				ifLoading3:true,
				CurrentPage1: 1,//当前页码
				CurrentPage2: 1,
				CurrentPage3: 1,
				perpage1: 1,//总页数
				perpage2: 1,
				perpage3: 1,
                selectArr: [],
                robotList: [],
                ownRobotList:[],
                addLimitPrice:0,
                waitwr:false,
                waitwm:false,
                waitIndex:-1,
                addLimit:0,
                addUserLimit:0,
                rbtInfoParm: {size:10,page:1},
                first: 0,
                renewList:[],
                instanceModal:1,
                status1:"",
                status2:"",
                datePay:0,
                addQuota:0,
                closeOrder:-1,
                quotaPay:0,
                renewParams:{},
                addlimitParams:{},
                adduserlimitParams:{},
                pairSelected:4,//不续费
                usrRenewParams:{},
                usraddParams:{},
                buyInfo:{},
                userType:1,
                inrequest:false,
                quotaFlag:1,
                stopStep:1,
                auto_renew:true,
                stopParams:{},
                totalPrice:0,
                userRenewday:0,
                renewAfterday:"",
                renewTotal:0,
                netValue:0,
                auLimit:0,
                addTotal:0,
                canRenewday:0,
                avLimit:"",
                maxLimit:0,//最大可用份数
                lishi:false,
                historyList:[],
				ifRobtManage:true,
				selfBuildParams: {size:10,page:1},
				historyParams: {size:10,page:1}
            }
        },
        mounted() {
            this.getuseInfo();
        },
        methods: {
            getuseInfo() {
                getUserInfo(this.empty).then(data => {
                    if (data.code == 200) {
                        this.rbtInfoParm.user_id = data.data.userId;
                        this.selfBuildParams.user_id = data.data.userId;
                        this.netValue=data.data.netValue;
                        this.userType=data.data.userType;
                        this.getrbtInfo();//市场购买机器人
                        this.getHistoryInfo();
						this.getSelfBuiltRobotList()//自建机器人列表
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
			withDrawRecord1(val) {
				this.rbtInfoParm.page = val
				this.getrbtInfo()
			},
			withDrawRecord2(val) {
				this.selfBuildParams.page = val
				this.getSelfBuiltRobotList();
			},
			withDrawRecord3(val) {
				this.historyParams.page = val
				this.getHistoryInfo()
			},
            changeLishi(){
            	this.lishi=!this.lishi
            },
            nextStep(){
            	this.stopStep=3
            },
            lastStep(){
            	this.stopStep=2
            },
            getHistoryInfo(){//历史机器人列表
				this.historyList = []
				this.ifLoading3 = true
				getHistoryList(this.historyParams).then(res => {
            	 	if(res.code==200){
						this.ifLoading3 = false
            	 		if( res.data.data == null ) {
            	 			this.historyList = []
							this.CurrentPage3 = 1
							this.perpage3 = 0
						}else{
							this.historyList=[];
							this.CurrentPage3 = res.data.page
							this.perpage3 = res.data.total_page
							this.historyList=res.data.data;
							for(var i=0;i<this.historyList.length;i++){
								this.historyList[i].isHistory=true;
							}
						}
            	 	}else{
						this.ifLoading3 = false
						this.$toast.center(this.$t('msg.msg'+res.code));
            	 	}
            	 });
            },

            getrbtInfo() {//获取市场购买机器人
				this.robotList=[];
				this.ifLoading1 = true
				this.rbtInfoParm.status = this.status1;
				marketRobotList(this.rbtInfoParm).then(res => {
					if (res.code == 200) {
						this.ifLoading1 = false
						if(res.data.data==null){
							this.robotList=[];

						}else{
							this.robotList=[];
							this.CurrentPage1 = res.data.page
							this.perpage1 = res.data.total_page
							this.robotList = res.data.data
						}
					} else {
						this.ifLoading1 = false
						this.$toast.center(this.$t('msg.msg'+res.code));
					}
				});
            },
			getSelfBuiltRobotList() {//获取自建机器人列表
				this.ownRobotList=[];
				this.ifLoading2 = true
				this.selfBuildParams.status = this.status2;
				selfBuiltRobotList(this.selfBuildParams).then(res => {
					if (res.code == 200) {
						this.ifLoading2 = false
						if(res.data.data==null){
							this.ownRobotList=[];
							this.CurrentPage2 = 1
							this.perpage2 = 0
						}else{
							this.ownRobotList=[];
							this.CurrentPage2 = res.data.page
							this.perpage2 = res.data.total_page
							this.ownRobotList = res.data.data
						}
					} else {
						this.ifLoading2 = false
						this.$toast.center(this.$t('msg.msg'+res.code));
					}
				});
			},
            getBuyInfo(val){////获取购买信息
            	var params={};
            	params.robot_id=val.RobotId;
            	params.user_id=this.rbtInfoParm.user_id;
            	getBuyInfo(params).then(data => {
                    if (data.code = 200) {
                    	this.buyInfo=data.data;
                    	this.choseTime(4);
                    }else{
                    	this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            getPrice(val){//增持份数变化，计算金额变化（增加份额补齐之前的费用）
				if(this.addLimit == 0 && this.pairSelected == '4'){
					this.ifSubmit = true
				}else{
					this.ifSubmit = false
				}
				var unitPrice1 = 0;
				var unitPrice2 = 0;
				var unitPrice3 = 0;
				var allFe=parseInt(this.auLimit)+parseInt(this.addLimit);//已用份数+增持份额
				if(this.renewParams.robot_grade == 'OTO'){//一级机器人
					unitPrice1 = 0.1
					unitPrice2 = 0.15
					unitPrice3 = 0.23
				}else if(this.renewParams.robot_grade == 'OTM') {//二级机器人
					unitPrice1 = 0.17
					unitPrice2 = 0.27
					unitPrice3 = 0.41
				}else if(this.renewParams.robot_grade == 'MTM') {//三级机器人
					unitPrice1 = 0.25
					unitPrice2 = 0.45
					unitPrice3 = 0.65
				}
				if(allFe<=5){
					this.quotaPay=parseInt(this.addLimit)*unitPrice1*parseInt(this.renewList.lost_day);
				}else if(allFe>5 && allFe<=10){
					if(this.auLimit<=5){
						this.quotaPay=((5 - parseInt(this.auLimit))*unitPrice1+(allFe - 5)*unitPrice2)*parseInt(this.renewList.lost_day)
					}else if(this.auLimit>5){
						this.quotaPay=parseInt(this.addLimit)*unitPrice2*parseInt(this.renewList.lost_day)
					};
				}else if(allFe>10){
					if(this.auLimit<=5){
						this.quotaPay=((5 - parseInt(this.auLimit))*unitPrice1+5*unitPrice2+(allFe - 10)*unitPrice3)*parseInt(this.renewList.lost_day)
					}else if(this.auLimit>5 && this.auLimit<=10){
						this.quotaPay=((10 - parseInt(this.addLimit))*unitPrice2+(allFe - 10)*unitPrice3)*parseInt(this.renewList.lost_day)
					}else if(this.auLimit>10){
						this.quotaPay=parseInt(this.addLimit)*unitPrice3*parseInt(this.renewList.lost_day)
					};
				}
				if(this.pairSelected == '1'){//7天
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*7
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*7
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*7
					}
				}else if(this.pairSelected == '2') {//30天
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*30
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*30
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*30
					}

				}else if(this.pairSelected == '3') {//365天
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*365
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*365
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*365
					}
				}else if(this.pairSelected == '4'){//不续费
					this.datePay=0;
				}
	          	if(isNaN(this.quotaPay)){
	          		this.quotaPay=0;
	          	}
	          	this.totalPrice=(this.quotaPay+this.datePay).toFixed(2);
            },
            choseTime(id) {//选择续费天数
            	if(id == 4 && this.addLimit == 0){
            		this.ifSubmit = true
				}else{
					this.ifSubmit = false
				}
                this.pairSelected = id;
                var addLimit=0;
                if(this.addLimit==""){
                	addLimit=0;
                }else{
                	addLimit=this.addLimit;
                }
				var unitPrice1 = 0;
				var unitPrice2 = 0;
				var unitPrice3 = 0;
				var allFe= parseInt(this.auLimit)+parseInt(this.addLimit);//已用份数+增持份额
				if(this.renewParams.robot_grade == 'OTO'){//一级机器人
					unitPrice1 = 0.1
					unitPrice2 = 0.15
					unitPrice3 = 0.23
				}else if(this.renewParams.robot_grade == 'OTM') {//二级机器人
					unitPrice1 = 0.17
					unitPrice2 = 0.27
					unitPrice3 = 0.41
				}else if(this.renewParams.robot_grade == 'MTM') {//三级机器人
					unitPrice1 = 0.25
					unitPrice2 = 0.45
					unitPrice3 = 0.65
				}
                if(id==1){//week
                	this.renewParams.day_type="week";
                	/*this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*7*this.renewParams.UnitPrice*/
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*7
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*7
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*7
					}
                }else if(id==2){//month
                	this.renewParams.day_type="month";
                	/*this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*30*this.renewParams.UnitPrice*/
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*30
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*30
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*30
					}
                }else if(id==3){//year
                	this.renewParams.day_type="year";
                	/*this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*365*this.renewParams.UnitPrice*/
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*365
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*365
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*365
					}
                }else if(id==4){//不续费（增持份额）
                	this.renewParams.day_type=""
                	/*this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*0*this.renewParams.UnitPrice*/
					if(allFe<=5){
						this.datePay=allFe*unitPrice1*0
					}else if(allFe>5 && allFe<=10){
						this.datePay=(5*unitPrice1+(allFe-5)*unitPrice2)*0
					}else if(allFe>10){
						this.datePay=(5*unitPrice1+5*unitPrice2+(allFe-10)*unitPrice3)*0
					}
                }
            	this.totalPrice=(this.datePay+this.quotaPay).toFixed(2);
            },
            userAddLimit(id){//增持
            	if(this.inrequest){
	        		return false;
	        	}
            	var params= {};
            	params.instance_id=id;
            	params.limit=this.addQuota;
            	this.inrequest=true;
            	userAddLimit(params).then(data => {

                    if (data.code == 200) {
 						$(".close").click();
 						this.inrequest=false;
 						this.$toast.center(this.$t('netnew.zcSuccess'));
 						this.getuseInfo();
                    } else {
                    	this.inrequest=false;
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            userIR(id){
            	if(this.inrequest){
	        		return false;
	        	}
            	var params= {};
            	params.instance_id=id;
            	params.days=this.userRenewday;
            	this.inrequest=true;
            	userIR(params).then(data => {
                    if (data.code == 200) {
 						$(".close").click();
 						this.inrequest=false;
 						this.$toast.center(this.$t('netnew.xfSuccess'));
 						this.getuseInfo();
                    } else {
                    	this.inrequest=false;
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            choseQuota(id){
            	this.quotaFlag=id;
            },
            changeAuto(){
            	this.auto_renew=!this.auto_renew;
            },
            changeAuto2(){
            	this.auto_renew=!this.auto_renew;
            	$('#auto').click();
            },
            closeTrue(){
            	$('#closeT')[0].checked=true;
            	$('#closeF')[0].checked=false;
            	this.closeOrder=1;
            },
            closeFalse(){
            	$('#closeT')[0].checked=false;
            	$('#closeF')[0].checked=true;
            	this.closeOrder=0;
            },
            instancePause(val){
            	var params={};
            	params.instance_id=val;
            	instancePause(params).then(data => {
                    if (data.code == 200) {
                        console.log(data);
                        this.getrbtInfo(0);
                        this.getSelfBuiltRobotList();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
//	                console.log(data)
                    }
                });
            },
            initInstance(val){
            	var params={};
            	params.instance_id=val;
            	initInstance(params).then(data => {
                    if (data.code == 200) {
                        console.log(data);
                        this.getrbtInfo(0);
                        this.getHistoryInfo();
                        this.getSelfBuiltRobotList();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
//	                console.log(data)
                    }
                });
            },
            startRenew(){
            	if(this.ifSubmit){
            		return false
				}
	        	swal({
				title: this.$t('netnew.xfRbt'),
				text: this.$t('netnew.comfirexfRbt'),
				buttons: {
					    cancel: this.$t('login.tips3'),
					    catch: {
					      text: this.$t('login.tips2'),
					    },
					  },
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {
					var params={}
	            	params.day_type=this.renewParams.day_type;
	            	params.instance_id=this.renewParams.InstanceId;
	            	params.add_amount=parseInt(this.addLimit);
	            	params.auto_renew=this.auto_renew;
		           	toRadl(params).then(data => {
	                    if (data.code == 200) {
	                        this.getrbtInfo(0);
	                        this.getSelfBuiltRobotList();
	                        if(this.$i18n.locale== 'zh-CN'){
								this.$toast.center(this.$t('netnew.xfSuccess'));
							}else{
								this.$toast.center('Renewal of success');
							}
	                        	$(".close").click();
	                    } else {
							if(data.code == '102001'){//购买份额最少为xx份额
								this.$toast.center(this.$t('msg.msg'+data.code)+' '+data.msg+' '+ this.$t('netnew.Share'))
							}else{
								this.$toast.center(this.$t('msg.msg'+data.code));
							}
	                    }
	                });

				  }
				})

            },
            toStop(val){
            	this.stopParams=val;
            	$('#closeT')[0].checked=false;
            	$('#closeF')[0].checked=false;
            	this.closeOrder=-1;
            	if(val.OrderClosed){
            		this.stopStep=1
            	}else{
            		this.stopStep=2
            	}
            },
            stopInstance(){
               var params={};
            	params.instance_id=this.stopParams.InstanceId;
            	if(this.closeOrder==1){
            		params.force=true
            	}else{
            		params.force=false
            	}
                stopInstance(params).then(data => {
                    if (data.code == 200) {
                    	$(".close").click();
                        this.getrbtInfo(0);
                        this.getSelfBuiltRobotList();
                        this.getHistoryInfo();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            deleteInstance(val){
            	var params={};
            	params.instance_id=val;

	            swal({
				  title: this.$t('netnew.ays')+"?",
				  text: this.$t('netnew.DeleteYourRobot'),
				  buttons: {
					    cancel: this.$t('login.tips3'),
					    catch: {
					      text: this.$t('login.tips2'),
					    },
					  },
				  dangerMode: true,
				})
				.then((willDelete) => {
				  if (willDelete) {

	                deleteInstance(params).then(data => {
	                    if (data.code == 200) {
	                    	this.$toast.center(this.$t('netnew.Robothasbeendeleted'));
	                        this.getrbtInfo(0);
	                        this.getHistoryInfo();
	                        this.getSelfBuiltRobotList()
	                    } else {
	                        this.$toast.center(this.$t('msg.msg'+data.code));
	                    }
	                });
				  }
				})
            },
            changeDays(){
            	this.renewAfterday=new Date(this.usrRenewParams.ExpireDate).getTime()+(this.userRenewday*1000*24*60*60);
            	this.renewAfterday=new Date(this.renewAfterday);
            	this.renewTotal=this.userRenewday*this.usrRenewParams.limit_unit_price*(this.usrRenewParams.Limit/this.usrRenewParams.Multiple);//续费总额
            },
            toRenew(list){//续费
            	this.instanceModal=1;
            	this.renewParams=list;//机器人所有信息
				this.quotaFlag=1;
				this.quotaPay=0;
				this.addLimit=0;
            	this.addlimitParams=list;
            	this.getrenewDetail(list.InstanceId);
            	this.getBuyInfo(list);
            },
            useraddlimit(list){
            	this.instanceModal=4;
				this.usraddParams=list;
				this.addQuota=0;
				this.addTotal=0;
				this.usraddParams.available=5-(this.usraddParams.Limit/this.usraddParams.Multiple);
            },
            userRenew(list){
            	if(list.robot_expired){
            		this.instanceModal=2;
            	}else{
            		this.instanceModal=3;
            	}

            	this.userRenewday=0;
            	this.renewTotal=0;
            	this.usrRenewParams=list;
            	this.canRenewday=new Date(this.usrRenewParams.robot_expire_date).getTime()-new Date(this.usrRenewParams.ExpireDate).getTime();
            	this.canRenewday=this.canRenewday/(60*1000*60*24);
            },
            getrenewDetail(id){
            	var params={};
            	params.instance_id=id;
            	getrenewDetail(params).then(data => {
                    if (data.code == 200) {
                        this.renewList=data.data;
                        this.auLimit=this.renewList.last_limit/this.renewParams.Multiple;//当前已用份数
						this.maxLimit=(this.renewList.quota-this.renewList.last_limit)/this.renewParams.Multiple;//最大可用份数
                        if(this.renewList.less_amount>0){
							this.avLimit=this.$t('netnew.dqkyw')+" "+parseInt(this.renewList.less_amount/this.renewParams.Multiple);
                        }else{
							this.avLimit=this.$t('netnew.dqkyw')+"0"
                        }
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            toAddUserLimit(){
            		var params={}
            	params.add_amount=this.addUserLimit;
            	params.instance_id=this.adduserlimitParams.InstanceId;
	           	toAddUserLimit(params).then(data => {
                    if (data.code == 200) {
                        this.getrbtInfo(0);
                        this.getSelfBuiltRobotList();
                        if(this.$i18n.locale== 'zh-CN'){
							this.$toast.center(this.$t('netnew.zcSuccess'));
						}else{
							this.$toast.center('Increase success');
						}
                        $(".close").click();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            changeQuota(){
            	this.addTotal=this.usraddParams.remain_days*this.addQuota*this.usraddParams.limit_unit_price;
            },
            toAddLimit(){
            	var params={}
            	params.add_amount=this.addLimit;
            	params.instance_id=this.addlimitParams.InstanceId;
	           	toAddLimit(params).then(data => {
                    if (data.code == 200) {
                        this.getrbtInfo(0);
                        this.getSelfBuiltRobotList();
                        if(this.$i18n.locale== 'zh-CN'){
							this.$toast.center(this.$t('netnew.zcSuccess'));
						}else{
							this.$toast.center('Increase success');
						}
                        $(".close").click();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            toFarcty(){
            	$(".close").click();
            	this.$router.push('/robot/factory');
            },
            getInstanceRD(){
            	var params={};
            	params.instance_id=this.addlimitParams.InstanceId;
            	getInstanceRD(params).then(data => {
                    if (data.code == 200) {
						this.addlimitParams.remainDate=data.data;
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            instanceRun(val){
            	var params={};
            	params.instance_id=val;
            	instanceRun(params).then(data => {
                    if (data.code == 200) {
//                      console.log(data);
                        this.getrbtInfo(0);
                        this.getSelfBuiltRobotList();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            freshInstance(val){
            	var params={};
            	params.instance_id=val;
            	freshInstance(params).then(data => {
                    if (data.code == 200) {
//                      console.log(data);
						this.$toast.center(this.$t('msg.msgsucces'));
                        this.getrbtInfo(0);
                        this.getSelfBuiltRobotList();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            changeItSubscribe(val){
				var params={}
				params.id=val
				changeItSubscribe(params).then(data => {
					if(data.code == 200) {
//						console.log(data);
						this.getrbtInfo(0);
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
            goDetail(val) {
                localStorage.setItem('robotObj', JSON.stringify(val))
                this.$router.push('/robot/instanceDetail')
            },
            selectAll(event) {
                var _this = this;
                console.log(event.currentTarget)
                if (!event.currentTarget.checked) {
                    this.selectArr = [];
                } else { //实现全选
                    _this.selectArr = [];
                    _this.robotList.forEach(function (item, i) {
                        _this.selectArr.push(i);
                    });
                }
            }

        }
    }
</script>

<style>
	.forbidStatus{
		cursor:not-allowed
	}
    .overview_box {
      /*  padding: 20px 32px;*/

        /*font-family: SFProDisplay-Bold !important;*/

        color: #000000;
        letter-spacing: 0;
    }

    .padding_left {
      /*  padding-left: 34px;*/
    }



    .instance_box {

    }


     thead tr th {
        border-bottom-width: 0 !important;
        border: none !important;

        width: 64px;
        vertical-align: middle !important;

        text-align: center !important;


        /*padding-bottom: 28px !important;*/

    }

    .table-bordered tbody tr td {
        border-bottom-width: 0 !important;
        border: none !important;


        font-size: 14px;
        color: #000000;
        letter-spacing: 0;

        vertical-align: middle !important;
        text-align: center !important;

        word-break: break-all;

    }

    .check_box {
        width: 10px !important;
    }
	.unchecked-quota{
		text-align: center;
		color: #718EBD;
		margin-top: 5px;
		cursor: pointer;
	}
	.checked-quota{
		text-align: center;
		color: #fff;
		margin-top: 5px;
		cursor: pointer;
	}

    .tr_grey {
        background: #F8F8F8;
        box-shadow: 0 1px 0 0 #DBDEDE;
        border-radius: 1px;
    }

    .running_btn {
        background: #12CD2E;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;

    }

    .pause_btn {
        background: #909499;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    .stop_btn {
        background: #47CEFF;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
    }
    .overdue_btn {
        background: #3158E4;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
    }

    .error_btn {
        background-color: #FF3232;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF !important;
        letter-spacing: 0;
    }

    .overview_title{
    	color: #fff;
    	font-size: 25px;
		padding:0 46px 34px 50px;
    }
	.overview_sub_tit{
		width:100%;
		padding-left:44px;
		height:50px;
		color:#718EBD;
		font-size:16px;
		margin-bottom:0;
	}
	.overview_sub_tit>li{
		height:50px;
		float:left;
		margin-right:46px;
		padding:5px 8px 0;
		cursor: pointer;
		color:#718EBD;
	}
	.warning-bg{
		position: absolute;
		right: -27px;
		top: 20px;
		padding-right: 25px;
	    padding-top: 16px;
		padding-bottom: 10px;
	    padding-left: 10px;
	    text-align: left;
		cursor: pointer;
		z-index: 500;
		min-height: 188px;
		width: 206px;
		background: url("../assets/img/warningbg.png") no-repeat center top;
		background-size: 100% 100%;
	}
	.sub_tit_active{
		color: #ffffff !important;
		background: url("../assets/img/tab_bg.png") no-repeat center bottom;
		background-size: 100% 100%;
	}
	.overview_box .table{
		table-layout: fixed;
	}
	.overview_box .table tr {
		height: 60px!important;
	}
	.robot_manage_container .external-event{
		margin-right: 0!important;
		margin-bottom:0!important;
	}
	.robot_manage_container table{
		margin-top:0!important;
	}
	.robot_manage_container .action_item{
		text-align: center;
	}
	.instance-wrap{
		/*background: url("../assets/img/robotbox@2x.png") no-repeat;*/
		background-size: cover;
		min-height: 897px;
		padding-bottom: 50px;
		position: relative;
	}
	.disclick{
		cursor: not-allowed;
	}
	.pigna{
		padding:30px 0;
	}
	.table-bordered thead{
		font-size:13px!important;
	}
</style>
