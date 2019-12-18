<!--
  * Upload 图片上传
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
	<view class="box-image">
		 <view v-for="(itme,index) in imageList" :key="index" @click="deletePictures(index)" class="content">
	        <image class="image" :src="itme"></image> 
		 </view>
		 <view class="fileinput" @tap="chooseImage">
			+
		</view>
	</view>
	<view class="bnt" :style="{background:buttonColor}" @tap="uploadFile">{{buttonName}}</view>
	</view>
</template>

<script>
export default {
	 name:'Upload',
	 data() {
			return {
				imageList:'',
			}
		},
		props: {
		   url: {
				type:String,
				default:'',
			},
			buttonName: {
				type:String,
				default:'确定',
			},
			buttonColor:{
				type:String,
				default:'#2b9939',
			},
			imgNumber:{
				type: Number,
                default:100
			}
				
		 },		
	 onLoad(e) {
			
		},
	 created() {
	    
	    },
	methods: {
		
		chooseImage(){ //选择图片
			/*
			uni.showModal({
						content: "已经有9张图片了,是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								res(true);
							} else {
								res(false)
							}
						},
						fail: () => {
							res(false)
						}
					})
			*/
			 uni.chooseImage({
					success: (chooseImageRes) => {
						const tempFilePaths = chooseImageRes.tempFilePaths;
						if(this.imageList.length<=0){
							if(tempFilePaths.length>this.imgNumber){
								this.showToast('最多只能上传'+this.imgNumber+"张图片");
								tempFilePaths.splice(this.imgNumber,this.imgNumber);
							}
							 this.imageList=tempFilePaths;
						}else{ //二次选择图片
						    let i=0;
							
							for(i in tempFilePaths){
								if(this.imageList.length>this.imgNumber-1){
									this.showToast('最多只能上传'+this.imgNumber+"张图片");
								}else{
									this.imageList.push(tempFilePaths[i])
								}
							}
						}
						//this.uploadFile(tempFilePaths[0]);//上传图片
						
					}
				});
			},
	    deletePictures(index){ //删除图片
			if(index>-1){
			 this.imageList.splice(index,1);
			}
		},	
		showToast(title,duration,icon,mask){ //提示信息
		     uni.showToast({
				title:title ? title : "提示的内容",//提示的内容，长度与 icon 取值有关。
				duration:duration ? duration : 2000,
				mask:mask ? mask:false,//是否显示透明蒙层，防止触摸穿透，默认：false
				icon:icon ? icon :"none" //图标，有效值 "success", "loading", "none"
			});	
		},
		showModal(){
				uni.showModal({
					title:'系统提示',//提示标题
					content:"提示的内容",//提示的内容
					success:function (res) {
						if(res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
			   });
		},	
		uploadFile() { //提交图片
				if(this.url.length<=0){
					this.showToast("上传的图片地址不能为空");	
					return;
				}
				uni.uploadFile({
					url:this.url, //仅为示例，非真实的接口地址
					filePath:this.imageList, //要上传文件资源的路径
					name:'file',//文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
					formData:{}, //HTTP 请求中其他额外的 form data
					success:(uploadFileRes) => { //接口调用成功的回调函数
					    console.log(uploadFileRes)
						if(uploadFileRes){
								uni.showModal({
								title:'系统提示',
								content:res.errMsg,
								success: function (res) {
									if(res.confirm) {
										console.log('用户点击确定');
									} else if (res.cancel) {
										console.log('用户点击取消');
									}
								}
							});
						}
					},
					fail:(res)=>{
						console.log(res)
						this.showToast(res.errMsg)
					},
					complete:(res)=>{ //接口调用结束的回调函数（调用成功、失败都会执行）
						//console.log(res)
					}
				});
		}
	  },	
	}
</script>

<style lang="scss" scoped="scoped">
.box-image{
	display: flex;
	flex-wrap: wrap;
	width:100%;
	box-sizing: border-box;
	.content{
		height:180rpx;
		line-height:180rpx;
		width:200rpx;
		margin-right:20rpx;
		margin-bottom:20rpx;
		border-radius: 5rpx;
		border:1rpx solid #eee;
		.image{
			width: 100%;
			height:100%;
		}
	}
	.fileinput{
			   background:#fff;
			   text-align:center;
			   border-radius:10rpx;
			   height:180rpx;
			   line-height:180rpx;
			   width:220rpx;
			   position:relative;
			   overflow:hidden;
			   border:1rpx solid #999;
			   font-size:100rpx;
			   color: #999	   
	}    
}  
.bnt{
	background:#2b9939;
	width:100%;
	height:50rpx;
	line-height:50rpx;
	text-align:center;
	margin:25rpx auto;
	border-radius:10rpx;
	color:#fff;  
	
}              
</style>


