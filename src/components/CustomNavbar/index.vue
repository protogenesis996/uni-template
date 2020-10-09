<template>
    <view class="CustomNavbar" >
        <view class="empty" :style="{height: statusBarHeight + 2 +'px'}"></view>
        <view class="Navbar" :style="{height: ( bounding.top - statusBarHeight ) * 2 + bounding.height + 'px'}">
            <van-icon name="arrow-left" class="arrow-left"/>
            <view class="title" >{{title}}</view>
        </view>
    </view>
</template>

<script>
export default {
    name: 'CustomNavbar',
    props: {
        title: {
            type: String,
            default: '这是一个标题'
        }
    },
    computed: {
        statusBarHeight () {
            console.log(this.$store.state.systemInfo.statusBarHeight);
            return this.$store.state.systemInfo.statusBarHeight
        },
        bounding () {
            console.log(this.$store.state.bounding);
            return this.$store.state.bounding
        }
    }
}
</script>
<style scoped lang="less">
.CustomNavbar {
    background-color: #fff;
    width: 100%;
    z-index: 10;
    .empty {
        width: 100%;
    }
    .Navbar {
        display: flex;
        align-items: center;
        position: relative;
        .arrow-left {
            position: absolute;
            left: 40rpx;
        }
        .title {
            font-size: 36rpx;
            font-weight:500;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>