<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="呼叫管家" left-arrow @click-left="backTo"/>

        <van-list>
            <van-row gutter="20" style="background-color: #ffffff;padding-top: 10px;padding-bottom: 20px;padding-left:15px;padding-right:15px">
                <van-col span="8" v-for="(item, index) in service" :key=index style="height:90px;padding:25px;color: #aaa" >
                    <center :class="{select:item.isselect}">
                        <span :class="item.class" style="font-size:30px" class="iconfont" @click="choose(index,item)"></span>
                        <p style="font-size: 12px;margin-top:5px;">{{ item.title }}</p>
                    </center>
                </van-col>
            </van-row>
        </van-list>

        <van-cell-group style="margin:10px;border:1px solid sliver">
            <van-field
                v-model="message"
                type="textarea"
                placeholder="清晰的描述可提高我们的服务效率哦！"
                rows="5"
                autosize
            />
        </van-cell-group>
        <!-- <van-tabbar v-model="active" @change="tochange" v-if="isInput">
            <van-tabbar-item icon="cart">企服商城</van-tabbar-item>
            <van-tabbar-item icon="wap-home">园区服务</van-tabbar-item>
            <van-tabbar-item icon="contact">个人中心</van-tabbar-item>
        </van-tabbar> -->
        <!-- <van-popup v-model="ispayed" style="padding:30px 5px;width:80%">
            <center>
                <van-icon name="info-o" style="margin-right:10px"/>您有费用需要支付！
            </center>
        </van-popup> -->
        <van-tabbar>
            <van-button type="primary" bottom-action style="font-size:20px;border-radius:5px" @click="submit">提 交</van-button>
        </van-tabbar>
    </van-row>

</template>

<script>
import { Toast } from 'vant';

export default {
    data(){
        return{
            choose_type:"",
            message:"",
            service:[
                {
                    title:"报修",
                    class:"icon-baoxiu",
                    code:"repair",
                    isselect:false
                },
                {
                    title:"物品租借",
                    class:"icon-wupinzujie",
                    code:"rent",
                    isselect:false
                },
                {
                    title:"会议室预定",
                    class:"icon-huiyishi",
                    code:"meeting",
                    isselect:false
                },
                {
                    title:"出门证",
                    class:"icon-zhengjian",
                    code:"certificate",
                    isselect:false
                },
                {
                    title:"投诉建议",
                    class:"icon-tousujianyi",
                    code:"advice",
                    isselect:false
                },
                {
                    title:"其他",
                    class:"icon-qita",
                    code:"more",
                    isselect:false
                }
            ]
        }
    },
    created(){

    },
    methods:{
        choose(e,v){
            if(this.service[e].code == "meeting"){
                this.$router.push({
                      name:"meetingIndex",
                      // params:{
                      //     type:e.type
                      // }
                  })
            }
            if(this.service[e].isselect == true){
                this.service[e].isselect = false
                this.choose_type = ""
            }else{
                for(let i = 0;i<this.service.length;i++){
                    this.service[i].isselect = false
                }
                this.service[e].isselect = true
                this.choose_type = this.service[e].title
            }
        },
        submit(){
            let _self = this
            let url = "api/callManagerController.do?createCallManager"
            // let config = {
            //     operationType: _self.choose_type,
            //     decription: _self.message,
            //     "customer.id": "4028805e6402da1d016402dcb93b0002"
            // }
            let data = new FormData()
            data.append("operationType",_self.choose_type)
            data.append("decription",_self.message)
            data.append("customer.id",_self.$route.params.id)

            this.$http.post(url,data).then(function(res){
                if(res.data.success == true){
                    Toast.success('提交成功！');
                }else{
                    Toast.fail('提交失败！');
                }
            })
        },
        backTo(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    @import './iconfont.css';
    .select{
        color: red
    }
</style>

