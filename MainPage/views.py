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
    return JsonResponse({"list":Deal.Parser(Engine.getHtml("https://deal.by/Marshrutizatory?sort=price&a16285__gte=1&price_local__gte=1"))})