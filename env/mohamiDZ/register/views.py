from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


from .serializers import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import token 
from django.contrib.auth.models import User

@api_view(['POST']) #run this when post request is made
def login(request):
    return Response({})

@api_view(['POST']) #run this when post request is made
def signup(request):
    return Response({})


@api_view(['GET']) #run this when post request is made
def test_token(request):
    return Response({})