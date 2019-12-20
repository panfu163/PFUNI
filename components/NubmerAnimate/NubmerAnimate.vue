<!--*
  * NubmerAnimate 数值动画
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
	<text class="numAnimate">{{numAnimate}}</text>
</template>
<script>
export default{
	props:{
		num : { // 数值
			type : Number,
			default : 0
		},
		stepNumber : { // 动画步骤总数
			type : Number,
			default : 50
		},
		timer : { // 动画总时间
			type : Number,
			default : 800
		},
		keepInt : { // 是否保持整数形式递增
			type : Boolean,
			default : false
		}
	},
	data() {
		return {
			numAnimate : 0,
			intervalId : null
		}
	},
	created:function(){
		let timer = this.timer / this.stepNumber;
		let step  = Math.floor((this.num / this.stepNumber) * 100) / 100;
		this.intervalId = setInterval(() => {
			// 正值 
			if(this.num >= 0){
				if(this.numAnimate >= this.num){
					this.numAnimate = this.num;
					clearInterval(this.intervalId);
					return;
				}
			}else{
				if(this.numAnimate <= this.num){
					this.numAnimate = this.num;
					clearInterval(this.intervalId);
					return;
				}
			}
			let  res = this.numAnimate + step;
			this.numAnimate = this.keepInt ? parseInt(res) : Math.floor(res * 100) / 100;
		}, timer);
	}
}
</script>
<style lang="scss" scoped="scoped">
.numAnimate{
	font-size:24rpx;
}	
</style>