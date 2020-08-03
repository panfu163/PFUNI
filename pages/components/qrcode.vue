<!--
  * Layout 布局
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
<template xlang="wxml">
	<view class="container">
		<view class="qrimg">
			<view class="qrimg-i">
				<tki-qrcode v-if="ifShow" 
					cid="qrcode1" 
					ref="qrcode" 
					:val="val" 
					:size="size" 
					:unit="unit" 
					:background="background" 
					:foreground="foreground" 
					:pdground="pdground" 
					:icon="icon" 
					:iconSize="iconsize" 
					:lv="lv" 
					:onval="onval" 
					:loadMake="loadMake" 
					:usingComponents="true" 
					@result="qrR" />
			</view>
		</view>
		<view class="uni-padding-wrap">
			<view class="uni-title">码内容:{{val}}</view>
		</view>
		<view class="uni-list">
			<textarea class="uni-input" placeholder="请输入要生成的二维码内容" v-model="val"></textarea>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<view class="uni-title">设置二维码大小</view>
		</view>
		<view class="body-view">
			<slider :value="size" @change="sliderchange" min="50" max="500" show-value />
		</view>
		<view class="uni-padding-wrap">
			<view class="btns">
				<button type="default" @tap="selectIcon">选择二维码图标</button>
				<button type="warn" @tap="creatQrcode">生成二维码</button>
				<button type="primary" @tap="saveQrcode">保存到图库</button>
				<button type="default"    @tap="clearQrcode">清除二维码</button>
			</view>
		</view>
	</view>
</template>
<script>
import tkiQrcode from '@/components/TkiQrcode/TkiQrcode.vue'
export default {
	data() {
		return {
			ifShow: true,
			val:'https://www.baidu.com/', // 要生成的二维码值
			size:200, // 二维码大小
			unit:'upx', // 单位
			background:'#b4e9e2', // 背景色
			foreground:'#309286', // 前景色
			pdground:'#32dbc6', // 角标色
			icon:'', //二维码图标
			iconsize: 40, // 二维码图标大小
			lv:3, //二维码容错级别 ， 一般不用设置，默认就行
			onval:false, // val值变化时自动重新生成二维码
			loadMake:true, // 组件加载完成后自动生成二维码
			src:'' // 二维码生成后的图片地址或base64
		}
	},
	methods: {
		sliderchange(e) {
			this.size = e.detail.value
		},
		creatQrcode() {
			this.$refs.qrcode._makeCode()
		},
		saveQrcode() {
			this.$refs.qrcode._saveCode()
		},
		qrR(res) {
			this.src = res
		},
		clearQrcode() {
			this.$refs.qrcode._clearCode()
			this.val = ''
		},
		//从本地相册选择图片或使用相机拍照
		selectIcon() {
			let that = this
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function (res) {
					that.icon = res.tempFilePaths[0]
					setTimeout(() => {
						that.creatQrcode()
					}, 100);
					// console.log(res.tempFilePaths);
				}
			});
		}
	},
	components: {
		tkiQrcode
	},
	onLoad: function () { },
}
</script>

<style>
.container {
	display: flex;
	flex-direction: column;
	width: 100%;
	padding:20rpx 40rpx;
	box-sizing: border-box;
}

.qrimg {
	display: flex;
	justify-content: center;
}
.qrimg-i{
	margin-right: 10px;
}
.body-view{
	width: 100%;
	padding:20rpx 40rpx 0 0;
}
slider {
	width: 100%;
}

input {
	width: 100%;
	margin-bottom: 20upx;
}

.btns {
	display: flex;
	flex-direction: column;
	width: 100%;
}
.uni-list{
	background:#eee;
	margin:20rpx 0;
}
.uni-input{
    padding:20rpx;
}
button {
	width: 100%;
	margin-top: 10upx;
}
</style>