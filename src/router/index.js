import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import searchList from '@/components/searchList'
// import productDetail from '@/components/productDetail'
// import chat from '@/components/chat'
// import productList from '@/components/productList'
// import cart from '@/components/cart'
// import getUserInfo from '@/components/getUserInfo'
// import orderList from '@/components/orderList'
// import tel from '@/components/tel'
import mallCalling from '@/components/mall/calling.vue'
import serviceCenterIndex from '@/components/serviceCenter/index/index.vue'
import serviceCenterIntroduce from '@/components/serviceCenter/introduce/index.vue'
import serviceCenterCooperation from '@/components/serviceCenter/cooperation/index.vue'
import serviceCenterPayList from '@/components/serviceCenter/paydetail/pay_list.vue'
import serviceCenterPayDetail from '@/components/serviceCenter/paydetail/detail.vue'
import serviceCenterPayHistroyDetail from '@/components/serviceCenter/paydetail/history_detail.vue'
import serviceCenterCompanyList from '@/components/serviceCenter/allcompany/index.vue'
import serviceCenterCompanyDetail from '@/components/serviceCenter/allcompany/detail.vue'





Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      redirect: {
        name:"serviceCenterIndex"
      }
    },
    //  企业服务商城
    {
      path:'/mall/calling/:id',
      name:'mallCalling',
      component: mallCalling
    },
    //  服务大厅
    {
      path: '/servicecenter/index/:id',
      name: 'serviceCenterIndex',
      component: serviceCenterIndex
    },
    {
      path:'/servicecenter/introduce',
      name: 'serviceCenterIntroduce',
      component: serviceCenterIntroduce
    },
    {
      path:'/servicecenter/cooperation',
      name: 'serviceCenterCooperation',
      component: serviceCenterCooperation
    },
    {
      path: '/servicecenter/paylist/:id',
      name: 'serviceCenterPayList',
      component:serviceCenterPayList
    },
    {
      path: '/servicecenter/paydetail/:id/:month',
      name: 'serviceCenterPayDetail',
      component: serviceCenterPayDetail
    },
    {
      path:'/servicecenter/historydetail/:id/:month',
      name: 'serviceCenterPayHistroyDetail',
      component: serviceCenterPayHistroyDetail
    },
    {
      path:'/servicecenter/allcompany/list',
      name: 'serviceCenterCompanyList',
      component: serviceCenterCompanyList
    },
    {
      path:'/servicecenter/allcompany/list/detail/:id',
      name: 'serviceCenterCompanyDetail',
      component: serviceCenterCompanyDetail
    },
    // 采用history模式，配置全局路由
    { 
      path: '*', 
      redirect: {
        name:"serviceCenterIndex"
      } 
    }
  ]
})
