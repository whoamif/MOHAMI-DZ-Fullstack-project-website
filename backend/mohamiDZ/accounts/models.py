from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

# Create your models here.
class UserAccountManager(BaseUserManager):
    def create_user(self, email, name, password = None):
        if not email:
            raise ValueError("the email field is required")
        email = self.normalize_email(email)
        user = self.model(email = email, name= name)
        user.set_password(password)
        user.save()
        return user

class UserAccount(AbstractBaseUser, BaseUserManager):
    email = models.CharField(unique = True, max_length=100)
    name = models.CharField(max_length= 100)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    
    objects = UserAccountManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELD = ['name']
    
    def get_full_name(self):
        return self.name
    def get_short_name(self):
        return self.name
    def __str__(self):
        return self.email