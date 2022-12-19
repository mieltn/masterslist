from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return User.objects.create_user(
            email = validated_data['email'],
            password = validated_data['password']
        )
    
    class Meta:
        model = User
        fields = ('id', 'email', 'password', 'is_admin')
        extra_kwargs = {'password': {'write_only': True}}