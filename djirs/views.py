from inertia import render
from django.http import HttpResponse

def index(request) :
    return render(request, 'index')

def login(request) :
    if request.method == 'POST' :
        return HttpResponse(request)
    else : 
        return render(request, 'auth/login')
