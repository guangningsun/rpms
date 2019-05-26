<template>
    <view class="bg-white">
        <cu-custom bgColor="bg-gradual-green" :isBack="false">
            <block slot="content">缴费结果</block>
        </cu-custom>
        <view>
            <view class="flex-sub text-center">
                <view class="text-xsl padding">
                    <text class=" cuIcon-roundcheckfill text-green"></text>
                </view>
                <view class="padding text-black text-bold text-xl">成功</view>
				<view class="flex solid-bottom padding justify-around">
					<button class="flex-sub cu-btn padding-sm margin-xs round lines-green shadow" @click="goOn">继续交费</button>
					<button class="flex-sub cu-btn padding-sm margin-xs round lines-blue shadow" @click="backToMyInfo">返回主页</button>
				</view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
			backToMyInfo(){
				uni.switchTab({
					url:'../ucenter/my_info'
				})
			},
			goOn(){
				uni.switchTab({
					url:'pay_index'
				})
			}
		}
    }
</script>

<style>
.flex{
	padding: 10upx, 30upx;
}

.flex-sub{
	padding: 20upx;
}
</style>
