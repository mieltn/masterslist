from django.contrib import admin
from django.urls import path
from backend.views import (
    ProgramsView,
    ProgramView,
    CountriesView,
    SubjectsView,
)
from users.views import UserView, LoginView, LogoutView

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/programs/', ProgramsView.as_view()),
    path('api/programs/<int:id>', ProgramView.as_view()),
    path('api/countries/', CountriesView.as_view()),
    path('api/subjects/', SubjectsView.as_view()),

    path('auth/user/', UserView.as_view()),
    path('auth/login/', LoginView.as_view()),
    path('auth/logout/', LogoutView.as_view()),
]
