# -*- coding: utf-8 -*-

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.shortcuts import redirect
import json
import time
from TestModel.models import *
from django.db.models import Avg, Count, Min, Sum
import xlrd
import uuid
from collections import OrderedDict
import hashlib
import urllib
import random
import logging


logger = logging.getLogger(__name__)


# 内部方法，用于获取当前时间戳
# done
def _get_timestamp():
    return int(time.time())


# 内部方法用于返回json消息
# done
def _generate_json_message(flag, message):
    if flag:
        return HttpResponse("{\"error\":0,\"errmsg\":\""+message+"\"}",
                            #content_type="application/x-www-form-urlencoded",
                            content_type='application/json',
                            )
    else:
        return HttpResponse("{\"error\":1,\"errmsg\":\""+message+"\"}",
                            #content_type="application/x-www-form-urlencoded",
                            content_type='application/json',
                            )


# 内部方法用于将对象返回值转换成json串
# done
def _generate_json_from_models(response_list):
    return HttpResponse(json.dumps(response_list),
                        #content_type="application/x-www-form-urlencoded",
                        content_type='application/json',
                        )
#                      content_type="application/json")
#    res["Access-Control-Allow-Origin"] = "*"
#    res["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE,OPTIONS"
#    res["Access-Control-Max-Age"] = "1000"
#    res["Access-Control-Allow-Headers"] = "X-Requested-With, Content-Type"
#   return res


# 学生管理界面跳转
# done
def manage_student(request):
    context = {}
    return render(request, 'manage_student.html', context)


# 缴费管理界面跳转
# done
def manage_payment(request):
    context = {}
    return render(request, 'manage_payment.html', context)


# 用户管理界面跳转
# done
def manage_user(request):
    context = {}
    return render(request, 'manage_user.html', context)


# 缴费类别管理界面跳转
# done
def manage_p_class(request):
    context = {}
    return render(request, 'manage_payment_class.html', context)


def manage_class(request):
    context = {}
    return render(request, 'manage_class.html', context)


def manage_settings(request):
    context = {}
    return render(request, 'settings.html', context)


# 创建缴费记录
def create_payment(request):
    current_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    context = {}
    try:
        if request.POST:
            payment_info = PaymentInfo(
                payment_id=uuid.uuid1(),
                payment_class_name=request.POST['payment_class_name'],
                payment_create_time=current_time,
                stu_payment_time=request.POST['stu_payment_time'],
                payment_amount=request.POST['payment_amount'],
                payment_status=request.POST['payment_status'],
                stu_num_id=request.POST['stu_num_id'],
                create_user_id=request.POST['create_user_id'],
                payment_res_desc=request.POST['payment_res_desc']
                )
            payment_info.save()
        return render(request, 'manage_payment.html', context)
    except:
        return render(request, 'manage_payment.html', context)


def remove_payment(request):
    pass


def get_all_payment_info(request):
    list_response = []
    list_payment = PaymentInfo.objects.all()
    for res in list_payment:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


def modify_payment(request):
    pass


def get_payment_list_by_stu_id_card(request):
    pass


def create_payment_class(request):
    current_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    context = {}
    try:
        if request.POST:
            payment_class_info = PaymentClassInfo(
                payment_class_id=_get_timestamp(),
                payment_class_name=request.POST['payment_class_name'],
                payment_class_desc=request.POST['payment_class_desc'],
                )
            payment_class_info.save()
        return render(request, 'manage_payment_class.html', context)
    except:
        return render(request, 'manage_payment_class.html', context)


def remove_payment_class(request):
    context = {}
    try:
        payment_class_ids = request.POST['payment_class_ids']
        for payment_class_id in class_ids.split(","):
            payment_class_info = PaymentClassInfo.objects.get(payment_class_id=payment_class_id)
            payment_class_info.delete()
        return render(request, 'manage_payment_class.html', context)
    except:
        return render(request, 'manage_payment_class.html', context)


def get_all_payment_class_info(request):
    list_response = []
    list_payment_class = PaymentClassInfo.objects.all()
    for res in list_payment_class:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


def modify_payment_class(request):
    pass


def create_class(request):
    current_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    context = {}
    try:
        if request.POST:
            class_info = ClassInfo(
                class_id=_get_timestamp(),
                class_num=request.POST['class_num'],
                )
            class_info.save()
        return render(request, 'manage_class.html', context)
    except:
        return render(request, 'manage_class.html', context)


def remove_class(request):
    context = {}
    try:
        class_ids = request.POST['class_ids']
        for class_id in class_ids.split(","):
            class_info = ClassInfo.objects.get(class_id=class_id)
            class_info.delete()
        return render(request, 'manage_class.html', context)
    except:
        return render(request, 'manage_class.html', context)


def get_all_class_info(request):
    list_response = []
    list_class = ClassInfo.objects.all()
    for res in list_class:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


def modify_class(request):
    pass


# 创建学生
def create_student(request):
    context = {}
    current_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    try:
        if request.POST:
            student_info = StudentInfo(
                stu_id=_get_timestamp(),
                stu_num_id=request.POST['stu_num_id'],
                stu_name=request.POST['stu_name'],
                stu_id_card=request.POST['stu_id_card'],
                stu_sexy=request.POST['stu_sexy'],
                stu_phone_num=request.POST['stu_phone_num'],
                stu_desc=request.POST['stu_desc'],
                class_id=request.POST['class_id']
                )
            student_info.save()
        return render(request, 'manage_student.html', context)
    except:
        return render(request, 'manage_student.html', context)


def get_all_student_info(request):
    list_response = []
    list_student = StudentInfo.objects.all()
    for res in list_student:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


def get_student_info_by_id(request):
    pass


def modify_student(request):
    pass


def remove_student(request):
    context = {}
    try:
        stu_num_ids = request.POST['stu_num_ids']
        for stu_num_id in stu_num_ids.split(","):
            student_info = StudentInfo.objects.get(stu_id=stu_num_id)
            student_info.delete()
        return render(request, 'manage_student.html', context)
    except:
        return render(request, 'manage_student.html', context)


# 创建用户信息/用户注册
# success
def create_user(request):
    current_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    context = {}
    try:
        if request.POST:
            user_info = UserInfo(
                login_name=request.POST['login_name'],
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
        return render(request, 'manage_user.html', context)
    except:
        return render(request, 'manage_user.html', context)


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


# 学生登录 API
# success
def student_login_api(request):
    if request.POST:
        context = {}
        stu_num_id = request.POST['stu_num_id']
        try:
            if stu_num_id:
                student_info = StudentInfo.objects.get(stu_num_id=stu_num_id)
            if student_info is not None:
                return _generate_json_message(True, "login success")
            else:
                return _generate_json_message(False, "login false")
        except:
            return _generate_json_message(False, "login false")


def get_student_info_summary_api(request):
    if request.POST:
        context = {}
        stu_num_id = request.POST['stu_num_id']
        try:
            if stu_num_id:
                student_info = StudentInfo.objects.get(stu_num_id=stu_num_id)
                if student_info is not None:
                    total_amount = PaymentInfo.objects.\
                        filter(stu_num_id=stu_num_id).\
                        aggregate(total_amount=Sum("payment_amount"))

                    already_payed_amount = PaymentInfo.objects.\
                        filter(stu_num_id=stu_num_id).\
                        filter(payment_status='0').\
                        aggregate(already_payed_amount=Sum("payment_amount"))
                    dict_tmp = {}
                    dict_tmp.update(student_info.__dict__)
                    dict_tmp.pop("_state", None)
                    dict_tmp.update(total_amount)
                    dict_tmp.update(already_payed_amount)
                    return _generate_json_from_models(dict_tmp)
        except:
            return _generate_json_message(False, "get student info  false")

def get_student_bill_by_stu_num(request):
    if request.POST:
        context = {}
        stu_num_id = request.POST['stu_num_id']
        #import pdb;pdb.set_trace()
        try:
            if stu_num_id:
                stu_bill_list = PaymentInfo.objects.\
                    filter(stu_num_id=stu_num_id).\
                    filter(payment_status='0') 
                list_response = []
                for stu_bill in stu_bill_list:
                    dict_tmp = {}
                    dict_tmp.update(stu_bill.__dict__)
                    dict_tmp.pop("_state", None)
                    list_response.append(dict_tmp)
                return _generate_json_from_models(list_response)
        except:
            return _generate_json_message(False, "get student bill  false")
                

def excel_upload(request):
    context = {}
    current_time = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    if request.method == 'POST':
        f = request.FILES['excel_file']
        wb = xlrd.open_workbook(filename=None, file_contents=f.read())
        payment_table = wb.sheets()[0]
        payment_table_nrows = payment_table.nrows
        payment_table_ncole = payment_table.ncols
        for i in range(2, payment_table_nrows):
            row_values = payment_table.row_values(i)
            payment_info = PaymentInfo(
                payment_id=uuid.uuid1(),
                payment_class_name=row_values[0],
                payment_create_time=current_time,
                stu_payment_time=row_values[1],
                payment_amount=int(row_values[2]),
                payment_status=int(row_values[3]),
                stu_num_id=int(row_values[4]),
                create_user_id=int(row_values[6]),
                payment_res_desc=row_values[5]
                )
            payment_info.save()
    return render(request, 'manage_payment.html', context)


# 找不到界面
def page_not_found(request, exception):
    return render(request, '404.html', status=404)


def h5pay(request):
    apiUrl_makeOrder = "https://qr-test2.chinaums.com/netpay-portal/webpay/pay.do"
    notifyUrl = "http://172.27.49.240:8080/h5pay/notifyUrl.do"
    returnUrl = "https://www.baidu.com/"
    msgSrc = "WWW.TEST.COM"
    msgType = "trade.h5Pay"
    requestTimestamp = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime())
    merOrderId = "3194"+time.strftime('%Y%m%d%H%M%S', time.localtime())+str(random.randint(1000000,9999999))
    mid = "898310148160568"
    tid = "88880001"
    instMid = "H5DEFAULT"
    totalAmount = "1"
    md5key = "fcAmtnx7MwismjWNhNKdHC44mNXtnEQeJkRrhKJwyrW2ysRR"

    param = {
        "msgSrc": msgSrc,
        "msgType": msgType,
        "requestTimestamp": requestTimestamp,
        "merOrderId": merOrderId,
        "mid": mid,
        "tid": tid,
        "instMid": instMid,
        "totalAmount": totalAmount,
        "notifyUrl": notifyUrl,
        "returnUrl": returnUrl
    }
    sorted_param = json.dumps(param, sort_keys=True)
    print ("排序后的参数")
    print (sorted_param)
    #for_signed_param = urllib.parse.urlencode(json.loads(sorted_param, object_pairs_hook=OrderedDict))

    ritems = json.loads(sorted_param,object_pairs_hook=OrderedDict).items()
    conv_sign = ""
    for key, value in ritems:
        conv_sign+=key + "=" + value + "&"
    final_sign = conv_sign[:-1]+md5key
    #final_sign = for_signed_param+md5key
    print ("待签名参数")
    print(final_sign)

    md = hashlib.md5()
    md.update(final_sign.encode())
    final_md = md.hexdigest().upper()
    print ("MD5签名并upper后sign值")
    print (final_md)

    return_json = {
        "msgSrc": msgSrc,
        "msgType": msgType,
        "requestTimestamp": requestTimestamp,
        "merOrderId": merOrderId,
        "sign": final_md,
        "mid": mid,
        "tid": tid,
        "instMid": instMid,
        "totalAmount": totalAmount,
        "notifyUrl": notifyUrl,
        "returnUrl": returnUrl
    }
    #encoded = urllib.parse.urlencode(return_json)
    encoded = urllib.urlencode(return_json)
    reuturn_url = apiUrl_makeOrder+"?"+encoded
    return redirect(reuturn_url)
