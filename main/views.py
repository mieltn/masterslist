from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Programm, Field, FieldType
from .forms import AddProgramm

# Create your views here.
def index(request):
    return render(request, "main/index.html", {})

def programm(request, id):
    pr = Programm.objects.get(id=id)
    ft = FieldType.objects.all()
    return render(
        request,
        "main/programm.html",
        {"pr": pr, "ft": ft}
    )

def feed(request):
    allpr = Programm.objects.all()
    return render(request, "main/feed.html", {"allpr": allpr})

def addprogramm(request):
    if request.method == "POST":
        form = AddProgramm(request.POST)
        if form.is_valid():
            newpr = Programm(
                name = form.cleaned_data["name"]
            )
            newpr.save()
            return HttpResponseRedirect("/%i" %newpr.id)
    else:
        form = AddProgramm()

    return render(request, "main/addprogramm.html", {"form": form})
