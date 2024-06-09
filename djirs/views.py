from inertia import render

def index(request) :
    return render(request, 'index')

def contact(request) :
    return render(request, 'contact')