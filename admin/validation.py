from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.conf import settings

class ChangePasswordValidation(serializers.Serializer):
    password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
    confirm_password = serializers.CharField(required=True)
    
    def validate(self, data):
        if data.get('new_password') != data.get('confirm_password'):
            raise serializers.ValidationError({
                "confirm_password" : "Password and confirm password do not match."
            })
        if settings.DEBUG is False:
            try :
                validate_password(data.get('password'))
            except :
                raise serializers.ValidationError({
                        "confirm_password" : "Password not strong."
                    })
        return data