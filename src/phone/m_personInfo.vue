<template>
	<div class="lg-width" style="width:100%;padding-top: 80px;min-height: 667px;background: #000;">
		<div class="lg-width" style="width: 100%;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
			<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				{{$t('person.basic')}}
			</span>
		</div>
		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 25px;">
			<img class="myImg" id="uploadImg" v-bind:src="imgsrc" v-show="isphoto" @click="toFile" style="width: 40%;border-radius:50% ;" />
		</div>
		<input @change="getFile" type="file" id="file" class="fileup">
		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 25px;">
			<input class="form-control" style="color: #fff !important;font-size: 18px;border-bottom: none !important; text-align: center;" v-model="UserInfo.nickName">
		</div>
		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 25px;">
			<div style="position: relative;">
				<button class="card-btm"  style="position: relative;" @click="nextImg">
						{{$t('market.confirm')}}
				</button>
			</div>
		</div>

		<!--区块链信息-->
		<div class="lg-width" style="width: 100%;margin-top: 45px;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
			<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				{{$t('person.blockchain')}}
			</span>
		</div>
		<div class="lg-width" style="width: 100%;overflow-x: scroll;">
			<table class="table table-bordered general-table" style="min-width: 800px;margin-top: 0px;">
                <thead>
                <tr>
                    <th>{{$t('person.exchange')}}</th>
                    <!--<th>Access Key</th>
                    <th>Secret</th>-->
                    <th>{{$t('person.nickname1')}}</th>
                    <th>{{$t('person.isvalid')}}</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item,index) in accountList">
                    <td>{{item.Exchange}}</td>
                    <!--<td class="exchanges">{{item.ApiKey}}</td>
                    <td class="exchanges">{{item.Secret}}</td>-->
                    <td>{{item.ExchangeAccountName}}</td>
                    <td>
                    	<span v-if="item.IsAvailable==true"><img :src="valid" width="22px" /></span>
						<span v-if="item.IsAvailable==false"><img :src="invalid" width="22px" /></span>
                    </td>
                    <td>
                    	<a  style="color: #718EBD;cursor: pointer;"  @click="deleteAcc(index,$event)" >
							{{$t('person.delete')}}
						</a>
						<a style="color: #718EBD;cursor: pointer;margin-left: 10px;" href="#editModal" @click="editItem(index,$event)" data-toggle="modal">
							{{$t('person.edit')}}
						</a>
                    </td>
                </tr>

                </tbody>
           </table>
		</div>
		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 25px;">
			<div style="position: relative;">
				<button class="card-btm" href="#addModal" data-toggle="modal"  style="position: relative;" >
						{{$t('person.addAccount')}}
				</button>
			</div>
		</div>
		<!--修改密码-->
		<div class="lg-width" style="width: 100%;margin-top: 45px;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
			<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				{{$t('person.passwords')}}
			</span>
		</div>
		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 25px;">
			<div style="margin-top: 15px;">
				<span style="color: #fff;font-size: 16px;">{{$t('person.Verify')}}：</span>
				<span style="color: #718EBD;font-size: 16px;">{{currphone}}</span>
			</div>
		</div>
		<div class="lg-width" style="width: 100%;text-align: center;margin-top: 25px;">
			<div style="position: relative;">
				<button class="card-btm" @click="toPw"  style="position: relative;" >
						{{$t('person.passwords')}}
				</button>
			</div>
		</div>
		<!--账户信息-->
		<div class="lg-width" style="width: 100%;margin-top: 45px;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
			<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				{{$t('person.accountinfo')}}
			</span>
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 25px;padding-left: 5%;padding-right: 5%;">
			<div>
				<span style="color: #fff;font-size: 18px;">
					{{$t('person.wallet')}}
				</span>
			</div>
			<div>
				<input class="form-control" style="color: #fff !important;font-size: 18px; text-align: center;width: 100%;"  readonly="readonly">
			</div>
			<div style="margin-top: 15px;">
				<span style="color: #fff;font-size: 18px;">
					{{$t('person.Balance')}}
				</span>
			</div>
			<div>
				<span style="color:#718EBD;font-size: 18px;line-height: 40px;">
					{{UserInfo.netValue}} NET
				</span>

			</div>
		</div>
		<div class="lg-width" style="width: 100%;margin-top: 25px;padding-left: 5%;padding-right: 5%;">
			<div>
				<span style="color:#fff;font-size: 18px;line-height: 40px;">
					{{$t('person.tishi')}}:
				</span>
			</div>
			<div>
				<span style="color: #718EBD;font-size: 16px;line-height: 40px;">
					{{$t('person.tips1')}}
				</span>
			</div>
			<div>
				<span style="color: #718EBD;font-size: 16px;line-height: 40px;">
					{{$t('person.tips2')}}
				</span>
			</div>
			<div>
				<span style="color: #718EBD;font-size: 16px;line-height: 40px;">
					{{$t('person.tips3')}}
				</span>
			</div>
			<div>
				<span style="color: #718EBD;font-size: 16px;line-height: 40px;">
					{{$t('person.tips4')}}
				</span>
			</div>
		</div>
		<!--充值记录-->
		<div class="lg-width" style="width: 100%;margin-top: 45px;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
			<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				{{$t('person.accountinfo1')}}
			</span>
		</div>
		<div class="lg-width" style="width: 100%;overflow-x: scroll;">
			<table class="table news-table" style="min-width: 1200px;">
				<thead style="background: none;">
					<tr style="border-top:none ; border-bottom:1px solid #ffffff12 ;color: #718EBD;">
						<th style="min-width:80px;text-align: center;padding-bottom: 12px;">{{$t('person.order1')}}</th>
						<th style="min-width:80px;text-align: center;padding-bottom: 12px;">{{$t('person.order2')}}</th>
						<th style="min-width:80px;text-align: center;padding-bottom: 12px;">{{$t('person.order3')}}</th>
						<th style="min-width:80px;text-align: center;padding-bottom: 12px;">{{$t('person.TxHash')}}</th>
						<th style="min-width:80px;text-align: center;padding-bottom: 12px;">{{$t('person.amount')}}</th>
						<th style="min-width:80px;text-align: center;padding-bottom: 12px;">{{$t('person.time')}}</th>
						<th style="min-width:80px;text-align: center;padding-bottom: 12px;">{{$t('person.order4')}}</th>
					</tr>
				</thead>
				<tbody>
					<tr class="pappers" v-for="feelist in rechargeList">
						<td class="infos" style="width:155px;border-top:none">{{feelist.OrderNo}}</td>
						<td class="recharges" style="max-width:135px;border-top:none" :title="feelist.fromWallet">{{feelist.FromWallet}}</td>
						<td class="recharges" style="max-width:135px;border-top:none" :title="feelist.toWallet">{{feelist.ToWallet}}</td>
						<td class="recharges" style="max-width:125px;border-top:none" :title="feelist.txHash">{{feelist.TxHash}}</td>
						<td class="recharges" style="text-align: center;border-top:none">{{feelist.Amount}}</td>
						<td class="recharges" style="border-top:none">{{feelist.CreateTime | timer}}</td>
						<td class="recharges" style="border-top:none">>{{feelist.Remark }}</td>
					</tr>
				</tbody>
			</table>
			<div class="alert alert-warning fade in" style="padding-top: 50px !important;padding-bottom: 50px !important;" v-show="rechargeList.length==0">
                <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
            </div>
		</div>

		<!--收支记录-->
		<div class="lg-width" style="width: 100%;margin-top: 45px;border-top:1px solid rgba(255,255,255,0.1);border-bottom:1px solid rgba(255,255,255,0.1);">
			<span style="font-size:24px ;color: #fff;line-height: 48px;padding-left: 5%;">
				{{$t('person.accountinfo2')}}
			</span>
		</div>
		<div class="lg-width" style="width: 100%;overflow-x: scroll;">
			<table class="table  table-striped table-condensed news-table" style="min-width: 1200px;">
				<thead style="background: none;">
					<tr style="border-top:none ; border-bottom:1px solid #ffffff12 ;color: #718EBD;">
						<th style="width:20%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.type')}}</th>
						<th style="width:15%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.type1')}}</th>
						<th style="width:15%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.type7')}}</th>
						<th style="width:15%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.type2')}}</th>
						<th style="width:10%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.type5')}}</th>
						<th style="width:10%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.type6')}}</th>
						<th style="width:20%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.type3')}}</th>
						<th style="width:25%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.type4')}}</th>
					</tr>
				</thead>
				<tbody style="background: none;">
					<tr class="Rechargelist" v-for="feelist in inoutList" style="color: #718EBD;background: none;border: none;">
						<td style="width:10%;text-align: center;cursor: default;border: none;">{{feelist.ChangeType|infoStatus}}</td>
						<td style="width:25%;text-align: center;cursor: default;border: none;">{{feelist.ItemType|infoStatus}}</td>
						<td style="width:15%;text-align: center;cursor: default;border: none; white-space: nowrap;overflow: hidden;" v-show="$i18n.locale=='en-US'" >{{feelist.Name}}</td>
						<td style="width:15%;text-align: center;cursor: default;border: none; white-space: nowrap;overflow: hidden;" v-show="$i18n.locale=='zh-CN'" >{{feelist.LocalName}}</td>
						<td style="width:15%;text-align: center;cursor: default;border: none;">{{feelist.NetValue}}</td>
						<td style="width:15%;text-align: center;cursor: default;border: none;">{{feelist.UnitPrice}}</td>
						<td style="width:15%;text-align: center;cursor: default;border: none;">{{feelist.BuyDays}}</td>
						<td style="width:30%;text-align: center;cursor: default;border: none;">{{feelist.CreateTime | timer}}</td>
						<td style="text-align: center;cursor: default;border: none;">{{feelist.Remark}}</td>
					</tr>
				</tbody>
			</table>
			<div class="alert alert-warning fade in" style="padding-top: 50px !important;padding-bottom: 50px !important;" v-show="inoutList.length==0">
                <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
                <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
                <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
            </div>
		</div>



		<!--添加 -->
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="addModal" class="modal fade">
			<div class="modal-dialog bg-white">
				<div class="modal-content login-box1">
					<div class="lg-row">
						<div class="modal-header" style="border-bottom: none;">
							<button id="closeNd" type="button" class="close" style="position: absolute;right: 17px;top: 5px;" data-dismiss="modal" aria-hidden="true">
					          	<img :src="close"/>
					          </button>
						</div>

						<div class="modal-body">
							<div class="col-md-12">
								<div class="group1">
									<label for="inputExchange1" class="col-lg-3 col-sm-3 control-label" style="color: #718EBD;"><span style="color:red;margin-right: 5px;">*</span>{{$t('person.exchange')}}</label>
									<div class="col-lg-9">
										<!--<input id="title4" value="" class="form-control borders4" v-model="inputs.exchange">-->
										<select class="form-control m-bot1 borders4" v-model="inputs.exchange" @change="getFeeTax">
											<option v-for="(myexchange,index) in exchangeList" :value="myexchange">{{myexchange.name}}</option>
										</select>
									</div>
								</div>
								<div class="group1">
									<label for="inputApikey" class="col-lg-3 col-sm-3 control-label" style="color: #718EBD;"><span style="color:red;margin-right: 5px;">*</span>Apikey</label>
									<div class="col-lg-9">
										<input value="" class="form-control borders4" v-model="inputs.apikey">
									</div>
								</div>
								<div class="group1">
									<label for="inputSecret" class="col-lg-3 col-sm-3 control-label" style="color: #718EBD;"><span style="color:red;margin-right: 5px;">*</span>Secret</label>
									<div class="col-lg-9">
										<input value="" class="form-control borders4" v-model="inputs.secret">
									</div>
								</div>
								<div class="group1">
									<label for="inputSecret" class="col-lg-3 col-sm-3 control-label" style="text-align: center;color: #718EBD;"><span style="color:red;margin-right: 5px;">*</span><span>{{$t('netnew.sxfbl')}}</span></label>
									<div class="col-lg-9">
										<input type="number" value="" class="form-control borders4" v-model="inputs.fee_tax" >
									</div>
								</div>
							</div>
						</div>
						<div style="width: 100%;text-align: center;">
							<!--<button class="btn addbtn btn-md" type="button" @click="addExchange"><i class="fa fa-plus add1" aria-hidden="true"></i><span style="color: #055ccb;">{{$t('person.addmore')}}</span></button>-->

							<button class="btn surebtn btn-md" data-dismiss="modal" aria-hidden="true" type="button" style="position: relative;" >
								{{$t('person.add')}}
							<img class="light-btn"  @click="addExchange" style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 2000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--修改 -->
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="editModal" class="modal fade">
			<div class="modal-dialog bg-white">
				<div class="modal-content login-box1">
					<div class="lg-row">
						<div class="modal-header" style="background: none;border: none;">
							<button id="closeNd" type="button" class="close" style="position: absolute;right: 17px;top: 5px;" data-dismiss="modal" aria-hidden="true">
							<img :src="close.png"/></button>

						</div>

						<div class="modal-body row">
							<div class="col-md-12">
								<div class="group1">
									<label for="inputExchange1" style="color: #718EBD;" class="col-lg-3 col-sm-3 control-label">{{$t('person.exchange')}}</label>
									<div class="col-lg-9" style="color:#006DCC">
										<!--<input id="title4" value="" class="form-control borders4" v-model="inputs.exchange">-->
										<!--<input id="title5" value="" class="form-control borders4" v-model="editAccount.exchange" readonly>-->
										{{editAccount.exchange}}
									</div>
								</div>
								<div class="group1">
									<label for="inputApikey" style="color: #718EBD;" class="col-lg-3 col-sm-3 control-label">Apikey</label>
									<div class="col-lg-9">
										<input value="" class="form-control borders4" v-model="editAccount.apikey">
									</div>
								</div>
								<div class="group1">
									<label for="inputSecret" style="color: #718EBD;" class="col-lg-3 col-sm-3 control-label">Secret</label>
									<div class="col-lg-9">
										<input value="" class="form-control borders4" v-model="editAccount.secret">
									</div>
								</div>
								<div class="group1">
									<label for="inputSecret" class="col-lg-3 col-sm-3 control-label" style="text-align: center;color: #718EBD;"><span style="color:red;margin-right: 5px;">*</span><span>{{$t('netnew.sxfbl')}}</span></label>
									<div class="col-lg-9">
										<input type="number" value="" class="form-control borders4" v-model="editAccount.fee_tax" >
									</div>
								</div>
							</div>
						</div>
						<!--<div class="pull-right">
							<button class="btn surebtn btn-md" data-dismiss="modal" aria-hidden="true" @click="editAcc">{{$t('person.add')}}</button>
						</div>-->
						<div style="width: 100%;text-align: center;">
							<!--<button class="btn addbtn btn-md" type="button" @click="addExchange"><i class="fa fa-plus add1" aria-hidden="true"></i><span style="color: #055ccb;">{{$t('person.addmore')}}</span></button>-->

							<button class="btn surebtn btn-md"  type="button" style="position: relative;" >
								{{$t('person.add')}}
								<img class="light-btn" data-dismiss="modal" aria-hidden="true" @click="editAcc"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 2000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--充值 -->
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="Recharge1" class="modal fade">
			<div class="modal-dialog bg-white">
				<div class="modal-content login-box1" style="height:477px;">
					<div class=" lg-row">
						<div class="modal-header" style="background: #fff;">
							<button type="button" class="close close1" style="height: 20px;width: 20px;" data-dismiss="modal" aria-hidden="true">
                            	<img style="position:absolute;top: 10px;right: 5px;" :src="close"/></button>
						</div>
						<div class="modal-body row">
							<div class="col-lg-12 title1">
								{{$t('person.cz')}}
							</div>
							<div class="col-lg-12">
								<div class="ercodes" id="qrcode" ref="qrcode">
									<!--<img src="../../static/images/none1.png" width="100%"/>-->
								</div>
							</div>
							<div class="col-lg-12">
								<p class="qb">{{$t('person.address')}}</p>
								<p class="qbdz">{{UserInfo.walletPoolId}}</p>
								<!--UserInfo.walletPoolId-->
								<p class="fuzhi" v-clipboard:copy="" v-clipboard:success="onCopy" v-clipboard:error="onError">{{$t('person.copy')}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="Confirm" class="modal fade">
			<div class="modal-dialog" style="margin-top: 200px;">
				<div class="modal-content login-box2">
					<div class="modal-header wxts">{{$t('login.tips')}}
						<button type="button" class="close close1" style="height: 20px;width: 20px;" data-dismiss="modal" aria-hidden="true">
                            	<img style="position:absolute;top: 10px;right: 5px;" :src="deleteImg"/></button>
					</div>
					<div class="modal-body" style="border-radius:10px ;">
						<div class="title2">
							{{$t('login.tips1')}}
						</div>

						<div class="col-lg-12" style="margin-top:0">
							<div class="col-lg-6 leftsure" @click="deleteAcc" data-dismiss="modal">{{$t('login.tips2')}}</div>
							<div class="col-lg-6 rightsure" data-dismiss="modal">{{$t('login.tips3')}}</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="withdraw" class="modal fade">
			<div class="modal-dialog bg-white">
				<div class="modal-content login-box1">
					<div class="lg-row">
						<div class="modal-header" style="border-bottom: none;">
							<button id="closeNd" type="button" class="close" style="position: absolute;right: 17px;top: 5px;" data-dismiss="modal" aria-hidden="true">
					          	<img :src="close"/>
					          </button>
						</div>
						<div class="lg-width" style="width: 100%;">

							<!--<div class="group1">
								<label for="inputApikey" class="col-lg-4 control-label" style="color: #718EBD;"><span style="color:red;margin-right: 5px;">*</span>提现地址</label>
								<div class="col-lg-8">
									<input class="form-control borders4" v-model="withdraw.withdraw_address">
								</div>
							</div>
							<div class="group1">
								<label for="inputSecret" class="col-lg-4 control-label" style="color: #718EBD;"><span style="color:red;margin-right: 5px;">*</span>提现数量</label>
								<div class="col-lg-8">
									<input class="form-control borders4" v-model="withdraw.apply_amount">
								</div>
							</div>-->
							<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
								<div class="lg-width" style="width:100%">
									<input type="password" class="form-control lg-border" placeholder="提现地址" v-model="withdraw.withdraw_address">
								</div>
							</div>
							<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
								<div class="lg-width" style="width:100%">
									<input type="password" class="form-control lg-border" placeholder="提现数量" v-model="withdraw.apply_amount">
								</div>
							</div>
							<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
								<div class="lg-width" style="width:65%;margin-right: 5%;">
									<input type="text" class="form-control lg-border" v-model="withdraw.code" :placeholder="$t('net.verificationCode')">
									<!--<input type="text" id="isCk"  style="display: none;">-->
								</div>
								<div class="lg-width" style="width:30%;text-align: center;">
									<button id="btn" style="height: 40px;" class="btn bt-getcode" type="button" >{{$t('net.send')}}<span v-show="!isGet">({{messageCD}}s)</span></button>
								</div>
							</div>

						</div>
						<div class="lg-width" style="width: 100%;text-align: center;margin-top: 45px;">
							<!--<button class="btn addbtn btn-md" type="button" @click="addExchange"><i class="fa fa-plus add1" aria-hidden="true"></i><span style="color: #055ccb;">{{$t('person.addmore')}}</span></button>-->

							<button class="btn surebtn btn-md" data-dismiss="modal" aria-hidden="true" type="button" style="position: relative;" >
								{{$t('person.add')}}
							<img class="light-btn"   style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 2000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script>
	import { editaccount, rechargeOrder, delexaccount, getUserInfo, getAccountList,userinfomod,toApplication, countrys, uploadphoto, generateWallet, regionalChain, updatePassword, getMessage, authenticate, exchanges, getInoutLog } from '../api/api';
	import QRCode from 'qrcodejs2';
	import Paginate from 'vuejs-paginate'
	import util from '../common/js/util.js'
	export default {
		props: {
			checked: {
				type: String,
				default: require("@/assets/img/checked.png")
			},
			close: {
				type: String,
				default: require("@/assets/img/close.png")
			},
			deleteImg: {
				type: String,
				default: require("@/assets/img/delete.png")
			},
			group: {
				type: String,
				default: require("@/assets/img/group.png")
			},
			invalid: {
				type: String,
				default: require("@/assets/img/invalid.png")
			},
			uncheck: {
				type: String,
				default: require("@/assets/img/uncheck.png")
			},
			valid: {
				type: String,
				default: require("@/assets/img/valid.png")
			},
			noNet: {
				type: String,
				default: require("@/assets/img/1.png")
			},

		},
		data() {
			return {
				rightNick: false,
				isvalid: true,
				Le: 1,
				En: 1,
				isGet:true,
				imgName:"",
				withdraw:{
					withdraw_address:"",
					apply_amount:"",
					code:"",
				},
				radio: "",
				radios: [{
						labelcn: '男',
						labelen: 'Male',
						value: '1',
						isChecked: false,
					},
					{
						labelcn: '女',
						labelen: 'Female',
						value: '2',
						isChecked: false,
					},
				],
				editaccountList: {},
				m: 0,
				messageCD:60,
				gender: 1,
				passwordNull: false,
				newpassNull: false,
				confirmNull: false,
				lastUrl: "",
				headImg: "",
				isphoto: false,
				perpage: 5,
				perpage1: 5,
				findmessage: '',
				CurrentPage: 1,
				CurrentPage1: 1,
				deleteAccount: {
					exchangeId: ""
				},
				editAccount: {
					exchangeId: "",
					apikey: "",
					secret: "",
					fee_tax: ""
				},
				inoutList: [],
				rechargeList: [],
				Recharges: {},
				isinfo: 1,
				isView: 1,
				isgm: 1,
				isxf: 1,
				exchange: "",
				emailCode: "",
				userEmail: "",
				currphone: "",
				codes: "",
				countryname: {},
				showit: true,
				newpasswords: "",
				passwords: "",
				message60: 60,
				comfirmpass: "",
				walletaddress: "", //钱包地址
				passwordError: false, //密码输入错误
				confirmError: false, //确认密码错误
				noemail: true, //基本信息 邮箱为空
				isred: true,
				istext1: true,
				isShow: 1, //基本信息页面
				isShow1: 1, //账户充值页面
				isblue: true,
				isblue1: true,
				application:true,
				tish: false, //提示信息
				tish1: false,
				tish2: true,
				userType:1,
				imgsrc: '',
				countryInfo: {},
				countrylist: {},
				inputs: {
					exchange: {},
					secret: "",
					apikey: "",
					fee_tax: "",
				},
				UserInfo: {
					country: "86", //默认选择的国际编号
					gender: "1",
					nickName: "",
					photoUrl: "",
					walletPoolId: "",
					mobile: ""
				},
				getUserinfos: {},
				imgUrl: {
					photo: "",
				},
				walletId: {
					data: "",
				},

				accountList: [{
					exchange: "",
					apikey: "",
					secret: ""
				}, ],
				chaininfos: {
					depositAddress: "",
					tradeAccountDTO: []
				},
				updatapassword: {
					newpassword: "",
					password: "",
				},
				messagecode: {
					code: "",
					phone: "",
					smid: "",
				},
				messageData1: {
					countryCode: "",
					phone: "",
					templateCode: ""
				},
				exchangeInfo: {},
				exchangeList: {},
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.lastUrl = from.path;
			})
		},

		components: {
			QRCode,
			Paginate
		},
		methods: {
			toPw() {
				this.$router.push({
					path: 'm_changePw',
					query: {
						userInfo: this.UserInfo
					}
				})
			},
			//刷新账户余额
			refreshNet() {
				this.get_userinfos();
			},
			//删除交易所
			deleteAcc(index, event) {
				swal({
				  title: this.$t('login.tips')+"?",
				  text: this.$t('login.tips1'),
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
				  	this.deleteAccount.exchangeId = this.accountList[index].Id;
				  	delexaccount(this.deleteAccount).then(data => {
						if(data.code == 200) {
							this.getAccountList();
							this.$toast.center(this.$t('login.delete'));
						} else {
							this.$toast.center(this.$t('msg.msg'+data.code));
						}
					})

				  }
				})

			},

			//获取短信验证码
			getMessage(id) {
				if(this.isGet == true) {
					this.isGet = false;
					this.timer = setInterval(this.startCD, 1000);
					var messageData = {};
					messageData.phone=this.UserInfo.mobile;
					messageData.countryCode=this.UserInfo.country;


					getMessage(messageData).then(data => {
						if(data.code == 200) {
							// 	console.log(data)
							this.loginData.smid = data.data;
						} else {
							this.$toast.center(this.$t('msg.msg'+data.code))
						}
					});

				}
			},
			//60s倒计时
			startCD: function() {
				if(this.messageCD <= 0) {
					this.messageCD = 60;
					this.isGet = true;
					clearInterval(this.timer);
				} else {
					this.messageCD--;
				}
			},
			toApplication(type){
				var params={};
				params.type=type;
                toApplication(params).then(data => {
                    if (data.code == 200) {
                    	if(type==3){
                    		this.getUseInfo();
							this.$toast.center(this.$t('netnew.toSpecial'));
                    		setTimeout(() =>{
								document.location.reload();
							},2000);

                    	}else{
                    		this.getUseInfo();
							this.$toast.center(this.$t('netnew.toTry'));
                    		setTimeout(() =>{
								document.location.reload();
							},2000);
                    	}
                    } else {
                        this.$toast.center(this.$t('msg.msg'+data.code));
                    }
                });
			},
			//修改交易所
			editAcc() {

				let formData = new FormData();
                formData.append('account_info',  JSON.stringify(this.editAccount));
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };

				editaccount(formData,config).then(data => {
					if(data.code == 200) {
						this.getAccountList();
						this.$toast.center(this.$t('person.editSuccess'));

					} else {
							this.getAccountList();
							this.$toast.center(this.$t('msg.msg'+data.code));
					}
				})
			},
			//点击删除交易所按钮
			deleteItem(index, event) {
				//let messages=confirm(this.$t('person.sureDelete'));

			},
			//点击编辑交易所信息
			editItem(index, event) {
				this.editAccount.exchange = this.accountList[index].Exchange;
				this.editAccount.apikey = this.accountList[index].ApiKey;
				this.editAccount.secret = this.accountList[index].Secret;
				this.editAccount.exchangeAccountName = this.accountList[index].ExchangeAccountName;
				this.editAccount.account_id = this.accountList[index].Id;
				this.editAccount.user_id=this.UserInfo.userId;
			},
			//获取用户基本信息
			get_userinfos() {
				getUserInfo(this.UserInfo).then(data => {
					if(data.code == 200) {
						this.UserInfo = data.data;

					}
				})
			},
			//扫描二维码
			qrcodeScan() { //生成二维码
				var ercode = this.UserInfo.walletPoolId;
				let qrcode = new QRCode('qrcode', {
					width: 160, // 二维码宽度
					height: 160, // 二维码高度
					text: ercode
				})
			},
			//查看账户收支记录
			view(id) {
				this.isView = id;
			},
			upload(){
		   		$('#fileup').click();
		   	},
		   	getObjectURL(file) {
				var url = null ;
				 // 下面函数执行的效果是一样的，只是需要针对不同的浏览器执行不同的 js 函数而已
				 if (window.createObjectURL!=undefined) { // basic
				     url = window.createObjectURL(file) ;
				 } else if (window.URL!=undefined) { // mozilla(firefox)
				     url = window.URL.createObjectURL(file) ;
				 } else if (window.webkitURL!=undefined) { // webkit or chrome
				     url = window.webkitURL.createObjectURL(file) ;
				 }
				 return url ;
			},
		   	changeimage (event) {
			    // 调用上面的方法
			 	var objurl = this.getObjectURL(event.target.files[0])
	      		this.imgName=$('#fileToUpload').val();
	      		$('#myimg2').attr('src',objurl)

			},
			Renewal(id) {
				this.isxf = id;
			},
			buy(id) {
				this.isgm = id;
			},
			accountId() {
				if(this.UserInfo.walletPoolId != "" && this.UserInfo.walletPoolId != null) {
					this.istext1 = false;
				}
			},
			phoneChange() {
				var tel = localStorage.getItem("phonenum")
				if(tel != null) {
					this.currphone = tel.replace(tel.substring(3, 7), "****");
				}
			},
			//用户信息切换
			userinfo(id1, id2) {
				this.isShow = id1;
				this.isinfo = id2;
			},
			accountinfo(id) {
				this.isinfo = 2;
				this.isShow1 = id;

			},
			enter(id) {
				this.isEn = id;
			},
			leave(id) {
				this.isLe = id;
			},
			//获取国家信息
			getCountry() {
				countrys(this.countryInfo).then(data => {
					if(data.success == 0) {
						this.countrylist = data.data;

					}
				});
			},
			//获取交易所信息
			getExchanges() {
				exchanges(this.exchangeInfo).then(data => {
					if(data.success == 0) {
						this.exchangeList = data.data;
						//console.log(data)
					}
				});
			},
			//获取用户头像信息
			getFile(e) {
				if (e.target.files[0]) {
					let _this = this
					var file = e.target.files[0]
			        var reader = new FileReader()
			        reader.readAsDataURL(file)
			        reader.onload = function() {
			          img.src = this.result
			        }
			        var img = new Image,
			          width = 116, //image resize   压缩后的宽
			          quality = 0.7, //image quality  压缩质量
			          canvas = document.createElement("canvas"),
			          drawer = canvas.getContext("2d");
			        img.onload = function() {
			          canvas.width = width;
			          canvas.height = width * (img.height / img.width);
			          drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
			          _this.imgsrc = canvas.toDataURL("image/png", quality);
			        }
				}

			},
			//生成钱包地址
			generate() {
				generateWallet(this.walletId).then(data => {
					if(data.success == 0) {
						this.UserInfo.walletPoolId = data.data;
						this.istext1 = false;
						//	console.log(data);
					}
				});
			},
			//copy钱包地址
			copyit() {

			},
			onCopy(e) {
				//	this.$toast.center(this.$t('person.copyfinish'));
				// console.log(e);
			},
			onError(e) {
				// 	this.$toast.center(this.$t('person.copyfail'));
			},




			//修改用户信息
			nextImg() {
				var playernName = this.UserInfo.nickName;
				var nameLength = 0;
				var cutIndex = 0;
				if(playernName == "" || playernName == null) {
					this.tish = false;
					this.tish1 = true;
					this.$toast.center(this.$t('person.iptUserName'));
					return false;
				} else {
					for(var i = 0; i < playernName.length; i++) {
						if(escape(playernName[i]).indexOf("%u") < 0) { //不是中文
							nameLength += 1;
						} else { //中文
							nameLength += 2;
						}
						if(nameLength > 12) {
							cutIndex = i;
							if(this.$i18n.locale== 'zh-CN'){
								this.$toast.center('用户名长度过长');
							}else{
								this.$toast.center('Long User Name Length');
							}

							return false;
						}
					}
				}

				this.UserInfo.gender = this.radio;
				let arr = $('#uploadImg')[0].src.split(',')
				this.UserInfo.photo= arr[1];

				let formData = new FormData();
                formData.append('user_info_mod',  JSON.stringify(this.UserInfo));
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };

				userinfomod(formData,config).then(data => {
					if(data.code == 200) {
						this.getUserInfos = data.data;
						var headName = this.UserInfo.nickName;
						$('#headName').html(headName);
						this.$toast.center(this.$t('person.editSuccess'));
						this.tish = false;
						this.tish1 = false;
						this.isinfo1 = false;
						this.rightNick = false;
						document.location.reload();
						//	console.log(data);
					} else {
						this.UserInfo.nickName = ""
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});
			},
			nextChain() {
				uploadphoto(this.imgUrl).then(data => {
					if(data.success == 0) {
						document.getElementById('headImg').setAttribute('src', this.imgsrc);
						this.$toast.center(this.$t('person.uploadFinish'));
						//	console.log(data);
						//this.isShow=3;
					}
				});
			},
			//添加交易所
			addExchange() {
				if(this.UserInfo.walletPoolId == "") {
//					this.$toast.center(this.$t('person.generateAddress'));
//					return false;
				} else {
					this.chaininfos.depositAddress = this.UserInfo.walletPoolId;
				}

				if(this.inputs.exchange.name == "" || this.inputs.secret == "" || this.inputs.apikey == "") {
					this.$toast.center(this.$t('person.btx'));
					return false;
				} else {
					var exchangeAccount = {}
					exchangeAccount.exchangeId = this.inputs.exchange.id;
					exchangeAccount.exchange = this.inputs.exchange.name;
					exchangeAccount.secret = this.inputs.secret
					exchangeAccount.apikey = this.inputs.apikey
					exchangeAccount.fee_tax=parseFloat(this.inputs.fee_tax);
					exchangeAccount.exchangeAccountName = this.inputs.nickname;
					exchangeAccount.user_id=this.UserInfo.userId;
					this.chaininfos.tradeAccountDTO = exchangeAccount;
				}

				let formData = new FormData();
                formData.append('account_info',  JSON.stringify(exchangeAccount));
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };

				regionalChain(formData,config).then(data => {
					if(data.code == 200) {
						this.$toast.center(this.$t('person.uploadit'));
						//	console.log(this.inputs);
						this.getAccountList();
						//	console.log(data);
						this.inputs = {
							exchange: {},
							secret: "",
							apikey: "",
							fee_tax: '',
						}
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});
			},
			toemail() { //绑定邮箱
				this.noemail = false;
			},
			successPass() { //确认密码
				this.updatapassword.newpassword = this.newpasswords;
				this.updatapassword.password = this.passwords;
				if(this.passwords == "") {
					this.passwordNull = true;
					return false;
				} else {
					this.passwordNull = false;
				}
				if(this.newpasswords == "") {
					this.newpassNull = true;
					return false;
				} else {
					this.newpassNull = false;
				}
				if(this.comfirmpass == "") {
					this.confirmNull = true;
					return false;
				} else {
					this.confirmNull = false;
				}
				if(this.newpasswords != this.comfirmpass) {
					this.confirmError = true;
					return false;
				} else {
					this.confirmError = false;
				}
				this.newpassNull = false;
				this.passwordNull = false
				this.confirmError = false;

				var params={};
				params.old_password=this.updatapassword.password
				params.new_password=this.updatapassword.newpassword
				let formData = new FormData();
                formData.append('password',  JSON.stringify(params));
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };

				updatePassword(formData,config).then(data => {
					if(data.code == 200) {
						//	console.log(data);
						this.isblue1 = false;
						var t;
						clearTimeout(t)
						setTimeout(function() {
							localStorage.setItem('token', "");
							location.reload();
						}, 3000);

					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});
			},

			resetpass() {//提交短信验证码
//				this.$toast.center(this.$t('person.passcode'));
//				this.isblue = false;
				var resetpass = {};
				resetpass.code = this.codes;
				resetpass.phone = this.UserInfo.mobile;
				resetpass.smid = this.messagecode.smid;
				if(this.UserInfo.country=="86"){
					resetpass.templateCode = "5";
				}else{
					resetpass.templateCode = "8";
				}

				var reg = new RegExp("^[0-9]{4,6}$");
				if(resetpass.smid == "" || resetpass.smid == undefined || typeof resetpass.smid == "undefined") {
					this.$toast.center(this.$t('login.verifycode'));
					return false;
				}
				if(this.codes == "") {
					this.$toast.center(this.$t('person.nocode'));

				} else if(!reg.test(this.codes)) {
					this.$toast.center(this.$t('person.code6'));
				} else {

					let formData = new FormData();
	                formData.append('authenticate',  JSON.stringify(resetpass));
	                let config = {
	                  headers:{'Content-Type':'multipart/form-data'}
	                };

					authenticate(formData,config).then(data => {
						if(data.code == 200) {
							this.$toast.center(this.$t('person.passcode'));
							this.isblue = false;
						} else {
							this.$toast.center(this.$t('msg.msg'+data.code));
						}
					});
				}
			},
			shortmessage(id) {
				this.messageData1.countryCode = this.UserInfo.country;
				this.messageData1.phone = this.UserInfo.mobile;
				if(this.UserInfo.country=="86"){
					this.messageData1.templateCode = "5";
				}else{
					this.messageData1.templateCode = "8";
				}
				getMessage(this.messageData1).then(data => {
					if(data.code == 200) {
						this.timer = setInterval(this.start60, 1000);
						//   	console.log(data);
						this.showit = false;
						this.messagecode.smid = data.data;
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});
				//60s倒计时
			},
			start60: function() {
				if(this.message60 <= 0) {
					this.message60 = 60;
					this.showit = true;
					clearInterval(this.timer);
				} else {
					this.message60--;
				}
			},
			//用户账户管理
			toUserInfo(id) {
				this.isinfo = id;
				if(id == 1) {
					this.isShow = 1;
				} else {
					this.isShow = 5;
				}
			},
			//点击充值页面
			Recharge() {

			},
			getParam() {
				if(this.$route.params.relogin) {
					this.userinfo(3, 1);
				}
			},
			//用户收支记录表
			getInoutLog(page) {
				var inoutParms = {};
				inoutParms.userId = this.UserInfo.userId;
				inoutParms.pageNum = page;
				inoutParms.pageSize = 10;

				let formData = new FormData();
                formData.append('input',  JSON.stringify(inoutParms));
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };

				getInoutLog(formData,config).then(data => {
					if(data.code== 200) {
						if(data.data.data==null){
							this.inoutList =[];
						}else{
							this.inoutList = data.data.data;
						}


						this.CurrentPage = data.data.page;
						this.perpage = data.data.total_page;
					} else {
						if(data.message != "") {
							//this.$toast.center(data.message);
						}

					}
				});
			},
			getAccountList(){
				var params={};
				params.user_id=this.UserInfo.userId
				getAccountList(params).then(data => {
					if(data.code == 200) {
						this.accountList=data.data;
					} else {
						this.accountList=data.data;
					}
				});
			},
			nextHref() {
				if(document.referrer === '') {
					$('.jsBack').attr('href', '/');
				}
			},
			check(item, index) {
				this.radios.forEach((item) => {
					item.isChecked = false;
				});
				//再设置当前点击项选中
				this.radio = this.radios[index].value;
				// 设置值，以供传递
				this.radios[index].isChecked = true;
			},
			//用户充值记录表
			RechargeOrder(page) {
				var rechargeParms = {};
				rechargeParms.userId = this.UserInfo.userId;
				rechargeParms.pageNum = page;
				rechargeParms.pageSize = 10;

				let formData = new FormData();
                formData.append('input',  JSON.stringify(rechargeParms));
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };

				rechargeOrder(formData,config).then(data => {
					if(data.code == 200) {
						//	console.log(data);

						if(data.data.data==null){
							this.rechargeList =[];
						}else{
							this.rechargeList = data.data.data;
						}

						this.CurrentPage1 = data.data.page;
						this.perpage1 = data.data.total_page;
					} else {
						//this.$toast.center(data.message);

					}
				});
			},
			toFile(){
				$('#file').click();
			},
			getFeeTax(){
				for(var i=0;i<this.exchangeList.length;i++){
					if(this.inputs.exchange.id==this.exchangeList[i].id){
						this.inputs.fee_tax=this.exchangeList[i].fee_tax
					}
				}

			},
			//关闭弹窗
			inity() {
				var _this = this;
				$("#addModal").on("hidden.bs.modal", function() {
					_this.inputs.apikey = '';
					_this.inputs.secret = '';

					_this.inputs.exchange = "";
					_this.inputs.nickname = "";

				});
			},
			//获取用户基本信息
			getUseInfo(){
				getUserInfo(this.UserInfo).then(data => {
					if(data.code == 200) {
						this.UserInfo = data.data;
						this.userType=data.data.userType;
						this.application=data.data.Application;
						this.radio = this.UserInfo.gender;

						localStorage.setItem("phonenum",this.UserInfo.mobile);
						for(var i = 0; i < 2; i++) {
							if(this.radios[i].value == this.radio) {
								this.radios[i].isChecked = true;
							}
						}
						this.phoneChange();
						this.getAccountList();
						this.accountId();
						this.getParam();
						this.qrcodeScan();
						this.getInoutLog(1);
						this.RechargeOrder(1);
						var file = "data:image/png;base64," + data.data.photoUrl;
						this.imgsrc = file;
						this.imgUrl.photo = data.data.photoUrl;
						if(this.UserInfo.netValue == null || this.UserInfo.netValue == "") {
							this.UserInfo.netValue = 0;
							this.tish2 = true;
						} else {
							this.tish2 = false;
						}
						if(this.UserInfo.walletPoolId != "" && this.UserInfo.nickName != null) {
							this.isinfo3 = false;
						}
						if(this.UserInfo.nickName != "" && this.UserInfo.nickName != null) {
							this.isinfo1 = false;

						}
						if(this.UserInfo.photoUrl == "" || this.UserInfo.photoUrl == null) {
							this.isphoto = false;
						} else {
							this.isphoto = true;
						}
						//删除交易所为空的数据
						if(this.accountList != null) {
							for(var key in this.accountList) {
								if(this.accountList[key].Exchange == null || this.accountList[key].Exchange == "") {
									this.accountList.splice(key, 1);
								}
							};
						}
					} else {
						//   console.log(data)
					}
				});
			}


		},

		created: function() {
			this.phoneChange();
		},
		mounted() {

			$('.con-left').css("min-height", document.documentElement.clientHeight - 66 + "px")
//			$('.con-right').css("min-height", document.documentElement.clientHeight - 106 + "px")
			this.$nextTick(() => {
				if(this.lastUrl === "/proApply") {
					this.isinfo = 2;
					this.isShow = 5;
				}
			})
			this.getUseInfo();
			for(var key in this.accountList) {
				if(this.accountList[key].Exchange == null || this.accountList[key].Exchange == "") {
					this.accountList.splice(key, 1);
				}
			};

			this.getCountry(); //获取国家信息
			this.getExchanges(); //获取交易所信息
			this.nextHref();
			this.inity();

		}
	}


</script>

<style scoped>
	.per-selected {
		background: url(../assets/img/schover@2x.png) no-repeat;
		background-size:contain ;
		color: #fff !important;
	}
	.modal-dialog {
    	width: 95% !important;
	}

	.per-selected span {
		color: #fff;
	}

	.sub-list {
		color: #fff;
		font-size: 13px;
		display: block;
		padding: 10px 5px 10px 50px;
		-moz-transition: all 0.2s ease-out 0s;
		-webkit-transition: all 0.2s ease-out 0s;
		transition: all 0.2s ease-out 0s;
	}

	.navActive {
		border-radius: 4px;
		background-color: #ffffff;
	}

	.bgblue {
		background: #6a8abe;
		/*color: #6a8abe;*/
		color: #fff;
	}

	.radio-box {
		display: inline-block;
		position: relative;
		height: 36px;
		line-height: 36px;
		margin-right: 5px;
	}

	.radio {
		display: inline-block;
		width: 36px;
		height: 36px;
		vertical-align: middle;
		cursor: pointer;
		/*background-image: url(../../static/images/uncheck.png);*/
		background-repeat: no-repeat;
		background-position: 0 0;
	}

	.input-radio {
		display: inline-block;
		position: absolute;
		opacity: 0;
		width: 36px;
		height: 36px;
		cursor: pointer;
		left: 0px;
		outline: none;
		-webkit-appearance: none;
	}

	.on {
		/*background-image: url(../../static/images/checked.png);*/
		background-size: 100% 100%;
	}

	.wxts {
		width: 344px;
		height: 30.8px;
		padding: 5px 10px;
		background-color: #dcdcdc;
		color: #000;
		font-size: 14px;
	}

	.line_gray {
		padding: 0;
		margin-left: -20px;
		width: 270px;
		height: 1px;
		-webkit-backdrop-filter: blur(40px);
		backdrop-filter: blur(40px);
		background-color: rgba(220, 220, 220, 0.82);
	}

	.title2 {
		height: 50px;
		line-height: 32px;
		font-size: 18px;
		color: #000;
		text-align: center;
	}

	.leftsure {
		width: 80px;
		height: 25px;
		line-height: 25px;
		border-radius: 2px;
		border: 1px solid #055ccb;
		background-color: #ffffff;
		text-align: center;
		margin-left: 25px;
		color: #055ccb;
		cursor: pointer;
	}

	.rightsure {
		width: 80px;
		height: 25px;
		line-height: 25px;
		color: #FFFFFF;
		border-radius: 2px;
		background-color: #055ccb;
		text-align: center;
		margin-left: 45px;
		cursor: pointer;
	}

	.pigna {
		width: 100%;
	    text-align: center;
	    height: 50px;
	}

	.pagination {
		margin: auto;
		float: right;
	}

	.exchanges:hover {
		color: #fff;
		text-shadow: none;
	}

	.delete {
		font-size: 14px;
		margin-right: 4px;
	}

	.sc {
		color: #006DCC;
		font-size: 12px;
		min-width: 3em;
		display: inline-block;
		text-decoration: underline;
		cursor: pointer;
	}

	.yc {
		cursor: pointer;
		color: #006DCC;
		font-size: 12px;
		text-decoration: underline;
	}

	.sc:hover,
	.yc:hover {
		text-decoration: underline;
		color: #333333;
	}

	.ercodes {
		width: 200px;
		height: 200px;
		margin: 20px auto 10px auto;
		padding: 20px;
		box-shadow: 0 2px 4px 0 rgba(5, 92, 203, 0.5);
		border: solid 1px rgba(5, 92, 203, 0.5);
		background-color: #ffffff;
		background-repeat: no-repeat;
	}

	.gd34 {
		height: 34px;
	}

	.dottedline {
		width: 100%;
		margin-bottom: 20px;
		margin-top: 4em;
		border-bottom: dotted 1px #dcdcdc;
	}

	.bc-btn:hover,
	.bc-btn:active {
		box-shadow: 0 2px 10px 0 rgba(6, 100, 218, 0.5);
	}

	.point {
		cursor: pointer;
		color: #0664da;
		text-decoration: underline;
	}

	.point:hover,
	.point:active {
		text-decoration: underline;
		color: #333;
	}

	.chakan {
		font-size: 14px;
		color: #0664da;
		float: right;
		width: 50px;
		text-align: center;
		text-decoration: underline;
	}

	.chakan:hover,
	.chakan:active {
		text-decoration: underline;
		color: #333;
	}

	.times {
		float: left;
		font-size: 18px;
		;
		color: #999999;
	}

	.dw {
		float: right;
		font-size: 14px;
		color: #999999;
	}

	.robotname {
		color: #0664da;
		font-size: 24px;
		margin-top: 40px;
	}

	.Rechargelist {
		padding: 0 4px;
		cursor: pointer;
		color: #333;
		border-bottom: 1px solid #dcdcdc;
	}

	.pappers {
		cursor: pointer;
		color: #666666;
		text-align: left;
	}

	.recharges {
		text-align: center;
		height: 35px;
		/*line-height:35px;*/
		font-size: 14px;
		font-weight: 500;
		color: #718EBD;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.tableOver {
		width: 100%;
		overflow: auto;
	}

	.tablecell {
		color: #999999;
		text-align: left;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #dcdcdc;
	}

	.title1 {
		font-size: 30px;
		color: #055ccb;
		text-align: center;
		margin-top: -0.6em;
	}

	.qb {
		font-size: 20px;
		color: #999999;
		text-align: center;
		margin-top: 30px;
	}

	.qbdz {
		font-size: 1.2em;
		line-height: 1.65em;
		letter-spacing: normal;
		color: #666666;
		margin: 10px;
	}

	.fuzhi {
		font-size: 14px;
		color: #055ccb;
		text-align: center;
		cursor: pointer;
	}

	.top10 {
		margin-top: 30px;
	}

	.ts1 {
		font-size: 16px;
		color: #718EBD;
	}

	.ts1 p {
		margin-bottom: 10px;
	}

	.ts2 {
		font-size: 18px;
		color: #fff;
	}

	.mybalance {
		font-size: 1.4em;
		color: #055ccb;
		margin-right: 2px;
	}

	.balancenone {
		font-size: .6em;
		color: #e80d0d;
		margin-left: 10px;
	}

	.balance1 {
		font-size: 1.15em;
		padding: 0;
	}

	.myImg {
		max-height: 116px;
		max-width: 116px;
		margin: auto;
	}

	.imgupload {
		position: relative;
		width: 45%;
		height: 60px;
		border: solid 1px #dcdcdc;
		background-color: #f5f5f5;
		font-size: 1.2em;
		font-weight: 500;
		color: #666666;
		line-height: 60px;
		text-align: center;
	}

	.fileup {
		position: absolute;

		opacity: 0.01;
		top: 0;
	}

	.titletx {
		color: #333333;
		font-size: 22px;
	}

	.tstx {
		color: #666666;
		font-size: 14px;
		margin-top: 18px;
		margin-bottom: 3em;
		min-width: 260px;
	}

	.con-img {
		text-align: center;
		padding-top: 55px;
		margin-top: 20px;
		margin-right: 20px;
		width: 100%;
		height: 313px;
		border: solid 1px #dcdcdc;
		background-color: #f5f5f5;
	}

	.size1 {
		font-size: 18px;
		color: #666666;
		margin-top: 5px
	}

	.line-bors-1 {
		float: left;
		margin-top: 40px;
		height: 615px;
		width: 1px;
		background-color: #dcdcdc;
	}

	.emailno {
		min-width: 100px;
		height: 30px;
		margin-top: 10px;
		font-size: 20px;
		color: #cccccc;
	}

	.wz1 {
		width: 50%;
		height: 60px;
		border: solid 1px #dcdcdc;
		background-color: #f5f5f5;
		font-size: 12px;
		color: #999999;
	}

	.sfyz {
		position: absolute;
		margin-top: 70px;
		font-size: 16px;
		margin-left: -1.5em;
		min-width: 100px;
		text-align: center;
	}

	.lanse {
		position: relative;
		float: left;
		color: #0664da;
	}

	.huise {
		float: left;
		color: #d8d8d8;
	}

	.login-box1 {
		padding-right: 0px !important;
		width:100%;
		height: 550px;
		border-radius: 4px;
		box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
		background-color: #ffffff;
	}

	.login-box2 {
		width: 344px;
		height: 141px;
		background-color: #ffffff;
		margin: auto;
	}


	.group1 {
		min-height: 30px;
		font-size: 18px;
		margin-bottom: 40px;
		margin-top: 40px;
	}
	.modal-body{
		padding: 0 !important;
	}

	.border4 {
		border-radius: 2px;
		box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.21);
		background-color: #ffffff;
	}

	.addbtn {
		width: 130px;
		height: 35px;
		border-radius: 2px;
		font-size: 18px;
		font-weight: 500;
		color: #055ccb;
		border: solid 1px #055ccb;
		background-color: #ffffff;
	}

	.tx-info {
		float: left;
		font-size: 12px;
		color: #999999;
		padding-top: 1.2em;
		margin-right: -100%;
	}

	.tx-info1 {
		margin-bottom: -30px;
		height: 30px;
		font-size: 12px;
		color: red;
		padding-top: .8em;
		margin-left: 185px;
	}

	.surebtn {
		width: 200px;
		height: 60px;
		background:none;
		line-height: 50px !important;
		font-size: 18px;
		font-weight: 500;
		color: #ffffff;
	}

	.change {
		width: 15%;
		float: left;
		font-size: 14px;
		text-align: right;
	}

	.inputit {
		font-size: 14px;
		text-align: right;
		width: 85%;
		width: 15%;
		float: left;
	}

	.bg-white {
		background: #FFFFFF;
	}

	@media screen and (min-width: 768px) {
		.modal-dialog {
			width: 420px;
			margin: 100px auto;
		}
	}

	.bc {
		width: 200px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		color: #fff;
		/* background-color: #999999;*/
		cursor: pointer;
	}

	.titles {
		font-size: 1.15em;
	}

	.add {
		color: #fff;
		font-size: 12px;
		margin-right: 5px;
		opacity: 0.9;
	}

	.add1 {
		color: #055ccb;
		font-size: 18px;
		margin-right: 5px;
		opacity: 0.9;
	}


	.tjzh {
		font-size: 14px;
		text-align: center;
		color: #fff;
		width: 115px;
		line-height: 36px;
		height: 36px;
		border-radius: 18px;
		box-shadow: 0 3px 12px 0 rgba(6, 100, 218, 0.5);
		background-color: #0664da;
	}

	.borders2 {
		background-color: #ffffff;
		padding: 0;
	}

	.lineheigt40 {
		line-height: 40px;
		font-size: 1.15em;
		color: #666666;
		padding: 0;
	}

	.linenone {
		width: 15px;
		display: inline-block;
		border-top: 1px solid #666666;
		margin: auto;
	}


	.exchanges {
		text-align: center;
		height: 35px;
		line-height: 35px;
		font-size: 14px;
		font-weight: 500;
		color: transparent;
		text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.infos {
		text-align: center;
		height: 50px;
		line-height: 50px;
		font-size: 14px;
		font-weight: 500;
		color: #718EBD;
		overflow: hidden;
	}

	.rightinfo {
		margin-left: 0;
		padding: 0;
		text-align: center;
		line-height: 40px;
		height: 40px;
		border-radius: 2px;
		background-color: #ffffff;
		color: #99999;
	}

	.input1 {
		width: 85%;
		height: 100%;
		border: none;
	}

	.btn1:focus {
		color: #999;
		outline: none;
	}

	.btn1:hover {
		color: #999;
		outline: none;
	}

	.btn1 {
		height: 36px;
		border-radius: 0;
		background: #fff;
		width: 15%;
		margin-left: 0;
		text-align: center;
		border-right: none;
		border-top: none;
		border-bottom: none;
		margin-top: -4px;
		border-left: 1px solid #dcdcdc;
		font-size: 12px;
		font-size: 12px;
	}

	.colorblue {
		color: #055ccb;
	}

	.tit-active {
		color: rgb(113, 142, 189);
	}

	.select-tp {
		height: 60px;
		background: #f5f5f5;
		border: solid 1px #dcdcdc;
		font-size: 24px;
		font-weight: 500;
		color: #666666;
	}

	.emailyz {
		cursor: pointer;
		position: absolute;
		min-width: 109px;
		margin-top: 2.8em;
		font-size: 14px;
		color: #055ccb;
		margin-left: 10px;
		text-decoration: underline;
	}

	.tx-red {
		min-width: 408px;
		position: absolute;
		margin-top: 4.7em;
		font-size: 12px;
		color: #e80d0d;
	}

	.txt-red {
		position: absolute;
		margin-top: 0.2em;
		font-size: 12px;
	}

	.red-wz {
		color: #e80d0d;
	}

	.gray-wz {
		color: #999999;
	}

	.content {
		margin-left: 0px !important;
		width: 100%;
	}

	.wrappers {
		background:none;
		padding-top: 0;
		padding: 0px !important;
		overflow: hidden;
	}

	.borders {
		border: 2px solid #dcdcdc;
		color: #333333;
	}

	.con-left {
		float: left;
		width: 215px;
		min-height: 890px;
	}

	.con-right {
		float: left;
		width: 1088px;
		margin-left: 97px;
		background: url(../assets/img/robotbox@2x.png) no-repeat;
		background-size:cover ;
	}

	.nikename {
		min-width: 90px;
		max-width: 120px;
		float: left;
	}

	.person-title {
		color: #fff;
		background: #5c6a8a;
		width: 927px;
		border: 2px solid #5c6a8a;
		height: 45px;
		line-height: 45px;
		padding-left: 25px;
		font-size: 16px;
	}

	.top0 {
		color: #333333;
		margin-top: 0;
	}

	.squares3 {
		float: left;
		border-radius: 25px;
		font-size: 30px;
		color: #fff;
		text-align: center;
		line-height: 50px;
		width: 50px;
		height: 50px;
		background-color: #0664da;
	}

	.phonenum {
		font-size: 1.2em;
		color: #999999;
		padding-top: 1em;
	}

	.dxjk:hover,
	.dxjk:active,
	.dxjk:focus {
		color: #000000;
	}

	.dxjk {
		border: solid 1px #dcdcdc;
		background-color: #ffffff;
		border-radius: 0;
		min-width: 140px;
	}

	.tellnum {
		line-height: 34px;
		color: #fff;
		float: left;
	}

	.yanzhm {
		min-width: 220px;
		text-align: right;
		float: left;
		line-height: 34px;
	}

	.tellnum1 {
		color: #999999;
		float: left;
		margin-left: 2%;
	}

	.bluebg {
		background-color: #7FCEFF;
	}

	.graybg {
		background-color: #d8d8d8;
	}

	.grayline {
		box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
		background-color: #d8d8d8;
	}

	.bars3 {
		margin-top: 65px;
		margin-left: 0;
		float: left;
		width: 160px;
		height: 4px;
	}

	.basicInfo {
		background-color: #f6f8f8;
	}

	.padd0 {
		padding: 0;
	}

	.panel {
		background: none;
		box-shadow: none;
	}

	.radio {
		margin-top: 0;
	}
	/*.form-group{
		width:100%;
		margin-top:10px;
	}*/

	.panel {
		text-align: left;
	}

	.fa .fa-user {
		font-size: 32px;
		margin-right: 10px;
	}

	.fontw {
		cursor: pointer;
		line-height: 45px;
		font-weight: 600;
		font-family: PingFangSC;
		text-align: center;
		font-size: 1.15em;
	}
	/*.active{
		width: 100%;
		height: 68px;
		background-color: #f6f8f8;
	}*/

	.title-l {
		cursor: pointer;
		font-size: 1.15em;
	}

	.title-r {

	}

	.title-r1 {
		font-size: 1em;
	}

	.col-lg-9 input:focus {
		border-radius: 2px;
		border: solid 1px #055ccb;
	}

	.col-lg-9 input:active {
		border-radius: 2px;
		border: solid 1px #055ccb;
	}

	.col-lg-9 .form-control:active {
		border-radius: 2px;
		border: solid 1px #055ccb;
	}

	.col-lg-9 .form-control:focus {
		border-radius: 2px;
		border: solid 1px #055ccb;
	}

	.netBlack {
		color: #718EBD;
	}

	.per-tit {
		font-size: 18px;
		color: #fff;
	}

	.per-text:hover {
		color: #fff;
	}
	.percontent-text{
		font: 14px;
		color: #718EBD;
	}
	.main-content{
		min-height: auto !important;
	}
	.per-sidebtn{
		line-height: 58px;
		color: #718EBD;
		border-bottom: 1px solid #ffffff12;
	}
	.per-topline{
		padding: 20px 0px !important;
		border-top: 1px solid #ffffff12;
	}
	.pagination > .disabled > a{
		color: #fff !important;
	    cursor: not-allowed !important;
	    border-color: #ddd !important;
	    background: none !important;
	}
	.pagination > .active > a{
		background-color: rgb(113, 142, 189) !important;
		border-color:rgb(113, 142, 189) !important;
	}
	.pagination > li > a:hover{
		color: #fff !important;
		background: none !important;
	}
	.pagination > li > a{
		color: #fff !important;
		background: none !important;
	}
</style>
