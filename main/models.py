from django.db import models

# Create your models here.

class Programm(models.Model):
    name = models.CharField(max_length=100)
    university = models.CharField(max_length=100)
    country = models.ForeignKey("Country", on_delete=models.CASCADE, null=True)
    duration = models.CharField(max_length=10)
    webpage = models.CharField(max_length=100)
    other = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name

class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name