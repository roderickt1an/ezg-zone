<template>
    <van-row style="overflow-x: hidden">
        <van-row style="margin-bottom:60px">
            <van-nav-bar title="服务中心" />

            <!-- <form action="/" style="height:180px;background-image:url(/static/img/home2/banner.jpg)"> -->
            <!-- <form action="/" style="height:180px;background-image:url(/static/img/home2/logo.svg)">
            </form> -->
            <div style="height:180px;">
                <img src="/static/img/home2/logo3.png" alt="" width="100%" height="100%">
            </div>
            <van-row style="padding: 10px; background-color: #ffff; border-bottom: 1px solid #eeeeee;" >
                <center style="margin-left: 2%; color: #666666;font-weight:bold;" @click="openSelect">{{showCompanyName}}</center>
            </van-row>

            <div style="margin-top: 5px"></div>

            <div style="padding: 10px; background-color: #ffff; border-bottom: 1px solid #eeeeee;">
                <span class="iconfont icon-fuwu"></span><span style="margin-left: 2%;color: #666666;font-weight:bold;">园区服务</span>
            </div>

            <van-list>
                <van-row gutter="20" style="background-color: #ffffff;padding-top: 10px;padding-bottom: 20px;padding-left:15px;padding-right:15px">
                    <van-col span="8" v-for="(item, index) in menu" :key=index style="height:90px">
                        <center>
                            <div :class="item.class" style="font-size:40px"  @click="toMenu(item)"></div>
                            <p style="font-size: 14px;color: #aaa;margin-top:5px;">{{ item.title }}</p>
                        </center>
                    </van-col>
                </van-row>
            </van-list>
        </van-row>

        <van-tabbar v-model="active" @change="tochange" v-if="isInput">
            <van-tabbar-item icon="cart">企服商城</van-tabbar-item>
            <van-tabbar-item icon="wap-home">园区服务</van-tabbar-item>
            <van-tabbar-item icon="contact">客服中心</van-tabbar-item>
        </van-tabbar>
        <van-popup v-model="ispayed" style="padding:30px 5px;width:80%">
            <center>
                <van-icon name="info-o" style="margin-right:10px"/>您有费用需要支付！
            </center>
        </van-popup>
        <van-dialog
            v-model="select_company"
            :show-confirm-button="false"
            :close-on-click-overlay="true"
            >
            <van-radio-group v-model="select_company_id">
                <van-cell-group>
                    <van-cell v-for="item in companyList" :key="item.id" clickable @click="choose(item)">
                        <van-col span="22"><div>{{item.name}}</div></van-col>
                        <van-col span="2"><van-radio :name="item.id" /></van-col>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </van-dialog>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            select_company_id:"",
            showCompanyName:"",
            select_company:false,
            img_swipe:[],
            isInput:true,
            active:1,
            companyList:"",
            // 支付提示
            ispayed:false,
            menu:[
                {
                    title:"费用明细",
                    class:"iconfont icon-mingxi",
                    to:"serviceCenterPayList"
                },
                {
                    title:"招商信息",
                    class:"iconfont icon-zhaoshang",
                    to:"serviceCenterCooperation"
                },
                {
                    title:"企业名录",
                    class:"iconfont icon-qiyeminglu",
                    to:"serviceCenterCompanyList"
                },
                {
                    title:"园区介绍",
                    class:"iconfont icon-yuanqu",
                    to:"serviceCenterIntroduce"
                },
                {
                    title:"荣誉榜",
                    class:"iconfont icon-rongyu",
                    to:"serviceCenterListList",
                    type:"Honour"

                },
                {
                    title:"成长榜",
                    class:"iconfont icon-tubiaozhizuomoban",
                    to:"serviceCenterListList",
                    type:"Potential"
                },
                {
                    title:"服务中心",
                    class:"iconfont icon-tubiaozhizuomoban",
                    to:"mallCalling",
                },
            ]
        }
    },
    methods:{
        beforeClose(){

        },
        openSelect(){
            this.select_company = true
        },
        choose(e){
            this.showCompanyName = e.name
            this.select_company_id = e.id
            this.select_company = false
        },
        getData(){
            let _self = this
            let url = `api/customerController.do?getTenantList`
            let config = {
                params: {
                    // customerId:"4028805e6402da1d016402dcb93b0002"
                    customerId:this.$route.params.id
                }
            }
            this.$http.get(url,config).then(function(res){
                // console.log(res.data.obj)
                _self.companyList = res.data.obj
                _self.showCompanyName = _self.companyList[0].name
                _self.select_company_id = _self.companyList[0].id
                for(let i = 0;i<_self.companyList.length;i++){
                    if(_self.companyList[i].have_pay_money == 1){
                        _self.ispayed = true
                    }
                }
            })
        },
        toMenu(e){
            // console.log(e)
            if(e.to=='serviceCenterPayList'){
                this.$router.push({
                    name:e.to,
                    params:{
                        id:this.select_company_id
                    }
                })
            }else if(e.to=='serviceCenterListList'){
                this.$router.push({
                    name:e.to,
                    params:{
                        type:e.type
                    }
                })
            }else if(e.to == 'mallCalling'){
              this.$router.push({
                 name:e.to,
                  params:{
                      id:this.$route.params.id,
                      cpid:this.select_company_id
                  }
              })
            }else{
                this.$router.push({
                name:e.to,
                params:{
                    id:this.$route.params.id
                }
            })
            }
        },
        tochange(e){
            if(e=='0'){
                // this.$router.push(
                //     {
                //         // name:'mallCalling',
                //         // params:{
                //         //     id:this.$route.params.id
                //         // }
                //     }
                //     // {path:"/mall/calling/123"}

                // )
                window.location.href = "http://m.zgcfo.com"
            }else if(e=='1'){
                this.$router.push(
                    {
                        name:'serviceCenterIndex',
                        params:{
                            id:this.$route.params.id
                        }
                    }
                    // {path:"/servicecenter/index/123"}
                )
            }else{
                this.$router.push(
                    {
                        name:'personComplainList',
                        params:{
                            id:this.$route.params.id
                        }
                    }
                )
            }
        }
    },
    created(){
        this.getData()
    }
}
</script>

<style scoped>
@import './iconfont.css';
    .imgswipe{
        width: 100%;
        height: 240px;
        display: block;
        padding: 30px 60px;
        box-sizing: border-box;
        background-color: #fff;
        pointer-events: none;
    }
</style>
