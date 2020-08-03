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
<template>
	<view class="content">
	    <view class="h3">选择语言</view> 
		<view class="list" v-for="(itme,index) in lang" :key="index" 
		@click="getLang(index)">{{itme}}
		</view>
		<view class="con">
			{{$t("navTitle")}}
		</view>
	</view>
</template>

<script>
	export default{
		name:'lang',
	    components: {},
		data() {
			return{
				lang:["中文（简体）","繁体中文（台湾）","English","日本語","Koreanisch","한국어"]
			}
		},
		mounted() {
			
		},
		 computed: {   
		},
		methods:{
			//切换页面
			getLang(index){
				let locale="zh-CN"
				if(index==2){
					locale="en-US";
				}else if(index==0){
					locale="zh-CN";
				}else if(index==1){
					locale="zh-TW"
				}else if(index==3){
					locale="JP"
				}else if(index==4){
					locale="gmA"
				}else if(index==5){
					locale="nk"
				}
				console.log(locale)
				this.$i18n.locale =locale;
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
.content{
	width:100%;
	box-sizing: border-box;
	background:#fff;
	padding:20rpx;
	.h3{
		font-size:40rpx;
	}	
	.list{
		width:100%;
		padding:20rpx;
		border-bottom:1rpx solid #eee;
	}
	.con{
		margin:80rpx auto;
		padding:20rpx;
		background:#eee;
	}
}						
</style>