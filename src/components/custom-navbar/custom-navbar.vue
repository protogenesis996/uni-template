<template>
    <view class="custom-navbar" >
        <view class="empty" :style="{height: statusBarHeight + 2 +'px'}"></view>
        <view class="Navbar" :style="{height: ( bounding.top - statusBarHeight ) * 2 + bounding.height + 'px'}">
            <van-icon :name="icon.name" :color="icon.color" :size='icon.size' class="arrow-left"/>
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
        },
        icon: {
            type: Object,
            default: () => {
                return {
                    name: 'arrow-left',
                    color: '#000',
                    size: '22'
                }
            }
        }
    },
    computed: {
        statusBarHeight () {
            return this.$store.state.system.system.statusBarHeight
        },
        bounding () {
            return this.$store.state.system.bounding
        }
    }
}
</script>
<style scoped lang="scss">
.custom-navbar {
    background-color: #fff;
    // display: flex;
    width: 100vw;
    z-index: 10;
    .empty {
        width: 100%;
    }
    .Navbar {
        width: 100vw;
        display: flex;
        align-items: center;
        position: relative;
        .arrow-left {
            position: absolute;
            left: 40rpx;
        }
        .title {
            font-size: 30rpx;
            font-weight:500;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>