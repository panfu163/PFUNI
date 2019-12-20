<!--*
  * CirProgress 进度圆环/条
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
	<view :style="{width:width+'rpx', height:width+'rpx'}">
		<slot></slot>
	</view>
</template>
<script>
export default {
	name: "CirProgress",
	props: {
		canvasId:{
			type:String, 
			default:'',
		},
		width : {
			type : Number,
			default : 200
		},
		lineWidth: {
			type: Number,
			default: 10
		},
		bgColor:{
			type : String,
			default : "#F1F1F1"
		},
		progressColor:{
			type: String,
			default: "#00C777"
		},
		fontColor: {
			type: String,
			default: "#00C777"
		},
		value : {
			type : Number,
			default : 0
		},
		fontSize : {
			type: Number,
			default: 30
		},
		speed : {
			type : Number,
			default : 20
		}
	},
	data() {
		return {
			ctx : null,
			sets : {},
			oldVal : 0,
			canvas : {}
		}
	},
	created:function(){
		var $this		 = this; 
		var sets		 = {};
		sets.center		 = this.width / 2; // 圆心
		sets.lineWidth   = this.lineWidth; // 外层圆环宽
		sets.r = (this.width / 2) - (sets.lineWidth / 2); // 背景半径 = 外层
		sets.lineWidth2  = sets.lineWidth - 2; // 内层圆环宽
		this.sets        = sets;
		// 创建画布
		this.ctx =  wx.createCanvasContext(this.canvasId);
		this.drawAnimate(this.value);
	},
	watch:{
		value(val, val2){
			this.drawAnimate(val);
		}
	},
	methods: {
		drawAnimate: function (num){
			var $this = this;
			var step = 0;
			if ($this.oldVal > num) {
				for (var i = $this.oldVal; i >= num; i--) {
					(function(i){setTimeout(function(){$this.draw(i);}, step);})(i);
					step += $this.speed;
				}
			} else {
				for (var i = $this.oldVal; i <= num; i++) {
					(function(i){setTimeout(function(){$this.draw(i);}, step);})(i);
					step += $this.speed;
				}
			}
			$this.oldVal = num;
		},
		draw : function (num){
			if (num < 0) { num = 0;}
			if(num > 100){num = 100;}
			// 背景圆
			this.ctx.setLineWidth(this.sets.lineWidth);
			this.ctx.setStrokeStyle(this.bgColor);
			this.ctx.setLineCap('round');
			this.ctx.beginPath();
			this.ctx.arc(this.sets.center, this.sets.center, this.sets.r, 0, 2 * Math.PI, false);
			this.ctx.stroke();

			// 进度圆
			this.ctx.setLineWidth(this.sets.lineWidth2);
			this.ctx.setStrokeStyle(this.progressColor);
			this.ctx.setLineCap('round')
			this.ctx.beginPath();//开始一个新的路径
			num = (num / 100);
			this.ctx.arc(this.sets.center, this.sets.center, this.sets.r, 0 * Math.PI, num * 2 * Math.PI, false);
			this.ctx.stroke();

			// 文字
			this.ctx.setFillStyle(this.fontColor);
			this.ctx.setFontSize(this.fontSize);
			this.ctx.setTextAlign("center");
			this.ctx.setTextBaseline('middle');
			this.ctx.fillText(Math.round(num * 100) + "%", this.sets.center, this.sets.center);
			
			this.ctx.draw();
		}
	}
}
</script>
<style lang="scss" scoped>
</style>