from abc import ABC, abstractmethod
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