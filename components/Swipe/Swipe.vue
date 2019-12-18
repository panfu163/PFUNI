<!--
  * Swipe 焦点图
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
	<view class="swiper-warp">
		<slot></slot>
		<view v-if="mode === 'default'" class="dots-box" :style="{'bottom':dots.bottom + 'px'}">
			<view class="uni-swiper__dots-item" v-for="(item,index) in info" :style="{
				 'width': dots.width + 'px','height':dots.height +'px' ,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
			 :key="index"></view>
		</view>
		<view v-if="mode === 'long'" class="dots-box" :style="{'bottom':dots.bottom + 'px'}">
			<view class="dots-item " v-for="(item,index) in info" :class="[index === current&&'dots-long']"
			 :style="{
				 'width':(index === current? dots.width*3:dots.width ) + 'px','height':dots.height +'px' ,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
			 :key="index"></view>
		</view>
		<view v-if="mode === 'nav'" class="dots-box dots-nav" :style="{'background-color':dotsStyles.backgroundColor}">
			<view class="uni-swiper__dots-nav-item" :style="{'color':dotsStyles.color}">{{(current+1)+"/"+info.length}}
				{{info[current][field]}}</view>
		</view>
		<view v-if="mode === 'indexes'" class="dots-box" :style="{'bottom':dots.bottom + 'px'}">
			<view class="dots-item dots-indexes" v-for="(item,index) in info" :style="{
				 'width':dots.width + 'px','height':dots.height +'px' ,'color':index === current?dots.selectedColor:dots.color,'background-color':index !== current?dots.backgroundColor:dots.selectedBackgroundColor,'border':index !==current ? dots.border:dots.selectedBorder}"
			 :key="index">{{index+1}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:'swiper',
		props: {
			info: {
				type: Array,
				default () {
					return []
				}
			},
			current: {
				info: Number,
				default: 0
			},
			dotsStyles: {
				type: Object,
				default () {
					return {}
				}
			},
			// 类型 ：default(默认) indexes long nav
			mode: {
				type: String,
				default: 'default'
			},
			// 只在 nav 模式下生效，变量名称
			field: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				dots: {
					width: 8,
					height: 8,
					bottom: 10,
					color: '#fff',
					backgroundColor:"none",
					border: '1px #fff solid',
					selectedBackgroundColor:'#f8f8f8',
					selectedBorder: '1px #fff solid'
				}
			};
		},
		created() {
			if (this.mode === 'indexes') {
				this.dots.width = 20
				this.dots.height = 20
			}
			this.dots = Object.assign(this.dots, this.dotsStyles)
		},
		watch: {
			dotsStyles(newVal) {
				this.dots = Object.assign(this.dots, this.dotsStyles)
			},
			mode(newVal) {
				if (newVal === 'indexes') {
					this.dots.width = 20
					this.dots.height = 20
				} else {
					this.dots.width = 8
					this.dots.height = 8
				}
			}

		}
	}
</script>

<style lang="scss" scoped="scoped">
	.swiper-warp {
		position: relative;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
		background:#f8f8f8;
		img{
			width:100%;
			height:100%;
		}
		.dots-box {
			position: absolute;
			bottom: 20upx;
			display: flex;
			justify-content: center;
			align-items: center;
			box-sizing: box-sizing;
			width: 100%;
		}
		.dots-item {
			flex-shrink: 0;
			width: 16rpx;
			border-radius: 50%;
			margin-left: 12rpx;
			background: rgba(0, 0, 0, .3);
			transition: all 0.2s linear;
		}
		
		.dots-item:first-child {
			margin: 0;
		}
		
		.dots-default {
			border-radius: 50%;
		}
		
		.dots-long {
			border-radius: 100upx;
		}
		
		.dots-nav {
			bottom: 0;
			height: 80rpx;
			justify-content: flex-start;
			background: rgba(0, 0, 0, 0.2);
			box-sizing: box-sizing;
			overflow: hidden;
		}
		
		.dots-nav-item {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 28rpx;
			color: #fff;
			box-sizing: box-sizing;
			margin: 0 30rpx;
		}
		
		.dots-indexes {
			display: flex;
			justify-content: center;
			align-items: center;
			color: #fff;
			font-size: 24rpx;
		}
	}
</style>
