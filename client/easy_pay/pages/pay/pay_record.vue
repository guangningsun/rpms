<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="false"><block slot="content">缴费记录</block></cu-custom>
		<block>
			<view class="cu-bar bg-white solid-bottom"><view class="action text-green">缴费明细</view></view>

			<view class="padding bg-white cu-list menu">
				<view class="cu-item">
					<view class="content"><text class="text-grey">书费</text></view>
					<view class="action"><view class="cu-tag round bg-olive light">1000元,已交清</view></view>
					<view class="action"><button class="cu-btn-s bg-red shadow" @tap="showModal" data-target="DialogModal1">退费</button></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-grey">学费</text></view>
					<view class="action"><view class="cu-tag round bg-olive light">10000元,已交清</view></view>
					<view class="action"><button class="cu-btn-s bg-red shadow" @tap="showModal">退费</button></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-grey">杂费</text></view>
					<view class="action"><view class="cu-tag round bg-olive light">500元,已交清</view></view>
					<view class="action"><button class="cu-btn-s bg-red shadow" @tap="showModal">退费</button></view>
				</view>
				<view class="cu-item">
					<view class="content"><text class="text-grey">住宿费</text></view>
					<view class="action"><view class="cu-tag round bg-olive light">5000元,已交清</view></view>
					<view class="action"><button class="cu-btn-s bg-red shadow" @tap="showModal">退费</button></view>
				</view>
			</view>
		</block>

		<view class="cu-modal" :class="modalName == 'DialogModal1' ? 'show' : ''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">退费申请</view>
					<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>
				</view>
				<view class="padding-xl">确定要退费？</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-red margin-left" @tap="applyRefund">确定</button>
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
			modalName: null
		};
	},
	methods: {
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		applyRefund(e) {
			uni.showToast({
				title: '申请退款成功！'
			});
			this.modalName = null;
		}
	}
};
</script>

<style>
.cu-btn-s {
	position: relative;
	border: 0upx;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-size: 24upx;
	height: 64upx;
	line-height: 1;
	text-align: center;
	text-decoration: none;
	overflow: visible;
	white-space: nowrap;
	vertical-align: middle;
	margin-left: 10upx;
}
</style>
