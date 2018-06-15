<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar :title="bar_title" left-arrow @click-left="$backTo()" fixed/>
        <van-row style="margin-top:40px;margin-bottom:40px">
            <van-checkbox-group v-model="result">
                <van-cell-group>
                    <van-cell v-for="(item,index) in history_list" :key="index">
                        <van-col span="2" style="visibility:hidden">1</van-col>                        
                        <van-col span="18"><div>{{item.title}}</div></van-col>
                        <van-col span="4"><div>￥{{item.total}}</div></van-col>
                        <van-col span="2" style="visibility:hidden">1</van-col>
                        <van-col span="16"><div>{{item.content}}</div></van-col>                        
                        <!-- <van-col span="1" ><van-icon name="arrow" /></van-col>                                     -->
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>
        </van-row>
        <van-tabbar style="width:100%">
            <van-row style="text-align:center;width:100%;padding-top:15px">
                总支付金额<span style="color:red">￥{{totalPrice}}</span>
            </van-row>
            <!-- <van-button type="primary" bottom-action style="font-size:20px;border-radius:5px" @click="submit">提 交</van-button> -->
        </van-tabbar>
    </van-row>
    
</template>

<script>
export default {
    data(){
        return{
            result:[],
            history_list:[
                {
                    title:"工位租金",
                    content:"费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，",
                    total: 1000
                },
                {
                    title:"工位租金",
                    content:"费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，",
                    total: 1000
                },
                {
                    title:"工位租金",
                    content:"费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，",
                    total: 1000
                },
                {
                    title:"工位租金",
                    content:"费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，",
                    total: 1000
                },
                {
                    title:"工位租金",
                    content:"费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，费用说明，",
                    total: 1000
                }
            ]
        }
    },
    computed:{
        bar_title(){
            return this.$route.params.month + "月份费用明细"
        },
        totalPrice(){
            let total = 0
            for(let i = 0;i< this.history_list.length;i++){
                total = total + this.history_list[i].total
            }
            return total
        }
    },
    methods:{
        open_pay(){

        }
    }
}
</script>

