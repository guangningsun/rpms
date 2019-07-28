<template>
	<view>
		<web-view :src="url" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: uni.getStorageSync('key_redirect_pay_url')
			}
		},
		onLoad(e) {
			if (e && e.url) {
			    console.log(e.url)
				this.url = e.url;
			}
		},
		methods: {
			getMessage(event) {
				uni.showModal({
					content: JSON.stringify(event.detail),
					showCancel: false
				});
			}
		}
	}
</script>

<style>

</style>
