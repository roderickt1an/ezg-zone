// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import { Lazyload } from 'vant';
import axios from 'axios'

Vue.use(Vant);
Vue.use(Lazyload);

Vue.prototype.$http = axios

//  回退上一级路由
Vue.prototype.$backTo = function(){
  this.$router.go(-1)
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
