from rest_framework import viewsets
from api.models import Todo
from api.serializers import TodoSerializer

# Create your views here.
class TodoViewset(viewsets.ModelViewSet):
    queryset = Todo.objects.all() 
    serializer_class = TodoSerializer