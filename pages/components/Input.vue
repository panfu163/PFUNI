<!--
  * Input 表单
  * ============================================================================
  * 版权所有 2019-2024 www.pfuni.cn，并保留所有权利。
  * 网站地址: http://www.pfuni.cn；
  * ----------------------------------------------------------------------------
  * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
  * 使用；不允许对程序代码以任何形式任何目的的再发布。
  * 侵权必究，请遵守版权约定！
  * ============================================================================
  *version 1.0.0
  *author : PanFu 1150928736@qq.com 
  *last update date : 2019-12-06 14:39
-->
<template>
	<view class="content">
		<view class="h2">input 表单</view>
		<view class="tip">input组件主要用于input输入框，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<Input
		  :placeholder="'请输入内容'"
		  :title="'标题:'"
		  :value="'请输入您的姓名'"
		  :name="'name'"
		  :disabled="false"
		  @input="input"
		  >
		</Input>
		<Input
		  :placeholder="'请输入内容'"
		  :value="'请输入您的年龄'"
		  :name="'name'"
		  :disabled="false"
		  :iconLeft="'icon-compose'"
		   @input="input"
		  >
		</Input>
		<Input
		  :placeholder="'请输入您的手机号'"
		  :type="'number'"
		  :name="'name'"
		  :disabled="false"
		  :iconRight="'icon-sousuo'"
		   @input="input"
		  >
		</Input>
		<Input
		  :placeholder="'请输入您的邮箱'"
		  :value="'我的姓名'"
		  :name="'name'"
		  :disabled="false"
		   @input="input"
		  >
		</Input>

	</view>
</template>

<script>
	 import Input from "@/components/Input/Input";
		export default {
			components: {
				Input,
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
	        input(event){
			   var val=event.detail.value
				console.log(val)
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
