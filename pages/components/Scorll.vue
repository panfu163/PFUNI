<template>
	<view class="content">
	
	
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
	
		<view class="h2">Scorll</view>
		<view class="tip">Scorll组件主要用于非模态信息提醒，无需用户交互。</view>
		<view><strong>注:</strong>由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过 </view>
		<view class="h3">示例</view>
		<pre class="pre html">
			<element contenteditable="true">{{htmlData}}</element>
		  <!-- <span class="isCopy"  @click="copyHtml()">复制</span> -->
		</pre>
		<view class="title">基本用法</view>
		  <pre  class="pre js">
		<element contenteditable="true">{{jsData}}</element>
		 </pre >
	  <view class="list">
		  <view class="th">
			  <text>属性名</text>
			  <text>说明</text>
			  <text>类型</text>
			  <text>默认值</text>
			  <text>版本</text>
		  </view>
		  <view class="td">
			  <text>galleryheight</text>
			  <text>画廊高度 单位px</text>
			  <text>Number</text>
			  <text>165</text>
			  <text>1.0.0</text>
		  </view>
		<view class="td">
					  <text>imgviewwidth</text>
					  <text>图片框宽度 单位px</text>
					  <text>Number</text>
					  <text>85</text>
					  <text>1.0.0</text>
		</view>
			<view class="td">
					  <text>imgviewheight</text>
					  <text>图片框高度 单位px</text>
					  <text>Number</text>
					  <text>105</text>
					  <text>1.0.0</text>
		</view>
		       <view class="td">
				  <text>bkstart</text>
				  <text>背景起始色</text>
				  <text>String</text>
				  <text>#000000</text>
				  <text>1.0.0</text>
		</view>
             <view class="td">
				  <text>bkend</text>
				  <text>背景终止色</text>
				  <text>String</text>
				  <text>#000000</text>
				  <text>1.0.0</text>
		</view>
		    <view class="td">
				  <text>showbadge</text>
				  <text>是否显示角标</text>
				  <text>Boolean</text>
				  <text>false</text>
				  <text>1.0.0</text>
		</view>
		    <view class="td">
				  <text>badegtype</text>
				  <text>角标类型 round:圆角类型 trian:三角类型</text>
				  <text>String</text>
				  <text>trian</text>
				  <text>1.0.0</text>
		</view>
		 <view class="td">
				  <text>badegwidth</text>
				  <text>角标宽度 （仅仅对三角角标有效）单位px</text>
				  <text>String</text>
				  <text>25</text>
				  <text>1.0.0</text>
		</view>
		 <view class="td">
				  <text>badegheight</text>
				  <text>角标高度 （仅仅对三角角标有效）单位px</text>
				  <text>String</text>
				  <text>25</text>
				  <text>1.0.0</text>
		</view>
			 <view class="td">
				  <text>showdec</text>
				  <text>是否显示描述</text>
				  <text>Boolean</text>
				  <text>false</text>
				  <text>1.0.0</text>
		</view>
				 <view class="td">
				  <text>images</text>
				  <text>图源数组对象，结构看下面说明</text>
				  <text>Object</text>
				  <text>无</text>
				  <text>1.0.0</text>
		</view>
	  </view>
	 <Toasts ref="Toast"></Toasts>
	</view>
</template>

<script>
	import Toasts from '../../components/Toast/Toast.vue'
    import Scorll from '../../components/Scorll/Scorll.vue'
		export default {
			components: {
				Toasts,
				Scorll
			},
		data() {
			return {
				htmlData:`	<Scorll 
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
			</Scorll>`,
				jsData:`看当前页面代码`,
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
	padding:40upx;
	box-sizing: border-box;
	font-size: 14upx;
	.bnt{
		  position: relative;
		  width:100%;
		  background: #2b9939;
		  color: #fff;
		  height:60upx;
		  line-height:60upx;
		  margin:0 auto 40upx;
		  text-align: center;
		  font-size: 16upx;
		  border-radius:10upx;
		 } 
	.h2{
		font-size:24upx; 
		margin-bottom:10upx; 
		font-weight: bold;
		}  
	.h3{
		 font-size:20upx; 
		 margin:20upx auto; 
		 font-weight: bold;
		 color:red;
	    }	 
	.tip{
		 font-size: 14upx; 
		 text-indent:15rpx; 
		 margin:20upx auto;
		} 
	.pre{
		 background:#eee;
		 color: #000;  
		 padding:20upx 20upx;
		 border-radius:10upx;
		 margin-bottom:10upx;
		 box-sizing: border-box;
		 overflow:auto;
		 word-wrap:normal;
		 element{
				width:100%;
				display:block;
				height: 100%;
				}
		 .isCopy{
				position:absolute;
				right:10upx;
				bottom:5upx;
				background: #55A532;
				color: #fff;
				padding:5upx;
				border-radius:2upx;
				}
		}		
	.html,.js{
		 position:relative;
		 }
	.html::before{
		content:"HTML";
		position:absolute;
		top:0;
		right:12upx;
		color:#999;
		}
	.js::before{
		content:"JS";
		position:absolute;
		top:0;
		right:12upx;
		color:#999;
		}
	.title{
		margin:20upx auto;
		}
	.list{
		border:1upx solid #eee;
		border-right:0;
		border-bottom:0;
		margin:20upx auto;
		}
		.th{
			background:#f8f8f8;
			display: flex;
			}
			text{
				display:inline-block;
				flex: 1;
				height:50upx;
				line-height:50upx;
				text-align:center;
				border-right:1upx solid #eee;
				}
		.td{
			display: flex;
			}
			text{
				display:inline-block;
				flex: 1;
				text-align:center;
				min-height:50upx;
				line-height:50upx;
				border-right:1upx solid #eee;
				border-bottom:1upx solid #eee;
				padding:20upx auto;
				overflow: hidden; 
					}
	.swipe,.swiper-warp{
		background:#2b9939;	
		}
}						
</style>	
