<!--
  * onConfirm 弹出框
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
		<view class="h2">Confirm 提示信息</view>
		<view class="tip">Confirm组件主要用于非模态信息提醒，无需用户交互。<b>注:</b>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过!</view>
		<view class="bnt" @click="showToast">点击Confirm</view>
		<view class="bnt" @click="showToast2">点击Confirm</view>
		<view class="h3">注意:如果没有特殊要求可以使用uni-app官网提供的uni.showModal()这个方法</view>
		<Confirm ref="Confirm"></Confirm>
	    <Toast ref="Toast"></Toast>
	</view>
</template>

<script>
	    import Confirm from "@/components/Confirm/Confirm";
	    import Toast from "@/components/Toast/Toast";
	  export default {
	    components: {
				Confirm,
				Toast
			},
		data() {
			return {
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
	        showToast() { //显示头部
			   console.log("===========")
			   this.$refs.Confirm.show({message:"我是Confirm内容哦~~",
			   isShowBnt:true,
			   isShow:true,
			   onConfirm:()=>{
				    this.$refs.Toast.show("你点击啦确定确定哦~~");
			   },onCancel:()=>{
				   this.$refs.Toast.show("你点击啦取消")
			   }});
	        },
		   showToast2() { //显示头部
			   this.$refs.Confirm.show(
			   {message:"我是Confirm内容哦~~",
			   isShowBnt:true,
			   isShow:false,
			   onConfirm:()=>{
				    this.$refs.Toast.show("你点击啦确定确定哦~~");
			   },onCancel:()=>{
				   this.$refs.Toast.show("你点击啦取消")
			   }});
			}
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
.content{
	padding:40upx;
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
		 margin:20rpx auto;
		} 		
	.title{
		margin:20rpx auto;
		}	
}						
</style>	
