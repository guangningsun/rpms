<template>
	<view>
		<cu-custom bgColor="bg-gradual-green" :isBack="false">
			<block slot="content">登录</block>
		</cu-custom>
		<view class="login-bg">
			<view class="login-card">
				<view class="login-head">输入学号验证登录</view>
				<view class="login-input login-margin-b"><input type="text" placeholder="请输入学号" v-model="id_number" /></view>
				<!--<view class="login-input">-->
				<!--<input type="number" placeholder="请输入密码(8-16位)" />-->
				<!--</view>-->
				<!--<view class="login-function">-->
				<!--<view class="login-forget" @click="go_forget">忘记密码</view>-->
				<!--<view class="login-register" @click="go_register">快速注册></view>-->
				<!--</view>-->
				<text class="text-style text-red">{{verify_failed}}</text>
			</view>
		</view>
		<view class="login-btn"><button class="landing" type="primary" @click="verifyId">验证</button></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id_number: "",
				verify_failed: ''
			};
		},
		methods: {
			go_forget() {
				uni.navigateTo({
					url: '../../pages/ucenter/forget'
				});
			},
			go_register() {
				uni.navigateTo({
					url: '../../pages/ucenter/register'
				});
			},
			goToMyInfo() {
				uni.switchTab({
					url: 'my_info'
				});
			},
			verifyId() {
				console.log(this.id_number);
				uni.setStorage({
					key: 'key_id_number',
					data: this.id_number
				});

				uni.request({
					url: 'http://114.116.64.103:9000/student_login_api',
					method: "POST",
					dataType: 'json',
					header: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					data: {
						stu_num_id: this.id_number
					},
					success: function(result) {
                        if (result.data.error === 0) {
                            uni.switchTab({
                                url: 'my_info'
                            });
                        }
                        else {
                            this.verify_failed = '验证未通过，请重新验证';
                        }
					}.bind(this)
				});
			}
		}
	};
</script>

<style>
	.landing {
		height: 84upx;
		line-height: 84upx;
		border-radius: 44upx;
		font-size: 32upx;
		background: linear-gradient(90deg, #39b54a, #8dc63f);
	}

	.login-btn {
		padding: 10upx 20upx;
		margin-top: 350upx;
	}

	.login-function {
		overflow: auto;
		padding: 20upx 20upx 30upx 20upx;
	}

	.login-forget {
		float: left;
		font-size: 26upx;
		color: #999;
	}

	.login-register {
		color: #666;
		float: right;
		font-size: 26upx;
	}

	.login-input input {
		background: #f2f5f6;
		font-size: 28upx;
		padding: 10upx 25upx;
		height: 62upx;
		line-height: 62upx;
		border-radius: 8upx;
	}

	.login-margin-b {
		margin-bottom: 25upx;
	}

	.login-input {
		padding: 10upx 20upx;
	}

	.login-head {
		font-size: 34upx;
		text-align: center;
		padding: 25upx 10upx 55upx 10upx;
	}

	.login-card {
		background: #fff;
		border-radius: 12upx;
		padding: 10upx 25upx;
		box-shadow: 0 6upx 18upx rgba(0, 0, 0, 0.12);
		position: relative;
		margin-top: 120upx;
	}

	.login-bg {
		height: 300upx;
		padding: 25upx;
		margin-top: -94upx;
		background: linear-gradient(90deg, #39b54a, #8dc63f);
	}

	.text-style {
		padding: 20upx;
		margin-bottom: 20upx;
	}
</style>
