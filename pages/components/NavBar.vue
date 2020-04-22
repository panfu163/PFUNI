<!--
  * NavBar 切换导航
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
		<view class="h2">NavBar 切换导航</view>
		<view class="tip">NavBar组件主要用于移动端切换导航，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">默认模式</view>
		<NavBar :items="navItems" :currentIndex="navIndex" @onChange="onChange"></NavBar>
		<view class="h3">文字居中</view>
		<NavBar 
			:items="navItems" 
			textAlign="center" 
			activeDirection="center" 
			:currentIndex="navIndex"
			@onChange="onChange">
		 </NavBar>
		<view class="h3">激活颜色设置</view>
		<NavBar 
			:items="navItems" 
			:currentIndex="navIndex" 
			activeLineBg="linear-gradient(to right, #FF00EE, #FF0036)" 
			activeColor="#FF0036" 
			@onChange="onChange">
		</NavBar>
		<view class="h3">居中模式</view>
		<NavBar 
		    :items="navItems2" 
			lineHeight="80rpx" 
			:isCenter="true" 
			:currentIndex="navIndex" :size="110" 
			activeLineBg="#3688FF" textAlign="center"
			activeColor="#3688FF" 
			activeLineWidth="100%" 
			activeLineHeight="2rpx" 
			:margin="10" @onChange="onChange">
		</NavBar>
		<view class="h3">自动模式</view>
		<NavBar :items="navItems2" 
			lineHeight="80rpx" 
			:isCenter="true" 
			:currentIndex="navIndex" 
			:size="0" padding="20rpx" 
			activeLineBg="#3688FF" 
			textAlign="center"
			activeColor="#3688FF" 
			activeLineWidth="100%" 
			activeLineHeight="2rpx" 
			:margin="10" @onChange="onChange">
		</NavBar>
	</view>
</template>

<script>
	   import NavBar from "@/components/NavBar/NavBar";
	  export default {
	  		components: {
	  	        NavBar
	  		},
	  		data() {
	  			return {
	  			navItems : ['推荐', '新闻', '音乐', '运动', '军事', '视频', '其他'],
				navItems2:['全部','退款','付款'],
				navIndex : 0
				}
	  		},
	  		methods: {
	  			onChange(index) {
					console.log(index)
	  				this.navIndex = index;
	  			}
	  		}
	  	}
</script>
	
<style lang="scss" scoped="scoped">
.content{
	padding:40rpx;
	box-sizing: border-box;
	.bnt{
		  position: relative;
		  width:100%;
		  background: #2b9939;
		  color: #fff;
		  height:60rpx;
		  line-height:60rpx;
		  margin:0 auto 40rpx;
		  text-align: center;
		  border-radius:10rpx;
		 } 
	.h2{
		font-size:28rpx; 
		margin-bottom:10rpx; 
		font-weight: bold;
		}  
	.h3{
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
}						
</style>	