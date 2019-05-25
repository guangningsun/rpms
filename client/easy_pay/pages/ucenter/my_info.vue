<template>
    <view>
        <cu-custom bgColor="bg-gradual-green" :isBack="false">
            <block slot="content">主页</block>
        </cu-custom>
        <block>
            <view class="cu-bar bg-white solid-bottom">
                <view class="action text-green">基本信息</view>
            </view>
            <view class="padding bg-white">

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius">姓名</view>
                    <view class="flex-twice padding-sm margin-xs radius">--</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius">学号</view>
                    <view class="flex-twice padding-sm margin-xs radius">--</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius">身份证号</view>
                    <view class="flex-twice padding-sm margin-xs radius">--</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius">班级</view>
                    <view class="flex-twice padding-sm margin-xs radius">--</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius">班主任</view>
                    <view class="flex-twice padding-sm margin-xs radius">--</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius">已缴费(元)</view>
                    <view class="flex-twice padding-sm margin-xs radius">--</view>
                </view>
                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius">需缴费(元)</view>
                    <view class="flex-twice padding-sm margin-xs radius">--</view>
                </view>

            </view>

        </block>
    </view>
</template>

<script>
    export default {
        data() {
            return {
				id_number:"",
                CustomBar: this.CustomBar,
                TabCur: 0,
                avatar: ['https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg', 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'],
                tabNav: ['Flex布局', 'Grid布局', '辅助布局']
            };
        },
        methods: {
            tabSelect(e) {
                this.TabCur = e.currentTarget.dataset.id;
                this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
            }
        },
		onLoad:function(res){
			uni.getStorage({
				key:'key_id_number',
				success:function(res){
					console.log(res.data);
				}
			})
		}
    }
</script>


