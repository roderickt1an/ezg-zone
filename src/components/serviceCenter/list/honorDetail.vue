<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="企业荣誉" left-arrow @click-left="$backTo()"/>
        <van-cell-group v-for="(item, index) in glory" :key="index" style="margin-top:5px">
             <van-cell title="项目名称：" :value="item.SBXM" :border="false"/>
             <van-cell title="类别：" :value="item.XMLB" :border="false"/>
             <van-cell title="年份：" :value="item.NF" :border="false"/>
             <van-cell title="所获项目：" :value="item.XMMC" :border="false"/>
             <van-cell title="补助资金：" :value="item.ZCJE" :border="false"/>
        </van-cell-group>
        <van-row style="margin-top:10px;margin-bottom:10px"><center>---- 我是有底线的 ----</center></van-row>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            glory:[]
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
                console.log(res.data.obj.rongyu)
                _self.glory = res.data.obj.rongyu.Datas
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>
