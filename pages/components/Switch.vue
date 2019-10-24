<template>
	<view class="content">
		<pfSwitch @getChecked="getChecked" :Styles="'green'"></pfSwitch>
		<pfSwitch @getChecked="getChecked" :msg="false"></pfSwitch>
		<pfSwitch @getChecked="getChecked" :Styles="'blue'"></pfSwitch>
			<pfSwitch @getChecked="getChecked" :Styles="'grey'"></pfSwitch>
			
		<view class="h2">Switch</view>
		<view class="tip">Switch滑动开关，用于切换 on/off 状态。
		msg值true对应着 on 状态（开） ，msg值false对应着 off 状态（关）。</view>
		<view><strong>注:</strong>由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<pre class="pre html">
			<element contenteditable="true">{{htmlData}}</element>
		  <!-- <span class="isCopy"  @click="copyHtml()">复制</span> -->
		</pre>
		<view class="title">基本用法</view>
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
			  <text>msg</text>
			  <text>开关状态，双向数据绑定</text>
			  <text>Boolean</text>
			  <text>false</text>
			  <text>1.0.0</text>
		  </view>
		<view class="td">
					  <text>Styles</text>
					  <text>按钮背景颜色，可选择颜色red、black、green、blue、grey</text>
					  <text>String</text>
					  <text>red</text>
					  <text>1.0.0</text>
		</view>
		<view class="td">
			  <text>getChecked</text>
			  <text>返回方法</text>
			  <text>function</text>
			  <text>red</text>
			  <text>1.0.0</text>
		</view>
	  </view>

	</view>
</template>

<script>
	import pfSwitch from '../../components/Switch/Switch.vue'
		export default {
			components: {
				pfSwitch,
			},
			data() {
				return {
					htmlData:`<pfSwitch @getChecked="getChecked" :Styles="'blue'"></pfSwitch>`,
					jsData:`export default {methods: {
						getChecked(e){
							console.log(e)
						}
					  }
					}`
				}
			},
			onLoad(e) {
				
			},
			created(){
			  
			},
			methods: {
				getChecked(e){
					console.log(e)
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
