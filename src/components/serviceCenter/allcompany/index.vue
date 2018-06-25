<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="园区企业名录" left-arrow @click-left="$backTo()" fixed/>
        <van-row style="margin-top:45px;margin-bottom:50px">
            <van-search placeholder="搜索企业名称" v-model="companySearch" @search="getData"/>
            <van-cell-group>
                <van-cell v-for="(item,index) in company_list" :key="index" @click="open_detail(item.id)">
                    <!-- <van-col span="2" style="visibility:hidden">1</van-col>                         -->
                    <van-col span="22">
                        <van-row style="margin-left:10px;font-size:16px">{{item.tenantName}}</van-row>
                        <van-row style="margin-left:10px;font-size:10px">{{item.houseName}}</van-row>                        
                    </van-col>
                    <van-col span="2" ><van-icon name="arrow" style="padding-top:18px"/></van-col>                       
                    <!-- <van-col span="1" ><van-icon name="arrow" /></van-col>                                     -->
                </van-cell>
            </van-cell-group>
        </van-row>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            companySearch:"",
            company_list:[
            ]
        }
    },
    methods:{
        open_detail(e){
            this.$router.push(
                {
                    name:"serviceCenterCompanyDetail",
                    params:{
                        id:e
                    }
                }
            )
        },
        getData(){
            let _self = this
            let config = {
                params: {
                    name: _self.companySearch
                }
            }
            let url = `api/tenantController.do?getTenants`
            this.$http.get(url,config).then(function(res){
                // console.log(res.data.obj)
                _self.company_list = res.data.obj
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>
