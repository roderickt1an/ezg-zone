<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="投诉中心" left-arrow @click-left="$backTo()"/>
        <van-row>
            <van-cell>
                <van-col slot="title">投诉内容</van-col>
            </van-cell>
        </van-row>
        <van-row>
            <van-cell-group>
                <van-field
                    v-model="content.decription"
                    type="textarea"
                    placeholder="请输入留言"
                    rows="5"
                    autosize
                    disabled
                />
                </van-cell-group>
        </van-row>
        <van-row>
            <van-cell title="处理状态" :value="content.complaintStatus">
            </van-cell>
        </van-row>
    </van-row>
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
            let url = `api/complaintController.do?getComplaintItem`
            let config = {
                params:{
                    complaintId:this.$route.params.id
                }
            }
            this.$http.get(url,config).then(function(res){
                console.log(res)
                _self.content = res.data.obj[0]
            })
        }
    },
    created(){
        this.getContent()
    }
}
</script>
