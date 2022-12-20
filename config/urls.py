"""masterslist URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
# from rest_framework.authtoken.views import obtain_auth_token
from backend.views import ProgramsView, ProgramView
from users.views import UserView, LoginView, LogoutView
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/programs/', ProgramsView.as_view(), name='get-add-programs'),
    path('api/programs/<int:id>', ProgramView.as_view(), name='get-edit-program'),
    # path('country/', CountriesView.as_view(), name='get-add-countries'),

    path('auth/user/', UserView.as_view()),
    # path('auth/login/', obtain_auth_token),
    path('auth/login/', LoginView.as_view()),
    path('auth/logout/', LogoutView.as_view()),
    # path('auth/login/', TokenObtainPairView.as_view()),
    # path('auth/login/refresh', TokenRefreshView.as_view()),
]
