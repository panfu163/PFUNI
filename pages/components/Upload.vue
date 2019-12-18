<!--
  * Upload 图片上传
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
		<view class="h2">Upload 图片上传</view>
		<view class="tip">Upload组件主要用于非模态信息提醒，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<Upload ref="Upload" 
		        :url="url"
				:buttonName="buttonName"
			    :imgNumber="imgNumber"
				:buttonColor="buttonColor">
		</Upload>
		
	</view>
	</view>
</template>

<script>
	import {Upload} from '@/components/PFUNI.js'
		export default {
			components: {
				Upload,
			},
		data() {
			return {
				url:'https://www.example.com/upload', //上传地址
				buttonName:'上传图片',
				imgNumber:10, //图片上传数量
				buttonColor:'#2b9939',//上传图标颜色
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods:{
			
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
.content{
	padding:40rpx;
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