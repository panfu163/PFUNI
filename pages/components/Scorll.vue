<!--
  * Scorll 画廊组件
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
		<view class="h2">Scorll 画廊组件</view>
		<view class="tip">Scorll组件主要用于画廊展示。<strong>注:</strong>由于此组件基于UNI-APP实现，所以在使用之前，请确保自己了解过 </view>
		<Scorll 
			 :galleryheight="165" 
			  bkstart="#000000" 
			  bkend="#000000" 
			 :imgviewwidth="85" 
			 :imgviewheight="105" 
			 :showbadge="true"
			  badegtype="trian" 
			  badegwidth="25" 
			  badegheight="25" 
			 :showdec="true" 
			 :images="testimgs" 
			 @clickimg="onclickimg">
			</Scorll>
     <Toast ref="Toast"></Toast>
	</view>
</template>

<script>
	 import Toast from "@/components/Toast/Toast";
	 import Scorll from "@/components/Scorll/Scorll";
		export default {
			components: {
				Toast,
				Scorll
			},
		data() {
			return {
					// 画廊示例数据
				testimgs: [{
						url: "http://p1.meituan.net/movie/d94e5c3054778f6f48bff3a813b0b7cd5300998.jpg@170w_235h_1e_1c",
					},
					{
						url: "http://p0.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/fc4dd6cd0c6f7db566a128cc05c475355664427.jpg@170w_235h_1e_1c"	
					},
					{
						url: "http://p0.meituan.net/movie/0aef20518b12365b524917332424e3c9293610.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/034069fc367db8a7d9644717b416cc2c332883.jpg@170w_235h_1e_1c"
					},
					{
						url: "http://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@170w_235h_1e_1c"
					}
				],
			}
		},
		onLoad(e) {
			this.setimgs();
		},
		created() {
	    
	    },
		methods: {
	      
		  onclickimg(imgviewobj) {
				if (imgviewobj.index != undefined)
					this.Msg = `${imgviewobj.index}`;
			},
			setimgs() {
				var imgs=[];
				for (let i in this.testimgs) {									
					 let imgobj={
						  dec:'',                   //图像描述信息
						  badeg:'',                 //角标文字
						  badegcolor:'#000000',     //角标颜色
						  url:'',                   //图源  
						  dominant:''               //主色  
					};
					imgobj.url=this.testimgs[i].url;
					imgobj.dominant = this.retcolor(); //随机主色
					imgobj.dec = i; //描述  
					imgobj.badeg = i; //角标文字
					imgobj.badegcolor = (i % 2) == 0 ? 'red' : 'LimeGreen'; //角标颜色
					imgs.push(imgobj)
				}
				this.testimgs=imgs;
			},
			retcolor() {
				let color = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
				return color;
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
