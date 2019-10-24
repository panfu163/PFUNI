<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 下拉刷新
 @version 1.0
 @E-mail  panfu163@126.com
-->
<template>
	<scroll-view scroll-y="true"  @scroll="onScroll" class="LoadMore" style="transform:translateY(+top+ 'px')"  @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
		 <view v-if="isPullDown" class="loading">
		 <image class="loadingimg"  v-show="status=='loading'" src="../../static/loading.gif"></image>{{status === 'more' ? pullDownText.contentdown : (status === 'loading' ? pullDownText.contentrefresh : pullDownText.contentnomore)}}
		</view>
		<slot></slot>
		<view v-if="isPullingUp" class="loading">
		  <image class="loadingimg"  v-show="status == 'loading'" src="../../static/loading.gif"></image>
		  {{status === 'more' ? pullingUpText.contentdown : (status === 'loading' ? pullingUpText.contentrefresh : pullingUpText.contentnomore)}}
		</view>
	</scroll-view>
</template>

<script>
export default {
	name:'Dropload',
	data() {
		return {
			startPageY:'',
			movepageY:'',
			isPullingUp:false,
			isPullDown:false,
			status:'more',
			top:0,
			isTouch: false, //代表当前是否处于 下拉刷新行为的开关，也就是当属于滚动行为时，就要退出该事件机制
		  }
		},
	props: {
	  listData: {
				type: Array,
				default: function () {
				  return []
				}
			 },
		pullDownText:{
			type:Object,
			default(){
				return{
					contentdown: "下拉刷新...",
					contentrefresh: "正在加载...",
					contentnomore: "更新成功..."
				}
			}
		},
		pullingUpText: {
			type: Object,
			default () {
				return {
					contentdown: "上拉显示更多",
					contentrefresh: "正在加载...",
					contentnomore: "没有更多数据了"
				};
			}
		},
	pullDown:{ //刷新回调
			type:Function,
			require:true
		},
	   },  
	created() {
		
       }, 			
	onLoad() {

	},				
	methods: {
		setState(State){ //修改状态
		   this.status=State;
		   if(State==="noPullDow"){ //更新完成
			   setTimeout(()=>{
				  this.isPullDown=false; 
			   },500)
		   }
		 },
	   	touchStart(e) {//当手指触摸屏幕时触发
             this.startPageY = e.touches[0].pageY;
			 // 开启下拉刷新状态
　　　　　　   this.isTouch = true
		 },
		touchMove(e) { //当手指在屏幕上滑动时连续地触发--该方法为下拉刷新核心代码
		 	this.movepageY = e.touches[0].pageY;
		   //这个 touchMove，只要页面在动都会发生的，所以 touching就起作用了
　　　　　　//如果 touching为false，说明这个正在移动的页面不是我们想要的下拉刷新，有可能是用户随意拉了一下页面而已，或者其他
　　　　　　if(!this.isTouch) return;
　　　　　　　　　// 获取移动的距离
　　　　　　let diff = this.movepageY - this.startPageY
             // console.log(diff)
	　　　　　　//判断是向上拉还是向下拉 
	　　　　　　if(diff >0) { //大于0为向上滑
	　　　　　　　　e.preventDefault()
	　　　　　　} else { //为向下滑
	　　　　　　　　return 　　
	　　　　　　}
　　　　　　//这个this.top要对应绑定到该元素的transform: translateY(+top+ 'px')上，不然是无法拉动的
　　　　　　// 因此这里还要对偏移高度做一下处理，直接设置diff +(this.status === loading ? 40 : 0) 太快了，因为拉取幅度太大
　　　　　　//让diff*0.25这样子就差不多了
　　　　　　this.top = Math.floor(diff*0.25) + (this.status === "loading" ? 40 : 0)
	　　　　　　if(this.top >= 40){
				  this.isPullDown=true;//显示
	　　　　　　　　this.status = "loading"   //代表正在拉取
	　　　　　　} else {
				  this.isPullDown=true;//显示
	　　　　　　　　//this.status = "more"  // 代表初始转态
	　　　　　　}　
		},
		touchEnd(e) { //当手指从屏幕上移开时触发。
			 //1下拉刷新也就是（touchstart => touchmove(下移动) =>touchend）的一个过程
			 //大体思路：
			 //下拉主要与手指触摸y轴点有关
			 //1.记录下手指按下y轴的坐标点
			 //2.记录手指移动时，移动的距离（注意：要判断手指是向上移还是向下移，向上移就是滚动）
			 //3.启动下拉刷新事件
		　 this.isTouch = false
　　　　　　if(this.status === "noPullDow") { //结束下拉刷新
　　　　　　　　this.top = 40
　　　　　　　　return 
　　　　　　} 
　　　　　　//判断抬起时的高度，是大于40 就开启刷新
　　　　　　if(this.top >= 40) {
				this.isPullDown=true;//显示
				this.status="loading";
				this.$emit('pullDown'); //下拉刷新-
　　　　　　} else { 
　　　　　　　　//this.status = "more"
　　　　　　　　this.top = 0
　　　　　　}
		},	
		onScroll(e) {
			         //止方法存在兼容问题
		             //1.当内容高度>窗口（父元素）===才会触发滚动事件
			         //可滚动容器的高度
                    let innerHeight = e.detail.scrollHeight-100;  //子元素高度
                    //屏幕尺寸高度
                    let outerHeight = uni.getSystemInfoSync().screenHeight;				
                    //可滚动容器超出当前窗口显示范围的高度
                    let scrollTop = e.detail.scrollTop;
                    //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
                    //console.log(innerHeight + " " + outerHeight + " " + scrollTop);
					console.log(this.status)
				     if(this.status=="loading"){ //正在加载中
					     return;
				     }
					
                    if(innerHeight < (outerHeight + scrollTop)) {
						this.status="loading";
						this.isPullingUp=true;//显示
					    this.$emit('pullingUp'); //加载更多操作	
                    }
		 }
	 }		
}
</script>

<style lang="scss" scoped="scoped">
.LoadMore{
	position:fixed;
	top:0;
	left:0;
	right:0;
	bottom:0;
	width: 100%;
	height:100%;
	box-sizing: border-box;
	background:#eee;
	z-index:9999;
	overflow-y:auto;
	.loading{
		text-align:center;
		width: 100%;
		padding:10upx;
		box-sizing:border-box;
		vertical-align:middle;
		.loadingimg{
			width:30upx;
			height:30upx;
			vertical-align:middle;
		}
	}
    .loade-more-con{
		  background: #fff;	
		  display: flex;
		  padding:10upx;
		  box-sizing: border-box;
		  border-bottom:1upx solid #eee;
		  .left{
			  width:20%;
			  .img{
				  background: #eee;
				  height:80upx;
				  width:80upx;
				  margin: 0 auto;
			  }
		  }
		  .right{
			  width: 80%;
		  }
	} 
}
</style>
