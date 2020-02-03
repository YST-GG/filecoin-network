import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import echarts from 'echarts' //引入echarts
import 'echarts-gl';
import 'element-ui/lib/theme-chalk/index.css';
import BaiduMap from 'vue-baidu-map';
import 'normalize.css'
import './plugins/element.js'
import * as Three from 'three';
import * as TWEEN from "tween"
//import * as test from "./test";
//import $ from 'jquery'
//import * as global from "./global"
import *as giojs from 'giojs';
import vant from 'vant'
//import * as bmap from './bmap'
import 'echarts/extension/bmap/bmap'
import VueI18n from 'vue-i18n';
import iView from 'iview';
import Axios from "axios";
import qs from "qs"
Vue.config.productionTip = true
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI)
Vue.use(Three)
Vue.use(qs)
Vue.use(TWEEN)
Vue.use(giojs)
Vue.use(vant)
Vue.use(VueI18n)
Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

//Vue.use(test)
//Vue.use(global)
//Vue.use($)
Vue.use('BaiduMap',{
 ak:'QUHTzRPm4xFi2oaCAWUG0RFPmEO0RQGc'
}),
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

