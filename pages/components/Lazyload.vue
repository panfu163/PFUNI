<!--
  * PFUNI 懒加载
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
    <view>
        <view class="uni-list">
            <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index">
                <view class="uni-media-list">
                    <view class="uni-media-list-logo">
                        <image class="image" 
						:class="{lazy:!item.show}" 
						:data-index="index" 
						@load="imageLoad" 
						:src="item.show?item.src:''" />
                        <image class="image placeholder" 
						:class="{loaded:item.loaded}" 
						:src="placeholderSrc" />
                    </view>
                    <view class="list-body">
                        <view class="title">主标题</view>
                        <view class="ellipsis">列表二级标题</view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                windowHeight: 0,
                placeholderSrc:"/static/components/loading.png",
				list:this.getList(),
                show:false
            }
        },
        methods: {
            load() {
                uni.createSelectorQuery().selectAll('.lazy').boundingClientRect((images) => {
                    images.forEach((image, index) => {
                        if (image.top <= this.windowHeight) {
                            this.list[image.dataset.index].show = true; //显示图片
                        }
                    })
                }).exec()
            },
            imageLoad(e) {
                this.list[e.target.dataset.index].loaded = true//显示图片
            },
			getList(){
				var imgs = ['shuijiao', 'muwu', 'cbd']
				var list = []
				for (let i = 0; i < 20; i++) {
				    list.push({
				        src: `https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/${imgs[i%3]}.jpg`,
				        show: false,
				        loaded: false
				    })
				}
				return list;
			}
        },
        onLoad() {
            this.windowHeight = uni.getSystemInfoSync().windowHeight;//计算高度
        },
        onShow() {
            if (!this.show) {
                this.show = true
                setTimeout(() => {
                    this.load()
                }, 100)
            }
        },
        onPageScroll() {
            this.load()
        }
    }
</script>

<style lang="scss" scoped="scoped">
    .placeholder {
        opacity: 1;
        transition: opacity 0.4s linear;
    }

    .placeholder.loaded {
        opacity: 0;
    }
    .uni-media-list{
	   margin-bottom:20rpx;	
	}
    .uni-media-list-logo {
        position: relative;
		height:400rpx;
		overflow:hidden;
		width:100%;
    }

    .uni-media-list-logo .image {
        position: absolute;
		width:100%;
    }
	.list-body{
		width:100%;
		box-sizing: border-box;
		padding:20rpx;
		.title{
			font-size:32rpx;
		}
		.ellipsis{
			font-size:24rpx;
		}
	}
</style>