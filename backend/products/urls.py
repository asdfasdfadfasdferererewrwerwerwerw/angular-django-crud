from django.conf.urls import url
from django.urls import path
from products import views 
 
urlpatterns = [ 
    path('api/products', views.products_list)
]