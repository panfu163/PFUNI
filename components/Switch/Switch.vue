<!---
 @author  PanFu
 @data 2019-10-17 14:39
 @description switch 开关按钮
 @version 1.0
 @E-mail  panfu163@126.com
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
	 name:'pfSwitch',
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
    width:82upx;
   .switch{
    display:none;
   }
   label{
    position:relative;
    display: block;
    padding: 1px;
    border-radius: 24px;
    height: 22px;
    margin-bottom: 15px;
    background-color: #eee;
    cursor:pointer;
    vertical-align:top;
    -webkit-user-select: none;
    }
   label:before{
    content:'';
    display: block;
    border-radius: 24px;
    height: 22px;
    background-color:#fff;
    -webkit-transform: scale(1, 1);
    -webkit-transition: all 0.3s ease;
       }
   label:after{
    content: '';
    position: absolute;
    top: 50%;  
    left: 50%;  
    margin-top: -11px;  
    margin-left: -11px;
    width: 22px;
    height: 22px;
    border-radius: 22px;
    background-color:#fff;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.08);
    -webkit-transform: translateX(-9px);
    -webkit-transition: all 0.3s ease;
        }
    label.red:after{
		-webkit-transform:translateX(9px);
	 }
    label.red:before{
		background-color:#de0b23;
	}
   label.blue:after{
		-webkit-transform:translateX(9px);
	 }
	label.blue:before{
		background-color:#4395ff;
	}
	label.green:after{
			-webkit-transform:translateX(9px);
		 }
	label.green:before{
		background-color:#009a61;
	}
	label.black:after{
			-webkit-transform:translateX(9px);
		 }
	label.black:before{
		background-color:#000;
	}
	label.grey:after{
			-webkit-transform:translateX(9px);
		 }
	label.grey:before{
		background-color:#eee;
	}

}
</style>
