from django.contrib import admin
from .models import Programm, Country, Subject, Comment
# Register your models here.
admin.site.register(Programm)
admin.site.register(Country)
admin.site.register(Subject)
admin.site.register(Comment)