<!--
  * Indexlist 快速索引
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
		<view v-show="visible"  class="uni-content">
				   <!-- 搜索框 -->
				 <view class='list-search'>
				 						<i class="iconfont icon-sousuo"/></i>
				 						<input placeholder="输入您要搜索的城市" @input='search' v-model="searchData"/>
				 						<button class='search-button' @tap='search'>搜索</button>
				 </view>
			  <!-- 搜索到所有数据的时候显示 -->
			 <block v-if="list.length!= 0">
	             <scroll-view  class="list-scroll" id="tabWarp" :scroll-into-view="scrollViewId" scrollTop="200" scroll-y="true"  :style="{height:winHeight + 'px'}">
								
							<view v-if="!noData" v-for="(item,index) in list" :key="index">
									<view class='list-title fixed-title-hock' :id="item.title=='热门城市'? 'aa' : item.title ">{{item.title}}</view>
									<view :class="{'list-horizontal':index===0}">
										<view class="list-name border" v-for="(city,idex) in item.item" :key="idex">{{city.name}}</view>
									</view>
				      </view>
					 
					 
					 	<view v-if="noData && isSearchData.length>0" v-for="(item,index) in isSearchData" :key="index">
					        <view class='list-title fixed-title-hock' :id="item.title=='热门城市'? 'aa' : item.title ">{{item.title}}</view>
									<view :class="{'list-horizontal':index===0}">
										<view class="list-name border" v-for="(city,idex) in item.item" :key="idex">{{city.name}}</view>
									</view> 
				    </view>
				    <view v-if="isSearchData.length<=0 && noData" class='nodata'>
							<i class="iconfont icon-jinggao"></i>
					    暂无此数据信息
					  </view>
						 </scroll-view>
						    <!-- 右侧索引显示 -->
				 <view  class='list-right-wrapper' @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @touchcancel="touchCancel" :style="{height:winHeight-100 + 'px'}" >
				   <text class='right-item' v-for="(item,index) in rightArr" :key="index" :class="{'active':idx===index}" >{{rightArr[index]}}</text>
				 </view>
			</block>
		  <block v-else>
				<view class='nodata'>没有搜索到相关的数据哦</view>
		  </block>
			
			<view v-if="isShow" class="mask-toast">
					{{letter}}
			</view>
				
		</view>
	
	
	</view>
</template>

<script>
import city from '../../components/IndexList/city.js'
export default {
	name:'IndexLists',
	 props: {
		  cityData:{
			type: Object,
			default(){
				return {}
			}
		  }
		},
		data() {
			return {
			   visible:false,
			   isSearch:false,
			   list:city, //城市数据
			   rightArr:'',
			   idx:-1,
				 letter:'', //字母
				 winHeight:0,
				 touchmove:false,
				 itemHeight: 0,
				 titleHeight:0,
				 isShow:false,
				 scrollViewId:"aa",
				 searchData:'', //搜索值
				 isSearchData:[],
				 noData:false
			}
		},
		onLoad(e) {

		},
		created() {
	      this.resetRight(this.list)
	    },
		methods: {
	        hide() { //显示头部
			        this.visible=false;
	        },
			    show(config){
				       this.visible=true;
							 //获取高度
							 let winHeight = uni.getSystemInfoSync().windowHeight; //可使用窗口高度
							 		this.itemHeight = winHeight / 26;
							 		this.winHeight = winHeight;
			      },
			    /**
				 * 数据重新渲染
				 */
				  resetRight(data) {
						let rightArr = []
						for (let i in data) {
						rightArr.push(data[i].title.substr(0, 1));
						}
						this.rightArr=rightArr;
				},
				touchStart(e) {//当手指触摸屏幕时触发
				     this.touchmove = true;
						let pageY = e.touches[0].pageY;
						let index = Math.floor((pageY - this.titleHeight) / this.itemHeight); 
								if(index<=0){
									this.idx=0
								 }else if(index>=(this.rightArr.length-1)){
									this.idx=this.rightArr.length-1
								}else{
									this.idx=index;
								}
								this.letter=this.rightArr[this.idx];
								this.isShow=true;
								this.scrollViewId=this.letter=='热'? 'aa' : this.letter
			  },
		  	touchMove(e) { //当手指在屏幕上滑动时连续地触发
					let pageY = e.touches[0].pageY;
					let index = Math.floor((pageY - this.titleHeight) / this.itemHeight); 
						 
							if(index<=0){
								this.idx=0
							 }else if(index>=(this.rightArr.length-1)){
								this.idx=this.rightArr.length-1
							}else{
								this.idx=index;
							}
							this.letter=this.rightArr[this.idx];
						 console.log(this.letter)
							this.isShow=true;
							this.scrollViewId=this.letter=='热'? 'aa' : this.letter
			},
			touchEnd() { //当手指从屏幕上移开时触发。
			   this.touchmove = false;
		     this.isShow=false;
				 this.idx=-1
			},
			touchCancel() { //当系统停止跟踪触摸时触发
				 this.isShow=false;
				 this.touchmove = false;
				this.idx=-1
			},   
      search(event){ //搜索相关逻辑实现
			console.log(event.detail.value)
        let data = this.list; //数据
				let searchData=event.detail.value; //获取数据
        let itemArr = [];
        for (let i = 0; i < data.length; i++) {
            for(let j = 0; j < data[i].item.length; j++){
              if (data[i].item[j].name.indexOf(searchData) > -1){
                itemArr.push(data[i]); //数据信息
                break;
              }
            }
          }		
			console.log(searchData)		
       if(searchData){
				 console.log("有数据")
				 console.log(itemArr.length)
         if(itemArr.length<=0) {
					 this.isSearchData=[];
         }else{
					  this.isSearchData=itemArr;
         }
        this.noData=true; 
       }else{
				 console.log("清掉数据")
         this.isSearchData=[]; //清掉数据
         this.noData=false; //有数据
       }
      },
		},
		 computed: {
			
        }		
	}
</script>

<style lang="scss" scoped="scoped">
.uni-content{
	  position: absolute;
	  top:0;
	  left:0;
	  right:0;
	  bottom:0;
	  width:100%;
	  height: 100%;
	  background:#EEE;
	  &::-webkit-scrollbar{
			width: 0;
			height: 0;
			color: transparent;
			}
			.nodata{
				width: 100%;
				text-align: center;
	  		font-size:20rpx;
				.icon-jinggao{
					 display: block;
					 font-size:100rpx;
					 color: red;
				}
			}
		  .mask-toast{
				    width:100rpx;
						height:100rpx;
						line-height:100rpx;
						border-radius:10rpx;
						font-size:30rpx;
						position:fixed;
						text-align: center;
						color: #fff;
						top: 50%;
						left: 50%;
						-webkit-transform: translate(-50%, -50%);
						-ms-transform: translate(-50%, -50%);
						transform: translate(-50%, -50%);
						z-index: 999;
						background:rgba(0,0,0,0.5);
			}
      .list-search{
			background:#fff;
			padding:10rpx 20rpx ;
			display:flex;
			box-sizing:border-box;
			position:fixed;
			top:0;
			left:0;
			z-index: 999;
			width: 100%;
			input{
				background:#eee;
				width:60%;
				height:80rpx;
				padding-left:100rpx;
				margin-right:20rpx;
				border-radius: 10rpx;
				font-size: 20rpx
			}
			.iconfont{
				position:absolute;
				top:20rpx;
				left:40rpx;
				z-index:99;
				font-size:48rpx; 
				color:#999
			}
			.search-button{
				width:28%;
				height:80rpx;
				line-height:80rpx;
				background: #2b9939;
				color: #fff
			}
		} 
				.list-right-wrapper {
			  position:fixed;
			  top:120rpx;
			  right:10rpx;
			  padding: 20rpx 0;
			  border-radius: 40rpx;
			  z-index: 2;
			  background: #f5f5f5;
			  box-sizing: border-box;
				overflow: hidden
			}
			.right-item {
			  display:block;
			  justify-content: center;
			  align-items: center;
			  padding: 5rpx 15rpx;
			  font-size: 26rpx;
			  color: #666;
			  text-align:center
			}
			.right-item.active {
			  color: #3cb7f3
			}
		
	  .list-scroll {
		  width: 100%;
		  height: 100%;
		  box-sizing: border-box;
			margin-top:100rpx;
		  /* 样式控制  */	
			.list-title {
			  background: #f5f5f5;
			  color: #666;
			  font-size: 36rpx;
			  padding: 10rpx;
			  padding-left: 30rpx;
			  padding-top: 15rpx;
			}

			.list-name {
			  position: relative;
			  font-size: 28rpx;
			  padding: 15rpx;
			  padding-left: 30rpx;
			  color: #999;
			  background:#fff;
			}
			.list-name.border::after {
			  content: "";
			  position: absolute;
			  left: 30rpx;
			  right: 0;
			  top: 0;
			  height: 1rpx;
			  background: #f5f5f5;
			}
			/* 热门城市横排显示样式  */
			.list-horizontal {
			  display: flex;
			  flex-wrap: wrap;
			  padding: 10rpx;
			  padding-right: 50rpx;
			  background: #fff
			}

			.list-horizontal .list-name {
			  padding: 5rpx 20rpx;
			  border: 1rpx #ccc solid;
			  border-radius: 10rpx;
			  margin:8rpx;
			}
	}	
   }
</style>



