<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 滚动公告
 @version 1.0
 @E-mail  panfu163@126.com
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
	padding:10upx 0; 
	display:flex; 
	flex-wrap:nowrap;
	swiper{
		width:100%; 
		height:60upx; 
		overflow:hidden;
		}
	swiper-item{
		line-height:60upx;
		height:60upx;
		overflow:hidden;
	}
	navigator{
		 line-height:60upx;
		 height:60upx;
		 overflow:hidden;
		}
		.iconfont{
			height:60upx; 
			line-height:60upx;
			margin-right:16upx;
			display:inline-block; 
			flex-shrink:0;
			
		 }
}


.scroll-body{
	width:100%;
	line-height:60upx; 
	height:60upx;
	overflow:hidden;
	display:flex;
	position:relative;
	.iconfont{
		height:60upx; 
		line-height:60upx;
		margin-right:16upx;
		display:inline-block; 
		flex-shrink:0;
		position:absolute;
		top:0;
		left:0;
		z-index:9;
		background:#fff;
		padding:0 20upx 0 0;
	 }
	.scrolling{
		animation:scrollingx 12s linear infinite;
		line-height:60upx;
		height:60upx; 
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