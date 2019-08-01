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
                    <view class="flex-sub padding-sm margin-xs radius text-grey">姓名</view>
                    <view class="flex-twice padding-sm margin-xs radius">{{name}}</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius text-grey">学号</view>
                    <view class="flex-twice padding-sm margin-xs radius" >{{student_number}}</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius text-grey">手机号</view>
                    <view class="flex-twice padding-sm margin-xs radius">{{stu_phone_num}}</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius text-grey">班级</view>
                    <view class="flex-twice padding-sm margin-xs radius">{{student_class}}</view>
                </view>

                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius text-grey">已缴费(元)</view>
                    <view class="flex-twice padding-sm margin-xs radius">{{payed_fee}}</view>
                </view>
                <view class="flex solid-bottom p-xs margin-bottom-sm mb-sm">
                    <view class="flex-sub padding-sm margin-xs radius text-grey">需缴费(元)</view>
                    <view class="flex-twice padding-sm margin-xs radius">{{unpayed_fee}}</view>
                </view>

            </view>

        </block>
    </view>
</template>

<script>
	
// 	{
//     "stu_phone_num": "21918621",
//     "total_amount": 9880,
//     "stu_name": "孙广宁",
//     "class_id": "20190505",
//     "already_payed_amount": 9800,
//     "stu_id": "1558960975",
//     "stu_id_card": "330301199009115615",
//     "stu_desc": "none",
//     "stu_sexy": "男",
//     "id": 23,
//     "stu_num_id": "88888"
// }
	
    export default {
        data() {
            return {
                stu_phone_num:'',
				name:'',
				student_number:'',
				student_class:'',
				payed_fee:'',
				unpayed_fee:''
            };
        },
        methods: {
            tabSelect(e) {
                this.TabCur = e.currentTarget.dataset.id;
                this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
            }
        },
		onShow() {
			this.student_number = uni.getStorageSync('key_id_number');
			console.log(this.student_number);
			uni.request({
				url: 'http://114.116.64.103:9000/get_student_info_summary_api',
				method: "POST",
				dataType:'json',
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				data: {
					stu_num_id:this.student_number
				},
				success: res => {
					console.log(res);
					this.name = res.data.stu_name;
					this.stu_phone_num = res.data.stu_phone_num;
					this.unpayed_fee = res.data.total_amount;
					this.payed_fee = res.data.already_payed_amount;
					this.student_class = res.data.class_id;
				},
				fail: (err) => {
					console.log('request fail', err);
				},
				complete: () => {}
			});
		}
// 		onLoad:function(res){
// 			uni.getStorage({
// 				key:'key_id_number',
// 				success:function(res){
// 					this.id_number = res.data;
// 					console.log(this.id_number);
// // 					uni.request({
// // 						url: 'http://114.116.64.103:9000/',
// // 						method: 'POST',
// // 						dataType:'json',
// // 						data: {
// // 							stu_id_card:this.id_number
// // 						},
// // 						success: res => {
// // 							console.log(result);
// // 
// // 						},
// // 						fail: (err) => {
// // 							console.log('request fail', err);
// // 						},
// // 						complete: () => {}
// // 					});
// 
// 
// 				}
// 			})
// 		}
    }
</script>


