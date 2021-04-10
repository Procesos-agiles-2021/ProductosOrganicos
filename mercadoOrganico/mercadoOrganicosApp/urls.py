from .viewsets import *
from django.urls import path

urlpatterns = [
    path('catalogo/', CatalogoViewset)
]
