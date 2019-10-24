/**
 * onPageScroll 在H5上不能在组件中使用
 * 固此组件暂时不要使用
 */
<template>
	<view class="content">
	   <LoadMore 
	       ref="myScroll"
		   :listData="items" 
		   @pullDown="pullDown"
		   @pullingUp="pullingUp"
		    >
			<view class="loade-more-con" v-for="(item,index) in items" :key="index">
				<view class="left">
					<view class="img"></view>
				</view>
				<view class="righ">
					<view>{{item.name}}</view>
					<view>{{item.export}}</view>
				</view>
			</view>
		</LoadMore>
	</view>
</template>

<script>
	import LoadMore from '../../components/LoadMore/LoadMore.vue'
		export default {
			components: {
				LoadMore,
			},
	   onPageScroll(e) { //方这可以
			//console.log(e)
		},	
		data() {
			return {
				items:[{
					name:"小張",
					export:"我是小明不是小张"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				},{
					name:"小明",
					export:"我是小张不是小明呀~~~"
				}],
				page:1
			}
		},
		onLoad(e) {
		
		},
		created() {
			
	    },
		methods: {
	      getLoadMore(){
			  this.isShow=true;//显示加载更多
		  },
		  pullDown(){
			  this.page=1;
			   setTimeout((res)=>{
				   this.$refs.myScroll.setState("noPullDow");//更新成功
			   },2000)
		  },
		  pullingUp(){
			   this.page++
			 // console.log("上拉加载更多=========================") 
			 console.log(this.page+"====================")
			  if(this.page>20){
				  this.$refs.myScroll.setState("noPullUp");//加载完成
				  return;
			  }
			 setTimeout((res)=>{
				 let data=[{name:"王八"+this.page,export:"王八是新加的哦"},{name:"王八",export:"王八是新加的哦"}];
				 this.items = this.items.concat(data);
				 this.$refs.myScroll.setState("noPullUp");//加载完成			 
			 },5000)
		  }
		}
	}
	
</script>

<style lang="scss" scoped="scoped">
	.content{
		padding:0;
		box-sizing: border-box;
		font-size: 14upx;
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
