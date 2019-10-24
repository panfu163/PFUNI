<template>
	<view class="content">
		<view class="h2">示例1</view>
		 <CountDown>CountDown</CountDown>
		<view class="h2">CountDown</view>
		<view class="tip">CountDown组件主要用于非模态信息提醒，无需用户交互。</view>
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
					  <text>clearable</text>
					  <text>是否显示清除按钮</text>
					  <text>Boolean</text>
					  <text>true</text>
					  <text>1.0.0</text>
		</view>
			<view class="td">
					  <text>initValue</text>
					  <text>第一次显示时默认选中的文本</text>
					  <text>String</text>
					  <text>无</text>
					  <text>1.0.0</text>
		</view>
		       <view class="td">
				  <text>isCanInput</text>
				  <text>是否可以输入值</text>
				  <text>Boolean</text>
				  <text>false</text>
				  <text>1.0.0</text>
		</view>
       <view class="td">
				  <text>placeholder</text>
				  <text>占位符</text>
				  <text>String</text>
				  <text>请选择</text>
				  <text>1.0.0</text>
		</view>
		 <view class="td">
						  <text>style_Container</text>
						  <text>组件根节点的行内样式</text>
						  <text>String</text>
						  <text>无</text>
						  <text>1.0.0</text>
				</view>
				<view class="td">
										  <text>disabled</text>
										  <text>是否禁用整个选择框</text>
										  <text>Boolean</text>
										  <text>false</text>
										  <text>1.0.0</text>
								</view>
			<view class="td">
								  <text>showItemNum</text>
								  <text>显示列表的窗口高度，数字表示能显示几个列表项</text>
								  <text>Number</text>
								  <text>5</text>
								  <text>1.0.0</text>
			</view>
			<view class="td">
								  <text>listShow</text>
								  <text>第一次显示时是否显示列表</text>
								  <text>Boolean</text>
								  <text>false</text>
								  <text>1.0.0</text>
			</view>
			<view class="td">
								  <text>isCheckbox</text>
								  <text>是否显示多选</text>
								  <text>Boolean</text>
								  <text>false</text>
								  <text>1.0.0</text>
			</view>
			<view class="td">
								  <text>isCheckbox</text>
								  <text>指定选中项,从0开始</text>
								  <text>Array</text>
								  <text>[]</text>
								  <text>1.0.0</text>
			</view>
	  </view>
	
	</view>
</template>

<script>
	import CountDown from '../../components/CountDown/CountDown.vue';     //导入
		export default {
			components: {
				CountDown,
			},
		data() {
			return {
			htmlData:`<Select 
            :list="list"
            :clearable="false"
            :showItemNum="5" 
            :listShow="true"
            :isCanInput="true"  
            :style_Container="'height:100upx;font-size:20upx;'"
            :placeholder = "'placeholder'"
            :initValue="'苹果'"
        >
        </Select>`,
				jsData:`import Select from '../../components/Select/Select.vue'`,
				jsData2:`export default {data(){
					return{
					list: ['苹果',{value: '香蕉', disabled: true},'葡萄','芒果','大白菜']
					}
				  }
				}`,
				 list: ['苹果',{value: '香蕉', disabled: true},'葡萄','芒果','大白菜',],
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
         getList(e){
			 console.log("获取据据")
			 console.log(e)
		 },
		 moreGetList(e){
			console.log("获取据据")
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
