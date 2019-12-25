<!--*
  * LotteryDraw 抽奖大转盘
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
 <view class="LotteryDraw">
	 <view class="rotate" :style="{transform:rotateZ}">
		 <image class="image" :src="roundUrl"></image>
	 </view>
	 <view class="start" :style=" {background:pointerUrl}"  @click="getLotteryDraw">
		 <view class="text" v-html="title"><!--开始<br>抽奖--></view>
		  <image class="image" :src="StartUrl"></image>
	 </view>
 </view>
</template>
<script>
export default{
	props:{
		result : { //中奖
			type :String,
			default :""
		},
		title:{ //中奖
			type :String,
			default :"开始<br>抽奖"
		},
		roundUrl : { //转盘图片地址
			type :String, 
			default(){
				return "../../static/components/round.png"
			}
		},
		StartUrl : { // 指针图片地址
			type :String, 
			default(){
				return "../../static/components/Start.png"
			}
		},
		getData:{ //获取数据
				type:Function,
				require:true
			},
		deg:{
			type : Number, //默认60 则360/60=6 说明奖项为6项
			default : 60
		},	
		getPrize:{
			type:Function,
			require:true
		}	
	},
	data() {
		return {
			rotateZ:"",
			currentLocation:'0', //记录当前位置
			url:"",
			pointerUrl:""
		}
	},
	created:function(){
		
		// this.getImgToBase64(this.roundUrl,(res)=>{
		// 	this.url=res
		// })
		// this.getImgToBase64(this.StartUrl,(res)=>{
		// 	this.pointerUrl="url("+res+") no-repeat"
		// })
		// this.urlTobase64(this.roundUrl,(res)=>{
		// 	this.url=res
		// })
		// this.urlTobase64(this.StartUrl,(res)=>{
		// 	this.pointerUrl="url("+res+") no-repeat"
		// })
	},
	mounted() {
	   
	},
	methods:{
		    //将图片转换为Base64
			getImgToBase64(url,callback){
			  var canvas = document.createElement('canvas'),
				  ctx = canvas.getContext('2d'),
				  img = new Image;
				  img.crossOrigin = 'Anonymous';
				  img.onload = function(){
					canvas.height = img.height;
					canvas.width = img.width;
					ctx.drawImage(img,0,0);
					var dataURL = canvas.toDataURL('image/png');
					callback(dataURL);
					canvas = null;
				  };
				  img.src = url;
			},
			//将图片转换为Base64
			urlTobase64(url,callback){
			    uni.request({
				url: url,
				method:'GET',
				responseType:'arraybuffer',
				success: ress => {
					let base64 = wx.arrayBufferToBase64(ress.data); //把arraybuffer转成base64 
					base64 = 'data:image/jpeg;base64,' + base64 //不加上这串字符，在页面无法显示的哦
					callback(base64);
				}
			    })
			},
			//图片转动
			lotteryDrew(){ 
		     let str=this.result; //结果
			 let arr=str.split(',');
			 let result = [];
			 let nums = 1;  //从0~3十个数字中随机选出1个数
			  while(result.length < nums){
				  let temp = (Math.random()*arr.length) >> 0;
				  result.push(arr.splice(temp,1));
			  }
			 let deg = this.deg,  //旋转的默认角度360/6
			     numdeg=0,
				 num = parseInt(result); //本次位置旋转后数组的位置
			     numdeg+=num*deg+Math.floor(Math.random() * 3 + 1) * 720; //记录上次旋转停止时候的角度
				 if(this.currentLocation==numdeg){
					numdeg=num*deg+parseInt(numdeg*720);
				 }
				 this.currentLocation=numdeg; //记录旋转后数组的位置
				 console.log("当前角度"+numdeg)
			     //记录当前位置
				 this.rotateZ="rotateZ(" + -numdeg + "deg)"; //轮盘转动
				 setTimeout(()=>{
					this.$emit('getPrize',num); //返回中奖结果
				 },3000) 
			},
			getLotteryDraw(){
				 this.$emit('getData'); //获取数据
				 console.log(this.result)
				 setTimeout(()=>{
					if(this.result){
						this.lotteryDrew(); 
					}else{
						uni.showToast({
							title:"当前没有中奖结果",
							icon:"none",
							duration: 2000
						});
					} 
				 },50)
			}
	}
}
</script>
<style lang="scss" scoped="scoped">
.LotteryDraw{
	width:100%;
	margin:0 auto;
	overflow:hidden;
	height:700rpx;
	width:700rpx;
	position:relative;
	.rotate{
		width:100%;
		margin:0 auto;
		overflow:hidden;
		height:100%;
		background-size:100%;
		position:relative;
		transform: rotateZ(360deg);
	    transform-origin:center left bottom;
	   -webkit-transform-origin:center left bottom;
	    transition: all 1.5s cubic-bezier(0.25, 0.1, 0.25, 1);
		.image{
			height:700rpx;
			width:700rpx;
		}
	}
	.start{
		  position: absolute;
		  top:50%;
		  left:50%;
		  width:200rpx;
		  height:200rpx;
		  padding-top:70rpx;
		  text-align:center;
		  font-weight:bold;
		  cursor:pointer;
		  color:#fff;
		  background-size:100% !important;
		  transform:translate(-50%,-50%) rotateZ(360deg);
		   transform-origin:center left bottom;
		  -webkit-transform-origin:center left bottom;
		   transition: all 1.5s cubic-bezier(0.25, 0.1, 0.25, 1);
		  /* background:url("../../static/components/Start.png") no-repeat;*/
		  .image{
			  position:absolute;
			  top:0;
			  left:0;
			  z-index:999;
			  width:220rpx;
			  height:220rpx;
			  margin:0 auto;
		  }
		  .text{
			  position:absolute;
			  top:82rpx;
			  left:10rpx;
			  z-index:1000;
			  width:100%;
			  height:100%;
			  margin:0 auto;
			  font-size:32rpx;
		  }
		 }
}	
</style>