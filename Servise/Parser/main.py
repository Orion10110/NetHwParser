from .Engine import Engine
from Deal import Deal

import threading

def main():
   
    switchThread = threading.Thread(target = Deal.Parser,args=(Engine.getHtml("https://deal.by/Kommutatory?a16295=183763&a16295=183764&a16295=183762&a16295=183765&price_local__gte=1&sort=price"),))
    cableThread = threading.Thread(target = Deal.Parser,args=(Engine.getHtml("https://deal.by/Kabel-telefonnyj?a5527=120606&sort=price"),))

    switchThread.start()    
   # cableThread.start()

   # cableThread.join()
    switchThread.join()

   # Deal.Parser(Engine.getHtml("https://deal.by/Marshrutizatory?sort=price&a16285__gte=1&price_local__gte=1"))

if __name__== '__main__':
    main()    