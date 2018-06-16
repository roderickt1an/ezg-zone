<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar :title="bar_title" left-arrow @click-left="$backTo()"/>
        <van-row>
            <van-cell-group>
                    <van-cell v-for="(item,index) in list" :key="index" @click="openDetail(item.id)">
                        <van-col span="8"><span class="iconfont icon-jiangbei" style="font-size:20px;color:red" :style="item.style"></span></van-col>
                        <van-col span="16">{{item.companyname}}</van-col>                        
                    </van-cell>
                    <van-cell><center>---- 我是有底线的 ----</center></van-cell>
                </van-cell-group>
        </van-row>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    companyname:"广州市天元中路一号",
                    id:12345,
                    style:"color:yellow"
                },
                {
                    companyname:"广州市天元中路一号",
                    id:12345,
                    style:"color:sliver"
                    
                },
                {
                    companyname:"广州市天元中路一号",
                    id:12345,
                    style:"color:orange"
                    
                },
                {
                    companyname:"广州市天元中路一号",
                    id:12345
                }
            ]
        }
    },
    computed:{
        bar_title(){
            if(this.$route.params.type == "Potential"){
                return "潜力股"
            }else{
                return "荣耀榜"
            }
        },
        // isFirst(e){
        //     console.log(e)
        // }
        // list_class(e){
        //     // console.log(e)
        //     if(e == "0"){
        //         return "color:yellow"
        //     }else if(e == "1"){
        //         return "color:silver"
        //     }else if(e == "2"){
        //         return "color:orange"
        //     }else{
        //         return "color:red"
        //     }
        // }
    },
    methods:{
        openDetail(e){
            if(this.$route.params.type == "Potential"){
                this.$router.push({
                    name:"serviceCenterListPDetail",
                    params:{
                        id: e
                    }
                })
            }else{
                this.$router.push({
                    name:"serviceCenterListHDetail",
                    params:{
                        id: e
                    }
                })
            }
        }
    }
}
</script>

<style>
@import './iconfont.css';
    .first{
        color:yellow
    }
    .seconde{
        color:silver
    }
    .third{
        color:orange
    }
    .other{
        color:red
    }
</style>

