from django.contrib import admin

# Register your models here.
from .models import Lawyers,Users,Rendezvous,Rating,Comments

admin.site.register(Lawyers)
admin.site.register(Users)
admin.site.register(Rendezvous)
admin.site.register(Rating)
admin.site.register(Comments)


