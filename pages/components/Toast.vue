<!--
  * Toast 提示信息
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
		<view class="h2">Toast 提示信息</view>
		<view class="tip">Toast组件主要用于弹出提示信息，无需用户交互。<b>注:</b>
		由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过!</view>
		<Buttons :type="'info'" @click="showToastCentre">点击显示Centre</Buttons>
		<Buttons :type="'primary'" @click="showToastBottom">点击显示Bottom</Buttons>
		<Buttons :type="'primary'" @click="getTost">点击显示Top</Buttons>
		<view class="h3">注意:如果没有特殊要求可以使用uniapp官网提供的uni.showToast()、uni.showLoading()这个方法</view>
	    <Toast ref="toast"></Toast>
	</view>
</template>

<script>
	import Toast from "@/components/Toast/Toast";
	import Buttons from "@/components/Button/Button";
	
	export default{
		name:'Toasts',
	    components: {
		      Toast,
			  Buttons
		    },
		data() {
			return{}
		},
		mounted() {
			
		},
		methods:{
			getTost(){
				this.$refs.toast.show({message:"显示在头部",position:"top"});
			},
			showToastCentre(){//显示在中间
				this.$refs.toast.show({message:"加载中...",duration:2000,icon:"icon"});
			},
			showToastBottom(){ //显示在底部
				this.$refs.toast.show({message:"提示信息",duration:2000,position:"bottom"});
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
