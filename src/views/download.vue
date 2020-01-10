<template>
    <section class="download_wrap">
        <div class="dl_container">
            <div class="dl_main clearfix">
                <div class="dl-l fl">
                    <p class="dl_l_ftext">{{$t('app.t1')}}</p>
                    <div class="dl_l_lgtext" style="padding:10px 0;" v-show="$i18n.locale=='en-US'">
                        <span  style="font-size:36px;">Quants Trade with 1 Click</span>
                    </div>
                    <div class="dl_l_lgtext" v-show="$i18n.locale=='zh-CN'">
                        <span style="font-size:50px;">一键炒币  量化利器</span>
                    </div>
                    <div class="dl_l_lgtext" style="padding:10px 0;" v-show="$i18n.locale=='ko'">
                        <span  style="font-size:36px;">Quants Trade with 1 Click</span>
                    </div>
                    <div class="line_hr"></div>
                    <p class="dl_l_zone" v-show="$i18n.locale=='zh-CN'" >零门槛智能理财 24H全球交易</p>
                    <p class="dl_l_zone" v-show="$i18n.locale=='en-US'" style="font-size:22px;">Professional Robot Advicer Awaits you 24/7</p>
                    <p class="dl_l_zone" v-show="$i18n.locale=='ko'" style="font-size:22px;">Professional Robot Advicer Awaits you 24/7</p>
                    <p class="dl_l_btext" style="padding-bottom:40px;" v-show="$i18n.locale=='en-US'">{{$t('app.totest')}}</p>
                    <p class="dl_l_btext" style="padding-bottom:40px;" v-show="$i18n.locale=='ko'">{{$t('app.totest')}}</p>
                    <p class="dl_l_btext"  v-show="$i18n.locale=='zh-CN'">{{$t('app.totest')}}</p>
                    <div class="code-wrap clearfix">
                        <div style="width:221px;position:relative;min-height:160px;" class="fl">
                            <p class="btn-tp" v-show="$i18n.locale=='zh-CN'"><span class="btn-tptext">*仅邀请用户可登录体验。请向NetCentric官方社群管理员申请体验资格。名额有限，先到先得。</span></p>
                            <p class="btn-tp" v-show="$i18n.locale=='en-US'" style="margin-top:0;"><span class="btn-tptext" style="width:110%;margin-left:-8%;">* Currently, only invited users can login the App. To obtain invitation, please contact NetCentric official group admin.</span></p>
                            <p class="btn-tp" v-show="$i18n.locale=='ko'" style="margin-top:0;"><span class="btn-tptext" style="width:110%;margin-left:-8%;">* Currently, only invited users can login the App. To obtain invitation, please contact NetCentric official group admin.</span></p>
                            <a class="dl_btn" :href="appTestLink" download="" target="_blank"><img src="../assets/img/appdl/iicon.png" style="margin-right:30px;"/>{{$t('app.download')}}</a>
                        </div>
                        <div class="fr code" id="qrcode" ref="qrcode" v-show="!loading"></div>
                        <div v-show="loading && $i18n.locale=='zh-CN'" style="color:#fff;font-size:14px;text-align: center;">加载中...</div>
                        <div v-show="loading && $i18n.locale=='en-US'" style="color:#fff;font-size:14px;text-align: center;">Loading...</div>
                        <div v-show="loading && $i18n.locale=='ko'" style="color:#fff;font-size:14px;text-align: center;">Loading...</div>
                    </div>
                </div>
                <div class="dl-fr fr">
                    <img src="../assets/img/appdl/ileft@2x.png" style="width:182px;">
                    <img src="../assets/img/appdl/iPhone@2x.png" style="width:232px;">
                    <img src="../assets/img/appdl/iright@2x.png" style="width:182px;">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import QRCode from 'qrcodejs2';
    import { appLink }  from '../api/api';
    export default {
        name: "download",
        data(){
            return {
                loading:true,
                appTestLink:''
            }
        },
        components: {
            QRCode
        },
        methods:{
            qrcodeScan() { //生成二维码
                var ercode = this.appTestLink;
                let qrcode = new QRCode('qrcode', {
                    width: 148, // 二维码宽度
                    height: 148, // 二维码高度
                    text: ercode
                })
            },
            appLink() {//app地址
                this.loading = true
                appLink().then(res => {
                    if(res.code == 200){
                        this.loading = false
                        this.appTestLink = res.data;
                        this.$nextTick(() => {
                            this.qrcodeScan()
                        })
                    }else{
                        this.loading = false
                       this.$toast.center(res.msg)
                    }
                })
            }
        },
        mounted() {
            this.appLink()

        }
    }
</script>

<style scoped>
    .download_wrap{
        padding-top:207px;
        width:100%;
        padding-bottom:200px;
    }
    .dl_container{
        width:1400px;
        margin:0 auto;
    }
    .dl_main{
        width:86%;
        margin:0 auto;
    }
    .dl-l{
        width:486px;
    }
    .dl_l_ftext{
        color:#fff;
        font-size: 22px;
        margin-bottom: 0;
        line-height: 32px;
    }
    .dl_l_lgtext{
        color:#fff;
        padding:20px 0;
        line-height: 70px;
    }
    .dl_l_zone{
        color:#fff;
        font-size:20px;
        padding-top:20px;
    }
    .dl_l_btext{
        color:#718EBD;
        font-size:14px;
        padding-bottom: 60px;
    }
    .line_hr{
        width:100px;
        height:2px;
        border-radius: 2px;
        background-color: #067BE8;
    }
    .code{
        width:158px;
        height:158px;
        background-color: #fff;
        text-align: center;
        padding:5px;
    }
    .dl_btn{
        width:220px;
        height:60px;
        text-align: center;
        line-height: 60px;
        background-size: 100%;
        border:none;
        display: inline-block;
        font-size:12px;
        color:#fff!important;
        position:absolute;
        left:0;
        bottom:0;
        background:url("../assets/img/dybtn@2x.png") no-repeat;
        background-size: 100%;
    }
    .dl_btn:hover{
        box-shadow: inset 0 0 5px rgba(255,255,255,.2);
    }

    .dl_btn:active{
        bottom:-1px;
        opacity: .8;
    }
    .code-wrap{
        width:100%;
    }
    .btn-tp{
        color:#718EBD;
        font-size:12px;
        margin-top:30px;
        text-align: left;
        width:100%;
    }
    .btn-tptext{
        display: block;
        font-size:0.8em;
        transform: scale(.86);
        width:118%;
        margin-left:-8%;
    }

</style>
