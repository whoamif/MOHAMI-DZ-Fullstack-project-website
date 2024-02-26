from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
# Add the following in views.py

from rest_framework import generics
from .models import Lawyers,Rendezvous
from .serializers import LawyersSerializer 
from django.db import connection 
from rest_framework import filters

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.views import View
from rest_framework.parsers import JSONParser
from .models import Rendezvous
from .serializers import RendezvousSerializer


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





# views.py
from rest_framework import generics
from .models import Rendezvous
from .serializers import RendezvousSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view('POST')
def RendezvousCreateView(request):
    if request.method== "POST":
        saveserialialize= RendezvousSerializer(data=request.data)
        if saveserialialize.is_valid():
            saveserialialize.save()
            return Response(saveserialialize.data, status=status.HTTP_201_CREATED)
            return Response(saveserialialize.data, status=status.HTTP_400_BAD_REQUEST)



"""
    queryset = Rendezvous.objects.all()
    serializer_class = RendezvousSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        # Custom logic before saving (if needed)
        # For example, you can modify data or perform additional checks

        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

"""















   
    



