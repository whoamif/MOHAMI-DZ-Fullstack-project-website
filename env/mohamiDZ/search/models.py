# Add the following in models.py

from django.db import models

class Lawyers(models.Model):
    lawyername = models.CharField(max_length=50)
    email = models.CharField(max_length=100, null=True)
    password = models.CharField(max_length=255, null=True)
    adr = models.CharField(max_length=100, null=True)
    profile_pic = models.CharField(max_length=100, null=True)
    Phn_number = models.CharField(max_length=50, null=True)
    domains = models.TextField(null=True)
    price = models.CharField(max_length=50, null=True)
    license_num = models.CharField(max_length=10, null=True)
    schedule = models.CharField(max_length=200, null=True)
    edu_bg = models.CharField(max_length=100, null=True)
    Year_exp = models.IntegerField(null=True)
    bio = models.TextField(null=True)
