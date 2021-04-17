from django.conf.urls import url
from .views import *
from django.urls import path

urlpatterns = [
    #path('catalogo/', catalogo_list),
    url(r'^products/$', product_list),
    url(r'^products/(?P<pk>[0-9]+)/$', product_detail)
]
