<!--
  * Switch 开关
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
     <div class="switch-box">
			<div @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)" @tap="onClick($event)">
				<input type="checkbox" class="switch" :checked="isChecked" />
				<label v-if="isChecked" :class="Styles"></label>
				<label v-else></label>
			</div>	
     </div>  
</template>

<!--script-->
<script>
export default {
	 name:'Switchs',
	 props: {
		   msg: {
                type: Boolean,
                default: true
            },
		    Styles: {
			     type:String,
			     default:"red" //red、black、green、blue、grey  可选择颜色
			 },
		},
		data() {
			return {
			  startX:0,
			  moveX:0,
			  isChecked:this.msg,
			  isTouch:false,
			}
		},
		onLoad(e) {

		},
		created() {
	    
	    },
		methods: {
	        touchstart(event) {
                this.startX = event.touches[0].pageX;
				this.isTouch=true
            },
            touchmove(event) {
                this.moveX = event.touches[0].pageX - this.startX;
				this.isTouch=false;
            },
            touchend(event) {
				if(this.isTouch) return; //滑动才能往下执行
                if (44 / 3 < Math.abs(this.moveX)) {
                    if (this.moveX < 0) {
                        this.isChecked = false;
                    } else {
                        this.isChecked = true;
                    }
                }
                this.moveX = 0;
                this.startX = 0;
				this.$emit("getChecked",this.isChecked);
            },
			onClick(event){
                if(!this.isTouch) return; //不是滑动才能执行
				if (this.isChecked) {
				    this.isChecked = false;
				} else {
				    this.isChecked = true;
				}
				this.$emit("getChecked",this.isChecked);
			}
		},
		computed: {
			
        }
	}
</script>
<!--css-->
<style lang="scss" scoped="scoped">
.switch-box{
    width:82rpx;
   .switch{
    display:none;
   }
   label{
    position:relative;
    display: block;
    padding:1rpx;
    border-radius:48rpx;
    height:44rpx;
    margin-bottom:30rpx;
    background-color: #eee;
    cursor:pointer;
    vertical-align:top;
    -webkit-user-select: none;
    }
   label:before{
    content:'';
    display: block;
    border-radius:48rpx;
    height:44rpx;
    background-color:#fff;
    -webkit-transform: scale(1, 1);
    -webkit-transition: all 0.3s ease;
       }
   label:after{
    content: '';
    position: absolute;
    top: 50%;  
    left: 50%;  
    margin-top: -22rpx;  
    margin-left: -22rpx;
    width: 44rpx;
    height: 44rpx;
    border-radius: 44rpx;
    background-color:#fff;
    box-shadow: 1rpx 1rpx 1rpx 1rpx rgba(0,0,0,0.08);
    -webkit-transform: translateX(-18rpx);
    -webkit-transition: all 0.3s ease;
        }
    label.red:after{
		-webkit-transform:translateX(18rpx);
	 }
    label.red:before{
		background-color:#de0b23;
	}
   label.blue:after{
		-webkit-transform:translateX(18rpx);
	 }
	label.blue:before{
		background-color:#4395ff;
	}
	label.green:after{
			-webkit-transform:translateX(18rpx);
		 }
	label.green:before{
		background-color:#009a61;
	}
	label.black:after{
			-webkit-transform:translateX(18rpx);
		 }
	label.black:before{
		background-color:#000;
	}
	label.grey:after{
			-webkit-transform:translateX(18rpx);
		 }
	label.grey:before{
		background-color:#eee;
	}

}
</style>
