from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('change-password/', views.change_password),
]