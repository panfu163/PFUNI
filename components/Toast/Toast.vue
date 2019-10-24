<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description Toast 提示框
 @version 1.0
 @E-mail  panfu163@126.com
-->
<template>
	<view>
		<view v-if="visible"  class="uni-content"  :class="position=='top'?'placetop':position=='bottom'?'placebottom':'placemiddle'">
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

<style lang="stylus" scoped="scoped">
.uni-content 
	position:absolute;
	max-width:40%;
	background:rgba(0,0,0,0.5);
	color:#fff;
	padding: 10upx;
	border-radius:10upx;
	z-index: 99;
	transition: opacity .3s linear;
	-webkit-transition:opacity .3s linear;
    &.placetop
	  left:50%;
	  top:200upx;
	  transform:translate(-50%,0) 
    &.placemiddle
		left:50%;
		top:50%;
		transform:translate(-50%,-50%) 
	&.placebottom
		left:50%;
		bottom:100upx;
		transform:translate(-50%,0) 
	.loading
		  width:50upx;
		  height:50upx;
		  position:relative;
		  display: block;
		  margin: 0 auto;  
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


