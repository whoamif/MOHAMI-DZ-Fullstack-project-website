# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.


from email.policy import default
from django.db import models
from sqlalchemy import false


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class Comments(models.Model):
    comment_id = models.AutoField(primary_key=True)
    content = models.CharField(max_length=200, blank=True, null=True)
    lawyer = models.ForeignKey('Lawyers', models.DO_NOTHING)

    class Meta:
        
        db_table = 'comments'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class Lawyers(models.Model):
    lawyer_id = models.AutoField(primary_key=True,unique=True, default=0)
    lawyername = models.CharField(max_length=50)
    email = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    adr = models.CharField(max_length=100, blank=True, null=True)
    profile_pic = models.CharField(max_length=100, blank=True, null=True)
    phn_number = models.CharField(db_column='Phn_number', max_length=50, blank=True, null=True)  # Field name made lowercase.
    domains = models.TextField(blank=True, null=True)
    price = models.CharField(max_length=50, blank=True, null=True)
    license_num = models.CharField(max_length=10, blank=True, null=True)
    schedule = models.CharField(max_length=200, blank=True, null=True)
    edu_bg = models.CharField(max_length=100, blank=True, null=True)
    year_exp = models.IntegerField(db_column='Year_exp', blank=True, null=True)  # Field name made lowercase.
    bio = models.TextField(blank=True, null=True)

    class Meta:

        db_table = 'lawyers'


class Rating(models.Model):
    rating_id = models.AutoField(primary_key=True)
    val = models.IntegerField(blank=True, null=True)
    lawyer = models.ForeignKey(Lawyers, models.DO_NOTHING)

    class Meta:

        db_table = 'rating'


class Rendezvous(models.Model):
    rendezvous_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30, blank=True, null=True)
    rv_content = models.CharField(db_column='Rv_content', max_length=200, blank=True, null=True)  # Field name made lowercase.
    lawyer = models.ForeignKey(Lawyers, models.DO_NOTHING)
    user = models.ForeignKey('Users', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'rendezvous'


class SearchLawyers(models.Model):
    id = models.BigAutoField(primary_key=True)
    lawyername = models.CharField(max_length=50)
    email = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    adr = models.CharField(max_length=100, blank=True, null=True)
    profile_pic = models.CharField(max_length=100, blank=True, null=True)
    phn_number = models.CharField(db_column='Phn_number', max_length=50, blank=True, null=True)  # Field name made lowercase.
    domains = models.TextField(blank=True, null=True)
    price = models.CharField(max_length=50, blank=True, null=True)
    license_num = models.CharField(max_length=10, blank=True, null=True)
    schedule = models.CharField(max_length=200, blank=True, null=True)
    edu_bg = models.CharField(max_length=100, blank=True, null=True)
    year_exp = models.IntegerField(db_column='Year_exp', blank=True, null=True)  # Field name made lowercase.
    bio = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'search_lawyers'


class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    adr = models.CharField(max_length=100, blank=True, null=True)
    profile_pic = models.CharField(max_length=100, blank=True, null=True)
    phn_number = models.CharField(db_column='Phn_number', max_length=50, blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'users'