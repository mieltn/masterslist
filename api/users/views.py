from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication

from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated
from config.permissions import IsAuthOrCreate


class UserView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthOrCreate]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class LoginView(APIView):

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user = authenticate(request, email=email, password=password)
        if not user:
            return Response(
                {'msg': 'failed to authenticate user'},
                status=status.HTTP_401_UNAUTHORIZED
            )
        serializer = UserSerializer(user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'user': serializer.data, 'token': token.key})


class LogoutView(APIView):
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)