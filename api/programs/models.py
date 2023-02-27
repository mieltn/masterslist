from django.db import models
from users.models import User


class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Subject(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Program(models.Model):
    user = models.ForeignKey(User, blank=True, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    university = models.CharField(max_length=100)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    duration = models.CharField(max_length=10)
    website = models.CharField(max_length=200)
    other = models.CharField(max_length=300, blank=True, null=True)

    def __str__(self):
        return self.name
