<!--
  * paick 选择组件
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
		<view class="h2">Picke</view>
		<view class="tip">Picke组件主要用于非模态信息提醒，无需用户交互。<strong>注:</strong>由于此组件基于UNI-APP实现，所以在使用之前，请确保自己了解过 </view>
		  <view class="bnt" :class="[{'active':index==tabIndex}]" @tap="toggleTab(index)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
		  <Picke :mode="mode" :defaultVal="defaultVal" @confirm="onConfirm" ref="Picke"></Picke>
		<view>返回结果:{{city}}</view>
		<view class="h3">注意</view>
	   <view class="title">注：mode类型：provinces、city、areas
	   <view>cityData为对应的城市数据</view>
	 		<view>provinces 显示省</view>
	 		<view>city 显示省市</view>
			<view>city 显示省市区</view>
	 		<view>@confirm 点击确认的回调获取picker结果</view>
	 </view>
	</view>
</template>

<script>
	 import {Picke} from "@/components/PFUNI.js";
		export default {
		components: {
				Picke,
			},
		data() {
			return {
				tabList:[{
					mode:"provinces",
					name:"省",
					value:[10,0,5]
				},{
					mode:"city",
					name:"省市",
					value:[10,0,5]
				},
				{
					mode:"areas",
					name:"省市区",
					value:[10,0,5]
				}],
				tabIndex:0,
				city:''
			}
		},
		computed:{
			mode(){
				return this.tabList[this.tabIndex].mode
			},
			defaultVal(){
				return this.tabList[this.tabIndex].value
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
			toggleTab(index){
				this.tabIndex=index;
				this.$refs.Picke.show();
			},
			onConfirm(val){
				console.log(val);
				this.city=val;
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
