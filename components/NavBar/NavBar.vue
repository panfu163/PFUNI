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
	<scroll-view 
	:class="['nav-bar', isCenter ? 'nav-center' : '']" :scroll-x="true" :show-scrollbar="false" 
	:scroll-into-view="'tab-'+currentIndex">
		<view class="nav-item" :id="'tab-'+index" 
		:style="{width:size < 1 ? 'auto' : size+'rpx', marginRight:margin+'rpx', padding:'0rpx '+padding}" 
		v-for="(item, index) in items" :key="index" @click="navchang" :data-index="index">
			<view :class="['nav-item-title', currentIndex == index ? 'nav-active' : '']"
			:style="{color:currentIndex == index ? activeColor : color, textAlign : textAlign, lineHeight:lineHeight, fontSize:fontSize}">{{item}}</view>
			<view class="nav-active-line-wrap" :style="{justifyContent:activeDirection}">
				<view class="nav-active-line" 
				:style="{background:activeLineBg, width:activeLineWidth, height:activeLineHeight}" 
				v-if="currentIndex == index"></view>
			</view>
		</view>
	</scroll-view>
</template>
<script>
export default {
	props:{
		isCenter : {
			type : Boolean,
			 default : false,
		},
		currentIndex : {
			type : Number,
			default : 0,
			},
		size : {
			type : Number,
			 default : 120,
			 },
		fontSize : {
			type : String,
			default : '28rpx',
			},
		items : {
			type : Array,
			default : function () {
				return []},
			},
		activeLineBg : {
			type : String,
			default : "linear-gradient(to right, #66BFFF,#3388FF)",
		},
		color : {
			type : String,
		    default : "#333333",
			},
		activeColor:{
			type : String,	
			default : "#333333",
			},
		activeLineHeight : {
			type : String, 
			default : '6rpx',
			},
		activeLineWidth : {
			type : String, 
			default : "36rpx",
			},
		activeDirection : {
			type : String, 
			default : "",
			},
		margin : {
			type : Number,
			 default : 0,
			 },
		textAlign : {
			type : String, 
			default : '',
			},
		lineHeight :{
			type : String,
			 default : '50rpx',
			 },
		padding : {
			type : String, 
			default : '0rpx',
		 }
	},
	methods:{
		navchang : function (e){
			this.$emit('onChange', Number(e.currentTarget.dataset.index))
		}
	}
}
</script>
<style lang="scss" scoped="scoped">
.nav-bar{
	width:100%;
	display:flex; 
	white-space:nowrap;
   .nav-item{
	   width:100rpx; 
	   display:inline-flex; 
	   flex-direction:column;
	   }
	.nav-item-title{
		font-size:28rpx;
		 line-height:50rpx; 
		 width:100%;
		 color:#333333;
		 }
	.nav-active{
		font-size:30rpx; 
		font-weight:bold;
		}
	.nav-active-line-wrap{
		display:flex;
		}
	.nav-active-line{
		width:36rpx;
		height:6rpx; 
		margin-top:5rpx;}
	&.nav-center{
		justify-content:center; 
		text-align:center;
	}
}
</style>