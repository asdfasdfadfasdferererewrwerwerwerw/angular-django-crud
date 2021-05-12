from django.shortcuts import render
<<<<<<< HEAD
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from .models import *
from .serializers import *

@api_view(('GET',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def products_list(request) :
    print(request)
    products = Products.objects.all()
    products_json = ProductSerializer(products)
    print('\n', "!!!!!!!!products_json!!!!!!!!!", products_json, '\'')    
    return Response(data=products_json, status=status.HTTP_200_OK)
=======

# Create your views here.
>>>>>>> d0418bc1045dba1a0ec9693902281ad34af80eac
