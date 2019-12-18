import Vue from 'vue'
import App from './App'

//公用方法
import util from 'common/js/util.js';

//共用组件
import 'common/css/PFUNI.scss' //样式主题--如不想使用我们提供主题只想部分页面使用..可以直接在页面上引用 import '../../common/css/PFUNI.css'
import PFUNI from '@/components/PFUNI.js'	


// 挂载util到vue上，全局使用
Vue.prototype.$util = util;

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
