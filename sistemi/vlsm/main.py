from utils.vlsm import Vlsm
from utils.utils import is_valid_CIDR,is_valid_IP

# prima calcoare che il numero degli host totale per ogni sotto rete sia inferiore agli host che puo contenere la rete 

subnets = {}

try:
    netId = input("inserire l'ip della rete: ")
    if not is_valid_IP(netId):
        raise Exception("[-] netID non valida")

    cidr = input("inserisci la maschera in notazione CIDR: ")
    if not is_valid_CIDR(cidr):
        raise Exception("[-] CIDR non valido")
    
    sumHost= 0 

    while(True):
        try:
            name = input("inserire il nome della Subnet [q] per uscire: ")
            if name.lower() == "q": break
            host = int(input("inserire il numero degli host della subnet: "))
            subnets[name] = host
            sumHost += host
        except:
            print("[-] Eroor Solo numeri negli host")
            break
except Exception as e:
    print(e)

vlsm = Vlsm(netId,cidr,subnets)




