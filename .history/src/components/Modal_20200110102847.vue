<template>
	<div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade" style="z-index: 5001;">
		<!--登录弹出层-->
		<button id="close" type="button" class="close" style="display: none;" data-dismiss="modal" aria-hidden="true"></button>
		<div class="modal-dialog" v-show="isLogin==1">
			<div class="modal-content login-box">

				<div class="row lg-row" style="margin-top: 20px;margin-left: 0px;margin-right: 0px;border-bottom: 1px #ffffff1a solid;">
					<div class="lg-width" style="width: 50%;text-align: center;">
						<div class="panel-body1"  v-bind:class="{ 'lg-checked':isCom }">
							<a class="netlg-ac" style="cursor: pointer;" v-bind:class="{ 'bm-checkbox':isCom }" @click="toCommon">{{$t('net.accountlogin')}}</a>
						</div>
					</div>
					<div class="lg-width" style="width: 50%;text-align: center;">
						<div class="panel-body1"  v-bind:class="{ 'lg-checked':isMess }">
							<a class="netlg-ac" style="cursor: pointer;" v-bind:class="{ 'bm-checkbox':isMess }" @click="toMessage">{{$t('net.SMSlogin')}}</a>
						</div>
					</div>
				</div>
				<!--普通登录-->
				<div v-show="isCom">
					<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
						<!--<div class="lg-width" style="width: 30% ;">
							<select v-model="loginData.countryCode" class="form-controls lg-border">
								<option value="86">{{$t('net.china')}}</option>
								<option value="1">{{$t('net.us')}}</option>
								<option value="1">{{$t('net.canada')}}</option>
								<option value="7">{{$t('net.russia')}}</option>
								<option value="44">{{$t('net.unitedkingdom')}}</option>
								<option value="79">{{$t('net.germany')}}</option>
								<option value="81">{{$t('net.japan')}}</option>
								<option value="82">{{$t('net.southkorea')}}</option>
							</select>
						</div>-->
						<div class="lg-width" style="width:100%;">
							<input type="text" @keyup.enter="toLoginU" class="form-control lg-border" autocomplete="off" :placeholder="$t('netnew.sjhhyx')" v-model="loginData.username">
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 25px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:100%">
							<input type="password" @keyup.enter="toLoginU" class="form-control lg-border" autocomplete="off" :placeholder="$t('net.password')" v-model="loginData.password">
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 25px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:64%">
							<input type="text" @keyup.enter="toLoginU" class="form-control lg-border" v-model="loginData.imgcode" :placeholder="$t('net.verificationCode')">
							<!--<input type="text" id="isCk"  style="display: none;">-->
						</div>
						<div class="lg-width" style="width: 36%;text-align: center;height: 40px;background: #fff;">
							<img id="codeImg" style="height: 45px;" @click="getVcode" />
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:67%;">
							<input id="cfw" class="boxs" style="margin-top: -2px;" type="checkBox" @click="changeFreeWeek" checked="checked">
							<label style="margin-left: 6px;color:#718EBD;" @click="changeFreeWeek2"> {{$t('net.nologinweek')}} </label>
						</div>
						<div class="lg-width" style="width: 1%">
							<div style="height: 20px;"> </div>
						</div>
						<div class="lg-width" style="width: 32%;text-align: right;">
							<a @click="toForgetpw" style="font-weight: initial;color:#718EBD;cursor: pointer;">{{$t('net.forgetpw')}}?</a>
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 40px;width: 80%;margin-left: 10%;text-align: center;position: relative;">
						<img class=""   @click="toLoginU" style="position: absolute;top: 0px;left:25%;width: 50%;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						<button id="btn" class="btn lg-lgbt" type="button"  style="cursor: pointer;">{{$t('net.logins')}}</button>
					</div>
					<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width: 100%;text-align: center;">
							<!--<img :src="facebook" style="float: left;">-->
							<span style="font-weight: initial;color: #fff;margin-top: 2px;">{{$t('net.noAcRgNow')}}</span>
							<a style="font-weight: initial;color: #718EBD;cursor: pointer;margin-top: 2px;text-decoration: underline;" @click="toRegister">{{$t('net.regNow')}}</a>
						</div>
					</div>

				</div>
				<!--短信登录-->
				<div v-show="isMess">
					<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width: 30% ;height: 45px;">
							<select v-model="loginData.countryCode" class="form-controls lg-border">
								<option value="86">{{$t('net.china')}}</option>
								<option value="1">{{$t('net.us')}}</option>
								<option value="1">{{$t('net.canada')}}</option>
								<option value="82">{{$t('net.southkorea')}}</option>
							</select>
						</div>
						<div class="lg-width" style="width:62%;margin-left: 8%;">
							<input type="text" class="form-control lg-border" :placeholder="$t('net.phonenumber')" v-model="loginData.username">
						</div>
					</div>

					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:65%;margin-right: 5%;">
							<input type="text" class="form-control lg-border" v-model="loginData.code" :placeholder="$t('net.verificationCode')">
							<!--<input type="text" id="isCk"  style="display: none;">-->
						</div>
						<div class="lg-width" style="width:30%;text-align: center;">
							<button id="btn" style="height: 40px;" class="btn bt-getcode" type="button" @click="getMessage('2')"><span v-show="isGet">{{$t('net.send')}}</span><span v-show="!isGet">({{messageCD}}s)</span></button>
						</div>
						<div v-show="!isGet" class="lg-width" style="width: 100%;color: red;">{{$t('netnew.yzmyfs')}}</div>
					</div>
					<div class="row lg-row" style="margin-top: 40px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:70%;">
							<input class="boxs" style="margin-top: -2px;" type="checkBox" @click="changeFreeWeekM" checked="checked">
							<label style="margin-left: 8px;color: #718EBD;"> {{$t('net.nologinweek')}} </label>
						</div>
						<div class="lg-width" style="width: 5%">
							<div style="height: 20px;"> </div>
						</div>
						<!--<div class="lg-width" style="width: 45%;text-align: right;">
							<a @click="toForgetpw" style="font-weight: initial;color: #718EBD;cursor: pointer;">{{$t('net.forgetpw')}}？</a>
						</div>-->
					</div>
					<div class="row lg-row" style="margin-top: 90px;width: 80%;margin-left: 10%;text-align:center;position: relative;">
						<img class="" @click="toLoginM" style="position: absolute;top: 0px;left:25%;width: 50%;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						<button id="btn" class="btn lg-lgbt" type="button"  style="cursor: pointer;">{{$t('net.logins')}}</button>
					</div>
					<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width: 100%;text-align: center;">
							<span style="font-weight: initial;color: #fff;margin-top: 2px;">{{$t('net.noAcRgNow')}}</span>
							<a style="font-weight: initial;color: #718EBD;cursor: pointer;margin-top: 2px;text-decoration: underline;" @click="toRegister">{{$t('net.regNow')}}</a>
						</div>
					</div>
				</div>

			</div>
		</div>
		<!--注册弹出层-->
		<div class="modal-dialog" v-show="isLogin==2">
			<div class="modal-content login-box">
				<!--<div class="lg-row" style="width: 100%;text-align: center;padding: 32px;">
					<img :src="loginLogo">
				</div>-->
				<div class="row lg-row" style="margin-top: 25px;margin-left: 0px;margin-right: 0px;">
					<div class="lg-width" style="width: 50%;text-align: center;">
						<div class="panel-body1" style="border-bottom:1px #ffffff1a solid ;" v-bind:class="{ 'lg-checked':regType==1 }">
							<a class="netlg-ac" style="cursor: pointer;" v-bind:class="{ 'bm-checkbox':regType==1 }" @click="chageType(1)">{{$t('net.phoneregister')}}</a>
						</div>
					</div>
					<!-- <div class="lg-width" style="width: 50%;text-align: center;">
						<div class="panel-body1" style="border-bottom:1px #ffffff1a solid ;" v-bind:class="{ 'lg-checked':regType==2 }">
							<a class="netlg-ac" style="cursor: pointer;" v-bind:class="{ 'bm-checkbox':regType==2 }" @click="chageType(2)">{{$t('netnew.yxzc')}}</a>
						</div>
					</div> -->
				</div>
				<!--手机注册-->
				<div v-show="regType==1">
					<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
						<!-- <div class="lg-width" style="width: 30% ;height: 45px;">
							<select v-model="registerData.countryCode" class="form-controls lg-border">
								<option value="86">{{$t('net.china')}}</option>
								<option value="1">{{$t('net.us')}}</option>
								<option value="1">{{$t('net.canada')}}</option>
								<option value="82">{{$t('net.southkorea')}}</option>
							</select>
						</div> -->
						<div class="lg-width" style="width:100%">
							學生姓名
							<input type="text" class="form-control lg-border" v-model="registerData.phone">
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
						學生年紀
						<div class="lg-width" style="width:100%">
							<input type="password" class="form-control lg-border" v-model="registerData.password">
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
						學生手機號
						<div class="lg-width" style="width:100%">
							<input type="password" class="form-control lg-border" :placeholder="$t('net.phonenumber')" v-model="registerData.repassword">
						</div>
					</div>
					<!-- <div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:65%;margin-right: 5%;">
							<input type="text" class="form-control lg-border" v-model="registerData.code" :placeholder="$t('net.verificationCode')">				
						</div>
						<div class="lg-width" style="width:30%;text-align: center;">
							<button id="btn" style="height: 40px;" class="btn bt-getcode" type="button" @click="getMessage('1')"><span v-show="isGet">{{$t('net.send')}}</span><span v-show="!isGet">({{messageCD}}s)</span></button>
						</div>
						<div v-show="!isGet" class="lg-width" style="width: 100%;color: red;">{{$t('netnew.yzmyfs')}}</div>
					</div> -->
					<div class="lg-row" style="margin-left: 48px;margin-top: 30px;">
						<input id="cbox" class="boxs" style="margin-top: -2px;" type="checkBox"  @click="checkPact">
						<label  v-show="$i18n.locale=='zh-CN'" style="font-size: 13px;color: #fff;margin-left: 5px;"><span @click="checkPact2">我已阅读并同意遵守</span> <a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">《用户协议》</a>和<a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">《使用协议》</a></label>
						<label  v-show="$i18n.locale=='en-US'" style="font-size: 13px;color: #fff;margin-left: 5px;"><span @click="checkPact2">I have agree to</span> <a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">the terms of use</a> and <a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">the terms of service</a></label>
						<label  v-show="$i18n.locale=='ko'" style="font-size: 13px;color: #fff;margin-left: 5px;"><span @click="checkPact2">나는 이미 읽은 후 협의를 </span><a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">사용하는</a> 것에 <a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">동의했다</a></label>
					</div>
					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;text-align: center;position: relative;">
						<img class="" @click="toPhoneReg" style="position: absolute;top: 0px;left:25%;width: 50%;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						<button id="btn" class="btn lg-lgbt" type="button" :disabled="!pact">{{$t('net.registers')}}</button>
					</div>
					<div class="row lg-row" style="margin-top: 10px;width: 80%;margin-left: 10%;margin-right: 10%;">
						<div class="lg-width" style="width: 100%;text-align: center;margin-top: 10px;">
							<span style="font-weight: initial;color: #fff;">{{$t('net.Existingaccounts')}}</span>
							<a style="font-weight: initial;color: #718EBD; cursor: pointer;text-decoration: underline;" @click="toLogin">{{$t('net.backLogin')}}</a>
						</div>
					</div>

				</div>
				<!--邮箱注册-->
				<div v-show="regType==2">
					<div class="row lg-row" style="margin-top: 30px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width: 30% ;height: 45px;">
							<select v-model="registerMail.countryCode" class="form-controls lg-border">
								<option value="86">{{$t('net.china')}}</option>
								<option value="1">{{$t('net.us')}}</option>
								<option value="1">{{$t('net.canada')}}</option>
								<option value="82">{{$t('net.southkorea')}}</option>
							</select>
						</div>
						<div class="lg-width" style="width:62%;margin-left: 8%;">
							<input type="text" class="form-control lg-border" :placeholder="$t('person.mailAddress')" v-model="registerMail.mail">
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:100%">
							<input type="password" class="form-control lg-border" :placeholder="$t('net.password')" v-model="registerMail.password">
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:100%">
							<input type="password" class="form-control lg-border" :placeholder="$t('net.confirmpassword')" v-model="registerMail.repassword">
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:65%;margin-right: 5%;">
							<input type="text" class="form-control lg-border" v-model="registerMail.code" :placeholder="$t('net.verificationCode')">
							<!--<input type="text" id="isCk"  style="display: none;">-->
						</div>
						<div class="lg-width" style="width:30%;text-align: center;">
							<button id="btn" style="height: 40px;" class="btn bt-getcode" type="button" @click="getMail('1')"><span v-show="isGet">{{$t('net.send')}}</span><span v-show="!isGet">({{messageCD}}s)</span></button>
						</div>
						<div v-show="!isGet" class="lg-width" style="width: 100%;color: red;">{{$t('netnew.codeyeSend')}}</div>
					</div>
					<div class="lg-row" style="margin-left: 48px;margin-top: 30px;">
						<input id="cbox2" class="boxs" style="margin-top: -2px;" type="checkBox"  @click="checkPact3">
						<label  v-show="$i18n.locale=='zh-CN'" style="font-size: 13px;color: #fff;margin-left: 5px;"><span @click="checkPact4">我已阅读并同意遵守</span> <a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">《用户协议》</a>和<a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">《使用协议》</a></label>
						<label  v-show="$i18n.locale=='en-US'" style="font-size: 13px;color: #fff;margin-left: 5px;"><span @click="checkPact4">I have agree to</span> <a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">the terms of use</a> and <a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">the terms of service</a></label>
						<label  v-show="$i18n.locale=='ko'" style="font-size: 13px;color: #fff;margin-left: 5px;"><span @click="checkPact4">나는 이미 읽은 후 협의를 </span><a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">사용하는</a> 것에 <a @click="toXY" style="cursor: pointer;color: #718EBD;text-decoration: underline;">동의했다</a></label>
					</div>
					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;text-align: center;position: relative;">
						<img class="" @click="toMailReg" style="position: absolute;top: 0px;left:25%;width: 50%;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						<button id="btn" class="btn lg-lgbt" type="button" :disabled="!pact2">{{$t('net.registers')}}</button>
					</div>
					<div class="row lg-row" style="margin-top: 10px;width: 80%;margin-left: 10%;margin-right: 10%;">
						<div class="lg-width" style="width: 100%;text-align: center;margin-top: 10px;">
							<span style="font-weight: initial;color: #fff;">{{$t('net.Existingaccounts')}}</span>
							<a style="font-weight: initial;color: #718EBD; cursor: pointer;text-decoration: underline;" @click="toLogin">{{$t('net.backLogin')}}</a>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--忘记密码弹出层-->
		<div class="modal-dialog" v-show="isLogin==3" id="pwdId">
			<div class="modal-content login-box">

				<div class="row lg-row" style="border-bottom: 1px #ffffff1a solid;margin-left: 0;margin-right: 0;">
					<div class="lg-width" style="width: 40%;margin-left: 10%;text-align: center;">
						<div class="panel-body1" style="padding: 0;" v-bind:class="{ 'lg-checked':step==1 }">
							<span style="display: block;margin-top: 32px;">1.{{$t('net.verifyPhone')}}</span>
						</div>
					</div>
					<div class="lg-width" style="width: 40%;margin-right: 10%;text-align: center;">
						<div class="panel-body1" style="padding: 0;" v-bind:class="{ 'lg-checked':step==2 }">
							<span style="display: block;margin-top: 32px;">2.{{$t('net.resetpassword')}}</span>
						</div>
					</div>
				</div>
				<!--手机验证-->
				<div v-show="step==1">
					<div class="row lg-row" style="margin-top: 32px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width: 30% ;height: 45px;">
							<select class="form-controls lg-border" v-model="forgetpwData.countryCode">
								<option value="86">{{$t('net.china')}}</option>
								<option value="1">{{$t('net.us')}}</option>
								<option value="1">{{$t('net.canada')}}</option>
								<option value="82">{{$t('net.southkorea')}}</option>
							</select>
						</div>
						<div class="lg-width" style="width:62%;margin-left: 8%;">
							<input type="text" class="form-control lg-border" :placeholder="$t('netnew.sjhhyx')" v-model="forgetpwData.phone">
						</div>
					</div>

					<div class="row lg-row" style="margin-top: 20px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:65%;margin-right: 5%;">
							<input type="text" class="form-control lg-border" v-model="forgetpwData.code" :placeholder="$t('net.verificationCode')">
							<!--<input type="text" id="isCk"  style="display: none;">-->
						</div>
						<div class="lg-width" style="width:30%;text-align: center;">
							<button id="btn" style="height: 40px;" class="btn bt-getcode" type="button" @click="checkAccount"><span v-show="isGet">{{$t('net.send')}}</span><span v-show="!isGet">({{messageCD}}s)</span></button>
						</div>
						<div v-show="!isGet" class="lg-width" style="width: 100%;color: red;">{{$t('netnew.yzmyfs')}}</div>
					</div>
					<div class="row lg-row" style="margin-top: 160px;width: 80%;margin-left: 10%;text-align: center;position: relative;">
						<img class="" @click="toNextStep" style="position: absolute;top: 0px;left:25%;width: 50%;height: 60px;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						<button id="btn" class="btn lg-lgbt" type="button">{{$t('net.resetpassword')}}</button>
					</div>
					<div class="row lg-row" style="margin-top: 15px;width: 80%;margin-left: 10%;" v-show="loginIfShow == 1">
						<div class="lg-width" style="width: 100%;text-align: center;margin-top: 10px;">
							<a style="font-weight: initial;color: #718EBD; cursor: pointer;" @click="toLogin">{{$t('net.backLogin')}}</a>
						</div>
					</div>

				</div>
				<!--密码修改-->
				<div v-show="step==2">
					<div class="row lg-row" style="margin-top: 32px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:100%">
							<input type="password" class="form-control lg-border" :placeholder="$t('net.password')" v-model="forgetpwData.password">
						</div>
					</div>
					<div class="row lg-row" style="margin-top: 25px;width: 80%;margin-left: 10%;">
						<div class="lg-width" style="width:100%">
							<input type="password" class="form-control lg-border" :placeholder="$t('net.confirmpassword')" v-model="forgetpwData.repassword">
						</div>
					</div>
					<div class="row lg-row" style="margin: 0 auto;margin-top: 160px;width:200px;position: relative;">
						<img class="" @click="sureModify" style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
						<button id="btn" class="btn lg-lgbt" type="button" style="width:100%" >{{$t('net.resetpassword')}}</button>
					</div>
					<div class="row lg-row" style="margin-top: 15px;width: 80%;margin-left: 10%;" v-show="loginIfShow == 1">
						<div class="lg-width" style="width: 100%;text-align: center;margin-top: 10px;">
							<a style="font-weight: initial;color: #718EBD; cursor: pointer;" @click="toLogin">{{$t('net.backLogin')}}</a>
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="modal-dialog" v-show="isLogin==4">
			<div class="modal-content login-box">
				<div class="row lg-row" style="margin-top: 15px;width: 80%;margin-left: 10%;padding-top: 45px;text-align: center;">
					<img src="../assets/img/group.png">
				</div>
				<div class="row lg-row" style="margin-top: 45px;width: 70%;margin-left: 15%;text-align: center;">
					<span style="font-size: 24px;color: #0664da;">{{$t('net.regsuccmsg')}}<br><span style="color: #e80d0d;">{{$t('net.scqb')}}</span></span>
				</div>
				<div class="row lg-row" style="margin-top: 45px;width: 70%;margin-left: 15%;text-align: center;">
					<span style="font-size: 72px;color: #0664da;">{{backCD}}</span>
				</div>
				<div class="row lg-row" style="margin-top: 45px;width: 80%;margin-left: 10%;">
					<button id="btn" class="btn lg-lgbt" type="button" @click="toLogin">{{$t('net.backnow')}}</button>
				</div>
			</div>
		</div>
		<!--免责-->
		<div class="modal-dialog" v-show="isLogin==5">
			<div class="modal-content login-box">
				<div class="row lg-row">
					<div style="text-align: center;margin-top: 20px;margin-bottom: 20px;">
						<span v-show="$i18n.locale=='zh-CN'" style="font-size: 18px;color: #718EBD;">限量测试免责声明</span>
						<span v-show="$i18n.locale=='en-US'" style="font-size: 18px;color: #718EBD;">Internal Testing Disclaimer</span>
					</div>
				</div>
				<div class="row lg-row" style="margin-left:0px; margin-right:0px;height: 340px;overflow: auto;padding: 0px 25px 5px 25px;border-bottom: 1px solid #ffffff12;border-top: 1px solid #ffffff12;">
					<div v-show="$i18n.locale=='zh-CN'" style="margin-top: 5px;">
						<span class="mz-text">
							<div  class="context" v-html="termcn"></div>
							<div  class="context" v-html="usercn"></div>
						</span>
					</div>
					<div v-show="$i18n.locale=='en-US'" style="margin-top: 5px;">
						<span class="mz-text">
							<div  class="context" v-html="termen"></div>
							<div  class="context" v-html="useren"></div>
						</span>
					</div>
					<div v-show="$i18n.locale=='ko'" style="margin-top: 5px;">
						<span class="mz-text">
							<div  class="context" v-html="termko"></div>
							<div  class="context" v-html="userko"></div>
						</span>
					</div>
				</div>

				<!--<div class="row lg-row" style="margin-left: 20px;margin-top: 5px;">
					<input class="boxs" style="margin-top: -2px;" type="checkBox" @click="checkPact2">
					<label v-show="$i18n.locale=='zh-CN'" style="font-size: 10px;color: #718EBD;margin-left: 5px;">我已阅读并同意使用协议！</label>
					<label v-show="$i18n.locale=='en-US'" style="font-size: 10px;color: #718EBD;margin-left: 5px;">I have read and agree to the terms of service！</label>
					<label v-show="$i18n.locale=='ko'" style="font-size: 10px;color: #718EBD;margin-left: 5px;">나는 이미 읽은 후 협의를 사용하는 것에 동의했다！</label>
				</div>-->
				<div class="row lg-row" style="margin: 0 auto;margin-top: 30px;width: 202px;position: relative;background: none !important;">
					<img class="" @click="toRegSucc"  style="position: absolute;top: 0px;left: 0;width: 100%;height: 100%;cursor: pointer;" src="../assets/img/zcbtn@2x.png" >
					<button v-show="$i18n.locale=='zh-CN'" id="btn" class="btn lg-lgbt" style="width: 100%;" type="button" >返回</button>
					<button v-show="$i18n.locale=='ko'" id="btn" class="btn lg-lgbt" style="width: 100%;" type="button" >다음 단계</button>
					<button v-show="$i18n.locale=='en-US'" id="btn" class="btn lg-lgbt" style="width: 100%;" type="button" >Back</button>
				</div>
			</div>
		</div>
		<!--注册成功 -->
		<div class="modal-dialog" v-show="isLogin==6">
			<div class="modal-content login-box" style="height: 450px;">
				<div class="lg-width" style="width: 100%;text-align: center;">
					<img src="../assets/img/buysuccess.png" />
				</div>
				<div class="lg-width" style="width: 100%;text-align: center;color: #fff;margin-top:-10px;font-size: 18px;">
					{{$t('net.regsuccmsg')}}
				</div>
				<div class="lg-width" style="width: 100%;text-align: center;color: #718EBD;margin-top:40px;">
					{{$t('netnew.collect')}}
				</div>
				<div class="lg-width" style="width: 100%;text-align: center;margin-top: 30px;" v-show="$i18n.locale=='zh-CN'">
					<img src="../assets/img/qr/public_wechat.png" />
				</div>
				<div class="lg-width" style="width: 100%;text-align: center;margin-top: 30px;" v-show="$i18n.locale=='en-US' || $i18n.locale=='ko'">
					<div class="codeDb " id="qrcodeDb" ref="qrcodeDb">
						<!--<img src="../../static/images/none1.png" width="100%"/>-->
					</div>
				</div>
				<div class="lg-width" style="width: 100%;text-align: center;margin-top: 30px;"  v-show="$i18n.locale=='zh-CN'">
					<img src="../assets/img/weChart.png" style="height: 25px;width: 25px;" />
					<span style="line-height: 25px;color: #718EBD;margin-left: 9px;"> 微信扫一扫</span>
				</div>
				<div class="lg-width" style="width: 100%;text-align: center;margin-top: 30px;"  v-show="$i18n.locale=='en-US' || $i18n.locale=='ko'">
					<img src="../assets/img/engDbq.png" style="height: 25px;width: 25px;" />
					<span style="line-height: 25px;color: #718EBD;margin-left: 9px;"> {{$t('netnew.weixinScode')}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import QRCode from 'qrcodejs2';
	import { getHsdGrade,loginU, loginM, getVcode, getMessage, phoneReg, forgetPw, getUserInfo ,getMailCode,mailReg,authenticate} from '../api/api';
	import marked from 'marked/marked.min.js';
	import termcnload from "../assets/doc/term_cn.md";
	import termkoload from "../assets/doc/term_ko.md";
	import usercnload from '../assets/doc/user_cn.md';
	import userkoload from '../assets/doc/user_ko.md';
	import termenload from "../assets/doc/term_en.md";
	import userenload from '../assets/doc/user_en.md';
	export default {
		data() {
			return {
				classicModal: false,
				freeWeek: true,
				freeWeekM: true,
				pact: false,
				loginData: {
					username: '',
					password: '',
					freeWeek: "0",
					imgid: "",
					imgcode: "",
					countryCode: "86",
					code: ""
				},
				registerData: {
					phone: "",
					code: "",
					password: "",
					countryCode: "86",
					repasssword: "",
					templateCode:"",
				},
				registerMail: {
					mail: "",
					code: "",
					password: "",
					countryCode: "86",
					repasssword: "",
					templateCode:"",
				},
				empty: {},
				useList: {},
				headImg: "",
				forgetpwData: {
					phone: "",
					code: "",
					password: "",
					countryCode:"86",
					repasssword: ""
				},
				lang: 'zh-CN',
				isCom: true,
				isMess: false,
				isGet: true,
			/*	isLogin:1,*/
				ifLogin: false, //false未登录，true已登录
				regType: 1, //1手机注册，2账号注册,
				messageCD: 60,
				backCD: 3,
			/*	step: 1, //1获取验证码，2输入新密码*/
				termcn:termcnload,
				usercn:usercnload,
				termko:termkoload,
				userko:userkoload,
				termen:termenload,
				useren:userenload,
				pact2:false,
				pact3: false,
				imgid:"",
			};
		},
		name: "modal",
		components:{QRCode},
		created(){
			this.getGrade()
		},
		methods: {
			//获取年纪字段列表
			async getGrade(){
				const res = await getHsdGrade()
				console.log('grade',res)
			},
			//扫描二维码
			qrcodeScan() { //生成二维码
				var ercode = "http://t.me/NetCentricEnglish";
				let qrcode = new QRCode('qrcodeDb', {
					width: 160, // 二维码宽度
					height: 160, // 二维码高度
					text: ercode
				})
			},
			closeModal: function() {
				this.$emit("close");
			},
			//普通登录
			toLoginU() {
				if(this.loginData.username == "" || this.loginData.username == undefined || typeof this.loginData.username == "undefined") {
					this.$toast.center(this.$t('login.name'));
					return false;
				}
				if(this.loginData.password == "" || this.loginData.password == undefined || typeof this.loginData.password == "undefined") {
					this.$toast.center(this.$t('login.passNull'));
					return false;
				}
				if(this.freeWeek) {
					this.loginData.freeWeek = "1"
				} else {
					this.loginData.freeWeek = "0"
				}

				if(this.$i18n.locale=='zh-CN'){
					this.loginData.countryCode="86"
				}else if(this.$i18n.locale=='en-US'){
					this.loginData.countryCode="1"
				}else{
					this.loginData.countryCode="82"
				}
				this.loginData.imgid=localStorage.getItem('imgid');
				loginU(this.loginData).then(data => {
					if(data.code == 200) {
						$("#close").click();
						localStorage.setItem('token', data.data.token);
						localStorage.setItem('phonenum', data.data.phone);
						this.$emit('checkLogin', 'success');
						location.reload();
					} else {
						this.loginData.imgcode="";
						this.getVcode();
						this.$toast.center(this.$t('msg.msg'+data.code))
					}
				});
			},
			//检查中英文
			checkLang() {
				if(localStorage.getItem('lang')) {
					this.lang = localStorage.getItem('lang');
					this.$i18n.locale = this.lang; //关键语句
				} else {
					var type = navigator.appName;
					if(type == "Netscape") {
						var lang = navigator.language; //获取浏览器配置语言，支持非IE浏览器
					} else {
						var lang = navigator.userLanguage; //获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
					};
					var lang = lang.substr(0, 2); //获取浏览器配置语言前两位
					if(lang == "zh") {
						this.lang = 'zh-CN';
						this.$i18n.locale = this.lang; //关键语句
						localStorage.setItem('lang', this.lang)
					} else {
						this.lang = 'en-US';
						this.$i18n.locale = this.lang; //关键语句
						localStorage.setItem('lang', this.lang);
					}
				}
			},
			//中英文切换
			changeLang(value) {
				if(value == 'us') {
					this.lang = 'en-US';
					this.$i18n.locale = this.lang; //关键语句
					localStorage.setItem('lang', this.lang);
				} else {
					this.lang = 'zh-CN';
					this.$i18n.locale = this.lang; //关键语句
					localStorage.setItem('lang', this.lang)
				}
			},
			changeFreeWeek() {
				this.freeWeek = !this.freeWeek;
			},
			changeFreeWeek2(){
				$('#cfw').click();
				this.freeWeek = !this.freeWeek;
			},
			changeFreeWeekM() {
				this.freeWeekM = !this.freeWeekM;
			},

			//注册
			toreg() {
				/*this.isLogin = 2;*/
				this.$store.dispatch('sChangeLoginStatus',2)
			},
			checkUpdate() {
				if(localStorage.getItem('version')) {
					if(localStorage.getItem('version') == this.version) {
						return false;
					} else {
						localStorage.setItem('version', this.version);
						location.reload();
					}
				} else {
					localStorage.setItem('version', this.version);
					location.reload();
				}
			},
			//登录
			tolog() {
				this.getVcode();
				/*this.isLogin = 1;*/
				this.$store.dispatch('sChangeLoginStatus',1)
			},
			//退出登录
			goOut() {
				localStorage.removeItem('token');
				localStorage.removeItem('phonenum');
				this.$router.push('/main');
				location.reload();
			},
			//获取验证码
			getVcode() {
				getVcode().then(data => {
					if(data.success == 0) {
						var file =data.data.codeImage;
						localStorage.setItem('imgid',data.data.imgid);
						document.getElementById('codeImg').setAttribute('src', file);
					} else {
						this.$toast.center(data.message);
					}
				});
			},
			toCommon() {
				this.isCom = true;
				this.isMess = false;
			},
			toMessage() {
				this.isCom = false;
				this.isMess = true;
			},
			checkPact() {
				this.pact = !this.pact;
			},
			checkPact2() {
				$('#cbox').click();
				this.pact = !this.pact;
			},
			checkPact3() {
				this.pact2 = !this.pact2;
			},
			checkPact4() {
				$('#cbox2').click();
				this.pact2 = !this.pact2;
			},
			modefiyReg() {
				if(this.regType == 1) {
					this.regType = 2;
				} else {
					this.regType = 1;
				}
			},
			//获取用户信息
			getUinfo() {
				getUserInfo(this.empty).then(data => {
					if(data.success == 0) {

						this.useList = data.data;
						this.headImg = "data:image/png;base64," + data.data.photoUrl;
						document.getElementById('headImg').setAttribute('src', this.headImg);
					} else {
						this.$toast.center(data.message);

					}
				});
			},

			//获取验证邮件
			getMail(id){
				if(this.isGet == true) {
					var messageData = {};
					//id为短信验证码模板 1是注册 2是登录5忘记密码
					if(id == "2") {
//						messageData.mail = this.loginData.username;
//						if(messageData.countryCode == '86') {
//							messageData.templateCode = id;
//						}else if(messageData.countryCode == '82'){
//							messageData.templateCode = '14';
//						} else {
//							messageData.templateCode = '9'
//						}

					} else if(id == "1") {
						messageData.countryCode = this.registerMail.countryCode;
						messageData.mail = this.registerMail.mail;
						if(messageData.countryCode == '86') {
							messageData.templateCode = id;
						}else if(messageData.countryCode == '82'){
							messageData.templateCode = '15';
						} else {
							messageData.templateCode = '7'
						}
					} else if(id == "5") {
						messageData.countryCode = this.forgetpwData.countryCode;
						messageData.mail = this.forgetpwData.phone;
						if(messageData.countryCode == '86') {
							messageData.templateCode = id;
						}else if(messageData.countryCode == '82'){
							messageData.templateCode = '16';
						} else {
							messageData.templateCode = '8'
						}
					}
					this.registerMail.templateCode=messageData.templateCode;
					var reg = /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/;
					if(reg.test(messageData.mail) == false) {
						this.$toast.center(this.$t('netnew.iptCreectEmail'));
						this.isGet = true;
						clearInterval(this.timer);
					} else {
						getMailCode(messageData).then(data => {
							if(data.code == 200) {
								this.loginData.smid=data.data;
								this.isGet = false;
								this.timer = setInterval(this.startCD, 1000);
								$('.bt-getcode').css('cursor',"auto");
							} else {
								this.$toast.center(this.$t('msg.msg'+data.code))
							}
						});
					}

				}
			},

			//邮箱注册提交接口
			toMailReg(){
				var regData = {}
				regData.mail = this.registerMail.mail;
				regData.code = this.registerMail.code;
				regData.smid = this.loginData.smid;
				regData.password = this.registerMail.password;
				regData.countryCode = this.registerMail.countryCode;
				regData.templateCode=this.registerMail.templateCode;
				var reg = /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/;
				if(reg.test(regData.mail) == false) {
					this.$toast.center(this.$t('netnew.iptCreectEmail'));
					return false;
				}
				if(this.registerMail.password == "" || this.registerMail.password == undefined || typeof this.registerMail.password == "undefined") {
					this.$toast.center(this.$t('login.passwords'));
					return false;
				}
				if(regData.smid == "" || regData.smid == undefined || typeof regData.smid == "undefined") {
					this.$toast.center(this.$t('login.verifycode'));
					return false;
				}
				if(this.registerMail.password != this.registerMail.repassword) {
					this.$toast.center(this.$t('login.conPass'));
					return false;
				}

				mailReg(regData).then(data => {
					if(data.code == 200) {
						/*this.isLogin=6;*/
						this.$store.dispatch('sChangeLoginStatus',6)
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code))
					}
				});
			},

			toPact() {
				/*this.isLogin = 4;*/
				this.$store.dispatch('sChangeLoginStatus',4)
				this.timerReg = setInterval(this.startRegCD, 1000);
			},
			toRegSucc() {
					/*this.isLogin = 2;*/
				this.$store.dispatch('sChangeLoginStatus',2)
			},

			checkAccount(){
				var reg = /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}[0-9a-z]\.){1,4}[a-z]{2,4}$/;
				if(reg.test(this.forgetpwData.phone)==true) {
					this.getMail('5')
				}else if(/^\d{8,11}$/.test(this.forgetpwData.phone)==true){
					this.getMessage('5')
				}else{
					this.$toast.center(this.$t('netnew.iptAccount'));
				}

			},
			//获取短信验证码
			getMessage(id) {
				if(this.isGet == true) {

					var messageData = {};
					//id为短信验证码模板 1是注册 2是登录5忘记密码
					if(id == "2") {
						messageData.countryCode = this.loginData.countryCode;
						messageData.phone = this.loginData.username;
						if(messageData.countryCode == '86') {
							messageData.templateCode = id;
						}else if(messageData.countryCode == '82'){
							messageData.templateCode = '14';
						} else {
							messageData.templateCode = '9'
						}

					} else if(id == "1") {
						messageData.countryCode = this.registerData.countryCode;
						messageData.phone = this.registerData.phone;
						if(messageData.countryCode == '86') {
							messageData.templateCode = id;
						}else if(messageData.countryCode == '82'){
							messageData.templateCode = '15';
						} else {
							messageData.templateCode = '7'
						}
					} else if(id == "5") {
						messageData.countryCode = this.forgetpwData.countryCode;
						messageData.phone = this.forgetpwData.phone;
						if(messageData.countryCode == '86') {
							messageData.templateCode = id;
						}else if(messageData.countryCode == '82'){
							messageData.templateCode = '16';
						} else {
							messageData.templateCode = '8'
						}
					}
					this.registerData.templateCode=messageData.templateCode;
					if(messageData.countryCode == '86'){
						if((/^1[3456789]\d{9}$/.test(messageData.phone))==false){
							this.$toast.center(this.$t('login.phonenum'));
							this.isGet = true;
							clearInterval(this.timer);
						}
					}
					if(/^\d{8,11}$/.test(messageData.phone) == false) {
						this.$toast.center(this.$t('login.phonenum'));
						this.isGet = true;
						clearInterval(this.timer);
					} else {
						getMessage(messageData).then(data => {
							if(data.code == 200) {
								this.loginData.smid = data.data;
								this.isGet = false;
								this.timer = setInterval(this.startCD, 1000);
								$('.bt-getcode').css('cursor',"auto");
							} else {
								this.$toast.center(this.$t('msg.msg'+data.code))
							}
						});
					}
				}
			},
			//60s倒计时
			startCD: function() {
				if(this.messageCD <= 0) {
					this.messageCD = 60;
					$('.bt-getcode').css('cursor',"pointer");
					this.isGet = true;
					clearInterval(this.timer);
				} else {
					this.messageCD--;
				}
			},
			//3s成功倒计时
			startRegCD: function() {
				if(this.backCD <= 0) {
					this.backCD = 3;
					this.toLogin();
					clearInterval(this.timerReg);
				} else {
					this.backCD--;
				}
			},
			//短信登录
			toLoginM() {
				if(this.freeWeekM) {
					this.loginData.freeWeek = "1"
				} else {
					this.loginData.freeWeek = "0"
				}
				var loginMdata = {};
				loginMdata.freeWeek = this.loginData.freeWeek;
				loginMdata.countryCode = this.loginData.countryCode;

				loginMdata.code = this.loginData.code;

				loginMdata.phone = this.loginData.username;
				loginMdata.smid = this.loginData.smid;
				if(loginMdata.countryCode == '86') {
					loginMdata.templateCode = "2";
				}else if(loginMdata.countryCode == '82'){
					messageData.templateCode = '14';
				} else {
					loginMdata.templateCode = "9";
				}
				if(/^\d{8,11}$/.test(loginMdata.phone) == false) {
					this.$toast.center(this.$t('login.phonenum'));
					return false;
				}
				if(loginMdata.smid == "" || loginMdata.smid == undefined || typeof loginMdata.smid == "undefined") {
					this.$toast.center(this.$t('login.verifycode'));
					return false;
				}

				loginM(loginMdata).then(data => {
					if(data.code == 200) {
						$("#close").click();
						localStorage.setItem('token', data.data.token);
						this.$emit('checkLogin', 'success');
						location.reload();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code))

					}
				});

			},
			toXY(){
				/*this.isLogin = 5;*/
				this.$store.dispatch('sChangeLoginStatus',5)
			},
			//切换注册页面
			toRegister() {
				/*this.isLogin = 2;*/
				this.$store.dispatch('sChangeLoginStatus',2)
			},
			//切换登录页面
			toLogin() {
				/*this.isLogin = 1;
				this.step = 1;*/
				this.$store.dispatch('sChangeLoginStatus',1)
				this.$store.dispatch('mChangeStep',1)
				this.regType = 1;
				this.forgetpwData = {
					countryCode: "86",
				};
				this.registerData = {
					countryCode: "86",
				};
			},
			chageType(id){
				this.regType=id;
			},
			//切换忘记密码页面
			toForgetpw() {
				this.$store.dispatch('mChangeLogin',1)
				this.$store.dispatch('sChangeLoginStatus',3)
				this.$store.dispatch('mChangeStep',1)
			},
			//忘记密码下一步
			toNextStep() {
				if(this.forgetpwData.phone == "" || this.forgetpwData.phone == undefined || typeof this.forgetpwData.phone == "undefined") {
					this.$toast.center(this.$t('login.phoneNull'));
					return false;
				}
				if(this.forgetpwData.code == "" || this.forgetpwData.code == undefined || typeof this.forgetpwData.code == "undefined") {
					this.$toast.center(this.$t('login.smscode'));
					return false;
				}

				var resetpass = {};
				if(this.forgetpwData.countryCode== '86') {
					resetpass.templateCode = '5';
				}else if(this.forgetpwData.countryCode == '82'){
					resetpass.templateCode = '16';
				} else {
					resetpass.templateCode = '8'
				}
				resetpass.code = this.forgetpwData.code;
				resetpass.countryCode=this.forgetpwData.countryCode;
				resetpass.phone = this.forgetpwData.phone;
				resetpass.smid = this.loginData.smid;

				authenticate(resetpass).then(data => {
					if(data.code == 200) {
						this.$toast.center(this.$t('person.passcode'));
						this.step = 2
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});


			},
			//忘记密码  确认修改
			sureModify() {
				if(this.forgetpwData.password == "" || this.forgetpwData.password == undefined || typeof this.forgetpwData.password == "undefined") {
					this.$toast.center(this.$t('login.passNull'));
					return false;
				}
				if(this.forgetpwData.password != this.forgetpwData.repassword) {
					this.$toast.center(this.$t('login.conPass'));
					return false;
				}
				this.forgetpwData.smid = this.loginData.smid;
				if(this.forgetpwData.countryCode=='86'){
					this.forgetpwData.templateCode = "5";
				}else if(this.forgetpwData.countryCode=='82'){
					this.forgetpwData.templateCode = "16";
				}else{
					this.forgetpwData.templateCode = "8";
				}


				forgetPw(this.forgetpwData).then(data => {
					if(data.code == 200) {
						this.$toast.center(this.$t('login.passSuccess'));
						localStorage.removeItem('token');
						localStorage.removeItem('phonenum');
						this.ifLogin = false;
						localStorage.setItem("ifShowLoginLayout","yes")
						this.$router.push('/');
						document.location.reload();
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code));
					}
				});

			},
			//关闭弹窗
			inity() {
				var _this = this;
				$('#toReg').on("click",function(){
					/*_this.isLogin =2;*/
					_this.$store.dispatch('sChangeLoginStatus',2)
				});
				$("#myModal").on("hidden.bs.modal", function() {
					_this.loginData.username="";
					_this.loginData.password="";
					_this.loginData.countryCode="86";
					_this.loginData.imgcode="";
					_this.registerMail.mail="";
					_this.registerMail.password="";
					_this.registerMail.repassword="";
					_this.registerMail.code="";
					_this.regType=1;
					_this.registerData={
						countryCode: "86",
					}
					_this.forgetpwData={
						countryCode: "86",
					}
					/*_this.isLogin =1;*/
					_this.$store.dispatch('sChangeLoginStatus',1)
					_this.isCom=true;
					_this.isMess=false;
					_this.pact=false;
					_this.pact2=false;
					$('#cbox')[0].checked=false;
					$('#cbox2')[0].checked=false;
//					if(_this.pact){
//						_this.checkPact2();
//					}
				});
			},
			//手机注册
			toPhoneReg() {
				var regData = {}
				regData.phone = this.registerData.phone;
				regData.code = this.registerData.code;
				regData.smid = this.loginData.smid;
				regData.password = this.registerData.password;
				regData.countryCode = this.registerData.countryCode;
				regData.templateCode=this.registerData.templateCode;
				if(/^\d{8,11}$/.test(regData.phone) == false) {
					this.$toast.center(this.$t('login.phonenum'));
					return false;
				}
				if(this.registerData.password == "" || this.registerData.password == undefined || typeof this.registerData.password == "undefined") {
					this.$toast.center(this.$t('login.passwords'));
					return false;
				}
				if(regData.smid == "" || regData.smid == undefined || typeof regData.smid == "undefined") {
					this.$toast.center(this.$t('login.verifycode'));
					return false;
				}
				if(this.registerData.password != this.registerData.repassword) {
					this.$toast.center(this.$t('login.conPass'));
					return false;
				}
				phoneReg(regData).then(data => {
					if(data.code == 200) {
						/*this.isLogin=6;*/
						this.$store.dispatch('sChangeLoginStatus',6)
					} else {
						this.$toast.center(this.$t('msg.msg'+data.code))
					}
				});
			},
		},
		mounted() {
			this.getVcode();
			this.inity();
			this.qrcodeScan();
		},
		computed:{
	       compiledMarkdown () {
	         return marked(markload, { sanitize: true })
	       },
			/*isLogin(){
				return this.$store.getters.getLoginStatus;
			},
			step(){
				return this.$store.getters.getStep;
			},
			loginIfShow(){//忘记密码中的登陆入口是否显示
				return this.$store.getters.getShowLogin;
			},*/
			isLogin:  {
				get: function () {
					return this.$store.getters.getLoginStatus;
				},
				set: function (newValue) {
					this.$store.dispatch('mChangeLogin',newValue)
				}
			},
			step:{
				get: function () {
					return this.$store.getters.getStep;
				},
				set: function (newValue) {
					this.$store.dispatch('mChangeStep',newValue)
				}
			},
			loginIfShow:{
				get: function () {
					return this.$store.getters.getShowLogin;
				},
				set: function (newValue) {
					this.$store.dispatch('sChangeLoginStatus',newValue)
				}
			}
	     },
	};
</script>

<style>
	.modal-dialog {
		width: 478px !important;
		background: #000F1F!important;
		border:1px  solid #ffffff4d;
		margin-top: 175px !important;
	}

	.netlg-ac {
		color: #718EBD;
		underline: none;
		text-decoration: none;
	}

	.netlg-ac:hover {
		color: #718EBD;
		underline: none;
		text-decoration: none;
	}

	.netlg-ac:focus {
		color: #000;
		underline: none;
		text-decoration: none;
	}

	.form-control {
		height: 40px !important;
	}
	.modal-content{
		background: none !important;
	}
	input:-internal-autofill-previewed, input:-internal-autofill-selected, textarea:-internal-autofill-previewed, textarea:-internal-autofill-selected, select:-internal-autofill-previewed, select:-internal-autofill-selected {
	    background-color: none !important;
	    background-image: none !important;
	    color: #fff !important;
	}
	.codeDb{
		width: 125px;
		height: 125px;
		margin: 0 auto;
		padding: 5px;
		box-shadow: 0 2px 4px 0 rgba(5, 92, 203, 0.5);
		border: solid 1px rgba(5, 92, 203, 0.5);
		background-color: #ffffff;
		background-repeat: no-repeat;
	}
</style>
