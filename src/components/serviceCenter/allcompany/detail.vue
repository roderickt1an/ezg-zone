<template>
    <div>
        <van-row>
            <van-nav-bar title="园区企业详情" left-arrow @click-left="$backTo()"/>
            <van-row v-html="content"></van-row>
        </van-row>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:""
        }
    },
    methods:{
        getContent(){
            let _self = this
            let url = `api/tenantController.do?getTenantDetail`
            let config = {
                params:{
                    tenantId:_self.$route.params.id
                }
            }
            this.$http.get(url,config).then(function(res){
                // console.log(res)
                _self.content = res.data.obj[0].content
            })
        }
    },
    created(){
        this.getContent()
        // console.log(this.$route.params.id)
    }
}
</script>

