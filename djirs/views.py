from inertia import render

def index(request) :
    return render(request, 'index')

def login(request) :
    return render(request, 'auth/login')