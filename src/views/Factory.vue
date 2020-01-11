<template>
    <section class="mail-list">
        <div class="lg-row robot-box">
            <div class="factory_box padding_left">
                <section style="">
					<div style="margin-bottom:20px;">
						<span class="factory_title" style="line-height: 25px;padding-left:50px;">{{$t('netnew.MyRobotSide6')}}</span>
						<span class="create_robt_btn" @click="toCreateRobot(0)">{{$t('netnew.MyRobotSide2')}}</span>
						<span class="fac-btn" @click="toRbtCompare"><img src="../assets/img/book.png" style="margin-right: 10px;">{{$t('netnew.rbtbj')}}</span>
					</div>
                    <div style="padding-bottom: 60px;position:relative;min-height:740px;">
                        <div style="text-align: center;font-size:14px;color:#fff;padding:50px 0;position:absolute;top:200px;left:0;right:0;" v-if="ifLoading">{{$t('netnew.jzz')}}...</div>
                        <table class="table table-bordered general-table">
                            <thead>
                            <tr>
								<th>{{$t('netnew.Status')}}</th>
                                <th>{{$t('netnew.RobotName')}}</th>
                                <!--<th class="long_td">{{$t('netnew.Description')}}</th>-->
                                <!--<th>Trade Type</th>-->
                                <th>{{$t('net.tradetype')}}</th>
								<th>{{$t('netnew.StandardCoin')}}</th>
                                <th>{{$t('netnew.sjzt')}}</th>
                                <th>{{$t('netnew.CreateTime')}}</th>
                                <th>{{$t('netnew.ExpireDate')}}</th>
                                <th  class="long_td">{{$t('netnew.Actions')}}</th>
                            </tr>
                            </thead>
                            <tbody>


                            <tr v-for="(list,index) in factoryList">
								<td><a v-bind:class="{'label-primary':list.Status==1,'label-primary2':list.Status!=1}">{{list.Status|cptStatus}}</a></td>
                                <td>{{list.Name}}</td>
                                <!--<td>{{list.Introduction}}</td>-->
								<!--<td>{{list.TradeType|tradeType}}</td>-->
                                <td>{{list.RobotType|tradeType}}</td>
								<td>{{list.BaseCurrency}}</td>
                                <td>{{list.release_status|releaseStatus}}</td>
                                <td>{{list.CreateTime|chartsData}}</td>
                                <td>{{list.ExpireDate|time}}</td>
                                <td>
                                	<div class="action_item" href="#factryModal" data-toggle="modal" @click="toCreateIs(list)" v-show="list.Status!=2">{{$t('netnew.Operate')}}</div>
                                	<div class="action_item" v-show="!list.IsRelease&&list.release_status!=2&&list.release_status!=3&&list.Status!=2" href="#factryModal" data-toggle="modal" @click="toOnShelf(list)">{{$t('netnew.onshelf')}}</div>
									<div class="action_item" @click="torenew(list)"  href="#factryModal" data-toggle="modal">{{$t('netnew.xufei')}}</div>
									<div class="action_item" @click="toMarkets(list)" v-show="list.Status!=2">{{$t('net.detail')}}</div>
									<div class="action_item" @click="toBacktest(list.RobotId)" v-show="list.Status!=2">{{$t('netnew.Backtest')}}</div>
									<div class="action_item" @click="factoryDel(list.RobotId)" v-show="list.release_status==0||list.release_status==4">{{$t('netnew.Delete')}}</div>
                                    <div class="action_item" @click="rbtOffLoading(list.RobotId)" v-show="list.IsRelease" >{{$t('netnew.Removed')}}</div>


                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div class="alert alert-warning fade in" v-show="factoryList.length==0 && !ifLoading">
	                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
	                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
	                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
	                    </div>
						<div class="pigna" v-if="factoryList.length>0" style="width: 100%;text-align: center;position:absolute;bottom:4px;left:0;right:0">
							<paginate v-model="CurrentPage" :page-count="perpage" :click-handler="withDrawRecord" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
							</paginate>
						</div>
                    </div>
                    <div class="col-lg-10 bottom_box">
                        <!--<button type="submit" class="btn btn-primary run_all_btn" href="#factryModal" data-toggle="modal" @click="toCreateIs()">Create instance</button>-->
                        <!--<button  class="delete_select_btn" @click="delAll">{{$t('netnew.Delete')}}</button>-->
                    </div>
                </section>

            </div>
        </div>
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="factryModal" class="modal fade" style="z-index: 5001;">
			<!--<button id="close" type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>-->
			<div class="modal-dialog" v-show="factoryModal==1">
				<div class="modal-content login-box">

					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 50px;">{{$t('netnew.Operate')}}</span>
						<button type="button" class="close" style="position: absolute;right: 5px;top: 5px; display: none;" data-dismiss="modal" aria-hidden="true"><img :src="close"/></button>
					</div>
					<div style="padding-left: 40px;padding-right: 40px;">
						<div class="lg-width" style="width: 100%;">
							<div class="lg-width" style="width: 100%;margin-top: 10px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.jqrshil')}}</span>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 5px;text-align: left;border-bottom:1px solid #718EBD;">
								<select autocomplete="off" class="exchange" style="width: 100%;line-height: 30px;border: none;background: none;font-size: 16px;color: #fff;" @change="initAccount" v-model="cisParams.account_id">
									<option style="text-align: center;background: #006DCC;" v-if="accountList.length==0" value="" >{{$t('netnew.zwzh')}}</option>
									<option style="text-align: center;background: #006DCC;" v-for="items in accountList" :value="items.Id">{{ items.ExchangeAccountName }}</option>
								</select>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 10px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.jqrczfe')}}（{{$t("person.limitFive")}}）</span>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 5px;text-align: left;">
								<span style="font-size: 16px;color: #718EBD;line-height: 38px;">{{$t('netnew.yxfe')}}</span>
								<input type="number" min="0" max="5" class="num-change" @change="getPrice"  v-model="cisParams.amount"  />
								<span style="font-size: 16px;color: #718EBD;line-height: 38px;">×{{multiples}}{{baseToken}}</span>
							</div>

							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.jqrslky')}}</span>
								<span style="font-size:16px;color: #fff;margin-left: 10px;">{{remainDay}} {{$t('market.day')}}</span>
							</div>

							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.qsrxyyx')}}</span>
								<input type="number" min="0" v-bind:max="remainDay"  class="num-change" @change="getPrice" v-model="cisParams.days"  />
								<span style="font-size:16px;color: #fff;margin-left: 10px;">{{$t('market.day')}}</span>
							</div>

							<div class="lg-width" style="width: 100%;text-align: left;margin-top: 15px;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.jqrslyxf')}}</span>
								<i class="fa fa-question-circle" aria-hidden="true" style="margin-left: 10px;color:#718EBD ;cursor: pointer;" @click="helpShow=!helpShow"></i>
								<div class="qsbg" v-show="helpShow">
									1{{$t('netnew.Share')}}/{{$t('market.day')}}={{quotaPrice}}NET
								</div>
							</div>

							<div class="lg-width" style="width: 100%;margin-top: 25px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{cisParams.amount}}{{$t('netnew.Share')}}x{{quotaPrice}}NET/{{$t('market.day')}}x{{cisParams.days}}{{$t('market.day')}}={{cisParams.totalPrice}}NET</span>
							</div>

							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.dqye')}}</span>
								<span style="font-size:16px;color: #fff;margin-left: 10px;">{{netValue}} NET</span>
								<span style="font-size:16px;color: #718EBD;float: right;cursor: pointer;text-decoration: underline;">{{$t('netnew.chzhi')}}</span>
							</div>
						</div>


					</div>

					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 25px;text-align: center;">

						<button class="btn rbdbtn btn-md" type="button" style="position: relative;height: 55px; min-width: 170px;padding:0 4px;"  @click="startIs" :disabled="cisParams.amount<=0||cisParams.amount>5||cisParams.days<=0||cisParams.days>remainDay">
							<span style="display: block;">{{$t('market.confirm')}}</span>
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
						</button>
					</div>

				</div>
			</div>
			<div class="modal-dialog" v-show="factoryModal==2">
				<div class="modal-content login-box" style="position: relative;height: 575px;">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.onshelf')}}</span>
						<button type="button" class="close" style="position: absolute;right: 5px;top: 5px; display: none;" data-dismiss="modal" aria-hidden="true"><img :src="close"/></button>
					</div>
					<div style="padding-left: 50px;padding-right: 50px;">
						<div class="lg-width" style="width: 100%;">
							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.zjjqrsj')}}</span>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.jqrsj')}}</span>
								<input type="number" class="num-change" @change="getComein" v-bind:min="lowest"  v-model="onshelfParams.unit_price"  />
								<span style="font-size:16px;color: #718EBD;">NET/{{$t('netnew.Share')}}/{{$t('market.day')}}</span>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.kcmtfw')}}{{comein}}NET/{{$t('netnew.Share')}}/{{$t('market.day')}}</span>
								<i class="fa fa-question-circle" aria-hidden="true" style="margin-left: 10px;color:#718EBD ;cursor: pointer;" @click="oshelp1=!oshelp1"></i>
								<img src="../assets/img/osbg1@2x.png" v-show="oshelp1" style="margin-top: -8px;margin-left: 1px;">
								<div class="osbg1" v-show="oshelp1">
									{{$t('netnew.sjsr')}}={{$t('netnew.jqrsj')}}-{{$t('netnew.ptfwf')}}<br>
									{{$t('netnew.ptfwf')}}={{$t('netnew.jqrsj')}}x{{ratio*100}}%（{{$t('person.last')}}{{lowest}}NET）
								</div>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.ksjqrfe')}}</span>
								<i class="fa fa-question-circle" aria-hidden="true" style="margin-left: 10px;color:#718EBD ;cursor: pointer;" @click="oshelp2=!oshelp2"></i>
								<div class="osbg2" v-show="oshelp2">
									{{$t('person.rbtAllFe')}}：{{$t('netnew.syyhsx')}}<br>
									{{$t('person.personMast')}}：{{$t('netnew.jqrsyt')}}。<br>
									{{$t('person.oneFe')}}={{multiples}}{{baseToken}}
								</div>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('person.rbtAllFe')}}</span>
								<input type="number" class="num-change" min="0" max="500"  v-model="onshelfParams.max_quota"  />
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.Share')}}</span>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('person.personMast')}}</span>
								<input type="number" class="num-change" min="0"  max="5" v-model="onshelfParams.quota"  />
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.Share')}}</span>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('robotdetails.Robotintroduction')}}</span>
							</div>
							<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
								<textarea class="os-textarea" v-model="onshelfParams.introduction" maxlength="255" :placeholder="$t('netnew.qjdms')"></textarea>
							</div>
						</div>

					</div>

					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 25px;text-align: center;">

						<button class="btn rbdbtn btn-md" type="button" style="position: relative;height: 55px; min-width: 170px;padding:0 4px;"  @click="RobotOnshelf" :disabled="onshelfParams.max_quota<=0||onshelfParams.max_quota>500||onshelfParams.quota<=0||onshelfParams.quota>5||onshelfParams.unit_price<lowest">
							<span style="display: block;">{{$t('netnew.osapp')}}</span>
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
						</button>
					</div>



				</div>
			</div>

			<div class="modal-dialog" v-show="factoryModal==3" style="width: 991px!important;margin-top: 100px!important;">
				<div class="modal-content login-box" style="position: relative;height: 749px;">
					<div class="lg-width" style="width: 100%;text-align: center;border-bottom: 1px solid #ffffff12;">
						<span style="color:#718EBD;font-size: 18px;line-height: 67px;">{{$t('netnew.xufei')}}</span>
						<button type="button" class="close" style="position: absolute;right: 5px;top: 5px; display: none;" data-dismiss="modal" aria-hidden="true"><img :src="close"/></button>
					</div>

					<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;padding-left: 50px;padding-right: 50px;">
						<span style="font-size:16px;color: #718EBD;">{{$t('netnew.BasicInformation')}}</span>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 15px;padding-left: 50px;padding-right: 50px;">
						<div class="lg-width" style="width: 16.6%;font-size: 16px;color:#718EBD ;text-align: left;">{{$t('netnew.RobotName')}}</div>
						<div class="lg-width" style="width: 18.6%;font-size: 16px;color:#fff;text-align: left;">{{renewParams.Name}}</div>
						<div class="lg-width" style="width: 16.6%;font-size: 16px;color:#718EBD ;text-align: left;">{{$t('netnew.StandardCoin')}}</div>
						<div class="lg-width" style="width: 16.6%;font-size: 16px;color:#fff ;text-align: left;">{{renewParams.BaseCurrency}}</div>
						<div class="lg-width" style="width: 16.6%;font-size: 16px;color:#718EBD ;text-align: left;">{{$t('person.ifSja')}}</div>
						<div class="lg-width" style="width: 14.6%;font-size: 16px;color:#fff ;text-align: left;">{{renewParams.release_status|releaseStatus}}</div>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 15px;padding-left: 50px;padding-right: 50px;">
						<div class="lg-width" style="width: 16.6%;font-size: 16px;color:#718EBD ;text-align: left;">{{$t('net.tradetype')}}</div>
						<div class="lg-width" style="width: 18.6%;font-size: 16px;color:#fff;text-align: left;">{{renewParams.RobotType|tradeType}}</div>
						<div class="lg-width" style="width: 16.6%;font-size: 16px;color:#718EBD ;text-align: left;">{{$t('netnew.ExpireDate')}}</div>
						<div class="lg-width" style="width: 16.6%;font-size: 16px;color:#fff ;text-align: left;">{{renewParams.ExpireDate|time}}</div>
						<div class="lg-width" style="width: 16.6%;font-size: 16px;color:#718EBD ;text-align: left;">{{$t('netnew.jqrhjcb')}}</div>
						<div class="lg-width" style="width: 14.6%;font-size: 16px;color:#fff ;text-align: left;">{{renewInfo.cost}} NET/{{$t('market.day')}}</div>
					</div>

					<div class="lg-width" style="width: 100%;margin-top: 15px;border-top: 1px solid #ffffff1c;border-bottom: 1px solid #ffffff1c;padding-bottom: 15px;padding-left: 50px;padding-right: 50px;">
						<div class="clearfix" style="width:100%;">
							<div class="lg-width" style="width: 16.6%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('market.Numberdays')}}</span>
							</div>
							<div class="lg-width" style="width: 18.6%;margin-top: 15px;text-align: left;">
								<a class="pair-time" v-bind:class="{'pair-selected':pairSelected==1}" @click="choseTime(1)">{{$t('market.aWeek')}}</a>
								<a class="pair-time" style="margin-left: 12px;" v-bind:class="{'pair-selected':pairSelected==2}" @click="choseTime(2)">{{$t('market.aMonth')}}</a>
								<a class="pair-time" style="margin-left: 12px;" v-bind:class="{'pair-selected':pairSelected==3}" @click="choseTime(3)">{{$t('market.aYear')}}</a>
							</div>
							<!--
							<span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
	                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
	                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>-->
							<div class="lg-width" style="min-width: 16.6%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;" v-show="$i18n.locale=='zh-CN' || $i18n.locale=='ko'">{{$t('netnew.xfhdqrq')}}</span>
								<span style="font-size:16px;color: #718EBD;padding-right:4px;" v-show="$i18n.locale=='en-US'">{{$t('netnew.xfhdqrq')}}</span>
							</div>
							<div class="lg-width" style="width: 44%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #fff;">{{finshDay|time}}</span>
							</div>
						</div>
						<div class="clearfix" style="width:100%;">
							<div class="lg-width" style="width: 16.6%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.xfze')}}</span>
							</div>
							<div class="lg-width" style="width: 83.4%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #fff;">{{totalRenewNet}}NET</span>
							</div>
						</div>
					</div>
					<div class="lg-width" style="width: 100%;border-bottom: 1px solid #ffffff1c;padding-bottom: 15px;padding-left: 50px;padding-right: 50px;">
						<!--组件信息-->
						<div class="lg-width" style="width: 100%;margin-top: 15px;text-align: left;">
							<span style="font-size:16px;color: #718EBD;">{{$t('netnew.ComponentInfo')}}</span>
						</div>
						<div class="lg-width" style="width: 100%; padding-right: 14px;">
							<div class="lg-width" style="width: 18.2%;margin-top: 15px;color: #718EBD;font-size: 16px;">
								{{$t('netnew.ComponentName')}}
							</div>
							<div class="lg-width" style="width: 14.2%;margin-top: 15px;color: #718EBD;font-size: 16px;">
								{{$t('netnew.ComponentType')}}
							</div>
							<div class="lg-width" style="width: 12.2%;margin-top: 15px;color: #718EBD;font-size: 16px;">
								{{$t('netnew.ComponentName')}}
							</div>
							<div class="lg-width" style="width: 14.2%;margin-top: 15px;color: #718EBD;font-size: 16px;">
								{{$t('netnew.ExpireDate')}}
							</div>
							<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #718EBD;font-size: 16px;">
								{{$t('netnew.syts')}}
							</div>
							<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #718EBD;font-size: 16px;">
								{{$t('market.Numberdays')}}
							</div>
							<div class="lg-width" style="width: 14.2%;margin-top: 15px;color: #718EBD;font-size: 16px;">
								{{$t('netnew.ComponentName')}}
							</div>
						</div>
						<div class="lg-width" style="width: 100%; height: 150px;overflow-y: scroll;">
							<template v-for="(list,index) in renewList">
								<div class="lg-width" style="width: 18.2%;margin-top: 15px;color: #fff;font-size: 16px;">
									<div style="white-space:nowrap;overflow: hidden;width: 90%;text-overflow:ellipsis;" :title="list.component_name" v-show="$i18n.locale=='zh-CN'">{{list.component_name}}</div>
									<div style="white-space:nowrap;overflow: hidden;width: 90%;text-overflow:ellipsis;" :title="list.component_name" v-show="$i18n.locale!='zh-CN'">{{list.component_name_en?list.component_name_en:list.component_name}}</div>
								</div>
								<div class="lg-width" style="width: 14.2%;margin-top: 15px;color: #fff;font-size: 16px;">
									<div style="white-space:nowrap;overflow: hidden;width: 90%;text-overflow:ellipsis;" :title="list.component_type" v-show="$i18n.locale=='zh-CN'">{{list.component_type}}</div>
									<div style="white-space:nowrap;overflow: hidden;width: 90%;text-overflow:ellipsis;" :title="list.component_type" v-show="$i18n.locale!='zh-CN'">{{list.component_type_en?list.component_type_en:list.component_type}}</div>
								</div>
								<div class="lg-width" style="width: 12.2%;margin-top: 15px;color: #fff;font-size: 16px;">
									{{list.component_price}} NET/{{$t('market.day')}}
								</div>
								<div class="lg-width" style="width: 14.2%;margin-top: 15px;color: #fff;font-size: 16px;">
									{{list.expire_time|time}}
								</div>
								<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #fff;font-size: 16px;">
									{{list.remain_time}} {{$t('market.day')}}
								</div>
								<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #fff;font-size: 16px;">
									{{list.renewday}} {{$t('market.day')}}
								</div>
								<div class="lg-width" style="width: 14.2%;margin-top: 15px;color: #fff;font-size: 16px;">
									{{list.renewPrice}} NET/{{$t('market.day')}}   <i class="fa fa-angle-down" aria-hidden="true" v-show="list.strateties&&showDetail!=index" style="cursor: pointer;" @click="changeshow(index)" ></i>
															   <i class="fa fa-angle-up" aria-hidden="true" v-show="list.strateties&&showDetail==index" style="cursor: pointer;" @click="changeshow(index)" ></i>
								</div>
								<div v-show="showDetail==index">
										<div class="lg-width" style="width: 17.2%;margin-top: 15px;color: #718EBD;font-size: 14px;margin-left: 1%;">
											{{$t('netnew.strategyName')}}
										</div>
										<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #718EBD;font-size: 14px;margin-left: 1%;">
											{{$t('netnew.StrategyType')}}
										</div>
										<div class="lg-width" style="width: 11.2%;margin-top: 15px;color: #718EBD;font-size: 14px;margin-left: 1%;">
											{{$t('netnew.ComponentName')}}
										</div>
										<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #718EBD;font-size: 14px;margin-left: 1%;">
											{{$t('netnew.ExpireDate')}}
										</div>
										<div class="lg-width" style="width: 12.2%;margin-top: 15px;color: #718EBD;font-size: 14px;margin-left: 1%;">
											{{$t('netnew.syts')}}
										</div>
										<div class="lg-width" style="width: 12.2%;margin-top: 15px;color: #718EBD;font-size: 14px;margin-left: 1%;">
											{{$t('market.Numberdays')}}
										</div>
										<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #718EBD;font-size: 14px;margin-left: 1%;">
											{{$t('netnew.ComponentName')}}
										</div>
									<template v-for="list2 in list.strateties">
										<div class="lg-width" style="width: 17.2%;margin-top: 15px;color: #fff;font-size: 14px;margin-left: 1%;">
											<div style="white-space:nowrap;overflow: hidden;width: 90%;text-overflow:ellipsis;" :title="list2.component_name">{{list2.component_name}}</div>
										</div>
										<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #fff;font-size: 14px;margin-left: 1%;">
											<div style="white-space:nowrap;overflow: hidden;width: 90%;text-overflow:ellipsis;" :title="list2.component_type">{{list2.component_type|component}}</div>
										</div>
										<div class="lg-width" style="width: 11.2%;margin-top: 15px;color: #fff;font-size: 14px;margin-left: 1%;">
											{{list2.component_price}} NET/{{$t('market.day')}}
										</div>
										<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #fff;font-size: 14px;margin-left: 1%;">
											{{list2.expire_time|time}}
										</div>
										<div class="lg-width" style="width: 12.2%;margin-top: 15px;color: #fff;font-size: 14px;margin-left: 1%;">
											{{list2.remain_time}} {{$t('market.day')}}
										</div>
										<div class="lg-width" style="width: 12.2%;margin-top: 15px;color: #fff;font-size: 14px;margin-left: 1%;">
											{{list2.renewday}} {{$t('market.day')}}
										</div>
										<div class="lg-width" style="width: 13.2%;margin-top: 15px;color: #fff;font-size: 14px;margin-left: 1%;">
											{{list2.renewPrice}} NET/{{$t('market.day')}}
										</div>
									</template>
								</div>
							</template>
						</div>

					</div>
					<div class="lg-width" style="padding-left: 50px;padding-right: 50px;width: 100%;">
						<div style="clear:both;">
							<div class="lg-width" style="width: 16.6%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.xfze')}}</span>
							</div>
							<div class="lg-width" style="width: 83.4%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #fff;">{{totalRenewNet}}NET</span>
							</div>
						</div>

						<div style="clear:both;">
							<div class="lg-width" style="width: 16.6%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #718EBD;">{{$t('netnew.dqye')}}</span>
							</div>
							<div class="lg-width" style="width: 83.4%;margin-top: 15px;text-align: left;">
								<span style="font-size:16px;color: #fff;">{{netValue}}NET</span>
							</div>
						</div>
					</div>
					<div class="lg-width" style="width: 100%;margin-top: 10px;margin-bottom: 0px;position: absolute;left: 0;bottom: 25px;text-align: center;">
						<button class="btn rbdbtn btn-md" type="button" style="position: relative;height: 55px; min-width: 170px;padding:0 4px;" @click="renewtodo(renewParams.RobotId)" >
							<span style="display: block;">{{$t('market.confirm')}}</span>
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 1;" src="../assets/img/zcbtn@2x.png" >
						</button>
					</div>
				</div>
			</div>
		</div>
    </section>
</template>

<script>
    import { getFactoryData ,getUserInfo,factoryDel,getAcount,startIs,initAccount,RobotOnshelf,urbtRenew,freshRbt,rbtOffLoading,robotStoreList,getRenewInfo,renewtodo} from '../api/api';
    import swal from 'sweetalert';
    export default {
    	props:{
    		close:{
				type: String,
				default: require("@/assets/img/close.png")
			},
    	},
        data() {
            return {
                ifLoading:true,
				CurrentPage: 1,
				perpage: 1,//总页数
				userType: "",
            	factoryModal:2,
                selectArr:[],
                rbtInfoParm:{page:1,size: 10},
                factoryList:[],
                accountList:[],
                multiples:"",
                baseToken:"",
                remainDay:"",
                helpShow:false,
                oshelp1:false,
                oshelp2:false,
                netValue:0,
                quotaPrice:0,
                ratio:0,
                totalRenewNet:0,
                lowest:0,
                comein:0,
                showDetail:-1,
                finshDay:"",
                quota:"",
                inrequest:false,
                pairSelected:1,
                renewParams:{},
                renewInfo:{},
                renewList:[],
                cisParams:{
                	robot_id:"",
                	account_id:"",
                	amount:0,
                	days:0,
                	totalPrice:0,
                },
                onshelfParams:{
                	robot_id:"",
                	unit_price:0,
                	quota:0,
                	introduction_cn:"",
                	introduction:"",
                	max_quota:0,

                }
            }
        },
        mounted() {
            this.getuseInfo();
        },
        methods: {
            getuseInfo(){
                getUserInfo(this.empty).then(data => {
                    if (data.success == 0) {
                        this.rbtInfoParm.user_id=data.data.userId;
						this.userType=data.data.userType;
						this.netValue=data.data.netValue;
                        this.getFactoryData();

                    } else {
                        this.$toast.center(data.message);
//	                console.log(data)
                    }
                });
            },
            renewtodo(id){
            	if(this.inrequest){
            		return false;
            	}
            	var params={}
            	if(this.pairSelected==1){
            		params.days=7
            	}else if(this.pairSelected==2){
            		params.days=30
            	}else{
            		params.days=365
            	}
            	params.robot_id=id;
            	swal({
				  	title: this.$t('netnew.ays')+"?",
				  	text: this.$t('netnew.ifxfRbt'),
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
				  	this.inrequest=true;
		            renewtodo(params).then(data => {

		                	if(data.code==200){
		                		this.$toast.center(this.$t('netnew.xfRbtSuc'));
		                		this.getuseInfo();
		                		$(".close").click();
		                		this.inrequest=false;
		                	}else{
		                		this.inrequest=false;
		                		this.$toast.center(this.$t('msg.msg'+data.code));

		                	}

		            });
				  }
				})

            },
            toRbtCompare(){//跳转到对比页面
				let routerdata = this.$router.resolve({
					name: "robotCompare" //此name就是基金对比页面path的name,在router里边配好的该页面的名字，这样直接就可以匹配到该页面的路径
				});
				let newhref = routerdata.href
				window.open(newhref, "_blank");
            },
            getFactoryData(){
                this.ifLoading = true
				robotStoreList(this.rbtInfoParm).then(res => {
                    if (res.code == 200) {
                        this.ifLoading = false
						if(res.data.data==null){
							this.CurrentPage = 1
							this.perpage = 0
							this.factoryList=[];
						}else{
							this.CurrentPage = res.data.page
							this.perpage = res.data.total_page
							this.factoryList=res.data.data;
						}
                    } else {
                        this.ifLoading = false
                        this.$toast.center(res.message);
                    }
                });
            },
			withDrawRecord(val) {//页码改变
            	this.rbtInfoParm.page = val
				this.getFactoryData()
			},
            rbtOffLoading(val){
            	swal({
				  	title: this.$t('netnew.ays')+"?",
				  	text: this.$t('netnew.ifXjRbt'),
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
	            	params.robot_id=val;
	            	params.off_type=false;
		            rbtOffLoading(params).then(data => {
		                	if(data.code==200){
		                		this.$toast.center(this.$t('netnew.robtXjSuc'));
		                		this.getFactoryData();
		                	}else if(data.code==101922){

		                	}else{
		                		this.$toast.center(this.$t('msg.msg'+data.code));

		                	}

		            });
				  }
				})



            },
            changeshow(index){
            	if(this.showDetail==index){
            		this.showDetail=-1;
            	}else{
            		this.showDetail=index;
            	}

            },
            urbtRenew(val){
				var params={}
				params.id=val
				urbtRenew(params).then(data => {
					if(data.code == 200) {
//						console.log(data);
						this.getFactoryData();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
			},
            selectAll(event) {
                var _this = this;
                if (!event.currentTarget.checked) {
                    this.selectArr = [];
                } else { //实现全选
                    this.selectArr = [];
                    for(var i=0;i<this.factoryList.length;i++){
                        this.selectArr.push(this.factoryList[i].Id);
                    }
                }
            },
            goEdit(val){
                this.$router.push({
                    name:"editRobot",
                    params:{
                        name:"editRobot",
                        id:val,
                        type:'edit'
                    }
                })
            },
            getPrice(){
            	this.cisParams.totalPrice=this.cisParams.amount*this.quotaPrice*this.cisParams.days;
            },
            freshRbt(val){
            	var params={};
            	params.id=val;
            	freshRbt(params).then(data => {
                    if (data.code == 200) {
//                      console.log(data);
						this.$toast.center(this.$t('msg.msgsucces'));
                        this.getFactoryData();
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            toBacktest(val){
//              this.$router.push('/robot/backtest')
                this.$router.push({
                    name:"backTest",
                    params:{
                        name:"backTest",
                        id:val,
                    }
                })
            },
            goView(val){
                this.$router.push({
                    name:"creatRobot",
                    params:{
                        name:"creatRobot",
                        id:val,
                        type:'view'
                    }
                })
            },
            goCreate(){
                this.$router.push({
                    name:"creatRobot",
                    params:{
                        name:"creatRobot",
                        id:'',
                        type:'create'
                    }
                })
            },
            factoryDel(val){
                var params="",
                    params=val;

            swal({
			  title: this.$t('netnew.ays')+"?",
			  text: this.$t('netnew.DeleteYourRobot')+"?",
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

                factoryDel(params).then(data => {

                    	if(data.code==200){
                    		this.$toast.center(this.$t('netnew.Robothasbeendeleted'));
                        	this.getFactoryData();
                    	}else{
                    		this.$toast.center(this.$t('msg.msg'+data.code));

                    	}

                });
			  }
			})


            },
            delAll(){
                factoryDel(this.selectArr).then(data => {
                    if (data.code == 200) {
                        console.log(data);
                        this.getFactoryData();
                    } else {
                        this.$toast.center(data.message);
                    }
                });
            },
            getRenewInfo(id){
            	var params={};
            	params.robot_id=id;
            	 getRenewInfo(params).then(data => {
                    if (data.code == 200) {
                        this.renewInfo=data.data;
                        this.renewList=data.data.list;
                        var totalNet=0;
                        for(var i=0; i<this.renewList.length;i++){
                        	if(new Date(this.renewList[i].expire_time).getTime()>=new Date(this.finshDay).getTime()){
                        		this.renewList[i].renewday=0
                        	}else{
                        		if(new Date().getTime()>=new Date(this.renewList[i].expire_time).getTime()){
                        			this.renewList[i].renewday=(new Date(this.finshDay).getTime()-new Date().getTime())/(1000*60*60*24);

                        		}else{
                        			this.renewList[i].renewday=(new Date(this.finshDay).getTime()-new Date(this.renewList[i].expire_time).getTime())/(1000*60*60*24);
                        		}
                        		this.renewList[i].renewday=this.renewList[i].renewday.toFixed(0);
                        	}
                        	if(this.renewList[i].strateties){
                        		for(var j=0;j<this.renewList[i].strateties.length;j++){
                        			if(new Date(this.renewList[i].strateties[j].expire_time).getTime()>=new Date(this.finshDay).getTime()){
		                        		this.renewList[i].strateties[j].renewday=0
		                        	}else{
		                        		this.renewList[i].strateties[j].renewday=(new Date(this.finshDay).getTime()-new Date(this.renewList[i].strateties[j].expire_time).getTime())/(1000*60*60*24);
		                        		this.renewList[i].strateties[j].renewday=this.renewList[i].strateties[j].renewday.toFixed(0)
		                        	}
		                        	this.renewList[i].strateties[j].renewPrice=this.renewList[i].strateties[j].renewday*this.renewList[i].strateties[j].component_price
                        		}


                        	}
                        	if(this.renewList[i].strateties){
                        		this.renewList[i].renewPrice=0
                    			for(var j=0;j<this.renewList[i].strateties.length;j++){

                    				this.renewList[i].renewPrice=this.renewList[i].renewPrice+this.renewList[i].strateties[j].renewPrice;
                    			}
                    		}else{
                    			this.renewList[i].renewPrice=this.renewList[i].renewday*this.renewList[i].component_price
                    		}
                        	totalNet=totalNet+this.renewList[i].renewPrice;
                        	this.renewList[i].showDetail=false;
                        }
                        this.totalRenewNet=totalNet;
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
            },
            torenew(val){
            	this.factoryModal=3;
            	this.pairSelected=1;
            	this.renewParams=val;
            	if(new Date(val.ExpireDate).getTime()>new Date(val.server_time).getTime()){
            		this.finshDay=new Date(val.ExpireDate).getTime()+(7*1000*24*60*60);
            		this.finstDay=new Date(this.finstDay);
            	}else{
            		this.finshDay=new Date(val.server_time).getTime()+(7*1000*24*60*60);
            		this.finstDay=new Date(this.finstDay);
            	}

            	this.getRenewInfo(val.RobotId);
            },
            toCreateIs(val){
//          	console.log(val);
				this.helpShow=false,
                this.oshelp1=false,
                this.oshelp2=false,
            	this.baseToken=val.BaseCurrency;
            	this.multiples=val.multiples;
            	this.remainDay=val.remain_days;
            	this.quotaPrice=val.limit_unit_price;
            	this.cisParams.robot_id=val.RobotId;
            	this.cisParams.days=0;
            	this.quota=val.quota;
            	this.cisParams.amount=0;
            	this.factoryModal=1;
				this.getAcount();
				this.inrequest=false;

            },
        	toOnShelf(val){
//          	console.log(val);
				this.helpShow=false,
                this.oshelp1=false,
                this.oshelp2=false,
            	this.baseToken=val.BaseCurrency;
            	this.multiples=val.multiples;
            	this.ratio=val.ratio;
            	this.lowest=val.lowest;
            	this.onshelfParams.robot_id=val.RobotId;
            	this.onshelfParams.quota=0;
            	this.onshelfParams.max_quota=0;
            	this.onshelfParams.unit_price=0;
            	this.onshelfParams.introduction="";
            	this.factoryModal=2;
				this.inrequest=false;
            },
            choseTime(id) {
                this.pairSelected = id;
                var totalNet= 0;
                if(id==1){
                	if(new Date(this.renewParams.ExpireDate).getTime()>new Date(this.renewParams.server_time).getTime()){
	            		this.finshDay=new Date(this.renewParams.ExpireDate).getTime()+(7*1000*24*60*60);
	            		this.finstDay=new Date(this.finstDay);
	            	}else{
	            		this.finshDay=new Date(this.renewParams.server_time).getTime()+(7*1000*24*60*60);
	            		this.finstDay=new Date(this.finstDay);
	            	}
                	for(var i=0; i<this.renewList.length;i++){
                        	if(new Date(this.renewList[i].expire_time).getTime()>=new Date(this.finshDay).getTime()){
                        		this.renewList[i].renewday=0
                        	}else{
                        		if(new Date().getTime()>=new Date(this.renewList[i].expire_time).getTime()){
                        			this.renewList[i].renewday=(new Date(this.finshDay).getTime()-new Date().getTime())/(1000*60*60*24);

                        		}else{
                        			this.renewList[i].renewday=(new Date(this.finshDay).getTime()-new Date(this.renewList[i].expire_time).getTime())/(1000*60*60*24);
                        		}
                        		this.renewList[i].renewday=this.renewList[i].renewday.toFixed(0);
                        	}
                        	if(this.renewList[i].strateties){
                        		for(var j=0;j<this.renewList[i].strateties.length;j++){
                        			if(new Date(this.renewList[i].strateties[j].expire_time).getTime()>=new Date(this.finshDay).getTime()){
		                        		this.renewList[i].strateties[j].renewday=0
		                        	}else{
		                        		this.renewList[i].strateties[j].renewday=(new Date(this.finshDay).getTime()-new Date(this.renewList[i].strateties[j].expire_time).getTime())/(1000*60*60*24);
		                        		this.renewList[i].strateties[j].renewday=this.renewList[i].strateties[j].renewday.toFixed(0)
		                        	}
		                        	this.renewList[i].strateties[j].renewPrice=this.renewList[i].strateties[j].renewday*this.renewList[i].strateties[j].component_price
                        		}


                        	}
                        	if(this.renewList[i].strateties){
                        		this.renewList[i].renewPrice=0
                    			for(var j=0;j<this.renewList[i].strateties.length;j++){

                    				this.renewList[i].renewPrice=this.renewList[i].renewPrice+this.renewList[i].strateties[j].renewPrice;
                    			}
                    		}else{
                    			this.renewList[i].renewPrice=this.renewList[i].renewday*this.renewList[i].component_price
                    		}
                        	totalNet=totalNet+this.renewList[i].renewPrice;
                        	this.renewList[i].showDetail=false;
                        }
                        this.totalRenewNet=totalNet;
                }else if(id==2){
                	if(new Date(this.renewParams.ExpireDate).getTime()>new Date(this.renewParams.server_time).getTime()){
	            		this.finshDay=new Date(this.renewParams.ExpireDate).getTime()+(30*1000*24*60*60);
	            		this.finstDay=new Date(this.finstDay);
	            	}else{
	            		this.finshDay=new Date(this.renewParams.server_time).getTime()+(30*1000*24*60*60);
	            		this.finstDay=new Date(this.finstDay);
	            	}
                	for(var i=0; i<this.renewList.length;i++){
                        	if(new Date(this.renewList[i].expire_time)>=new Date(this.finshDay).getTime()){
                        		this.renewList[i].renewday=0
                        	}else{
                        		if(new Date().getTime()>=new Date(this.renewList[i].expire_time).getTime()){
                        			this.renewList[i].renewday=(new Date(this.finshDay).getTime()-new Date().getTime())/(1000*60*60*24);

                        		}else{
                        			this.renewList[i].renewday=(new Date(this.finshDay).getTime()-new Date(this.renewList[i].expire_time).getTime())/(1000*60*60*24);
                        		}
                        		this.renewList[i].renewday=this.renewList[i].renewday.toFixed(0);
                        	}
                        	if(this.renewList[i].strateties){
                        		for(var j=0;j<this.renewList[i].strateties.length;j++){
                        			if(new Date(this.renewList[i].strateties[j].expire_time).getTime()>=new Date(this.finshDay).getTime()){
		                        		this.renewList[i].strateties[j].renewday=0
		                        	}else{
		                        		this.renewList[i].strateties[j].renewday=(new Date(this.finshDay).getTime()-new Date(this.renewList[i].strateties[j].expire_time).getTime())/(1000*60*60*24);
		                        		this.renewList[i].strateties[j].renewday=this.renewList[i].strateties[j].renewday.toFixed(0)
		                        	}
		                        	this.renewList[i].strateties[j].renewPrice=this.renewList[i].strateties[j].renewday*this.renewList[i].strateties[j].component_price
                        		}


                        	}
                        	if(this.renewList[i].strateties){
                        		this.renewList[i].renewPrice=0
                    			for(var j=0;j<this.renewList[i].strateties.length;j++){

                    				this.renewList[i].renewPrice=this.renewList[i].renewPrice+this.renewList[i].strateties[j].renewPrice;
                    			}
                    		}else{
                    			this.renewList[i].renewPrice=this.renewList[i].renewday*this.renewList[i].component_price
                    		}
                        	totalNet=totalNet+this.renewList[i].renewPrice;
                        	this.renewList[i].showDetail=false;
                        }
                        this.totalRenewNet=totalNet;

                }else{
                	if(new Date(this.renewParams.ExpireDate).getTime()>new Date(this.renewParams.server_time).getTime()){
	            		this.finshDay=new Date(this.renewParams.ExpireDate).getTime()+(365*1000*24*60*60);
	            		this.finstDay=new Date(this.finstDay);
	            	}else{
	            		this.finshDay=new Date(this.renewParams.server_time).getTime()+(365*1000*24*60*60);
	            		this.finstDay=new Date(this.finstDay);
	            	}
                	for(var i=0; i<this.renewList.length;i++){
                        	if(new Date(this.renewList[i].expire_time)>=new Date(this.finshDay).getTime()){
                        		this.renewList[i].renewday=0
                        	}else{
                        		if(new Date().getTime()>=new Date(this.renewList[i].expire_time).getTime()){
                        			this.renewList[i].renewday=(new Date(this.finshDay).getTime()-new Date().getTime())/(1000*60*60*24);

                        		}else{
                        			this.renewList[i].renewday=(new Date(this.finshDay).getTime()-new Date(this.renewList[i].expire_time).getTime())/(1000*60*60*24);
                        		}
                        		this.renewList[i].renewday=this.renewList[i].renewday.toFixed(0);
                        	}
                        	if(this.renewList[i].strateties){
                        		for(var j=0;j<this.renewList[i].strateties.length;j++){
                        			if(new Date(this.renewList[i].strateties[j].expire_time).getTime()>=new Date(this.finshDay).getTime()){
		                        		this.renewList[i].strateties[j].renewday=0
		                        	}else{
		                        		this.renewList[i].strateties[j].renewday=(new Date(this.finshDay).getTime()-new Date(this.renewList[i].strateties[j].expire_time).getTime())/(1000*60*60*24);
		                        		this.renewList[i].strateties[j].renewday=this.renewList[i].strateties[j].renewday.toFixed(0)
		                        	}
		                        	this.renewList[i].strateties[j].renewPrice=this.renewList[i].strateties[j].renewday*this.renewList[i].strateties[j].component_price
                        		}


                        	}
                        	if(this.renewList[i].strateties){
                        		this.renewList[i].renewPrice=0
                    			for(var j=0;j<this.renewList[i].strateties.length;j++){

                    				this.renewList[i].renewPrice=this.renewList[i].renewPrice+this.renewList[i].strateties[j].renewPrice;
                    			}
                    		}else{
                    			this.renewList[i].renewPrice=this.renewList[i].renewday*this.renewList[i].component_price
                    		}
                        	totalNet=totalNet+this.renewList[i].renewPrice;
                        	this.renewList[i].showDetail=false;
                        }
                        this.totalRenewNet=totalNet;

                }
                this.totalRenewNet=totalNet;
            },
            getAcount(){
            	var params={};
            	params.id=this.rbtInfoParm.user_id;
				getAcount(params).then(data => {
					if(data.code == 200) {
//						console.log(data)
						this.accountList=data.data;
						if(this.accountList.length>0){
							this.cisParams.account_id=this.accountList[0].Id
							this.initAccount();
						}else{
							this.$toast.center(this.$t('msg.msg100201'));
						}
					} else {
//						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
           },
           getComein(){
           		this.comein=this.onshelfParams.unit_price*(1-this.ratio);
           		this.comein=this.comein.toFixed(0);
           		var ofcin=this.onshelfParams.unit_price*this.ratio
           		ofcin=ofcin.toFixed(0);
           		if(ofcin<this.lowest){
           			this.comein=this.onshelfParams.unit_price-this.lowest;
           		}
           },
           toMarkets(val) {
			   localStorage.setItem('robotInfoObj', JSON.stringify(val))
                this.$router.push({
                    path: '/robot/robotConfig',
                    query: {
                        robotId: val.robotId
                    }
                })
                window.scrollTo(0, 0);
            },
           startIs(){
           	if(this.inrequest){
        		return false;
        	}
           	this.cisParams.user_id=this.rbtInfoParm.user_id;
           	this.cisParams.days=parseInt(this.cisParams.days);
           	if(this.cisParams.account_id==""){
				  		this.$toast.center(this.$t('netnew.selectjysAccount'));
				  		return false;
				  	}
           	this.inrequest=true;
           	startIs(this.cisParams).then(data => {

					if(data.code == 200) {
						this.$toast.center(this.$t('netnew.createsuccess'));
						this.getFactoryData();
						$(".close").click();

					} else {

						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
           },
           RobotOnshelf(){
           	if(this.inrequest){
        		return false;
        	}
           	this.onshelfParams.user_id=this.rbtInfoParm.user_id;
           	this.onshelfParams.introduction_cn=this.onshelfParams.introduction;
           	this.inrequest=true;
           	RobotOnshelf(this.onshelfParams).then(data => {

					if(data.code == 200) {
						this.$toast.center(this.$t('netnew.OnselfSuccess'));
						this.getFactoryData();
						$(".close").click();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
           },
           initAccount(){//获取交易所账户余额
	           	initAccount(this.cisParams).then(data => {
					if(data.code == 200) {

					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));

					}
				});
           },
			toCreateRobot() {
				if(this.userType!=1){
					this.$router.push({
						name:"creatRobot",
						params:{
							name:"creatRobot",
							id:'',
							type:'create'
						}
					})
				}else{
					this.$toast.center(this.$t('netnew.sorrySpecial'));
				}
			}
        }
    }
</script>

<style>

    .factory_box {
        padding: 20px 32px;
       /* font-family: SFProDisplay-Bold !important;*/

        color: #000000;
        letter-spacing: 0;
    }

    .padding_left {
        padding-left: 34px;
    }

    .factory_title {
       /* font-family: SFProDisplay-Bold;*/
        font-size: 25px;
        color: #fff;
        letter-spacing: 0;
    }

    .instance_box {

    }





    .table-bordered thead tr th {
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


    .tr_grey {
        background: #F8F8F8;
        box-shadow: 0 1px 0 0 #DBDEDE;
        border-radius: 1px;
    }

    .saved_btn {
        background: #000000;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        width: 70px;
        height: 24px;

    }

    .submitted_btn {
        background: #3158E4;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        width: 70px;
        height: 24px;
    }
    .rejected_btn {
        background: #FF3232;
        border-radius: 4px;

        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0;
        width: 70px;
        height: 24px;
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

    .action_item {
      /* 	margin-top: 5px;*/
	    cursor: pointer;
	    display: inline-block;
	    margin-right: 6.5px;
	    margin-left: 6.5px;
	    text-decoration-line: underline;
    }

    .action_item_bottom {
        margin-bottom: 5px;
    }

    .bottom_box {
        padding: 0 !important;
        padding-left: 8px !important;
    }

    .bottom_box input {
        margin-right: 8px !important;
    }

    .select_all {

        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
        padding: 8px;
        margin-right: 30px;
    }

    .run_all_btn {
        background: #3158E4 !important;
        border-radius: 4px !important;
        height: 40px !important;
        width: 120px !important;
        font-family: SFProText-Regular !important;
        font-size: 14px !important;
        color: #FFFFFF !important;
        letter-spacing: 0 !important;
        margin-right: 28px;
    }

    .delete_select_btn {
        border: 1px solid #DBDEDE !important;
        border-radius: 4px !important;
        height: 40px !important;
        width: 80px !important;
        font-family: SFProText-Regular !important;
        font-size: 14px !important;
        color: #FF3232 !important;
        background: #fff;
        letter-spacing: 0 !important;

    }

    .delete_select_btn:hover{
        color: #FF3232 !important;
    }

    .submit_all_btn {
        background: #FFFFFF !important;
        border: 1px solid #DBDEDE !important;
        border-radius: 4px !important;
        height: 40px !important;
        width: 80px !important;
        font-family: SFProText-Regular !important;
        font-size: 14px !important;
        color: #000000 !important;
        letter-spacing: 0 !important;
        margin-right: 12px;
    }

    .long_td{
        width: 90px !important;
    }
	.long_td_cn{
		width: 120px !important;
	}
	.modal-dialog {
		width: 478px !important;
	}



	.form-control {
		height: 40px !important;
	}


	.fac-btn{
		font-size: 14px;
		color: #718EBD;
		cursor: pointer;
		float: right;
		padding-right:46px;
		line-height: 60px;
	}
	.fac-btn:hover{
		color: #fff;
	}
	.robot-box{
		/*background: url(../assets/img/robotbox@2x.png) no-repeat;
		background-size: cover;*/
		min-height: 600px;
	}
	.create_robt_btn{
		display: inline-block;
		background: url("../assets/img/zcbtn@2x.png") no-repeat;
		background-size: 100% 100%;
		width:140px;
		height:45px;
		text-align: center;
		line-height: 45px;
		color:#fff;
		font-size:14px;
		margin-left:40px;
		cursor: pointer;
	}
	.qsbg{
		margin-left: 10px;
		width: 151px;
		height: 45px;
		position: absolute;
    	display: inline-block;
    	text-align: center;
    	color: #718EBD;
    	line-height: 45px;
		background: url('../assets/img/qsbg@2x.png') no-repeat;
		background-size: 100% 100%;
	}
	.osbg1{
		padding-top: 15px;
		margin-top: -55.5px;
		margin-left: -3px;
		width: 326px;
		height: 69px;
		position: absolute;
    	display: inline-block;
    	text-align: center;
    	color: #718EBD;
    	/*line-height: 69px;*/
		background:#24334A ;
		background-size: 100% 100%;
	}
	.osbg2{
		padding-top: 15px;
		margin-left: 10px;
		padding-left: 30px;
		width: 330px;
		height: 91px;
		position: absolute;
    	display: inline-block;
    	text-align: left;
    	color: #718EBD;
		background: url('../assets/img/osbg2@2x.png') no-repeat;
		background-size: 100% 100%;
	}
	.os-textarea{
		margin: 0px;
	    background: none;
	    border: 1px solid #718EBD;
	    resize: none;
	    width: 100%;
	    height: 100px;
	    color: #fff;
	}
	.num-change{
		text-align: center;
		font-size: 16px;
		color: #fff;
		width: 80px;
		margin-right: 5px;
		margin-left: 5px;
		line-height: 35px;
		margin-top: -11px;
		background: none;
		border: none;
		border-bottom:1px solid #718EBD;
	},
	.factory_box .table{
		table-layout: fixed;
	}
	.factory_box .table tr {
		height: 60px!important;
	}
	.mail-list{
		position:relative;
		min-height: 897px;
	}
	.pigna{
		padding:30px 0;
	}

</style>
