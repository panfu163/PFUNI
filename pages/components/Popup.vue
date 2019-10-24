<template>
	<view class="content">
			<view class="bnt" @click="showToastTop">点击上部弹出Popup-top</view>
			<view class="bnt" @click="showToastCentre">点击中部弹出Popup-centre</view>
			<view class="bnt" @click="showToastBottom">点击下部弹出Popup-bottom</view>
			<view class="bnt" @click="showToastLeft">点击左侧弹出Popup-left</view>
			<view class="bnt" @click="showToastRight">点击右侧弹出Popup-right</view>
		<view class="h2">Popup</view>
		<view class="tip">Popup组件主要用于非模态信息提醒，无需用户交互。</view>
		<view><strong>注:</strong>由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<pre class="pre html">
			<element contenteditable="true">{{htmlData}}</element>
		  <!-- <span class="isCopy"  @click="copyHtml()">复制</span> -->
		</pre>
	  <view class="title">time 字段决定了 Popup 显示的时间，如果设置为 0，则不会消失，需要手动调用组件的 hide 方法。</view>
	  
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
					  <text>time</text>
					  <text>显示时间(如果设置为 0，则不会消失，需要手动调用组件的 hide 方法)</text>
					  <text>Number</text>
					  <text>3000</text>
					  <text>1.0.0</text>
		</view>
	  </view>
	<Popup ref="Popup1" :position="'top'"></Popup>
	<Popup ref="Popup2" :position="'middle'"></Popup>
	<Popup ref="Popup3" :position="'bottom'"></Popup>
	<Popup ref="Popup4" :position="'left'"></Popup>
	<Popup ref="Popup5" :position="'right'"></Popup>
	</view>
</template>

<script>
		import Popup from '../../components/Popup/Popup.vue'
		export default {
				components: {
				Popup,
			},
		data() {
			return {
				htmlData:`<Popup ref="Popup1" :position="'top'"></Popup>`,
				jsData:`export default {methods: {
					  showToast() { //显示头部
					   this.$refs.Popup.show({message:"显示在头部"});
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
	        showToastTop() { //显示头部
			  this.$refs.Popup1.show({message:"从上往下滑动"});
	        },
			showToastCentre(){ //显示中间
				 this.$refs.Popup2.show({message:"显示中间"});
			},
			showToastBottom(){ //显示在下面
				 this.$refs.Popup3.show({message:"向上滑"});
			},
			showToastLeft(){ //显示在左边
				this.$refs.Popup4.show({message:"向右滑"});
			},
			showToastRight(){ //显示在右面
				this.$refs.Popup5.show({message:"向左滑"});
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
