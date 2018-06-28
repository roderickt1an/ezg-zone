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
import serviceCenterListIndex from '@/components/serviceCenter/list/index.vue'
import serviceCenterListList from '@/components/serviceCenter/list/list.vue'
import serviceCenterListPDetail from '@/components/serviceCenter/list/potentDetail.vue'
import serviceCenterListHDetail from '@/components/serviceCenter/list/honorDetail.vue'
// import getUserInfo from '@/components/index/getUserInfo.vue'
import personComplainList from '@/components/personCenter/customerService/index.vue'
import personComplainDetail from '@/components/personCenter/customerService/detail.vue'
import mall from '@/components/mall/mall_index.vue'






Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    // {
    //   path: '/',
    //   name: 'getUserInfo',
    //   component: getUserInfo
    // },
    {
      path: '/:id',
      redirect: {
        name:'serviceCenterIndex'
      }
    },
    //  企业服务商城
    {
      path:'/mall/index',
      name:'mall',
      component:mall
    },
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
    {
      path: '/servicecenter/list/index',
      name: 'serviceCenterListIndex',
      component: serviceCenterListIndex
    },
    {
      path: '/servicecenter/list/list/:type',
      name: 'serviceCenterListList',
      component: serviceCenterListList
    },
    {
      path: '/servicecenter/list/Pdetail/:id',
      name: 'serviceCenterListPDetail',
      component: serviceCenterListPDetail
    },
    {
      path: '/servicecenter/list/Hdetail/:id',
      name: 'serviceCenterListHDetail',
      component: serviceCenterListHDetail
    },
    {
      path: '/person/complain/:id',
      name: 'personComplainList',
      component: personComplainList
    },
    {
      path: '/person/complainDetail/:id',
      name: 'personComplainDetail',
      component: personComplainDetail
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
