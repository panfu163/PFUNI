<!--
  * ucharts 折线图
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
  *last update date : 2021-03-04 00:00
-->  
<template>
	<view>
		<view class="h3">uCharts高性能跨全端图表</view>
		<view class="h4">官网:https://www.ucharts.cn/ <br>
		在线文档1:https://www.kancloud.cn/qiun/ucharts/1073940<br>
		在线文档2:http://doc.ucharts.cn/1073940
		</view>
		<view class="qiun-columns">
			<view class="qiun-bg-white qiun-title-bar qiun-common-mt" >
				<view class="qiun-title-dot-light">基本折线图</view>
			</view>
			<view class="qiun-charts" >
				<canvas canvas-id="canvasLineA" id="canvasLineA" class="charts" @touchstart="touchLineA"></canvas>
			</view>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaLineA=null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(500);
			this.getServerData();
		},
		methods: {
			getServerData(){
				// uni.request({
				// 	url: 'https://www.ucharts.cn/data.json',
				// 	data:{
				// 	},
				// 	success: function(res) {
				// 		console.log(res.data.data)
				// 		let LineA={categories:[],series:[]};
				// 		//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
				// 		LineA.categories=res.data.data.LineA.categories;
				// 		LineA.series=res.data.data.LineA.series;
				// 		_self.showLineA("canvasLineA",LineA);
				// 	},
				// 	fail: () => {
				// 		_self.tips="网络错误，小程序端请检查合法域名";
				// 	},
				// });
				
				let LineA={
						categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
						series: [{
							name: '成交量A',
							data: [35, 20, 25, 37, 4, 20],
							color: '#F8C331'
						}, {
							name: '成交量B',
							data: [70, 40, 65, 100, 44, 68]
						}, {
							name: '成交量C',
							data: [100, 80, 95, 150, 112, 132]
						}]
					}
				
				this.showLineA("canvasLineA",LineA);
				
			},
			showLineA(canvasId,chartData){
				canvaLineA=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'line',
					fontSize:11,
					legend:{show:true},
					dataLabel:false,
					dataPointShape:true,
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					xAxis: {
						type:'grid',
						gridColor:'#CCCCCC',
						gridType:'dash',
						dashLength:8
					},
					yAxis: {
						gridType:'dash',
						gridColor:'#CCCCCC',
						dashLength:8,
						splitNumber:5,
						min:10,
						max:180,
						format:(val)=>{return val.toFixed(0)+'元'}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					extra: {
						line:{
							type: 'straight'
						}
					}
				});
				
			},
			touchLineA(e) {
				canvaLineA.showToolTip(e, {
					format: function (item, category) {
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			}
		}
	}
</script>

<style>
	.h3{
	   padding:20rpx;
	   font-size:28rpx;
	   font-weight:700;
	}
	.h4{
	   padding:20rpx;
	   font-size:24rpx;
	}
	.qiun-title-dot-light{
		padding:20rpx;
		font-size:24rpx;
	}
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 750rpx;
		height: 500rpx;
		background-color: #FFFFFF;
	}
</style>
