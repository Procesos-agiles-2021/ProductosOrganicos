<<<<<<< HEAD
from django.conf.urls import url
from mercadoOrganicosApp import views

urlpatterns = [
    url(r'^products/$', views.product_list),
    url(r'^products/(?P<pk>[0-9]+)/$', views.product_detail),
=======
from .views import *
from django.urls import path

urlpatterns = [
    # path('catalogo/', catalogo_list )
>>>>>>> b9f4a318b4f2c08c5d659803cc2198ce28f12e08
]
