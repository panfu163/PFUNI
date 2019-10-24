<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description textarea输入框
 @version 1.0
 @E-mail  panfu163@126.com
-->
<template>
	<view class="PFUIN-textarea">
		<view class="uni-textarea">
			<textarea  auto-height placeholder-style="color:#F76260"  @blur="blurFun()" @focus="focusFun()" @input="inputFun" maxlength="maxlength" placeholder="占位符字体是红色的"/>
		</view>
		<view class="bottom">字符200</view>
	</view>
</template>

<script>
export default {
	 name:'Textarea',
	 props: {
		  placeholderStyle:{
			type: String,
			default:'color:#F76260'
		  },
		  maxlength:{
			 type:Number,
			 default:-1 
		  }
		},
		data() {
			return {
			   visible:false,
			   message:'',
			   position:'placemiddle',
			   duration:2000,
			   icon:''
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
	        blurFun(e){ //输入框失去焦点时触发
				
			},
			focusFun(e){ //输入框聚焦时触发
				
			},
			inputFun(e){ //当键盘输入时
				
			},
		},
		 computed: {
			
        }
	}
</script>

<style lang="scss" scoped="scoped">
 .PFUIN-textarea{
	 padding:0;
	 margin:0;
	 .uni-textarea{
	    width: 100%;
		border: 1upx solid #eee;
		padding:20upx;
		display: block;
		min-height: 200upx;
		box-sizing: border-box; 
	 }
	 textarea{
		 width: 100%;
	 }
	 .bottom{
		 text-align: right;
		 width: 100%;
		 padding-top:10upx;
		 color:#333
	 }
 } 
</style>


