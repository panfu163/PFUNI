<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 多选
 @version 1.0
 @E-mail  panfu163@126.com
-->
<template>
	  <view class="chechbox-box">
			<view v-if="isSkin=='default'" class="boxDefault">
				  <label 
				  :class="item.checked ?  'checkboxDefault selectBoxDefault' : 'checkboxDefault '" 
				  @tap="onClick(item.value,index)" 
				  v-for="(item,index) in islabelList" 
				  :key="item.value">
				  <i :class="item.checked ? 'iconfont icon-xuanze' : 'iconfont icon-xuanze1'"></i>
					<checkbox :value="item.value" :checked="item.checked" v-show="false"/>{{item.name}}
				  </label>
			</view>
			<view v-if="isSkin=='box'" class="checkboxChange">
				  <label 
				  :class="item.checked ?  'checkbox selectBox' : 'checkbox '" 
				  @tap="onClick(item.value,index)" 
				  v-for="(item,index) in islabelList" 
				  :key="item.value">
					<checkbox :value="item.value" :checked="item.checked" v-show="false"/>{{item.name}}
				  </label>
			</view>
	  </view>
</template>

<script>
  export default {
    data() {
      return {
		  labelDataList:'',
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
	      this.labelDataList=[];
			  if(this.islabelList[index].checked){
				  this.islabelList[index].checked=false;
			  }else{
				 this.islabelList[index].checked=true;
			  }
			  for(var i=0;i<this.islabelList.length;i++){
				  if(this.islabelList[i].checked){
					  this.labelDataList.push(this.islabelList[i])  
				  }
			  }
				console.log(this.labelDataList)
			  this.$emit('getCheckBox',this.labelDataList); 
       }
    }
  }
</script>

<style lang="scss" scoped="scoped">
/**方框样式**/
.chechbox-box{
	width: 100%;
		/**默认样式**/
	.boxDefault{
		width: 100%;
		.checkboxChange{
			display: flex;
			flex-wrap:wrap;
		}
		.checkboxDefault{
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
		
	.checkboxChange{
		display: flex;
		flex-wrap:wrap;
	}
	.checkbox{
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
