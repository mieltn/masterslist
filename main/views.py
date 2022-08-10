from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Programm, Field, FieldType
from .forms import AddProgramm

# Create your views here.
def index(request):
    return render(request, "main/index.html", {})

def programm(request, id):
    pr = Programm.objects.get(id=id)

    if request.POST.get("edit"):
        return HttpResponseRedirect("/%i/edit/" %pr.id)

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
                name = form.cleaned_data["name"]
            )
            newpr.save()
            return HttpResponseRedirect("/%i/edit/" %newpr.id)
    else:
        form = AddProgramm()

    return render(request, "main/addprogramm.html", {"form": form})

def edit(request, id):

    pr = Programm.objects.get(id=id)
    ft = FieldType.objects.all()

    if request.method == "POST":
        field_type = ft.get(name=request.POST.get("fieldtype"))
        if request.POST.get("addupdate"):
            value = request.POST.get("field")
            # checks if the field already exists
            if field_type in [field.field_type for field in pr.field_set.all()]:
                f = Field.objects.get(programm_id=id, field_type_id=field_type.id)
                f.value = value
                f.save()
            else:
                newf = Field(programm_id=id, field_type_id=field_type.id, value=value)
                newf.save()

        elif request.POST.get("remove"):
            f = Field.objects.get(id=request.POST.get("remove"))
            f.delete()

        elif request.POST.get("save"):
            return HttpResponseRedirect("/%i" %pr.id)

    return render(
        request,
        "main/edit.html",
        {"pr": pr, "ft": ft}
    )
