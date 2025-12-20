from django.contrib.auth.models import User
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['username','email','password']

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField()
    class Meta:
        model=User
        fields=['username','password']