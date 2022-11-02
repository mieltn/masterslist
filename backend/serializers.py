from rest_framework import serializers
from .models import Program


class ProgramSerializer(serializers.ModelSerializer):
    class Meta:
        model = Program
        fields = ('id', 'name', 'country', 'website')

    
# class CountrySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Country
#         fields = ('id', 'country')
        