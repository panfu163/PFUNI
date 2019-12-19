<!--
  * ChechBox 多择
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
		<view class="h2">Checkbox 多选</view>
		<view class="tip">Checkbox组件主要用于多选，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
			
		<Checkbox :labelList="labelList" @getCheckBox="getCheckBox"></Checkbox>
		<view class="h2">第二中样式</view>
		<Checkbox :labelList="labelLists" :skin="'box'" @getCheckBox="getCheckBox"></Checkbox>
	</view>
</template>

<script>
	import {Checkbox} from '@/components/PFUNI.js'
		export default {
			components: {
				Checkbox,
			},
		data() {
			return {
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
