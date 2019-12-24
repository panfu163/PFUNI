<!--
  * Border 边框
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
			<view class="h2">Border 边框</view>
			<view class="tip">我们对边框进行统一规范，可用于按钮、卡片、弹窗等组件里。</view>
			<view class="h3">圆角</view>
			<view class="tip">我们提供了以下几种圆角样式，以供选择。</view>
			<view class="h3">无圆角</view>
			<view class="tip">border-radius: 0px</view>
			<view class="border pf-border"></view>
			<view class="h3">小圆角</view>
			<view class="tip">border-radius:5rpx</view>
			<view class="border pf-border min"></view>
			<view class="h3">大圆角</view>
			<view class="tip">border-radius:20rpx</view>
			<view class="border pf-border max"></view>
			<view class="h3">圆形圆角</view>
			<view class="tip">border-radius:50% </view>
			<view class="border-round pf-border round"></view>
			<view class="h3">投影</view>
			<view class="tip">我们提供了以下几种投影样式，以供选择。</view>
			<view class="border pf-border box-shadow"></view>
			<view class="tip">基础投影 box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)</view>
			<view class="border pf-border box-shadow-tint"></view>
			<view class="tip">浅色投影 box-shadow: 0 2rpx 12rpx 0 rgba(0, 0, 0, 0.1)</view>
			
	</view>
	</view>
</template>

<script>
	export default{
		name:'Border',
	    components: {
		    },
		data() {
			return{}
		},
		mounted() {
			
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
		 margin:20rpx auto;
		} 		
	.title{
		margin:20rpx auto;
		}
	.border{
		 width:100%;
		 height:100rpx;
	}
	.border-round{
		width:200rpx;
		height:200rpx;
	}
}						
</style>
