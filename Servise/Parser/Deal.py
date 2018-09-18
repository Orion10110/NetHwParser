from .Engine import Engine
from bs4 import BeautifulSoup
import csv

class Deal(object):
    def Parser(html):

        soup = BeautifulSoup(html,"html.parser")
        table = soup.find('div',class_="x-catalog-gallery__list")

        listObjects = []
        
        for elements in table.find_all('div')[::]:
            try:
                name = elements.find('a',class_="x-gallery-tile__name").text
                price = str(elements.find('div',class_="x-gallery-tile__price").text).strip()
                price = price.replace(" руб.","")
                float(price)
                link = elements.find('div',class_="x-gallery-tile__extra").find('a').get('href')
                
                if link == None:
                    link = "Private seller or out of stock"

                listObjects.append(
                {'name':name,
                 'price':price,
                 'link':link,})                              
                
            except:
                pass
        return listObjects