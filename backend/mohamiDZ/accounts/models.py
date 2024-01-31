from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# yourapp/read_only_models.py

from django.db import models

class Lawyer(models.Model):
    lawyer_id = models.AutoField(primary_key=True)
    lawyername = models.CharField(max_length=50)
    email = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    adr = models.CharField(max_length=100, blank=True, null=True)
    profile_pic = models.CharField(max_length=100, blank=True, null=True)
    Phn_number = models.CharField(max_length=50, blank=True, null=True)
    domains = models.TextField(blank=True, null=True)
    price = models.CharField(max_length=50, blank=True, null=True)
    license_num = models.CharField(max_length=10, blank=True, null=True)
    schedule = models.CharField(max_length=200, blank=True, null=True)
    edu_bg = models.CharField(max_length=100, blank=True, null=True)
    Year_exp = models.IntegerField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'lawyers'


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("The email field is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class LawyerManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_lawyer=True)

class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.CharField(unique=True, max_length=100)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    
    is_staff = models.BooleanField(default=False)
    is_lawyer = models.BooleanField(default=False)

    objects = UserAccountManager()
    lawyers = LawyerManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def get_full_name(self):
        return self.first_name
    def get_short_name(self):
        return self.first_name
    def __str__(self):
        return self.email