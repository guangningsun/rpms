# -*- coding: utf-8 -*-

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
import json,time
from TestModel.models import UserInfo,AddressInfo,NewsInfo,UserNewsMapping,GameInfo,MerchantInfo

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

# 用户收藏新闻
# success
def collect_news(request):
    try:
        if request.POST:
            user_news_mapping = UserNewsMapping(user_news_mapping_id=_get_timestamp(),
                                 user_id=request.POST['user_id'],
                                 news_id=request.POST['news_id']
                                 )
            user_news_mapping.save()
        return _generate_json_message(True, "collect news success")
    except:
        return _generate_json_message(False, "collect news false")


# 用户删除收藏新闻
# success
def remove_collected_news(request):
    try:
        user_news_mapping_ids = request.POST['user_news_mapping_ids']
        for user_news_mapping_id in user_news_mapping_ids.split(","):
            user_news_mapping = UserNewsMapping.objects.get(user_news_mapping_id=user_news_mapping_id)
            user_news_mapping.delete()
        return _generate_json_message(True, "remove collected news success")
    except:
        return _generate_json_message(False, "remove collected news false")

# 获取所有用户的所有收藏新闻列表
# success
def get_all_collection_list(request):
    list_response = []
    list_user_news_mapping = UserNewsMapping.objects.all()
    for res in list_user_news_mapping:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


# 获取某个用户的收藏新闻列表
# success
def get_collection_list_by_user_id(request):
    try:
        user_id = request.POST['user_id']
        if user_id:
            list_response = []
            list_user_news_mapping = UserNewsMapping.objects.filter(user_id=user_id)
            for res in list_user_news_mapping:
                dict_tmp = {}
                dict_tmp.update(res.__dict__)
                dict_tmp.pop("_state", None)
                list_response.append(dict_tmp)
        return _generate_json_from_models(list_response)
    except:
        return _generate_json_message(False, "can`t get user collected news by this id")


# 创建用户信息/用户注册
# success
def create_user(request):
    try:
        if request.POST:
            user_info = UserInfo(username=request.POST['username'],
                                 password=request.POST['password'],
                                 user_id=_get_timestamp(),
                                 user_email=request.POST['user_email'],
                                 user_address=request.POST['user_address'],
                                 user_phone=request.POST['user_phone'],
                                 user_permission=request.POST['user_permission']
                                 )
            user_info.save()
        return _generate_json_message(True, "create user success")
    except:
        return _generate_json_message(False, "create user false")


# 创建用户信息/用户注册
# success
def create_user_web(request):
    try:
        if request.POST:
            user_info = UserInfo(username=request.POST['username'],
                                 password=request.POST['password'],
                                 user_id=_get_timestamp(),
                                 user_email=request.POST['user_email'],
                                 user_address=request.POST['user_address'],
                                 user_phone=request.POST['user_phone'],
                                 user_permission=request.POST['user_permission']
                                 )
            user_info.save()
        return render(request,"manager.html")
    except:
        return _generate_json_message(False, "create user false")

# 删除用户信息
# success
def remove_user(request):
    try:
        user_ids = request.POST['user_ids']
        for user_id in user_ids.split(","):
            user_info = UserInfo.objects.get(user_id=user_id)
            user_info.delete()
        return _generate_json_message(True, "remove user success")
    except:
        return _generate_json_message(False, "remove user false")


# web删除用户信息
# success
def remove_user_web(request):
    try:
        user_ids = request.GET['user_ids']
        #import pdb;pdb.set_trace()
        for user_id in user_ids.split(","):
            user_info = UserInfo.objects.get(user_id=user_id)
            user_info.delete()
        return _generate_json_message(True, "remove user success")
    except:
        return _generate_json_message(False, "remove user false")


# 修改用户信息
# success
def modify_user(request):
    try:
        if request.POST:
            user_info = UserInfo.objects.get(user_id=request.POST['user_id'])
            user_info.username = request.POST['username']
            user_info.password = request.POST['password']
            user_info.user_email= request.POST['user_email']
            user_info.user_address = request.POST['user_address']
            user_info.user_phone = request.POST['user_phone']
            user_info.user_permission = request.POST['user_permission']
            user_info.save()
        return _generate_json_message(True,"update user info success")
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
        login_username = request.POST['username']
        login_password = request.POST['password']
        try:
            if login_username:
                user_info = UserInfo.objects.get(username=login_username)
            if user_info is not None:
                if user_info.password == login_password:
                    return _generate_json_message(True, "login success")
                else:
                    return _generate_json_message(False, "login false")
        except:
            return _generate_json_message(False, "login false")


# web用户登录
# success
def user_login_web(request):
    context = {}
    if request.POST:
        login_username = request.POST['username']
        login_password = request.POST['password']
        try:
            if login_username:
                user_info = UserInfo.objects.get(username=login_username)
            if user_info is not None:
                if user_info.password == login_password:
                    return render(request, 'manager.html', context)
                else:
                    return render(request, 'signin.html')
        except:
            return render(request, 'signin.html')

# 街道信息增加
# success
def create_address(request):
    try:
        if request.POST:
            address_info = AddressInfo(address_id=request.POST['address_id'],
                                    address_province=request.POST['address_province'],
                                    address_city=request.POST['address_city'],
                                    address_street=request.POST['address_street']
                                 )
            address_info.save()
        return _generate_json_message(True, "create address success")
    except:
        return _generate_json_message(False, "create address false")


# 街道信息删除
# success
def remove_address(request):
    try:
        address_ids = request.POST['address_ids']
        for address_id in address_ids.split(","):
            address_info = AddressInfo.objects.get(address_id=address_id)
            address_info.delete()
        return _generate_json_message(True, "remove address success")
    except:
        return _generate_json_message(False, "remove address false")


# 街道信息查找
# success
def get_address_info_by_id(request):
    try:
        address_id = request.POST['address_id']
        if address_id:
            list_response = []
            list_address = AddressInfo.objects.filter(address_id=address_id)
            for res in list_address:
                dict_tmp = {}
                dict_tmp.update(res.__dict__)
                dict_tmp.pop("_state", None)
                list_response.append(dict_tmp)
        return _generate_json_from_models(list_response)
    except:
        return _generate_json_message(False, "can`t get address info by this id")


# 获取所有街道信息
# success
def get_all_address_info(request):
    list_response = []
    list_address = AddressInfo.objects.all()
    for res in list_address:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


# 街道信息修改
# success
def modify_address(request):
    try:
        if request.POST:
            address_info = AddressInfo.objects.get(address_id=request.POST['address_id'])
            address_info.address_province = request.POST['address_province']
            address_info.address_city = request.POST['address_city']
            address_info.address_street = request.POST['address_street']
            address_info.save()
        return _generate_json_message(True,"update address info success")
    except:
        return _generate_json_message(False, "update address info false")

# 创建新闻
# success
def create_news(request):
    try:
        if request.POST:
            news_info = NewsInfo(news_id=_get_timestamp(),
                                 news_title=request.POST['news_title'],
                                 news_date=request.POST['news_date'],
                                 news_author=request.POST['news_author'],
                                 news_details=request.POST['news_details']
                                 )
            news_info.save()
        return _generate_json_message(True, "create news success")
    except:
        return _generate_json_message(False, "create news false")


# 删除新闻
# success
def remove_news(request):
    try:
        news_ids = request.POST['news_ids']
        for news_id in news_ids.split(","):
            news_info = NewsInfo.objects.get(news_id=news_id)
            news_info.delete()
        return _generate_json_message(True, "remove news success")
    except:
        return _generate_json_message(False, "remove news false")


# 获取新闻列表
# success
def get_news_list(request):
    list_response = []
    list_news = NewsInfo.objects.all()
    for res in list_news:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


# 通过ID过去新闻详细信息
# success
def get_news_detail_by_id(request):
    try:
        news_id = request.POST['news_id']
        if news_id:
            list_response = []
            list_news = NewsInfo.objects.filter(news_id=news_id)
            for res in list_news:
                dict_tmp = {}
                dict_tmp.update(res.__dict__)
                dict_tmp.pop("_state", None)
                list_response.append(dict_tmp)
        return _generate_json_from_models(list_response)
    except:
        return _generate_json_message(False, "can`t get news info by this id")


# 修改新闻
# success
def modify_news(request):
    try:
        if request.POST:
            news_info = NewsInfo.objects.get(news_id=request.POST['news_id'])
            news_info.news_title = request.POST['news_title']
            news_info.news_author = request.POST['news_author']
            news_info.news_details = request.POST['news_details']
            news_info.news_date = request.POST['news_date']
            news_info.save()
        return _generate_json_message(True,"update news info success")
    except:
        return _generate_json_message(False, "update news info false")

# 爬虫爬取人民日报最新20条文章


# 获取游戏列表
def get_game_list(request):
    list_response = []
    list_news = GameInfo.objects.all()
    for res in list_news:
        dict_tmp = {}
        dict_tmp.update(res.__dict__)
        dict_tmp.pop("_state", None)
        list_response.append(dict_tmp)
    return _generate_json_from_models(list_response)


# 创建游戏
def create_game(request):
    try:
        if request.POST:
            game_info = GameInfo(game_id=_get_timestamp(),
                                 game_name=request.POST['game_name'],
                                 game_desc=request.POST['game_desc']
                                 )
            game_info.save()
        return _generate_json_message(True, "create game success")
    except:
        return _generate_json_message(False, "create game false")


# 用户申请商户注册
def user_apply_merchant(request):
    try:
        if request.POST:
            merchant_info = MerchantInfo(merchant_id=_get_timestamp(),
                                     merchant_name=request.POST['merchant_name'],
                                     merchant_desc=request.POST['merchant_desc'],
                                     application_user=request.POST['application_user'],
                                     application_type=request.POST['application_type'],
                                     approval_user=request.POST['approval_user'],
                                 )
            merchant_info.save()
        return _generate_json_message(True, "create merchant success")
    except:
        return _generate_json_message(False, "create merchant false")


# 管理员获取待审批商户
# 0 为待审核
# 1 为审核通过
# 2 为审核未通过
def admin_get_merchant_need_approval(request):
    try:
        list_response = []
        list_merchant_need_approval = MerchantInfo.objects.filter(application_type=0)
        if list_merchant_need_approval:
            for res in list_merchant_need_approval:
                dict_tmp = {}
                dict_tmp.update(res.__dict__)
                dict_tmp.pop("_state", None)
                list_response.append(dict_tmp)
        return _generate_json_from_models(list_response)
    except:
        return _generate_json_message(False, "can`t get merchant info ")


# 管理员审批商户
def admin_approval_merchant(request):
    try:
        if request.POST:
            merchant_info = MerchantInfo.objects.get(merchant_id=request.POST['merchant_id'])
            merchant_info.application_type = request.POST['application_type']
            merchant_info.save()
        return _generate_json_message(True,"update merchant_info info success")
    except:
        return _generate_json_message(False, "update merchant_info info false")

# 用户修改商铺信息
def modify_merchant_info(request):
    try:
        if request.POST:
            merchant_info = MerchantInfo.objects.get(merchant_id=request.POST['merchant_id'])
            merchant_info.merchant_name = request.POST['merchant_name']
            merchant_info.merchant_desc = request.POST['merchant_desc']
            merchant_info.application_user = request.POST['application_user']
            merchant_info.application_type = request.POST['application_type']
            merchant_info.approval_user = request.POST['approval_user']
            merchant_info.save()
        return _generate_json_message(True,"update merchant_info info success")
    except:
        return _generate_json_message(False, "update merchant_info info false")


# 初始化登录界面
def init_web(request):
    return render(request, 'signin.html')



