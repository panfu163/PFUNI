<!--
  * DatePicke 时间组件
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
		<view class="h2">DatePicke 时间组件</view>
		<view class="tip">DatePicke组件主要用于时间插件。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		  <view class="bnt" :class="[{'active':index==tabIndex}]" @tap="toggleTab(index)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
		  <DatePicke :mode="mode" startYear="2016" endYear="2030" :defaultVal="defaultVal" @confirm="onConfirm" ref="DatePickes"></DatePicke>
		<view class="h3">回调内容：{{dataResult}}</view>
		<view class="h3">示例</view>
	  <view class="title">注：mode类型：date、dateTime、time
	    <view>日期选择开始年份 如果不填默认1970年 </view>
		<view>endYear 日期选择结束年份 如果不填默认当前年份</view>
		<view>defaultVal 选择初始值</view>
		<view>@confirm 点击确认的回调获取picker结果</view>
	  </view>

	</view>
</template>

<script>
	import {DatePicke} from "@/components/PFUNI.js";
		export default {
		components: {
				DatePicke,
			},
		data() {
			return {
				tabList:[{
					mode:"date",
					name:"日期选择",
					value:[0,1,0]
				},{
					mode:"dateTime",
					name:"日期时间选择",
					value:[0,1,0,1,0]
				},{
					mode:"time",
					name:"时间选择",
					value:[1,1]
				}],
				tabIndex:0,
				dataResult:''
			}
		},
		computed:{
			mode(){//初始值
				return this.tabList[this.tabIndex].mode
			},
			defaultVal(){ //初始值
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
				this.$refs.DatePickes.show();
			},
			onConfirm(e){
				console.log(e)
				this.dataResult=JSON.stringify(e);
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
