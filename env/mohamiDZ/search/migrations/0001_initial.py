# Generated by Django 5.0 on 2024-01-31 20:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuthGroup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True)),
            ],
            options={
                'db_table': 'auth_group',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthGroupPermissions',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'auth_group_permissions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthPermission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('codename', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'auth_permission',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('is_superuser', models.IntegerField()),
                ('username', models.CharField(max_length=150, unique=True)),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=254)),
                ('is_staff', models.IntegerField()),
                ('is_active', models.IntegerField()),
                ('date_joined', models.DateTimeField()),
            ],
            options={
                'db_table': 'auth_user',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUserGroups',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'auth_user_groups',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUserUserPermissions',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'auth_user_user_permissions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoAdminLog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action_time', models.DateTimeField()),
                ('object_id', models.TextField(blank=True, null=True)),
                ('object_repr', models.CharField(max_length=200)),
                ('action_flag', models.PositiveSmallIntegerField()),
                ('change_message', models.TextField()),
            ],
            options={
                'db_table': 'django_admin_log',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoContentType',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app_label', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'django_content_type',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoMigrations',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('app', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('applied', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_migrations',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoSession',
            fields=[
                ('session_key', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('session_data', models.TextField()),
                ('expire_date', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_session',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Rendezvous',
            fields=[
                ('rendezvous_id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(blank=True, max_length=30, null=True)),
                ('rv_content', models.CharField(blank=True, db_column='Rv_content', max_length=200, null=True)),
            ],
            options={
                'db_table': 'rendezvous',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='SearchLawyers',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('lawyername', models.CharField(max_length=50)),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('adr', models.CharField(blank=True, max_length=100, null=True)),
                ('profile_pic', models.CharField(blank=True, max_length=100, null=True)),
                ('phn_number', models.CharField(blank=True, db_column='Phn_number', max_length=50, null=True)),
                ('domains', models.TextField(blank=True, null=True)),
                ('price', models.CharField(blank=True, max_length=50, null=True)),
                ('license_num', models.CharField(blank=True, max_length=10, null=True)),
                ('schedule', models.CharField(blank=True, max_length=200, null=True)),
                ('edu_bg', models.CharField(blank=True, max_length=100, null=True)),
                ('year_exp', models.IntegerField(blank=True, db_column='Year_exp', null=True)),
                ('bio', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'search_lawyers',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Lawyers',
            fields=[
                ('lawyer_id', models.AutoField(default=0, primary_key=True, serialize=False, unique=True)),
                ('lawyername', models.CharField(max_length=50)),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('adr', models.CharField(blank=True, max_length=100, null=True)),
                ('profile_pic', models.CharField(blank=True, max_length=100, null=True)),
                ('phn_number', models.CharField(blank=True, db_column='Phn_number', max_length=50, null=True)),
                ('domains', models.TextField(blank=True, null=True)),
                ('price', models.CharField(blank=True, max_length=50, null=True)),
                ('license_num', models.CharField(blank=True, max_length=10, null=True)),
                ('schedule', models.CharField(blank=True, max_length=200, null=True)),
                ('edu_bg', models.CharField(blank=True, max_length=100, null=True)),
                ('year_exp', models.IntegerField(blank=True, db_column='Year_exp', null=True)),
                ('bio', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'lawyers',
            },
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=50)),
                ('email', models.CharField(blank=True, max_length=100, null=True)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('adr', models.CharField(blank=True, max_length=100, null=True)),
                ('profile_pic', models.CharField(blank=True, max_length=100, null=True)),
                ('phn_number', models.CharField(blank=True, db_column='Phn_number', max_length=50, null=True)),
            ],
            options={
                'db_table': 'users',
            },
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('comment_id', models.AutoField(primary_key=True, serialize=False)),
                ('content', models.CharField(blank=True, max_length=200, null=True)),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='search.lawyers')),
            ],
            options={
                'db_table': 'comments',
            },
        ),
        migrations.CreateModel(
            name='Rating',
            fields=[
                ('rating_id', models.AutoField(primary_key=True, serialize=False)),
                ('val', models.IntegerField(blank=True, null=True)),
                ('lawyer', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='search.lawyers')),
            ],
            options={
                'db_table': 'rating',
            },
        ),
    ]
