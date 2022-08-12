from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Programm, Country, Subject
from .forms import AddProgramm

# Create your views here.
def index(request):
    return render(request, "main/index.html", {})

def programm(request, id):
    pr = Programm.objects.get(id=id)

    if request.POST.get("edit"):
        return HttpResponseRedirect("/%i/edit/" %pr.id)

    elif request.POST.get("delete"):
        pr.delete()
        return HttpResponseRedirect("feed/")

    return render(
        request,
        "main/programm.html",
        {"pr": pr}
    )

def feed(request):
    allpr = Programm.objects.all()
    return render(request, "main/feed.html", {"allpr": allpr})

def addprogramm(request):
    if request.method == "POST":
        form = AddProgramm(request.POST)
        if form.is_valid():
            newpr = Programm(
                name = form.cleaned_data["name"],
                university = form.cleaned_data["university"],
                country_id = form.cleaned_data["country"].id,
                subject_id = form.cleaned_data["subject"].id,
                duration = form.cleaned_data["duration"],
                webpage = form.cleaned_data["webpage"],
                other = form.cleaned_data["other"]
            )
            newpr.save()
            return HttpResponseRedirect("/%i" %newpr.id)
    else:
        form = AddProgramm()

    return render(request, "main/addprogramm.html", {"form": form})

def edit(request, id):
    pr = Programm.objects.get(id=id)

    if request.method == "POST":
        form = AddProgramm(request.POST)
        if form.is_valid():
            pr.name = form.cleaned_data["name"]
            pr.university = form.cleaned_data["university"]
            pr.country_id = form.cleaned_data["country"].id
            pr.subject_id = form.cleaned_data["subject"].id
            pr.duration = form.cleaned_data["duration"]
            pr.webpage = form.cleaned_data["webpage"]
            pr.other = form.cleaned_data["other"]
            pr.save()
        
        return HttpResponseRedirect("/%i" %pr.id)

    else:
        form = AddProgramm(instance=pr)
        return render(request, "main/edit.html", {"form": form})
