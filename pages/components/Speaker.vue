<template>
	<view class="content">
				<view  class="h2">横向滚动</view>
				<Speaker :vertical="false" :interval="5000" iconClass="icon-tubiao1jingyin" :list="list"></Speaker>
				<view  class="h2">竖向滚动</view>
				<Speaker :vertical="true" iconColor="#E76B61" :interval="5000" iconClass="icon-tubiao1jingyin" :list="list"></Speaker>
		 <view  class="h2">无缝滚动</view>
		 <Speaker :scrolling="true" iconColor="#E76B61" iconClass="icon-tubiao1jingyin">
			 <view>PFUIN兼容微信小程序、uni-app，一套代码多端发布！完美兼容 helloUniApp 框架 !</view>
		 </Speaker>
		<view class="h2">Speaker</view>
		<view class="tip">Speaker组件主要用于非模态信息提醒，无需用户交互。</view>
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
			  <text>list</text>
			  <text>要展示的数据</text>
			  <text>Array</text>
			  <text>[]</text>
			  <text>1.0.0</text>
		  </view>
			<view class="td">
					  <text>interval</text>
					  <text>滚动时间</text>
					  <text>Number</text>
					  <text>3000</text>
					  <text>1.0.0</text>
		</view>
		       <view class="td">
				  <text>iconClass</text>
				  <text>标图-字体图标class</text>
				  <text>String</text>
				  <text>false</text>
				  <text>1.0.0</text>
		</view>
       <view class="td">
				  <text>iconColor</text>
				  <text>标图颜色</text>
				  <text>String</text>
				  <text>#3688FF</text>
				  <text>1.0.0</text>
		</view>
			<view class="td">
				  <text>vertical</text>
				  <text>滚动方向</text>
				  <text>Boolean</text>
				  <text>true</text>
				  <text>1.0.0</text>
			</view>
	  </view>
	
	</view>
</template>

<script>
	import Speaker from '../../components/Speaker/Speaker.vue';     //导入
		export default {
			components: {
				Speaker,
			},
		data() {
			return {
			list : [
			              { title: "PFUIN 更快、更好的前端UI", url:"../index/index", opentype: "navigate"},
			              { title: "PFUIN- 精品 前端UI课程中心", url: "../index/index", opentype: "switchTab"}
			            ],	
			htmlData:`	<Speaker :vertical="true" iconColor="#E76B61" :interval="5000" iconClass="icon-youjian" :list="list"></Speaker>"
        >
        </Select>`,
				jsData:`import Speaker from '../../components/Speaker/Speaker.vue'`,
				jsData2:`export default {data(){
					return{
					list : [
					              { title: "PFUIN 更快、更好的前端UI", url:"../index/index", opentype: "navigate"},
					              { title: "PFUIN- 精品 前端UI课程中心", url: "../index/index", opentype: "switchTab"}
					            ]
					}
				  }
				}`,
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
			
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
