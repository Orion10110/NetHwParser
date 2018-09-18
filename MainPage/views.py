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
    print(request)
    switch = Deal.Parser(Engine.getHtml("https://deal.by/Kommutatory?a16295=183763&a16295=183764&a16295=183762&a16295=183765&price_local__gte=1&sort=price"))
    routers = Deal.Parser(Engine.getHtml("https://deal.by/Marshrutizatory?sort=price"))
    cables = Deal.Parser(Engine.getHtml("https://deal.by/Kabel-telefonnyj?sort=price&a5527=120606&price_local__gte=1"))
    listObjects ={'routers':routers ,'cables':cables ,'switch':switch }
    return JsonResponse(listObjects)