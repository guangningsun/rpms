<template>
    <view>
        <cu-custom bgColor="bg-gradual-green" :isBack="false">
            <block slot="content">缴费记录</block>
        </cu-custom>
        <block>
            <view class="cu-bar bg-white solid-bottom">
                <view class="action text-green">缴费明细</view>
            </view>

            <view class="padding bg-white cu-list menu">
                <view class="cu-item">
                    <view class="content">
                        <text class="text-grey">书费</text>
                    </view>
                    <view class="action">
                        <view class="cu-tag round bg-olive light">已交清</view>
                    </view>
                    <view class="action">
                        <button class="cu-btn-s bg-red shadow" @tap="showModal">退费</button>
                    </view>
                </view>
                <view class="cu-item">
                    <view class="content">
                        <text class="text-grey">学费</text>
                    </view>
                    <view class="action">
                        <view class="cu-tag round bg-olive light">已交清</view>
                    </view>
                    <view class="action">
                        <button class="cu-btn-s bg-red shadow" @tap="showModal">退费</button>
                    </view>
                </view>
                <view class="cu-item">
                    <view class="content">
                        <text class="text-grey">杂费</text>
                    </view>
                    <view class="action">
                        <view class="cu-tag round bg-olive light">已交清</view>
                    </view>
                    <view class="action">
                        <button class="cu-btn-s bg-red shadow" @tap="showModal">退费</button>
                    </view>
                </view>
                <view class="cu-item">
                    <view class="content">
                        <text class="text-grey">住宿费</text>
                    </view>
                    <view class="action">
                        <view class="cu-tag round bg-olive light">已交清</view>
                    </view>
                    <view class="action">
                        <button class="cu-btn-s bg-red shadow" @tap="showModal">退费</button>
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
