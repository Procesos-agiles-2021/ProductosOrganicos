from django.contrib import admin
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from .models import Catalogo, Producto, ItemCompra

# Register your models here.


@admin.register(Catalogo)
class CatalogoAdmin(admin.ModelAdmin):
    list_display = ('fecha_creacion', 'admin_creador')


@admin.register(ItemCompra)
class ItemCompraAdmin(admin.ModelAdmin):
    list_display = ('tipo', 'visibilidad', 'catalogo')
