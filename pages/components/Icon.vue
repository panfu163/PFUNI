<!--
  * Icon 图标库
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
 <web-view :webview-styles="webviewStyles" src="http://www.pfuni.cn/iconfont/"></web-view>
</view>
</template>

<script>
	export default{
		name:'Icon',
	    components: {
		    },
		data() {
			return{
			 webviewStyles: {
					progress: {
						color:'#eee'
					}
				}
			}
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
.Icon{
	padding:10rpx;
	.h3{
		font-size:30rpx;
		font-weight:bold;
		padding:20rpx 0;
	}
	.h5{
		font-size:24rpx;
		font-weight:bold;
		padding:20rpx 0;	
	}
	.p{
		padding:10rpx 0;
	}
}	
</style>
