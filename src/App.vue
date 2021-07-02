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
				let bounding =	uni.getMenuButtonBoundingClientRect()
		
				this.$store.commit('system/setBounding', bounding)
			},
			// 系统信息
			async getSystemInfo () {
				const data = await getSystemInfo()
	
				if (data.errMsg === 'getSystemInfo:ok') {
					this.$store.commit('system/setSystem', data)
				}
			},
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
