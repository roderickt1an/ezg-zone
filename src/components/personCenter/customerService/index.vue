<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="投诉中心" left-arrow @click-left="$backTo()"/>
        <van-row style="margin-bottom:60px">
            <van-cell-group>
                <van-cell v-if="!list.length"><center>- 无相关记录 -</center></van-cell>
                <van-cell v-for="(item,index) in list" :key="index" @click="openDetail(item)">
                    <van-col span="22" >
                        <div>
                            <van-col span="21">{{item.complaintStatus}}</van-col>
                            <van-col span="21">{{item.create_date}}</van-col>
                        </div>
                    </van-col>
                    <!-- <van-col span="2"><div @click="open_detail(item)">￥{{item.pay_money}}</div></van-col> -->
                    <van-col span="2" style="margin-top:15px"><van-icon name="arrow" @click="openDetail(item.id)"/></van-col>
                </van-cell>
            </van-cell-group>
        </van-row>
        <van-tabbar>
            <van-button type="primary" bottom-action style="font-size:20px;border-radius:5px" @click="open">我要投诉</van-button>
        </van-tabbar>
        <van-dialog
            v-model="show"
            show-confirm-button
            show-cancel-button
            confirmButtonText="提交"
            @confirm="submit"
            >
            <van-field
                v-model="message"
                type="textarea"
                placeholder="请输入投诉内容"
                rows="5"
                autosize
            />
            <div style="margin-top:10px">
                <van-row>
                    <van-col v-for="(item,index) in show_img" :key="index" style="margin-left:3px;margin-right:3px">
                        <img :src="item.src" alt="Ballade" style="width: 100px;height:100px"/>
                    </van-col>
                </van-row>
            </div>
            <div style="width:80%;margin:auto;margin-top:5px;padding-bottom:20px">
                <center>
                      <!-- capture="camera" -->
                    <van-uploader accept="image/*" :before-read="upload" >
                        <van-icon name="photograph" /><span>  点击上传照片</span>
                    </van-uploader>
                </center>
            </div>
        </van-dialog>
    </van-row>
</template>

<script>
import { Toast } from 'vant';
import { yasuo } from '../../img_beforeUpload.js'
export default {
    data(){
        return{
            message:"",
            show:false,
            list:[
            ],
            show_img:[],
            img_array:[]
        }
    },
    methods:{
      upload(e){
            // console.log(e)
            let _self = this
            let img = yasuo(e,_self.img_array)
            let reader = new FileReader()
            reader.readAsDataURL(e)
            let filename = e.name
            reader.onload = function(e){
                var imgMsg = {
                    name:filename,
                    src:this.result
                }
                _self.show_img.push(imgMsg)
            }
            // console.log(this.img_array)
        },
        openDetail(e){
            console.log(e)
            this.$router.push({
                name:'personComplainDetail',
                params:{
                    id: e.id
                }

            })
        },
        open(){
            this.show = true
        },
        submit(){
            let _self = this
            let url = `api/complaintController.do?createComplaint`
            let data = new FormData()
            data.append("decription",_self.message)
            data.append("customer.id",_self.$route.params.id)
            for(let i = 0;i<_self.img_array.length;i++){
                data.append('files',_self.img_array[i],"file_" + Date.parse(new Date()) + ".jpg")
            }
            this.$http.post(url,data).then(function(res){
                if(res.data.success == true){
                    Toast.success('提交成功！');
                    _self.getData()
                }else{
                    Toast.fail('提交失败！');
                }
            }).catch(function(err){
              console.log(err)
              Toast.fail('提交失败！');
            })
        },
        getData(){
            let url = `api/complaintController.do?getComplaintList`
            let _self = this
            let config = {
                params: {
                    customerId: this.$route.params.id
                }
            }
            this.$http.get(url,config).then(function(res){
                _self.list = res.data.obj
            })
        }
    },
    created(){
        this.getData()
    }
}
</script>

