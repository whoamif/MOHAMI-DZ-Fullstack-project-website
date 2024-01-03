"""
Django settings for mohamiDZ project.

Generated by 'django-admin startproject' using Django 5.0.

For more information on this file, see
https://docs.djangoproject.com/en/5.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/5.0/ref/settings/
"""

from pathlib import Path
import os 
from datetime import timedelta
from .jazzmin import JAZZMIN_SETTINGS

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/5.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-x$h14pyc0(7r8gxgqgii%q-nq!gce-)nqz+(c1^ye_dgu)-yko'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition


INSTALLED_APPS = [
    'oauth2_provider',  # add it to remove elements in the admin panel
    #'django_jazzmin',
    'jazzmin',  # to customize the admin panel
    'accounts',
    'djoser',
    'rest_framework',
    'corsheaders',  # need for linking with React
    'social_django',
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]


MIDDLEWARE = [
    'social_django.middleware.SocialAuthExceptionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'mohamiDZ.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect'
            ],
        },
    },
]

WSGI_APPLICATION = 'mohamiDZ.wsgi.application'


# Database
# https://docs.djangoproject.com/en/5.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
#email
#email: 
#app password: hccs walh zwyo zzoa
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'dz.mohami.lawyer@gmail.com'
EMAIL_HOST_PASSWORD = 'hccs walh zwyo zzoa'

# Password validation
# https://docs.djangoproject.com/en/5.0/ref/settings/#auth-password-validators
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/5.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True



CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Add your React app's URL
]
# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/5.0/howto/static-files/

STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/5.0/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

STATICFILES_DIR = [
    os.path.join(BASE_DIR, 'build/static')
]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'social_core.backends.google.GoogleOAuth2',
)

SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'AUTH_TOKEN_CLASSES': (
        'rest_framework_simplejwt.tokens.AccessToken',
    )
}

DJOSER = {
    'LOGIN_FIELD' : 'email',
    'USER_CREATE_PASSWORD_RETYPE' : False,
    'USERNAME_CHANGED_EMAIL_CONFIRMATION' : False,
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION' : False,
    'SEND_CONFIRMATION_EMAIL' : False,
    'SET_USERNAME_RETYPE' : False,
    'SET_PASSWORD_RETYPE': True,
    'PASSWORD_RESET_CONFIRM_URL': 'password/reset/confirm/{uid}/{token}',
    #'USERNAME_RESET_CONFIRM_URL': 'email/reset/confirm/{uid}/{token}',
    #'ACTIVATION_URL' : 'activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL' : False,
    'SERIALIZERS' : {
        'user_create' : 'accounts.serializers.UserCreateSerializer',
        'user' : 'accounts.serializers.UserCreateSerializer',
        'current_user' : 'accounts.serializers.UserCreateSerializer',
        'user_delete' : 'djoser.serializers.UserDeleteSerializer',
    }
}

SOACIAL_AUTH_GOOGLE_OAUTH2_KEY = "669693983148-3i3tmnnqmrhok6th8po2e05qpg5duhnp.apps.googleusercontent.com"
SOACIAL_AUTH_GOOGLE_OAUTH2_SECRET = "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"
SOACIAL_AUTH_GOOGLE_OAUTH2_SCOOPE = ['https://www.googleapi.com/auth/userinfo.email', 'https://www.googleapi.com/auth/userinfo.profile', 'openid']
SOACIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA = ['first_name', 'last_name']

AUTH_USER_MODEL = "accounts.UserAccount"

JAZZMIN_SETTINGS = JAZZMIN_SETTINGS