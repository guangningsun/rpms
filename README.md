# RPMS
----------
缴费管理系统

* 微信小程序客户端
* 后台管理UI+API

#### 用户信息操作API

- 创建用户信息/用户注册
```
/create_user
参数
username
password
user_email
user_address
user_phone
user_permission
```

- 删除用户信息
```
/remove_user
参数
user_ids
```

- 修改用户信息
```
modify_user
参数
user_id
username
password
user_email
user_address
user_phone
user_permission
```
- 查找用户信息
```
get_user_info_by_id
参数
user_id
```
- 获取所有用户信息
```
get_all_user_info
参数
```
- 用户登录
```
user_login
参数
username
password
```
