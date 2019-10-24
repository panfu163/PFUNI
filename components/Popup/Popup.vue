<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 抽厅
 @version 1.0
 @E-mail  panfu163@126.com
-->
<template>
	<view>
	    <view v-show="mask" class="uni-mask" :class="{'show':mask}"  @click="hide"></view>	
	   <!--上-->
		<view v-if="position=='top'" class="uni-content-top" :class="{'show-top':visible}">
			<view>{{message}}--{{position}}</view>
			<slot></slot>
		</view>
			<!--中-->	
		<view v-if="position=='middle'" class="uni-content-middle" :class="{'show-middle':visible}">
			<view>{{message}}</view>
			<slot></slot>
		</view>
		<!--下-->	
		<view v-if="position=='bottom'" class="uni-content-bottom" :class="{'show-bottom':visible}">
			<view>{{message}}</view>
			<slot></slot>
		</view>
			<!--左-->	
		<view v-if="position=='left'" class="uni-content-left" :class="{'show-left':visible}">
			<view>{{message}}</view>
			<slot></slot>
		</view>
			<!--右-->	
		<view v-if="position=='right'" class="uni-content-right" :class="{'show-right':visible}">
			<view>{{message}}</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
export default {
	name:'Popup',
	 props: {
		  position:{
				type: String,
				default(){
					return "middle"
				}
		  },
		},
		data() {
			return {
			   mask:false,	
			   visible:false,
			   message:'',
			   duration:2000,
			   icon:''
			}
		},
		onLoad(e) {
			console.log(e+"=============")
		},
		created(e) {
	    	console.log(e+"=============")
	    },
		methods: {
	        hide() { //显示头部
			  this.visible=false;
			  this.mask=false
	        },
			show(options){
		     this.message = typeof options === 'string' ? options : options.message;
		     this.duration=options.duration || this.duration;
			 this.icon=options.icon;
			 this.visible=true;
			 this.mask=true;
			}
		},
		 computed: {
			
        }
	}
</script>

<style lang="stylus" scoped="scoped">
.uni-mask
	background: rgba(0, 0, 0, 0.6);
	position:fixed;
	width:100%;
	height:100%;
	left:0;
	top:0;
	bottom:0;
	right:0;
	z-index:999;
	visibility:hide;
	opacity:0;
	&.show
		visibility: visible;
		opacity: 1;
.uni-content-top
	position: fixed;
	top:0;
	left:0;
	width:100%;
	height:90%;
	transition: all 0.3s ease;
	z-index:1000;
	background:#fff;
	transform:translateY(-100%);
    &.show-top 
	   transform:translateY(0%); 
.uni-content-middle
	position: fixed;
	top:50%;
	left:50%;
	transform:translate(-50%,-50%) 
	z-index:1000;
	background:#fff;	   
    &.show-middle 
	   visibility: visible;
	   opacity: 1;
.uni-content-bottom
	position:fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height:90%;
	transition: all 0.3s ease;
	transform: translateY(100%);
	z-index:1000;
	background:#fff;		   
    &.show-bottom 
	   transform:translateY(0); 
.uni-content-left
	position:fixed;
	top: 0;
	left: 0;
	width:80%;
	height:100%;
	transition: all 0.3s ease;
	z-index:1000;
	background:#fff;
	transform: translateX(-100%);	   
    &.show-left  
	   transform:translateX(0);
.uni-content-right
	position:fixed;
	bottom: 0;
	right: 0;
	width:80%;
	height:100%;
	transition: all 0.3s ease;
	transform: translateX(100%);
	z-index:1000;
	background:#fff;			
    &.show-right
	   transform:translateX(0); 					 
</style>

