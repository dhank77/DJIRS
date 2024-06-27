from inertia import render
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import redirect
from .validation import LoginValidation, RegisterForm
import json

def index(request) :
    return render(request, 'index')

def login_view(request) :
    if request.user.is_authenticated:
        return redirect('/admin')

    if request.method == 'POST' :
        data = json.loads(request.body)
        form = LoginValidation(data=data)

        if form.is_valid():
            username = data.get('username')
            password = data.get('password')
            
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('/admin')
            else : 
                return render(request, 'auth/login', props={
                    'errors' : {
                        'username' : 'User and password is wrong!'
                    }
                })
        else :
            return render(request, 'auth/login', props={
                'errors' : form.errors
            })
    else :
        return render(request, 'auth/login')

def register_view(request) :
    if request.method == 'POST' :
        data = json.loads(request.body)
        form = RegisterForm(data=data)

        if form.is_valid() :
            form.save()
            password = data.get('password')
            user = authenticate(request, username=form.data['username'], password=password)
            if user is not None:
                login(request, user)
                return redirect('/admin')
            else :
                return render(request, 'auth/register', props={
                    'errors' : {
                        'username': '500 server error'
                    }
                })
        else :
            return render(request, 'auth/register', props={
                'errors' : form.errors
            })
    else :
        return render(request, 'auth/register')

def logout_view(request) : 
    logout(request)
    return redirect('/')