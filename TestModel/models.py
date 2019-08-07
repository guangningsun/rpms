# -*- coding:UTF-8 -*-
from django.db import models


# 0 超级管理员
# 1 管理员
# 2 老师
# 3 普通用户，学生
# 用户类
class UserInfo(models.Model):
    user_id = models.CharField(max_length=200)
    login_name = models.CharField(max_length=200)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    user_permission = models.CharField(max_length=200)
    create_time = models.CharField(max_length=200)
    is_deleted = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    class_id = models.CharField(max_length=200)


# 学生类
class StudentInfo(models.Model):
    stu_id = models.CharField(max_length=200)
    stu_num_id = models.CharField(max_length=200)
    stu_name = models.CharField(max_length=200)
    stu_id_card = models.CharField(max_length=200)
    stu_sexy = models.CharField(max_length=200)
    stu_phone_num = models.CharField(max_length=200)
    stu_desc = models.CharField(max_length=200)
    class_id = models.CharField(max_length=200)


# 班级类
class ClassInfo(models.Model):
    class_id = models.CharField(max_length=200)
    class_num = models.CharField(max_length=200)


# 缴费信息类
class PaymentInfo(models.Model):
    payment_id = models.CharField(max_length=200)
    payment_class_name = models.CharField(max_length=200)
    payment_create_time = models.CharField(max_length=200)
    stu_payment_time = models.CharField(max_length=200)
    payment_amount = models.CharField(max_length=200)
    payment_status = models.CharField(max_length=200)
    stu_num_id = models.CharField(max_length=200)
    create_user_id = models.CharField(max_length=200)
    payment_res_desc = models.CharField(max_length=200)
    merOrderId = models.CharField(max_length=200,default='None')


# 缴费项目类
class PaymentClassInfo(models.Model):
    payment_class_id = models.CharField(max_length=200)
    payment_class_name = models.CharField(max_length=200)
    payment_class_desc = models.CharField(max_length=200)


