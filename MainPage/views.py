import sys
sys.path.append("../")
from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from Servise.Parser.Deal import Deal
from Servise.Parser.Engine import Engine

# Create your views here.

def page(request):
    return render(request,'MainPage/index.html')



def router(request):
    info = Engine.parseRequest(request)
    
    listObjects = {
        'routers':Engine.getRouter(info),
        'cables':Engine.getCables(info),
        'switch':Engine.getSwitch(info) 
    }
    return JsonResponse(listObjects)