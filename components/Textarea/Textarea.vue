<!--*
  * Textarea 表单
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
	<view class="pf-textarea">
		<view class="pf-textarea">
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
 .pf-textarea{
	 padding:0;
	 margin:0;
	 .pf-textarea{
	    width: 100%;
		border: 1rpx solid #eee;
		padding:20rpx;
		display: block;
		min-height:200rpx;
		box-sizing: border-box; 
	 }
	 textarea{
		 width: 100%;
	 }
	 .bottom{
		 text-align: right;
		 width: 100%;
		 padding-top:10rpx;
		 color:#333
	 }
 } 
</style>


