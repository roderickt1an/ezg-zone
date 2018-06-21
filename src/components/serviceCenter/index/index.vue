<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="服务中心" />

        <form action="/" style="height:180px;background-image:url(/static/img/home2/banner.jpg)">
            <!-- <center style="padding-top:25px;color:#202020;letter-spacing:3px;opacity:0.8"><h3>专利交易平台</h3></center> -->
            <!-- <van-search
                style="top:10px;background: rgba(0,0,0,0)"
                v-model="searchvalue"
                placeholder="输入专利名称搜索"
                @search="onSearch">
                <div slot="action" @click="onSearch" style="margin-left:10px;margin-right:10px;color:#666666;">
                    <van-button type="default" size="small" style="">搜索</van-button></div> -->
            <!-- </van-search> -->
        </form>
        <!-- <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(item, index) in img_swipe" :key="index">
                <img v-lazy="item.src" style="width:100%;height:120px;"/>
                <img :src="item.src">
                <div style="width:100%;height:60px">
                    <p>{{ item.content }}</p>
                </div>
            </van-swipe-item>
        </van-swipe> -->

        <van-row style="padding: 10px; background-color: #ffff; border-bottom: 1px solid #eeeeee;">
            <center style="margin-left: 2%; color: #666666;font-weight:bold;">广州亿帐柜信息科技有限公司</center>
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

        <van-tabbar v-model="active" @change="tochange" v-if="isInput">
            <van-tabbar-item icon="cart">企服商城</van-tabbar-item>
            <van-tabbar-item icon="wap-home">园区服务</van-tabbar-item>
            <van-tabbar-item icon="contact">个人中心</van-tabbar-item>
        </van-tabbar>
        <van-popup v-model="ispayed" style="padding:30px 5px;width:80%">
            <center>
                <van-icon name="info-o" style="margin-right:10px"/>您有费用需要支付！
            </center>
        </van-popup>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            img_swipe:[],
            isInput:true,
            active:1,
            // 支付提示
            ispayed:false,
            menu:[
                {
                    title:"费用明细",
                    class:"iconfont icon-zhangdan",
                    to:"serviceCenterPayList"
                },
                {
                    title:"招商信息",
                    class:"iconfont icon-zhaoshang",
                    to:"serviceCenterCooperation"
                },
                {
                    title:"荣誉榜",
                    class:"iconfont icon-jiangbei",
                    to:"serviceCenterListIndex"                    
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
                }
            ]
        }
    },
    methods:{
        toMenu(e){
            console.log(e)
            if(e.to=='serviceCenterPayList'){
                this.$router.push({
                    name:e.to,
                    params:{
                        id:"4028805e641c4b0c01641c6acd110028"
                    }
                })
            }else{
                this.$router.push({
                name:e.to,
                params:{
                    userID:123
                }
            })
            }
        },
        tochange(e){
            if(e=='0'){
                this.$router.push(
                    // {
                    //     name:'mallCalling',
                    //     params:{
                    //         userID:123
                    //     }
                    // }
                    {path:"/mall/calling/123"}
                    
                )
            }else if(e=='1'){
                this.$router.push(
                    // {
                    //     name:'serviceCenterIndex',
                    //     params:{
                    //         userID:123
                    //     }
                    // }
                    {path:"/servicecenter/index/123"}
                )
            }else{
                this.$router.push(
                    {
                        name:'serviceCenterIndex',
                        params:{
                            userID:123
                        }
                    }
                )
            }
        }
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