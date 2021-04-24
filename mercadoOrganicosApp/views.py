from django.http import HttpResponse
from django.shortcuts import redirect
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics, serializers
from .logic import signin as do_signup, signout as do_signout
from .serializers import UserSerializer, RegisterSerializer, CatalogoSerializer
from .models import Catalogo
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout


@api_view(["POST"])
def signin(request):
    username = request.data.get('username', '')
    password = request.data.get('password', None)
    try:
        user, token = do_signup(request, username, password)
        return Response({
            'token': token,
            'data': UserSerializer(user).data,
        }, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_403_FORBIDDEN)


@api_view(["POST"])
def signout(request):
    do_signout(request, user=request.user)
    return redirect('/')


@csrf_exempt
def login_view(request):
    return render(request, "login.html")


@csrf_exempt
def signup(request):
    if request.method == 'POST':
        newUser = User(
            username=request.POST.get('username'),
            password=request.POST.get('password'),
            first_name=request.POST.get('first_name'),
            last_name=request.POST.get('last_name'),
            email=request.POST.get('email'),
            phone=request.POST.get('phone'))
        newUser.save()
    return HttpResponse(serializers.serialize("json", [newUser]))


def redirect_to_home(request):
    return redirect('/login')


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(["GET", "POST"])
def catalogos_list_post(request):
    if request.method == 'GET':
        catalogos = Catalogo.objects.all()
        serializer = CatalogoSerializer(catalogos, many=true)
        return Response(serializer.data)
    elif request.method == "POST":
        serializer = CatalogoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error, status=status.HTTP_404_NOT_FOUND)


@api_view(["PUT", "DELETE"])
def catalogos_update_delete(request, pk):
    try:
        catalogo = Catalogo.objects.get(pk=pk)
        if request.method == 'PUT':
            serializer = CatalogoSerializer(catalogo, data=request.data)
            if serializer.is_valid():
                serializer.save
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            catalogo.delete()
            return Response(status=status.HTTP_200_OK)
    except Catalogo.DoesNotExist:
        return Response(status=status.HTTP_400_BAD_REQUEST)
