(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-Textarea"],{"08c1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"Textarea",props:{placeholderStyle:{type:String,default:"color:#F76260"},maxlength:{type:Number,default:-1}},data:function(){return{visible:!1,message:"",position:"placemiddle",duration:2e3,icon:""}},onLoad:function(t){},created:function(){},methods:{blurFun:function(t){},focusFun:function(t){},inputFun:function(t){}},computed:{}};e.default=a},"1e76":function(t,e,n){var a=n("b1a4");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("1a8b60e0",a,!0,{sourceMap:!1,shadowMode:!1})},"5bb8":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("c46c"));function i(t){return t&&t.__esModule?t:{default:t}}var o={components:{Textarea:a.default},data:function(){return{htmlData:'<view @click="showToast"></view>',jsData:'export default {methods: {\n\t\t\t\tshowToast() {\n\t\t\t\t this.$refs.Toast.show({message:"提示信息",duration:0,position:"bottom",icon:true});\n\t\t\t\t}\n\t\t\t  }\n\t\t\t}',jsData2:'export default {methods: {\n\t\t\t\tshowToast() {\n\t\t\t\t this.$refs.Toast.show("提示信息")\n\t\t\t\t}\n\t\t\t  }\n\t\t\t}'}},onLoad:function(t){},created:function(){},methods:{}};e.default=o},"5dbe":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("Textarea",{ref:"Textarea"}),n("v-uni-view",{staticClass:"h2"},[t._v("Textarea")]),n("v-uni-view",{staticClass:"tip"},[t._v("Textarea多行输入框。")]),n("v-uni-view",[n("strong",[t._v("注:")]),t._v("由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过")]),n("v-uni-view",{staticClass:"h3"},[t._v("示例")]),n("pre",{staticClass:"pre html"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.htmlData))]),t._v(""),t._v("")]),n("v-uni-view",{staticClass:"title"},[t._v("基本用法")]),n("pre",{staticClass:"pre js"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.jsData2))]),t._v("")]),n("v-uni-view",{staticClass:"title"},[t._v("time 字段决定了 Toast 显示的时间，如果设置为 0，则不会消失，需要手动调用组件的 hide 方法。")]),n("pre",{staticClass:"pre js"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.jsData))]),t._v("")]),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"th"},[n("v-uni-text",[t._v("属性名")]),n("v-uni-text",[t._v("说明")]),n("v-uni-text",[t._v("类型")]),n("v-uni-text",[t._v("默认值")]),n("v-uni-text",[t._v("版本")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("show")]),n("v-uni-text",[t._v("显示")]),n("v-uni-text",[t._v("function")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("hide")]),n("v-uni-text",[t._v("隐藏")]),n("v-uni-text",[t._v("function")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("duration")]),n("v-uni-text",[t._v("显示时间(如果设置为 0，则不会消失，需要手动调用组件的 hide 方法)")]),n("v-uni-text",[t._v("Number")]),n("v-uni-text",[t._v("2000")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("icon")]),n("v-uni-text",[t._v("显示加载图标")]),n("v-uni-text",[t._v("String")]),n("v-uni-text",[t._v("icon")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("position")]),n("v-uni-text",[t._v("显示位置")]),n("v-uni-text",[t._v("String")]),n("v-uni-text",[t._v("placemiddle(top,bottom)")]),n("v-uni-text",[t._v("1.0.0")])],1)],1)],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"6a82":function(t,e,n){"use strict";var a=n("1e76"),i=n.n(a);i.a},"8b2c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"PFUIN-textarea"},[n("v-uni-view",{staticClass:"uni-textarea"},[n("v-uni-textarea",{attrs:{"auto-height":"","placeholder-style":"color:#F76260",maxlength:"maxlength",placeholder:"占位符字体是红色的"},on:{blur:function(e){e=t.$handleEvent(e),t.blurFun()},focus:function(e){e=t.$handleEvent(e),t.focusFun()},input:function(e){e=t.$handleEvent(e),t.inputFun(e)}}})],1),n("v-uni-view",{staticClass:"bottom"},[t._v("字符200")])],1)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},a651:function(t,e,n){var a=n("da9b");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5ac133ac",a,!0,{sourceMap:!1,shadowMode:!1})},b1a4:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-594ea1e6]{padding:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-594ea1e6]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.content .h2[data-v-594ea1e6]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-594ea1e6]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-594ea1e6]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .pre[data-v-594ea1e6]{background:#eee;color:#000;padding:%?20?% %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;word-wrap:normal}.content .pre element[data-v-594ea1e6]{width:100%;display:block;height:100%}.content .pre .isCopy[data-v-594ea1e6]{position:absolute;right:%?10?%;bottom:%?5?%;background:#55a532;color:#fff;padding:%?5?%;-webkit-border-radius:%?2?%;border-radius:%?2?%}.content .html[data-v-594ea1e6],.content .js[data-v-594ea1e6]{position:relative}.content .html[data-v-594ea1e6]:before{content:"HTML";position:absolute;top:0;right:%?12?%;color:#999}.content .js[data-v-594ea1e6]:before{content:"JS";position:absolute;top:0;right:%?12?%;color:#999}.content .title[data-v-594ea1e6]{margin:%?20?% auto}.content .list[data-v-594ea1e6]{border:%?1?% solid #eee;border-right:0;border-bottom:0;margin:%?20?% auto}.content .th[data-v-594ea1e6]{background:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content uni-text[data-v-594ea1e6]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?50?%;line-height:%?50?%;text-align:center;border-right:%?1?% solid #eee}.content .td[data-v-594ea1e6]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content uni-text[data-v-594ea1e6]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;min-height:%?50?%;line-height:%?50?%;border-right:%?1?% solid #eee;border-bottom:%?1?% solid #eee;padding:%?20?% auto;overflow:hidden}.content .swipe[data-v-594ea1e6],.content .swiper-warp[data-v-594ea1e6]{background:#2b9939}',""])},b661:function(t,e,n){"use strict";n.r(e);var a=n("5dbe"),i=n("cb29");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("6a82");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"594ea1e6",null);e["default"]=s.exports},bccb:function(t,e,n){"use strict";n.r(e);var a=n("08c1"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},c46c:function(t,e,n){"use strict";n.r(e);var a=n("8b2c"),i=n("bccb");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("c9fa");var r=n("2877"),s=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"73b200b0",null);e["default"]=s.exports},c9fa:function(t,e,n){"use strict";var a=n("a651"),i=n.n(a);i.a},cb29:function(t,e,n){"use strict";n.r(e);var a=n("5bb8"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},da9b:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.PFUIN-textarea[data-v-73b200b0]{padding:0;margin:0}.PFUIN-textarea .uni-textarea[data-v-73b200b0]{width:100%;border:%?1?% solid #eee;padding:%?20?%;display:block;min-height:%?200?%;-webkit-box-sizing:border-box;box-sizing:border-box}.PFUIN-textarea uni-textarea[data-v-73b200b0]{width:100%}.PFUIN-textarea .bottom[data-v-73b200b0]{text-align:right;width:100%;padding-top:%?10?%;color:#333}',""])}}]);