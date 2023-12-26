from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.contrib import messages
from django.db import IntegrityError
from pages import models

def home(request):
    comments = models.Feedback.objects.order_by('-experience')[:3]
    return render(request, 'main.html', {'comments': comments})

@login_required(login_url='registration')
def registration(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Registration successful. Please log in.')
            return redirect('login')
        else:
            messages.error(request, 'Registration failed. Please correct the errors below.')

    return render(request, 'registration/login.html')

def login_user(request):
    if request.method == 'POST':
        username = request.POST.get('uname')
        password = request.POST.get('pass')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return render(request, 'pages/Confirmation.html')
        else:
            messages.error(request, 'Invalid credentials. Please try again.')

    return render(request, 'registration/login.html')

def logout_user(request):
    logout(request)
    return redirect('home')
