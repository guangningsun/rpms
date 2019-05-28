# RPMS
----------

缴费管理系统

* This project is used for payment management easily

* Apollo Co.,Ltd

* Connect

  >  月池 sun-guangning@126.com
  >
  >  老麦 victormak357@gmail.com
  >


* 微信小程序客户端
* 后台管理UI+API

|    URL   |       方法      |  所需参数  |      返回结构     |     描述     |
|:--------:|:------------------: |:-----------: |:----------------:|:----------------:|
|   114.116.64.103:8000/user_login |  POST   ||   0   |用户登录接口|


## 手机端API
- 学生登录

```
/student_login_api
参数
stu_num_id
```

- 获取个人信息

```
/get_student_info_summary_api
参数
stu_num_id
返回值
{
    "stu_phone_num": "21918621",
    "total_amount": 9880,
    "stu_name": "孙广宁",
    "class_id": "20190505",
    "already_payed_amount": 9800,
    "stu_id": "1558960975",
    "stu_id_card": "330301199009115615",
    "stu_desc": "none",
    "stu_sexy": "男",
    "id": 23,
    "stu_num_id": "88888"
}
```

## web端API

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

-init_web

-create_user

-get_all_user_info

-user_login

-get_user_info_by_id

-modify_user

-remove_user

-manage_student

-manage_payment

-manage_student

-manage_payment_class

-manage_class

-create_student

-get_all_student_info

-dent_info_by_id

-modify_student

-remove_student

-create_payment

-remove_payment

-get_all_payment_info

-modify_payment

-get_payment_by_stu_id_card

-remove_payment_class

-create_payment_class

-get_all_payment_class_info

-modify_payment_class

-create_class

-remove_class

-get_all_class_info

-modify_class


