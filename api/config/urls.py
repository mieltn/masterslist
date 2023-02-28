from django.contrib import admin
from django.urls import path
from programs.views import (
    ProgramsView,
    ProgramView,
    CountriesView,
    SubjectsView,
    CommentsView,
)
from users.views import UserView, LoginView, LogoutView

urlpatterns = [
    path('api/admin/', admin.site.urls),

    path('api/programs/', ProgramsView.as_view()),
    path('api/programs/<int:id>', ProgramView.as_view()),
    path('api/countries/', CountriesView.as_view()),
    path('api/subjects/', SubjectsView.as_view()),
    path('api/comments/', CommentsView.as_view()),

    path('api/user/', UserView.as_view()),
    path('api/login/', LoginView.as_view()),
    path('api/logout/', LogoutView.as_view()),
]
