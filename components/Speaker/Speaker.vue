<!--
  * Speaker 公告滚动
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
<template name="Speaker">
	<view v-if="!scrolling" class="Speaker-swiper">
		<view class="iconfont"  :class="[iconClass]" :style="{color:iconColor}"></view>
		<swiper :vertical="vertical" autoplay="true" circular="true" :interval="interval">
			<swiper-item v-for="(item, index) in list" :key="index">
				<navigator :url="item.url" :open-type="item.opentype">{{item.title}}</navigator>
			</swiper-item>
	     </swiper>
	</view>
	<!--无缝滚动-->
	<view v-else class="scroll-body">
		<view class="iconfont"  :class="[iconClass]" :style="{color:iconColor}"></view>
		<view class="scrolling">
			<slot></slot>
		</view>
	</view>
</template>
<script>
export default {
	name:"Speaker",
	props: {
	 list : {
      type  : Array,
      default : function(){return [];}
     },
    iconClass : {
      type  : String,
      default : ""
    },
	iconColor : {
	  type  : String,
	  default : "#3688FF"
	},
    interval : {
      type : Number,
      default: 3000
    },
    vertical : {
     type : Boolean,
     default : true
     },
	 scrolling:{
		type : Boolean,
		default :false 
	 }
	}
}
</script>
<style lang="scss" scoped>
.Speaker-swiper{
	width:100%; 
	padding:10rpx 0; 
	display:flex; 
	flex-wrap:nowrap;
	swiper{
		width:100%; 
		height:60rpx; 
		overflow:hidden;
		}
	swiper-item{
		line-height:60rpx;
		height:60rpx;
		overflow:hidden;
	}
	navigator{
		 line-height:60rpx;
		 height:60rpx;
		 overflow:hidden;
		}
		.iconfont{
			height:60rpx; 
			line-height:60rpx;
			margin-right:16rpx;
			display:inline-block; 
			flex-shrink:0;
			
		 }
}


.scroll-body{
	width:100%;
	line-height:60rpx; 
	height:60rpx;
	overflow:hidden;
	display:flex;
	position:relative;
	.iconfont{
		height:60rpx; 
		line-height:60rpx;
		margin-right:16rpx;
		display:inline-block; 
		flex-shrink:0;
		position:absolute;
		top:0;
		left:0;
		z-index:9;
		background:#fff;
		padding:0 20rpx 0 0;
	 }
	.scrolling{
		animation:scrollingx 12s linear infinite;
		line-height:60rpx;
		height:60rpx; 
		white-space:nowrap;
		border:0;
		position:relative;
		z-index:8;
	}
}

@keyframes scrollingx{ 
	0% { transform: translateX(100%); } 
	100% { transform: translateX(-200%);}
}
</style>