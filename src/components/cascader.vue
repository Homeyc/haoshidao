<template>
    <div class="self_cascader_wrap" ref="case">
        <div class="cascader-root-wrap">
            <i class="el-icon-arrow-up  icon-pos" :class="{'is-reverse':ifShow}" @click="changeShow" ></i>
            <input class="cascader-input form-control lg-border" style="color:#718EBD!important;" readonly="readonly" autocomplete="off" :placeholder="$t('netnew.pleaseSelect')" v-model="getLabelPath" @click="changeShow" />
        </div>
        <div class="self_cascader_conatiner" v-if="ifShow" @click.stop>
            <div class="self_cascader_panel">
                <div class="self_cascader_item_wrap" v-if="levelList1.length>0">
                    <div class="self_scrollbar__wrap">
                        <ul class="self_cascader_menu_list">
                            <li class="self_cascader_node" :class="{'self_inactive_path': activeIndex == item.value}" v-for="item in levelList1" :value="item.value" @click="getLevel1(item.value,item.label)">
                                <span class="self_cascader_node_label">{{$t(item.label)}}</span>
                                <i class="fa fa-angle-right" aria-hidden="true" v-if="!caseLoading"></i>
                                <i class="fa fa-spinner" aria-hidden="true" v-show="caseLoading && activeIndex == item.value"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="self_cascader_item_wrap" v-if="levelList2.length>0">
                    <div class="self_scrollbar__wrap">
                        <ul class="self_cascader_menu_list">
                            <li class="self_cascader_node" v-for="item in levelList2" :value="item.value" @click="getLevel2(item.value,item.label)">
                                <span class="self_cascader_node_label">{{item.label}}</span>
                                <i class="self_cascader_node_postfix"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "self-cascader",
        props:{
            levelList1:{//一级数据
                type:Array,
                default(){
                    return []
                }
            },
            levelList2:{//二级数据
                type:Array,
                default(){
                    return []
                }
            },
            ifClearPath:{
                type:Boolean,
                default:false
            },
            caseLoading:{
                type:Boolean,
                default:false
            }
        },
        watch:{
            getvalPath(){//获取value路径
                this.$emit('getValKey',this.getvalPath)
            },
            ifClearPath() {
                if(this.ifClearPath) {
                    this.label1 = ''
                    this.key1 = ''
                    this.label2 = ''
                    this.key2 = ''
                }
            }
        },
        data() {
            return {
                ifShow:false,//级联块是否展示
                activeIndex:'',//选中的以及元素
                label1:'',
                key1:'',
                label2:'',
                key2:'',
            }
        },
        mounted() {
            document.addEventListener("click", this.clickHide)
        },
        computed:{
            getvalPath(){//获取选取value路径
                let valPath = [];
                if(this.key1 && this.label1) {
                    valPath.push({'value':this.key1,'label':this.$t(this.label1)});
                }
                if(this.key2 && this.label2) {
                    valPath.push({'value':this.key2,'label':this.label2});
                }
                return valPath
            },
            getLabelPath() {//获取选取的label路径
                if(this.activeIndex == '' || this.activeIndex == undefined){
                    if(this.label1 && this.label2) {
                        return this.$t(this.label1)+'/'+this.label2
                    }else{
                        return ''
                    }
                }else{
                    return ''
                }
            }
        },
        methods:{
            clickHide(e) {
                if (!this.$refs.case.contains(e.target)) {
                    this.ifShow = false
                }
            },
            getLevel1(val,label) {//获取选择的一级数据，并获取二级数据
                this.key1 = val;
                this.label1 = label;
                this.key2 = '';
                this.label2 = '';
                this.activeIndex = val;
                this.$emit('getSecondList', val);
            },
            getLevel2(val,label){//获取选择的二级数据，并清除一二级数据
                this.key2 = val;
                this.label2 = label;
                this.activeIndex = '';
                this.$emit('clearList')
                this.ifShow = false;
            },
            changeShow() {//获取一级数据
                this.$emit('getList0')
                this.ifShow = !this.ifShow
            }
        },
        //清除click监听
        beforeDestroy () {
            document.removeEventListener('click', this.clickHide)
        }
    }
</script>

<style scoped>
    .self_cascader_wrap{
        position:relative;
        cursor: pointer;
    }
    .cascader-root-wrap{
        position: relative;
        font-size: 16px;
        line-height: 40px;
        text-align: center;
    }
    .cascader-input{
        cursor: pointer;
    }
    .icon-pos{
        position:absolute;
        right:0px;
        top:12px;
        color:#718EBD!important;
        cursor: pointer;
        transition: all .3s linear;
        -moz-transition:  all .3s linear; /* Firefox 4 */
        -webkit-transition:  all .3s linear; /* Safari 和 Chrome */
        -o-transition:  all .3s linear; /* Opera */
        -webkit-transform: rotateZ(180deg);
    }
    .self_cascader_conatiner{
        margin: 5px 0;
        font-size: 16px;
        background: #24334A;
        border: 1px solid rgba(255,255,255,.1);
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        position:absolute;
        top:50px;
        left:0px;
        transition: all 1s ease;
        height:204px;
        z-index:55
    }
    .show_active{
        height:204px;
    }
    .self_cascader_panel{
        display: flex;
        border-radius: 4px;
        font-size: 16px;
        background-color: #24334A;
    }
    .self_cascader_item_wrap{
        min-width: 180px;
        box-sizing: border-box;
        color: #718EBD;
        border-right: 1px solid rgba(255,255,255,.1);
        overflow: hidden;
        position: relative;
        background-color: #24334A;
        border-radius: 4px;
    }
    .self_scrollbar__wrap{
        overflow: auto;
        height: 204px;
        background-color: #24334A;
    }
    .self_cascader_menu_list{
        position: relative;
        min-height: 100%;
        margin: 0;
        padding: 6px 0;
        list-style: none;
        box-sizing: border-box;
        background-color: #24334A;
    }
    .self_cascader_node{
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        padding: 0 30px 0 20px;
        height: 34px;
        line-height: 34px;
        outline: none;
    }
    .self_cascader_node:hover{
        background-color: #718EBD;
        color:#fff;
    }
    .self_cascader_node_label{
        flex: 1;
        padding: 0 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }
    .self_cascader_node_postfix{
        position: absolute;
        right: 10px;
    }
    .self_inactive_path{
        color:#fff;
    }
    ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
        color:#718EBD!important;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:#718EBD!important;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:#718EBD!important;
    }
    :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color:#718EBD!important;
    }
    .is-reverse{
        webkit-transform: rotateZ(0);
        transform: rotateZ(0);
    }
</style>
