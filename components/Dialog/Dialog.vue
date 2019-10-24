<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 弹出框
 @version 1.0
 @E-mail  panfu163@126.com
-->
<template>
	<view>
		<view class="uni-mask"  v-if="isShow" @click="hide">
		</view>
		<view v-if="isContent" class="uni-content">
			<view class="uni-title">{{titile}}</view>
			<view class="uni-info">{{message}}</view>
			<view class="box">
				<view class="left"   v-if="isShowBnt"  @click="getCancel">{{cancel}}</view>
				<view   @click="getConfirm">{{confirm}}</view>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		name:"Dialog",
		data() {
			return {
			   isShow:false,
			   isContent:false,
			   titile:"系统提示",
			   confirm:'确定',
			   cancel:'取消',
			   message:'',
			   isShowBnt:true,
			   onConfirm:'',
			   onCancel:''
			}
		},
		onLoad(e) {
		},
		created() {
			
	    },
		methods: {
	        hide() { //显示头部
			  this.isShow=false;
			  this.isContent=false;
	        },
			show(options){
			 this.message = typeof options === 'string' ? options : options.message;
			 this.titile=options.titile || this.titile;
			 this.confirm=options.confirm || this.confirm;
			 this.cancel=options.cancel || this.cancel;
			 this.isShow=options.isShow; //显示背景
			 if(typeof options.isShow == 'undefined') this.isShow=true
			 if(typeof options.isShowBnt !== 'undefined') this.isShowBnt=options.isShowBnt;
			 if(typeof options.onConfirm !== 'undefined') this.onConfirm=options.onConfirm;
			 if(typeof options.onCancel !== 'undefined') this.onCancel=options.onCancel;
		    
			 this.isContent=true //显示内容
			},
			//确定
			getConfirm(){
				this.hide()
				if(typeof this.onConfirm == 'function') this.onConfirm(); //点击确定需处理的
			},
			//取消
			getCancel(){
				this.hide()
				if(typeof this.onCancel == 'function') this.onCancel(); //点击确定需处理的
			}
		}
	}
</script>

<style lang="stylus" scoped="scoped">
.uni-mask
	background: rgba(0, 0, 0, 0.6);
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	top: 0;
	z-index: 99;
.uni-content 
	width: 80%;
	position: fixed;
	left: 50%;
	top: 50%;
	background: #FFF;
	z-index:100;
	transform: translate(-50%,-50%);
	box-shadow: 0 5upx 2upx #f5f5f5;
	transition: opacity .3s linear;
	-webkit-transition:opacity .3s linear;
.uni-title
	text-align:center	
	height:80upx;
	line-height:80upx;
	border-bottom:2upx solid #eee;
	font-size:30upx;
.uni-info
	padding:60upx 30upx;
	color: #999; 
.box
	display:flex;
	border-top:1upx solid #eee;
	view
		 flex:1;
		 text-align:center;
		 padding:30upx;
		 color: #55A532; 
	.left
		border-right:1upx solid #eee; 
		color: #333; 
@keyframes opacity{
	from {opacity:0}
	to {opacity:1}
}
@-webkit-keyframes opacity{
	from {opacity:0}
	to {opacity:1}
}			
</style>


