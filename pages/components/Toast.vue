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
	<view class="Toast">
		<view class="h3">Toast 提示信息</view>
		<view class="p">注:由于此组件基于UIN-APP实现，所以在使用之前，请确保自己了解过
		 <br>注意：如果没有特殊要求可以使用uniapp官网提供的uni.showToast()、uni.showLoading()这个方法</view>
		<Button :type="'primary'" @click="getTost">点击显示Top</Button>
		<Button :type="'info'" @click="showToastCentre">点击显示Centre</Button>
		<Button :type="'primary'" @click="showToastBottom">点击显示Bottom</Button>
	    <Toast ref="toast"></Toast>
	</view>
</template>

<script>
	import {Toast,Button} from "@/components/PFUNI.js";
	export default{
		name:'Toasts',
	    components: {
		      Toast,
			  Button
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
.Toast{
	padding:10rpx;
	.h3{
		font-size:30rpx;
		font-weight:bold;
		padding:20rpx 0;
	}
	.p{
	 padding:20rpx 0;
	 font-weight:bold;
	}
}	
</style>
