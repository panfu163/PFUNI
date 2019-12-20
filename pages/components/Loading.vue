<!--
  * Loading 加载图标
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
	<view class="Loading">
		<view class="h3">Loading 加载图标</view>
		<h5 class="h5">加载图标</h5> 
		<view class="iconfont icon-quanjushuaxin pf-loading animated infinite rotateOut min"></view>
		<view class="iconfont icon-quanjushuaxin pf-loading animated infinite rotateOut"></view>
		<view class="iconfont icon-quanjushuaxin pf-loading animated infinite rotateOut max"></view>
	</view>
</template>

<script>
	export default{
		name:'Loading',
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
.Loading{
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
