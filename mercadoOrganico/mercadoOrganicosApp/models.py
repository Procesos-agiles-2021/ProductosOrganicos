from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Catalogo(models.Model):
  #  id = models.AutoField(primary_key=True)
    fecha_creacion = models.DateField(verbose_name='Fecha de creacion')
    admin_creador = models.ForeignKey(User, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name_plural = "Catalogos"


class ItemCompra(models.Model):
   # id = models.AutoField(primary_key=True)
    tipo = models.CharField(max_length=100)
    visibilidad = models.BooleanField()
    catalogo = models.ForeignKey(to=Catalogo, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name_plural = "Items"

    def __str__(self) -> str:
        return self.tipo


class Producto(models.Model):
   # id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    fecha_creacion = models.DateTimeField()
    precio = models.FloatField()
    itemCompra = models.ForeignKey(to=ItemCompra, on_delete=models.DO_NOTHING)

    class Meta:
        verbose_name_plural = "Productos"


class Consummer(models.Model):
   # id = models.AutoField(primary_key=True)
    firstName = models.CharField(max_length=20)
    lastName = models.CharField(max_length=20)
    middleName = models.CharField(max_length=20)
    email = models.CharField(max_length=20)
    phone = models.CharField(max_length=10)


class Reservation(models.Model):
   # id = models.AutoField(primary_key=True)
    producto = models.OneToOneField(Producto, on_delete=models.CASCADE)
    consummer = models.OneToOneField(Consummer, on_delete=models.CASCADE)
