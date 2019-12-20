<!--*
  * Keyboard 移动端自定义键盘
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
   <view class="keyboard" :class="{show:show}" >
	  <view class="ul" v-for="(item,i) in currentDatas">
		<text v-for="(item1,j) in item" @click.stop="clickKeyBoard(item1)" :class="{'optcity':item1==='　','finish1':item1==='完','finish':item1==='完' || item1==='成','del1':item1==='删','del':item1==='删' || item1==='除'}">{{item1}}</text>
	  </view>
   </view>
</template>
<script>
export default{
	props:{
		characterDatas : { // 指针图片地址
			type :Array, 
			default(){
				return [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'], ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'], ['删','除','U', 'V', 'W', 'X', 'Y', 'Z','完', '成']]
		     }
		},
		areaDatas:{
			type :Array,
			default(){
				return [['京', '津', '冀', '晋', '蒙', '辽', '吉','黑', '沪', '苏'], [ '浙', '皖', '闽', '赣','鲁', '豫', '鄂', '湘', '粤', '桂'], [ '琼','渝', '川', '贵', '云', '藏', '陕', '甘','青', '宁'], [ "删", "除","　",'新', "澳", "港", "　", "　", "完", "成"]]
			}
		},
	    index:{
			type:Number,
			default:-1
		  }	
	},
	data() {
		return {
			 show:false,
			}
	},
	created:function(){
	
	},
	methods:{
		  showKeyboard() {
		        this.show = true
		      },
		    hideKeyboard() {
		        this.show = false
		      },
		    clickKeyBoard(value) {
		        if (value === "　") {
		          return;
		        } 
				let res=value.replace(/(\s*$)/g, ""); //去掉空格  
		        if (res != "成" && res != "完" && res != "删" && res != "除"){
		          this.$emit("keyboardValueChanged",value.toUpperCase());  //返回数据
		        }else if(res === "删" || res === "除"){
					this.$emit('delKeyboard')
				}else{
		          this.hideKeyboard();
		        }
		      }
	},
  computed:{
	  currentDatas(){ //侦听器
		return this.index ===0?this.areaDatas:this.characterDatas;
	  }
	}
}
</script>
<style lang="scss" scoped="scoped">
.keyboard{
	position:fixed;
	left:0;
	right:0;
	bottom:0;
	background:#f5f5f5;
	padding:6rpx 0;
	z-index:999;
	width:100%;
	transition: all 0.3s ease;
	transform: translateY(100%);
	&.show{ 
	   transform:translateX(0);
	}
	.ul{
	  display:flex;
	  justify-items:center;
	  justify-content:center;
	  overflow:hidden;
	  & > text:active{
		 background: #f5f5f5;
		}
	  & > text.optcity{
		 background: #f5f5f5 !important;
		}
	  & > text.del{
		  border-bottom-left-radius: 0;
		  border-top-left-radius: 0;
		  padding-left: 0;
		  text-align: left;
		  margin-left: 0;
		  background:#333;
		  color:#fff;
	     }
	  & > text.del1{
		  margin-left:3rpx;
		  border-bottom-right-radius:0;
		  border-top-right-radius:0;
		  border-bottom-left-radius:6rpx;
		  border-top-left-radius:6rpx;
		  text-align:right;
		  margin-right:0;
	  }
	  & > text.finish{
			background:#f47a37;
			color:#fff;
		}
	  & > text.finish1{
			margin-right:0;
			border-bottom-right-radius:0;
			border-top-right-radius:0;
			padding-left:3rpx;
			text-align:right;
			}
	  & > text.finish:last-of-type{
			margin-left:0;
			border-top-left-radius:0;
			border-bottom-left-radius:0;
			padding-right:6rpx;
			text-align:left;
			}
	  & > text{
			flex:1;
			text-align:center;
			background:#fff;
			margin:6rpx;
			height:66rpx;
			line-height:66rpx;
			font-size:28rpx;
			border-radius:6rpx;  
		}
	}
}
</style>