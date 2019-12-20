<!--
  * Keyboard 移动端自定义键盘
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
	<view class="content">
		<view class="h2">Keyboard 移动端自定义键盘</view>
		<view class="tip">Keyboard组件主要用于移动端自定义键盘，无需用户交互。<strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例1</view>
		<Button :type="'warning'" @click="showKeyboard">数字和字母</Button>
		<view  class="tip">结果:{{result}}</view>
		<Keyboard ref="Keyboard" @keyboardValueChanged="keyboardValueChanged" @delKeyboard="delKeyboard"></Keyboard>
		<view class="h3">示例2</view>
		<view class="list-box">
			<text @click="getCity(0)" :class="{on:idx==0}">{{licensePlate[0]}}</text>
			<text @click="getCity(1)" :class="{on:idx==1}">{{licensePlate[1]}}</text>
			<text class="deg">•</text>
			<text @click="getCity(2)" :class="{on:idx==2}">{{licensePlate[2]}}</text>
			<text @click="getCity(3)" :class="{on:idx==3}">{{licensePlate[3]}}</text>
			<text @click="getCity(4)" :class="{on:idx==4}">{{licensePlate[4]}}</text>
			<text @click="getCity(5)" :class="{on:idx==5}">{{licensePlate[5]}}</text>
			<text @click="getCity(6)" :class="{on:idx==6}">{{licensePlate[6]}}</text>
		</view>
	  <Keyboard  ref="Keyboard2" :index="index" @keyboardValueChanged="keyboard2ValueChanged" @delKeyboard="del2Keyboard"></Keyboard>
	</view>
</template>

<script>
	  import {Keyboard,Button} from "@/components/PFUNI.js";
	  export default {
	    components: {
				Keyboard,
				Button
			},
		data() {
			return {
				result:"" ,
				licensePlate:[],
				idx:-1,
				index:-1, //调用键盘
			}
		},
		onLoad(e) {
			
		},
		created() {
		  let licensePlate="贵H88888";
	      var arr=licensePlate.split("");
		  this.licensePlate=arr;
	    },
		methods: {
			keyboardValueChanged(res){
				console.log(res)
				this.result+=res
			},
			showKeyboard(){
				this.$refs.Keyboard.showKeyboard()
			},
			delKeyboard(){
				if(this.result){
					let str=this.result
					let res=str.substring(0,str.length-1)
					this.result=res;
				}
			},
			//车牌处理
			getCity(index){
				if(index==0){
					this.index=0
                   }else{
				   this.index=-1
				  }
				this.idx=index;
				
				this.$refs.Keyboard2.showKeyboard()
			},
			keyboard2ValueChanged(res){
				this.licensePlate[this.idx]=res;
				this.$set(this.licensePlate,this.idx,res);
				console.log(this.idx)
				//处理边框到第一个和最后一个
				if(this.idx>=6){
					this.idx=6;
				}else{
					this.idx=this.idx+1;
				}
				
				if(this.idx>0 && this.idx<6){
					this.index=-1;
				}
				if(this.idx<=0){
					this.idx=0
					this.index=0
				}
				
			},
			del2Keyboard(){
				this.$set(this.licensePlate,this.idx,"")
				if(this.idx<=0){
					this.idx=0;
				}else{
					this.idx=this.idx-1;
				}
				if(this.idx>0 && this.idx<6){
					this.index=-1;
				}
				if(this.idx<=0){
					this.idx=0
					this.index=0
				}
				
			}
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
.content{
	padding:40upx;
	box-sizing: border-box;
	font-size: 14rpx;
	.bnt{
		  position: relative;
		  width:100%;
		  background: #2b9939;
		  color: #fff;
		  height:60rpx;
		  line-height:60rpx;
		  margin:0 auto 40rpx;
		  text-align: center;
		  font-size: 16rpx;
		  border-radius:10rpx;
		 } 
	.h2{
		font-size:24rpx; 
		margin-bottom:10rpx; 
		font-weight: bold;
		}  
	.h3{
		 font-size:20rpx; 
		 margin:20rpx auto; 
		 font-weight: bold;
		 color:red;
	    }	 
	.tip{
		 font-size: 14rpx; 
		 text-indent:15rpx; 
		 margin:20rpx auto;
		} 		
	.title{
		margin:20rpx auto;
		}
	.list-box{
		width:100%;
		display:flex;
		text{
			border:1rpx solid #eee;
			margin-right:10px;
			width:70rpx;
			height:70rpx;
			line-height:70rpx;
			text-align:center;
			display:inline-block;
			&.deg{
				border:0;
				width:10rpx;
				height:70rpx;
				line-height:70rpx;
			}
			&.on{
			  border:1rpx solid #f47a37;	
			}
		}
	}		
}						
</style>	
