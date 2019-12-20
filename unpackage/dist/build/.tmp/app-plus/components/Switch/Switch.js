(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/Switch/Switch"],{3609:function(t,e,i){"use strict";i.r(e);var s=i("e0a0"),c=i("8b00");for(var n in c)"default"!==n&&function(t){i.d(e,t,function(){return c[t]})}(n);i("f74a");var o=i("2877"),u=Object(o["a"])(c["default"],s["a"],s["b"],!1,null,"2175e63c",null);e["default"]=u.exports},"7c8c":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"pfSwitch",props:{msg:{type:Boolean,default:!0},Styles:{type:String,default:"red"}},data:function(){return{startX:0,moveX:0,isChecked:this.msg,isTouch:!1}},onLoad:function(t){},created:function(){},methods:{touchstart:function(t){this.startX=t.touches[0].pageX,this.isTouch=!0},touchmove:function(t){this.moveX=t.touches[0].pageX-this.startX,this.isTouch=!1},touchend:function(t){this.isTouch||(44/3<Math.abs(this.moveX)&&(this.moveX<0?this.isChecked=!1:this.isChecked=!0),this.moveX=0,this.startX=0,this.$emit("getChecked",this.isChecked))},onClick:function(t){this.isTouch&&(this.isChecked?this.isChecked=!1:this.isChecked=!0,this.$emit("getChecked",this.isChecked))}},computed:{}};e.default=s},"8b00":function(t,e,i){"use strict";i.r(e);var s=i("7c8c"),c=i.n(s);for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);e["default"]=c.a},e0a0:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c},c=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return c})},efe9:function(t,e,i){},f74a:function(t,e,i){"use strict";var s=i("efe9"),c=i.n(s);c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/Switch/Switch-create-component',
    {
        'components/Switch/Switch-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("3609"))
        })
    },
    [['components/Switch/Switch-create-component']]
]);                
