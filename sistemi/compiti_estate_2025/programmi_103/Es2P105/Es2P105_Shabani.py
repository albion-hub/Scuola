def found_route(port,mitt,dest):
    global tdi
    for row in tdi:
        if row[0] == dest:
            return f"Su P{row[1]}"
    
    tdi.append([mitt,port])
    
    return "Flooding"
    
tdi = []
loop = True


while loop:
    utent_input = input("Pacchetti da instradare (P,Mitt,Dest,h,c): ").strip().upper()
    if utent_input == "0":
        loop = False
    else:
        try:
            port,mitt,dest,h,c = utent_input.split(" ")
            print(found_route(port,mitt,dest))
        except:
            print("erorr input\ntry again: ")
