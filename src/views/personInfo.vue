<template>
	<div class="main-content content" style="padding-top: 150px;">
		<div class="wrapper wrappers" style="min-width: 1400px;width: 1400px;margin: 0 auto;">
			<div class="con-left padd0">
				<div >
					<div class="lg-width" style="width: 100%;text-align: center;">
						<div class="lg-row" style="border-bottom: 1px solid #ffffff12;padding-bottom: 15px;" @click="toUserInfo(1)" >
							<span class="per-tit">{{$t('person.personal')}}</span>
						</div>
						<div class="lg-row">
							<div class="lg-row per-sidebtn" style="cursor: pointer;position: relative;" @click="layoutTitIndex(1,1,0)" v-bind:class="{'per-selected':isShow==1}">
								<span class="netBlack per-text" style="font-size: 14px;">{{$t('person.basic')}}</span>
								<i class="fa fa-chevron-right" style="top: 22px;position: absolute;right: 5px;" v-show="isShow==1"></i>
							</div>
							<!--<div class="lg-row " style="cursor: pointer;margin-top: 16px;" @click="userinfo(2,1)" v-bind:class="{'per-selected':isShow==2}">
								<span class="netBlack per-text" style="font-size: 14px;">{{$t('person.avatar')}}</span>
							</div>-->
							<div class="lg-row per-sidebtn" style="cursor: pointer;position: relative;" @click="userinfo(3,1)" v-bind:class="{'per-selected':isShow==3}">
								<span class="netBlack per-text" style="font-size: 14px;">{{$t('person.blockchain')}}</span>
								<i class="fa fa-chevron-right" style="top: 22px;position: absolute;right: 5px;" v-show="isShow==3"></i>
							</div>
							<div class="lg-row per-sidebtn" style="cursor: pointer;position: relative;" @click="userinfo(4,1)" v-bind:class="{'per-selected':isShow==4}"><!--修改密码nav-->
								<span class="netBlack per-text" style="font-size: 14px;">{{$t('person.passwords')}}</span>
								<i class="fa fa-chevron-right" style="top: 22px;position: absolute;right: 5px;" v-show="isShow==4"></i>
							</div>

						</div>
						<div class="lg-row" @click="toUserInfo(2)" style="margin-top: 40px;border-bottom: 1px solid #ffffff12;padding-bottom: 15px;">
							<span class="per-tit">{{$t('person.account')}}</span>
						</div>
						<div class="lg-row">
							<div class="lg-row per-sidebtn" style="cursor: pointer;position: relative;" @click="userinfo(5,2)" v-bind:class="{'per-selected':isShow==5}">
								<span class="netBlack per-text" style="font-size: 14px;">{{$t('person.accountinfo')}}</span>
								<i class="fa fa-chevron-right" style="top: 22px;position: absolute;right: 5px;" v-show="isShow==5"></i>
							</div>
							<div class="lg-row per-sidebtn" style="cursor: pointer;position: relative;" @click="userinfo(6,2)" v-bind:class="{'per-selected':isShow==6}">
								<span class="netBlack per-text" style="font-size: 14px;">{{$t('person.accountinfo1')}}</span>
								<i class="fa fa-chevron-right" style="top: 22px;position: absolute;right: 5px;" v-show="isShow==6"></i>
							</div>
							<div class="lg-row per-sidebtn" style="cursor: pointer;position: relative;" @click="userinfo(7,2)" v-bind:class="{'per-selected':isShow==7}">
								<span class="netBlack per-text" style="font-size: 14px;">{{$t('person.accountinfo2')}}</span>
								<i class="fa fa-chevron-right" style="top: 22px;position: absolute;right: 5px;" v-show="isShow==7"></i>
							</div>
							<!--<div class="lg-row per-sidebtn" style="cursor: pointer" @click="userinfo(8,2)" v-bind:class="{'per-selected':isShow==8}">
								<span class="netBlack per-text" style="font-size: 14px;">{{$t('person.accountinfo3')}}</span>
							</div>-->
						</div>
					</div>
				</div>
			</div>



			<div class="con-right padd0" v-show="isinfo==1">
				<p class="per-tit" style="border-bottom: 1px solid #ffffff12;margin-bottom: 0px;line-height: 90px;padding-left: 50px;"  v-show="isShow==1">{{$t('person.personalManage')}}</p>
				<p class="per-tit" style="border-bottom: 1px solid #ffffff12;margin-bottom: 0px;line-height: 90px;padding-left: 50px;"  v-show="isShow==3">{{$t('person.blockchain')}}<span style="margin-left: 10px;color: #718EBD;font-size: 16px;">{{$t('person.exchanges')}}</span></p>
				<p class="per-tit" style="border-bottom: 1px solid #ffffff12;margin-bottom: 0px;line-height: 90px;padding-left: 50px;"  v-show="isShow==4">{{$t('person.passwords')}}</p><!--修改密码-->
				<p class="per-tit" style="border-bottom: 1px solid #ffffff12;margin-bottom: 0px;line-height: 90px;padding-left: 50px;"  v-show="currentTit == 1">{{$t('person.mobileBind')}}</p>
				<p class="per-tit" style="border-bottom: 1px solid #ffffff12;margin-bottom: 0px;line-height: 90px;padding-left: 50px;"  v-show="currentTit == 2">{{$t('person.mobileModify')}}</p>
				<p class="per-tit" style="border-bottom: 1px solid #ffffff12;margin-bottom: 0px;line-height: 90px;padding-left: 50px;"  v-show="currentTit == 3">{{$t('person.mailBind')}}</p>
				<p class="per-tit" style="border-bottom: 1px solid #ffffff12;margin-bottom: 0px;line-height: 90px;padding-left: 50px;"  v-show="currentTit == 4">{{$t('person.mailModify')}}</p>

				<div class="lg-row" style="width: 100%;" v-show="isShow==1">
					<!--修改头像  入口-->
					<div class="lg-width per-topline" style="width: 100%;padding-top: 0px !important;">
						<div class="lg-width" style="width: 120px;text-align: left;margin-top: 38px;"><label class="percontent-text">{{$t('person.avatar')}}</label></div>
						<div class="lg-width crbt-input" style="padding-left: 50px;width: 864px;">
							<div class="lg-width" @click="toFile" style="margin-top: 20px;cursor:pointer;width: 53px;height: 53px;overflow: hidden;text-align: center;border-radius:35px ;">
								<img class="myImg" id="uploadImg" v-bind:src="imgsrc" v-show="isphoto" style="width: 53px;height: 53px;" />
							</div>
                           	<div class="input-group m-bot15" style="margin-bottom: 0px;margin-top: 50px;float:right;width: 21px;">
								<span style="width: 28px;color: #718EBD;display: block;position: relative;top: -13px;cursor: pointer;" v-show="ifUpload" @click="toFile">{{$t('person.edit')}}</span>
								<span style="width: 28px;color: #718EBD;display: block;position: relative;top: -13px;cursor: pointer;" @click="changePhoto" v-show="!ifUpload">{{$t('login.tips2')}}</span>
                        	</div>
                        	<input @change="getFile" type="file" id="file" class="fileup">
                        </div>
					</div>
					<!--修改昵称 入口-->
					<div class="lg-width per-topline" style="width: 100%;">
						<div class="lg-width" style="width: 120px;text-align: left;margin-top: 11px;"><label class="percontent-text"> {{$t('person.nickname')}}</label></div>
						<div class="lg-width" style="width: 360px;margin-left: 15px;">
							<input type="text" :readonly="ifReadyonly" v-focus="!ifReadyonly" class="form-control nickNameInput" style="border-bottom: none !important;padding-left: 35px !important;font-size: 16px;" v-model="nickNameDefault" placeholder="">
						</div>
						<p style="min-width: 29px;float: right;margin-top: 10px;color: #718EBD;cursor: pointer;" v-show="ifEditeNickName" @click="nicknameEdit">{{$t('person.edit')}}</p>
						<p style="min-width: 29px;float: right;margin-top: 10px;color: #718EBD;cursor: pointer;" v-show="!ifEditeNickName" @click="changeNickName">{{$t('login.tips2')}}</p>
					</div>
					<!--修改手机号码  入口-->
					<div class="lg-width per-topline" style="width: 100%;">
						<div class="lg-width" style="width: 120px;text-align: left;margin-top: 20px;"><label class="percontent-text"> {{$t('net.phonenumber')}}</label></div>
						<div class="lg-width" style="width: 360px;margin-left: 15px;font-size:16px;">
							<div style="color: #fff;position: relative;top: 22px;left: 33px;" v-show="UserInfo.mobile != ''">{{'+'+  UserInfo.country}}</div>
							<input type="text" readonly="readonly" class="form-control nickNameInput" style="border-bottom: none !important;padding-left: 65px !important;font-size: 16px;margin-top: -8px;" v-model="UserInfo.mobile" placeholder="" v-show="UserInfo.mobile != ''">
							<span v-show="UserInfo.mobile== ''" style="padding-left:33px;color:#fff;font-size:16px;line-height:47px;">{{$t('person.nothing')}}</span>
						</div>
						<p style="min-width: 29px;float: right;margin-top: 17px;color: #718EBD;cursor: pointer;" @click="layoutTitIndex(12,1,2)"  v-show="UserInfo.mobile!=''">{{$t('person.edit')}}</p>
						<p style="min-width: 29px;float: right;margin-top: 17px;color: #718EBD;cursor: pointer;" @click="layoutTitIndex(10,1,1)"  v-show="UserInfo.mobile == ''">{{$t('person.binding')}}</p>
					</div>
					<!--修改邮箱   入口-->
					<div class="lg-width per-topline" style="width: 100%;">
						<div class="lg-width" style="width: 120px;text-align: left;margin-top: 11px;"><label class="percontent-text"> {{$t('person.mailAddress')}}</label></div>
						<div class="lg-width" style="width: 360px;margin-left: 15px;font-size:16px;">
							<input type="text" readonly="readonly" class="form-control nickNameInput" style="border-bottom: none !important;padding-left: 35px !important;font-size: 16px;" v-model="UserInfo.mail" placeholder="" v-show="UserInfo.mail != ''">
							<span v-show="UserInfo.mail == ''" style="padding-left:33px;font-size:16px;color:#fff;line-height:47px;">{{$t('person.nothing')}}</span>
						</div>
						<p style="min-width: 29px;float: right;margin-top: 10px;color: #718EBD;cursor: pointer;"   v-show="UserInfo.mail!=''" @click="layoutTitIndex(20,1,4)">{{$t('person.edit')}}</p>
						<p style="min-width: 29px;float: right;margin-top: 10px;color: #718EBD;cursor: pointer;"   v-show="UserInfo.mail==''" @click="layoutTitIndex(18,1,3)">{{$t('person.binding')}}</p>
					</div>
					<!--修改性别  入口-->
					<div class="lg-width per-topline" style="width: 100%;">
						<div class="lg-width" style="width: 120px;text-align: left;margin-top: 8px;"><label class="percontent-text">{{$t('person.gender')}}</label></div>
						<div class="lg-width" style="width: 360px;margin-left: 15px;padding-left: 35px;font-size:16px;">
							<div class="userinfo-gender" v-show="genderDefault">
								<div class="person-sex" data-gender="1" v-show="currentGender==1" style="color:#fff;margin-bottom: 0;">{{$t('person.male')}}</div>
								<div class="person-sex" data-gender="2" v-show="currentGender==2" style="color:#fff;margin-bottom: 0;">{{$t('person.female')}}</div>
								<div class="person-sex" data-gender="3" v-show="currentGender==3 || currentGender==''" style="color:#fff;margin-bottom: 0;">{{$t('person.secrecy')}}</div>
							</div>
							<div v-show="!genderDefault" style="margin-top: 8px;">
								<input class="boxs" style="margin-top: -2px;" type="radio"  :checked="currentGender == 1" @change="currentGender=1">
								<label style="margin-left: 8px;color: #718EBD;margin-right:50px;"> {{$t('person.male')}} </label>
								<input class="boxs" style="margin-top: -2px;" type="radio"  :checked="currentGender == 2" @change="currentGender=2">
								<label style="margin-left: 8px;color: #718EBD;margin-right:50px;"> {{$t('person.female')}}</label>
								<input class="boxs" style="margin-top: -2px;" type="radio"  :checked="currentGender == 3 || currentGender == ''" @change="currentGender=3">
								<label style="margin-left: 8px;color: #718EBD;margin-right:50px;"> {{$t('person.secrecy')}} </label>
							</div>
						</div>
						<p style="min-width: 29px;float: right;margin-top: 10px;color: #718EBD;cursor: pointer;" @click="genderDefault=false" v-show="genderDefault">{{$t('person.edit')}}</p>
						<p style="min-width: 29px;float: right;margin-top: 10px;color: #718EBD;cursor: pointer;" @click="changeGender" v-show="!genderDefault">{{$t('login.tips2')}}</p>
					</div>
				</div>
                 <!--手机号绑定   start-->
				<!--<div class="col-lg-12 col-sm-12 title-r"  v-show="isShow==10">-->
					<div class="bind-tel-wrap" style="padding-bottom:50px;padding-left:50px;padding-top:20px;position:relative" v-show="isShow == 10">
						<div class="clearfix" style="width: 100%;">
							<div style="font-size: 14px;color: rgb(113, 142, 189);min-width: 70px;float: left;margin-left: 33px;margin-top: 28px;margin-bottom: 32px;">{{$t('net.phonenumber')}}</div>
							<div class="lg-width" style="width: 70px;height: 45px;margin-top: 19px;margin-left:4px;">
								<select class="form-controls lg-border" v-model="cuntryCode">
									<option value="86">{{$t('net.china')}}</option>
									<option value="1">{{$t('net.us')}}</option>
									<option value="1">{{$t('net.canada')}}</option>
									<option value="82">{{$t('net.southkorea')}}</option>
								</select>
							</div>
							<div style="float:left;width:160px;margin-top:19px;margin-left:15px;">
								<input class="form-control" type="text" :placeholder="$t('login.phoneNull')" v-model="bindNewPhoneParams.phone">
							</div>
							<span style="color:#718EBD;font-size:12px;font-weight:400;float:left;padding-top:28px;padding-left:14px;">{{$t('person.zqMobile')}}</span>
						</div>
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);min-width: 70px;margin-left: 33px;margin-top: 28px;">{{$t('net.verificationCode')}}</div>
							<div class="fl" style="float:left;width:128px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.iptCode')" style="width:100%;height:40px;float:left;" v-model="bindNewPhoneParams.code">
							</div>
							<div class="fl getcode">
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">
									<span v-show="isGet" @click="getMessage(3)">{{$t('person.getCode')}}</span>
									<span v-show="!isGet">{{$t('person.reGetCode')}}{{messageCD}}s</span>
								</div>
							</div>
						</div>
						<p style="padding-left: 66px;font-size:12px;color:#FD7777;font-weight: 400;padding-top:10px;" v-show="ifCorrect">{{$t('person.codeErrorReget')}}</p>
						<!--下一步-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="bindNewPhone(1)">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
						</div>
					</div>
					<!--手机号码绑定成功-->
					<div class="bind-tel-suc-wrap" style="text-align: center;padding-bottom: 30px;position:relative;" v-show="isShow == 11">
						<img src="../assets/img/userinfo/suc.png" style="margin:14px 0;width:94px;"/>
						<p style="font-size:14px;font-weight:400;line-height:19px;color:#fff;">{{$t('person.mobileYetBind')}}</p>
						<!--确认-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="toReload">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('login.tips2')}}</button>
						</div>
					</div>
			<!--	</div>-->
				<!--手机号修改   start-->
				<!--<div  style="position:relative;">-->
					<!--修改手机号码  手机号码是否正常使用-->
					<div class="bind-tel-wrap" style="padding-left:50px;position:relative;padding-bottom:40px;" v-show="isShow == 12">
						<div class="" style="width: 100%;padding-top:30px">
							<span style="font-size:14px;font-weight:400;color:#718EBD">{{$t('person.currentbindMobile')}}：</span><span style="font-size:16px;font-weight:400;color:#fff;">{{'+'+UserInfo.country}} {{UserInfo.mobile}}</span>
						</div>
						<div class="" style="padding-top:30px">
							<input class="boxs" style="margin-top: -2px;" type="radio" :checked="ifUsePhone" @change="ifUsePhone=!ifUsePhone">
							<span style="color:#718EBD;font-size:14px;font-weight:400;padding-left:4px">{{$t('person.mobileCanUse')}}</span>
						</div>
						<div style="padding-top:30px">
							<input class="boxs" style="margin-top: -2px;" type="radio" :checked="!ifUsePhone" @change="ifUsePhone=!ifUsePhone">
							<span style="color:#718EBD;font-size:14px;font-weight:400;padding-left:4px;">{{$t('person.unuseMobile')}}</span>
						</div>
						<!--取消    下一步-->
						<ul style="position:absolute;bottom:-110px;left:50%;margin-left:-130px;" class="clearfix">
							<li class="fl" style="font-size:16px;color:#718EBD;font-weight: 400;line-height:56px;cursor: pointer;" @click="userinfo(1,1)">{{$t('netnew.Cancle')}}</li>
							<li style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;cursor: pointer;position: relative;margin-left:70px;" class="fl"  @click="getPhoneStatus">
								<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
								<button style="width:100%;height:100%;text-align: center;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
							</li>
						</ul>
					</div>
					<!--手机号正常使用   验证原手机号-->
					<div class="" style="padding-left:50px;padding-bottom:50px;position:relative;" v-show="isShow == 13">
						<div class="" style="width: 100%;padding-top:30px">
							<span style="font-size:14px;font-weight:400;color:#718EBD">{{$t('person.currentbindMobile')}}</span><span style="font-size:16px;font-weight:400;color:#fff;">{{'+'+UserInfo.country}} {{UserInfo.mobile}}</span>
						</div>
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);min-width: 70px;margin-top:32px;">{{$t('net.verificationCode')}}</div>
							<div class="fl" style="float:left;width:128px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.iptCode')" style="width:100%;height:40px;float:left;" v-model="verifyPhoneParams.code">
							</div>
							<div class="fl getcode">
								<!--<img src="../assets/img/userinfo/getcode.png" style="width:90px;height:38px;position:absolute;left:0;top:0;">-->
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">
									<span v-show="isGet" @click="getMessage(2)">{{$t('person.getCode')}}</span>
									<span v-show="!isGet">{{$t('person.reGetCode')}}{{messageCD}}s</span>
								</div>
							</div>
						</div>
						<p style="padding-left: 66px;font-size:12px;color:#FD7777;font-weight: 400;padding-top:10px;" v-show="codeError">{{$t('person.codeErrorReget')}}</p>
						<!--下一步-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="verifyPhone(1)">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
						</div>
					</div>
					<!--新手机绑定-->
					<div class="bind-tel-wrap" style="padding-bottom:50px;position:relative;" v-show="isShow == 14">
						<div class="clearfix" style="width: 100%;">
							<div style="font-size: 14px;color: rgb(113, 142, 189);min-width: 70px;float: left;margin-left: 33px;margin-top: 28px;margin-bottom: 32px;">{{$t('person.newMobile')}}</div>
							<div class="lg-width" style="min-width: 70px;height: 45px;margin-top: 19px;margin-left:4px;">
								<select class="form-controls lg-border" v-model="cuntryCode">
									<option value="86">{{$t('net.china')}}</option>
									<option value="1">{{$t('net.us')}}</option>
									<option value="1">{{$t('net.canada')}}</option>
									<option value="82">{{$t('net.southkorea')}}</option>
								</select>
							</div>
							<div style="float:left;width:160px;margin-top:19px;margin-left:15px;">
								<input class="form-control" type="text" :placeholder="$t('login.phoneNull')" v-model="bindNewPhoneParams.phone">
							</div>
							<span style="color:#718EBD;font-size:12px;font-weight:400;float:left;padding-top:28px;padding-left:14px;">{{$t('person.zqMobile')}}</span>
						</div>
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);min-width: 70px;margin-left: 33px;margin-top: 28px;">{{$t('net.verificationCode')}}</div>
							<div class="fl" style="float:left;width:128px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.iptCode')" style="width:100%;height:40px;float:left;" v-model="bindNewPhoneParams.code">
							</div>
							<div class="fl getcode">
								<!--<img src="../assets/img/userinfo/getcode.png" style="width:90px;height:38px;position:absolute;left:0;top:0;">-->
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">
									<span v-show="isGet" @click="getMessage(3)">{{$t('person.getCode')}}</span>
									<span v-show="!isGet">{{$t('person.reGetCode')}}{{messageCD}}s</span>
								</div>
							</div>
						</div>
						<p style="padding-left: 66px;font-size:12px;color:#FD7777;font-weight: 400;padding-top:10px;" v-show="codeError">{{$t('person.codeErrorReget')}}</p>
						<!--确认-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="bindNewPhone(2)">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
						</div>
					</div>
					<!--手机号码修改成功-->
					<div class="bind-tel-suc-wrap" style="text-align: center;position:relative;" v-show="isShow == 15">
						<img src="../assets/img/userinfo/suc.png" style="margin:14px 0;width:94px;"/>
						<p style="font-size:14px;font-weight:400;line-height:19px;color:#fff;">{{$t('person.modSucMobile')}}</p>
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="toReload">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('login.tips2')}}</button>
						</div>
					</div>

					<!--原手机号码不可使用   邮箱已绑定  邮箱验证码验证后在进行修改号码-->
					<div style="padding-bottom:50px;padding-left:50px;position:relative;" v-show="isShow == 16">
						<div class="" style="width: 100%;padding-top:30px">
							<span style="font-size:14px;font-weight:400;color:#718EBD">{{$t('person.curBindMail')}}</span><span style="font-size:16px;font-weight:400;color:#fff;">{{UserInfo.mail}}</span>
						</div>
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);margin-top:32px;min-width:70px;">{{$t('net.verificationCode')}}</div>
							<div class="fl" style="float:left;width:128px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.iptCode')" style="width:100%;height:40px;float:left;"  v-model="verifyPhoneParams.code">
							</div>
							<div class="fl getcode">
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">
									<span v-show="isGet" @click="getMailCode(2)">{{$t('person.getCode')}}</span>
									<span v-show="!isGet">{{$t('person.reGetCode')}}{{messageCD}}s</span>
								</div>
							</div>
						</div>
						<p style="padding-left: 66px;font-size:12px;color:#FD7777;font-weight: 400;padding-top:10px;" v-show="codeError">{{$t('person.codeErrorReget')}}</p>
						<!--下一步-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="verifyPhone(2)">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
						</div>
					</div>
					<!--原手机号码不可用    邮箱未绑定  先进行邮箱绑定  在进行获取验证码进行更换绑定手机-->
					<div class="bind-email-wrap" style="padding:0 0 50px 50px;position:relative" v-show="isShow == 17">
						<div  class="lg-row clearfix">
							<span class="fl" style="color:#718EBD;font-size:14px;font-weight: 400;padding-top:28px;">{{$t('person.curBindMail')}}</span>
							<span class="fl" style="color:#fff;font-size:16px;font-weight: 400;padding-top:28px;padding-right:30px;">{{$t('person.nobindMail')}}</span>
							<div class="fl" @click="layoutTitIndex(18,1,2)" style="padding:0 4px;min-width:100px;position:relative;margin-top:20px;">
								<img src="../assets/img/userinfo/getcode.png" style="width:100%;height:38px;position:absolute;left:0;top:0;">
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">{{$t('person.bzemail')}}</div>
							</div>
						</div>
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);min-width: 70px;margin-top:32px;">{{$t('net.verificationCode')}}</div>
							<div class="fl" style="float:left;width:128px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.iptCode')" style="width:100%;height:40px;float:left;">
							</div>
							<div class="fl" style="min-width:100px;height:38px;position:relative;margin-top:20px;margin-left:10px;cursor: pointer;">
								<img src="../assets/img/userinfo/getcode.png" style="width:100%;height:38px;position:absolute;left:0;top:0;">
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">{{$t('person.getCode')}}</div>
							</div>
						</div>
						<!--下一步-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
						</div>
					</div>
			<!--	</div>-->
				<!--邮箱绑定  start-->
				<!--<div  v-show="isShow==10" style="position:relative;">-->
					<!--邮箱绑定  start-->
					<div style="padding-left:50px;padding-bottom:50px;position:relative;" v-show="isShow == 18">
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);margin-top:32px;min-width:70px">{{$t('person.mailAddress')}}</div>
							<div class="fl" style="float:left;width:160px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.mailAddress')" style="width:100%;height:40px;float:left;" v-model="bindNewMailParams.email">
							</div>
							<span class="fl" style="color:#718EBD;font-size:12px;padding-top:30px;">{{$t('person.zqMail')}}</span>
						</div>
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);margin-top:32px;min-width:70px">{{$t('net.verificationCode')}}</div>
							<div class="fl" style="float:left;width:128px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.iptCode')" style="width:100%;height:40px;float:left;" v-model="bindNewMailParams.code">
							</div>
							<div class="fl getcode">
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">
									<span v-show="isGet" @click="getMailCode(1)">{{$t('person.getCode')}}</span>
									<span v-show="!isGet">{{$t('person.reGetCode')}}{{messageCD}}s</span>
								</div>
							</div>
						</div>
						<p style="padding-left: 66px;font-size:12px;color:#FD7777;font-weight: 400;padding-top:10px;" v-show="codeError">{{$t('person.codeErrorReget')}}</p>
						<!--下一步-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;"  @click="bindNewMail(1)">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
						</div>
					</div>
					<!--您的邮箱地址已绑定成功-->
					<div class="bind-tel-suc-wrap" style="text-align: center;padding-bottom: 30px;position:relative" v-show="isShow == 19">
						<img src="../assets/img/userinfo/suc.png" style="margin:14px 0;width:94px;"/>
						<p style="font-size:14px;font-weight:400;line-height:19px;color:#fff;">{{$t('person.mailSucvbind')}}</p>
						<!--确认-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="toReload">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('login.tips2')}}</button>
						</div>
					</div>
					<!--邮箱地址修改  邮箱是否正常使用-->
					<div class="bind-tel-wrap" style="padding-left:50px;padding-bottom:30px;position:relative;" v-show="isShow == 20">
						<div class="" style="width: 100%;padding-top:30px">
							<span style="font-size:14px;font-weight:400;color:#718EBD">{{$t('person.curBindMail')}}</span><span style="font-size:16px;font-weight:400;color:#fff;">{{UserInfo.mail}}</span>
						</div>
						<div class="" style="padding-top:30px">
							<input class="boxs" style="margin-top: -2px;" type="radio" :checked="ifUseMail" @change="ifUseMail=!ifUseMail">
							<span style="color:#718EBD;font-size:14px;font-weight:400;padding-left:4px">{{$t('person.canuseMial')}}</span>
						</div>
						<div style="padding-top:30px">
							<input class="boxs" style="margin-top: -2px;" type="radio" :checked="!ifUseMail" @change="ifUseMail=!ifUseMail">
							<span style="color:#718EBD;font-size:14px;font-weight:400;padding-left:4px;">{{$t('person.unuseMial')}}</span>
						</div>
						<!--{{$t('netnew.Cancle')}}    下一步-->
						<ul style="position:absolute;bottom:-110px;left:50%;margin-left:-130px;" class="clearfix">
							<li class="fl" style="font-size:16px;color:#718EBD;font-weight: 400;line-height:56px;" @click="userinfo(1,1)">{{$t('netnew.Cancle')}}</li>
							<li style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;cursor: pointer;position: relative;margin-left:70px;" class="fl" @click="getEmailStatus">
								<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
								<button style="width:100%;height:100%;text-align: center;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
							</li>
						</ul>
					</div>
					<!--新邮箱地址绑定-->
					<div style="padding-left:50px;padding-bottom:50px;position:relative;" v-show="isShow == 22">
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);min-width: 90px;margin-top:32px;">{{$t('person.newMailAddress')}}</div>
							<div class="fl" style="float:left;width:160px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.mailAddress')" style="width:100%;height:40px;float:left;" v-model="bindNewMailParams.email">
							</div>
							<span class="fl" style="color:#718EBD;font-size:12px;padding-top:30px;padding-left:10px">{{$t('person.zqMail')}}</span>
						</div>
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);min-width: 90px;margin-top:32px;">{{$t('net.verificationCode')}}</div>
							<div class="fl" style="float:left;width:128px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.iptCode')" style="width:100%;height:40px;float:left;" v-model="bindNewMailParams.code">
							</div>
							<div class="fl getcode">
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">
									<span v-show="isGet" @click="getMailCode(1)">{{$t('person.getCode')}}</span>
									<span v-show="!isGet">{{$t('person.reGetCode')}}{{messageCD}}s</span>
								</div>
							</div>
						</div>
						<p style="padding-left: 66px;font-size:12px;color:#FD7777;font-weight: 400;padding-top:10px;" v-show="codeError">{{$t('person.codeErrorReget')}}</p>
						<!--下一步-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="bindNewMail(2)">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
						</div>
					</div>
					<!--您的邮箱地址已修改成功-->
					<div class="bind-tel-suc-wrap" style="text-align: center;padding-bottom: 30px;position:relative" v-show="isShow == 23">
						<img src="../assets/img/userinfo/suc.png" style="margin:14px 0;width:94px;"/>
						<p style="font-size:14px;font-weight:400;line-height:19px;color:#fff;">{{$t('person.mailModifySuc')}}</p>
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="toReload">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('login.tips2')}}</button>
						</div>
					</div>

					<!--手机号码未绑定   先绑定手机号在进行验证码验证-->
					<div class="bind-tel-wrap" style="padding:20px 0 50px 50px;position:relative;" v-show="isShow == 25">
						<div  class="lg-row clearfix">
							<span class="fl" style="color:#718EBD;font-size:14px;font-weight: 400;padding-top:28px;">{{$t('person.currentbindMobile')}}</span>
							<span class="fl" style="color:#fff;font-size:16px;font-weight: 400;padding-top:28px;padding-right:30px;">{{$t('person.unbindMobile')}}</span>
							<div class="fl" style="min-width:100px;height:38px;position:relative;margin-top:20px;margin-left:10px;cursor: pointer;" @click="layoutTitIndex(10,1,1)">
								<img src="../assets/img/userinfo/getcode.png" style="min-width:100px;height:38px;position:absolute;left:0;top:0;">
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">{{$t('person.bzemail')}}</div>
							</div>
						</div>
						<div class="lg-row clearfix">
							<div class="fl" style="font-size: 14px;color: rgb(113, 142, 189);min-width: 70px;margin-top:32px;">{{$t('net.verificationCode')}}</div>
							<div class="fl" style="float:left;width:128px;margin-top:20px;margin-left:4px;">
								<input class="form-control" type="text" :placeholder="$t('person.iptCode')" style="width:100%;height:40px;float:left;">
							</div>
							<div class="fl" style="width:100px;height:38px;position:relative;margin-top:20px;margin-left:10px;cursor: pointer;">
								<img src="../assets/img/userinfo/getcode.png" style="width:100px;height:38px;position:absolute;left:0;top:0;">
								<div style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;">{{$t('person.getCode')}}</div>
							</div>
						</div>
						<!--下一步-->
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('netnew.nextstep')}}</button>
						</div>
					</div>
		<!--		</div>-->
				<div class="col-lg-12 col-sm-12 title-r" style="padding-left: 0;padding-right: 0;" v-show="isShow==3">
					<!--<div class="col-lg-12 col-sm-12" style="margin-top:1.5em;">-->
						<!--<div class="lg-width per-text" style="font-weight: bold;width: 180px;text-align: right;margin-top: 8px;">{{$t('person.address')}}</div>-->
						<!--<div class="rightinfo">
							<div class="lg-width" style="margin-left: 15px;"><input type="text" readonly size="42" class="form-control" style="width: 360px;"></div>-->
							<!-- v-model="UserInfo.walletPoolId"-->
							<!--<div class="lg-width" style="margin-left: 15px;">
								<label style="font-weight: 500;cursor: pointer;"  @click="generate" v-bind:class="{'colorblue':isred}" v-show="istext1">{{$t('person.bear')}}</label>
								<label style="font-weight: 500;cursor: pointer;" v-clipboard:copy="UserInfo.walletPoolId" v-clipboard:success="onCopy" v-clipboard:error="onError" v-bind:class="{'colorblue':isred}" v-show="!istext1">{{$t('person.copy')}}</label>-->
								<!--<p class="help-block txt-red red-wz" v-show="istext1">{{$t('person.generate')}}</p>
	                              		<p class="help-block txt-red gray-wz" v-show="!istext1">{{$t('person.addresstips')}}</p>-->
                      		<!--</div>
						</div>-->

					<!--</div>-->
					<div class="col-lg-12 col-sm-12" style="padding-left: 0;padding-right: 0;">
						<!--<div class="lg-width per-text" style="font-weight: bold;width: 180px;text-align: right;margin-top: 8px;">{{$t('person.exchanges')}}</div>-->
						<div class="borders2">
							<div class="col-lg-12" style="background-color:none;padding-left: 0;padding-right: 0;border-bottom: 1px solid #ffffff12;">
								<div class="col-lg-3 infos" >
									{{$t('person.exchange')}}
								</div>
								<!--<div class="col-lg-2 infos" >
									Access Key
								</div>
								<div class="col-lg-2 infos" >
									Secret
								</div>-->
								<div class="col-lg-3 infos" >
									{{$t('person.nickname1')}}
								</div>
								<div class="col-lg-3 infos" >
									{{$t('person.isvalid')}}
								</div>
								<div class="col-lg-3 infos" >
									{{$t('person.action')}}
								</div>
							</div>
							<div class="col-lg-12" style="background-color:none;padding-left: 0;padding-right: 0;" v-for="(item,index) in accountList">
								<div class="col-lg-3 infos">
									{{item.Exchange}}
								</div>
								<!--<div class="col-lg-2 exchanges">
									{{item.ApiKey}}
								</div>
								<div class="col-lg-2 exchanges">
									{{item.Secret}}
								</div>-->
								<div class="col-lg-3 infos">
									{{item.ExchangeAccountName}}
								</div>
								<div class="col-lg-3 infos">
									<span v-show="item.IsAvailable==true"><img :src="valid" width="22px" /></span>
									<span v-show="item.IsAvailable==false"><img :src="invalid" width="22px" /></span>
								</div>
								<div class="col-lg-3 infos">
									<a  style="color: #718EBD;cursor: pointer;"  @click="deleteAcc(index,$event)" >
										{{$t('person.delete')}}
									</a>
									<a style="color: #718EBD;cursor: pointer;margin-left: 10px;" href="#editModal" @click="editItem(index,$event)" data-toggle="modal">
										{{$t('person.edit')}}
									</a>
								</div>
							</div>

							<div class="col-lg-12" style="background-color: none;">
								<div class="col-lg-3 infos">
									<span class="linenone"></span>
									<span class="linenone"></span>

								</div>
								<div class="col-lg-3 infos">
									<span class="linenone"></span>
									<span class="linenone"></span>

								</div>
								<div class="col-lg-3 infos">
									<span class="linenone"></span>
									<span class="linenone"></span>
								</div>
								<div class="col-lg-3 infos">
									<span class="linenone"></span>
									<span class="linenone"></span>
								</div>
							</div>
						</div>
						<div class="col-lg-12" style="margin-top: 72px; margin-bottom: 72px;text-align: center;">
							<a class="btn btn-xs" style="padding: 0;" >
								<div class="btn surebtn" style="position: relative;font-size: 16px;">
								<img class="light-btn" @click="clear"  href="#addModal" data-toggle="modal" style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 100;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
									{{$t('person.addAccount')}}
								</div>
							</a>
						</div>
					</div>

				</div>
				<div v-show="isShow==4" style="position:relative;padding-left:50px;width:100%;padding-bottom: 50px;"><!--修改密码-->
						<div class="phonenum" style="padding-top:20px">
							<div class="clearfix">
								<div class="fl" style="width:90px;color:#718EBD;font-size:14px;text-align: right;padding-top:10px;">{{$t('person.yPwd')}}</div>
								<div class="tellnum fl">
									<input id="title1" type="password" :placeholder="$t('person.password1')" value="" class="form-control" v-model="passwords" style="padding-left:7px;">
								</div>
								<div class="fl getbackpwd" @click="topForgetPwd">
									<a href="#myModal"  data-toggle="modal" style="display: block;color: #fff!important;">{{$t('person.forgetPwd')}}</a>
								</div>
							</div>
							<div class="tx-info1" v-show="passwordError">
								<span>{{$t('person.error1')}}</span>
							</div>
							<div class="tx-info1" v-show="passwordNull">
								<span>{{$t('person.error3')}}</span>
							</div>
						</div>
						<div class="phonenum">
							<div class="clearfix">
								<div class="fl" style="width:90px;color:#718EBD;font-size:14px;text-align: right;padding-top:10px;">{{$t('person.newPwd')}}</div>
								<div class="tellnum fl">
									<input id="title2" type="password" :placeholder="$t('person.password2')" value="" class="form-control" v-model="newpasswords" style="padding-left:7px;">
								</div>
							</div>

							<div class="tx-info1" v-show="newpassNull">
								<span>{{$t('person.error4')}}</span>
							</div>
						</div>
						<div class="phonenum" style="margin-bottom: 25px;">
							<div class="clearfix">
								<div class="fl" style="width:90px;color:#718EBD;font-size:14px;text-align: right;padding-top:10px;">{{$t('person.confirmPwd')}}</div>
								<div class="tellnum fl">
									<input id="title3" type="password" :placeholder="$t('person.password3')" value="" class="form-control" v-model="comfirmpass" style="padding-left:7px;">
								</div>
							</div>
							<div class="tx-info1" v-show="confirmError">
								<span>{{$t('person.error2')}}</span>
							</div>
							<div class="tx-info1" v-show="confirmNull">
								<span>{{$t('person.error5')}}</span>
							</div>
						</div>
						<div style="width:156px;height:56px;text-align: center;color:#fff;line-height: 56px;position:absolute;bottom:-110px;left:50%;margin-left: -78px;cursor: pointer;" @click="successPass">
							<img src="../assets/img/userinfo/next.png" style="width:156px;height:56px;position:absolute;left:0;top:0;">
							<button style="width:100%;height:100%;text-align: center;line-height:38px;color:#fff;background-color: transparent;padding:0;border:none;">{{$t('person.confirm')}}</button>
						</div>
					<!--<div class="col-lg-12 col-sm-12" style="margin-top:40px;">
						<div class="lanse">
							&lt;!&ndash;<div class="squares3 bulebg">1</div>&ndash;&gt;
							<img src="../assets/img/sfyz@2x.png" style="width: 113px;">
							<p class="sfyz" style="color: #718EBD;top: 50px;left: 30px;">1.{{$t('person.Authentication')}}</p>
						</div>
						<div class="bars3 bluebg"></div>
						<div class="bars3" v-bind:class="{'bluebg':!isblue}"></div>
						<div class="huise">
							&lt;!&ndash;<div class="squares3 " v-bind:class="{'graybg':isblue,'bluebg':!isblue}">2</div>&ndash;&gt;
							<img src="../assets/img/szmm@2x.png" style="width: 95px;margin-top: 15px;" v-show="isblue">
							<img src="../assets/img/szmmwc.png" style="width: 95px;margin-top: 15px;" v-show="!isblue">
							<p class="sfyz" style="top:48px;margin-left: -4px;" v-bind:class="{'tit-active':!isblue}">2.{{$t('person.newpassword')}}</p>
						</div>
						<div class="bars3" v-bind:class="{'bluebg':!isblue}"></div>
						<div class="bars3" v-bind:class="{'bluebg':!isblue1}"></div>
						<div class="huise">
							&lt;!&ndash;<div class="squares3" v-bind:class="{'graybg':isblue1,'bluebg':!isblue1}">3</div>&ndash;&gt;
							<img src="../assets/img/wanc@2x.png" style="width: 95px;margin-top: 5px;" v-show="isblue1">
							<img src="../assets/img/wancs.png" style="width: 95px;margin-top: 10px;" v-show="!isblue&&!isblue1">
							<p class="sfyz"  style="top:48px;margin-left: 1px;" v-bind:class="{'tit-active':!isblue1}">3.{{$t('person.finish')}}</p>
						</div>
					</div>
					<div class="col-lg-12 phonenum" style="padding-top:5.5em" v-show="isblue">
						<div class="yanzhm">{{$t('person.Verify')}}</div>
					</div>
					<div class="col-lg-12 phonenum" style="margin-bottom: 45px;" v-show="isblue">
						<div class="tellnum" style="padding-left: 25px;width: 250px;">
							<input id="title" value="" :placeholder="$t('person.code')" style="padding-left: 0px;" class="form-control" v-model="codes">
						</div>
						<div class="tellnum1">
							<button class="btn btn-block dxjk" style="background: none;" @click="shortmessage('5')"><span style="color:#718EBD;" v-show="showit">{{$t('person.messagecode')}}</span><span style="color:#718EBD;" v-show="!showit">{{message60}}(s)</span></button>
						</div>
					</div>

					&lt;!&ndash;<div class="col-lg-offset-4 col-lg-8" style="margin-top:2.5em;padding-bottom: 50px;" v-show="isblue">
						<div class="bc bc-btn" style="position: relative;">
							<img class="light-btn"  @click="resetpass" style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 100;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							{{$t('person.confirm')}}
						</div>
					</div>&ndash;&gt;

					<div class="col-lg-12"  v-show="!isblue&&isblue1">
						<div class="col-lg-12 phonenum" style="margin-top:40px">
							<div class="tellnum">
								<input id="title1" type="password" :placeholder="$t('person.password1')" value="" class="form-control" v-model="passwords">
							</div>
							<div class="tx-info1" v-show="passwordError">
								<span>{{$t('person.error1')}}</span>
							</div>
							<div class="tx-info1" v-show="passwordNull">
								<span>{{$t('person.error3')}}</span>
							</div>

						</div>
						<div class="col-lg-12 phonenum">
							<div class="tellnum">
								<input id="title2" type="password" :placeholder="$t('person.password2')" value="" class="form-control" v-model="newpasswords">
							</div>
							<div class="tx-info1" v-show="newpassNull">
								<span>{{$t('person.error4')}}</span>
							</div>
						</div>
						<div class="col-lg-12 phonenum" style="margin-bottom: 25px;">
							<div class="tellnum">
								<input id="title3" type="password" :placeholder="$t('person.password3')" value="" class="form-control" v-model="comfirmpass">
							</div>
							<div class="tx-info1" v-show="confirmError">
								<span>{{$t('person.error2')}}</span>
							</div>
							<div class="tx-info1" v-show="confirmNull">
								<span>{{$t('person.error5')}}</span>
							</div>
						</div>
					</div>
					&lt;!&ndash;<div class="col-lg-offset-4 col-lg-8 tj" style="margin-top:2.5em;" v-show="!isblue&&isblue1">

						<div class="bc bc-btn" @click="successPass" style="position: relative;">
							<img class="light-btn"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 5000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							{{$t('person.submits')}}</div>
					</div>&ndash;&gt;

					<div class="col-lg-12" style="margin:auto;padding-top:2em;padding-bottom: 25px;" v-show="!isblue1&&!isblue">
						<div style="float:left;margin-left: 10px;">
							<p style="color:#718ebd;font-size:24px;margin-top:0.8em;">{{$t('person.complete')}}</p>
							<p style="color: #718ebd;font-size:24px;margin-top:0.8em;">{{$t('person.remenber')}}</p>
						</div>
					</div>
					<div class="lg-width" style="position: absolute; top: 450px; left: 40%;width: 200px;" v-show="isblue">
						<div style="position: relative;">
							<img class="light-btn"  @click="resetpass" style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 5000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							<div class="bc bc-btn" >{{$t('person.confirm')}}</div>
						</div>
					</div>
					<div class="lg-width" style="position: absolute; top: 450px; left: 40%;width: 200px;" v-show="!isblue&&isblue1">
						<div style="position: relative;">
							<img class="light-btn"  @click="successPass" style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 5000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							<div class="bc bc-btn" >{{$t('person.confirm')}}</div>
						</div>
					</div>-->
				</div>

			</div>
			<div class="con-right padd0" v-show="isinfo==2">
				<p class="per-tit" style="margin-top: 30px;padding-left: 45px;padding-bottom: 25px;border-bottom: 1px solid #ffffff12;margin-bottom: 0px;" v-show="isShow==5">{{$t('person.accountinfo')}}
					<span v-show="userType==1" style="font-size:14px ;color: #718EBD;margin-left: 15px;">{{$t('netnew.nmqsh')}}</span>
					<span v-show="userType==3" style="font-size:14px ;color: #718EBD;margin-left: 15px;"> {{$t('netnew.yszybyh')}}</span>
				</p>
				<p class="per-tit" style="margin-top: 30px;padding-left: 45px;padding-bottom: 25px;border-bottom: 1px solid #ffffff12;margin-bottom: 0px;" v-show="isShow==6">{{$t('person.accountinfo1')}}</p>
				<p class="per-tit" style="margin-top: 30px;padding-left: 45px;padding-bottom: 25px;border-bottom: 1px solid #ffffff12;margin-bottom: 0px;" v-show="isShow==7">{{$t('person.accountinfo2')}}</p>
				<p class="per-tit" style="margin-top: 30px;padding-left: 45px;padding-bottom: 25px;border-bottom: 1px solid #ffffff12;margin-bottom: 0px;" v-show="isShow==8">{{$t('person.accountinfo3')}}</p>
				<section style=" height:50px;">
					<!--background-color: #f5f5f5;-->
					<div class="col-lg-10 col-sm-12 title-r1" style="width: 100%;padding: 0;" v-show="isShow==5">
						<div v-show="userType!=3">
							<div class="lg-width" style="width: 50%;padding-left: 45px;">
								<div class="lg-width" style="width: 100%;margin-top: 45px;">
									<span v-show="$i18n.locale=='en-US'&&!application" style="color: #718EBD;">You can apply to become a Professional Version user when you have over 50,000 NET</span>
									<span v-show="$i18n.locale=='zh-CN'&&!application" style="color: #718EBD;">NET满5万可以申请成为专业版用户</span>
									<span v-show="$i18n.locale=='ko'&&!application" style="color: #718EBD;">NET의 만 5만으로 프로 사용자로 신청이 가능합니다</span>
									<span v-show="application&&userType!=2" style="color: #718EBD;">{{$t('netnew.ndsyydq')}}</span>
									<span v-show="application&&userType==2" style="color: #718EBD;">{{$t('netnew.mfsyjzrq')}}{{tryOverDay}}</span>
								</div>
								<div class="lg-width" style="width: 100%;margin-top: 25px;">
									<button v-show="userType!=3" class="card-btm"  style="position: relative;float:left;font-size: 16px;" href="#applyModal" data-toggle="modal">
										{{$t('netnew.ktzyb')}}
									</button>
									<span v-show="!application&&userType!=3" style="color:#718EBD ; margin-left: 30px;line-height: 60px;cursor: pointer;" href="#trialModal" data-toggle="modal">{{$t('netnew.mfsy')}} </span>
									<span v-show="application&&userType==2&&$i18n.locale=='zh-CN'" style="color:#718EBD ; margin-left: 30px;line-height: 60px;"> {{$t('netnew.sysy')}}{{UserInfo.less_days}}{{$t('market.day')}}</span>
									<span v-show="application&&userType==2&&$i18n.locale=='en-US'" style="color:#718EBD ; margin-left: 30px;line-height: 60px;"> {{UserInfo.less_days}} days remaining in your trial</span>
									<span v-show="application&&userType==2&&$i18n.locale=='ko'" style="color:#718EBD ; margin-left: 30px;line-height: 60px;">  테스트 기간이 {{UserInfo.less_days}}일 남았습니다</span>
									<span v-show="application&&userType==1" style="color:#718EBD ; margin-left: 30px;line-height: 60px;"> {{$t('netnew.sygzyb')}}</span>
									<span v-show="userType==3" style="color:#718EBD ; margin-left: 30px;line-height: 60px;"> {{$t('netnew.yszybyh')}}</span>
								</div>
							</div>
							<div class="lg-width" style="width: 45%;margin-left: 5%;">
								<div class="col-lg-12 col-sm-12" style="margin-top:20px">
									<div class="col-lg-2 col-sm-6 lineheigt40" style="color:#718EBD;width: 35%;padding-left: 0;">{{$t('person.wallet')}} <i class="fa fa-clipboard" style="cursor: pointer;" aria-hidden="true" v-clipboard:copy="UserInfo.walletPoolId" v-clipboard:success="onCopy" v-clipboard:error="onError"></i></div>
									<div class="col-lg-12 rightinfo" style="padding-left: 0; padding-right: 0;background: none;">
										<div class="lg-width" style="width: 80%;">
											<input type="text" readonly size="42" class="form-control input1" v-model="UserInfo.walletPoolId" style="padding-left: 0;padding-right: 0;" >
										</div>

										<!--<div v-show="!UserInfo.walletPoolId" @click="createWallet" class="lg-width" style="color: rgb(113, 142, 189);font-size: 14px;cursor: pointer;margin-left: 3%;">生成地址</div>
										<div href="#getQrcode" data-toggle="modal" v-show="UserInfo.walletPoolId" class="lg-width" style="color: rgb(113, 142, 189);font-size: 14px;cursor: pointer;margin-left: 3%;">二维码</div>-->
									</div>
								</div>
								<div class="col-lg-12 col-sm-12 top10">
									<div class="col-lg-2 col-sm-6 balance1" style="color:#718EBD;width: 20%;padding-left: 0;">{{$t('person.Balance')}}</div>
									<div class="col-lg-8">
										<span style="font-size:.9em;color:#fff"><span class="mybalance" style="color:#fff">{{UserInfo.netValue}}</span>NET</span>

										<span class="balancenone" v-show="tish2">
			                               <span>
			                               	<img :src="noNet" style="width:14px;margin-right: 2px;"/>
			                               </span> {{$t('person.balance1')}}
										</span>

									</div>
									<!--<button v-show="!tish2" class="card-btm" href="#withdraw" data-toggle="modal"  style="position: relative;float:left;">
										{{$t('netnew.tixian')}}
									</button>-->
								</div>
							</div>
						</div>
						<div class="lg-width" style="width: 95%;margin-left: 2.5%;" v-show="userType==3">
							<div class="col-lg-12 col-sm-12" style="margin-top:20px">
								<div class="col-lg-2 col-sm-6 lineheigt40" style="color:#718EBD;width: 35%;padding-left: 0px;">{{$t('person.wallet')}} <i class="fa fa-clipboard" style="cursor: pointer;" aria-hidden="true" v-clipboard:copy="UserInfo.walletPoolId" v-clipboard:success="onCopy" v-clipboard:error="onError"></i></div>
								<div class="col-lg-12 rightinfo" style="padding-left: 0; padding-right: 0;background: none;">
									<div class="lg-width" style="width: 80%;">
										<input type="text" readonly size="42" class="form-control input1" v-model="UserInfo.walletPoolId" style="padding-left: 0;padding-right: 0;" >
									</div>

									<!--<div v-show="!UserInfo.walletPoolId" @click="createWallet" class="lg-width" style="color: rgb(113, 142, 189);font-size: 14px;cursor: pointer;margin-left: 3%;">生成地址</div>
									<div href="#getQrcode" data-toggle="modal" v-show="UserInfo.walletPoolId" class="lg-width" style="color: rgb(113, 142, 189);font-size: 14px;cursor: pointer;margin-left: 3%;">二维码</div>-->
								</div>
							</div>
							<div class="col-lg-12 col-sm-12 top10">
								<div class="col-lg-2 col-sm-6 balance1" style="color:#718EBD;width: 10%;padding-left: 0px;">{{$t('person.Balance')}}</div>
								<div class="col-lg-8">
									<span style="font-size:.9em;color:#fff"><span class="mybalance" style="color:#fff;">{{UserInfo.netValue}}</span>NET</span>

									<span class="balancenone" v-show="tish2">
		                               <span>
		                               	<img :src="noNet" style="width:14px;margin-right: 2px;"/>
		                               </span> {{$t('person.balance1')}}
									</span>

								</div>
								<!--<button v-show="!tish2" class="card-btm" href="#withdraw" data-toggle="modal"  style="position: relative;float:left;">
									{{$t('netnew.tixian')}}
								</button>-->
							</div>
						</div>
						<div class="col-lg-12 col-sm-12 top10" style="padding-left: 45px;padding-top:30px;border-top:1px #ffffff1a solid;padding-bottom: 30px;">
							<div class="ts1">
								<P class="ts2">{{$t('person.tishi')}}</P>
								<p>{{$t('person.tips1')}}</p>
								<p>{{$t('person.tips2')}}</p>
								<p>{{$t('person.tips3')}}</p>
								<P>{{$t('person.tips4')}}</P>
							</div>
						</div>
						<!--<div class="form-group">
							<a href="#Recharge" data-toggle="modal">
								<div class="col-lg-9" style="margin-top:2.5em;">
									<div class="bc" style="background: #999999;" @click="Recharge">{{$t('person.cz')}}</div>
								</div>
							</a>
						</div>-->
					</div>
					<div class="col-lg-12 col-sm-12 title-r1" v-show="isShow==6" style="overflow-y:hidden ;padding-left: 0 ;padding-right: 0;">
						<table class="table news-table">
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
						<div class="alert alert-warning fade in" v-show="rechargeList.length==0">
	                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
	                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
	                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
	                    </div>
						<div class="pigna" v-show="rechargeList.length>0">
							<paginate v-model="CurrentPage1" :page-count="perpage1" :click-handler="RechargeOrder" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
							</paginate>
						</div>

					</div>
					<div class="col-lg-12 col-sm-12 title-r1" style="padding-left: 0px; padding-right: 0px;" v-show="isShow==7">
						<div v-show="isgm==1">
							<table class="table  table-striped table-condensed news-table">
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
										<td style="width:15%;text-align: center;cursor: default;border: none; white-space:nowrap;overflow:hidden;" v-show="$i18n.locale!='zh-CN'" >{{feelist.Name}}</td>
										<td style="width:15%;text-align: center;cursor: default;border: none; white-space:nowrap;overflow:hidden;" v-show="$i18n.locale=='zh-CN'" >{{feelist.LocalName}}</td>
										<td style="width:15%;text-align: center;cursor: default;border: none;">{{feelist.NetValue}}</td>
										<td style="width:15%;text-align: center;cursor: default;border: none;">{{feelist.UnitPrice}}</td>
										<td style="width:15%;text-align: center;cursor: default;border: none;">{{feelist.BuyDays}}</td>
										<td style="width:30%;text-align: center;cursor: default;border: none;">{{feelist.CreateTime | timer}}</td>
										<td style="text-align: center;cursor: default;border: none;">{{feelist.Remark}}</td>
									</tr>
								</tbody>
							</table>
							<div class="alert alert-warning fade in" v-show="inoutList.length==0">
		                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
		                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
		                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
		                    </div>
							<div class="pigna" v-show="inoutList.length>0" style="width: auto;text-align: center;">
								<paginate v-model="CurrentPage" :page-count="perpage" :click-handler="getInoutLog" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
								</paginate>
							</div>
						</div>


					</div>
					<div class="col-lg-12 col-sm-12 title-r1" style="padding-left: 0px; padding-right: 0px;" v-show="isShow==8">
						<div >
							<table class="table  table-striped table-condensed news-table">
								<thead style="background: none;">
									<tr style="border-top:none ; border-bottom:1px solid #ffffff12 ;color: #718EBD;">
										<th style="width:10%;text-align: center;cursor: default;padding-bottom: 12px;">申请数量</th>
										<th style="width:10%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('net.fee')}}</th>
										<th style="width:10%;text-align: center;cursor: default;padding-bottom: 12px;">实际数量</th>
										<th style="width:20%;text-align: center;cursor: default;padding-bottom: 12px;">目标钱包</th>
										<th style="width:20%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('netnew.Status')}}</th>
										<th style="width:20%;text-align: center;cursor: default;padding-bottom: 12px;">TxHash</th>
										<th style="width:20%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('netnew.CreateTime')}}</th>
										<th style="width:20%;text-align: center;cursor: default;padding-bottom: 12px;">{{$t('person.order4')}}</th>
									</tr>
								</thead>
								<tbody style="background: none;">
									<tr class="Rechargelist" v-for="list in withDrawList" style="color: #718EBD;background: none;border: none;">
										<td style="text-align: center;cursor: default;border: none;">{{list.ApplyAmount}}</td>
										<td style="text-align: center;cursor: default;border: none;">{{list.Fee}}</td>
										<td style="text-align: center;cursor: default;border: none;">{{list.ActualAmount}}</td>
										<td style="text-align: center;cursor: default;border: none;">{{list.WithdrawAddressView}}</td>
										<td style="text-align: center;cursor: default;border: none;">{{list.Status|}}</td>
										<td style="text-align: center;cursor: default;border: none;">{{list.TransactionHashView}}</td>
										<td style="text-align: center;cursor: default;border: none;">{{list.ApplyTime|timer}}</td>
										<td style="text-align: center;cursor: default;border: none;">{{list.Remark}}</td>
									</tr>
								</tbody>
							</table>
							<div class="alert alert-warning fade in" v-show="withDrawList.length==0">
		                        <span v-show="$i18n.locale=='en-US'">No data for the time being.</span>
		                        <span v-show="$i18n.locale=='zh-CN'">暂无数据</span>
		                        <span v-show="$i18n.locale=='ko'">잠시 데이터가 없습니다</span>
		                    </div>
							<div class="pigna" v-show="withDrawList.length>0" style="width: auto;text-align: center;">
								<paginate v-model="CurrentPage2" :page-count="perpage2" :click-handler="withDrawRecord" :prev-text="'<'" :next-text="'>'" :containerClass="'pagination'">
								</paginate>
							</div>
						</div>


					</div>
				</section>
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
									<label for="inputExchange1" class="col-lg-4 control-label" style="color: #718EBD;padding-left: 0px;margin-top: 5px;"><span style="color:red;margin-right: 5px;">*</span>{{$t('person.exchange')}}</label>
									<div class="col-lg-8" style="padding: 0;">
										<!--<input id="title4" value="" class="form-control borders4" v-model="inputs.exchange">-->
										<select class="form-controls m-bot1 borders4" v-model="inputs.exchange" @change="getFeeTax">
											<option v-for="(myexchange,index) in exchangeList" :value="myexchange">{{myexchange.name}}</option>
										</select>
									</div>
								</div>
								<div class="group1">
									<label for="inputApikey" class="col-lg-4 control-label" style="color: #718EBD;padding-left: 0px;margin-top: 5px;"><span style="color:red;margin-right: 5px;">*</span>Access Key</label>
									<div class="col-lg-8" style="padding: 0;">
										<input value="" class="form-control borders4" v-model="inputs.apikey">
									</div>
								</div>
								<div class="group1">
									<label for="inputSecret" class="col-lg-4 control-label" style="color: #718EBD;padding-left: 0px;margin-top: 5px;"><span style="color:red;margin-right: 5px;">*</span>Secret</label>
									<div class="col-lg-8" style="padding: 0;">
										<input value="" class="form-control borders4" v-model="inputs.secret">
									</div>
								</div>
								<div class="group1">
									<label for="inputSecret" class="col-lg-4 control-label" style="color: #718EBD;padding-left: 0px;margin-top: 5px;"><span style="color:red;margin-right: 5px;">*</span><span>{{$t('netnew.sxfbl')}}</span></label>
									<div class="col-lg-8" style="padding: 0;">
										<input  value="" class="form-control borders4" v-model="inputs.fee_tax" >
									</div>
								</div>
							</div>
						</div>
						<div style="width: 100%;text-align: center;">
							<!--<button class="btn addbtn btn-md" type="button" @click="addExchange"><i class="fa fa-plus add1" aria-hidden="true"></i><span style="color: #055ccb;">{{$t('person.addmore')}}</span></button>-->

							<button class="btn surebtn btn-md" type="button" style="position: relative;" >
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
									<label for="inputExchange1" style="color: #718EBD;" class="col-lg-4 control-label">{{$t('person.exchange')}}</label>
									<div class="col-lg-8" style="color:#006DCC">
										<!--<input id="title4" value="" class="form-control borders4" v-model="inputs.exchange">-->
										<!--<input id="title5" value="" class="form-control borders4" v-model="editAccount.exchange" readonly>-->
										{{editAccount.exchange}}
									</div>
								</div>
								<div class="group1">
									<label for="inputApikey" style="color: #718EBD;padding: 0px;" class="col-lg-4 control-label"><span style="color:red;margin-right: 5px;">*</span>Access Key</label>
									<div class="col-lg-8">
										<input value="" class="form-control borders4" v-model="editAccount.apikey">
									</div>
								</div>
								<div class="group1">
									<label for="inputSecret" style="color: #718EBD;padding: 0px;" class="col-lg-4 control-label"><span style="color:red;margin-right: 5px;">*</span>Secret</label>
									<div class="col-lg-8">
										<input value="" class="form-control borders4" v-model="editAccount.secret">
									</div>
								</div>
								<div class="group1">
									<label for="inputSecret" class="col-lg-4 control-label" style="text-align: left;color: #718EBD;padding: 0px;"><span style="color:red;margin-right: 5px;">*</span><span>{{$t('netnew.sxfbl')}}</span></label>
									<div class="col-lg-8">
										<input value="" class="form-control borders4" v-model="editAccount.fee_tax" >
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
								<!--<div class="ercodes" id="qrcode" ref="qrcode">
									<img src="../../static/images/none1.png" width="100%"/>
								</div>-->
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
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="getQrcode" class="modal fade">
			<div class="modal-dialog" style="margin-top: 200px;height: 275px;padding-top: 25px;">
				<div class="ercodes" id="qrcode" ref="qrcode" >
					<!--<img src="../../static/images/none1.png" width="100%"/>-->
				</div>
			</div>
		</div>

		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="applyModal" class="modal fade">
			<div class="modal-dialog" style="margin-top: 200px;height: 398px;">
				<button id="closeNd" type="button" class="close" data-dismiss="modal" aria-hidden="true" style="display: none;"></button>
				<div v-show="!nobalance">
					<div class="lg-width" style="width: 100%;padding:22px 0px;text-align: center;color: #718EBD;font-size: 18px;border-bottom: 1px solid #ffffff1c;">{{$t('netnew.ktzyb')}}</div>
					<div class="lg-width" style="width: 100%;padding:54px 0px;text-align: center;color: #fff;font-size: 25px;">{{$t('netnew.njysqcwz')}}</div>
					<div class="lg-width" style="width: 100%;text-align: center;margin-top: 43px;">
						<button class="card-btm"  style="font-size: 16px;" @click="toApplication(3)">
							{{$t('netnew.qrsq')}}
						</button>
					</div>
					<div class="lg-width" style="width: 100%;padding:27px 0px;text-align: center;color: #718EBD;font-size: 14px;text-decoration: underline;"><span style="cursor: pointer;" @click="topa">{{$t('netnew.ljzytq')}}</span></div>
				</div>
				<div v-show="nobalance">
					<div class="lg-width" style="width: 100%;padding:22px 0px;text-align: center;color: #718EBD;font-size: 18px;border-bottom: 1px solid #ffffff1c;">{{$t('netnew.ktzyb')}}</div>
					<div class="lg-width" style="width: 100%;padding:39px 70px;text-align: center;color: #fff;font-size: 25px;line-height: 30px;padding-bottom: 15px;">{{$t('netnew.bqnmqswd')}}<br> {{$t('netnew.ndyzbz')}}</div>
					<div class="lg-width" v-show="$i18n.locale=='en-US'" style="width: 100%;padding:15px 0px;text-align: center;color: #718EBD;font-size: 14px;">You can apply to become a Professional Version user when you have over 50,000 NET</div>
					<div class="lg-width" v-show="$i18n.locale=='zh-CN'" style="width: 100%;padding:15px 0px;text-align: center;color: #718EBD;font-size: 14px;">NET达到5万可申请开通专业版</div>
					<div class="lg-width" v-show="$i18n.locale=='ko'" style="width: 100%;padding:15px 0px;text-align: center;color: #718EBD;font-size: 14px;">NET의 만 5만으로 프로 사용자로 신청이 가능합니다</div>
					<div class="lg-width" style="width: 100%;text-align: center;margin-top: 10px;">
						<button class="card-btm"  style="font-size: 16px;" >
							{{$t('netnew.lkcz')}}
						</button>
					</div>
					<div class="lg-width" style="width: 100%;padding:27px 0px;text-align: center;color: #718EBD;font-size: 14px;text-decoration: underline;"><span style="cursor: pointer;" @click="topa">{{$t('netnew.ljzytq')}}</span></div>
				</div>
			</div>
		</div>
		<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="trialModal" class="modal fade">
			<div class="modal-dialog" style="margin-top: 200px;height: 398px;">
				<button id="closeNd" type="button" class="close" data-dismiss="modal" aria-hidden="true" style="display: none;"></button>
					<div class="lg-width" style="width: 100%;padding:22px 0px;text-align: center;color: #718EBD;font-size: 18px;border-bottom: 1px solid #ffffff1c;">{{$t('netnew.mfsyzyb')}}</div>
					<div class="lg-width" style="width: 100%;padding:49px 70px;text-align: center;color: #fff;font-size: 25px;line-height: 30px; padding-bottom: 29px;">{{$t('netnew.njymfyz')}}</div>
					<div class="lg-width" style="width: 100%;padding:20px 0px;text-align: center;color: #718EBD;font-size: 14px;">{{$t('netnew.jkmfsyzy')}}</div>
					<div class="lg-width" style="width: 100%;text-align: center;margin-top: 10px;">
						<button class="card-btm"  style="font-size: 16px;" @click="toApplication(2)" >
							{{$t('netnew.lksy')}}
						</button>
					</div>
					<div class="lg-width" style="width: 100%;padding:27px 0px;text-align: center;color: #718EBD;font-size: 14px;text-decoration: underline;"><span style="cursor: pointer;" @click="topa">{{$t('netnew.ljzytq')}}</span></div>
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


							<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
								<div class="lg-width" style="width:100%">
									<input type="text" class="form-control lg-border" placeholder="提现地址" v-model="withdraw.withdraw_address">
								</div>
							</div>
							<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
								<div class="lg-width" style="width:100%">
									<input type="number" min="0" class="form-control lg-border" placeholder="提现数量(手续费50NET直接从提币数量中扣除)" v-model="withdraw.apply_amount">
								</div>
							</div>
							<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
								<div class="lg-width" style="width:65%;margin-right: 5%;">
									<input type="text" class="form-control lg-border" v-model="withdraw.code" :placeholder="$t('net.verificationCode')">
									<!--<input type="text" id="isCk"  style="display: none;">-->
								</div>
								<div class="lg-width" style="width:30%;text-align: center;">
									<button id="btn" style="height: 40px;" class="btn bt-getcode" @click="getMessage(1)" type="button" >{{$t('net.send')}}<span v-show="!isGet">({{messageCD}}s)</span></button>
								</div>
							</div>

						</div>
						<div class="lg-width" style="width: 100%;text-align: center;margin-top: 45px;">
							<!--<button class="btn addbtn btn-md" type="button" @click="addExchange"><i class="fa fa-plus add1" aria-hidden="true"></i><span style="color: #055ccb;">{{$t('person.addmore')}}</span></button>-->
							<button class="card-btm"  style="position: relative;" @click="toWithDraw" :disabled="!withdraw.apply_amount||!withdraw.apply_amount||!withdraw.code">
								{{$t('person.add')}}
							</button>
							<!--<button class="btn surebtn btn-md" data-dismiss="modal" aria-hidden="true" type="button" style="position: relative;" >
								{{$t('person.add')}}
							<img class="light-btn" @click="toWithDraw"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;z-index: 2000;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
							</button>-->
						</div>
					</div>
				</div>
			</div>
		</div>
		<modal></modal>
	</div>

</template>
<script>
	import { editaccount, rechargeOrder,createWallet,withDrawRecord, delexaccount,withDraw, getUserInfo, getAccountList,userinfomod,toApplication, countrys, uploadphoto, generateWallet, regionalChain, updatePassword, getMessage, authenticate, exchanges, getInoutLog, updateSexApi, userGender,userNickname,userPhoto,codeVerify,modPhone,modEmail,getMailCode } from '../api/api';
	import QRCode from 'qrcodejs2';
	import Paginate from 'vuejs-paginate'
	import Modal from "../components/Modal.vue";
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
				forgetpwData: {
					phone: "",
					code: "",
					password: "",
					countryCode:"86",
					repasssword: ""
				},
				forgetpwd:1,
				steps:1,//1获取验证码，2输入新密码
				isForget:1, //1登录 ，2注册，3重置密码,4注册成功5免责声明
				currentTit:0,//手机号绑定
				iptMail:'',//input中输入的mail
				cuntryCode:"86",
				bindNewPhoneParams:{phone:'',sms_id:'', code:'',template_code:''},
				bindNewMailParams:{email:'',code:'',template_code:'',send_mail_id:''},
				verifyPhoneParams:{id:'',code:'',phone_or_email:'',template_code:3},
				getCodeData:'',
				codeError:false,//错误提示
				ifUsePhone:true,//原手机号吗是否可用
				ifUseMail:true,//原邮箱是否可用
				ifUpload:true,//编辑头像
				ifEditeNickName:true,//昵称修改，确认
				ifReadyonly:true,//昵称是否可编辑
				nickNameDefault:'',//昵称
				genderDefault:true,//性别初始化显示
				currentGender:3,//
				ifCorrect:false,//错误提示文字
				isUpdateNickName: false,
				isUpdateNickNameValue: "",
				isUpdateGender: false,
				isUpdateGenderValue: "",
				rightNick: false,
				isvalid: true,
				Le: 1,
				En: 1,
				loginData:{
					smid:"",
				},
				isGet:true,
				imgName:"",
				withdraw:{
					withdraw_address:"",
					apply_amount:"",
					code:"",
				},
				nobalance:false,
				editaccountList: {},
				m: 0,
				messageCD:60,
				gender: 1,
				secendcode:false,
				passwordNull: false,
				newpassNull: false,
				confirmNull: false,
				lastUrl: "",
				headImg: "",
				isphoto: false,
				perpage: 5,
				perpage1: 5,
				perpage2: 5,
				findmessage: '',
				CurrentPage: 1,
				CurrentPage1: 1,
				CurrentPage2: 1,
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
				tryOverDay:"",
				userType:1,
				imgsrc: '',
				countryInfo: {},
				countrylist: {},
				withDrawList:{},
				inputs: {
					exchange: {},
					secret: "",
					apikey: "",
					nickname: "",
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
		directives: {
			focus: {
				update: function (el, {value}) {
					if (value) {
						el.focus();
					}
				}
			}
		},
		components: {
			QRCode,
			Paginate,
			Modal
		},
		methods: {
			//刷新账户余额
			refreshNet() {
				this.get_userinfos();
			},
			changeSex(val){
				this.UserInfo.gender=val;
			},
			//删除交易所
			deleteAcc(index, event) {
				swal({
				  title: this.$t('login.tips')+"?",
				  text: this.$t('login.tips1'),
				  buttons: {
				    cancel: this.$t('login.tips3'),
					  catch:{
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
			clear(){
				this.editAccount.fee_tax="";
			},
			//获取短信验证码
			getMessage(id) {
				if(this.timer){
					clearInterval(this.timer);
				}
				if(this.isGet == true) {
					var messageData = {};
					messageData.phone=this.UserInfo.mobile;
					messageData.countryCode=this.UserInfo.country;
					if(id == 1) {
						if(messageData.countryCode=="86"){
							messageData.templateCode="10"
						}else if(messageData.countryCode=="82"){
							messageData.templateCode="12"
						} else{
							messageData.templateCode="11"
						}
					}else if(id == 2){//验证原有手机号码
						if(messageData.countryCode=="86"){
							messageData.templateCode="6"
						}else if(messageData.countryCode=="82"){
							messageData.templateCode="17"
						} else{
							messageData.templateCode="9"
						}
					}else if(id == 3){//绑定新手机号码时获取验证码
						messageData.countryCode =this.cuntryCode;
						messageData.phone = this.bindNewPhoneParams.phone;
						if(this.bindNewPhoneParams.phone == '' || this.bindNewPhoneParams.phone ==undefined || this.bindNewPhoneParams.phone ==null){
							this.$toast.center(this.$t('login.phoneNull'));
							return false;
						}
						if(/^\d{8,11}$/.test(this.bindNewPhoneParams.phone) == false) {
							this.$toast.center(this.$t('login.phonenum'));
							return false;
						}
						if(messageData.countryCode=="86"){
							messageData.templateCode="1"
						}else if(messageData.countryCode=="82"){
							messageData.templateCode="1"
						} else{
							messageData.templateCode="1"
						}
					}
					getMessage(messageData).then(data => {
						if(data.code == 200) {
							this.isGet = false;
							this.timer = setInterval(this.startCD, 1000);
							// 	console.log(data)
							this.getCodeData = data.data;
							this.loginData.smid = data.data;
							/*this.bindNewPhoneParams.sms_id = data.data;
							this.verifyPhoneParams.id*/
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
			createWallet(){
				createWallet().then(data => {
						if(data.code == 200) {
							this.$toast.center(this.$t('netnew.addressSuc'));
							this.getUseInfo();
						} else {
							this.$toast.center(this.$t('msg.msg'+data.code))
						}
					});
			},
			toWithDraw(){
				var params ={};
				params.smid=this.loginData.smid;
				params.code=this.withdraw.code;
				params.phone=this.UserInfo.mobile;
				params.countryCode=this.UserInfo.country;
				if(this.UserInfo.country=="86"){
					params.templateCode="10"
				}else if(this.UserInfo.country=="86"){
					params.templateCode="12"
				}else{
					params.templateCode="11"
				}
				params.withdraw_address=this.withdraw.withdraw_address;
				params.user_id=this.UserInfo.userId;
				params.apply_amount=Number(this.withdraw.apply_amount);
				var reg = new RegExp('^(0x){1}[0-9a-fA-F]{40}$');
				if(!reg.test(params.withdraw_address)){
					this.$toast.center(this.$t('person.iptCrrectAddress'));
					return false;
				}
				if(params.apply_amount<=0){
					this.$toast.center(this.$t('person.getCoinMinMount'));
					return false;
				}
				withDraw(params).then(data => {
						if(data.code == 200) {
							// 	console.log(data)
							this.$toast.center(this.$t('person.getCoinSuc'));
							this.withdraw={};
							this.getUseInfo();
							$(".close").click();
						} else {
							this.$toast.center(this.$t('msg.msg'+data.code))
						}
					});
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
                    			$(".close").click();
								document.location.reload();
							},2000);
                    	}else{
                    		this.getUseInfo();
							this.$toast.center(this.$t('netnew.toTry'));
                    		setTimeout(() =>{
                    			$(".close").click();
								document.location.reload();
							},2000);
                    	}
                    } else {
                    	if(data.code==200700){
                    		this.nobalance=true;
                    	}else{
                    		this.$toast.center(this.$t('msg.msg'+data.code));
                    	}
                    }
                });
			},
			//修改交易所
			editAcc() {
				this.editAccount.fee_tax=parseFloat(this.editAccount.fee_tax);
				editaccount(this.editAccount).then(data => {
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
				this.editAccount.exchangeId = this.accountList[index].ExchangeId;
				this.editAccount.apikey = this.accountList[index].ApiKey;
				this.editAccount.secret = this.accountList[index].Secret;
				this.editAccount.fee_tax = parseFloat(this.accountList[index].FeeTax);
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
				if(this.UserInfo.walletPoolId&&!this.secendcode){
					this.secendcode=true;
					let qrcode = new QRCode('qrcode', {
						width: 160, // 二维码宽度
						height: 160, // 二维码高度
						text: ercode
					})
				}
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
				this.currentTit = 0;

				if(this.isShow==4){
					this.codes=""
					this.isblue = true;
					this.isblue1 = true;
				}
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
					}
				});
			},

			getFeeTax(){
				for(var i=0;i<this.exchangeList.length;i++){
					if(this.inputs.exchange.id==this.exchangeList[i].id){
						this.inputs.fee_tax=this.exchangeList[i].fee_tax
					}
				}
			},
			//获取用户头像信息
			getFile(e) {
				if (e.target.files[0]) {
					let _this = this
					var file = e.target.files[0]
			        var reader = new FileReader()
			        reader.readAsDataURL(file);//生成base64编码的图片
			        reader.onload = function(res) {
			          img.src = this.result;//base64图片码
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

			withDrawRecord(page){
				var inoutParms = {};
				inoutParms.pageNum = page;
				inoutParms.pageSize = 10;

				let formData = new FormData();
                formData.append('input',  JSON.stringify(inoutParms));
                let config = {
                  headers:{'Content-Type':'multipart/form-data'}
                };

				withDrawRecord(formData,config).then(data => {
					if(data.code == 200) {
						this.withDrawList=data.data.data;
						for(var i=0;i<this.withDrawList.length;i++){
							if(this.withDrawList[i].WithdrawAddress){
								this.withDrawList[i].WithdrawAddressView=this.withDrawList[i].WithdrawAddress.substring(0,4)+"..."+this.withDrawList[i].WithdrawAddress.substring(this.withDrawList[i].WithdrawAddress.length-4,this.withDrawList[i].WithdrawAddress.length);
							}else{
								this.withDrawList[i].WithdrawAddressView="";
							}
							if(this.withDrawList[i].TransactionHash){
								this.withDrawList[i].TransactionHashView=this.withDrawList[i].TransactionHash.substring(0,4)+"..."+this.withDrawList[i].TransactionHash.substring(this.withDrawList[i].TransactionHash.length-4,this.withDrawList[i].TransactionHash.length);
							}else{
								this.withDrawList[i].TransactionHashView="";
							}
						}
						this.CurrentPage2 = data.data.page;
						this.perpage2 = data.data.total_page;
					}
				});
			},
			topa(){
				$('.close').click();
				this.$router.push('/proApply')
			},
			//添加交易所
			addExchange() {
				if(this.UserInfo.walletPoolId == "") {
//					this.$toast.center(this.$t('person.generateAddress'));
//					return false;
				} else {
					this.chaininfos.depositAddress = this.UserInfo.walletPoolId;
				}

				if(this.inputs.exchange.name == "" || this.inputs.secret == "" || this.inputs.apikey == ""||this.inputs.fee_tax == "") {
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

				regionalChain(exchangeAccount).then(data => {
					if(data.code == 200) {
						this.$toast.center(this.$t('person.uploadit'));
						this.getAccountList();
						this.inputs = {
							exchange: {},
							secret: "",
							apikey: "",
							fee_tax: '',
						}
						$('.close').click();
					} else {

						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});
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
				if(this.passwords==this.newpasswords){
					this.$toast.center(this.$t('netnew.newOldDif'));
					return false;
				}
				var params={};
				params.old_password=this.updatapassword.password
				params.new_password=this.updatapassword.newpassword

				updatePassword(params).then(data => {
					if(data.code == 200) {
						this.isblue1 = false;
						this.$toast.center(this.$t('login.passSuccess'));
						setTimeout(function(){
							localStorage.removeItem('token');
							localStorage.removeItem('phonenum');
							this.ifLogin = false;
							localStorage.setItem("ifShowLoginLayout","yes")
							document.location.reload();
							this.$router.push('/');
						},3000)
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
				resetpass.countryCode=this.UserInfo.country;
				resetpass.phone = this.UserInfo.mobile;
				resetpass.smid = this.messagecode.smid;
				if(this.UserInfo.country=="86"){
					resetpass.templateCode = "5";
				}else if(this.UserInfo.country=="82"){
					resetpass.templateCode = "16";
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
					authenticate(resetpass).then(data => {
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
				if(!this.showit){
					return false;
				}
				if(this.timer){
					clearInterval(this.timer);
				}
				this.messageData1.countryCode = this.UserInfo.country;
				this.messageData1.phone = this.UserInfo.mobile;
				if(this.UserInfo.country=="86"){
					this.messageData1.templateCode = "5";
				}else if(this.UserInfo.country=="82"){
					this.messageData1.templateCode = "16";
				} else{
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
				this.ifUpload = false;
				$('#file').click();
			},
			//关闭弹窗
			inity() {
				var _this = this;
				$("#addModal").on("hidden.bs.modal", function() {
					_this.inputs.apikey = '';
					_this.inputs.secret = '';

					_this.inputs.exchange = "";
					_this.inputs.fee_tax= "";

				});
				$("#applyModal").on("hidden.bs.modal", function() {
					_this.nobalance =false;
				});
			},
			//获取用户基本信息
			getUseInfo(){
				getUserInfo(this.UserInfo).then(data => {
					if(data.code == 200) {
						this.UserInfo = data.data;
						this.currentGender = data.data.gender;
						this.nickNameDefault = data.data.nickName;
						this.userType=data.data.userType;
						var apTime=data.data.application_time;
						apTime=new Date(apTime).getTime()+(1000*60*60*24*7);
						this.tryOverDay=util.formatDate.format(new Date(apTime), 'yyyy-MM-dd');
						this.application=data.data.Application;
						localStorage.setItem("phonenum",this.UserInfo.mobile);
						this.phoneChange();
						this.getAccountList();
						this.accountId();
						this.getParam();
						this.qrcodeScan();
						this.getInoutLog(1);
						this.RechargeOrder(1);
						this.withDrawRecord(1);
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
			},
			//修改性别
			changeGender() {
				let params = {gender:this.currentGender.toString()}
				userGender(params).then(res => {
					if(res.code == 200) {
						this.genderDefault=true;
						this.$toast.center(this.$t('person.editSuccess'));
					}else{
						this.genderDefault=true;
						this.$toast.center(this.$t('msg.msg'+res.code))
					}
				})
			},
			//修改昵称
			changeNickName() {
				var nameLength = 0;
				if(this.nickNameDefault == "" || this.nickNameDefault == null) {
					this.$toast.center(this.$t('person.iptUserName'));
					return false;
				} else {
					for(var i = 0; i < this.nickNameDefault.length; i++) {
						if(escape(this.nickNameDefault[i]).indexOf("%u") < 0) { //不是中文
							nameLength += 1;
						} else { //中文
							nameLength += 2;
						}
						if(nameLength > 12) {
							this.$toast.center(this.$t('person.usernameMaxL'));
							return false;
						}
					}
				}
				let params = {nick_name:this.nickNameDefault};
				userNickname(params).then(res => {
					if(res.code == 200) {
						this.ifEditeNickName = true;
						this.ifReadyonly = true;
						this.$toast.center(this.$t('netnew.OnselfSuccess'));
					}else{
						this.ifEditeNickName = true;
						this.ifReadyonly = true;
						this.$toast.center(this.$t('msg.msg'+res.code))
					}
				})
			},
			nicknameEdit(){
				this.ifEditeNickName = false;
				this.ifReadyonly = false;
			},
			//修改头像
			changePhoto(){
				let arr = $('#uploadImg')[0].src.split(',')
				let fileImg = arr[1];
				let params = { photo:fileImg}
				userPhoto(params).then(res =>{
					if(res.code == 200) {
						document.getElementById('headImg').setAttribute('src', this.imgsrc);
						this.ifUpload = true
						this.$toast.center(this.$t('person.uploadFinish'))
					}else{
						this.ifUpload = true;
						this.$toast.center(this.$t('msg.msg'+res.code))
					}
				})
			},
			getPhoneStatus() {//根据原手机号是否可用，显示不同页面
				if(this.ifUsePhone) {//原手机可用，验证原手机
					this.codeError = false;
					this.isinfo = 1;
					this.isShow = 13;
					this.currentTit = 2
				}else{//原手机不可用
					this.codeError = false;
					this.isinfo = 1;
					if(this.UserInfo.mail == ''){//未绑定邮箱，先去绑定邮箱
						this.isShow = 17;
						this.currentTit = 2
					}else{//已绑定邮箱，进去邮箱验证
						this.isShow = 16;
						this.currentTit = 2
					}
				}
			},
			getEmailStatus() {//根据原邮箱是否可用，显示不同页面
				this.codeError = false;
				if(this.ifUseMail) {//原邮箱可用，验证原邮箱
					this.isinfo = 1;
					this.isShow = 16;
					this.currentTit = 4
				}else{//原邮箱不可用
					this.isinfo = 1;
					if(this.UserInfo.mobile == ''){//未绑定手机，先去绑定手机
						this.isShow = 25;
						this.currentTit = 4
					}else{//已绑定手机，进去手机验证
						this.isShow = 13;
						this.currentTit = 4
					}
				}
			},
			//验证原有手机邮箱是否正确
			verifyPhone(id) {
				this.codeError = false;
				this.isGet = true;
				clearInterval(this.timer);//新加
				this.messageCD = 60;
				if(this.UserInfo.country=="86"){
					this.verifyPhoneParams.template_code="6"
				}else if(this.UserInfo.country=="82"){
					this.verifyPhoneParams.template_code="17"
				} else{
					this.verifyPhoneParams.template_code="9"
				}
				if(this.verifyPhoneParams.code == '' || this.verifyPhoneParams.code == undefined || this.verifyPhoneParams.code == null){
					this.$toast.center(this.$t('login.codeisNull'))
				};
				if(id == 1) {//手机验证
					if(this.getCodeData == '' || this.getCodeData == undefined){
						this.codeError = true;
					}
					this.verifyPhoneParams.phone_or_email = this.UserInfo.mobile
					this.verifyPhoneParams.id = this.getCodeData;
				}else if(id == 2){//邮箱
					this.verifyPhoneParams.phone_or_email = this.UserInfo.mail
					//this.verifyPhoneParams.id = this.bindNewMailParams.send_mail_id
				}
				codeVerify(this.verifyPhoneParams).then(res => {
					if(res.code == 200){
						this.verifyPhoneParams.code = ''
						if(this.currentTit == 2) {
							this.isShow = 14;//邮箱，号码验证后都进去手机号码绑定页面
							this.isinfo = 1;
						}else if(this.currentTit == 4){
							this.isShow = 22;//邮箱，号码验证后都进去新邮箱绑定页面
							this.isinfo = 1;
						}
						this.codeError = false;
						this.getCodeData = ''

					}else{
						if(id == 1) {
							this.getCodeData = ''
						}
						if(res.code == 110404){
							this.codeError = true;
						}else{
							this.$toast.center(this.$t('msg.msg'+res.code))
						}
					}
				})
			},
			toReload() {
				this.isShow = 1;
				this.isinfo = 1;
				location.reload()
			},
			//绑定新手机
			bindNewPhone(id) {
				this.codeError = false;
				this.isGet = true;
				clearInterval(this.timer);//新加
				this.messageCD = 60;
				this.bindNewPhoneParams.sms_id=this.getCodeData;
				if(this.UserInfo.country=="86"){
					this.bindNewPhoneParams.template_code="1"
				}else if(this.UserInfo.country=="82"){
					this.bindNewPhoneParams.template_code="1"
				} else{
					this.bindNewPhoneParams.template_code="1"
				}
				if(this.bindNewPhoneParams.phone == '' || this.bindNewPhoneParams.phone == undefined || this.bindNewPhoneParams.phone == null){
					this.$toast.center(this.$t('login.phoneNull'))
					return false;
				};
				if(this.bindNewPhoneParams.code == '' || this.bindNewPhoneParams.code == undefined || this.bindNewPhoneParams.code == null){
					this.$toast.center(this.$t('login.codeisNull'))
					return false;
				};
				modPhone(this.bindNewPhoneParams).then(res => {
					if(res.code == 200) {
						this.bindNewPhoneParams.code = ''
						if(id == 1){//绑定成功提示页面
							this.isShow = 11;
							this.isinfo = 1;
							this.currentTit = 1;
						}else if(id == 2){//新绑定手机页面成功
							this.isShow = 15;
							this.isinfo = 1;
							this.currentTit =2;
						}
					}else{
						this.$toast.center(this.$t('msg.msg'+res.code))
					}
				})
			},
			//绑定新邮箱
			bindNewMail(id) {
				this.codeError = false;
				this.isGet = true;
				clearInterval(this.timer);//新加
				this.messageCD = 60;
				if(this.UserInfo.country=="86"){
					this.bindNewMailParams.template_code="1"
				}else if(this.UserInfo.country=="82"){
					this.bindNewMailParams.template_code="1"
				} else{
					this.bindNewMailParams.template_code="1"
				}
				var reg = /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/;
				if (this.bindNewMailParams.email == '') {
					this.$toast.center(this.$t('person.unNullEmail'));
					return false
				}
				if (reg.test(this.bindNewMailParams.email) == false) {
					this.isGet = true;
					clearInterval(this.timer);
					this.messageCD = 60;
					this.$toast.center(this.$t('msg.msg110208'));
					return false
				}
				if(this.bindNewMailParams.code == '' || this.bindNewMailParams.code == undefined || this.bindNewMailParams.code == null){
					this.$toast.center(this.$t('login.codeisNull'))
					return false
				};
				if(this.bindNewMailParams.send_mail_id == '' || this.bindNewMailParams.send_mail_id == undefined){
					this.codeError = true;
				}
				modEmail(this.bindNewMailParams).then(res => {
					if(res.code == 200){
						this.bindNewMailParams.code = ''
						if(id == 1){//绑定邮箱
							this.isShow = 19;//绑定成功页面
							this.isinfo = 1;
							this.currentTit = 3;
						}else if(id == 2){//绑定新邮箱（修改）
							this.isShow = 23;//修改绑定成功页面
							this.currentTit = 4;
						}
						this.codeError = false;
					}else{
						this.codeError = false;
						this.$toast.center(this.$t('msg.msg'+res.code))
					}
				})
			},
			getMailCode(id) {//获取邮箱验证码
				if(this.timer){
					clearInterval(this.timer);
				}
				this.codeError = false;
				if(this.isGet == true) {
					var messageData = {};
					if (id == 1) {//绑定邮箱
						var reg = /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/;
						if (this.bindNewMailParams.email == '') {
							this.$toast.center(this.$t('person.unNullEmail'));
							return false
						}
						if (reg.test(this.bindNewMailParams.email) == false) {
							this.isGet = true;
							clearInterval(this.timer);
							this.messageCD = 60;
							this.$toast.center(this.$t('msg.msg110208'));
							return false
						}
						messageData.countryCode = this.UserInfo.country;
						messageData.mail = this.bindNewMailParams.email;
						if (messageData.countryCode == '86') {
							messageData.templateCode = '1';
						} else if (messageData.countryCode == '82') {
							messageData.templateCode = '15';
						} else {
							messageData.templateCode = '7'
						}
					}else if(id == 2) {//验证邮箱
						messageData.countryCode = this.UserInfo.country;
						messageData.mail = this.UserInfo.mail ;
						if (messageData.countryCode == '86') {
							messageData.templateCode = '6';
						} else if (messageData.countryCode == '82') {
							messageData.templateCode = '17';
						} else {
							messageData.templateCode = '9'
						}
					}
					getMailCode(messageData).then(res => {
						if (res.code == 200) {
							this.isGet = false;
							this.timer = setInterval(this.startCD, 1000);
							if(id == 1){
								this.bindNewMailParams.send_mail_id = res.data;
							}else if(id == 2){
								this.verifyPhoneParams.id = res.data;
							}
						} else {
							this.$toast.center(this.$t('msg.msg' + res.code))
						}
					})
				}
			},
			layoutTitIndex(index,layoutId,titId){
				this.bindNewPhoneParams.code = ''
				this.bindNewPhoneParams.phone = ''
				this.bindNewPhoneParams.template_code = ''
				this.bindNewMailParams.email = '';
				this.bindNewMailParams.code = '';
				this.bindNewMailParams.template_code = '';
				this.bindNewMailParams.send_mail_id = '';
				this.verifyPhoneParams.code = ''
				this.verifyPhoneParams.id = ''
				this.codeError = false;
				this.isGet = true;
				clearInterval(this.timer);//新加
				this.messageCD = 60;

				this.isShow = index;
				this.isinfo = layoutId;
				this.currentTit = titId;
			},
			topForgetPwd() {//忘记密码弹窗
				this.$store.dispatch('mChangeLogin',2)
				this.$store.dispatch('sChangeLoginStatus',3)
				this.$store.dispatch('mChangeStep',1)
			}
		},
		created: function() {
			this.phoneChange();
		},
		mounted() {
			$('.con-left').css("min-height", document.documentElement.clientHeight - 66 + "px")
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

<style>
	.ts1 p{
		line-height: 30px;
	}
	.person-sex{
		line-height: 34px;
		font-size: 16px;
		cursor: pointer;
	}
	.sex-uncheck{
		color: #718EBD;
	}
	.sex-checked{
		color: #fff;
	}
	.per-selected {
		background: url(../assets/img/schover@2x.png) no-repeat;
		background-size:contain ;
		color: #fff !important;
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
		color: #999999;
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

		cursor: pointer;
		color: #333;
		border-bottom: 1px solid #dcdcdc;
	}

	.Rechargelist td{
		padding: 15px 0px !important;
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
		height: 70px;
		width: 70px;
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
		padding-right: 15px;
		width: 489px;
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
		margin-left: 100px;
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
		text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
		background: #ffffff0d;
		background-size:cover ;
		border:1px #ffffff4d solid;

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
		background-color: #ffffff;
		border-radius: 0;
		min-width: 140px;
	}

	.tellnum {
		line-height: 34px;
		color: #fff;
		float: left;
		width: 130px;
		margin-left:10px;
	}

	.yanzhm {
		min-width: 220px;
	    text-align: left;
	    float: left;
	    padding-left: 25px;
	    line-height: 34px;
	    color: #fff;
	}

	.tellnum1 {
		color: #999999;
		float: left;
		margin-left: 2%;
	}

	.bluebg {
		border-color: #7FCEFF !important;
	}


	.bars3 {
	    margin-left: 0;
	    float: left;
	    width: 160px;
	    height: 65px;
	    background: none;
	    border-top: none;
	    border-left: none;
	    border-right: none;
	    border-bottom: 4px dashed;
	    border-color: #223953;
	}

	.basicInfo {
		background-color: #f6f8f8 ;
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
		font-size: 20px;
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

		padding: 20px 50px !important;
		border-top: 1px solid #ffffff12;
	}
	.pagination > .disabled > a{
		color: #718EBD !important;
	    cursor: not-allowed !important;
	    border-color: #ddd !important;
	    background: none !important;
	    border: none;
	}
	.pagination > .active > a{
		background: none !important;
		border: none !important;
   		color: #fff !important;
	}
	.pagination > li > a:hover{
		color: #fff !important;
		background: none !important;
	}
	.pagination > li > a{
		background: none !important;
		border: none !important;
   		color: #718EBD !important;
	}
	.getcode{
		min-width:100px;
		padding:0 4px;
		height:38px;
		margin-top:20px;
		margin-left:10px;
		cursor: pointer;
		background: url('../assets/img/userinfo/getcode.png') no-repeat;
		background-size:100%;
	}
	.getbackpwd{
		min-width:100px;
		padding:0 6px;
		height:38px;
		position:relative;
		margin-left:20px;
		cursor: pointer;
		background:url("../assets/img/userinfo/getcode.png") no-repeat;
		background-size:100%;
		text-align: center;
		line-height:38px;
		color:#fff!important;
		font-size:12px;
	}
</style>
