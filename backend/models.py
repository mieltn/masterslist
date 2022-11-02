from os import lseek
from unittest.util import _MAX_LENGTH
from django.db import models


class Program(models.Model):
    name = models.CharField(max_length=100)
    website = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Country(models.Model):
    country = models.CharField(max_length=100)

    def __str__(self):
        return self.country

