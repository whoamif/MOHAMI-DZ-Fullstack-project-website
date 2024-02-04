# yourapp/admin.py

from django.contrib import admin
from .models import UserAccount,Lawyer

# admin.py in your useraccount app


class UserAccountAdmin(admin.ModelAdmin):
    list_display = ['email', 'is_lawyer', 'is_added']  # Add other fields as needed
class lawAdmin(admin.ModelAdmin):
    list_display = ['email']
admin.site.register(UserAccount, UserAccountAdmin)
admin.site.register(Lawyer, lawAdmin)


