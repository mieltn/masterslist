from django.shortcuts import render
from django.http import HttpResponse
from .models import Programm

# Create your views here.
def index(response):
    return render(response, "main/index.html", {})

def programm(response, id):
    pr = Programm.objects.get(id=id)
    return render(response, "main/programm.html", {"pr": pr})

def feed(response):
    allpr = Programm.objects.all()
    return render(response, "main/feed.html", {"allpr": allpr})
