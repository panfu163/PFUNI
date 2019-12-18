<!--
  * Select 表单多选
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
	<view class="pf-selectBox">
		 <view class="inpunt">
			  <input class="uni-input" maxlength="10" v-model="val"  @input="getSearch" @click="getShowMask"  :placeholder="isPlaceholder" />
			  <view v-if="showMask" class="iconfont  icon-arrowtop" @click="getShowMask"></view>
			  <view v-else class="iconfont icon-arrowdown" @click="getShowMask"></view>
			  <scroll-view v-if="showMask" class="list" scroll-y="true">
				    <template v-if="isNodata">
				       <view class="item">暂无此数据~</view>
					</template>
					<template v-else>
					  <!--多选-->
					  <template v-if="isCheckbox">
						  <view v-if="serchList.length>0" class="item items" v-for="(item,index) in serchList"
						  :class="{disabled:item.disabled}"
						  :key="index" @click="moreBindChange(item,index)">
												   <text v-for="(i,ids) in selected" :key="ids" v-if="i==index && !item.disabled" class="iconfont icon-xuanze"></text>
						  {{item.value}}<!--搜索的结果处理--></view>
						  <view v-if="serchList.length<=0" class="item items" v-for="(item,index) in innerList"
						  :class="{disabled:item.disabled}"
						  :key="index" @click="moreBindChange(item,index)">
						   <text v-for="(i,ids) in selected" v-if="i==index && !item.disabled" :key="ids" class="iconfont icon-xuanze"></text>
							{{item.value}}
						  </view>
					  </template>
					 <template v-else>
						 <!--单选-->
						 <view v-if="serchList.length>0" class="item" v-for="(item,index) in serchList"
						 :class="{active: isIconfont == index, disabled:item.disabled}"
						 :key="index" @click="bindChange(item)">
						 <text v-if="isIconfont == index" class="iconfont icon-xuanze"></text>
						 {{item.value}} <!--搜索的结果处理-->
						 </view>
						 <view v-if="serchList.length<=0" class="item" v-for="(item,index) in innerList"
						 :class="{active: isIconfont == index, disabled:item.disabled}"
						 :key="index" @click="bindChange(item,index)">
						    <text v-if="isIconfont == index" class="iconfont icon-xuanze"></text>{{item.value}}
						 </view>
					 </template>
					</template>
			  </scroll-view>
			 <view class="checkbox" v-if="isCheckbox && showMask">
				 <text class="bnt" @click="cancel">取 消</text>
				 <text class="bnt" @click="confirm">确 定</text>
			 </view>
		 </view>
     </view>
</template>

<script>
export default {
	 name:'Select',
	 props: {
		  placeholderStyle:{
			type: String,
			default:'color:#F76260'
		  },
		  valueText:{
				type: String,
				default:'请选择'
		  },
		  isPlaceholder:{
			 type: String,
			 default:'最大输入长度为10' 
		  },
		  activeIndex:{
			 type:Number,
			 default:2 
		  },
		  list:{
			 type:Array,
			 default(){
				return []
			} 
		  },
		  isSelected:{ //选中多个
			type:Array,
			 default(){
				return [] //[0,1,2,3] //指定选中
			}  
		  },
		  isCheckbox:{
			  type:Boolean,
			  default:false
		  }
		},
		data() {
			return {
			   showMask:false,//显示下拉例表
			   isNodata:false ,//无数据
			   serchList:[] ,//查询数据
			   val:this.valueText,
			   isIconfont:this.activeIndex,
			   selected:this.isSelected
			}
		},
		onLoad(e) {
			
		},
		created() {
	    
	    },
		methods: {
			moreBindChange(item,index){ //多选
				if(item.disabled) return;
				if(this.selected.indexOf(index) === -1) {
				  // 不存在,则添加
				  this.selected.push(index)
				} else {
				  // 存在,则删除
				  this.selected.splice(this.selected.indexOf(index),1)
				}	
			    this.selected=[...new Set(this.selected)];
			   console.log(this.selected)
			},
			bindChange(item,index){ //单选
			 if(item.disabled) return;
			  this.showMask=this.showMask?false:true;
		      this.val=item.name,
			  this.isIconfont=index; //选中位置
			  this.$emit('getList',item) //父组件传递数据
			},
			getShowMask(){ //显示下拉例表
				this.showMask=this.showMask?false:true;
			},
			convertListData(orginArr){ //转换列表的数据格式
				const arr = [];
				orginArr.forEach((val, index)=>{
					let value = typeof val === 'object' && 'value' in val ? val.value : val;
					let name = typeof name === 'object' && 'name' in val ? val.name : val;
					let isDisabled = typeof val === 'object' && val.disabled == true;
					arr.push({
						isActive:true,
						value: value,
						name: name,
						disabled: isDisabled,
					});
				});
				return arr;
			},
		    getSearch(event){ //查询内容
			        let list=this.innerList;
			        let keyWord=event.detail.value
			        if(keyWord){
			          let Arr =this.fuzzyQuery(list,keyWord);
			          if(Arr.length<=0){
			            this.isNodata=true;
			          }else{
			            this.isNodata=false;
			            this.serchList=[];
			            this.serchList=Arr;
			          }
			        }else{ //初始数据
			          this.isNodata=false;
			          this.serchList=[]; //清掉查询数据
			        }
			    },
			 /**
			 * 使用spilt方法实现模糊查询
			 * @param  {Array}  list     进行查询的数组
			 * @param  {String} keyWord  查询的关键词
			 * @return {Array}           查询的结果
			 */
			fuzzyQuery(list,keyWord){
			  var arr = [];
			  for (var i = 0; i < list.length; i++) {
				if(list[i].value.split(keyWord).length > 1) { //有数据
				  arr.push(list[i]);
				}
			  }
			  return arr;
			},
			confirm(){ //确定
				this.showMask=this.showMask?false:true;
				let isArr=[];
				 for(let i=0; i<this.selected.length;i++){
					 isArr.push(this.innerList[parseInt(this.selected[i])]);
				 }
				this.$emit('getList',isArr) //父组件传递数据
				let valArr=[]
				for(let i=0;i<isArr.length;i++){
					valArr.push(isArr[i].name);
				}
				this.val=valArr.join(",");
			},
			cancel(){ //取消
				this.showMask=this.showMask?false:true;
				this.val="";
				this.selected=[];
			}
		},
		 computed: {
			innerList(){
				return this.convertListData(this.list);
			},
        }
	}
</script>

<style lang="scss" scoped="scoped">
.pf-selectBox{
	width:100%;
	.inpunt{
		box-sizing: border-box;	
		position: relative;
		.iconfont{
			position:absolute;
			top:25rpx;
			right:20rpx;
			font-size:40rpx;
			color:#999
		}
		.uni-input{
			height: 100rpx;
			border:1rpx solid #eee;
			padding:0 10rpx;
			margin-bottom: 20rpx;
		}
	    .list{
			border:1rpx solid #eee;
			position: absolute;
			top:100rpx;
			height:200rpx;
			overflow-y:auto;
			background:#fff;
			width:100%;
			box-sizing: border-box;
			z-index:9;
			.item{
				padding:20rpx;
				border-bottom:1rpx solid #eee;
				position:relative;
				&:last-child{
					border:0;
				}
				.iconfont{
					position:absolute;
					top:20rpx;
					left:10rpx;
					font-size:28rpx;
					color:#2b9939;
				}
			}
			.disabled{
				color:#eee;
			}
			.active{
				padding-left:60rpx;
			}
			.items{
				padding-left:60rpx;
			}
		}
		.checkbox{
			position: absolute;
			top:300rpx;
			height:73rpx;
			background:#fff;
			width:100%;
			box-sizing: border-box;
			border:1rpx solid #eee;
			border-top:0;
			overflow:hidden;
			padding:10rpx 20rpx;
			z-index:9;
			text-align:right;
			.bnt{
				border:1rpx solid #eee;
				margin:0 20rpx;
				height:50rpx;
				line-height:50rpx;
				text-align: center;
				padding:0 20rpx;
				overflow:hidden;
				border-radius:5rpx;
				display: inline-block;
			}
		}
	}
}
</style>