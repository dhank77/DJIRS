from inertia import render
from django.shortcuts import redirect
from django.contrib.auth import update_session_auth_hash
import json
from .validation import ChangePasswordValidation

def index(request) :
    return render(request, 'admin/index')

def change_password(request) :
    if request.method == 'POST' :
        data = json.loads(request.body)
        form = ChangePasswordValidation(data=data)

        if form.is_valid() :
            if request.user.check_password(data.get('password')) :
                request.user.set_password(data.get('new_password'))
                request.user.save()
                update_session_auth_hash(request, request.user)

                request.session['type'] = 'success'
                request.session['messages'] = 'Password changed successfully!'
            else :
                request.session['type'] = 'error'
                request.session['messages'] = 'Incorrect password!'
                
            return redirect('/admin')
        else :
            return render(request, 'admin/change-password', props={
                'errors' : form.errors
            })
        
    else :
        return render(request, 'admin/change-password')
