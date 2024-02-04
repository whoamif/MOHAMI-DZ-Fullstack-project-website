from django.contrib import admin

# Register your models here.
from .models import Lawyers,Users,Rendezvous,Rating,Comments

class LawyerAdmin(admin.ModelAdmin):
    list_display = ('lawyername', 'email')  # Specify the fields to display in the list view

admin.site.register(Lawyers, LawyerAdmin)
admin.site.register(Users)
admin.site.register(Rendezvous)
admin.site.register(Rating)
admin.site.register(Comments)



