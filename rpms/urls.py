"""apollo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from rpms import views
from django.conf.urls import include, url

urlpatterns = [
    url('admin/', admin.site.urls),
    url(r'^$',views.init_web),
    url(r'^create_user/',views.create_user),
    url(r'^create_user_web/',views.create_user_web),
    url(r'^user_login_web/get_all_user_info/$',views.get_all_user_info),
    url(r'^get_all_user_info/',views.get_all_user_info),
    url(r'^user_login/',views.user_login),
    url(r'^user_login_web/',views.user_login_web),
    url(r'^get_user_info_by_id/',views.get_user_info_by_id),
    url(r'^modify_user/',views.modify_user),
    url(r'^remove_user/',views.remove_user),
    url(r'^remove_user_web/',views.remove_user_web),
    url(r'^create_address/',views.create_address),
    url(r'^remove_address/',views.remove_address),
    url(r'^get_address_info_by_id/',views.get_address_info_by_id),
    url(r'^get_all_address_info/',views.get_all_address_info),
    url(r'^modify_address/',views.modify_address),
    url(r'^create_news/',views.create_news),
    url(r'^remove_news/',views.remove_news),
    url(r'^get_news_list/',views.get_news_list),
    url(r'^get_news_detail_by_id/',views.get_news_detail_by_id),
    url(r'^modify_news/',views.modify_news),
    url(r'^collect_news/',views.collect_news),
    url(r'^remove_collected_news/',views.remove_collected_news),
    url(r'^get_all_collection_list/',views.get_all_collection_list),
    url(r'^get_collection_list_by_user_id/',views.get_collection_list_by_user_id),
    url(r'^get_game_list/',views.get_game_list),
    url(r'^create_game/',views.create_game),
]
