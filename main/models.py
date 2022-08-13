from django.db import models
# from django.contrib.auth.models import User

# Create your models here.

class Programm(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    university = models.CharField(max_length=100)
    country = models.ForeignKey("Country", on_delete=models.CASCADE)
    subject = models.ForeignKey("Subject", on_delete=models.CASCADE)
    duration = models.CharField(max_length=10)
    webpage = models.CharField(max_length=100)
    other = models.CharField(max_length=300, null=True)

    def __str__(self):
        return self.name

class Country(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Subject(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


# class Comment(models.Model):
#     programm = models.ForeignKey("Programm", on_delete=models.CASCADE)
#     text = models.CharField(max_length=300)

#     def __str__(self):
#         return self.text