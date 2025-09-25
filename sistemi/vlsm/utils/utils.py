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

def CIDRtoMask(CIDR): #finita
	CIDR = CIDR[1:]
	num = sum(1 << (32 - i) for i in range(1,int(CIDR)+1))
	return(numToIp(num))

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

def is_valid_CIDR(CIDR):
	if CIDR[0] != "/": return False
	try: 
		if not (0 < int(CIDR[1:]) < 33):  return False
	except:return False
	return True