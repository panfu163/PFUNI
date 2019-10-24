<template>
	<view class="content">
	  <view class="bnt" @click='goto("../loadmore/loading")'>加载更多</view>
		<view class="h2">Toast</view>
		<view class="tip">Toast组件主要用于非模态信息提醒，无需用户交互。</view>
		<view><strong>注:</strong>由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<pre class="pre html">
			<element contenteditable="true">{{htmlData}}</element>
		  <!-- <span class="isCopy"  @click="copyHtml()">复制</span> -->
		</pre>
		<view class="title">基本用法</view>
		  <pre  class="pre js">
		<element contenteditable="true">{{jsData2}}</element>
		 </pre >
	  <view class="title">time 字段决定了 Toast 显示的时间，如果设置为 0，则不会消失，需要手动调用组件的 hide 方法。</view>
	  
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
			  <text>info</text>
			  <text>轮播图的数据，通过数组长度决定指示点个数</text>
			  <text>Array</text>
			  <text>无</text>
			  <text>1.0.0</text>
		  </view>
		<view class="td">
					  <text>current</text>
					  <text>当前指示点索引，必须是通过 swiper 的 change 事件获取到的 e.detail.current</text>
					  <text>Number	</text>
					  <text>0</text>
					  <text>1.0.0</text>
		</view>
			<view class="td">
					  <text>dotsStyles</text>
					  <text>指示点样式</text>
					  <text>Object</text>
					  <text>无</text>
					  <text>1.0.0</text>
		</view>
		       <view class="td">
				  <text>mode</text>
				  <text>指示点的类型，可选值：default 、 indexes 、 long 、nav</text>
				  <text>String</text>
				  <text>default</text>
				  <text>1.0.0</text>
		</view>
       <view class="td">
				  <text>field</text>
				  <text>mode 为 nav 时，显示的内容字段（mode = nav 时必填）</text>
				  <text>String</text>
				  <text>无</text>
				  <text>1.0.0</text>
		</view>
	  </view>
	
	</view>
</template>

<script>
		export default {
			components: {
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
