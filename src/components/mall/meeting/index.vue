<template>
    <van-row style="overflow-x: hidden">
        <van-nav-bar title="会议室预定" left-arrow @click-left="$backTo()" right-text="预约历史" @click-right="open_list"/>

        <div style="width:80%;margin:auto;margin-top:60px">
            <van-cell-group>
                <van-cell  :value="room" @click="open_room"/>
                <van-cell  :value="startTime" @click="open_start_time"/>
                <van-cell  :value="endTime" @click="open_end_time"/>
            </van-cell-group>
        </div>

        <van-cell-group style="width:80%;margin:auto;border:1px solid sliver;margin-top:20px">
            <van-field
                v-model="description"
                type="textarea"
                placeholder="预约描述"
                rows="5"
                autosize
            />
        </van-cell-group>
        <van-tabbar>
            <van-button type="primary" bottom-action style="font-size:20px;border-radius:5px" @click="handle" :loading="book_loading">预约</van-button>
        </van-tabbar>

        <van-popup v-model="openStartTime" position="bottom">
          <van-row>
            <van-datetime-picker
              v-model="currentDate"
              type="datetime"
              :min-date="minDate"
              @confirm="start_date_comfirm"
              @cancel="openStartTime = false"
            />
            </van-row>
        </van-popup>

         <van-popup v-model="openEndTime" position="bottom">
          <van-row>
            <van-datetime-picker
              v-model="currentDate"
              type="datetime"
              :min-date="minDate"
              @confirm="end_date_comfirm"
              @cancel="openEndTime = false"
            />
            </van-row>
        </van-popup>

         <van-popup v-model="openRoom" position="bottom">
              <van-picker :columns="allRoom" show-toolbar @confirm="on_comfirm_room" @cancel="openRoom = false" />
        </van-popup>

        <van-popup v-model="list" position="right" style="width:100%;height:100%;padding-top:5px">
            <van-nav-bar title="预约历史" left-arrow @click-left="list = false"/>
              <van-row style="padding-bottom:20px">
                <van-cell-group v-for="(item, index) in bookList" :key="index" style="margin-top:5px">
                  <van-cell title="预约状态：" :value="item.appoStatus" :border="false"/>
                  <van-cell title="预约地点：" :value="item.name" :border="false"/>
                  <van-cell title="开始时间：" :value="item.start_date" :border="false"/>
                  <van-cell title="结束时间：" :value="item.end_date" :border="false"/>
                  <van-cell title="描述：" :value="item.description" :border="false"/>
                </van-cell-group>
                <van-row style="margin-top:10px"><center>---- 我是有底线的 ----</center></van-row>
              </van-row>
        </van-popup>
    </van-row>

</template>

<script>
import { FULLDateFormat } from '../../common.js'

export default {
  data(){
    return{
      bookList:[],
      book_loading:false,
      room: "选择会议室",
      roomId: "",
      startTime: "请选择开始时间",
      endTime: "请选择结束时间",
      customerId:"",
      openStartTime: false,
      openEndTime: false,
      openRoom: false,
      list: false,
      minDate: new Date(),
      currentDate: new Date(),
      allRoom:[],
      description:""
    }
  },
  methods:{
    open_room(){
      this.openRoom = true
    },
    open_start_time(){
      this.openStartTime = true
    },
    open_end_time(){
      this.openEndTime = true
    },
    open_list(){
      this.list = true
      this.get_book_list()
    },
    start_date_comfirm(e){
      // console.log(FULLDateFormat(e))
      this.startTime = FULLDateFormat(e)
      this.openStartTime = false
    },
    end_date_comfirm(e){
      this.endTime = FULLDateFormat(e)
      // console.log(FULLDateFormat(e))
      this.openEndTime = false
    },
    on_comfirm_room(e){
      // console.log(e)
      this.room = e.text
      this.roomId = e.id
      this.openRoom = false
    },
    handle(){
      if(this.room != "选择会议室" && this.startTime != "请选择开始时间" && this.endTime != "请选择结束时间"){
        this.submit()
      }else{
        this.$toast.fail("请补全信息")
      }
    },
    submit(){
      let _self = this
      let url = `api/meetingRoomController.do?appoSave`
      _self.book_loading = true
      let formdata = new FormData()
      formdata.append("meetingRoom.id",_self.roomId)
      formdata.append("tenant.id",_self.customerId)
      formdata.append("startDate",_self.startTime)
      formdata.append("endDate",_self.endTime)
      formdata.append("description",_self.description)

      this.$http.post(url, formdata).then(function(res){
        if(res.data.success){
          _self.$toast.success("预约成功！")
          _self.book_loading = false
          _self.get_book_list()
          setTimeout(_self.list = true,1000)
        }else{
          _self.$toast.fail("预约失败！")
        }
      }).catch(function(err){
        console.log(err)
        _self.$toast.fail("预约失败！请重试！")
      })
    },
    get_all_room(){
      let _self = this
      let url = `api/meetingRoomController.do?getMeetingRoomList`

      _self.allRoom = []
      this.$http.get(url).then(function(res){
        // console.log(res.data)
        if(res.data.success){
          // console.log(res.data.obj)
          for(let i = 0;i<res.data.obj.length;i++){
            let temp = {}
            temp.id = res.data.obj[i].id
            temp.text = res.data.obj[i].name + '(' + res.data.obj[i].squares + 'm^2)'
            _self.allRoom.push(temp)
          }
        }else{
          console.log(res)
        }
      }).catch(function(err){
        console.log(err)
      })
    },
    get_book_list(){
      let url = `api/meetingRoomController.do?getMeetingRoomAppoList`
      let _self = this

      let config = {
        params: {
          tenantId: _self.customerId
        }
      }

      this.$http.get(url, config).then(function(res){
        if(res.data.success){
          // console.log(res.data)
          _self.bookList = res.data.obj
        }else{
          console.log(res.data)
        }
      }).catch(function(err){
        console.log(err)
      })
    }

  },
  created(){
    this.customerId = this.$route.params.cpid
    // console.log(this.$route.params.id)
    this.get_all_room()
    this.get_book_list()
  }
}
</script>

