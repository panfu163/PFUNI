<!--
  * Cell 单元格
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
	<view class="Cell">
			<view class="h3">Cell 单元格</view>
			<view class="h5">基础用法</view>
			<Cell :title="'单元格'" :val="'内容'"></Cell>
			<Cell :title="'单元格'" :val="'内容'" :label="'描述信息'"></Cell>
			<Cell :title="'单元格'" :val="'内容'"></Cell>
			<view class="h5">展示图标</view>
			<Cell :iconfont="'icon-ditudaohang'"  :title="'单元格'" :val="'贵州贵阳'" :label="'当前位置'" ></Cell>
			<Cell :iconfont="'icon-zititubiao01'" :title="'通讯录'" :val="'同学'"></Cell>
	        <view class="h5">只设置标题</view> 
			<Cell :title="'单元格'"></Cell>
			<Cell :title="'单元格'"></Cell>
			<view class="h5">展示箭头</view>
			<Cell :title="'单元格'" :val="'内容'" :arrow="'left'"></Cell>
			<Cell :title="'单元格'" :arrow="'left'"></Cell>
			<Cell :title="'单元格'" :arrow="'right'"></Cell>
			<Cell :title="'单元格'" :arrow="'bottom'"></Cell>
			<Cell :title="'单元格'" :arrow="'top'"></Cell>
			<view class="h5">页面导航</view>
			<Cell :title="'Url跳转'" :url="'/pages/components/Border'" :arrow="'left'"></Cell>
	</view>
	</view>
</template>

<script>
	import Cell from "@/components/Cell/Cell";
	export default{
		name:'Cells',
	    components: {
			 Cell
		    },
		data() {
			return{}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
.Cell{
	padding:10rpx 10rpx 20rpx;
	margin:0 auto;
	background:#eee;
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	bottom:0;
	left:0;
	right:0;
	overflow-y:scroll;
	.h3{
		font-size:30rpx;
		font-weight:bold;
		padding:20rpx 0;
	}
	.h5{
		font-size:18rpx;
		font-weight:bold;
		padding:20rpx 0;
	}
	.p{
		padding:10rpx 0;
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
