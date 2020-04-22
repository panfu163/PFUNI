<!--
  * Radio 单选
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
		<view class="h2">Radio</view>
		<view class="tip">Radio组件主要用于非模态信息提醒，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<Radio :labelList="labelList" @getCheckBox="getCheckBox"></Radio>
	    <view class="tip">结果:{{result}}</view>
	</view>
</template>

<script>
 import Radio from "@/components/Radio/Radio";
		export default {
			components: {
				Radio,
			},
		data() {
			return {
			  result:"",	
			  labelList:[{
					  name: '可爱',
					  value: '0',
					  checked:true
					},
					  {
						name: '性感',
						value: '1',
						checked: false
					  },
					  {
						name: '温柔',
						value: '2',
						checked: false
					  },
					  {
						name: '体贴',
						value: '3',
						checked: false
					  },
					  {
						name: '漂亮',
						value: '4',
						checked: false
					  },
					  {
						name: '温柔',
						value: '5',
						checked: false
					  },
					  {
						name: '体贴',
						value: '6',
						checked: false
					  },
					  {
						name: '漂亮',
						value: '7',
						checked: false
					  }]
				}	  
		},
		onLoad(e) {
			 console.log(e)
		},
		created() {
	    
	    },
		methods: {
	      getCheckBox(data){
			   // #ifdef H5
			    this.result=data;
			   // #endif
			   // #ifdef MP-WEIXIN
			     console.log(data.detail.__args__[0].name)
			     this.result=data.detail.__args__[0].name;
			   // #endif
			  
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
