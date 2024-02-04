from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
# Add the following in views.py

from rest_framework import generics
from .models import Lawyers
from .serializers import LawyersSerializer 
from django.db import connection 
from rest_framework import filters



class LawyerSearchView(generics.ListAPIView):
    search_fields = ['lawyername']
    filter_backends = (filters.SearchFilter,)
    queryset = Lawyers.objects.all()
    serializer_class = LawyersSerializer 


    def get(self, request, *args, **kwargs):
    # Handle GET request logic here (if needed)
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Handle POST request logic here
        # Example: Create a new lawyer object
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LawyerSearchViewAdr(generics.ListAPIView):
    search_fields = ['adr'] 
    filter_backends = (filters.SearchFilter,)
    queryset = Lawyers.objects.all()
    serializer_class = LawyersSerializer 
    
    def get(self, request, *args, **kwargs):
        # Handle GET request logic here (if needed)
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Handle POST request logic here
        # Example: Create a new lawyer object
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class LawyerSearchViewDomain(generics.ListCreateAPIView):
    search_fields = ['domains']
    filter_backends = (filters.SearchFilter,)
    queryset = Lawyers.objects.all()
    serializer_class = LawyersSerializer

    def get(self, request, *args, **kwargs):
        # Handle GET request logic
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        # Handle POST request logic
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




"""class LawyerSearchView(generics.ListAPIView):
    serializer_class = LawyersSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        print(f"Search Name: {name}")

        with connection.cursor() as cursor:
            cursor.execute('SELECT lawyer_id, lawyername, email, password, adr, profile_pic, Phn_number, domains, price, license_num, schedule, edu_bg, Year_exp FROM Lawyers WHERE lawyername = %s', [name])

        queries = connection.queries
        for query in queries:
            print(query['sql'])

        return Lawyers.objects.filter(lawyername__icontains=name)"""    
    


