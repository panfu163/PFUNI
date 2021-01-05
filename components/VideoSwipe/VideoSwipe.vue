<!--
  * VideoSwipe 视频和图片
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
    <view class="swipers">
            <swiper class="swiper" 
					:indicator-dots="indicatorDots" 
					:indicator-color="indicatorColor"
					:indicator-active-color="indicatorActiveColor"
					:autoplay="autoplay" 
					:interval="interval" 
					:duration="duration"
					:current="current"
					:circular="circular"
					:vertical="vertical"
					:easin-function="easingFunction"
					@change="onChange"
					>
				<swiper-item class="swiper" v-for="(item,index) in 5">
					<view>{{index}}A</view>
				</swiper-item>
			</swiper>
			<view class="video">
				<view v-for="(itme,index) in items" :class="{on:isVideo==index}" @click="onVideo(index)">{{itme}}</view>
			</view>
    </view>
</template>

<script>
export default{
	data(){
		return{
			items:["视频","图片"],
			isVideo:0
		}
	},
	props:{
		indicatorColor:{
			type:String,
			default:"#fff" //指示点颜色
		},
		indicatorActiveColor:{
			type:String,
			default:"#4CD964" //指示点颜色
		},
		indicatorDots:{
			type:Boolean,
			default:true //是否显示面板指示点-圆点
		},
		autoplay:{
			type:Boolean,
			default:true //是否自动切换
		},
		interval:{
			type:Number,
			default:2000 //自动切换时间间隔
		},
		duration:{ 
			type:Number,
			default:500  //滑动动画时长
		},
		current:{
			type:Number,
			default:0  //当前所在滑块的 index
		},
		circular:{
			type:Boolean,
			default:false //是否采用衔接滑动，即播放到末尾后重新回到开头
		},
		vertical:{
			type:Boolean,
			default:false  //是否采用衔接滑动，即播放到末尾后重新回到开头
		},
		easingFunction:{
			type:String,
			default:"default" //有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
		}
	},
	methods:{
		 onVideo(index){
			 this.isVideo=index;
			 this.current=index;
		 },
		 onChange(event){
			 if(event.detail.current<this.items.length){
				 this.isVideo=event.detail.current;
			 }
			 
			console.log(event.detail)
		 }
	}
}
</script> 
<style lang="scss" scoped>
	.swipers{
		background: #f1f1f1;
		.swiper{
			height:200rpx;
			background: #f1f1f1;
		}
		.video{
			width:100%;
			display: flex;
			justify-content:center;
			padding:20rpx;
			font-size:24rpx;
			&>view{
				background-color:#999;
				padding:0 20rpx;
				margin-right:10rpx;
				border-radius:20rpx;
				&.on{
					color:#fff;
					background: #4CD964;
				}
			}
		}
	}
	
</style>
