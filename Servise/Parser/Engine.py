from abc import ABC, abstractmethod
from .Deal import Deal
import urllib.request

class Engine(ABC):

    @abstractmethod
    def parse():
        pass
    
    def getHtml(url):
        try:
            response = urllib.request.urlopen(url)
        except:
            print("No connection to ",url)
            return False
        else:
            return response.read()

    def call(object):
        Html = object.getHtml(object.url)
        return Html

    def parseRequest(request):
        info = {
            'cost':request.GET.get('cost'),
            'speed':request.GET.get('speed'),
            'port':request.GET.get('port'),
        }
        return info

    def getRouter(info):
        route = "https://deal.by/Marshrutizatory;H?sort=price&price_local__lte={}&a16285__lte={}".format(info['cost'],info['port'])
        return Deal.Parser(Engine.getHtml(route))

    def getSwitch(info):
 
        speed={
            '100': 183762,
            '1000': 183763,
            '10000': 183764,
        }.get(info['speed'])
        route = "https://deal.by/Kommutatory?sort=price&price_local__lte={}&a16296__lte={}&a16295={}".format(info['cost'],info['port'],speed)
        return Deal.Parser(Engine.getHtml(route))

    def getCables(info):
        type ={
            '100': 'a13856=139346',
            '1000': 'a13856=139348&a13856=139346',
            '10000': 'a13856=139348&a13856=139346',
        }.get(info['speed'])
        route = "https://deal.by/Kabel-telefonnyj?sort=price&price_local__lte={}&{}".format(info['cost'],type);
        return Deal.Parser(Engine.getHtml(route))

    def getRouterInfo(info,listObjects):
        return listObjects.update({'routers':Engine.getRouter(info)})

    def getCablesInfo(info,listObjects):
        return listObjects.update({'cables':Engine.getCables(info)})

    def getSwitchInfo(info,listObjects):
        return listObjects.update({'switch':Engine.getSwitch(info)})
