# yourappname/urls.py

from django.urls import path
from . import views
from .views import LawyerSearchView,LawyerSearchViewAdr

urlpatterns = [
    #path('yourapp/', views.your_app_view, name='your_app_view'),
    #Add more URL patterns as needed 
    
    #path('search/', LawyerSearchView.as_view(), name='lawyer-search'),
    path('search/',views.LawyerSearchView.as_view()),
    path('searchAdr/',views.LawyerSearchViewAdr.as_view()),
    path('searchDomains/',views.LawyerSearchViewDomain.as_view()),

]
