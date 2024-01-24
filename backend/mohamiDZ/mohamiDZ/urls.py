from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView  # to connect to the React side

urlpatterns = [
    path('auth/', include('social_django.urls', namespace='social')),
    path('admin/', admin.site.urls), # Use a different path for Jazzmin
    path('authh/', include('djoser.social.urls')),
    path('authh/', include('djoser.urls')),
    path('authh/', include('djoser.urls.jwt')),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))  # to connect to the React side
]
