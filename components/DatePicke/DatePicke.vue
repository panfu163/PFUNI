<!--
  * DatePicke 时间组
  * ============================================================================
  * 版权所有 2019-2024 www.pfuni.cn，并保留所有权利。
  * 网站地址: http://www.pfuni.cn；
  * ----------------------------------------------------------------------------
  * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
  * 使用；不允许对程序代码以任何形式任何目的的再发布。
  * ============================================================================
  *time 2019-10-17 14:39
  *version 1.0.0
-->
<template>
	<view class="pf-picker">
		<div class="mask" :class="{'show':showPicker}" @tap="maskTap" catchtouchmove="true"></div>
		<view class="pf-picker-cnt" :class="{'show':showPicker}">
			<view class="pf-picker-hd" catchtouchmove="true">
			  <view class="pf-picker-btn" @tap="pickerCancel">取消</view>
			  <view class="pf-picker-btn" :style="{'color':themeColor}" @tap="pickerConfirm">确定</view>
			</view>
			<view class="pf-picker-view" v-if="mode=='date'||mode=='dateTime'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.years" :key="index">{{item}}年</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.months" :key="index">{{item}}月</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.days" :key="index">{{item}}日</view>
					</picker-view-column>
					<picker-view-column v-if="mode=='dateTime'">
						<view class="item" v-for="(item,index) in datas.hours" :key="index">{{item}}</view>
					</picker-view-column>
					<picker-view-column v-if="mode=='dateTime'">
						<view class="item" v-for="(item,index) in datas.minutes" :key="index">{{item}}</view>
					</picker-view-column>
				</picker-view>
			</view>
			<view class="pf-picker-view" v-if="mode=='time'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.hours" :key="index">{{item}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.minutes" :key="index">{{item}}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				result:[],
				datas:{},
				checkArr:[],
				pickVal:[],
				showPicker:false
			};
		},
		computed:{
			
		},
		props:{
			mode:{
				type:String,
				default(){
					return "date"
				}
			},
			themeColor:{
				type:String,
				default(){
					return "#f00"
				}
			},
			startYear:{
				type:String,
				default(){
					return "1970"
				}
			},
			endYear:{
				type:String,
				default(){
					return new Date().getFullYear()+''
				}
			},
			defaultVal:{
				type:Array,
				default(){
					return [0,0,0,0,0]
				}
			}
		},
		watch:{
			mode(){
				this.initData();
			}
		},
		methods:{
			maskTap(){
				this.showPicker = false;
			},
			show(){
				this.showPicker = true;
			},
			hide(){
				this.showPicker = false;
			},
			pickerCancel(){
				this.$emit("cancel",this.checkArr);
				this.showPicker = false;
			},
			pickerConfirm(e){
				this.$emit("confirm",this.checkArr);
				this.showPicker = false;
			},
			bindChange(val){
				let arr=val.detail.value;
				let year="",month="",day="",hour="",minute="";
				let checkArr=this.checkArr;
				let days=[];
				let mode=this.mode;
				switch(mode){
					case "date":
						year=this.datas.years[arr[0]];
						month=this.datas.months[arr[1]];
						day=this.datas.days[arr[2]];
						if(year!=checkArr[0]){
							days=this.initDays(year,month);
							this.datas.days=days;
						};
						if(month!=checkArr[1]){
							days=this.initDays(year,month);
							this.datas.days=days;
						};
						this.checkArr=[year,month,day];
						break;
					case "dateTime":
						year=this.datas.years[arr[0]];
						month=this.datas.months[arr[1]];
						day=this.datas.days[arr[2]];
						hour=this.datas.hours[arr[3]];
						minute=this.datas.minutes[arr[4]];
						if(year!=checkArr[0]){
							days=this.initDays(year,month);
							this.datas.days=days;
						};
						if(month!=checkArr[1]){
							days=this.initDays(year,month);
							this.datas.days=days;
						};
						this.checkArr=[year,month,day,hour,minute];
						break;
					case "time":
						hour=this.datas.hours[arr[0]];
						minute=this.datas.minutes[arr[1]];
						this.checkArr=[hour,minute];
						break;
				}
				this.pickVal=arr;
			},
			initData(){
				let datas={};
				let mode=this.mode;
				let year,month,day,hour,minute;
					datas=this.initPicker(this.startYear,this.endYear,this.mode)
				this.datas=datas;
				this.pickVal=this.defaultVal;
				switch(mode){
					case "date":
						year=datas.years[this.defaultVal[0]];
						month=datas.months[this.defaultVal[1]];
						day=datas.days[this.defaultVal[2]];
						this.checkArr=[year,month,day];
						break;
					case "dateTime":
						year=datas.years[this.defaultVal[0]];
						month=datas.months[this.defaultVal[1]];
						day=datas.days[this.defaultVal[2]];
						hour=datas.hours[this.defaultVal[3]];
						minute=datas.minutes[this.defaultVal[4]];
						this.checkArr=[year,month,day,hour,minute];
						break;
					case "time":
						hour=datas.hours[this.defaultVal[0]];
						minute=datas.minutes[this.defaultVal[1]];
						this.checkArr=[hour,minute];
						break;
				}
			},
			initDays(year,month){//年月
				let totalDays=new Date(year,month,0).getDate();
				let dates=[];
				for(let d=1;d<=totalDays;d++){
					dates.push(this.forMatNum(d));
				};
				return dates;
			},
			initPicker(start,end,mode="date",step=1) { //时间处理
				let initstartDate=new Date(start);
				let endDate=new Date(end);
				let startYear=initstartDate.getFullYear();
				let startMonth=initstartDate.getMonth();
				let endYear=endDate.getFullYear();
				let years=[],months=[],days=[],hours=[],minutes=[];
				let totalDays=new Date(startYear,startMonth,0).getDate();
				for(let s=startYear;s<=endYear;s++){
					years.push(s+'');
				};
				for(let m=1;m<=12;m++){
					months.push(this.forMatNum(m));
				};
				for(let d=1;d<=totalDays;d++){
					days.push(this.forMatNum(d));
				}
				for(let h=0;h<24;h++){
					hours.push(this.forMatNum(h));
				}
				for(let m=0;m<60;m+=step){
					minutes.push(this.forMatNum(m));
				}
				if(mode=="date"){
					return {years,months,days}
				}else if(mode=="dateTime"){
					return {years,months,days,hours,minutes}
				}else if(mode=="time"){
					return {hours,minutes}
				}
			  },
			  forMatNum(num){ //处理小10时在前面加0
			  	return num<10?'0'+num:num+'';
			  }
			},
		mounted() {
			this.initData();
		}
	}
</script>

<style lang="scss" scoped>
	.pf-picker{
		.mask {
		  position: fixed;
		  z-index: 1000;
		  top: 0;
		  right: 0;
		  left: 0;
		  bottom: 0;
		  background: rgba(0, 0, 0, 0.6);
		  visibility: hidden;
		  opacity: 0;
		  transition: all 0.3s ease;
		}
		.mask.show{
			visibility: visible;
			opacity: 1;
		}
		.pf-picker-cnt {
		  position: fixed;
		  bottom: 0;
		  left: 0;
		  width: 100%;
		  transition: all 0.3s ease;
		  transform: translateY(100%);
		  z-index: 3000;
		}
		.pf-picker-cnt.show {
		  transform: translateY(0);
		}
		.pf-picker-hd {
		  display: flex;
		  padding: 18rpx 30rpx;
		  background-color: #fff;
		  position: relative;
		  text-align: center;
		  font-size: 34rpx;
		  justify-content: space-between;
		}
		.pf-picker-hd:after {
		  content: ' ';
		  position: absolute;
		  left: 0;
		  bottom: 0;
		  right: 0;
		  height: 1rpx;
		  border-bottom: 1rpx solid #e5e5e5;
		  color: #e5e5e5;
		  transform-origin: 0 100%;
		  transform: scaleY(0.5);
		}
		.item {
		  text-align: center;
		  line-height:80rpx;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		  font-size:32rpx;
		}
		.pf-picker-view {
		  width: 100%;
		  height: 476rpx;
		  overflow: hidden;
		  background-color: rgba(255, 255, 255, 1);
		  z-index: 666;
		}
		picker-view{
			height: 100%;
		}
	}
</style>
