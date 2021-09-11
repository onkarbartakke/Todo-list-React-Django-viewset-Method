from rest_framework import routers
from api.views import TodoViewset

router = routers.DefaultRouter()
router.register('todo', TodoViewset)
