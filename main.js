import Vue from 'vue'
import App from './App'
//公用方法
import util from 'common/js/util.js';
// 挂载util到vue上，全局使用
Vue.prototype.$util = util;

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
