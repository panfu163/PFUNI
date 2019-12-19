<!--
  * CountDown 倒计时
  * ============================================================================
  * 版权所有 2019-2024 www.pfuni.cn，并保留所有权利。
  * 网站地址: http://www.pfuni.cn；
  * ----------------------------------------------------------------------------
    * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
    * 使用；不允许对程序代码以任何形式任何目的的再发布。
    * 侵权必究，请遵守版权约定！
    * ============================================================================
    *version 1.0.0
    *author : PanFu 1150928736@qq.com 
    *last update date : 2019-12-06 14:39
  -->
<template name="CountDown">
   <view class="CountDown">
	  <view v-if="type=='dafault'" class="timer">{{Result}}</view>
	  <view v-if="type=='box'" class="timer">
		  <text>{{day}}</text><text class="splitor">{{splitorText[0]}}</text>
		  <text>{{hour}}</text><text class="splitor">{{splitorText[1]}}</text>
		  <text>{{minute}}</text><text class="splitor">{{splitorText[2]}}</text>
		  <text>{{second}}</text>
	  </view>
   </view>
</template>
<script>
export default {
	name: "CountDown",
	props: {
		type:{
			type:String,
			default(){
				return "dafault" //样式dafault、box
			}
		},
		splitorText:{
			type: Array,
			default: function () {
			  return ['天', '时', '分', '秒']
			}
		},
		years:{
			type:String,
			default(){
				return new Date().getFullYear()+'' //年
			}
		},
		months:{
			type:String,
			default(){
				return new Date().getMonth()+1+'' //月
			}
		},
		days:{
			type:String,
			default(){
				return new Date().getDate()+'' //日
			}
		},
		hours:{
			type:String,
			default(){
				return new Date().getHours()+'' //时
			}
		},
		minutes:{
			type:String,
			default(){
				return new Date().getMinutes()+'' //分
			}
		},
		seconds:{
			type:String,
			default(){
				return new Date().getSeconds()+'' //秒
			}
		},
	},
	data() {
		return{
			Result:'',
			title:"倒计时执行完毕......",
			day:"00",
			hour:"00",
			minute:"00",
			second:"00"
		}
	},
	created:function(e){
		setInterval(()=>{this.getTimer(this.years,this.months,this.days,this.hours,this.minutes,this.seconds)},1000);
	},
	methods: {
		//获取当前时间距离截止时间的倒计时
		//参数为截止时间
	   getTimer(year, month, day, hour, minute, second){
		let leftTime = (new Date(year, month-1, day, hour, minute, second)) - (new Date());//计算剩余毫秒数
		let days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//计算剩余天数
		let hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//计算剩余小时数
		let minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩分钟数
		let seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余秒数
			days = this.checkTime(days).toString();
			hours = this.checkTime(hours).toString();
			minutes = this.checkTime(minutes).toString();
			seconds = this.checkTime(seconds).toString();
			if(minutes<0){ //倒计时结果
				this.Result=this.title;
				this.day="00"; //天
				this.hour="00"; //时
				this.minute="00"; //分
				this.second="00"; //秒
				return;
			}
			this.day=days; //天
			this.hour=hours; //时
			this.minute=minutes; //分
			this.second=seconds; //秒
			this.Result=days + this.splitorText[0] + hours + this.splitorText[1]  + minutes + this.splitorText[2]  + seconds+this.splitorText[3] 
		},
		//处理个位数前加0
		checkTime(i){
			if(Math.abs(i)<10){
				i = "0" + i;
			}
			return i;
	    }
   }
}
</script>
<style lang="scss" scoped>
.CountDown{
	width:100%;
	overflow:hidden;
	.timer{
		width:100%;
		overflow:hidden;
		font-size:32rpx;
		text{
			background:#000;
			color:#fff;
			padding:20rpx;
			width:100rpx;
			height:100rpx;
			line-height:100rpx;
			text-align:center;
			border-radius:10rpx;
			&.splitor{
				background:#fff;
				color:#000;
			}
		}
	}
}
</style>