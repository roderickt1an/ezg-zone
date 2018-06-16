<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="知识产权" left-arrow @click-left="$backTo()"/>
        <van-tabs v-model="active">
            <van-tab :title="IP_title">
                <van-cell-group>
                    <van-cell v-for="(item,index) in IP_list" :key="index">
                        <van-row gutter="20">{{item.title}}</van-row>
                        <van-row gutter="20">
                            <van-col span="8">登记号：</van-col>
                            <van-col span="16">{{item.Registration}}</van-col>                            
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">分类号：</van-col>
                            <van-col span="16">{{item.type}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">版本：</van-col>
                            <van-col span="16">{{item.version}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">所有人：</van-col>
                            <van-col span="16">{{item.owner}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">等级批准日期：</van-col>
                            <van-col span="16">{{item.date}}</van-col>   
                        </van-row>                             
                    </van-cell>
                </van-cell-group>
            </van-tab>
            <van-tab :title="trademark_title">
                11
            </van-tab>
            <van-tab :title="soft_title">
                11
            </van-tab>
        </van-tabs>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            active:"",
            iptotal:6,
            trademark:32,
            soft:16,
            IP_list:[
                {
                    title:"111111111111",
                    Registration:"212121212",
                    type:"1214141",
                    version:"V1.4",
                    owner:"广州",
                    date:"2016-10-24"
                },
                {
                    title:"111111111111",
                    Registration:"212121212",
                    type:"1214141",
                    version:"V1.4",
                    owner:"广州",
                    date:"2016-10-24"
                },
                {
                    title:"111111111111",
                    Registration:"212121212",
                    type:"1214141",
                    version:"V1.4",
                    owner:"广州",
                    date:"2016-10-24"
                },
                {
                    title:"111111111111",
                    Registration:"212121212",
                    type:"1214141",
                    version:"V1.4",
                    owner:"广州",
                    date:"2016-10-24"
                },
                {
                    title:"111111111111",
                    Registration:"212121212",
                    type:"1214141",
                    version:"V1.4",
                    owner:"广州",
                    date:"2016-10-24"
                },
            ]
        }
    },
    computed:{
        IP_title(){
            return `IP(${this.iptotal})`
        },
        trademark_title(){
            return `商标(${this.trademark})`
        },
        soft_title(){
            return `软著(${this.soft})`
        }
    }
}
</script>

