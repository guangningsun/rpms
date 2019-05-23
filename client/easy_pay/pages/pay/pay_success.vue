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
                <view class="padding">成功</view>
            </view>
        </view>
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
