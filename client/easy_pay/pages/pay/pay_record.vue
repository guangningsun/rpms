<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="false"><block slot="content">缴费记录</block></cu-custom>
		<block>
			<view class="cu-bar bg-white solid-bottom"><view class="action text-green">缴费明细</view></view>

			<view class="padding bg-white cu-list menu">

				<view class="cu-item" v-for="(item,index) in payRecords" :key="index">
					<view class="content"><text class="text-grey">{{item.payment_class_name}}</text></view>
					<view class="action"><view class="cu-tag round bg-olive light">{{item.payment_amount}}元,已交清</view></view>
					<!--<view class="action"><button class="cu-btn-s bg-red shadow" @tap="showModal" data-target="DialogModal1">退费</button></view>-->
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
			modalName: null,
            student_number:'',
			payRecords:[]
		};
	},
    onShow(){
        this.initData();
    },
	methods: {
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
        initData(){
            this.student_number = uni.getStorageSync('key_id_number');

            uni.request({
                url: 'http://114.116.64.103:9000/get_already_payed_bill_by_stu_num',
                method: "POST",
                dataType: 'json',
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: {
                    stu_num_id: this.student_number
                },
                success: function(result) {
                    console.log(result.data);
                    if (result.statusCode === 200) {
                        console.log(JSON.stringify(result));
                        this.payRecords = result.data;
                    }
                }.bind(this),
                fail: err => {
                    console.log('request fail', err);
                    uni.showToast({
                        title: '请求失败~'
                    });
                }
            });
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
