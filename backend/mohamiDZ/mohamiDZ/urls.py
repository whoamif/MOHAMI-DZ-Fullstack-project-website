from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView  # to connect to the React side
from accounts.views import getCurrentAvocat
urlpatterns = [
    path('social/', include('social_django.urls', namespace='social')),
    path('admin/', admin.site.urls), # Use a different path for Jazzmin
    path('auth/', include('djoser.social.urls')),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    
    path('avocat/currentAvocat', getCurrentAvocat),
]

urlpatterns += [
    re_path(r'^.*', TemplateView.as_view(template_name='index.html'))  # to connect to the React side
]
