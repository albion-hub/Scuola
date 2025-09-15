import math
from utils.utils import *
class Vlsm:
    def __init__(self, netId, mask, hosts): #hosts = nome delle sotto rette + il numero degli host (dizionario)
        self.netId = netId
        self.mask = mask                    #in CIDR 
        self.hosts = self.ordinamentiHost(hosts)

    def ordinamentiHost(self,hosts): # ordina le sottoreti dal piu grande al piu picolo
        return dict(sorted(hosts.items(), key=lambda item: item[1], reverse=True))
    
    def calcoloVlsm(self):
        sottoreti = []
        for name,host in self.hosts.items():
            potenza = math.ceil(math.log2(host+2)) #calcola della potenza del due piu vicina al numero di host per eccesso
            CIDR = "/" + str(32-potenza)
            subnetid = self.netId
            broacast = numToIp(ipToNum(self.netId) + 2**potenza -1)
            range = numToIp(ipToNum(subnetid)+2) + " - " + numToIp(ipToNum(broacast)-1)
            sottoreti.append([  name,
                                host,
                                subnetid,
                                CIDR,
                                CIDRtoMask(CIDR),(2**potenza-2-host),
                                numToIp(ipToNum(subnetid)+1), #gateway 
                                broacast,range])

            self.netId = numToIp(ipToNum(broacast)+1)
        return sottoreti
    
    def addHosts(self,host):
        self.hosts.update(host)
        self.hosts = self.ordinamentiHost(self.hosts)