from django.shortcuts import render

# Create your views here.
# Add the following in views.py

from rest_framework import generics
from .models import Lawyers
from .serializers import LawyersSerializer
from django.db import connection




class LawyerSearchView(generics.ListAPIView):
    serializer_class = LawyersSerializer

    def get_queryset(self):
        name = self.request.query_params.get('name', '')
        print(f"Search Name: {name}")

        # Use Django ORM to execute raw SQL query
        queryset = Lawyers.objects.raw('SELECT * FROM Lawyers WHERE lawyername = %s', [name])

        for item in queryset:
            print(item.lawyername)

        return queryset 


