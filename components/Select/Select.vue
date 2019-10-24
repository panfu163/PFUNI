<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description 下拉选择
 @version 1.0
 @E-mail  panfu163@126.com
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
			top:25upx;
			right:20upx;
			font-size:40upx;
			color:#999
		}
		.uni-input{
			height: 100upx;
			border:1px solid #eee;
			padding:0 10upx;
			margin-bottom: 20upx;
		}
	    .list{
			border:1px solid #eee;
			position: absolute;
			top:100upx;
			height:200upx;
			overflow-y:auto;
			background:#fff;
			width:100%;
			box-sizing: border-box;
			z-index:9;
			.item{
				padding:10px;
				border-bottom:1px solid #eee;
				position:relative;
				&:last-child{
					border:0;
				}
				.iconfont{
					position:absolute;
					top:20upx;
					left:10upx;
					font-size:28upx;
					color:#2b9939;
				}
			}
			.disabled{
				color:#eee;
			}
			.active{
				padding-left:60upx;
			}
			.items{
				padding-left:60upx;
			}
		}
		.checkbox{
			position: absolute;
			top:300upx;
			height:73upx;
			background:#fff;
			width:100%;
			box-sizing: border-box;
			border:1px solid #eee;
			border-top:0;
			overflow:hidden;
			padding:10upx 20upx;
			z-index:9;
			text-align:right;
			.bnt{
				border:1px solid #eee;
				margin:0 20upx;
				height:50upx;
				line-height:50upx;
				text-align: center;
				padding:0 20upx;
				overflow:hidden;
				border-radius:5upx;
				display: inline-block;
			}
		}
	}
}
</style>