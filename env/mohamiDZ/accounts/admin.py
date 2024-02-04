# yourapp/admin.py

from django.contrib import admin
from .models import Lawyer

class LawyerAdmin(admin.ModelAdmin):
    list_display = ('lawyername', 'email', 'Phn_number')  # Specify the fields to display in the list view

admin.site.register(Lawyer, LawyerAdmin)
