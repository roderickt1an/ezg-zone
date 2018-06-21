<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="费用明细" left-arrow @click-left="backTo"/>
        <van-row>
            <van-tabs v-model="active">
                <van-tab title="待支付订单">
                    <van-row><center><van-loading color="black" v-if="isloading"/></center></van-row>
                    <van-row>
                        <van-checkbox-group v-model="result">
                            <van-cell-group>
                                <van-cell v-if="!un_pay_list.length"><center>- 当前无需要支付订单 -</center></van-cell>
                                <van-cell v-for="(item,index) in un_pay_list" :key="index">
                                    <van-col span="2"><van-checkbox :name="item" /></van-col>
                                    <van-col span="18"><div @click="open_detail(item)">{{item.pay_month}}</div></van-col>
                                    <van-col span="4"><div @click="open_detail(item)">￥{{item.pay_money}}</div></van-col>
                                    <!-- <van-col span="1" ><van-icon name="arrow" /></van-col>                                     -->
                                </van-cell>
                            </van-cell-group>
                        </van-checkbox-group>
                    </van-row>
                </van-tab>
                <van-tab title="历史订单">
                    <van-row>
                            <van-cell-group>
                                <van-cell v-if="!history_list.length"><center>- 无历史订单 -</center></van-cell>                                
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
            isloading:false,
            active:0,
            result:[],
            un_pay_list:[],
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
            console.log(this.result)
            let temp = 0
            for(let i = 0;i<this.result.length;i++){
                temp = temp + this.result[i].pay_money
            }
            return temp*100
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
                        id:e.id,
                        month:e.pay_month
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

        },
        getUnpayData(){
            let _self = this
            _self.isloading = true
            let url = `api/tenantPayTotalController.do?getPrePayTenantPayTotalList`
            let config = {
                params:{
                    tenantId:this.$route.params.id
                }
            }
            this.$http.get(url,config).then(function(res){
                // console.log(res.data.obj)
                _self.un_pay_list = res.data.obj
                _self.isloading = false                
            })
        },
        getHistoryData(){
            let _self = this
            let url = `api/tenantPayTotalController.do?getHistTenantPayTotalList`
            let config = {
                params:{
                    tenantId:this.$route.params.id
                }
            }
            this.$http.get(url,config).then(function(res){
                // console.log(res.data.obj)
                _self.history_list = res.data.obj
            })
        }
    },
    created(){
        this.getUnpayData()
        this.getHistoryData()
    }
}
</script>
