<template>
	<view class="content">
		<pfCheckbox :labelList="labelList" @getCheckBox="getCheckBox"></pfCheckbox>
		<view class="h2">第二中样式</view>
		<pfCheckbox :labelList="labelLists" :skin="'box'" @getCheckBox="getCheckBox"></pfCheckbox>
		
		<view class="h2">Checkbox</view>
		<view class="tip">Checkbox组件主要用于非模态信息提醒，无需用户交互。</view>
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
					  <text>duration</text>
					  <text>显示时间(如果设置为 0，则不会消失，需要手动调用组件的 hide 方法)</text>
					  <text>Number</text>
					  <text>2000</text>
					  <text>1.0.0</text>
		</view>
		       <view class="td">
				  <text>icon</text>
				  <text>显示加载图标</text>
				  <text>String</text>
				  <text>icon</text>
				  <text>1.0.0</text>
		</view>
             <view class="td">
				  <text>position</text>
				  <text>显示位置</text>
				  <text>String</text>
				  <text>placemiddle(top,bottom)</text>
				  <text>1.0.0</text>
		</view>
	  </view>
	 
	</view>
</template>

<script>
	import pfCheckbox from '../../components/Checkbox/Checkbox.vue'
		export default {
			components: {
				pfCheckbox,
			},
		data() {
			return {
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
				labelList:[{
					  name: '可爱',
					  value: '0',
					  checked:true
					},
					  {
						name: '性感',
						value: '1',
						checked: false
					  },
					  {
						name: '温柔',
						value: '2',
						checked: false
					  },
					  {
						name: '体贴',
						value: '3',
						checked: false
					  },
					  {
						name: '漂亮',
						value: '4',
						checked: false
					  },
					  {
						name: '温柔',
						value: '5',
						checked: false
					  },
					  {
						name: '体贴',
						value: '6',
						checked: false
					  },
					  {
						name: '漂亮',
						value: '7',
						checked: false
					  }],
					labelLists:[{
						name: '漂亮',
						value: '11',
						checked: false
					  },{
						name: '体贴',
						value: '23',
						checked: false
					  },]  
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
	      getCheckBox(e){
			  console.log(e)
			  console.log("到这里啦~~")
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
