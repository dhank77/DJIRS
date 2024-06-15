from inertia import render
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.shortcuts import redirect
import json



def index(request) :
    return render(request, 'index')

def login_view(request) :
    if request.method == 'POST' :
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

            if not email or not password:
                return JsonResponse({'error': 'Email and password are required'}, status=400)

            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                return redirect('/admin')
            else:
                return JsonResponse({'error': 'Invalid email or password'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    else : 
        if request.user is not None :
            return redirect('/admin')
        else :
            return render(request, 'auth/login')
