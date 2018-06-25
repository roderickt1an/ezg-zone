<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="园区招商" left-arrow @click-left="backTo" />
        <van-row v-html="content"></van-row>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            content:"<p>这里是园区的招商</p>"
        }
    },
    methods:{
        backTo(){
            this.$router.go(-1)
        },
        getContent(){
            let _self = this
            let url = `api/merchantController.do?getMerchants`
            this.$http.get(url).then(function(res){
                console.log(res)
                _self.content = res.data.obj[0].content
            })
        }
    },
    created(){
        this.getContent()
    }
}
</script>
