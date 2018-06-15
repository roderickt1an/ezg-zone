<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar :title="bar_title" left-arrow @click-left="$backTo()" />
        <van-row>
            <van-checkbox-group v-model="result">
                <van-cell-group>
                    <van-cell v-for="(item,index) in pay_detail" :key="index">
                        <van-col span="2"><van-checkbox :name="item.code" /></van-col>
                        <van-col span="18"><div>{{item.title}}</div></van-col>
                        <van-col span="4"><div>￥{{item.total}}</div></van-col>
                        <van-col span="2" style="visibility:hidden">1</van-col>
                        <van-col span="16"><div>{{item.content}}</div></van-col>                        
                        <!-- <van-col span="1" ><van-icon name="arrow" /></van-col>                                     -->
                    </van-cell>
                </van-cell-group>
            </van-checkbox-group>
        </van-row>
        <van-submit-bar
            :price="totalPrice"
            button-text="立刻支付"
            @submit="open_pay"
        />
        
    </van-row>
    
</template>

<script>
export default {
    data(){
        return{
            result:[],
            pay_detail:[
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
            return 10000
        }
    },
    methods:{
        open_pay(){

        }
    }
}
</script>

