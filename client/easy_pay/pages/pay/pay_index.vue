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

                <view class="cu-bar bg-white solid-bottom" v-for="(item,index) in payItems" :key="index">
                    <view class="cu-bar justify-start">
                        <view class="action">{{item.payment_class_name}}</view>
                        <view class='cu-tag radius line-orange padding-xs'>{{item.payment_amount}} 元</view>
                    </view>
                    <view class="action">
                        <button class="cu-btn bg-green shadow" @tap="payFee(item)">缴费</button>
                    </view>
                </view>
            </view>
        </block>

        <!--<view class="cu-modal" :class="modalName == 'DialogModal1' ? 'show' : ''">-->
        <!--<view class="cu-dialog">-->
        <!--<view class="cu-bar bg-white justify-end">-->
        <!--<view class="content">缴费</view>-->
        <!--<view class="action" @tap="hideModal"><text class="cuIcon-close text-red"></text></view>-->
        <!--</view>-->
        <!--<view class="padding-xl"></view>-->
        <!--<view class="cu-bar bg-white justify-end">-->
        <!--<view class="action">-->
        <!--<button class="cu-btn line-red text-green" @tap="hideModal">取消</button>-->
        <!--<button class="cu-btn bg-green margin-left" @tap="applyRefund">确定</button>-->
        <!--</view>-->
        <!--</view>-->
        <!--</view>-->
        <!--</view>-->

    </view>
</template>

<script>
    export default {
        data() {
            return {
                modalName: null,
                redirectPayUrl: "",
                student_number: '',
                payItems: [],
            }
        },
        onShow() {
            this.initData();
        },
        methods: {
            initData() {
                this.student_number = uni.getStorageSync('key_id_number');

                uni.request({
                    url: 'http://114.116.64.103:9000/get_student_bill_by_stu_num',
                    method: "POST",
                    dataType: 'json',
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: {
                        stu_num_id: this.student_number
                    },
                    success: function (result) {
                        console.log(result.data);
                        if (result.statusCode === 200) {
                            console.log(JSON.stringify(result));
                            this.payItems = result.data;
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
            showModal(e) {
                this.modalName = e.currentTarget.dataset.target;
            },
            payFee: function (e) {
                let payAmount = e.payment_amount;
                let paymentId = e.payment_id;
                console.log(paymentId);
                try {
                    uni.setStorageSync('payment_id', paymentId);
                } catch (e) {
                    console.log("setStorateSync paymentId error");
                }
                uni.request({
                    url: 'http://114.116.64.103:9000/h5pay',
                    method: "POST",
                    dataType: 'json',
                    header: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    data: {
                        totalAmount: payAmount,
                        payment_id: paymentId
                    },
                    success: function (result) {
                        if (result.data.error === 0) {
                            this.redirectPayUrl = result.data.msg;
                            uni.setStorage({
                                key: 'key_redirect_pay_url',
                                data: this.redirectPayUrl
                            });
                            uni.navigateTo({
                                url: '../../pages/pay/pay_web_view'
                            });
                        }
                    }.bind(this),
                    fail: err => {
                        console.log('request fail', err);
                        uni.showToast({
                            title: '请求失败~'
                        });
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
        margin-right: 20 upx;
    }
</style>
