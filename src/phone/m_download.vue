<template>
    <section style="width:100%;min-height:100%;padding-bottom:100px;">
        <div class="t_wrap">
            <p style="color:#fff;font-size:16px;text-align: center;padding-bottom:10px;">{{$t('app.t1')}}</p>
            <div style="color:#fff;font-size:35px;text-align: center;line-height:50px;" v-show="$i18n.locale=='zh-CN'">
                <span>一键炒币 量化利器</span>
            </div>
            <div style="color:#fff;font-size:35px;text-align: center;line-height:50px;font-family: Helvetica;" v-show="$i18n.locale=='en-US'">
                <span>Quants Trade with 1 Click</span>
            </div>
            <div style="color:#fff;font-size:35px;text-align: center;line-height:50px;font-family: Helvetica;" v-show="$i18n.locale=='ko'">
                <span>Quants Trade with 1 Click</span>
            </div>
            <div class="line"></div>
            <div style="size:16px;color:#fff;text-align: center">{{$t('app.zonemk')}}</div>
            <div class="quikly">{{$t('app.totest')}}</div>
        </div>
        <div class="code_wrap">
                <div v-show="loading && $i18n.locale=='zh-CN'" style="color:#fff;font-size:14px;text-align: center;padding-bottom:50px">加载中...</div>
                <div v-show="loading && $i18n.locale=='en-US'" style="color:#fff;font-size:14px;text-align: center;padding-bottom:50px">Loading...</div>
                <div v-show="loading && $i18n.locale=='ko'" style="color:#fff;font-size:14px;text-align: center;padding-bottom:50px">Loading...</div>
                <div class="rcode" id="qrcode" ref="qrcode" v-show="!loading"></div>
                <div style="color:#718EBD;font-size:10px;width:50%;line-height:16px;text-align: center;margin:0 auto;" v-show="$i18n.locale=='zh-CN'">*仅邀请用户可登录体验。请向NetCentric官方社群管理员申请体验资格。名额有限，先到先得。</div>
                <div style="color:#718EBD;font-size:10px;width:65%;line-height:16px;text-align: center;margin:0 auto;font-family: Helvetica;" v-show="$i18n.locale=='en-US'">* Currently, only invited users can login the App. To obtain invitation, please contact NetCentric official group admin.</div>
                <div style="color:#718EBD;font-size:10px;width:65%;line-height:16px;text-align: center;margin:0 auto;font-family: Helvetica;"  v-show="$i18n.locale=='ko'">* Currently, only invited users can login the App. To obtain invitation, please contact NetCentric official group admin.</div>
           <!-- <a class="dl_btn" href="" download=""><img src="../assets/img/appdl/iicon.png" style="margin-right:30px;"/>{{$t('app.download')}}</a>-->
        </div>
    </section>
</template>

<script>
    import QRCode from 'qrcodejs2';
    import { appLink }  from '../api/api';
    export default {
        name: "m_download",
        data() {
            return{
                lang:'en-US',
                loading:true,
                appTestLink:''
            }
        },
        components: {
            QRCode
        },
        mounted() {
            this.appLink()
            this.checkLang()
            if(this.lang = 'en-US'){
                document.getElementsByTagName('body')[0].style.fontFamily = 'Helvetica,PingFang SC,Nimbus Sans L,Arial,Microsoft YaHei'
            }else{
                document.getElementsByTagName('body')[0].style.fontFamily = 'PingFang SC,Helvetica Neue, Helvetica,Nimbus Sans L,Arial,Microsoft YaHei'
            }
        },
        methods:{
            checkLang(){//检查中英文
                if( localStorage.getItem('lang')){
                    this.lang=localStorage.getItem('lang');
                    this.$i18n.locale = this.lang;//通过切换locale的值来实现语言切换
                }else{
                    if (this.lang == "zh-CN"){
                        this.lang = 'zh-CN';
                        this.$i18n.locale = this.lang;//关键语句//通过切换locale的值来实现语言切换
                        localStorage.setItem('lang',this.lang)
                    }else if(this.lang == "ko-kr"){
                        this.lang = 'ko-kr';
                        this.$i18n.locale = this.lang;//关键语句
                        localStorage.setItem('lang',this.lang);
                    }else{
                        this.lang = 'en-US';
                        this.$i18n.locale = this.lang;//关键语句
                        localStorage.setItem('lang',this.lang);
                    }
                }
            },
            qrcodeScan() { //生成二维码
                var ercode = this.appTestLink;
                let qrcode = new QRCode('qrcode', {
                    width: 76, // 二维码宽度
                    height: 76, // 二维码高度
                    text: ercode
                })
            },
            appLink() {//app地址
                console.log(this.loading)
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
        }
    }
</script>

<style scoped>
    .t_wrap{
        width:86%;
        margin:0 auto;
        padding-top:130px;
    }
    .line{
        height:2px;
        width:20%;
        background-color: #3AB3FF;
        border-radius: 2px;
        margin:20px auto 25px;
    }
    .quikly{
        color:#718EBD;
        font-size:12px;
        text-align: center;
        width:90%;
        margin:0 auto;
        padding:25px 0 70px;
    }
    .rcode{
        width:80px;
        height:80px;
        background-color: #fff;
        padding:2px;
        margin:0 auto 30px;
    }
    .dl_btn{
        width:178px;
        height:52px;
        text-align: center;
        line-height: 52px;
        background-size: 100%;
        border:none;
        display: block;
        font-size:14px;
        color:#fff!important;
        background:url("../assets/img/dybtn@2x.png") no-repeat;
        background-size: 100%;
        margin:62px auto 166px;
    }
    .abt_section{
        text-align: center;
        font-size:18px;
    }
    .ab_tit{
        color:#fff;
        padding-bottom: 40px;
    }
    .ab_text{
        color:#718EBD;
        padding-bottom: 28px;
    }
</style>
