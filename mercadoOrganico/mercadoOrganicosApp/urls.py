"""mercadoOrganico URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
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
from django.urls import path
from .views import signin, signout, RegisterView, login_view, redirect_to_home
from django.conf.urls import url

urlpatterns = [
    path('', redirect_to_home, name="Home"),
    path('admin/', admin.site.urls),
    path('signin', signin, name='Sign In'),
    path('signout', signout, name='Sign Out'),
    path('login/', login_view, name='login'),
    path('register/', RegisterView.as_view(), name='auth_register'),
]
