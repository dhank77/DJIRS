# myapp/middleware.py

from inertia import share
from django.conf import settings
from admin.models import AuthUser

def inertia_share(get_response):
    def middleware(request):
        share(request, 
            app_name=settings.APP_NAME,
            user=lambda: request.user if request.user.is_authenticated else None,
            path=request.path,
            flash = {
                'type' : request.session.pop('type', ""),
                'messages' : request.session.pop('messages', ""),
            } 
        )
        response = get_response(request)
        return response
    return middleware
