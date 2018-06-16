<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="企业荣耀榜" left-arrow @click-left="$backTo()"/>
        <van-row>
            <div @click="toPotential"><center>潜力股</center></div>
        </van-row>
        <van-row>
            <div @click="toHonour"><center>荣耀榜</center></div>
        </van-row>
    </van-row>
</template>

<script>
export default {
    methods:{
        toPotential(){
            this.$router.push(
                {
                    name:"serviceCenterListList",
                    params:{
                        type:"Potential"
                    }
                }
            )
        },
        toHonour(){
            this.$router.push(
                {
                    name:"serviceCenterListList",
                    params:{
                        type:"Honour"
                    }
                }
            )
        }
    }
}
</script>
