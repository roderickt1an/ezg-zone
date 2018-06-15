<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="费用明细" left-arrow @click-left="backTo"/>
        <van-row>
            <van-tabs v-model="active">
                <van-tab title="待支付订单">
                    <van-row>
                        <van-checkbox-group v-model="result">
                            <van-cell-group>
                                <van-cell v-for="item in list" :key="item">
                                    <van-col span="2"><van-checkbox :name="item" /></van-col>
                                    <van-col span="12"><div>{{item}}</div></van-col>
                                    <van-col span="10"><div>{{item}}</div></van-col>
                                </van-cell>
                            </van-cell-group>
                        </van-checkbox-group>
                    </van-row>
                </van-tab>
                <van-tab title="已支付订单">
                    <van-row>
                        这里是已支付订单
                    </van-row>
                </van-tab>
            </van-tabs>
        </van-row>
    </van-row>
</template>

<script>
export default {
    data(){
        return {
            active:0,
            result:[],
            list:["a","b","c"]
        }
    },
    methods:{
        backTo(){
            this.$router.go(-1)
        }
    }
}
</script>
