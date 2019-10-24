<template>
	<view class="content">
		  <view class="bnt" :class="[{'active':index==tabIndex}]" @tap="toggleTab(index)" v-for="(item,index) in tabList" :key="index">{{item.name}}</view>
		  <DatePickes :mode="mode" startYear="2016" endYear="2030" :defaultVal="defaultVal" @confirm="onConfirm" ref="DatePickes"></DatePickes>
		<view class="h3">回调内容：{{dataResult}}</view>
		<view class="h2">Picke</view>
		<view class="tip">Picke组件主要用于时间插件。</view>
		<view><strong>注:</strong>由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<pre class="pre html">
			<element contenteditable="true">{{htmlData}}</element>
		  <!-- <span class="isCopy"  @click="copyHtml()">复制</span> -->
		</pre>
	  <view class="title">注：mode类型：date、dateTime、time
	    <view>日期选择开始年份 如果不填默认1970年 </view>
		<view>endYear 日期选择结束年份 如果不填默认当前年份</view>
		<view>defaultVal 选择初始值</view>
		<view>@confirm 点击确认的回调获取picker结果</view>
	  </view>
	  
	  <pre  class="pre js">
	 <element contenteditable="true">{{jsData}}</element>
	  </pre>
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
					  <text>onConfirm</text>
					  <text>隐藏</text>
					  <text>function</text>
					  <text>点击确认的回调获取picker结果</text>
					  <text>1.0.0</text>
		</view>
	  </view>
	</view>
</template>

<script>
	 import DatePickes from '../../components/DatePicke/DatePicke.vue'
		export default {
		components: {
				DatePickes,
			},
		data() {
			return {
				htmlData:'<view @click="showToast"></view>',
				jsData:`export default {methods: {
					  showToast() { //显示头部
					   this.$refs.Picke.show({message:"显示在头部",position:"top"});
					}
				  }
				}`,
				tabList:[{
					mode:"date",
					name:"日期选择",
					value:[0,1,0]
				},{
					mode:"dateTime",
					name:"日期时间选择",
					value:[0,1,0,1,0]
				},{
					mode:"time",
					name:"时间选择",
					value:[1,1]
				}],
				tabIndex:0,
				dataResult:''
			}
		},
		computed:{
			mode(){//初始值
				return this.tabList[this.tabIndex].mode
			},
			defaultVal(){ //初始值
				return this.tabList[this.tabIndex].value
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
			toggleTab(index){
				this.tabIndex=index;
				this.$refs.DatePickes.show();
			},
			onConfirm(e){
				console.log(e)
				this.dataResult=JSON.stringify(e);
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
