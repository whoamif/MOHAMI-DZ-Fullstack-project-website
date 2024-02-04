from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


from .serializers import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token 
from django.contrib.auth.models import User
from .models import CustomUser

@api_view(['POST']) #run this when post request is made
def login(request):
    return Response({})

@api_view(['POST']) #run this when post request is made
def signup(request):
    serializer=UserSerializer(data=request.data)
    if  serializer.is_valid():
        serializer.save()
        user=CustomUser.objects.get(email=request.data['email'])
        user.set_password(request.data['password'])
        user.save()
        user=User.objects.get(email=request.data['email'])

        token=Token.objects.create(user=user)
        return Response({'token': token.key, 'user':serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET']) #run this when post request is made
def test_token(request):
    return Response({})