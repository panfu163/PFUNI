<!--
  * CountDown 倒计时
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
		<view class="h2">CountDown 倒计时</view>
		<view class="tip">CountDown组件主要用于时间倒计时，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例1</view>
		<CountDown
		:years="years"
		:months="months"
		:days="days"
		:hours="hours"
		:minutes="minutes"
		:seconds="seconds"
		></CountDown>
		<view class="h3">示例2</view>
		<CountDown
		:type="'box'"
		:years="yearing"
		:months="monthing"
		:days="days"
		:hours="hours"
		:minutes="minutes"
		:seconds="seconds"
		></CountDown>
	</view>
</template>

<script>
	   import CountDown from "@/components/CountDown/CountDown";
	  export default {
	    components: {
				CountDown
			},
		data() {
			return {
				yearing:"2021",
				monthing:"12",
				years:"2020",
				months:"12",
				days:"18",
				hours:"22",
				minutes:"0",
				seconds:"0",
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
			
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
	
