def is_valid_IP(ip):
    otteti = ip.split('.')
    if len(otteti) != 4: return False
    
    for otteto in otteti:
        for digit in otteto:
            if not(digit.isdigit()): return False
            
    for otteto in otteti:
        if len(otteto) > 1 and otteto[0] == '0':
            return False
        if otteto == '':
            return False
        if int(otteto) > 255:
            return False
    return True

def ipToNum(ip): #finita
	otteti = ip.split(".")[::-1]
	num = 0
	for i,otteto in enumerate(otteti):
		num += int(otteto) << (i*8)
	return num

def numToIp(num): #finita
	ip = ""
	for i in range(3,-1,-1):
		ip += str((num >> (i*8)) & 255) + "."
	return ip[:-1]

def is_valid_mask(mask):
    otteti = mask.split('.')
    if len(otteti) != 4: return False
    
    for otteto in otteti:
        for digit in otteto:
            if not(digit.isdigit()): return False
    
    numMask = ipToNum(mask)
    for i in range(31,0,-1):
        if (not(numMask >> i & 1)) and (numMask>>(i-1)  & 1):  #0 and 1 dentro
            return False
        
    return True

def getNet(ip, mask):
    return numToIp(ipToNum(ip) & ipToNum(mask))
