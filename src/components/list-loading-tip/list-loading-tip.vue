<template>
    <view class="list-loading-tip">
        <view class="loadmore" :hidden='!showThis' bindtap='clickLoadMore'>
        <van-icon name="replay" :hidden='!showIcon'/>
        <text>{{title}}</text>
    </view>
    </view>
</template>

<script>
export default {
  name: 'ListLoadingTip',
  props: {
      title: {
          type: String,
          default: '加载中...'
      },
      showThis: {
          type: Boolean,
          default: false
      },
      showIcon: {
          type: Boolean,
          default: false
      }
  }
}
</script>
<style scoped lang="scss">
.list-loading-tip {
	width: 100vw;
	height: 80rpx;
	background-color: red;
}
</style>