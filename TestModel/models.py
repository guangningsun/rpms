# -*- coding:UTF-8 -*-
from django.db import models

# 用户类
class UserInfo(models.Model):
    user_id = models.CharField(max_length=200)
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    user_email = models.CharField(max_length=200)
    user_address = models.CharField(max_length=200)
    user_phone = models.CharField(max_length=200)
    user_permission = models.CharField(max_length=200)


# 街道类
class AddressInfo(models.Model):
    address_id = models.CharField(max_length=200)
    address_province = models.CharField(max_length=200)
    address_city = models.CharField(max_length=200)
    address_street = models.CharField(max_length=200)

# 新闻类
class NewsInfo(models.Model):
    news_id = models.CharField(max_length=200)
    news_title = models.CharField(max_length=200)
    news_date = models.CharField(max_length=200)
    news_author = models.CharField(max_length=200)
    news_details = models.CharField(max_length=5000)

# 用户收藏新闻映射
class UserNewsMapping(models.Model):
    user_news_mapping_id = models.CharField(max_length=200)
    user_id = models.CharField(max_length=200)
    news_id = models.CharField(max_length=2000)

# 游戏类
class GameInfo(models.Model):
    game_id = models.CharField(max_length=200)
    game_name = models.CharField(max_length=200)
    game_desc = models.CharField(max_length=200)

# 商户类
class MerchantInfo(models.Model):
    merchant_id = models.CharField(max_length=200)
    merchant_name = models.CharField(max_length=200)
    merchant_desc = models.CharField(max_length=2000)
    application_user = models.CharField(max_length=200)
    application_type = models.CharField(max_length=200)
    approval_user = models.CharField(max_length=200)

