<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="投诉中心" left-arrow @click-left="$backTo()"/>
        <van-row>
            <van-cell-group>
                <van-cell v-if="!list.length"><center>- 无相关记录 -</center></van-cell>
                <van-cell v-for="(item,index) in list" :key="index" @click="openDetail(item)">
                    <van-col span="22" >
                        <div>
                            <van-col span="21">{{item.complaintStatus}}</van-col>
                            <van-col span="21">{{item.create_date}}</van-col>
                        </div>
                    </van-col>
                    <!-- <van-col span="2"><div @click="open_detail(item)">￥{{item.pay_money}}</div></van-col> -->
                    <van-col span="2" style="margin-top:15px"><van-icon name="arrow" @click="openDetail(item.id)"/></van-col>                                    
                </van-cell>
            </van-cell-group>
        </van-row>
        <van-tabbar>
            <van-button type="primary" bottom-action style="font-size:20px;border-radius:5px" @click="open">我要投诉</van-button>
        </van-tabbar>
        <van-dialog
            v-model="show"
            show-confirm-button	
            show-cancel-button
            confirmButtonText="提交"
            @confirm="submit"
            >
            <van-field
                v-model="message"
                type="textarea"
                placeholder="请输入投诉内容"
                rows="5"
                autosize
            />
        </van-dialog>
    </van-row>
</template>

<script>
import { Toast } from 'vant';

export default {
    data(){
        return{
            message:"",
            show:false,
            list:[
                {
                    id:22,
                    content:"111111"
                },
                {
                    id:23,
                    content:"222222"
                },
                {
                    id:24,
                    content:"333333"
                }
            ]
        }
    },
    methods:{
        openDetail(e){
            console.log(e)
            this.$router.push({
                name:'personComplainDetail',
                params:{
                    id: e.id
                }

            })
        },
        open(){
            this.show = true
        },
        submit(){
            let _self = this
            let url = `api/complaintController.do?createComplaint`
            let data = new FormData()
            data.append("decription",_self.message)
            data.append("customer.id",_self.$route.params.id)
            this.$http.post(url,data).then(function(res){
                if(res.data.success == true){
                    Toast.success('提交成功！');
                    _self.getData()
                }else{
                    Toast.fail('提交失败！');
                }
            })
        },
        getData(){
            let url = `api/complaintController.do?getComplaintList`
            let _self = this
            let config = {
                params: {
                    customerId: this.$route.params.id
                }
            }
            this.$http.get(url,config).then(function(res){
                _self.list = res.data.obj
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>

