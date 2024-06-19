from inertia import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
import json
from .validation import LoginValidation

def index(request) :
    return render(request, 'index')

def login_view(request) :
    if request.user.is_authenticated:
        return redirect('/admin')

    if request.method == 'POST' :
        data = json.loads(request.body)
        seriz = LoginValidation(data=data)

        if seriz.is_valid():
            username = data.get('username')
            password = data.get('password')
            
            user = authenticate(request, username=username, password=password)
            print(user)
            if user is not None:
                login(request, user)
                return redirect('/admin')
            else : 
                return render(request, 'auth/login', props={
                    'errors' : {
                        'email' : 'User and password is wrong!'
                    }
                })
        else :
            return render(request, 'auth/login', props={
                'errors' : seriz.errors
            })
    else :
        return render(request, 'auth/login')

def logout_view(request) : 
    logout(request)
    return redirect('/')