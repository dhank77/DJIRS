from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('login', views.login_view),
    path('logout', views.logout_view),
    path('admin/', include('admin.urls')),
]
