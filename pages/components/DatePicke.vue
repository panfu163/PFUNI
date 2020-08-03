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
		 
		 
		 <view class="bnt" @click="DatePicke0">日期选择-年</view>
		  <DatePicke 
		  startYear="2016" 
		  endYear="2030" 
		  :val="selectedTime0"
		  @confirm="onConfirm" 
		  ref="DatePicke0"></DatePicke>
		 
		 <view class="bnt" @click="DatePicke1">日期选择-年月</view>
		  <DatePicke 
		  startYear="2016" 
		  endYear="2030" 
		  :val="selectedTime1"
		  @confirm="onConfirm" 
		  ref="DatePicke1"></DatePicke>
		  
		  <view class="bnt" @click="DatePicke2">日期选择-年月日</view>
		   <DatePicke 
		   startYear="2016" 
		   endYear="2030" 
		   :val="selectedTime2"
		   @confirm="onConfirm" 
		   ref="DatePicke2"></DatePicke>
		 
 <view class="bnt" @click="DatePicke3">日期选择-年月日时</view>
		   <DatePicke 
		   startYear="2016" 
		   endYear="2030" 
		   :val="selectedTime3"
		   @confirm="onConfirm" 
		   ref="DatePicke3"></DatePicke>
		   
		   <view class="bnt" @click="DatePicke4">日期选择-年月日时分</view>
		   		   <DatePicke 
		   		   startYear="2016" 
		   		   endYear="2030" 
		   		   :val="selectedTime4"
		   		   @confirm="onConfirm" 
		   		   ref="DatePicke4"></DatePicke>
				   
				   <view class="bnt" @click="DatePicke5">日期选择-年月日时分秒</view>
				   		   <DatePicke 
				   		   startYear="2016" 
				   		   endYear="2030" 
				   		   :val="selectedTime5"
				   		   @confirm="onConfirm" 
				   		   ref="DatePicke5"></DatePicke>
	          <view class="bnt" @click="DatePicke6">日期选择-默认</view>
			   <DatePicke 
			   @confirm="onConfirm" 
			   ref="DatePicke6"></DatePicke>
			   
			   <view class="bnt" @click="DatePicke7">日期选择-时分</view>
			    <DatePicke 
			    @confirm="onConfirm" 
				:val="selectedTime7"
			    ref="DatePicke7"></DatePicke>
				
				<view class="bnt" @click="DatePicke8">日期选择-时分秒</view>
				 <DatePicke 
				 @confirm="onConfirm" 
				 :val="selectedTime8"
				 ref="DatePicke8"></DatePicke>
			   
			   
		<view class="h3">回调内容:{{dataResult}}</view>
		
		<view class="h3">示例</view>
	  <view class="title">注：val如果为空,当时时间为默认选择时间。
	    <view>startYear日期选择开始年份 如果不填默认1970年 </view>
		<view>endYear日期选择结束年份 如果不填默认当前年份</view>
		<view>val 选择初始日期</view>
		<view>@confirm 点击确认的回调获取picker结果</view>
	  </view>

	</view>
</template>

<script>
	import DatePicke from "@/components/DatePicke/DatePicke";
		export default {
		components: {
				DatePicke,
			},
		data() {
			return {
				currentDate:"",
				dataResult:'',
				selectedTime0:"2019", //年
				selectedTime1:"2020-01" ,//当前选中时间YYYY-MM-DD hh:mm
				selectedTime2:"2020-11-02" ,//当前选中时间
				selectedTime3:"2019-02-01 18",//当前选中时间
				selectedTime4:"2020-11-02 23:22",//当前选中时间
				selectedTime5:"2020-11-02 23:22:24",//当前选中时间
				selectedTime7:"11:22",//当前选中时间
				selectedTime8:"12:22:23",//当前选中时间
			}
		},
		computed:{
		},
		watch:{
		 },
		onLoad(e) {
		},
		created() {
	    },
		methods: {
			DatePicke0(){
				this.$refs.DatePicke0.show();
			},
			DatePicke1(){
				this.$refs.DatePicke1.show();
			},
			DatePicke2(){
				this.$refs.DatePicke2.show();
			},
			DatePicke3(){
				this.$refs.DatePicke3.show();
			},
			DatePicke4(){
				this.$refs.DatePicke4.show();
			},
			DatePicke5(){
				this.$refs.DatePicke5.show();
			},
			DatePicke6(){
				this.$refs.DatePicke6.show();
			},
			DatePicke7(){
				this.$refs.DatePicke7.show();
			},
			DatePicke8(){
				this.$refs.DatePicke8.show();
			},
			//点击确定返回数据
			onConfirm(e){
				this.dataResult=e;
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
