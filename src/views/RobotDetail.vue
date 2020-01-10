<template>
    <section class="mail-list">
        <div class="lg-row">
            <div class="overview_box padding_left robot_detailt_cont">
                <section class="">
                    <h2 class="clearfix" style="font-size:25px;color:#fff;">
						<span style="float:left">{{rbdList.robot_name}}</span>
                        <label class="label ui-draggable" v-show="!rbtDetailParm.isHistory"
                               v-bind:class="{'label-success':rbdList.status==1,'label-default':rbdList.status==2,'label-stop':rbdList.status==3,'label-primary2':rbdList.status==4,'label-wait':rbdList.status==5,'label-danger':rbdList.status==99}"
                               style="font-weight: 500 !important;font-size: 14px;margin-left:20px;float:left;padding: 8px;">
                            {{rbdList.status|robotStatus}}
                        </label>
                        <label class="label ui-draggable label-default" v-show="rbtDetailParm.isHistory" style="display: inline-block;padding: 8px;margin-left: 20px;">
                            {{$t('netnew.history')}}
                        </label>
                    </h2>
					<div class="lg-width" style="width: 100%;">
						<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="instancePause" v-show="rbdList.status==1">
							{{$t('net.pause')}}
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						</button>
						<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="instanceRun" v-show="rbdList.status==2||rbdList.status==99">
							{{$t('net.run')}}
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						</button>
						<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="stopInstance" v-show="rbdList.status!=3">
							{{$t('net.stops')}}
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						</button>
						<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="initInstance" v-show="rbdList.status==3&&!rbtDetailParm.isHistory">
							{{$t('netnew.restart')}}
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						</button>
						<!--<button class="btn rbdbtn btn-md" type="button" style="position: relative;" href="#instanceModal" data-toggle="modal" @click="toRenew(rbdList)" v-show="!rbtDetailParm.isHistory&&rbdList.status!=3" >
							{{$t('netnew.xufei')}}
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						</button>-->
						<button class="btn rbdbtn btn-md" type="button" style="position: relative;" @click="back" >
							{{$t('net.back')}}
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						</button>
					</div>
                    <div class="lg-width instance_overview clearfix" style="width: 100%;padding-top:0;">
                        <div  style="float:left;width:185px;height:193px;margin-right: 55px;">
                            <img src="../assets/img/rbtd5@2x.png" style="margin-left:-15px;width:185px;height:193px;">
                        </div>
                        <div class="instance_des_1" style="padding-top: 40px;float:left;width:calc(50% - 120px)">

                            <div class="des_item" style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">
                                <label>{{$t('netnew.TradeType')}}</label><i >{{rbdList.TradeType|tradeType}}</i>
                            </div>

                            <div class="des_item">
                                <label>{{$t('netnew.CreateTime')}}</label><i>{{rbdList.buy_time|time}}</i>
                            </div>

                            <div class="des_item">
                                <label>{{$t('netnew.ExpireDate')}}</label><i>{{rbdList.expire_date|time}}</i>
                            </div>

                        </div>
                        <div class="instance_des_2" style="padding-top: 40px;float:left;width:calc(50% - 120px)">
                            <div class="des_item">
                                <label>{{$t('netnew.StandardCoin')}}</label><i>{{rbdList.standard_coin}}</i>
                            </div>

                            <div class="des_item">
                                <label>{{$t('netnew.RunningDays')}}</label><i>{{rbdList.buy_day}}</i>
                            </div>

                            <div class="des_item">
                                <label>{{$t('netnew.OperationFrequency')}}</label><i>{{rbdList.frequency}}</i>
                            </div>
                        </div>
                    </div>
                    <div class="lg-width clearfix" style="width: 100%;margin-top: 25px;margin-bottom: 0px;border-bottom: 1px solid rgba(255,255,255,.1);">
						<div class="lg-width sort_item" style="width: 14%;text-align: center;font-size: 16px;" :class="{'select_sort':mkTab==1}" @click="changeMktab(1)">{{$t('netnew.jqrsy')}}</div>
						<div class="lg-width sort_item" style="width: 13%;font-size: 16px;" :class="{'select_sort':mkTab==2}" @click="changeMktab(2)">{{$t('netnew.ddjl')}}<span style="padding-left:10px;">({{rbdList.OrderCount}})</span></div>
						<div class="lg-width sort_item" style="width: 13.5%;font-size: 16px;" :class="{'select_sort':mkTab==3}" @click="changeMktab(3)">{{$t('netnew.rbothcmx')}}</div>
						<div class="lg-width sort_item" v-show="userType==1" style="width: 11.5%;font-size: 16px;" :class="{'select_sort':mkTab==4}" @click="changeMktab(4)">{{$t('netnew.RobotSignal')}}</div>
					</div>
                    <div class="lg-width" style="width: 100%;padding-bottom: 50px;" v-show="mkTab==1">
                    	<table class="table table-bordered table-hover general-table" style="margin-top: 0px;margin-bottom: 40px;">
                            <thead>
                            <tr>
                                <th>{{$t('netnew.ljtr')}}</th>
                                <th>{{$t('robotdetails.detailCcyk')}}</th>
                                <th>{{$t('netnew.CumsumReturn')}}</th>
                                <th>{{$t('netnew.ljsyl')}}</th>
                                <!--<th>{{$t('netnew.Annualreturn')}}</th>-->
                                <th >{{$t('netnew.RbmarketTex3')}}</th>
                                <th style="width: 12%;"></th>
                            </tr>
                            </thead>
                            <tbody>

                            <tr class="tr_white" >
                                <td>{{returnList.initial_fund}}</td>
                                <td>{{returnList.total_fund|tofix4}}</td>
                                <td>{{returnList.return_amount|tofix4}}</td>
                                <td>{{returnList.return_percent|tofix}}%</td>
                               <!-- <td>{{returnList.year_return_percent|tofix}}%</td>-->
                                <td>{{returnList.avg_tick_return|tofix}}%</td>
                                <td></td>

                            </tr>
                            </tbody>
                        </table>
                    	<div id="container2" style="height: 595px;width: 100%;margin-top:10px;margin-left: 20px;"></div>
                    </div>

                    <div class="lg-width" style="width: 100%;" v-show="mkTab==2"><!--订单记录-->
						<table class="table table-bordered table-hover general-table" style="margin-top: 0px;margin-bottom: 40px;">
							<thead>
								<tr>
									<th style="width:4%;">{{$t('netnew.cjsj')}}</th>
									<th>{{$t('netnew.jyfx')}}</th>
									<th>{{$t('netnew.OrderCost')}}</th>
									<th>{{$t('netnew.Amount')}}</th>
									<th>{{$t('netnew.jymx')}}</th>
									<th >{{$t('netnew.syzj')}}</th>
									<th>{{$t('netnew.sylRate')}}</th>
									<th>{{$t('netnew.Actions')}}</th>
								</tr>
							</thead>
							<tbody>
							<tr v-for="list in trueList">
								<td>{{list.FilledDate|timer}}</td>
								<td>{{list.OrderSide|orderSide}}</td>
								<td>{{list.FilledPrice}}</td>
								<td>{{list.FilledAmount}}</td>
								<td>
									<div style="color: #36A85B;">{{list.CostData}}</div>
									<div style="color: #FF6565">{{list.ResultData}}</div>
								</td>
								<td>{{list.return_amount|tofix4}}</td>
								<td>{{list.return_percent*100|tofix}}%</td>
								<td>
									<div class="lg-width ovb-text" @click="getRobotord(list.OrderId)"  href="#jymxModal" data-toggle="modal" style="width: 100%;cursor: pointer;text-decoration: underline;color: #718EBD;" >
										{{$t('netnew.jymx')}}
									</div>
								</td>
							</tr>
							</tbody>
						</table>
                    	<div class="alert alert-warning fade in" v-show="orderList.length==0">
	                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
	                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
	                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
	                    </div>
	                    <div class="pigna lg-width" v-show="orderList.length>0" style="width: 100%;text-align: center;margin-top: 15px;">
							<paginate v-model="CurrentPage" :page-count="perpage" :click-handler="withDrawRecord" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
							</paginate>
						</div>
					</div>

					<div class="lg-width" style="width: 100%;text-align: left;margin-bottom: 0;" v-if="mkTab==3"><!--回测累计收益-->
						<div class="lg-width" style="width: 70%;text-align: left;font-size: 20px;color: #fff;line-height: 60px;">{{$t('netnew.hcljsy')}}</div>
						<!--<div class="lg-width line-type" :class="{'line-checked':lineCheck==3}" @click="changeLC(3)" style="width: 10%;text-align: center;">{{$t('netnew.jz')}}</div>-->
						<div class="lg-width line-type" :class="{'line-checked':lineCheck==1}" @click="changeLC(1)" style="width: 10%;text-align: center;">{{$t('netnew.md')}}</div>
						<div class="lg-width line-type" :class="{'line-checked':lineCheck==2}" @click="changeLC(2)" style="width: 10%;text-align: center;">{{$t('netnew.mz')}}</div>
						<div class="lg-width" style="width: 100%;"><!--机器人回测明细-->
							<div  style="width: 100%;color: #718EBD;padding-top:150px;text-align: center;" v-if="jzz">{{$t('netnew.jzz')}}...</div>
							<div id="container" style="height:500px;width: 100%;"></div>
						</div>

						<div class="lg-width" style="width: 100%;text-align: left;font-size: 20px;color: #fff;line-height: 60px;padding-top:40px;">{{$t('netnew.jqrzcsj')}}</div>
						<div class="lg-width" style="width: 100%;">
							<table class="table mdtable" style="text-align: center;">
									<thead>
										<tr class="mdbox-title" style="border-top:none;">
											<th style="font-weight: 500 ;text-align: left!important;">{{$t("robotdetails.Average")}}</th>
											<th style="font-weight: 500 ;text-align: left!important;">{{$t("robotdetails.Sharperatio") }}</th>
											<th style="font-weight: 500 ;text-align: left!important;">{{$t("robotdetails.Accuracy") }}</th>
											<th style="font-weight: 500 ;text-align: left!important;">{{$t("robotdetails.Averagereturn") }}</th>
										</tr>
									</thead>
									<tbody>
										<tr class="mdbox-text">
											<td>{{ robotBaseInfo.AverageHoldingPeriod|tofix}} H</td>
											<td>{{ robotBaseInfo.SharpeRatio*100|tofix}}%</td>
											<td>{{ robotBaseInfo.WinRate*100|tofix }}%</td>
											<td>{{ robotBaseInfo.AverageReturnPerTrade*100|tofix}}%</td>
										</tr>
										<tr class="mdbox-title">
											<td>{{$t("robotdetails.Annualinterest") }}</td>
											<td>{{$t("robotdetails.Numberof") }}</td>
											<td>{{$t("robotdetails.Averageweeklytransactions")}}</td>
											<td>{{$t("robotdetails.Maximumhistoricalretracement") }}</td>
										</tr>
										<tr class="mdbox-text" >
											<td>{{ robotBaseInfo.AnnualizedReturn*100|tofix }}%</td>
											<td>{{ robotBaseInfo.TradeCount }}</td>
											<td>{{ robotBaseInfo.TradeCountPerWeek|tofix }}</td>
											<td>{{ robotBaseInfo.MaxDrawdownRatio*100|tofix }}%</td>
										</tr>
										<tr class="mdbox-title">
											<td>{{$t("robotdetails.Maximumweeklywithdrawal") }}</td>
											<td>{{$t("robotdetails.risk1")}}</td>
											<td>{{$t("robotdetails.risk5")}}</td>
											<td>{{$t("robotdetails.Volatility")}}</td>
										</tr>
										<tr class="mdbox-text" >
											<td>{{ robotBaseInfo.MaxDrawdownWeek*100|tofix }}%</td>
											<td>{{ robotBaseInfo.Var1|tofixd }}%</td>
											<td>{{ robotBaseInfo.Var5|tofixd}}%</td>
											<td>{{ robotBaseInfo.Std*100|tofix }}%</td>
										</tr>

									</tbody>
								</table>
						</div>
 					</div>

 					<div class="lg-width" style="width: 100%;text-align: left;margin-bottom: 0;" v-if="mkTab==4">
 						<h2 class="clear_left" style="margin-top: 20px;font-size:20px;color:#fff;margin-bottom: 20px;">
	                        {{$t('netnew.RobotSignal')}}

							<label style="font-size: 14px;color: #718EBD;float:right;margin-right: 170px;">{{$t('netnew.onlySignl')}}</label>
							<input class="boxs" style="margin-top: -2px;float:right;margin-right: 15px;" type="checkbox" v-model="checked" @click="changeCheck">
	                    </h2>

	                    <div class="">
	                        <table class="table table-bordered  general-table">
	                            <thead>
	                            <tr style="border-top:none;width:100%">
	                                <th style="width: 75%;text-align: left !important;padding-left: 65px;">{{$t('netnew.Time')}}</th>
	                                <th style="width:25%;text-align: left !important;padding-left: 20px;">{{$t('netnew.Signal')}}</th>

	                            </tr>
	                            </thead>
	                            <tbody>

	                            <tr class="tr_white" v-for="list in signalList">


	                                <td style="text-align: left !important;">{{list.active_date}}</td>
	                                <td style="text-align: left !important;">{{list.signal|signal}}</td>


	                            </tr>
	                            </tbody>
	                        </table>
	                        <div class="alert alert-warning fade in" v-show="signalList.length==0">
		                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
		                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
		                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
		                    </div>
	                    </div>
 					</div>

					<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="jymxModal" class="modal fade" style="z-index: 5001;">
						<div class="modal-dialog-rbdt" style="width: 1093px !important;">
							<div class="modal-content login-box" style="width: 1093px !important;height: 416px;">
								<div class="lg-width" style="width: 100%;text-align: center;color: #718EBD;font-size: 16px;line-height: 60px;">
									{{$t('netnew.jymx')}}
								</div>
								<div class="lg-width" style="width: 100%">
									<table class="table table-bordered table-hover general-table" >
			                            <thead>
			                            <tr>
			                                <th>{{$t('netnew.TradeType')}}</th>
			                                <th>{{$t('netnew.cjsj')}}</th>
			                                <th>{{$t('netnew.OrderCost')}}</th>
			                                <th>{{$t('netnew.tradeMount')}}</th>
			                                <th>{{$t('netnew.turnover')}}</th>
			                                <th>{{$t('net.fee')}}</th>

			                            </tr>
			                            </thead>
			                            <tbody>

			                            <tr class="tr_white" v-for="list in orderdList">
											<td>{{list.OrderSide|orderSide}}</td>
			                                <td>{{list.FilledDate|timer}}</td>
			                                <td>{{list.FilledPrice}}</td>
			                                <td>{{list.FilledAmount}}</td>
			                                <td>{{list.ResultData}}</td>
			                                <td>{{list.Fee}}</td>
			                            </tr>
			                            </tbody>
			                        </table>
								</div>
								<div class="lg-width" style="width: 100%;text-align: center;position: absolute;bottom: 25px;">
									<button class="btn rbdbtn btn-md" type="button" style="position: relative;font-size: 16px;width: 175px;height: 55px;" data-dismiss="modal" aria-hidden="true" >
										{{$t('login.tips2')}}
										<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
									</button>
								</div>
							</div>
						</div>
					</div>
					<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="instanceModal" class="modal fade" style="z-index: 5001;">
						<button id="close" type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>
						<div class="modal-dialog">
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
										<div class="lg-width" style="width: 74%;margin-top: 20px;text-align: left;">
											<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aWeek')}}</a>
											<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.aMonth')}}</a>
											<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
											<a class="pair-time" style="margin-left: 15px;" v-bind:class="{'pair-selected':pairSelected==4}" @click="choseTime(4)">{{$t('netnew.bxf')}}</a>
										</div>
									</div>
									<div style="display: table;width: 100%;border-bottom:1px solid #718EBD70;">
										<div class="lg-width" style="width: 24%;margin-top: 20px;text-align: left;margin-bottom: 15px;">
											<span v-show="$i18n.locale=='zh-CN'" style="font-size:16px;color: #718EBD;">增加份额</span>
											<span v-show="$i18n.locale=='en-US'"  style="font-size:16px;color: #718EBD;">Increase share</span>
											<span v-show="$i18n.locale=='ko'"  style="font-size:16px;color: #718EBD;">배당을 증식하다</span>
										</div>
										<div class="lg-width" style="width: 76%;margin-top: 25px;text-align: left;">
											<!--<input type="number" min="1" id="syfe"  style="text-align:center;width: 100px;margin-right:5px;height: 35px;margin-top: -7px;border:1px solid #dcdcdc"  />-->
											<input type="number" :placeholder="avLimit" class="form-control change-limit" v-model="addLimit" @change="getPrice"  style="border-bottom:none !important;padding: 0;text-align: left;width: 200px !important;"   />

											<span style="font-size: 16px;color: #718EBD;float: right;">×{{addlimitParams.Multiple}}{{addlimitParams.StandardCoin}}</span>

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
										<label style="margin-left: 6px;color:#718EBD;" @click="changeAuto2">{{$t('modalbox.renewal')}}</label>
									</div>
								</div>
								<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 0;border-top:1px solid #718EBD40 ;">
									<span style="color: #718EBD;font-size: 16px;margin-left: 55px;">{{$t('netnew.xiaofei')}}:</span>
									<span style="font-size: 22px;color: #ffffff;line-height: 60px;margin-right: 8px;">{{totalPrice}}</span>
									<span style="color: #718EBD;margin-right: 10px;font-size: 16px;">NET</span>
									<!--<span style="color: #718EBD;margin-left: 10px;font-size: 16px;">{{renewParams.UnitPrice}}NET份/天</span>-->
									<button class="card-btm"  style="position: relative;float: right;" @click="startRenew">
										{{$t('market.confirm')}}
									</button>
								</div>

							</div>
						</div>
					</div>
                </section>

            </div>

        </div>
    </section>


</template>

<script>
    import {getProfit, getRobotDetail,getUserInfo, getTradeLog,getSignal,getRunLog,getTradeLogD,getRobotbd,getRobotpd,getRobotod,getRobotord,robotBacktestDetail,getRobotBase,ovBalance,getOvri,getRobotInfo,toRadl,getrenewDetail,instancePause,changeItSubscribe,toAddUserLimit,instanceRun,freshInstance,stopInstance,initInstance,getBuyInfo,startRenew,getInstanceRD,toAddLimit,deleteInstance} from '../api/api';

    export default {
        data() {
            return {
                rbtDetailParm: {},
                rbtInfoParm: {},
                tradeParm: {},
                rbtList: [],
                robotInfo:[],
                orderList:[],
                trueList:[],
                orderdList:[],
                tradeList: [],
                tradeList2: [],
                signalList:[],
                returnList:{},
                RunList:[],
                rbdList:{},
                robotBaseInfo:{},
                xdata:[],
                ydata:[],
                CurrentPage:1,
                perpage:1,
                checked:false,
                amount:"",
                amount2:"",
                orderTable:1,
                type:'all',
                mkTab:1,
                jzz:true,
                lineCheck:1,
				allshow:false,
				selectArr: [],
                robotList: [],
                ownRobotList:[],
                addLimitPrice:0,
                addLimit:"",
                addUserLimit:0,
                rbtInfoParm: {},
                first: 0,
                renewList:[],
                instanceModal:1,
                status1:"1",
                status2:"1",
                datePay:0,
                quotaPay:0,
                renewParams:{},
                addlimitParams:{},
                adduserlimitParams:{},
                pairSelected:1,
                buyInfo:{},
                userType:1,
                quotaFlag:1,
                auto_renew:true,
                totalPrice:0,
                auLimit:0,
                avLimit:"",
                maxLimit:0,
            }
        },
        mounted() {
            this.rbtDetailParm = JSON.parse(localStorage.getItem('robotObj'));
            this.getProfit();
            this.getTradeLog(1);
            this.getTradeLogD(1);
            this.changeCheck();
            this.getRunLog();
            this.getRobotbd();
            this.getRobotpd();
            this.getRobotod();
            this.getRobotBase();
        },
        methods: {

        	getuseInfo(){
				getUserInfo(this.empty).then(data => {
	              if (data.success == 0) {
					this.userType=data.data.userType;
	              } else {
	              	this.$toast.center(data.message);
	              }
	            });
			},

        	goDetail(val) {
                localStorage.setItem('robotObj', JSON.stringify(val))
                this.$router.push('/robot/instanceDetail')
            },
			getPrice(){
	          	this.quotaPay=parseInt(this.renewList.lost_day)*parseInt(this.addLimit)*this.renewParams.UnitPrice;
	          	if(isNaN(this.quotaPay)){
	          		this.quotaPay=0;
	          	}
	          	this.totalPrice=this.quotaPay+this.datePay;
            },
            choseTime(id) {
                this.pairSelected = id;
                var addLimit=0;
                if(this.addLimit==""){
                	addLimit=0;
                }else{
                	addLimit=this.addLimit;
                }
                if(id==1){
                	this.renewParams.day_type="week";
                	this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*7*this.renewParams.UnitPrice
                }else if(id==2){
                	this.renewParams.day_type="month";
                	this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*30*this.renewParams.UnitPrice
                }
                else if(id==3){
                	this.renewParams.day_type="year";
                	this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*365*this.renewParams.UnitPrice
                }else if(id==4){
                	this.renewParams.day_type=""
                	this.datePay=(this.renewParams.Limit/this.renewParams.Multiple)*0*this.renewParams.UnitPrice
                }
            	this.totalPrice=this.datePay+this.quotaPay;

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
            instancePause(){
            	var params={};
            	params.instance_id=this.rbtDetailParm.InstanceId;
            	instancePause(params).then(data => {
                    if (data.code == 200) {
                       this.getRobotbd();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
//	                console.log(data)
                    }
                });
            },
            initInstance(){
            	var params={};
            	params.instance_id=this.rbtDetailParm.InstanceId;
            	initInstance(params).then(data => {
                    if (data.code == 200) {
                        localStorage.setItem('robotObj',data.data);
                        this.rbtDetailParm=data.data;
                        this.getRobotbd();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
//	                console.log(data)
                    }
                });
            },
            startRenew(){
            	var params={}
            	params.day_type=this.renewParams.day_type;
            	params.instance_id=this.renewParams.InstanceId;
            	params.add_amount=parseInt(this.addLimit);
            	params.auto_renew=this.auto_renew;
	           	toRadl(params).then(data => {
                    if (data.code == 200) {
                        this.getRobotbd();
                        this.getRobotpd();
                        if(this.$i18n.locale== 'zh-CN'){
							this.$toast.center(this.$t('netnew.xfSuccess'));
						}else{
							this.$toast.center('Renewal of success');
						}
                        $(".close").click();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            stopInstance(){
               var params={};
            	params.instance_id=this.rbtDetailParm.InstanceId;

            swal({
			  title: this.$t('netnew.ays2')+"?",
			  text: this.$t('netnew.ays3'),
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

                stopInstance(params).then(data => {
                    if (data.code == 200) {
                        this.getRobotbd();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
			  }
			})


            },

            instanceRun(){
            	var params={};
            	params.instance_id=this.rbtDetailParm.InstanceId;
            	instanceRun(params).then(data => {
                    if (data.code == 200) {
						this.getRobotbd();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
           	getBuyInfo(){
            	var params={};
            	params.robot_id=this.rbtDetailParm.RobotId;
            	params.user_id=this.rbtDetailParm.UserId;
            	getBuyInfo(params).then(data => {
                    if (data.code = 200) {
                    	this.buyInfo=data.data;
                    	this.choseTime(4);
                    }else{
                    	this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },

            toRenew(){
            	this.instanceModal=1;
            	this.renewParams=this.rbtDetailParm;
				this.quotaFlag=1;
				this.quotaPay=0;
				this.addLimit="";
            	this.addlimitParams=this.rbtDetailParm;
            	this.getrenewDetail(this.rbtDetailParm.InstanceId);
            	this.getBuyInfo();
            },
            getrenewDetail(id){
            	var params={};
            	params.instance_id=id;
            	getrenewDetail(params).then(data => {
                    if (data.code == 200) {
                        this.renewList=data.data;
                        this.auLimit=this.renewList.last_limit/this.renewParams.Multiple;
                        this.maxLimit=(this.renewList.quota-this.renewList.last_limit)/this.renewParams.Multiple;
                        if(this.renewList.less_amount>0){
                        	this.avLimit=this.$t('netnew.dqkyw')+parseInt(this.renewList.less_amount/this.renewParams.Multiple);
                        }else{
							this.avLimit=this.$t('netnew.dqkyw')+"0"
                        }
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },






        	back(){
        		history.back();
        	},
        	getRobotbd(){
        		var params={}
        		params.instance_id=this.rbtDetailParm.InstanceId
        		getRobotbd(params).then(data => {
                    if (data.code == 200) {
                       this.rbdList=data.data;
                    } else {
                      this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
        	},
        	getRobotpd(){
        		var params={}
        		params.instance_id=this.rbtDetailParm.InstanceId
        		getRobotpd(params).then(data => {
                    if (data.code == 200) {
                    	this.returnList=data.data
                    } else {
                      this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
        	},
        	getRobotod(){
        		var params={}
        		params.instance_id=this.rbtDetailParm.InstanceId
        		getRobotod(params).then(data => {
                    if (data.code == 200) {
                    	if(data.data){
                    		this.orderList=data.data;
                    		if(this.orderList){
								this.perpage=Math.ceil(this.orderList.length/5);
	                    	}
                    		if(this.orderList.length>5){
                    			for(let i=0;i<5;i++){
		                    		this.trueList.push(this.orderList[i]);
		                    	}
                    		}else{
                    			for(let i=0;i<this.orderList.length;i++){
		                    		this.trueList.push(this.orderList[i]);
		                    	}
                    		}

                    	}else{
                    		this.orderList=[]
                    	}
                    } else {
                      this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
        	},
        	withDrawRecord(){
        		this.trueList=[];

        		for(var i=(this.CurrentPage-1)*5;i<this.CurrentPage*5;i++){
        			if(i>=this.orderList.length){

        			}else{
        				this.trueList.push(this.orderList[i]);
        			}

        		}

        	},
        	getRobotord(id){
        		var params={}
        		params.order_id=id
        		getRobotord(params).then(data => {
                    if (data.code == 200) {
                    	this.orderdList=data.data;
                    } else {
                      this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
        	},
        	changeMktab(id){
        		this.mkTab=id;
        		if(id==3){
        			this.robotBacktestDetail();
        		}
        	},
        	getRobotBase(){
        		var params={}
            	params.robotId=this.rbtDetailParm.RobotId;
				getRobotBase(params).then(res => {
					if(res.code == 200) {
						this.robotBaseInfo = res.data;
					}else{
						this.$toast.center(res.msg)
					}
				});
			},
            getTradeLog(page) {
                this.tradeParm.InstanceId = this.rbtDetailParm.InstanceId;
                this.tradeParm.page = page;
                this.tradeParm.size = 10;
                getTradeLog(this.tradeParm).then(data => {
                    if (data.code == 200) {
                        this.tradeList = data.data.data;
						if(this.tradeList!=null){
							for(var i=0;i<this.tradeList.length;i++){
								this.tradeList[i].OrderSide=this.tradeList[i].OrderSide.substring(0,1).toUpperCase()+this.tradeList[i].OrderSide.substring(1);
							}
						}
						this.amount=data.data.count;
						this.CurrentPage=data.data.page;
						this.perpage=Math.ceil(data.data.count/10);
                    } else {
                        this.tradeList = [];
                    }
                });
            },
            getTradeLogD(page){
            	this.tradeParm.InstanceId = this.rbtDetailParm.InstanceId;
                this.tradeParm.page = page;
                this.tradeParm.size = 10;
                getTradeLogD(this.tradeParm).then(data => {
                    if (data.code == 200) {
                        this.tradeList2 = data.data.data;
						if(this.tradeList2!=null){
							for(var i=0;i<this.tradeList2.length;i++){
								this.tradeList2[i].OrderSide=this.tradeList2[i].OrderSide.substring(0,1).toUpperCase()+this.tradeList2[i].OrderSide.substring(1);
							}
						}
						this.amount2=data.data.count;
						this.CurrentPage2=data.data.page;
						this.perpage2=Math.ceil(data.data.count/10);
                    } else {
                        this.tradeList = [];
                    }
                });
            },
            getSignal(){
            	var params={}
            	params.instance_id=this.rbtDetailParm.InstanceId
            	params.type=this.type
            	   getSignal(params).then(data => {
            	   		this.signalList=[];
                    if (data.code == 200) {
                    	var forlength=0;
                    	if(data.data){
		                	if(data.data.length<8){
		                		forlength=data.data.length;
		                	}else{
		                		forlength=8
		                	}
                    	}
                      for(var i=0;i<forlength;i++){
                      	this.signalList.push(data.data[i]);
                      }
                    } else {
                        this.tradeList = [];
                    }
                });
            },
            getRunLog(){
            	var params={}
            	params.instance_id=this.rbtDetailParm.InstanceId
            	   getRunLog(params).then(data => {
            	   		this.RunList=[];
                    if (data.code == 200) {
                    	this.RunList=data.data;
                    } else {

                    }
                });
            },
            getRbtDetail() {
                getRobotDetail(this.rbtDetailParm).then(data => {
                    if (data.code == 200) {
//					console.log(data);
                        this.rbtList = data.data;
                    } else {
                        // 	this.$toast.center(data.message);
                        //   console.log(data)
                    }
                });
            },
            changeCheck(){
            	this.checked=!this.checked
            	if(this.checked){
            		this.type=""
            	}else{
            		this.type="all"
            	}
            	this.getSignal();
            },
            robotBacktestDetail() {
            	var params={}
            	params.robotId=this.rbtDetailParm.RobotId;
            	this.jzz=true;
				this.xdata=[];
				this.ydata=[];
				robotBacktestDetail(params).then(res => {
					this.jzz=false;
					if(res.code == 200) {
						this.robotInfo = res.data;
						this.xdata=[];
						this.ydata=[];
						for(var i = 0; i < this.robotInfo.Day.length; i++) {
								this.xdata.push((this.robotInfo.Day[i].cumprod_return*100).toFixed(3));
								this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Day[i].create_time));
						}
						this.drawLine();

					}
				});
			},
			changeLC(id){
				this.lineCheck=id;
				if(id==1){
					this.xdata=[];
					this.ydata=[];
					for(var i = 0; i < this.robotInfo.Day.length; i++) {
								this.xdata.push((this.robotInfo.Day[i].cumprod_return*100).toFixed(3));
								this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Day[i].create_time));
						}
						this.drawLine();

				}else if(id==2){
					this.xdata=[];
					this.ydata=[];
					for(var i = 0; i < this.robotInfo.Week.length; i++) {
								this.xdata.push((this.robotInfo.Week[i].cumprod_return*100).toFixed(3));
								this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Week[i].create_time));
						}
						this.drawLine();
				}else{
					this.xdata=[];
					this.ydata=[];
					for(var i = 0; i < this.robotInfo.Base.length; i++) {
								this.xdata.push((this.robotInfo.Base[i].cumprod_return*100).toFixed(3));
								this.ydata.push(this.$options.filters.chartsData(this.robotInfo.Base[i].create_time));
						}
						this.drawLine();
				}
			},
            getProfit() {
                getProfit(this.rbtDetailParm).then(data => {
                    if (data.code == 200) {
                        this.profitList = data.data;
                        this.proxData = [];
                        this.proyData = [];
                        for (var i = 0; i < this.profitList.length; i++) {
                            this.proxData.push(this.$options.filters.chartsData2(this.profitList[i].ActiveTime));
                            this.proyData.push((this.profitList[i].ProfitPercent*100).toFixed(3));
                        }
                        this.proxData.reverse();
                        this.proyData.reverse();
                        this.drawLine2()
                    } else {
						this.proxData = [];
						this.proyData = [];
                        //	this.$toast.center(this.$t('msg.msg'+data.code));
                        // console.log(data)
                    }
                });
            },
            drawLine() {
				let myChart = this.$echarts.init(document.getElementById('container'))
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
		                color:'#718EBD'
		            },
                    color: ['#95D6FF', '#7ea8e1', '#65cea7'],
                    grid: {
                        left: '1%',
                        right: '1%',
                         bottom: '1%',
                        top : "5%",
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
                        type: 'line',
                        smooth:true,
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
                        }
                    }]
				});
			},
            drawLine2() {//机器人收益曲线
                let myChart2 = this.$echarts.init(document.getElementById('container2'))
                myChart2.setOption({
                    title: {
                        text: this.$t('net.totalprofitrate'),
                        textStyle:{
                        	 color:"#ffffff"
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
						formatter: '{b}<br/>{a}:\n{c}%'

                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: this.proxData,
                        axisLine: {
			                lineStyle: {
			                    color: "#FFFEFE",
			                }
			            }

                    },
                    textStyle:{
		                color:'#718EBD'
		            },
                    grid: {
                        left: '0%',
                        right: '5%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
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


                    },
                    series: [{
                    	name: 'cumulative return',
                        data: this.proyData,
                        type: 'line',
                        smooth:true,
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
                        }

                    }]
                });
            },
        },
        props: {
            robot_img: {
                type: String,
                default: require("@/assets/img/231946457712344710.jpg")
            },
            detail_icon1: {
                type: String,
                default: require("@/assets/img/myrobot/myrobots_detail_icon1@2x.png")
            },
            detail_icon2: {
                type: String,
                default: require("@/assets/img/myrobot/myrobots_detail_icon2@2x.png")
            },

        }
    }
</script>

<style>
	.table-bordered tbody tr td{
		color: #fff !important;
	}
	.rbdbtn{
		min-width: 140px;
	    height: 45px;
	    background: none;
	    line-height: 33px !important;
	    font-size: 18px;
	    font-weight: 500;
	    color: #ffffff;
	    margin-right: 10px;
	}
    .panel {
        background: none !important;
    }

    .instance_overview {
        padding-top: 20px !important;
    }

    .instance_overview .col-lg-4 {
        padding: 0;
    }

    .instance_overview .col-lg-2 {
        padding: 0;
    }

    .instance_overview i {
        font-style: normal;
        font-family: SFProText-Medium;
        font-size: 14px;
        color: #fff;
        letter-spacing: 0;
        font-weight: 700;
    }

    .instance_overview label {
        font-style: normal;
        ont-family: SFProText-Regular;
        font-size: 16px;
        color: #718EBD;
        letter-spacing: 0;
        font-weight: 300;
        width: 120px;
    }

    .robot_avatar {
        padding: 0;
    }

    .robot_avatar img {
        border-radius: 50%;
        width: 116px;
        height: 116px;
    }

    .des_item {
        margin-bottom: 18px;
    }

    .line-type{
    	line-height: 60px;
    	font-size: 14px;
    	color: #718EBD;
    	cursor: pointer;
    }
    .line-checked{
    	color: #fff !important;
    }

    .block_box {
        clear: left;
        padding-top: 40px;
        padding-bottom: 40px;
    }

    .block_box .col-lg-4 {
        padding: 0;
    }

    .block_box .col-lg-8 {
        padding: 0;
    }

    .left_item_box1 {
        width: 100%;
        height: 135px;

        margin-bottom: 16px;

        background: url(../assets/img/rbtd1@2x.png) no-repeat;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);

    }
    .left_item_box2 {
        width: 100%;
        height: 135px;

        margin-bottom: 16px;

        background: url(../assets/img/rbtd2@2x.png) no-repeat;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);

    }
    .left_item_box3 {
        width: 100%;
        height: 135px;

        margin-bottom: 16px;

        background: url(../assets/img/rbtd3@2x.png) no-repeat;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);

    }
    .left_item_box4 {
        width: 100%;
        height: 135px;

        margin-bottom: 16px;

        background: url(../assets/img/rbtd4@2x.png) no-repeat;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);

    }


    .left_item_box .col-lg-3 {
        padding: 0;
    }

    .left_item_box .col-lg-9 {
        padding: 0;
    }

    .icon_item img {
        width: 90%;
        margin-left: 3px;
        margin-top: 10px;
    }

    .t1 {
        font-size: 14px;
        color: #7FCEFF;
        letter-spacing: 0;
        font-weight: 700;
        margin-top: 25px;
    }

    .t2 {

        font-size: 14px;
        color: #7FCEFF52;
        letter-spacing: 0;
        margin-bottom: 15px;
    }
	.item_content{
		margin-left: 125px;
		padding-left:0 !important ;
	}
    .item_content label {
       /* font-family: SFProDisplay-Bold;*/
        font-size: 24px;
        letter-spacing: 0;
    }

    .item_content i {
        font-style: normal;
        /*font-family: SFProDisplay-Bold;*/
        font-size: 24px;

        letter-spacing: 0;
        font-weight: 700;
    }

    .t3 {
        color: #7FCEFF;
    }

    .t4 {
        color: #7FCEFF;
    }

    .right_chart_box {

        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        height: 495px;
        margin-bottom: 80px;
    }

    .clear_left {
        clear: left;
    }

    .td_status{

        font-size: 14px;
        color: #909499 !important;
        letter-spacing: 0;
    }
    .pagination{
    	float: none !important;
    }
	.robot_detailt_cont .mdbox-title{
		font-size:14px;
	}
	.robot_detailt_cont .mdbox-text{
		font-weight: 500!important;
		font-size:14px!important;
	}
	.robot_detailt_cont .mdbox-text td{
		vertical-align: middle;
	}
	.robot_detailt_cont .select_sort{
		color:#fff;
		background: url("../assets/img/tab_bg.png") no-repeat center bottom;
		background-size: 100% 100%;
	}
	.robot_detailt_cont .sort_item{
		height:50px;
		float:left;
		margin-right:46px;
		padding:5px 8px 0;
		cursor: pointer;
		color:#718EBD;
	}


</style>
