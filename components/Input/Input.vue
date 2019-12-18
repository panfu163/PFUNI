<!--*
  * Input 表单
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
	<view class="input-box">
		<slot></slot>
		<view  class="title" v-show="title" v-html="title"></view>
		<view class="iconfont" :class="iconLeft" v-show="iconLeft"></view>
		<input class="inputBox" :class="{'input-left':iconLeft,'input-right':iconRight}"
		      :disabled="disabled" 
			  :placeholder="placeholder" 
			  :value="value"
			  :name="name"
			  :type='type'
			  @focus="focus" 
			  @blur="blur" 
			  @input="input"
			  />
	 <view class="iconfont icon-right" :class="iconRight" v-show="iconRight"></view>		  
	</view>		  
</template>

<script>
export default {
	 name:'Input',
	 props: {
		  disabled:{
			type:Boolean,
			default:false
		  },
		  placeholder:{
		  			type:String,
		  			default:'',
		  },
		  value:{
		  			type:String,
		  			default:'',
		  },
		  name:{
				type: String,
				value: ''
			},
		  type:{
					type:String,
					default:'text'
				},
		  title:{
				type: String,
				default:''
			  },
		   iconLeft:{
				type: String,
				default:''
			  },
		   iconRight:{
				type: String,
				default:''
			  },					
		},
		data() {
			return {
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
	      input(e){
			 var val = e.detail.value;
			   //console.log(val)
			   this.$emit("input",e);
		  },
		  focus(e){
			 // console.log(e)
		  },
		  blur(e){
			  //console.log(e)
		  }
		},
		 computed: {
			
        }
	}
</script>

<style lang="scss" scoped="scoped">
 .input-box{
	 display: flex;
	 position: relative;
	 box-sizing: border-box;
	 width:100%;
	 .title{
		 font-size:32rpx;
		 margin-bottom:20rpx;
		 line-height:80rpx;
		 padding-right:40rpx;
	 }
	 .iconfont{
		 position: absolute;
		 top:15rpx;
		 left:15rpx;
		 font-size:40rpx;
		 color:#999
	 }
	 .icon-right{
		 position: absolute;
		 top:15rpx;
		 left:91%;
		 font-size:40rpx;
		 color:#999
	 }
	 .inputBox{
		 flex:1;
		 border:1rpx solid #eee;
		 padding:20rpx 40rpx;
		 display:block;
		 position:relative;
		 margin-bottom:20rpx;
		 overflow:hidden;
		 height:100%;
		 }
	.input-left{
		padding-left:100rpx
	 }	
	 .input-right{
		 padding-right:100rpx
	 }
 }
</style>


