<!--
  * CountDown 倒计时
  * ============================================================================
  * 版权所有 2019-2024 www.pfuni.cn，并保留所有权利。
  * 网站地址: http://www.pfuni.cn；
  * ----------------------------------------------------------------------------
    * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
    * 使用；不允许对程序代码以任何形式任何目的的再发布。
    * 侵权必究，请遵守版权约定！
    * ============================================================================
    *version 1.0.0
    *author : PanFu 1150928736@qq.com 
    *last update date : 2019-12-06 14:39
  -->
<template name="CountDown">
   <view class="CountDown">
	  到计时  
   </view>
</template>
<script>
export default {
	name: "CountDown",
	props: {
		bgrColor: {
			type: String,
			default: "#FFFFFF"
		},
		borderColor:{
			type:String,
			default : "#000000"
		},
		fontColor: {
			type: String,
			default: "#000000"
		},
		fontSize: {
			type: String,
			default: "22rpx"
		},
		splitorColor: {
			type: String,
			default: "#000000"
		},
		timer:{
			type:String,
			default:""
		},
		width : {
			type:String,
			default:"40rpx"
		}
	},
	data() {
		return{}
	},
	created:function(e){
		
	},
	methods: {
   }
}
</script>
<style>

</style>