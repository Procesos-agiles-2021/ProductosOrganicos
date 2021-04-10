from rest_framework import serializers
<<<<<<< HEAD
from mercadoOrganicosApp.models import Producto


=======
from .models import *

class carritoSerializer (serializers.ModelSerializer):
    class Meta:
        model = Carrito
        fields= ('usuario_id','item_compras', 'precio_total')
        
>>>>>>> b9f4a318b4f2c08c5d659803cc2198ce28f12e08
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'
        pk = serializers.IntegerField(read_only=True)
        nombre = serializers.CharField(max_length=100, default='')
        fecha_creacion = serializers.DateTimeField()
        precio = serializers.FloatField()
        itemId = serializers.ReadOnlyField()

        def create(self, validated_data):
            return Producto.objects.create(**validated_data)

        def update(self, instance, validated_data):
            instance.nombre = validated_data.get('nombre', instance.nombre)
            instance.fecha_creacion = validated_data.get(
                'fecha_creacion', instance.fecha_creacion)
            instance.precio = validated_data.get('precio', instance.precio)
            instance.save()
            return instance
