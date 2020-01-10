<template>
</template>

<script>
    export default {
        name: "checkApp",
        data() {
            return {}
        },
        mounted() {
            this.appPlatform();
            this.appLanguage();
            this.checkApp();
        },
        methods:{
            appPlatform() {  // 辨别移动终端类型
                var u = navigator.userAgent;
                var app = navigator.appVersion;
                return {
                    // android终端或者uc浏览器
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
                    // 是否为iPhone或者QQHD浏览器
                    iPhone: u.indexOf('iPhone') > -1 ,
                    // 是否iPad
                    iPad: u.indexOf('iPad') > -1
                };
            },
            appLanguage() {
                return  (navigator.browserLanguage || navigator.language).toLowerCase()
            },
            checkApp() {  // 辨别移动终端的语言：zh-cn、en-us、ko-kr、ja-jp...
                var Terminal = {
                    platform : this.appPlatform(),
                    language : this.appLanguage()
                }
                // 根据不同的终端，跳转到不同的地址
                var theUrl = 'http://192.168.0.58:8080';
                if(Terminal.platform.android){//安卓端
                    location.href = 'http://192.168.0.58:8080';
                } else {
                    if(Terminal.platform.iPhone){//iPhone端
                        theUrl = 'http://192.168.0.58:8080/markets';
                    }else if(Terminal.platform.iPad){//iPad端
                        // 还可以通过language，区分开多国语言版
                        /*switch(Terminal.language){
                            case 'en-us'://iPad英文版APP Store地址
                                theUrl = 'https://itunes.apple.com/app/id1247266869';
                                break;
                            case 'ko-kr'://iPad韩语版APP Store地址
                                theUrl = 'https://itunes.apple.com/app/id1247266869';
                                break;
                            case 'ja-jp'://iPad日文版APP Store地址
                                theUrl = 'https://itunes.apple.com/app/id1247266869';
                                break;
                            default://iPad默认APP Store地址
                                theUrl = 'https://itunes.apple.com/app/id1247266869';
                        }*/
                    }
                    location.href = theUrl;
                }
            }
        }
    }
</script>

<style scoped>

</style>
