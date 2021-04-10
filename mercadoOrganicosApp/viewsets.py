from rest_framework import viewsets
from . import models
from . import serializers

class CatalogoViewset(viewsets.ModelViewSet):
    queryset = models.Catalogo.objects.all()
    serializer_class = serializers.CatalogoSerializer


