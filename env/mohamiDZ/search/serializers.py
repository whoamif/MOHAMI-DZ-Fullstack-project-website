# Add the following in serializers.py

from rest_framework import serializers
from .models import Lawyers,Rendezvous

class LawyersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lawyers
        fields = '__all__'



    



class RendezvousSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rendezvous
        fields = ['title', 'rv_content', 'lawyer', 'user']
