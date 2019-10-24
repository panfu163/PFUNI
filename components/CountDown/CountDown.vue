<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 倒计时
 @version 1.0
 @E-mail  panfu163@126.com
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