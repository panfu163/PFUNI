<!--
  * Cell 单元格
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
	<view v-if="!arrow" :class="{border:border}" @click="goTo" class="pf-cell">
		<view class="cell-left">
		  <view v-if="iconfont" class="icon-title"> 
		  <view class="iconfont" :class="iconfont"></view>	
		   {{title}}
		  </view>	
		  <template v-else>{{title}}</template>
		  <view v-if="label" class="label">{{label}}</view>
		</view>
		<view class="cell-right">{{val}}</view>
	</view>
	<view v-else class="pf-cell" :class="{border:border}" @click="goTo">
		<view class="cell-left">
		  <view v-if="iconfont" class="icon-title"> 
		  <view class="iconfont" :class="iconfont"></view>	
		   {{title}}
		  </view>	
		  <template v-else>{{title}}</template>
		  <view v-if="label" class="label">{{label}}</view>
		</view>
		<view class="cell-right" :class="arrow">{{val}}
		</view>
	</view>
</template>

<script>
export default {
	 name:'call',
	 props: {
		  title:{
			type: String,
			default:''
		  },
		  val:{
			type: String,
			default:''
		  },
		  label:{
			 type: String,
			 default:'' 
		  },
		  iconfont:{
				 type: String,
				 default:''  
		  },
		  arrow:{ 
			type: String,
			default:''   //箭头方向
		  },
		  url:{
			type: String,
			default:''   //链接地址  
		  },
		  border:{
			type:Boolean,
			default:false   //边线  
		  }
		},
		data() {
			return {
			   visible:false,
			   message:'',
			   position:'placemiddle',
			   duration:2000,
			   icon:''
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
			goTo(){
				if(!this.url){return}
				uni.navigateTo({
					url:this.url
				})
			}
	     },
		 computed: {
			
        }
	}
</script>

<style lang="scss" scoped="scoped">  
.pf-cell{
	width:100%;
	padding:0;
	background:#fff;
	display:flex;
	padding:30rpx 20rpx;
	border-bottom:1rpx solid #eee;
	position:relative;
	box-sizing:border-box;
	overflow:hidden;
	&.border{
		border:0;
	}
	.cell-left{
	  flex:4;
	  overflow:hidden;
	  text-align:left;
	  position:relative;
	  .label{
		  color:#969799
	   }
	   .icon-title{
		   padding:5rpx 0 5rpx 80rpx;
		   position:relative;
		.iconfont{
		   position:absolute;
		   top:0;
		   left:0;
		   font-size:40rpx
		}   
	   }

	}
	.cell-right{
	  flex:8;
	  overflow:hidden;
	  text-align:right;
	  color:#969799;
	  position:relative;
	  box-sizing:border-box;
	  &.left{
		 padding-right:30rpx;
		 position:relative;
		 &:after{
		   content: "";
		   position: absolute;
		   top:50%;
		   right:10rpx;
		   display: block;
		   border-bottom:1rpx solid #969799;
		   border-right:1rpx solid #969799;
		   z-index: 1000;
		   width:15rpx;
		   height:15rpx;
		   transform:translate(0,-50%) rotate(-45deg); 	
		 }
	  }
	  &.right{
	  		 padding-right:25rpx;
			 position:relative;
	  		 &:after{
	  		   content: "";
	  		   position: absolute;
	  		   top:50%;
	  		   right:0rpx;
	  		   display: block;
	  		   border-bottom:1rpx solid #969799;
	  		   border-right:1rpx solid #969799;
	  		   z-index: 1000;
	  		   width:15rpx;
	  		   height:15rpx;
	  		   transform:translate(0,-50%) rotate(135deg); 	
	  		 }
	  }
	  &.bottom{
	  		 padding-right:25rpx;
	  		 &:after{
	  		   content: "";
	  		   position: absolute;
	  		   top:50%;
	  		   right:10rpx;
	  		   display: block;
	  		   border-bottom:1rpx solid #969799;
	  		   border-right:1rpx solid #969799;
	  		   z-index: 1000;
	  		   width:15rpx;
	  		   height:15rpx;
	  		   transform:translate(0,-50%) rotate(45deg); 	
	  		 }
	  }
	  &.top{
	  		 padding-right:25rpx;
	  		 &:after{
	  		   content: "";
	  		   position: absolute;
	  		   top:50%;
	  		   right:10rpx;
	  		   display: block;
	  		   border-bottom:1rpx solid #969799;
	  		   border-right:1rpx solid #969799;
	  		   z-index: 1000;
	  		   width:15rpx;
	  		   height:15rpx;
	  		   transform:translate(0,0) rotate(-135deg); 	
	  		 }
	  }
	  
	}
}
</style>


