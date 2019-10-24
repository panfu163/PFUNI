<template>
	<view class="content">
       <image class="logo" src="../../static/logo.png"></image>
	   <view class="explain">
		   {{title}}一款基于UNI-APP开发跨平台应用实现的精致移动端组件库，编写一套代码，
		   可编译到iOS、Android、H5、小程序等多个平台。 
	   </view>
	     <view class="list">
	   		    <view class="title">Basics 基础组件</view>
				<view class="info" @click='goto("../components/Toast")'><i class="iconfont icon-arrowright"></i>Toast</view>
				<view class="info" @click='goto("../components/Dialog")'><i class="iconfont icon-arrowright"></i>Dialog</view>   
	   			<view class="info" @click='goto("../components/Popup")'><i class="iconfont icon-arrowright"></i>Popup</view>
	   			<view class="info" @click='goto("../components/Picke")'><i class="iconfont icon-arrowright"></i>Picke</view>
	   			<view class="info" @click='goto("../components/DatePicke")'><i class="iconfont icon-arrowright"></i>DatePicke</view>
				<view class="info" @click='goto("../components/CountDown")'><i class="iconfont icon-arrowright"></i>CountDown</view>
	   </view>
	   <view class="list">
		    <view class="title">Scorll 滚动组件</view>
		   	<view class="info" @click='goto("../components/Scorll")'><i class="iconfont icon-arrowright"></i>Scorll</view>
			<view class="info" @click='goto("../components/IndexList")'><i class="iconfont icon-arrowright"></i>IndexList</view>
			<view class="info" @click='goto("../components/Swipe")'><i class="iconfont icon-arrowright"></i>Swipe</view>
			<view class="info" @click='goto("../components/Dropload")'><i class="iconfont icon-arrowright"></i>Dropload
			 <text class="text">弹出使用-不适合放长列表(uniapp官方说明)</text>
			</view>
			<view class="info" @click='goto("../components/LoadMore")'><i class="iconfont icon-arrowright"></i>LoadMore
			 <text class="text">适合放长列表</text>
			</view>
			<view class="info" @click='goto("../components/Speaker")'><i class="iconfont icon-arrowright"></i>Speaker
			 <text class="text">滚动公告</text>
			</view>
	   </view>
	     <view class="list">
	   		    <view class="title">Form 表单组件</view>
	   		   	<view class="info" @click='goto("../components/ChechBox")'><i class="iconfont icon-arrowright"></i>ChechBox</view>
	   			<view class="info" @click='goto("../components/Radio")'><i class="iconfont icon-arrowright"></i>Radio</view>
	   			<view class="info" @click='goto("../components/Input")'><i class="iconfont icon-arrowright"></i>Input</view>
	   			<view class="info" @click='goto("../components/Textarea")'><i class="iconfont icon-arrowright"></i>Textarea</view>
			    <view class="info" @click='goto("../components/Select")'><i class="iconfont icon-arrowright"></i>Select</view>
				<view class="info" @click='goto("../components/Switch")'><i class="iconfont icon-arrowright"></i>Switch</view>
				<view class="info" @click='goto("../components/Upload")'><i class="iconfont icon-arrowright"></i>Upload</view>
	   </view>
	   <view class="list">
	   	   		    <view class="title">Example 常用实例</view>
	   	   		   	<view class="info" @click='goto("../../pagesA/LoadingMore")'>
					<i class="iconfont icon-arrowright"></i>上拉加载</view>
	  </view>
	  <view class="list">
			<view class="title">subPackages 分包常用实例</view>
			<view class="info" @click='goto("../../pagesA/LoadingMore")'>
			<i class="iconfont icon-arrowright"></i>上拉加载</view>
	  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'PFUNI'
			}
		},
		onLoad(e) {
			
		},
		created() {
        
        },
		methods: {
            goto(url) {
                uni.navigateTo({
                    url:url
                })
            }
		}
	}
</script>

<style lang="scss" scoped="scoped">
.content{ 
	 width:100%;
	 height: 100%;
	 position:absolute;
	 top:0;
	 left:0;
	 overflow:auto;
	 box-sizing:border-box;
	 background:#f5f5f5;
	 -webkit-overflow-scrolling:touch;
	 .logo{
		  height:100upx;
		  width:100upx;
		  font-size:200upx;
		  color:#2b9939;
		  margin:50upx auto;
		  display: block;
		  }
	 .explain{
		  font-size:30upx;
		  color: #0d0d0d;
		  text-align:justify;
		  margin:20upx auto 40upx;
		  padding:0 50upx;
		  box-sizing: border-box;
		  text-indent:50upx;
	    }	  
     .list{
		  box-sizing: border-box;
		  background: #fff;
		  overflow: hidden;
		  font-size:18upx;
		  .title{
			   padding:20upx 20upx; 
			   font-size:24upx;
			   border-bottom:1upx solid #eee;
			   font-weight: bold;
			   color: #2b9939;
			   }
		  .info{
			   position:relative;
			   padding:20upx 40upx;
			   border-bottom:1upx;
			   border-bottom:1upx solid #eee;
			   .text{
				 position: absolute;
				 top:20upx;
				 right:70upx;
				 color:#999;  
			   }
			   .iconfont{
				   position: absolute;
				   top:20upx;
				   right:0;
				   color:#999;
			       padding:0 20upx 0 0;
			   }
			}	   
	   }
}
</style>
