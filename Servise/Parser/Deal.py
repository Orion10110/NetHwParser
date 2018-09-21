from bs4 import BeautifulSoup

class Deal(object):      

    def Parser(html):
        try:
            soup = BeautifulSoup(html,"html.parser")
            table = soup.find('div',class_="x-catalog-gallery__list")
        except:
            return "Not found"

        listObjects = []        
        for elements in table.find_all('div')[::]:
            try:
                name = elements.find('a',class_="x-gallery-tile__name").text
                price = str(elements.find('div',class_="x-gallery-tile__price").text).strip()
                link = elements.find('div',class_="x-gallery-tile__extra").find('a').get('href')
                urlImage = elements.find('img',class_="x-image-holder__img").get('src')

                price = price.replace(" руб.","")
                float(price)               
                if link == None:
                    link = "Private seller or out of stock"  
                
                listObjects.append(
                {'name':name,
                 'price':price,
                 'link':link,
                 'image':urlImage})
                
            except:
                pass

        return listObjects