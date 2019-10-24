<template>
	<view class="content">
		<Upload ref="Upload" 
		        :url="url"
				:buttonName="buttonName"
			    :imgNumber="imgNumber"
				:buttonColor="buttonColor">
		</Upload>
		<view class="h2">Upload</view>
		<view class="tip">Upload组件主要用于非模态信息提醒，无需用户交互。</view>
		<view><strong>注:</strong>由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<pre class="pre html">
			<element contenteditable="true">{{htmlData}}</element>
		  <!-- <span class="isCopy"  @click="copyHtml()">复制</span> -->
		</pre>
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
			  <text>url</text>
			  <text>上传地址</text>
			  <text>String</text>
			  <text>无</text>
			  <text>1.0.0</text>
		  </view>
		<view class="td">
					  <text>buttonName</text>
					  <text>按钮名称</text>
					  <text>String</text>
					  <text>确定</text>
					  <text>1.0.0</text>
		</view>
			<view class="td">
					  <text>imgNumber</text>
					  <text>限制上传数量</text>
					  <text>Number</text>
					  <text>100</text>
					  <text>1.0.0</text>
		</view>
	  </view>
		<view class="td">
						  <text>buttonName</text>
						  <text>按钮名称</text>
						  <text>String</text>
						  <text>确定</text>
						  <text>1.0.0</text>
			</view>
				<view class="td">
						  <text>imgNumber</text>
						  <text>限制上传数量</text>
						  <text>Number</text>
						  <text>100</text>
						  <text>1.0.0</text>
			</view>
				<view class="td">
						  <text>buttonColor</text>
						  <text>图标背景色</text>
						  <text>String</text>
						  <text>#2b9939</text>
						  <text>1.0.0</text>
			</view>
	</view>
	</view>
</template>

<script>
	import Upload from '../../components/Upload/Upload.vue'
		export default {
			components: {
				Upload,
			},
		data() {
			return {
				htmlData:'<Upload ref="Upload" :url="url" :buttonName="buttonName"></Upload>',
				jsData:`无`,
				url:'https://www.example.com/upload', //上传地址
				buttonName:'上传图片',
				imgNumber:10, //图片上传数量
				buttonColor:'#2b9939',//上传图标颜色
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods:{
			
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
