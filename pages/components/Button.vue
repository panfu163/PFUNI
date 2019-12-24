<!--
  * Button 按钮
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
	<view class="Button">
		<view class="h3">Button 按钮</view>
		<view class="h5">按钮类型</view> 
		<view class="p">按钮类型支持default、primary、info、warning、danger五种类型，默认为default</view>
	    <Buttons>默认按钮</Buttons>
		<Buttons :type="'primary'">主要按钮</Buttons>
		<Buttons :type="'info'">信息按钮</Buttons>
		<Buttons :type="'warning'">警告按钮</Buttons>
		<Buttons :type="'danger'">危险按钮</Buttons>
		<view class="h5">朴素按钮</view>
		<Buttons plain :plain="'plain'">默认按钮</Buttons>
		<Buttons :type="'primary'"  :plain="'plain'">主要按钮</Buttons>
		<Buttons :type="'info'"  :plain="'plain'">信息按钮</Buttons>
		<Buttons :type="'warning'"  :plain="'plain'">警告按钮</Buttons>
		<Buttons :type="'danger'"  :plain="'plain'">危险按钮</Buttons>
	    <view class="h5">禁用状态</view> 
		<Buttons  :disabled ="'disabled '">默认按钮</Buttons>
		<Buttons :type="'primary'"  :disabled ="'disabled '">主要按钮</Buttons>
		<Buttons :type="'info'"  :disabled ="'disabled '">信息按钮</Buttons>
		<Buttons :type="'warning'"  :disabled ="'disabled '">警告按钮</Buttons>
		<Buttons :type="'danger'"  :disabled ="'disabled '">危险按钮</Buttons>
	    <view class="h5">按形状</view>
		<Buttons :shape ="'round '">默认按钮</Buttons>
		<Buttons :type="'primary'"  :shape ="'round '">主要按钮</Buttons>
		<Buttons :type="'info'"  :shape ="'round '">信息按钮</Buttons>
		<Buttons :type="'warning'"  :shape ="'round '">警告按钮</Buttons>
		<Buttons :type="'danger'"  :shape ="'round '">危险按钮</Buttons>
	</view>
</template>

<script>
	import Buttons from "@/components/Button/Button";
	export default{
		name:'Button',
	    components: {
		      Buttons
		    },
		data() {
			return{
				
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
.Button{
	padding:10rpx;
	.h3{
		font-size:30rpx;
		font-weight:bold;
		padding:20rpx 0;
	}
	.h5{
		font-size:24rpx;
		font-weight:bold;
		padding:20rpx 0;	
	}
	.p{
		padding:10rpx 0;
	}
}	
</style>
