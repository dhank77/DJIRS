from inertia import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
import json

def index(request) :
    return render(request, 'index')

def login_view(request) :

    if request.user.is_authenticated:
        return redirect('/admin')

    messages = ''
    if request.method == 'POST' :
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                messages = 'User & password is required'

            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                return redirect('/admin')
            else : 
                messages = 'User not found'

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        
    return render(request, 'auth/login', props={
        'messages' : messages
    })

def logout_view(request) : 
    logout(request)
    return redirect('/')