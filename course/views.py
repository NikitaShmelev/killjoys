from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView

def index(request):
    return JsonResponse({"response": "all good"})
