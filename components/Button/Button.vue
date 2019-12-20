<!--
  * Button 按钮
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
   <view  class="pf-button" @click="onClick"  :class="[type,shape,{'plain':plain,'disabled':disabled}]">
	  <slot></slot>
   </view>
</template>
<script>
export default {
	name:"Button",
	props: {
		type:{
			type : String,
			default :"default" //按类型
		},
		plain:{
			type : String,
			default :""  //朴素按钮
		},
		disabled:{
			type : String,
			default :"" //禁用状态
		},
		shape:{
			type : String,
			default :"shape" //按形状
		},
		iconColor : {
			type : String,
			default : "#888888"
		},
		textColor : {
			type : String,
			default : "#888888"
		},
		click:{
			type:Function,
			require:true
		}
	},
	data(){
		return{
			className:this.types
		}
	},
	methods:{
		onClick(){
			this.$emit('click'); //点击
		}
	}
}
</script>
<style lang="scss" scoped="scoped">
.pf-button{
	position:relative;
	box-sizing:border-box;
	display:inline-block;
	padding: 0 30rpx;
	font-size: 12rpx;
	margin:0 16rpx 16rpx 0;
	height:74rpx;
	line-height:72rpx;
	text-align:center;
	border-radius:4rpx;
	transition:opacity 0.2s;
	&.default{
		color: #323233;
		background-color: #fff;
		border:1rpx solid #ebedf0;
	}
	&.primary{
		color: #fff;
		background-color: #07c160;
		border:1rpx solid #07c160;
	}
	&.info{
		color: #fff;
		background-color: #1989fa;
		border:1rpx solid #1989fa;
	}
    &.warning{
		color: #fff;
		background-color: #ff976a;
		border:1rpx solid #ff976a;
	}
	&.danger{
		color: #fff;
		background-color: #ee0a24;
		border:1rpx solid #ee0a24;	
	}	
    &:active::before{
        opacity:0.3;
    }
	&::before {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    width: 100%;
	    height: 100%;
	    background-color: #000;
	    border: inherit;
	    border-color: #000;
	    border-radius: inherit;
	    -webkit-transform: translate(-50%, -50%);
	    transform: translate(-50%, -50%);
	    opacity:0;
	    content:' ';
	}
	&.disabled::before{
		opacity:0.3;
	}
	&.round{
		border-radius:40rpx;
	}
}
.plain{
	background:none !important;
	&.default{
		color: #333;
		border:1rpx solid #ebedf0;
	}
	&.primary{
		color: #07c160;
		border:1rpx solid #07c160;
	}
	&.info{
		color: #1989fa;
		border:1rpx solid #1989fa;
	}
	&.warning{
		color: #ff976a;
		border:1rpx solid #ff976a;
	}
	&.danger{
		color: #ee0a24;
		border:1rpx solid #ee0a24;	
	}	
	&:active::before{
	    opacity:0.3;
	}
	&::before {
	    position: absolute;
	    top: 50%;
	    left: 50%;
	    width: 100%;
	    height: 100%;
	    background-color: #000;
	    border: inherit;
	    border-color: #000;
	    border-radius: inherit;
	    -webkit-transform: translate(-50%, -50%);
	    transform: translate(-50%, -50%);
	    opacity:0;
	    content:' ';
	}
    &.round{
    	border-radius:40rpx;
    }
}	
</style>