(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Popup/Popup"],{"0608":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"Popup",props:{position:{type:String,default:function(){return"middle"}}},data:function(){return{mask:!1,visible:!1,message:"",duration:2e3,icon:""}},onLoad:function(t){console.log(t+"=============")},created:function(t){console.log(t+"=============")},methods:{hide:function(){this.visible=!1,this.mask=!1},show:function(t){this.message="string"===typeof t?t:t.message,this.duration=t.duration||this.duration,this.icon=t.icon,this.visible=!0,this.mask=!0}},computed:{}};n.default=i},"1ac1":function(t,n,e){},2857:function(t,n,e){"use strict";var i=e("1ac1"),o=e.n(i);o.a},7633:function(t,n,e){"use strict";e.r(n);var i=e("a1fb"),o=e("9561");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("2857");var a=e("2877"),s=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"543f041a",null);n["default"]=s.exports},9561:function(t,n,e){"use strict";e.r(n);var i=e("0608"),o=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);n["default"]=o.a},a1fb:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Popup/Popup-create-component',
    {
        'components/Popup/Popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7633"))
        })
    },
    [['components/Popup/Popup-create-component']]
]);                
