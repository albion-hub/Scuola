def read_file():

    with open("./route_statiche.txt") as routes:   
        row = []
        for route in routes:
            row.append(route.strip().split(" "))
    return row

def print_TDI(tdi):
    for row in tdi:
        print(f"{row[0]} {row[1]:>3} {row[2]} {row[3]}")

def found_route(port,tdi,mitt,dest):
    flooding = []
    for row in tdi:
        if row[0] == dest:
            return f"Su porta {row[1]}"
        elif row[1] != port:
            flooding.append(row[1])
    return "Su porte " + ",".join(flooding)

tdi = read_file()
print("FDR su route con 3 interdacce. TDI:")
print("ADD P h c")
print_TDI(tdi)
loop = True

while loop:
    utent_input = input("Pacchetti da instradare (P,Mitt,Dest): ").strip().upper()
    if utent_input == "0":
        loop = False
    else:
        try:
            port,mitt,dest = utent_input.split(" ")
            print(found_route(port,tdi,mitt,dest))
        except:
            print("erorr input\ntry again: ")