(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Toast/Toast"],{"0339":function(t,n,i){"use strict";i.r(n);var e=i("b0d5"),o=i("4c5a");for(var a in o)"default"!==a&&function(t){i.d(n,t,function(){return o[t]})}(a);i("d527");var s=i("2877"),u=Object(s["a"])(o["default"],e["a"],e["b"],!1,null,"506a117e",null);n["default"]=u.exports},"4c5a":function(t,n,i){"use strict";i.r(n);var e=i("949d"),o=i.n(e);for(var a in e)"default"!==a&&function(t){i.d(n,t,function(){return e[t]})}(a);n["default"]=o.a},"949d":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"Toast",props:{className:{type:String,default:""}},data:function(){return{visible:!1,message:"",position:"placemiddle",duration:2e3,icon:""}},onLoad:function(t){},created:function(){},methods:{hide:function(){this.visible=!1},show:function(t){var n=this;console.log(t),this.message="string"===typeof t?t:t.message,this.position=t.position||"placemiddle",this.duration=t.duration||this.duration,this.icon=t.icon,this.visible=!0,0!=t.duration&&setTimeout(function(){n.visible=!1},this.duration)}},computed:{}};n.default=e},b0d5:function(t,n,i){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];i.d(n,"a",function(){return e}),i.d(n,"b",function(){return o})},d527:function(t,n,i){"use strict";var e=i("fd49"),o=i.n(e);o.a},fd49:function(t,n,i){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Toast/Toast-create-component',
    {
        'components/Toast/Toast-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("0339"))
        })
    },
    [['components/Toast/Toast-create-component']]
]);                
