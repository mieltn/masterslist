from rest_framework import serializers
from .models import Program, Country, Subject


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name')


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ('id', 'name')


class ProgramSerializer(serializers.ModelSerializer):
    country = CountrySerializer()
    subject = SubjectSerializer()

    class Meta:
        model = Program
        fields = '__all__'

    def create(self, validated_data):
        country_data = validated_data.pop('country')
        subject_data = validated_data.pop('subject')

        country = Country.objects.get(name=country_data['name'])
        subject = Subject.objects.get(name=subject_data['name'])

        validated_data['country'] = country
        validated_data['subject'] = subject

        program = Program.objects.create(**validated_data)

        return program

    def update(self, instance, validated_data):
        country_data = validated_data.pop('country')
        subject_data = validated_data.pop('subject')

        country = Country.objects.get(name=country_data['name'])
        subject = Subject.objects.get(name=subject_data['name'])

        instance.name = validated_data['name']
        instance.university = validated_data['university']
        instance.country = country
        instance.subject = subject
        instance.duration = validated_data['duration']
        instance.other = validated_data['other']
        instance.website = validated_data['website']

        instance.save()

        return instance


# class ReadProgramSerializer(ProgramSerializer):
#     country = serializers.StringRelatedField()
#     subject = serializers.StringRelatedField()

#     class Meta:
#         model = Program
#         fields = '__all__'
        