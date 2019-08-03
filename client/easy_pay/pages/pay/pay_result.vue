<template>
    <view class="bg-white">
        <cu-custom :bg-color="isSuccess?'bg-gradual-green':'bg-gradual-red'" :isBack="false">
            <block slot="content">缴费结果</block>
        </cu-custom>
        <view>
            <view class="flex-sub text-center">
                <view class="text-xsl padding">
                    <text :class="isSuccess ? 'text-green cuIcon-roundcheckfill' : 'text-red cuIcon-roundclosefill'"></text>
                </view>
                <view class="padding text-black text-bold text-xl">{{paymentResultStr}}</view>
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
            return {
                paymentId : '',
                paymentResultStr : '',
                isSuccess : true
            }
        },
        onLoad(){
            this.paymentId = uni.getStorageSync('payment_id');
            uni.request({
                url: 'http://114.116.64.103:9000/get_payment_status',
                method: "POST",
                dataType:'json',
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: {
                    payment_id:this.paymentId
                },
                success: res => {
                    console.log(res);
                    if (res.data.msg === '0') {
                        this.paymentResultStr = '支付成功';
                        this.isSuccess = true;
                    }
                    else {
                        this.paymentResultStr = '支付失败';
                        this.isSuccess = false;
                    }
                },
                fail: (err) => {
                    console.log('request fail', err);
                },
                complete: () => {}
            });
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
