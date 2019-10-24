<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 单选
 @version 1.0
 @E-mail  panfu163@126.com
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
		  padding:10upx;
		  text-align:center;
		  margin:0 auto;
		  display: inline-flex;
			line-height:40upx;
		}
		.selectBoxDefault{
		  color:#2b9939
		}
		.iconfont{
			padding-right:10upx;
		}
	
	}	
		
	.radioboxChange{
		display: flex;
		flex-wrap:wrap;
	}
	.radiobox{
	  border: 1px solid #EB5248;
	  border-radius:7upx;
	  padding:10upx;
	  text-align:center;
	  margin:10upx;
	}
	.selectBox{
	  background:#EB5248;
	  color:#fff;
	}

}	
</style>
