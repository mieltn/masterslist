"""mysite URL Configuration

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
from django.urls import path, include
from register import views as vreg
from django.contrib.auth.views import LoginView
from register.forms import CustomLoginForm

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("main.urls")),
    # direct path to register view
    path('register/', vreg.register, name="register"),
    # LoginView - is django class-based view for login form
    # since I adjusted login form style I needed to include this url manually
    path('login/', LoginView.as_view(authentication_form=CustomLoginForm), name="mylogin"),
    # normally when you use default auth preset django.contrib.auth.urls is enough
    path('', include("django.contrib.auth.urls")),
]
