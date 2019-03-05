from . import views
from django.conf.urls import url, include
from rest_framework import routers

router = routers.DefaultRouter()
app_name = 'chat'


urlpatterns = [
    url('home', views.home),
    url('home/', views.home),
]
