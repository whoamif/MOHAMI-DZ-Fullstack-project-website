from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    # Add your additional fields here
    email = models.CharField(unique=True, max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    wilaya = models.CharField(max_length=100)
    dateofbirth = models.DateField(null=True, blank=True)
    phone_num = models.IntegerField(null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_lawyer = models.BooleanField(default=False)
    

    # Add related_name to avoid clashes with default User model
    groups = models.ManyToManyField(
        'auth.Group',
        related_name='customuser_set',
        related_query_name='user',
        blank=True,
        help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.',
    )
    user_permissions = models.ManyToManyField(
        'auth.Permission',
        related_name='customuser_set',
        related_query_name='user',
        blank=True,
        help_text='Specific permissions for this user.',
    )

