<!--
  * Confirm 弹出框
  * ============================================================================
  * 版权所有 2019-2024 www.pfuni.cn，并保留所有权利。
  * 网站地址: http://www.pfuni.cn；
  * ----------------------------------------------------------------------------
  * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
  * 使用；不允许对程序代码以任何形式任何目的的再发布。
  * ============================================================================
  *time 2019-10-17 14:39
  *version 1.0.0
-->
<template>
	<view>
		<view class="dialog-mask"  v-if="isShow" @click="hide">
		</view>
		<view v-if="isContent" class="dialog-content">
			<view class="dialog-title">{{titile}}</view>
			<view class="dialog-info">{{message}}</view>
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

<style lang="scss" scoped="scoped">
.dialog-mask{
		background: rgba(0, 0, 0, 0.6);
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 99;
	}
.dialog-content{ 
	width: 80%;
	position: fixed;
	left: 50%;
	top: 50%;
	background: #FFF;
	z-index:100;
	transform: translate(-50%,-50%);
	box-shadow: 0 5rpx 2rpx #f5f5f5;
	transition: opacity .3s linear;
	-webkit-transition:opacity .3s linear;
	border:1rpx solid #eee;
	.dialog-title{
		text-align:center;	
		height:80rpx;
		line-height:80rpx;
		border-bottom:2rpx solid #eee;
		font-size:30rpx;
		}
	.dialog-info{
		padding:60rpx 30rpx;
		color: #999;
		 }
	.box{
		display:flex;
		border-top:1rpx solid #eee;
		view{
			 flex:1;
			 text-align:center;
			 padding:30rpx;
			 color: #55A532; 
			 font-size:28rpx;
			 }
		.left{
			border-right:1rpx solid #eee; 
			color: #333; 
			}
	}
}	
@keyframes opacity{
	from {opacity:0}
	to {opacity:1}
}
@-webkit-keyframes opacity{
	from {opacity:0}
	to {opacity:1}
}			
</style>