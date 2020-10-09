<script>
import { getSystemInfo } from '@/utils/wxTool.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
			this.getBoundingInfo()
			this.getSystemInfo()
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods: {
			// 获取胶囊信息
			getBoundingInfo () {
				let bounding =	wx.getMenuButtonBoundingClientRect()
				console.log(bounding);
				this.$store.commit('set_bounding', bounding)
			},
			// 系统信息
			async getSystemInfo () {
				const data = await getSystemInfo()
				console.log(data);
				if (data.errMsg === 'getSystemInfo:ok') {
					this.$store.commit('set_systemInfo', data)
				}
			},
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
