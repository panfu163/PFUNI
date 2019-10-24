<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description input
 @version 1.0
 @E-mail  panfu163@126.com
-->
<template>
	<view class="input-box">
		<slot></slot>
		<view  class="title" v-show="title">{{title}}</view>
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
		 font-size: 12upx;
		 margin-bottom:20upx;
		 line-height:70upx;
		 padding-right:40upx;
	 }
	 .iconfont{
		 position: absolute;
		 top:15upx;
		 left:15upx;
		 font-size:40upx;
		 color:#999
	 }
	 .icon-right{
		 position: absolute;
		 top:15upx;
		 left:91%;
		 font-size:40upx;
		 color:#999
	 }
	 .inputBox{
		 flex:1;
		 border:1upx solid #eee;
		 padding:10upx 20upx;
		 display:block;
		 position:relative;
		 margin-bottom:20upx;
		 }
	.input-left{
		padding-left:100upx
	 }	
	 .input-right{
		 padding-right:100upx
	 }
 }
</style>


