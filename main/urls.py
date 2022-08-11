from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("<int:id>", views.programm, name="programm"),
    path("feed/", views.feed, name="feed"),
    path("addprogramm/", views.addprogramm, name="addprogramm"),
    path("<int:id>/edit/", views.edit, name="edit"),
]
