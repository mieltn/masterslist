from django.db import models

# Create your models here.
class Programm(models.Model):
    name = models.CharField(max_length=100)
    university = models.CharField(max_length=100)
    duration = models.CharField(max_length=10)
    webpage = models.CharField(max_length=100)
    other = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name
        