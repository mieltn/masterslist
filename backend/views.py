from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import Program
from .serializers import ProgramSerializer


class ProgramsView(APIView):
    def get(self, request):
        programs = Program.objects.all()
        serializer = ProgramSerializer(programs, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = ProgramSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProgramView(APIView):
    def get(self, request, id):
        program = Program.objects.get(pk=id)
        serializer = ProgramSerializer(program)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, id):
        program = Program.objects.get(pk=id)
        serializer = ProgramSerializer(program, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        program = Program.objects.get(pk=id)
        program.delete()
        return Response(status=status.HTTP_200_OK)


# class CountriesView(APIView):
#     def get(self, request):
#         countries = Country.objects.all()
#         serializer = CountrySerializer(countries, many=True)
#         return Response(serializer.data, status=status.HTTP_200_OK)

#     def post(self, request):
#         serializer = CountrySerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
