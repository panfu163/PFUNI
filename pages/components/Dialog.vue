<template>
	<view class="content">
		<view class="bnt" @click="showToast">点击Dialog</view>
		<view class="bnt" @click="showToast2">点击Dialog</view>
		<view class="h2">Dialog</view>
		<view class="tip">Dialog组件主要用于非模态信息提醒，无需用户交互。</view>
		<view><strong>注:</strong>由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">注意：如果没有特殊要求可以使用uniapp官网提供的uni.showModal()这个方法</view>
		<view class="h3">示例</view>
		<pre class="pre html">
			<element contenteditable="true">{{htmlData}}</element>
		  <!-- <span class="isCopy"  @click="copyHtml()">复制</span> -->
		</pre>
	  <view class="title">onConfirm调用组件的 hide 方法。</view>
	  
	  <pre  class="pre js">
	 <element contenteditable="true">{{jsData}}</element>
	  </pre >
	  <view class="list">
		  <view class="th">
			  <text>属性名</text>
			  <text>说明</text>
			  <text>类型</text>
			  <text>默认值</text>
			  <text>版本</text>
		  </view>
		  <view class="td">
			  <text>show</text>
			  <text>显示</text>
			  <text>function</text>
			  <text>无</text>
			  <text>1.0.0</text>
		  </view>
		<view class="td">
					  <text>hide</text>
					  <text>隐藏</text>
					  <text>function</text>
					  <text>无</text>
					  <text>1.0.0</text>
		</view>
					<view class="td">
					  <text>onCancel</text>
					  <text>取消</text>
					  <text>function</text>
					  <text>无</text>
					  <text>1.0.0</text>
		</view>
			<view class="td">
					  <text>isShow</text>
					  <text>是否显示背景色</text>
					  <text>Boolean</text>
					  <text>true</text>
					  <text>1.0.0</text>
		</view>
				<view class="td">
					  <text>onCancel</text>
					  <text>取消</text>
					  <text>function</text>
					  <text>无</text>
					  <text>1.0.0</text>
		</view>
	  </view>
	
	 <Dialogs ref="Dialog"></Dialogs>
	 <Toasts ref="Toast"></Toasts>
	</view>
</template>

<script>
	  import Dialogs from '../../components/Dialog/Dialog.vue'
	  import Toasts from '../../components/Toast/Toast.vue'
	  export default {
	    components: {
				Toasts,
				Dialogs
			},
		data() {
			return {
				htmlData:'<view @click="showToast"></view>',
				jsData:`export default {methods: {
					  showToast() { //显示头部
					   this.$refs.Dialog.show(
					   {message:"我是Dialog内容哦~~",
					   isShowBnt:true,
					   isShow:true,
					   onConfirm:()=>{
						    this.$refs.Toast.show("你点击啦确定确定哦~~");
					   },onCancel:()=>{
						   this.$refs.Toast.show("你点击啦取消")
					   }});
					}
				  }
				}`
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
	        showToast() { //显示头部
			   console.log("===========")
			   this.$refs.Dialog.show({message:"我是Dialog内容哦~~",
			   isShowBnt:true,
			   isShow:true,
			   onConfirm:()=>{
				    this.$refs.Toast.show("你点击啦确定确定哦~~");
			   },onCancel:()=>{
				   this.$refs.Toast.show("你点击啦取消")
			   }});
	        },
		   showToast2() { //显示头部
			   this.$refs.Dialog.show(
			   {message:"我是Dialog内容哦~~",
			   isShowBnt:true,
			   isShow:false,
			   onConfirm:()=>{
				    this.$refs.Toast.show("你点击啦确定确定哦~~");
			   },onCancel:()=>{
				   this.$refs.Toast.show("你点击啦取消")
			   }});
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
		}
		.th{
			background:#f8f8f8;
			display: flex;
			}
			text{
				display:inline-block;
				flex: 1;
				height:50upx;
				line-height:50upx;
				text-align:center;
				border-right:1upx solid #eee;
				}
		.td{
			display: flex;
			}
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
	.swipe,.swiper-warp{
		background:#2b9939;	
		}
}						
</style>	
