<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 加载框
 @version 1.0
 @E-mail  panfu163@126.com
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
    padding:16upx 0;
	padding-bottom:36upx;
	line-height:40upx; 
	color:#888;
	text{margin-left:12upx;}
	.loading-icon{
		width:40upx;
		height:40rpx;
		justify-content:center;
		line-height:40upx; 
		font-size:30upx; 
		text-align:center; 
		font-family:"gFont" !important; 
		animation:rotate360 1200ms infinite linear;
		&:before {
			content:"\e6c4";
		 }
	  }
}
</style>