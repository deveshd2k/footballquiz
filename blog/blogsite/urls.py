from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns=[
	path('',views.index,name='index'),
	path('register',views.register,name='register'),
	path('login',auth_views.login,{'template_name':'login.html'},name='login'),
	path('kickoff',views.kickoff,name='kickoff'),
	path('questions',views.questions,name='questions'),
	path('user_logout', views.user_logout,name='logout'),
	]