from django.conf.urls import url
from .views import *
from django.urls import path

urlpatterns = [
    url(r'^products/$', product_list),
    url(r'^products/(?P<pk>[0-9]+)/$', product_detail),
    path('user/<int:userPk>/carrito', carrito_list_update)
]
