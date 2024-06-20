from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import validate_password
from admin.models import AuthUser
from django.conf import settings
from django.utils import timezone


class LoginValidation(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

class RegisterForm(serializers.Serializer):
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)
    username = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True)
    confirm_password = serializers.CharField(write_only=True, required=True)

    def validate(self, data):
        if data.get('password') != data.get('confirm_password'):
            raise serializers.ValidationError({
                "password" : "Password and confirm password do not match."
            })
        
        if settings.DEBUG is False:
            try :
                validate_password(data.get('password'))
            except :
                raise serializers.ValidationError({
                        "confirm_password" : "Password not strong."
                    })
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        validated_data['password'] = make_password(validated_data['password'])
        validated_data['is_superuser'] = True
        validated_data['is_staff'] = False
        validated_data['is_active'] = True
        validated_data['date_joined'] = timezone.now()
        return AuthUser.objects.create(**validated_data)
    