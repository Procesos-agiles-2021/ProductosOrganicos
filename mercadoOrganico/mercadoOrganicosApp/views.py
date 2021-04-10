from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.
from .models import Catalogo

def catalogo(request):
    catalogo = Catalogo.objetcs.filter(id=request.id)
    return HttpResponse(serializers.serialize("json", catalogo))

def vercatalogo(request): 
    return render(request, "vercatalogo.html")
