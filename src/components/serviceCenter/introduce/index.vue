<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="园区介绍" left-arrow @click-left="backTo" />
        <van-row v-html="content"></van-row>
    </van-row>
</template>

<script>
export default {
    data(){
        return{
            content:"<p>这里是园区的介绍</p>"
        }
    },
    methods:{
        backTo(){
            this.$router.go(-1)
        },
        getContent(){
            let _self = this
            let url = 'api/introductionController.do?getIntroductions'
            this.$http.get(url).then(function(res){
                // console.log(res.data.obj[0].introduction)
                _self.content = res.data.obj[0].introduction
            })
        }
    },
    created(){
        this.getContent()
    }
}
</script>
