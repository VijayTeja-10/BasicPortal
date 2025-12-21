from django.contrib.auth.models import User
from rest_framework import serializers


class RegisterSerializer(serializers.ModelSerializer):
    #write_only to say hide password at get req's
    #style for representing password field in html of restframework endpoint
    password=serializers.CharField(write_only=True,style={'input_type':'password'})
    class Meta:
        model=User
        fields=['username','email','password']

    def create(self, validated_data):
        #create => donot hashes the password
        #create_user => hashes password automatically
        #user=User.objects.create_user(**validated_data) => **validated_data automatically takes fields and all fields should be in model&Metaclass
        user=User.objects.create_user(validated_data['username'],validated_data['email'],validated_data['password'])
        return user

class LoginSerializer(serializers.ModelSerializer):
    # password=serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=['username','password']