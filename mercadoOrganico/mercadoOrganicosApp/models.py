from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Catalogo(models.Model):
    fecha_creacion = models.DateField(verbose_name='Fecha de creacion')
    admin_creador = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name_plural = "Catalogos"


class ItemCompra(models.Model):
    tipo = models.CharField(max_length=100)
    visibilidad = models.BooleanField()
    catalogo = models.ForeignKey(to=Catalogo, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name_plural = "Items"

    def __str__(self) -> str:
        return self.tipo


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.FloatField()
    itemId = models.ForeignKey(to=ItemCompra, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name_plural = "Productos"


class Consummer(models.Model):
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=20)
    middleName = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    phone = models.CharField(max_length=10)


class Reservation(models.Model):
    producto = models.OneToOneField(Producto, on_delete=models.CASCADE)
    consummer = models.OneToOneField(Consummer, on_delete=models.CASCADE)


class Carrito(models.Model):
    usuario_id = models.OneToOneField(User, on_delete=models.CASCADE)
    item_compras = models.ManyToManyField(ItemCompra)
    precio_total = models.DecimalField()

    class Meta:
        verbose_name_plurar = "canastas"

    def __str__(self):
        return self.precio_total
