from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import status
from .models import Producto, Carrito
from .serializers import ProductSerializer, CarritoSerializer


class JSONResponse(HttpResponse):
    def __init__(self, data, **kwargs):
        content = JSONRenderer().render(data)
        kwargs['content_type'] = 'application/json'
        super(JSONResponse, self).__init__(content, **kwargs)


@csrf_exempt
def product_list(request):
    if request.method == 'GET':
        products = Producto.objects.all()
        products_serializer = ProductSerializer(products, many=True)
        return JSONResponse(products_serializer.data)

    elif request.method == 'POST':
        product_data = JSONParser().parse(request)
        product_serializer = ProductSerializer(data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JSONResponse(product_serializer.data, status=status.HTTP_201_CREATED)
        return JSONResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def product_detail(request, pk):
    try:
        product = Producto.objects.get(pk=pk)
    except Producto.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        product_serializer = ProductSerializer(product)
        return JSONResponse(product_serializer.data)

    elif request.method == 'PUT':
        product_data = JSONParser().parse(request)
        product_serializer = ProductSerializer(product, data=product_data)
        if product_serializer.is_valid():
            product_serializer.save()
            return JSONResponse(product_serializer.data)
        return JSONResponse(product_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def carrito_list_update(request, userPk):
    try:
        carrito = Carrito.objects.filter(usuario_id=userPk)
        if request.method == 'GET':
            serializer = CarritoSerializer(carrito)
            return Response(serializer.data)
        elif request.method == "PUT":
            serializer = CarritoSerializer(carrito, data=request.data)
            if serializer.is_valid():
                serializer.save
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
    except Carrito.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)