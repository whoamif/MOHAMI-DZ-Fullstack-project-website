from rest_framework import serializers
from django.contrib.auth.models import User
from .models import CustomUser
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields = ('id','username', 'email', 'password', 'is_lawyer')