<!--
  * LotteryDraw 抽奖大转盘
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
		<view class="h2">LotteryDraw 倒计时</view>
		<view class="tip">LotteryDraw组件主要用于抽奖大转盘，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例1</view>
		<LotteryDraw @getData="getDataLotteryDraw" :deg="60" @getPrize="getPrize" :result="result"></LotteryDraw>
	</view>
</template>

<script>
	  import {LotteryDraw} from "@/components/PFUNI.js";
	  export default {
	    components: {
				LotteryDraw
			},
		data() {
			return {
				result:"" ,//中奖结果
				Prize:["谢谢参与","洗车券","保养","谢谢参与","洗车券","保养"] //奖项从0,1,2,3,5开始 有6个奖项deg=60 有10个奖项deg=36
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
			getDataLotteryDraw(){ //点击抽奖获取奖项--this.result为统过AJAX向后台请求返回的奖项
				let res=Math.floor(Math.random() * 10 + 1)
				this.result="1,"+res;
			},
			getPrize(res){
				console.log(res)
				uni.showToast({
					title:this.Prize[res],
					icon:"success",
					duration: 2000
				});
			}
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
.content{
	padding:40upx;
	box-sizing: border-box;
	font-size: 14rpx;
	.bnt{
		  position: relative;
		  width:100%;
		  background: #2b9939;
		  color: #fff;
		  height:60rpx;
		  line-height:60rpx;
		  margin:0 auto 40rpx;
		  text-align: center;
		  font-size: 16rpx;
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
		 font-size: 14rpx; 
		 text-indent:15rpx; 
		 margin:20rpx auto;
		} 		
	.title{
		margin:20rpx auto;
		}	
}						
</style>	
