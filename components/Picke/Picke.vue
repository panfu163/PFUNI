<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 城市级连选择~~~
 @version 1.0
 @E-mail  panfu163@126.com
-->
<template>
	<view class="w-picker">
		<div class="mask" :class="{'show':showPicker}" @tap="maskTap" catchtouchmove="true"></div>
		<view class="w-picker-cnt" :class="{'show':showPicker}">
			<view class="w-picker-hd" catchtouchmove="true">
			  <view class="w-picker-btn" @tap="pickerCancel">取消</view>
			  <view class="w-picker-btn" :style="{'color':themeColor}" @tap="pickerConfirm">确定</view>
			</view>
			<view class="w-picker-view" v-if="mode=='provinces'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.provinces" :key="index">{{item.label}}</view>
					</picker-view-column>
				</picker-view>
			</view>
				<view class="w-picker-view" v-if="mode=='city'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.provinces" :key="index">{{item.label}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.citys" :key="index">{{item.label}}</view>
					</picker-view-column>
				</picker-view>
			</view>
				<view class="w-picker-view" v-if="mode=='areas'">
				<picker-view indicator-style="height: 40px;" :value="pickVal" @change="bindChange">
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.provinces" :key="index">{{item.label}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.citys" :key="index">{{item.label}}</view>
					</picker-view-column>
					<picker-view-column>
						<view class="item" v-for="(item,index) in datas.areas" :key="index">{{item.label}}</view>
					</picker-view-column>
				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	import provinces from './cityData/province.js';
	import citys from './cityData/city.js';
	import areas from './cityData/area.js';
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
			defaultVal:{ //默认选中值
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
				console.log(val.detail.value)
				let arr=val.detail.value;
				let province,city,area;
				let checkArr=this.checkArr;
			   switch(this.mode){
				   case "provinces":
				    province=this.datas.provinces[arr[0]].label; //省
					this.checkArr=[province];
					break;
				   case "city":
				   province=this.datas.provinces[arr[0]].label; //省市
				   city=this.datas.citys[arr[1]].label;
				   if(province!=checkArr[0]){
				   	this.datas.citys = citys[arr[0]];
				   	arr[1] = 0;
				   	city=this.datas.citys[arr[1]].label;
				   };
				   	this.checkArr=[province,city];
				   	break;
				   case "areas":
				   province=this.datas.provinces[arr[0]].label; //省市区
				   city=this.datas.citys[arr[1]].label;
				   area=this.datas.areas[arr[2]].label;
				   if(province!=checkArr[0]){
				   	this.datas.citys = citys[arr[0]];
				   	this.datas.areas = areas[arr[0]][0];
				   	arr[1] = 0;
				   	arr[2] = 0;
				   	city=this.datas.citys[arr[1]].label;
				   	area=this.datas.areas[arr[2]].label;
				   };
				   if(city!=checkArr[1]){
				   	this.datas.areas = areas[arr[0]][arr[1]];
				   	arr[2]=0;
				   	area=this.datas.areas[arr[2]].label;
				   };
					 this.checkArr=[province,city,area];
					break;			
				 }
				this.pickVal=arr;
			},
			initData(){
				let datas={};
				let province,city,area;
				let index=this.defaultVal.length; //个数
					datas={
						provinces:provinces,
						citys:citys[this.defaultVal[0]],
						areas:areas[this.defaultVal[0]][this.defaultVal[1]]
					};
				this.datas=datas;
				this.pickVal=this.defaultVal;
					province=datas.provinces[this.defaultVal[0]].label;
					city=datas.citys[this.defaultVal[1]].label;
					area=datas.areas[this.defaultVal[2]].label;
				   switch(this.mode){
								   case "provinces":
									this.checkArr=[province];
									break;
								   case "city":
									this.checkArr=[province,city];
									break;
								   case "areas":
									 this.checkArr=[province,city,area];
									break;			
								 }
			},
			},
		mounted() {
			this.initData();
		}
	}
</script>


<style lang="scss">
	.w-picker{
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
		.w-picker-cnt {
		  position: fixed;
		  bottom: 0;
		  left: 0;
		  width: 100%;
		  transition: all 0.3s ease;
		  transform: translateY(100%);
		  z-index: 3000;
		}
		.w-picker-cnt.show {
		  transform: translateY(0);
		}
		.w-picker-hd {
		  display: flex;
		  padding: 9px 15px;
		  background-color: #fff;
		  position: relative;
		  text-align: center;
		  font-size: 17px;
		  justify-content: space-between;
		}
		.w-picker-hd:after {
		  content: ' ';
		  position: absolute;
		  left: 0;
		  bottom: 0;
		  right: 0;
		  height: 1px;
		  border-bottom: 1px solid #e5e5e5;
		  color: #e5e5e5;
		  transform-origin: 0 100%;
		  transform: scaleY(0.5);
		}
		.item {
		  text-align: center;
		  line-height: 40px;
		  text-overflow: ellipsis;
		  white-space: nowrap;
		  font-size: 16px;
		}
		.w-picker-view {
		  width: 100%;
		  height: 238px;
		  overflow: hidden;
		  background-color: rgba(255, 255, 255, 1);
		  z-index: 666;
		}
		picker-view{
			height: 100%;
		}
	}
</style>
