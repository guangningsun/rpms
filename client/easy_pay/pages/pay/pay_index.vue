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
				book_fee:""
			}
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target;
			},
			payFee(){
				console.log(this.book_fee);
				uni.navigateTo({
					url:'pay_success'
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
