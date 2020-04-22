<!--
  * Radio 单选
  * ============================================================================
  * 版权所有 2019-2024 www.pfuni.cn，并保留所有权利。
  * 网站地址: http://www.pfuni.cn；
  * ----------------------------------------------------------------------------
  * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和
  * 使用；不允许对程序代码以任何形式任何目的的再发布。
  * 侵权必究，请遵守版权约定！
  * ============================================================================
  *version 1.0.0
  *author : PanFu 1150928736@qq.com 
  *last update date : 2019-12-06 14:39
-->
<template>
	  <view class="radiobox-box">
			<view v-if="isSkin=='default'" class="boxDefault">
				  <label 
				  :class="item.checked ?  'radioboxDefault selectBoxDefault' : 'radioboxDefault '" 
				  @click="onClick(item.value,index)" 
				  v-for="(item,index) in islabelList" 
				  :key="item.value">
				  <i :class="item.checked ? 'iconfont icon-xuanze' : 'iconfont icon-xuanze1'"></i>
					<radio :value="item.value" :checked="item.checked" v-show="false"/>{{item.name}}
				  </label>
			</view>
			<view v-if="isSkin=='box'" class="radioboxChange">
				  <label 
				  :class="item.checked ?  'radiobox selectBox' : 'radiobox '" 
				  @click="onClick(item.value,index)" 
				  v-for="(item,index) in islabelList" 
				  :key="item.value">
					<radio :value="item.value" :checked="item.checked" v-show="false"/>{{item.name}}
				  </label>
			</view>
	  </view>
</template>

<script>
  export default {
    data() {
      return {
		  labelDataList:[],
		  labelName:'',
			islabelList:this.labelList,
			isSkin:this.skin
      }
	},
	props: {
		  labelList:{
				type: Array,
				default: function () {
				  return []
				},
			},
		 skin:{
			 type:String,
			 default:"default" //box
		 }
			 
	},
	created(){
		
	},
	onLoad(){
		 
	},
    methods:{
      onClick(name,index){ //选中处理
		  if(this.islabelList[index].checked){ //取消选择
					 this.islabelList[index].checked=false;
					 this.labelDataList=[];
			 }else{
				 for(var i=0;i<this.islabelList.length;i++){
				    this.islabelList[i].checked=false
				 }
				  this.islabelList[index].checked=true;
				  this.labelDataList=this.islabelList[index];
			 }
			 console.log(this.labelDataList)
			 this.$emit('getCheckBox',this.labelDataList); //返结果
			
       }
    }
  }
</script>

<style lang="scss" scoped="scoped">

	/**方框样式**/
.radiobox-box{
	width: 100%;
		/**默认样式**/
	.boxDefault{
		width: 100%;
		.radioboxChange{
			display: flex;
			flex-wrap:wrap;
		}
		.radioboxDefault{
		  padding:10rpx;
		  text-align:center;
		  margin:0 auto;
		  display: inline-flex;
			line-height:40rpx;
		}
		.selectBoxDefault{
		  color:#2b9939
		}
		.iconfont{
			padding-right:10rpx;
		}
	
	}	
		
	.radioboxChange{
		display: flex;
		flex-wrap:wrap;
	}
	.radiobox{
	  border: 1rpx solid #EB5248;
	  border-radius:7rpx;
	  padding:10rpx;
	  text-align:center;
	  margin:10rpx;
	}
	.selectBox{
	  background:#EB5248;
	  color:#fff;
	}

}	
</style>
