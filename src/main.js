import Vue from 'vue'       //node_modules
import App from './App.vue' //app.vue

import VueRouter from 'vue-router'
import router from './assets/js/router.js';
Vue.use(VueRouter);
import "./assets/css/iconfont/iconfont.css"

import axios from 'axios'
Vue.prototype.$http=axios;

// import Mint from 'mint-ui';
// Vue.use(Mint)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
