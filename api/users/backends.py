from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token

from .models import User

class AuthBackend(BaseBackend):

    def authenticate(self, request, email, password):
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return
        if user.email == email and check_password(password, user.password):
            return user
        return