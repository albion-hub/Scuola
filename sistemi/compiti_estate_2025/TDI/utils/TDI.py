from utils.utils_ip import is_valid_IP,is_valid_mask,getNet,ipToNum

class TDI:
    def __init__(self):
       self.table = [["NETID", "Mask", "Gateway", "Interfaccia", "Metrica"]]

    def add_row(self,NETID,Mask,Gateway,Interfaccia,Metrica):
        try:
            if(is_valid_IP(NETID) and is_valid_mask(Mask) and is_valid_IP(Gateway) and is_valid_IP(Interfaccia) and int(Metrica)):
                self.table.append([NETID,Mask,Gateway,Interfaccia,Metrica])
            else:
                return "error"
        except: 
            return "error"
        
        return "ok"
    
    def set_NETID(self,row,new_netid):
        self.table[row][0] = new_netid

    def set_mask(self,row,new_mask):
        self.table[row][1]= new_mask

    def set_gateway(self,row,new_gateway):
        self.table[row][2]= new_gateway

    def set_interfaccia(self,row,new_interfaccia):
        self.table[row][3]= new_interfaccia
    
    def set_metrica(self,row,new_metrica):
        self.table[row][4]= new_metrica
    
    def edit_row(self, index, netid, mask, gateway, interf, metric):
        try:
            if (is_valid_IP(netid) and is_valid_mask(mask) and is_valid_IP(gateway)
                    and is_valid_IP(interf) and int(metric)):
                self.set_NETID(index, netid)
                self.set_mask(index, mask)
                self.set_gateway(index, gateway)
                self.set_interfaccia(index, interf)
                self.set_metrica(index, metric)
            else:
                return "error"
        except:
            return "error"
        
        return "ok"



    def remove_row(self,row):
        try:
            self.table.remove(self.table[row])
        except:
            return "error"
        return "ok"

       
    def print_TDI(self):
        str = ""
        for row in self.table:
            str += "{:<15} {:<15} {:<15} {:<15} {:<10}".format(*row) + "\n"

        return str[:-1]


    def get_table(self):
        return self.table
    
    def get_route_by_ip(self,ip):
        if not (is_valid_IP(ip)):
            return "ip not valid"
        routes={}
        for index,row in enumerate(self.table):
            if index != 0 and getNet(ip,row[1]) == row[0]:
                routes[index] = ipToNum(row[1])

        return list(dict(sorted(routes.items(), key=lambda mask: mask[1])).keys())  # ritorna solo gli indici delle route ordinate per la maschera piu picola
