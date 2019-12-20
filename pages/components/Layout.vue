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
	<view class="Layout">
		<view class="h3">Layout 布局</view>
		<view>通过基础的 12 分栏，迅速简便地创建布局。</view>
		<view class="h4">普通行向</view>
	<view class="pf-flex row xl">
		<view class="xl-12">1</view>
	</view>	
		<view class="h4">单行局中</view>	
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
		<view class="h4">两端局中</view>
		<view class="pf-flex row justify-between">
			<view class="xl-2">1</view>
			<view class="xl-1">2</view>
		</view>
		<view class="h4">单行局中</view>
		<view class="pf-flex direction  justify-center">
			<view class="xl-2">1</view>
			<view class="xl-1">2</view>
		</view>		
		<view class="h4">坚向局中</view>
		<view class="pf-flex pf-flex-space center">
			<view class="xl-2">1</view>
			<view class="xl-1">2</view>
		</view>
			<view class="h4">顶部对齐</view>
			<view class="pf-flex pf-flex-space baseline">
				<view class="xl-2">1</view>
				<view class="xl-1">2</view>
			</view>	
			<view class="h4">底部对齐</view>
			<view class="pf-flex pf-flex-space end">
				<view class="xl-2">1</view>
				<view class="xl-1">2</view>
			</view>	
		<view class="h4">普通坚向</view>
		<view class="pf-flex column">
			<view class="xl-1">1</view>
			<view class="xl-8">2</view>
			<view class="xl-1">3</view>
		</view>	
		<view class="h4">自动换行</view>
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
.Layout{
	padding:10rpx;
	.h3{
		font-size:30rpx;
		font-weight:bold;
		padding:20rpx 0;
	}
	.h4{
		font-size:24rpx;
		font-weight:bold;
		padding:20rpx 0 0;
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
