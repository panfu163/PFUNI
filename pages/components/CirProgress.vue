<!--
  * CirProgress 进度圆环/条
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
		<view class="h2">CirProgress 进度圆环/条</view>
		<view class="tip">CirProgress组件主要用于进度圆环/条，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例1</view>
		<view class="CirProgress">
			<CirProgress :width="150" canvasId="CirProgress" :value="90" :lineWidth="20" progressColor="#10AEFF" fontColor="#10AEFF">
								<canvas style="width:150px; height:150px;" canvas-id="CirProgress"></canvas>
			</CirProgress>
		</view>
		<view class="CirProgress">
				<CirProgress :width="120" canvasId="CirProgress2" :value="60" :lineWidth="20" progressColor="#FF3500" fontColor="#FF3500">
								<canvas style="width:120px; height:120px;" canvas-id="CirProgress2"></canvas>
				</CirProgress>
		</view>
		<view class="title">原生进度条</view>
		<progress percent="20" show-info />
		<progress percent="40" stroke-width="20" backgroundColor="red" border-radius="20"/>
		<progress percent="60" color="red" />
		<progress percent="80" active />
	</view>
</template>

<script>
	  import CirProgress from "@/components/CirProgress/CirProgress";
	  export default {
	    components: {
				CirProgress
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
		.CirProgress{
			overflow:hidden;
			height:300rpx;
		}
		.uni-progress{
			margin-bottom:20rpx;
		}
}						
</style>	

