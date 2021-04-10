from django.http import HttpResponse
from django.shortcuts import redirect
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics, serializers
from .logic import signin as do_signup, signout as do_signout
from .serializers import UserSerializer, RegisterSerializer
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
