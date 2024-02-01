from django.shortcuts import render

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


class LawyerSearchViewAdr(generics.ListAPIView):
    search_fields = ['adr'] 
    filter_backends = (filters.SearchFilter,)
    queryset = Lawyers.objects.all()
    serializer_class = LawyersSerializer 



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
    



