<!--*
  * Login 弹出登录框
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
    <view class="logIn" v-show="isShowLogin">
        <view class="smke" @click="hide()"></view>
        <view class="dialog" v-show="isShowLogin">
            <view class="row">
                <i class="iconfont icon-geren"></i>
                <input type="number"  placeholder="请输入手机号" v-model="phoneNumber"  maxlength="11">
            </view>
            <view class="row">
                <i class="iconfont icon-mima"></i>
                <input type="number" placeholder="请输入验证码" maxlength="6" v-model="verificationCode">
                <span @click="getCode" :class="{'get-identifying-coding':isGetIdentifyingCoding}" :style="{'background':bgColor}">{{identifyingCode}}</span>
            </view>
            <button class="button"  @click="logIn" :style="{'background':bgColor}">立即登录</button>
        </view>
    </view>
</template>

<script>
    export default {
        name: "logIn",
        components: {
        },
        props:{
            bgColor:{
                type:String,
                default:"#1989fa"
            },
            clickMaskHide:{
                type:Boolean,
                default:true
            }
        },
        mounted() {

        },
        data() {
            return {
                reg: /^1[0-9]{10}$/,// 号码匹配正则
                isShowLogin: false,//是否显示登录
                time: 59,// 倒计时
                identifyingCode: "获取验证码",// 获取验证码文字
                isGetIdentifyingCoding: false,// 当前是否在获取验证码
                phoneNumber: "",// 手机号码
                verificationCode: "",//验证码
                timer: undefined,// 倒计时计时器
                callback:undefined
            }
        },
        methods: {
            // 显示登录窗口
            show(callback) {
                this.isShowLogin = true;
                this.time = 59;
                this.identifyingCode = "获取验证码";
                this.isGetIdentifyingCoding = false;
                this.phoneNumber = undefined;
                this.verificationCode = undefined;
                this.data = undefined;
                if (this.timer)
                    clearInterval(this.timer)
                this.timer = undefined;
                this.callback = callback;
            },
            hide(){// 隐藏登录窗口
                setTimeout(() => {
                    this.isShowLogin = false;
                }, 300)
            },
            getCode(){ //获取验证码
                // 如果在倒计时，直接不处理
                if (this.isGetIdentifyingCoding)
                    return;
					
                if (!this.phoneNumber) {
					uni.showToast({
					    title: '请输入手机号',
					    duration: 2000,
						icon:'none'
					});
					console.log("请输入手机号")
                    return;
                } else if (!this.reg.test(this.phoneNumber)) {
					uni.showToast({
						title:"手机号格式错误",
						icon:"none"
					})
                    return;
                }
                // 设置状态
                this.isGetIdentifyingCoding = true;
                this.identifyingCode = this.time + "秒后重试";
                // 倒计时
                if (this.timer)
                    clearInterval(this.timer)
                this.timer = setInterval(() => {
                    this.time = --this.time;
                    if (this.time === 0) {
                        clearInterval(this.timer)
                        this.time = 59;
                        this.identifyingCode = "重新获取";
                        this.isGetIdentifyingCoding = false;
                    } else {
                        this.identifyingCode = this.time + "秒后重试";
                    }
                }, 1000);
                this.getVerificationCode();
            },
            logIn(){
                if (!this.phoneNumber) {
					uni.showToast({
						title:"请输入手机号",
						icon:"none"
					})
                    return;
                } else if (!this.reg.test(this.phoneNumber)) {
					uni.showToast({
						title:"手机号格式错误",
						icon:"none"
					})
                    return;
                }
                if (!this.verificationCode) {
					uni.showToast({
						title:"请输入验证码",
						icon:"none"
					})
                    return;
                }else  if (this.verificationCode.length != 6) {
                    if(this.verificationCode.length != 6){
						uni.showToast({
							title:"验证码不正确",
							icon:"none"
						})
                        return;
                    }
                }
				//下面可以处理登录成功回掉接口信息
				 let res={data:"接口反回的数据"} //接口反回的数据
                 this.callback(res,this.phoneNumber,this.verificationCode);
				 this.hide(); //登录成功
            },
            getVerificationCode(){ //获取验证码
                uni.showToast({
                	title:"此方法获取验证码AJAX接口",
                	icon:"none"
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .logIn{
        position:fixed;
        left:0;
        top:0;
        right:0;
        bottom:0;
        display:flex;
        z-index:100;
        align-items:center;
        justify-content:center;
        justify-items:center;
        backdrop-filter:blur(10rpx);
        .smke{
            position:fixed;
            left:0;
            top:0;
            right:0;
            bottom:0;
            background:rgba(0, 0, 0, .5);
            z-index:100;
        }
        .dialog{
            width:80%;
            background:#fff;
            border-radius:20rpx;
            position: relative;
            z-index:130;
            .button{
                width:90%;
                margin:40rpx auto;
                border-radius:40rpx;
                font-weight:bold;
                font-size:30rpx;
                border:0;
				color:#fff;
            }
            .row{
                margin:16rpx 20rpx 0 20rpx;
                display:flex;
                border-bottom:1rpx solid #EEEEEE;
                padding:5rpx 0;
                height:100rpx;
                position: relative;
                i{
                    -webkit-background-size: contain;
                    background-size: contain;
                    flex: 0 0 60rpx;
                    display: inline-block;
                    width:44rpx;
                    height:50rpx;
                    line-height:50rpx;
                    -webkit-background-size: contain;
                    background-size: contain;
                    border-right:1rpx solid #D2D2D2;
                    margin-top:20rpx;
                }
                input{
                    padding:20rpx 20rpx;
                    width:100%;
					height:100%;
                    outline:none;
                    border:none;
                }
                span{
                    margin-top:15rpx;
                    width:70%;
                    height:70rpx;
                    line-height:70rpx;
                    overflow: hidden;
                    display: block;
                    background:#1989fa;
                    text-align:center;
                    font-size:24rpx;
                    color:#fff;
                    border-radius:20rpx;
                    &.get-identifying-coding{
                        background: rgba(0, 0, 0, 0) !important;
                        color:#999
                    }
                }
            }
        }
    }
</style>
