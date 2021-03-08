<!--
  * 下拉加载
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
	<view class="LoadingMore">
		<view class="refreshDmo">
			<view v-for="(item, index) in demoDate" :key="index">{{item}}</view>
		</view>
		<Loading :loadingType="loadingMore.loadingType"></Loading>
	</view>
</template>
<script>
import Loading from '@/components/Loading/Loading.vue';
export default {
	data() {
		return {
			demoDate: ["A","H", "C", 'O', 'D', 'E', 'R', 'D', 'E', 'M', 'O', 'T', 'E', 'S', 'T'],
			loadingMore:{
				loadingType : 0,
				isEnd : false,
				page:1
			}
		}
	},
	onLoad: function (options) {
		
	},
	//监听用户下拉动作，一般用于下拉刷新
	onPullDownRefresh:function(){
		console.log("============")
		setTimeout(function () {
		            uni.stopPullDownRefresh();
		  }, 1000);
	},
	//页面上拉触底事件的处理函数
	onReachBottom : function(){
		//避免多次触发
		if (this.loadingMore.loadingType == 1 || this.loadingMore.isEnd){return ;}
		//假设 this.page > 2 代表加载了全部数据
		// 实际开的过程以 api 接口返回数据为准
		if (this.loadingMore.page > 2){
			this.loadingMore.isEnd = true;
			this.loadingMore.loadingType = 2;
			return ;
		}
		//展示loading
		this.loadingMore.loadingType = 1;
		
		
		//追加数据(延迟1秒 模拟网络请求)
		setTimeout(()=>{
			this.loadingMore.loading  = false;
			var newData    = this.getArrRandomly(this.demoDate);
			this.demoDate = this.demoDate.concat(newData);
			//累加页码
			this.loadingMore.page++;
			this.loadingMore.loadingType = 0;
		}, 1000);
	},
	methods:{
		//生成数据
		getArrRandomly:(arr)=>{
			var len = arr.length;
			for (var i = 0; i < len; i++) {
				var randomIndex = Math.floor(Math.random() * (len - i));
				var itemAtIndex = arr[randomIndex];
				arr[randomIndex] = arr[i];
				arr[i] = itemAtIndex;
			}
			return arr;
		}
	},
	components: {
		Loading
	}
}
</script>
<style lang="scss" scoped>
.refreshDmo{
	padding:25rpx 0; 
	width:100%;
    display:flex;
    flex-wrap:wrap;
	view{
		  background:#F1F2F3;
		  color:#888888; 
		  border-radius:3px; 
		  height:80px; 
		  line-height:80px;
		  text-align:center;
		  width:48%; 
		  margin:15rpx 1%;
		  font-size:30rpx;
	}
}
</style>
