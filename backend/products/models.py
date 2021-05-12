from django.db import models

class Products(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    photo = models.CharField(max_length=200, blank=False, default='')
<<<<<<< HEAD

    class Meta() :
        db_table = 'products'
=======
>>>>>>> d0418bc1045dba1a0ec9693902281ad34af80eac
