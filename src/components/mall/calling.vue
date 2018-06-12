<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="呼叫管家"/>

        <van-list>
            <van-row gutter="20" style="background-color: #ffffff;padding-top: 10px;padding-bottom: 20px;padding-left:15px;padding-right:15px">
                <van-col span="8" v-for="(item, index) in service" :key=index style="height:90px">
                    <center>
                        <!-- <div :class="item.class" style="font-size:40px"  @click="toMenu(item.to)"></div> -->
                        <p style="font-size: 14px;color: #aaa;margin-top:5px;">{{ item.title }}</p>
                    </center>
                </van-col>
            </van-row>
        </van-list>

        <van-cell-group>
            <van-field
                v-model="message"
                type="textarea"
                placeholder="请输入留言"
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
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            service:[
                {
                    title:"报修"
                },
                {
                    title:"物品租借"
                },
                {
                    title:"会议室预定"
                },
                {
                    title:"出门证"
                },
                {
                    title:"投诉建议"
                },
                {
                    title:"其他"
                }
            ]
        }
    }
}
</script>
