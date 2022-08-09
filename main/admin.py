from django.contrib import admin
from .models import FieldType, Field, Programm
# Register your models here.
admin.site.register(Programm)
admin.site.register(FieldType)
admin.site.register(Field)