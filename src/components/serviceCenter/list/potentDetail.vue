<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="知识产权" left-arrow @click-left="$backTo()"/>
        <van-tabs v-model="active">
            <van-tab :title="IP_title">
                <van-cell-group style="margin-top:5px">
                    <van-cell v-for="(item,index) in zhuanli" :key="index" style="margin-top:5px">
                        <van-row>{{item.MC}}</van-row>
                        <van-row gutter="20">
                            <van-col span="8">登记号：</van-col>
                            <van-col span="16">{{item.SQH}}</van-col>                            
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">分类号：</van-col>
                            <van-col span="16">{{item.FLH}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">版本：</van-col>
                            <van-col span="16">{{item.version}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">所有人：</van-col>
                            <van-col span="16">{{item.SQR}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">等级批准日期：</van-col>
                            <van-col span="16">{{item.SQRQ}}</van-col>   
                        </van-row>                             
                    </van-cell>
                </van-cell-group>
                <van-row style="margin-top:10px;margin-bottom:10px"><center>---- 我是有底线的 ----</center></van-row>
            </van-tab>
            <van-tab :title="trademark_title">
                <van-cell-group style="margin-top:5px">
                    <van-cell v-for="(item,index) in shangbiao" :key="index" style="margin-top:5px">
                        <van-row>{{item.MC}}</van-row>
                        <van-row gutter="20">
                            <van-col span="8">注册号：</van-col>
                            <van-col span="16">{{item.RegNo}}</van-col>                            
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">名称：</van-col>
                            <van-col span="16">{{item.Name}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">代理机构：</van-col>
                            <van-col span="16">{{item.Agent}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">所有人：</van-col>
                            <van-col span="16">{{item.ApplicantCn}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">批准日期：</van-col>
                            <van-col span="16">{{item.AppDate}}</van-col>   
                        </van-row>                             
                    </van-cell>
                </van-cell-group>
                <van-row style="margin-top:10px;margin-bottom:10px"><center>---- 我是有底线的 ----</center></van-row>
            </van-tab>
            <van-tab :title="soft_title">
                <van-cell-group style="margin-top:5px">
                    <van-cell v-for="(item,index) in ruanzhu" :key="index" style="margin-top:5px">
                        <van-row>{{item.MC}}</van-row>
                        <van-row gutter="20">
                            <van-col span="8">注册号：</van-col>
                            <van-col span="16">{{item.SoftID}}</van-col>                            
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">名称：</van-col>
                            <van-col span="16">{{item.SoftName}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">版本号：</van-col>
                            <van-col span="16">{{item.Verson}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">类号：</van-col>
                            <van-col span="16">{{item.TypeNum}}</van-col>   
                        </van-row>
                        <van-row gutter="20">
                            <van-col span="8">批准日期：</van-col>
                            <van-col span="16">{{item.SuessDate}}</van-col>   
                        </van-row>                             
                    </van-cell>
                </van-cell-group>
                <van-row style="margin-top:10px;margin-bottom:10px"><center>---- 我是有底线的 ----</center></van-row>
            </van-tab>
        </van-tabs>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            active:"",
            // zhuanlitotal:this.zhuanli.length,
            zhuanli:[],
            shangbiao:[],
            ruanzhu:[]
        }
    },
    computed:{
        IP_title(){
            return `专利(${this.zhuanlitotal})`
        },
        trademark_title(){
            return `商标(${this.shangbiaototal})`
        },
        soft_title(){
            return `软著(${this.ruanzhutotal})`
        },
        zhuanlitotal(){
            return this.zhuanli.length
        },
        shangbiaototal(){
            return this.shangbiao.length
        },
        ruanzhutotal(){
            return this.ruanzhu.length
        }
    },
    methods:{
        getData(){
            let _self = this
            let url = `api/tenantController.do?getIP`
            let config = {
                params:{
                    tenantId:this.$route.params.id
                }
            }
            this.$http.get(url,config).then(function(res){
                console.log(res.data.obj)
                _self.zhuanli = res.data.obj.zhuanli.Datas
                _self.shangbiao = res.data.obj.shangbiao.Datas
                _self.ruanzhu = res.data.obj.ruanzhu.Datas
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>

