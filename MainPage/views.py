import sys
import threading
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

    listObjects = {'routers':None,
                   'cables':None,
                   'switch':None}        

    info = Engine.parseRequest(request)

    routerThread = threading.Thread(target = Engine.getRouterInfo,args=(info,listObjects,))
    cableThread = threading.Thread(target = Engine.getCablesInfo,args=(info,listObjects,))
    switchThread = threading.Thread(target = Engine.getSwitchInfo,args=(info,listObjects,))
    

    routerThread.start()
    cableThread.start()
    switchThread.start()

    routerThread.join()
    cableThread.join()
    switchThread.join()

    return JsonResponse(listObjects)