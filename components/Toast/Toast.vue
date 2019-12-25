<!--
  * Toast 提示信息
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
	<view>
		<view v-if="visible"  class="pf-toast"  :class="position=='top'?'placetop':position=='bottom'?'placebottom':'placemiddle'">
			  <image v-if="icon=='icon'" class="loading" src="../../static/loading.gif"></image>
			  <view>{{message}}</view>
		</view>
	</view>
</template>

<script>
export default {
	 name:'Toast',
	 props: {
		  className:{
			type: String,
			default:''
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
	        hide() { //显示头部
			  this.visible=false;
	        },
			show(options){
			console.log(options)
		     this.message = typeof options === 'string' ? options : options.message;
			 this.position=options.position || "placemiddle";
		     this.duration=options.duration || this.duration;
			 this.icon=options.icon;
			 this.visible=true;
			 if(options.duration==0) return;
			  setTimeout(()=>{
					this.visible=false;
				}, this.duration);
			}
		},
		 computed: {
			
        }
	}
</script>

<style lang="scss" scoped="scoped">
.pf-toast{ 
	position:absolute;
	max-width:40%;
	background:rgba(0,0,0,0.5);
	color:#fff;
	padding:10rpx 20rpx;
	border-radius:10rpx;
	z-index: 99;
	transition: opacity .3s linear;
	-webkit-transition:opacity .3s linear;
	text-align:center;
	font-size:28rpx;
    &.placetop{
	  left:50%;
	  top:100rpx;
	  transform:translate(-50%,0);
	  }
    &.placemiddle{
		left:50%;
		top:50%;
		transform:translate(-50%,-50%);
		}
	&.placebottom{
		left:50%;
		bottom:100rpx;
		transform:translate(-50%,0);
		} 
	.loading{
		  width:60rpx;
		  height:60rpx;
		  position:relative;
		  display: block;
		  margin: 0 auto;
		}	
}		  
@keyframes opacity
{
	from {opacity:0}
	to {opacity:1}
}

@-webkit-keyframes opacity /* Safari and Chrome */
{
	from {opacity:0}
	to {opacity:1}
}	  
</style>


