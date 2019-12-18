<!--
  * Popup 弹框抽提
  * ============================================================================
  * 版权所有 2020-2024 www.pfuni.cn，并保留所有权利。
  * 网站地址: http://www.pfuni.cn；
  * ----------------------------------------------------------------------------
  * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
  * 使用；不允许对程序代码以任何形式任何目的的再发布。
  * 侵权必究，请遵守版权约定！
  * ============================================================================
  *version 1.0.0
  *author : PanFu panfu163@126.com
  *last update date : 2020-01-01 00:00
-->
<template>
	<view class="content">
		<view class="h2">Popup 弹框</view>
		<view class="tip">Popup组件主要用于非模态信息提醒，无需用户交互。
		<strong>注:</strong>由于此组件基于UNI-APP实现，所以在使用之前，请确保自己了解过
		</view>
			<view class="bnt" @click="showToastTop">点击上部弹出Popup-top</view>
			<view class="bnt" @click="showToastCentre">点击中部弹出Popup-centre</view>
			<view class="bnt" @click="showToastBottom">点击下部弹出Popup-bottom</view>
			<view class="bnt" @click="showToastLeft">点击左侧弹出Popup-left</view>
			<view class="bnt" @click="showToastRight">点击右侧弹出Popup-right</view>
		
	  <view class="title">time 字段决定了 Popup 显示的时间，如果设置为 0，则不会消失，需要手动调用组件的 hide 方法。</view>
	
	<Popup ref="Popup1" :position="'top'"></Popup>
	<Popup ref="Popup2" :position="'middle'"></Popup>
	<Popup ref="Popup3" :position="'bottom'"></Popup>
	<Popup ref="Popup4" :position="'left'"></Popup>
	<Popup ref="Popup5" :position="'right'"></Popup>
	</view>
</template>

<script>
		import {Popup} from "@/components/PFUNI.js";
		export default {
			components: {
				Popup,
			},
		data() {
			return {
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
	        showToastTop() { //显示头部
			  this.$refs.Popup1.show({message:"从上往下滑动"});
	        },
			showToastCentre(){ //显示中间
				 this.$refs.Popup2.show({message:"显示中间"});
			},
			showToastBottom(){ //显示在下面
				 this.$refs.Popup3.show({message:"向上滑"});
			},
			showToastLeft(){ //显示在左边
				this.$refs.Popup4.show({message:"向右滑"});
			},
			showToastRight(){ //显示在右面
				this.$refs.Popup5.show({message:"向左滑"});
			}
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
.content{
	padding:40upx;
	box-sizing: border-box;
	font-size: 14rpx;
	.bnt{
		  position: relative;
		  width:100%;
		  background: #2b9939;
		  color: #fff;
		  height:60rpx;
		  line-height:60rpx;
		  margin:0 auto 40rpx;
		  text-align: center;
		  font-size: 16rpx;
		  border-radius:10rpx;
		 } 
	.h2{
		font-size:24rpx; 
		margin-bottom:10rpx; 
		font-weight: bold;
		}  
	.h3{
		 font-size:20rpx; 
		 margin:20rpx auto; 
		 font-weight: bold;
		 color:red;
	    }	 
	.tip{
		 font-size: 14rpx; 
		 text-indent:15rpx; 
		 margin:20rpx auto;
		} 		
	.title{
		margin:20rpx auto;
		}	
}						
</style>