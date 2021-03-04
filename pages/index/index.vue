<!--
  * Index 组件首页
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
       <image class="logo animated slideInUp" src="../../static/logo.png"></image>
	   <view class="explain animated slideInUp">
		   {{title}}一款基于UNI-APP开发跨平台应用实现的精致移动端组件库，编写一套代码，
		   可编译到iOS、Android、H5、小程序等多个平台。 
	   </view>
	   <view class="list animated slideInUp">
	     <view class="title">基础样式</view>
		 <view class="info" @click='goto("../components/Layout")'><i class="iconfont icon-arrowright"></i>Layout <text class="text">布局</text></view>
		 <view class="info" @click='goto("../components/Button")'><i class="iconfont icon-arrowright"></i>Button <text class="text">按钮</text></view>
		 <view class="info" @click='goto("../components/Border")'><i class="iconfont icon-arrowright"></i>Border <text class="text">边框</text></view>
		 <view class="info" @click='goto("../components/Cell")'><i class="iconfont icon-arrowright"></i>Cell <text class="text">单元格</text></view>
		 <view class="info" @click='goto("../components/Loading")'><i class="iconfont icon-arrowright"></i>Loading <text class="text">加载图标</text></view>
		 <!-- <view class="info" @click='goto("../components/Icon")'><i class="iconfont icon-arrowright"></i>Icon<text class="text">图标</text></view> -->
		 </view>
	     <view class="list animated slideInUp">
	   		    <view class="title">Basics 基础组件</view>
				<view class="info" @click='goto("../components/Toast")'><i class="iconfont icon-arrowright"></i>Toast</view>
				<view class="info" @click='goto("../components/Confirm")'><i class="iconfont icon-arrowright"></i>Confirm</view>   
	   			<view class="info" @click='goto("../components/Popup")'><i class="iconfont icon-arrowright"></i>Popup</view>
	   			<view class="info" @click='goto("../components/Picke")'><i class="iconfont icon-arrowright"></i>Picke</view>
	   			<view class="info" @click='goto("../components/DatePicke")'><i class="iconfont icon-arrowright"></i>DatePicke</view>
				<view class="info" @click='goto("../components/Calendar")'><i class="iconfont icon-arrowright"></i>Calendar<text class="text">酒店日期时间选择</text></view>
				<view class="info" @click='goto("../components/CountDown")'><i class="iconfont icon-arrowright"></i>CountDown <text class="text">倒进时</text></view>
				<view class="info" @click='goto("../components/NubmerAnimate")'><i class="iconfont icon-arrowright"></i>NubmerAnimate<text class="text">数值动画</text></view>
	            <view class="info" @click='goto("../components/NavBar")'><i class="iconfont icon-arrowright"></i>NavBar<text class="text">切换导航</text></view>
				<view class="info" @click='goto("../components/CirProgress")'><i class="iconfont icon-arrowright"></i>CirProgress<text class="text">进度圆环/条</text></view>
			    <view class="info" @click='goto("../components/LotteryDraw")'><i class="iconfont icon-arrowright"></i>LotteryDraw<text class="text">抽奖大转盘</text></view>
	            <view class="info" @click='goto("../components/Keyboard")'><i class="iconfont icon-arrowright"></i>Keyboard<text class="text">移动端键盘</text></view>
	   </view>
	   <view class="list animated slideInUp">
		    <view class="title">Scorll 滚动组件</view>
		   	<view class="info" @click='goto("../components/Scorll")'><i class="iconfont icon-arrowright"></i>Scorll</view>
			<view class="info" @click='goto("../components/IndexList")'><i class="iconfont icon-arrowright"></i>IndexList</view>
			<view class="info" @click='goto("../components/Swipe")'><i class="iconfont icon-arrowright"></i>Swipe</view>
			<view class="info" @click='goto("../components/SlideList")'><i class="iconfont icon-arrowright"></i>SlideList<text class="text">滑动删除</text></view>
			<view class="info" @click='goto("../components/VideoSwipe")'><i class="iconfont icon-arrowright"></i>VideoSwipe<text class="text">视频图片焦点图</text></view>
			<view class="info" @click='goto("../components/Speaker")'><i class="iconfont icon-arrowright"></i>Speaker<text class="text">滚动公告</text></view>
			<view class="info" @click='goto("../components/Dropload")'><i class="iconfont icon-arrowright"></i>Dropload<text class="text">弹出使用-不适合放长列表</text></view>
			<view class="info" @click='goto("../components/Lazyload")'><i class="iconfont icon-arrowright"></i>Lazyload<text class="text">赖加载</text></view>
	   </view>
	     <view class="list animated slideInUp">
	   		    <view class="title">Form 表单组件</view>
	   		   	<view class="info" @click='goto("../components/ChechBox")'><i class="iconfont icon-arrowright"></i>ChechBox</view>
	   			<view class="info" @click='goto("../components/Radio")'><i class="iconfont icon-arrowright"></i>Radio</view>
	   			<view class="info" @click='goto("../components/Input")'><i class="iconfont icon-arrowright"></i>Input</view>
	   			<view class="info" @click='goto("../components/Textarea")'><i class="iconfont icon-arrowright"></i>Textarea</view>
			    <view class="info" @click='goto("../components/Select")'><i class="iconfont icon-arrowright"></i>Select</view>
				<view class="info" @click='goto("../components/Switch")'><i class="iconfont icon-arrowright"></i>Switch</view>
				<view class="info" @click='goto("../components/Upload")'><i class="iconfont icon-arrowright"></i>Upload</view>
	   </view>
	   <view class="list animated slideInUp">
	   	   		    <view class="title">Example 常用实例</view>
	                <view class="info" @click='goto("../example/LoadingMore")'><i class="iconfont icon-arrowright"></i>上拉下拉加载<text class="text">适合放长列表</text></view>
					<view class="info" @click='goto("../components/Login")'><i class="iconfont icon-arrowright"></i>Login<text class="text">弹框登录</text></view>
					<view class="info" @click='goto("../seat/seat")'><i class="iconfont icon-arrowright"></i>seat<text class="text">电影购票选座</text></view>
					<view class="info" @click='goto("../components/lang")'><i class="iconfont icon-arrowright"></i>lang<text class="text">多国语言切换</text></view>
					<view class="info" @click='goto("../components/qrcode")'><i class="iconfont icon-arrowright"></i>qrcode<text class="text">二维码生成器</text></view>
					<view class="info" @click='goto("../components/share")'><i class="iconfont icon-arrowright"></i>share<text class="text">微信小程序分享和保存二维码</text></view>
					
	  </view>
	  <view class="list animated slideInUp">
			<view class="title">subPackages 分包常用实例</view>
			<view class="info" @click='goto("../list/LoadingMore")'><i class="iconfont icon-arrowright"></i>上拉加载</view>
	  </view>
	  <view class="list animated slideInUp">
	  			<view class="title">ucharts 高性能跨全端图表</view>
				<view class="info" @click='goto("../echarts/line")'><i class="iconfont icon-arrowright"></i>折线图</view>
				<view class="info" @click='goto("../echarts/histogram")'><i class="iconfont icon-arrowright"></i>柱状图</view>
				<view class="info" @click='goto("../echarts/pie")'><i class="iconfont icon-arrowright"></i>饼图</view>
				<!--
				<view class="info" @click='goto("../echarts/bar")'><i class="iconfont icon-arrowright"></i>条形图</view>
				<view class="info" @click='goto("../echarts/ring")'><i class="iconfont icon-arrowright"></i>环图</view>
				<view class="info" @click='goto("../echarts/funnel")'><i class="iconfont icon-arrowright"></i>漏斗图</view>
				<view class="info" @click='goto("../echarts/radar")'><i class="iconfont icon-arrowright"></i>瀑布图</view>
				<view class="info" @click='goto("../echarts/map")'><i class="iconfont icon-arrowright"></i>地图</view>
				<view class="info" @click='goto("../echarts/sankey")'><i class="iconfont icon-arrowright"></i>桑基图</view>
				<view class="info" @click='goto("../echarts/sankey")'><i class="iconfont icon-arrowright"></i>热力图</view>
				<view class="info" @click='goto("../echarts/sankey")'><i class="iconfont icon-arrowright"></i>散点图</view>
				<view class="info" @click='goto("../echarts/sankey")'><i class="iconfont icon-arrowright"></i>k线图</view>
				<view class="info" @click='goto("../echarts/sankey")'><i class="iconfont icon-arrowright"></i>仪表盘</view>
				<view class="info" @click='goto("../echarts/sankey")'><i class="iconfont icon-arrowright"></i>树图</view>
	            <view class="info" @click='goto("../echarts/sankey")'><i class="iconfont icon-arrowright"></i>百度地图</view>
                <view class="info" @click='goto("../echarts/sankey")'><i class="iconfont icon-arrowright"></i>高德地图</view>-->	
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
	 font-size:24rpx;
	 .logo{
		  height:100rpx;
		  width:100rpx;
		  font-size:200rpx;
		  color:#2b9939;
		  margin:50rpx auto;
		  display: block;
		  }
	 .explain{
		  font-size:30rpx;
		  color: #0d0d0d;
		  text-align:justify;
		  margin:20rpx auto 40rpx;
		  padding:0 50rpx;
		  box-sizing: border-box;
		  text-indent:50rpx;
	    }	  
     .list{
		  box-sizing: border-box;
		  background: #fff;
		  overflow: hidden;
		  font-size:18rpx;
		  .title{
			   padding:20rpx 20rpx; 
			   font-size:24rpx;
			   border-bottom:1rpx solid #eee;
			   font-weight: bold;
			   color: #2b9939;
			   }
		  .info{
			   position:relative;
			   padding:20rpx 40rpx;
			   border-bottom:1rpx;
			   border-bottom:1rpx solid #eee;
			   font-size:24rpx;
			   .text{
				 position: absolute;
				 top:20rpx;
				 right:70rpx;
				 color:#999;
				 font-size:24rpx;  
			   }
			   .iconfont{
				   position: absolute;
				   top:20rpx;
				   right:0;
				   color:#999;
			       padding:0 20rpx 0 0;
			   }
			}	   
	   }
}
</style>
