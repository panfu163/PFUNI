<!--
  * Dropload 弹出加载更多
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
	<view class="h2">Dropload 弹出加载更多</view>
	<view class="tip">Dropload组件主要用于非模态信息提醒，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
	  <view class="bnt" @click="getLoadMore">弹出加载更多</view>
	   <Dropload 
	       ref="myScroll"
		   :listData="items" 
		   @pullDown="pullDown"
		   @pullingUp="pullingUp"
		   v-if="isShow">
			<view class="loade-more-con" v-for="(item,index) in items" :key="index">
				<view class="left">
					<view class="img"></view>
				</view>
				<view class="righ">
					<view>{{item.name}}</view>
					<view>{{item.export}}</view>
				</view>
			</view>
		</Dropload>
	</view>
</template>

<script>
	  import {Dropload} from "@/components/PFUNI.js";
		export default {
			components: {
				Dropload
			},
		data() {
			return {
				items:[{
					name:"小張",
					export:"我是小明不是小张"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				}],
				htmlData:'<view @click="showToast"></view>',
				jsData:`export default {methods: {
					showToast() {
					 this.$refs.Toast.show({message:"提示信息",duration:0,position:"bottom",icon:true});
					}
				  }
				}`,
				jsData2:`export default {methods: {
					showToast() {
					 this.$refs.Toast.show("提示信息")
					}
				  }
				}`,
				isShow:false,
				page:1
			}
		},
		onLoad(e) {
		
		},
		created() {
			
	    },
		methods: {
	      getLoadMore(){
			  this.isShow=true;//显示加载更多
		  },
		  pullDown(){
			  this.page=1;
			   setTimeout((res)=>{
				   this.$refs.myScroll.setState("noPullDow");//更新成功
			   },2000)
		  },
		  pullingUp(){
			   this.page++
			 // console.log("上拉加载更多=========================") 
			 console.log(this.page+"====================")
			  if(this.page>20){
				  this.$refs.myScroll.setState("noPullUp");//加载完成
				  return;
			  }
			 setTimeout((res)=>{
				 let data=[{name:"王八"+this.page,export:"王八是新加的哦"},{name:"王八",export:"王八是新加的哦"}];
				 this.items = this.items.concat(data);
				 this.$refs.myScroll.setState("noPullUp");//加载完成			 
			 },5000)

		  }
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
.content{
	padding:40upx;
	box-sizing: border-box;
	font-size: 14upx;
	.bnt{
		  position: relative;
		  width:100%;
		  background: #2b9939;
		  color: #fff;
		  height:60upx;
		  line-height:60upx;
		  margin:0 auto 40upx;
		  text-align: center;
		  font-size: 16upx;
		  border-radius:10upx;
		 } 
	.h2{
		font-size:24upx; 
		margin-bottom:10upx; 
		font-weight: bold;
		}  
	.h3{
		 font-size:20upx; 
		 margin:20upx auto; 
		 font-weight: bold;
		 color:red;
	    }	 
	.tip{
		 font-size: 14upx; 
		 text-indent:15rpx; 
		 margin:20upx auto;
		} 
	.pre{
		 background:#eee;
		 color: #000;  
		 padding:20upx 20upx;
		 border-radius:10upx;
		 margin-bottom:10upx;
		 box-sizing: border-box;
		 overflow:auto;
		 word-wrap:normal;
		 element{
				width:100%;
				display:block;
				height: 100%;
				}
		 .isCopy{
				position:absolute;
				right:10upx;
				bottom:5upx;
				background: #55A532;
				color: #fff;
				padding:5upx;
				border-radius:2upx;
				}
		}		
	.html,.js{
		 position:relative;
		 }
	.html::before{
		content:"HTML";
		position:absolute;
		top:0;
		right:12upx;
		color:#999;
		}
	.js::before{
		content:"JS";
		position:absolute;
		top:0;
		right:12upx;
		color:#999;
		}
	.title{
		margin:20upx auto;
		}
	.list{
		border:1upx solid #eee;
		border-right:0;
		border-bottom:0;
		margin:20upx auto;
		.th{
			background:#f8f8f8;
			display: flex;
			text{
				display:inline-block;
				flex: 1;
				height:50upx;
				line-height:50upx;
				text-align:center;
				border-right:1upx solid #eee;
				}
			}	
		.td{
			display: flex;
			text{
					display:inline-block;
					flex: 1;
					text-align:center;
					min-height:50upx;
					line-height:50upx;
					border-right:1upx solid #eee;
					border-bottom:1upx solid #eee;
					padding:20upx auto;
					overflow: hidden; 
			   }
			}
	   }				
	.loade-more-con{
	  background: #fff;	
	  display: flex;
	  padding:10upx;
	  box-sizing: border-box;
	  border-bottom:1upx solid #eee;
	  .left{
		  width:20%;
		  .img{
			  background: #eee;
			  height:80upx;
			  width:80upx;
			  margin: 0 auto;
		  }
	  }
	  .right{
		  width: 80%;
	  }
	}				
}						
</style>	
