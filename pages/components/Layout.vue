<!--
  * Layout 布局
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
		<view class="h2">Layout 布局</view>
		<view>通过基础的 12 分栏，迅速简便地创建布局。</view>
		<view class="h3">普通行向</view>
	<view class="pf-flex row xl">
		<view class="xl-12">1</view>
	</view>	
		<view class="h3">单行局中</view>	
		<view class="pf-flex row xl">
			<view class="xl-1">1</view>
			<view class="xl-1">2</view>
			<view class="xl-1">3</view>
			<view class="xl-1">4</view>
			<view class="xl-1">5</view>
			<view class="xl-1">6</view>
			<view class="xl-1">7</view>
			<view class="xl-1">8</view>
			<view class="xl-1">9</view>
			<view class="xl-1">10</view>
			<view class="xl-1">11</view>
			<view class="xl-1">12</view>
		</view>	
		<view class="pf-flex row xl">
			<view class="xl-1">1</view>
			<view class="xl-8">2</view>
			<view class="xl-3">3</view>
		</view>	
		<view class="pf-flex row xl">
			<view class="xl-1">1</view>
			<view class="xl-2">3</view>
		</view>	
		<view class="h3">两端局中</view>
		<view class="pf-flex row justify-between">
			<view class="xl-2">1</view>
			<view class="xl-1">2</view>
		</view>
		<view class="h3">单行局中</view>
		<view class="pf-flex direction  justify-center">
			<view class="xl-2">1</view>
			<view class="xl-1">2</view>
		</view>		
		<view class="h3">坚向局中</view>
		<view class="pf-flex pf-flex-space center">
			<view class="xl-2">1</view>
			<view class="xl-1">2</view>
		</view>
			<view class="h3">顶部对齐</view>
			<view class="pf-flex pf-flex-space baseline">
				<view class="xl-2">1</view>
				<view class="xl-1">2</view>
			</view>	
			<view class="h3">底部对齐</view>
			<view class="pf-flex pf-flex-space end">
				<view class="xl-2">1</view>
				<view class="xl-1">2</view>
			</view>	
		<view class="h3">普通坚向</view>
		<view class="pf-flex column">
			<view class="xl-1">1</view>
			<view class="xl-8">2</view>
			<view class="xl-1">3</view>
		</view>	
		<view class="h3">自动换行</view>
		<view class="pf-flex row xl justify-between">
			<view class="xl-1">1</view>
			<view class="xl-1">2</view>
			<view class="xl-1">3</view>
			<view class="xl-1">4</view>
			<view class="xl-1">5</view>
			<view class="xl-1">6</view>
			<view class="xl-1">7</view>
			<view class="xl-1">8</view>
			<view class="xl-1">9</view>
			<view class="xl-1">10</view>
			<view class="xl-1">11</view>
			<view class="xl-1">12</view>
			<view class="xl-1">13</view>
			<view class="xl-1">14</view>
		</view>
	</view>
</template>

<script>
	export default{
		name:'Layouts',
	    components: {},
		data() {
			return{}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
.content{
	padding:40rpx;
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
	.pf-flex{
			background:#eee;
			margin:20rpx auto;
			min-height:50rpx;
			view{
				padding:20rpx;
				background:#99a9bf;
				&:nth-child(2n){
				 background:#d3dce6;	
				}
			}
			&.pf-flex-space{
				height:180rpx;
				view{
					height:50rpx;
				}
			}
		}		
}						
</style>