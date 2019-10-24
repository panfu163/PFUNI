<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 图片上传
 @version 1.0
 @E-mail  panfu163@126.com
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
		height:180upx;
		line-height:180upx;
		width:200upx;
		margin-right:20upx;
		margin-bottom:20upx;
		border-radius: 5upx;
		border:1upx solid #eee;
		.image{
			width: 100%;
			height:100%;
		}
	}
	.fileinput{
			   background:#fff;
			   text-align:center;
			   border-radius:10upx;
			   height:180upx;
			   line-height:180upx;
			   width:220upx;
			   position:relative;
			   overflow:hidden;
			   border:1upx solid #999;
			   font-size:100upx;
			   color: #999	   
	}    
}  
.bnt{
	background:#2b9939;
	width:100%;
	height:50upx;
	line-height:50upx;
	text-align:center;
	margin:25upx auto;
	border-radius:10upx;
	color:#fff;  
	
}              
</style>


