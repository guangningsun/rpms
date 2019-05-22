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
                    <view class="action">书费</view>
                    <view class="action">
                        <button class="cu-btn bg-green shadow" @tap="showModal">缴费</button>
                    </view>
                </view>
                <view class="cu-bar bg-white solid-bottom">
                    <view class="action">学费</view>
                    <view class="action">
                        <button class="cu-btn bg-green shadow" @tap="showModal">缴费</button>
                    </view>
                </view>
                <view class="cu-bar bg-white solid-bottom">
                    <view class="action">住宿费</view>
                    <view class="action">
                        <button class="cu-btn bg-green shadow" @tap="showModal">缴费</button>
                    </view>
                </view>
                <view class="cu-bar bg-white solid-bottom">
                    <view class="action">杂费</view>
                    <view class="action">
                        <button class="cu-btn bg-green shadow" @tap="showModal">缴费</button>
                    </view>
                </view>
            </view>
        </block>
    </view>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style>

</style>
