def read_file():

    with open("./TDI.txt") as routes:   
        row = {}
        for route in routes:
            tmp = (route.strip().split(" "))
            row[tmp[0]] = [tmp[1], tmp[2], tmp[3]]
    return row

def print_TDI(tdi):
    for add,ecc in tdi.items():
        print(f"{add} {ecc[0]:>3} {ecc[1]} {ecc[2]}")

tdi = read_file()
print("FDR su route con 3 interdacce. TDI:")
print("Add           P h c")
print_TDI(tdi)

while True:
    utent_input = input("Pacchetti da instradare (P,Mitt,Dest): ").strip().upper()
    if utent_input == "0":
        break
    else:
        try:
            port,mitt,dest = utent_input.split(" ")
            if dest in tdi:
                print(f"su porta {tdi[dest][0]}")
            else:
                print("floding")
        except:
            print("erorr input\ntry again: ")