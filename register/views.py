from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
# from django.contrib.auth import login, authenticate
from django.contrib.auth.models import User
from .forms import AddUser

# Create your views here.
def register(request):
    if request.method == "POST":
        form = AddUser(request.POST)
        if form.is_valid():
            if form.cleaned_data["password1"] == form.cleaned_data["password2"]:
                newuser = User(
                    username = form.cleaned_data["username"]   
                )
                # password is set separately for correct django hashing
                newuser.set_password(form.cleaned_data["password1"])
                newuser.save()

                return HttpResponseRedirect(reverse('feed'))

            return HttpResponseRedirect(reverse('register'))

    else:
        form = AddUser()

    return render(request, "register/register.html", {"form": form})