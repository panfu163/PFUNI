<!--
  * SlideList 滑动删除组件
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
		<view class="h2">SlideList 滑动删除组件</view>
		<view class="tip"> <strong>注:</strong>由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例1</view>
	  <SlideList 
		  :list="list" 
		  :button="buttonList" 
		  :border="true" 
		  @click="clickMethod"
		  @change="changeMethod">
	   </SlideList>
	</view>
</template>

<script>
		import SlideList from "@/components/SlideList/SlideList";
		export default {
			components: {
				SlideList,
			},
			data() {
				return {
					list:[{
						id: 1,
						image: '../../static/logo.png',
						title: '张三',
						rightDetail: '2019-03-18',
						detail: 'XXXXXXXXXXXXXXXXXXX公司',
						slide_x: 0
					},
					{
						id: 2,
						surname: '李',
						title: '李二',
						rightDetail: '2019-03-17',
						detail: 'XXXXXXXXXXXXXXXXXXX公司',
						slide_x: 0
					},
					{
						id: 3,
						title: '王五',
						rightDetail: '2019-03-18',
						slide_x: 0
					},
					{
						id: 4,
						surname: '李',
						detail: 'XXXXXXXXXXXXXXXXXXX公司',
						slide_x: 0
					}],
					  buttonList: [
							{
								title: '分享',
								background: '#c4c7cd'
							},
							{
								title: '删除',
								background: '#ff3b32'
							}
						]
				}
			},
			onLoad(e) {
				
			},
			created(){
			  
			},
			methods: {
				changeMethod(data, button, index){
				                console.log('滑动按钮回调', data)
				                console.log('滑动按钮回调', button)
				            },
				clickMethod(data){
					console.log('点击行回调', data)
				}
			}
	}
	
</script>

<style lang="scss" scoped="scoped">
.content{
	padding:40rpx;
	box-sizing: border-box;
	.bnt{
		  position: relative;
		  width:100%;
		  background: #2b9939;
		  color: #fff;
		  height:60rpx;
		  line-height:60rpx;
		  margin:0 auto 40rpx;
		  text-align: center;
		  border-radius:10rpx;
		 } 
	.h2{
		font-size:28rpx; 
		margin-bottom:10rpx; 
		font-weight: bold;
		}  
	.h3{
		 margin:20rpx auto; 
		 font-weight: bold;
		 color:red;
	    }	 
	.tip{
		 margin:20rpx auto;
		} 		
	.title{
		margin:20rpx auto;
		}	
}						
</style>
