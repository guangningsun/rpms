# -*- coding: utf-8 -*-

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
import json
import time
from TestModel.models import *


# 内部方法，用于获取当前时间戳
def _get_timestamp():
    return int(time.time())


# 内部方法用于返回json消息
def _generate_json_message(flag, message):
    if flag:
        return HttpResponse("{\"error\":0,\"errmsg\":"+message+"}",content_type="application/json")
    else:
        return HttpResponse("{\"error\":1,\"errmsg\":"+message+"}",content_type="application/json")


# 内部方法用于将对象返回值转换成json串
def _generate_json_from_models(response_list):
    return HttpResponse(json.dumps(response_list), content_type="application/json")


# 创建用户信息/用户注册
# success
def create_user(request):
    current_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    try:
        if request.POST:
            user_info = UserInfo(login_name=request.POST['login_name'],
                                 username=request.POST['username'],
                                 password=request.POST['password'],
                                 user_id=_get_timestamp(),
                                 user_permission=request.POST['user_permission'],
                                 is_deleted=0,
                                 create_time=current_time,
                                 description=request.POST['description'],
                                 class_id=request.POST['class_id']
                                 )
            user_info.save()
        return _generate_json_message(True, "create user success")
    except:
        return _generate_json_message(False, "create user false")


# 删除用户信息
# success
def remove_user(request):
    context = {}
    try:
        user_ids = request.POST['user_ids']
        for user_id in user_ids.split(","):
            user_info = UserInfo.objects.get(user_id=user_id)
            user_info.delete()
        return render(request, 'manage_user.html', context)
    except:
        return render(request, 'manage_user.html', context)


# 修改用户信息
# success
def modify_user(request):
    try:
        if request.POST:
            user_info = UserInfo.objects.get(user_id=request.POST['user_id'])
            user_info.username = request.POST['username']
            user_info.password = request.POST['password']
            user_info.user_email = request.POST['user_email']
            user_info.user_address = request.POST['user_address']
            user_info.user_phone = request.POST['user_phone']
            user_info.user_permission = request.POST['user_permission']
            user_info.save()
        return _generate_json_message(True, "update user info success")
    except:
        return _generate_json_message(False, "update user info false")


# 查找用户信息
# success
def get_user_info_by_id(request):
    try:
        user_id = request.POST['user_id']
        if user_id:
            list_response = []
            list_user = UserInfo.objects.filter(user_id=user_id)
            for res in list_user:
                dict_tmp = {}
                dict_tmp.update(res.__dict__)
                dict_tmp.pop("_state", None)
                list_response.append(dict_tmp)
        return _generate_json_from_models(list_response)
    except:
        return _generate_json_message(False, "can`t get user info by this id")


# 获取所有用户信息
# success
def get_all_user_info(request):
    list_response = []
    list_user = UserInfo.objects.all()
    for res in list_user:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


# 用户登录
# success
def user_login(request):
    if request.POST:
        context = {}
        login_username = request.POST['username']
        login_password = request.POST['password']
        try:
            if login_username:
                user_info = UserInfo.objects.get(username=login_username)
            if user_info is not None:
                if user_info.password == login_password:
                    return render(request, 'manage_user.html', context)
                else:
                    return render(request, 'manage_user.html', context)
        except:
            return _generate_json_message(False, "login false")


# 初始化登录界面
def init_web(request):
    return render(request, 'signin.html')


