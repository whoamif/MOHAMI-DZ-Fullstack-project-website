# Add the following in serializers.py

from rest_framework import serializers
from .models import Lawyers

class LawyersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lawyers
        fields = '__all__'
