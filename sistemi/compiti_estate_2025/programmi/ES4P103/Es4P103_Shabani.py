look_up_table = {
    "SW1": {(1,3):(2,6), (1,4):(2,7)},
    "SW2": {(4,6):(2,5), (4,7):(3,1)},
    "SW3": {(5,5):(3,6), (2,5):(3,5)},
    "SW4": {(1,6):(2,8), (1,5):(2,9)}
}
test = {(1,6):(2,8), (1,5):(2,9)}

#print(look_up_table["SW1"][(1,3)][1])

host_switch = {
    "A": ["SW1",1],
    "H": ["SW3",2],
}

switch_switch = {
    ("SW1", 2):("SW2",4),
    ("SW2", 2):("SW3",5),
    ("SW3", 3):("SW4",1)

}


while True:
    utent_input = input("inserire Mittente e Label: ").strip().upper()
    if utent_input == "0":
        break
    else:
        try:
            mitt,label = utent_input.split(" ")
            label = int(label)
            current_switch,port = host_switch[mitt]
            path = [label]
            loop = True
            while loop:
                found_next = False
                for switch, switch_table in look_up_table.items():
                    if (port,label) in switch_table:
                        path.append(switch_table[(port,label)][1])
                        port,label = switch_table[(port,label)]
                        if (current_switch,port) in switch_switch:
                            current_switch,port = switch_switch[(current_switch,port)]
                        found_next = True
                        break
                if not found_next: 
                    loop = False
                        
            print("circuito virtuale: ",path)
        except Exception as e:
            print(e)
            #print("erorr input\ntry again: ")