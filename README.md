# RPMS
----------
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

#### 街道信息操作API

- 街道信息增加
```
create_address
参数
address_id
address_province
address_city
address_street
```
- 街道信息删除
```
remove_address
参数
address_ids
```
- 街道信息查找
```
get_address_info_by_id
参数
address_id
```
- 获取所有街道信息
```
get_all_address_info
```
- 街道信息修改
```
modify_address
参数
address_id
address_province
address_city
address_street
```

#### 内部方法
- 内部方法，用于获取当前时间戳
- 内部方法用于返回json消息
- 内部方法用于将对象返回值转换成json串

#### 用户收藏新闻API

- 用户收藏新闻
```
/collect_news
参数
user_id
news_id
```
- 删除收藏的新闻
```
/remove_collected_news
参数
user_news_mapping_ids
```
- 获取收藏新闻列表
```
/get_all_collection_list
```

- 通过用户ID获取该用户收藏的新闻列表
```
/get_collection_list_by_user_id
参数
user_id
```

#### 新闻处理API
- 创建新闻
```
create_news
参数
news_title
news_date
news_author
news_details
```
- 删除新闻
```
remove_news
参数
```
- 获取新闻列表
```
get_news_list
```
- 通过ID过去新闻详细信息
```
get_news_detail_by_id
参数
```
- 修改新闻
```
modify_news
参数
news_id
news_title
news_date
news_author
news_details
```
- 获取收藏新闻列表

- 通过用户id获取收藏新闻列表
```
get_collection_list_by_user_id
参数
```
- 爬虫爬取人民日报最新20条文章

#### 娱乐处理API

- 获取游戏列表
```
get_game_list
```
- 创建游戏信息
```
create_game
参数
game_name
game_desc
```
