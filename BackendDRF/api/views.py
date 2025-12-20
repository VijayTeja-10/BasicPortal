from django.shortcuts import render
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import LoginSerializer,RegisterSerializer

# Create your views here.


class Login(generics.ListAPIView):
    queryset=User.objects.all()
    serializer_class=LoginSerializer


class Register(generics.CreateAPIView):
    queryset=User.objects.all()
    serializer_class=RegisterSerializer