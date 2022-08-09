from django.db import models

# Create your models here.
class Programm(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class FieldType(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Field(models.Model):
    programm = models.ForeignKey(Programm, on_delete=models.CASCADE)
    field_type = models.ForeignKey(FieldType, on_delete=models.CASCADE)
    value = models.CharField(max_length=200)
    
    def __str__(self):
        return str(self.field_type)