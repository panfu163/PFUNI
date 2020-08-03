<template>
	<view>
		<canvas v-if="isShow" style="width: 291px;height: 472px;" canvas-id="shareCanvas"></canvas>
		<view v-if="isShow" class="popup-box-min" @click.stop="hide()">
			<view class="popup-box">
				<image class="bj" src="../../static/components/onlineshare.png"></image>
				<image class="imgcord" :src="Qrcode"></image>
				<view class="share-list">
					<!-- #ifdef MP-WEIXIN -->
					<view class="btn">
						<button open-type="share" class="iconfont icon-weixintubiao share-on"></button>
						分享给好友
					</view>
					<!-- #endif -->
					<view class="btn" @click.stop="preserve">
						<button class="iconfont icon-tubiaozitihua04 on"></button>
						保存至相册
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default{
	components: {
	},
	props:{
		Qrcode:{
			type: String,
			default:"http://www.pfuni.cn/img/WeChat.jpg" //生成的二维码地址需要https
		},
		backgroundMap:{ //背图
			type: String,
			default:"../../static/components/onlineshare.png"
		},
	},
	data(){
		return{
			isShow:false,
			filePath:"",
		}
	},
	onLoad() {
	},
	//分享分友
	onShareAppMessage(res) {
		return {
			title: 'PFUNI一款基于UNI-APP组件库', // 分享标题
			desc:"PFUNI一款基于UNI-APP开发跨平台应用实现的精致移动端组件库，编写一套代码，可编译到iOS、Android、H5、小程序等多个平台。", // 分享描述
			link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			imgUrl:this.filePath, // 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function() {
				// 用户点击了分享后执行的回调函数
			}
		};
	},
	methods:{
		//绘制保存图片
		preserve() {
			let self = this;
			const ctx = uni.createCanvasContext('shareCanvas');
			uni.showLoading({
				title: '正在创建...'
			});
			console.log("正在创建...:"+self.Qrcode)
			//获取图片信息
			//小程序下获取网络图片信息需先配置download域名白名单才能生效。
			uni.getImageInfo({
				src:self.Qrcode, //二维码
				success: function(res) {
					//绘制背景图
					ctx.drawImage(self.backgroundMap, 0, 0, 291, 472);
					//绘制文本信息
					// ctx.setFontSize(20);
					// ctx.setTextAlign('center');
					// ctx.fillText('活动时间', 270, 540); //270就是x坐标的中心点位置
					//头像，原图100*100的尺寸，居中显示直径为100的圆形头像
					ctx.save();
					ctx.beginPath();
					// ctx.arc(270, 110, 50, 0, Math.PI * 2, false);
					// ctx.clip();
					ctx.drawImage(res.path, 50, 250, 200, 200);
					ctx.stroke();
		            console.log(res.path)
					ctx.draw(false,(()=>{
					setTimeout(() => {
						//把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径
						uni.canvasToTempFilePath({
							canvasId:'shareCanvas',
							success: function(res) {
								console.log('======成功====');
								uni.hideLoading();
								self.filePath = res.tempFilePath;
								self.savePic();
							},
							fail: function(res) {
								console.log(res);
								console.log('======失败====');
							},
							complete: (complete) => { 
								uni.hideLoading();
							    console.log('complete:',JSON.stringify(complete))  
						    }  
						});
					},500);
					})());
					
				}
			});
		},
		//保存图片
		savePic() {
			let self = this;
			uni.showLoading({
				title: '正在保存'
			});
			uni.saveImageToPhotosAlbum({
				filePath: self.filePath,
				success: function() {
					uni.showToast({
						title: '图片保存成功～'
					});
				},
				fail: function(e) {
					//TODO
				},
				complete: function() {
					uni.hideLoading();
					self.hide();
				}
			});
		},
		hide(){
			this.isShow=false;
		},
		show(){
			this.isShow=true;
		}
		
	},
	mounted() {
	}
}	
</script>

<style lang="scss">
	.popup-box-min{
		position:fixed;
		width:100%;
		height:100%;
		top:50%;
		left:50%;
		z-index:99;
		transform:translate(-50%,-50%);
		background: rgba($color: #000000, $alpha: 0.5);
	}
	.popup-box {
		width:80%;
		box-sizing: border-box;
		min-height: 872rpx;
		padding: 20rpx 20rpx 40rpx;
		position: relative;
		margin:100rpx auto;
		.bj{
			position:absolute;
			width:100%;
			height:100%;
			top:0;
			left:0;
			box-sizing:border-box;
			overflow:hidden;
			z-index:9;
		}
		.imgs {
			width: 100%;
		}
		.imgcord {
			position: absolute;
			left: 50%;
			top: 60%;
			margin-top: -160rpx;
			margin-left: -160rpx;
			background: #eee;
			width: 320rpx;
			height: 320rpx;
			border-radius: 50%;
            z-index:20;
		}
		.share-list {
			display: flex;
			width: 100%;
			box-sizing: border-box;
			flex-wrap: wrap;
			position: absolute;
			top: 78%;
			right: 1%;
			z-index:20;
			.btn {
				& > button {
					width: 100rpx;
					height: 100rpx;
					border: none;
					outline: none;
					border-radius: 50%;
				}
				.iconfont {
					padding: 0rpx;
					font-size: 60rpx;
					color: #ffffff;
					line-height: 100rpx;
					display: block;
				}
				.share-on {
					background: rgba(30, 193, 33, 1);
				}
				.on {
					background: rgba(52, 135, 255, 1);
				}
			}

			& > view {
				flex: 1;
				text-align: center;
				padding: 20rpx;
				font-size: 30rpx;
				.imgs {
					width: 100rpx;
					height: 100rpx;
					background: rgba(253, 203, 67, 1);
				}
			}
		}
		.btn-box {
			display: flex;
			justify-content: space-between;
			width: 90%;
			margin: 0 auto;
			position:relative;
			z-index:20;
			& > view {
				text-align: center;
				font-size: 14rpx;
				font-weight: 400;
				.iconfont {
					background: #eee;
					height: 80rpx;
					width: 80rpx;
					line-height: 80rpx;
					font-size: 60rpx;
					border-radius: 50%;
					color: #1ec121;
					margin: 20rpx auto;
					display: block;
				}
				.on {
					color: #3487ff;
				}
			}
		}
	}	
</style>
