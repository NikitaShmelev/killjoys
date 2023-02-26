from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib import messages



def index(request):
    return render(request, 'index.html')