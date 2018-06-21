<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar :title="bar_title" left-arrow @click-left="$backTo()" />
        <van-row><center><van-loading color="black" v-if="isloading"/></center></van-row>
        <van-row>
            <van-checkbox-group v-model="result">
                <van-cell-group>
                    <van-cell v-for="(item,index) in pay_detail" :key="index">
                        <!-- <van-col span="2"><van-checkbox :name="item.code" /></van-col> -->
                        <van-col span="18"><div>{{item.fei_name}}</div></van-col>
                        <van-col span="4"><div>￥{{item.pay_money}}</div></van-col>
                        <!-- <van-col span="2" style="visibility:hidden">1</van-col> -->
                        <!-- <van-col span="16"><div>{{item.content}}</div></van-col>                         -->
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
            isloading:false,
            result:[],
            pay_detail:[]
        }
    },
    computed:{
        bar_title(){
            return this.$route.params.month + "  费用明细"
        },
        totalPrice(){
            let temp = 0
            for(let i = 0;i<this.pay_detail.length;i++){
                temp = temp + this.pay_detail[i].pay_money
            }
            return temp*100
        }
    },
    methods:{
        open_pay(){

        },
        getDataList(){
            let _self = this
            _self.isloading = true
            let url = `api/tenantPayTotalController.do?getTenantPayInfoList`
            let config = {
                params:{
                    payTotalId:this.$route.params.id
                }
            }
            
            this.$http.get(url, config).then(function(res){
                // console.log(res.data.obj)
                _self.pay_detail = res.data.obj
                _self.isloading = false               
            })
        }
    },
    created(){
        this.getDataList()
    }
}
</script>

