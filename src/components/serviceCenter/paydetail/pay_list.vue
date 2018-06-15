<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="费用明细" left-arrow @click-left="backTo"/>
        <van-row>
            <van-tabs v-model="active">
                <van-tab title="待支付订单">
                    <van-row>
                        <van-checkbox-group v-model="result">
                            <van-cell-group>
                                <van-cell v-for="(item,index) in un_pay_list" :key="index">
                                    <van-col span="2"><van-checkbox :name="item.code" /></van-col>
                                    <van-col span="18"><div @click="open_detail(item)">{{item.title}}</div></van-col>
                                    <van-col span="4"><div @click="open_detail(item)">￥{{item.total}}</div></van-col>
                                    <!-- <van-col span="1" ><van-icon name="arrow" /></van-col>                                     -->
                                </van-cell>
                            </van-cell-group>
                        </van-checkbox-group>
                    </van-row>
                </van-tab>
                <van-tab title="历史订单">
                    <van-row>
                            <van-cell-group>
                                <van-cell v-for="(item,index) in history_list" :key="index">
                                    <!-- <van-col span="2"><van-checkbox :name="item.code" /></van-col> -->
                                    <van-col span="20"><div @click="open_history(item)">{{item.title}}</div></van-col>
                                    <van-col span="3"><div @click="open_history(item)">￥{{item.total}}</div></van-col>
                                    <van-col span="1" ><van-icon name="arrow" @click="open_history(item)" /></van-col>                                    
                                </van-cell>
                            </van-cell-group>
                    </van-row>
                </van-tab>
            </van-tabs>
        </van-row>
        <van-submit-bar
            :price="totalPrice"
            button-text="立刻支付"
            @submit="open_pay"
            v-if="!active"
        >
            <span slot="tip" v-if="un_pay_list.length">
                温馨提示：请尽快缴清您的费用，避免因未交费产生滞纳金或场地使用麻烦
            </span>
        </van-submit-bar>
        <van-tabbar v-if="active">
            <van-button type="primary" bottom-action style="font-size:20px;border-radius:5px" @click="submit_fapiao">申请发票</van-button>
        </van-tabbar>
    </van-row>
</template>

<script>
export default {
    data(){
        return {
            active:0,
            result:[],
            un_pay_list:[
                {
                    title:"三月份账单",
                    total: 100,
                    code: 3
                },
                {
                    title:"四月份账单",
                    total: 100,
                    code: 4
                }
            ],
            history_list:[
                {
                    title:"一月份账单",
                    total: 100,
                    code: 1
                },
                {
                    title:"二月份账单",
                    total: 100,
                    code: 2
                }
            ]
        }
    },
    computed:{
        totalPrice(){
            return 10000
        }
    },
    methods:{
        backTo(){
            this.$router.go(-1)
        },
        open_detail(e){
            let _self = this
            // console.log(e)
            this.$router.push(
                {
                    name:"serviceCenterPayDetail",
                    params:{
                        id:this.$route.params.id,
                        month:e.code
                    }
                }
            )
        },
        open_history(e){
            let _self = this
            // console.log(e)
            this.$router.push(
                {
                    name:"serviceCenterPayHistroyDetail",
                    params:{
                        id:this.$route.params.id,
                        month:e.code
                    }
                }
            )
        },
        //  打开支付页面
        open_pay(){

        },
        //  申请发票
        submit_fapiao(){

        }
    },
    // created(){
    //     alert(this.$route.params.id)
    // }
}
</script>
