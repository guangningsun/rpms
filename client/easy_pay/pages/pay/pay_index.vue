<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="false">
			<block slot="content">缴费</block>
		</cu-custom>
		<block>
			<view class="cu-bar bg-white solid-bottom">
				<view class="action text-green">缴费项目</view>
			</view>

			<view class="padding bg-white">
				<view class="cu-bar bg-white solid-bottom">
					<view class="cu-bar justify-start">
						<view class="action ">书费</view>
						<view class='cu-tag radius line-orange padding-xs' v-model="book_fee">1000元</view>
					</view>
					<view class="action">
						<button class="cu-btn bg-green shadow" @tap="payFee">缴费</button>
					</view>
				</view>
				<view class="cu-bar bg-white solid-bottom">
					<view class="cu-bar justify-start">
						<view class="action ">学费</view>
						<view class='cu-tag radius line-orange padding-xs'>10000元</view>
					</view>
					<view class="action">
						<button class="cu-btn bg-green shadow" @tap="payFee">缴费</button>
					</view>
				</view>
				<view class="cu-bar bg-white solid-bottom">
					<view class="cu-bar justify-start test">
						<view class="action ">住宿费</view>
						<view class='cu-tag radius line-orange padding-xs'>5000元</view>
					</view>
					<view class="action">
						<button class="cu-btn bg-green shadow" @tap="payFee">缴费</button>
					</view>
				</view>
				<view class="cu-bar bg-white solid-bottom">
					<view class="cu-bar justify-start">
						<view class="action ">杂费</view>
						<view class='cu-tag radius line-orange padding-xs'>500元</view>
					</view>
					<view class="action">
						<button class="cu-btn bg-green shadow" @tap="payFee">缴费</button>
					</view>
				</view>
			</view>
		</block>

		<view class="cu-modal" :class="modalName == 'DialogModal1' ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">缴费</view>
					<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
				</view>
				<view class="padding-xl"></view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-red text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="applyRefund">确定</button>
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
				modalName: null,
				book_fee:"",
				redirect_pay_rul:""
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target;
			},
			payFee(){
				console.log(this.book_fee);
				// uni.navigateTo({
				// 	url:'pay_success'
				// });
				
				uni.request({
					url: 'http://114.116.64.103:9000/h5pay',
					method: "POST",
					dataType: 'json',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					// data: {
					// 	stu_num_id: this.id_number
					// },
					success: function(result) {
						// var data = JSON.parse(result.data);
						console.log(result);
						if (result.data.error === 0) {
							this.redirect_pay_rul = result.data.msg;
							console.log(this.redirect_pay_rul);

                            uni.setStorage({
                                key: 'key_redirect_pay_url',
                                data: this.redirect_pay_rul
                            });

							uni.navigateTo({
                                url: '../../pages/pay/pay_web_view'
                            });
						}
					},
					fail: err => {
						console.log('request fail', err);
						// this.verify_failed = true;
				
						// test code
						// this.goToMyInfo();
					},
					complete: () => {	
						this.loading = false;
					}
				});
			}
		}
	}
</script>

<style>
	.action {
		margin-right: 20upx;
	}
</style>
