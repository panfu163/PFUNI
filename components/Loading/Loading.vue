<!--
  * PFUNI 加载框
  * ============================================================================
  * 版权所有 2019-2024 www.pfuni.cn，并保留所有权利。
  * 网站地址: http://www.pfuni.cn；
  * ----------------------------------------------------------------------------
  * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
  * 使用；不允许对程序代码以任何形式任何目的的再发布。
  * 侵权必究，请遵守版权约定！
  * ============================================================================
  *version 1.0.0
  *author : PanFu 1150928736@qq.com 
  *last update date : 2019-12-06 14:39
-->
<template name="Loading">
	<view class="loading" v-if="loadingType < 5 && show">
		<view class="loading-icon" v-if="loadingType === 1" :style="{color:iconColor}"></view>
		<text :style="{color:textColor}">{{loadingText[loadingType]}}</text>
	</view>
</template>
<script>
export default {
	props: {
		loadingType: {
			type : Number,
			default: 0
		},
		loadingText : {
			type  : Array,
			default : function () {
				return ["上拉加载更多", "加载中...", "暂无数据~~"];
			}
		},
		show : {
		  type : Boolean,
		  default : true
		},
		iconColor : {
			type : String,
			default : "#888888"
		},
		textColor : {
			type : String,
			default : "#888888"
		}
	}
}
</script>
<style lang="scss" scoped="scoped">
@font-face {
	font-family:"gFont"; 
	//src:url('https://at.alicdn.com/t/font_1348684_f1lellt295.ttf') 
	src:url('../../font/font_loading.ttf') format('truetype');
}
@keyframes rotate360{
	0%{
		transform:rotate(0deg);
		} 
	50%{
		transform:rotate(180deg);
	  } 
	100%{
		transform:rotate(360deg);
		}
	}
.loading{
	display:flex; 
	width:100%; 
	justify-content:center;
    padding:16rpx 0;
	padding-bottom:36rpx;
	line-height:40rpx; 
	color:#888;
	text{margin-left:12rpx;}
	.loading-icon{
		width:40rpx;
		height:40rpx;
		justify-content:center;
		line-height:40rpx; 
		font-size:30rpx; 
		text-align:center; 
		font-family:"gFont" !important; 
		animation:rotate360 1200ms infinite linear;
		&:before {
			content:"\e6c4";
		 }
	  }
}
</style>