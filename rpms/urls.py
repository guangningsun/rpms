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
    url(r'^$', views.init_web),
    url(r'^logout/', views.init_web),
    url(r'^create_user/', views.create_user),
    url(r'^get_all_user_info/', views.get_all_user_info),
    url(r'^user_login/', views.user_login),
    url(r'^get_user_info_by_id/', views.get_user_info_by_id),
    url(r'^modify_user/', views.modify_user),
    url(r'^remove_user/', views.remove_user),
   
    url(r'^manage_user', views.manage_user),
    url(r'^manage_payment', views.manage_payment),
    url(r'^manage_student', views.manage_student),
    url(r'^manage_p_class', views.manage_p_class),
    url(r'^manage_class', views.manage_class),
    url(r'^manage_report', views.manage_report),
    url(r'^settings', views.manage_settings),
   
    url(r'^create_student/', views.create_student),
    url(r'^get_all_student_info/', views.get_all_student_info),
    url(r'^get_student_info_by_id/', views.get_student_info_by_id),
    url(r'^modify_student/', views.modify_student),
    url(r'^remove_student/', views.remove_student),
   
    url(r'^create_payment', views.create_payment),
    url(r'^remove_payment', views.remove_payment),
    url(r'^get_all_payment_info', views.get_all_payment_info),
    url(r'^modify_payment', views.modify_payment),
    url(r'^get_payment_list_by_stu_id_card',
        views.get_payment_list_by_stu_id_card),

    url(r'^remove_p_class', views.remove_payment_class),
    url(r'^create_p_class', views.create_payment_class),
    url(r'^get_all_p_class_info', views.get_all_payment_class_info),
    url(r'^modify_p_class', views.modify_payment_class),

    url(r'^create_class', views.create_class),
    url(r'^remove_class', views.remove_class),
    url(r'^get_all_class_info', views.get_all_class_info),
    url(r'^modify_class', views.modify_class),
   
    url(r'^student_login_api', views.student_login_api),
    url(r'^get_student_info_summary_api',
        views.get_student_info_summary_api),
    url(r'^get_student_bill_by_stu_num', 
        views.get_student_bill_by_stu_num),
    url(r'^get_already_payed_bill_by_stu_num', 
        views.get_already_payed_bill_by_stu_num),
    url(r'^excel_upload', views.excel_upload),
    url(r'^h5pay', views.h5pay),
    url(r'^pay_success',views.pay_success),
    url(r'^get_payment_status',views.get_payment_status),

    url(r'^check_stu_num_repl', views.check_stu_num_repl),
    url(r'^query_result_transaction', views.query_result_transaction),
]


handler404 = views.page_not_found