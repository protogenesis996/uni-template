<template>
	<view class="content">
		<custom-navbar />
		<view>
			<text class="title" @click="aa">{{title}}</text>
			23132
			<skeleton-com />
		</view>
		<image :src="item" v-for="item in  imageList" :key="item" @click="preview"></image>
	</view>
</template>

<script>
// import CustomNavbar from '@/components/CustomNavbar/index.vue'
// import ListLoadingTip from '@/components/ListLoadingTip/index.vue'
import { example1 } from '@/mock/list'
import { chooseImage, previewImage } from '@/utils/wxTool.js'
export default {
	components: {
		// CustomNavbar,
		// ListLoadingTip 
	},
	onLoad() {
		// this.example1()
	},
	data() {
		return {
			title: 'Hello',
			imageList: []
		}
	},
	methods: {
		async preview () {
		const { status, data } = await previewImage('', this.imageList)
			console.log(status, data);
		},
		async aa () {
		 const {status, data} = await chooseImage(2)
		 if (status === 200) {
			 console.log(data);
			 this.imageList = data
		 }
		},
		async example1 () {
			const res =	await example1()
			console.log(res);
		}
	}
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
