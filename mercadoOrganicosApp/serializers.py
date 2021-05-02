from rest_framework.serializers import Serializer, CharField, IntegerField, ModelSerializer, EmailField, ValidationError
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from .models import *


class UserSerializer(Serializer):
    id = IntegerField(read_only=True)
    username = CharField(max_length=150)
    first_name = CharField(max_length=150)
    last_name = CharField(max_length=150)


class RegisterSerializer(ModelSerializer):
    email = EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = CharField(write_only=True, required=True, validators=[validate_password])
    password2 = CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password', 'password2', 'email', 'first_name', 'last_name')
        extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )

        user.set_password(validated_data['password'])
        user.save()

        return user


class CatalogoSerializer(ModelSerializer):
    class Meta:
        model = Catalogo
        fields = ('id', 'fecha_creacion', 'admin_creador')


class CarritoSerializer(ModelSerializer):
    class Meta:
        model = Carrito
        fields = ('id', 'usuario_id', 'item_compras')


class ItemCompraSerializer(ModelSerializer):
    class Meta:
        model = ItemCompra
        fields = ('id', 'imagenUrl', 'visibilidad', 'catalogo')


class CarritoItemCompraCantidadSerializer(ModelSerializer):
    itemCompra = ItemCompraSerializer(read_only=True)
    itemCompra_id = serializers.PrimaryKeyRelatedField(
        write_only=True, source='itemCompra', queryset=ItemCompra.objects.all())

    class Meta:
        model = ItemCompraCarrito
        fields = ('itemCompra', 'itemCompra_id', 'cantidad')


class ItemCompraCarritoSerializer(ModelSerializer):
    class Meta:
        model = ItemCompraCarrito
        fields = ('itemCompra_id', 'cantidad')


class CarritoCreateSerializer(ModelSerializer):
    item_compras = CarritoItemCompraCantidadSerializer(many=True)

    class Meta:
        model = Carrito
        fields = ('id', 'usuario_id', 'item_compras')

    def create(self, validated_data):
        item_compras_data = validated_data.pop('item_compras')
        print(item_compras_data)
        carrito = Carrito.objects.create(**validated_data)
        for item_data in item_compras_data:
            print(item_data)
            ItemCompraCarrito.objects.create(
                carrito=carrito,
                item_compra=item_data.get('itemCompra'),
                cantidad=item_data.get('cantidad'))
        return carrito
