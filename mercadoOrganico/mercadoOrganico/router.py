from mercadoOrganicosApp.viewsets import CatalogoViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('catalogo',CatalogoViewset)

# localhost:p/api/employee/5
# GET, POST, PUT, DELETE
# list , retrive
