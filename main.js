import Vue from 'vue'
import App from './App'

//公用方法
import util from 'common/js/util.js';

//共用组件
import 'common/css/PFUNI.scss' //样式主题--如不想使用我们提供主题只想部分页面使用..可以直接在页面上引用 import '../../common/css/PFUNI.css'


// 挂载util到vue上，全局使用
Vue.prototype.$util = util;


import VueI18n from 'vue-i18n' 

//使用引入
Vue.use(VueI18n);
import cn from 'common/js/lang/cn.js';
import cnTw from 'common/js/lang/cn-tw.js'; 
import en from 'common/js/lang/en.js';  	
import japan from 'common/js/lang/jp.js';
import nk from 'common/js/lang/nk.js';
import gm from 'common/js/lang/gm.js';


//定义标识符
const i18n = new VueI18n({    
  locale:'zh-CN',    
  messages: { 
	'zh-CN':cn,
    'en-US':en,
	'zh-TW':cnTw,
	'JP':japan,
	'nk':nk,
	'gm':gm
  }    
}) 
Vue.prototype._i18n = i18n;
Vue.config.productionTip = false;
App.mpType = 'app'
const app = new Vue({
	i18n,
    ...App
})
app.$mount()
