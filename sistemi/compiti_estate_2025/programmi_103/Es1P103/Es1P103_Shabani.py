def read_file():

    with open("./route_statiche.txt") as routes:   
        row = []
        for route in routes:
            row.append(route.strip().split(" "))
    return row

def print_TDI(tdi):
    for row in tdi:
        print(f"{row[0]} {row[1]:>3} {row[2]} {row[3]}")

def found_route(tdi,mitt,dest):
    for row in tdi:
        if row[0] == dest:
            return f"Su porta {row[1]}"
    return "non instradabile"



tdi = read_file()
print("FDR su route con 3 interdacce. TDI:")
print("ADD P h c")
print_TDI(tdi)
loop = True

while loop:
    utent_input = input("Pacchetti da instradare (Mitt,Dest): ").strip()
    if utent_input == "0":
        loop = False
    else:
        try:
            mitt,dest = utent_input.split(" ")
            print(found_route(tdi,mitt,dest))
        except:
            print("erorr input\ntry again: ")