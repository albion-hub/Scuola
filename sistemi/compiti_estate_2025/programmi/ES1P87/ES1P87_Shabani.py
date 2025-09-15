linkRouter = [["R1","R2",2 ],["R2","R1",4],["R2", "R3", 2],["R3","R2",5],["R3", "R4",3], ["R4", "R3",1],["R4", "R1",1]]

percorsi_diretti = {}
for src, dest, port in linkRouter:
    if src not in percorsi_diretti:
        percorsi_diretti[src] = []
    percorsi_diretti[src].append(dest)

def find_route(sorgente,destinazione,path):
    path = path + [sorgente]  # crea una nuova copia della lista
    if sorgente == destinazione:
        return [path]  # lista con un percorso trovato

    if sorgente not in percorsi_diretti:
        return []

    all_paths = []
    for next_router in percorsi_diretti[sorgente]:
        if next_router not in path: 
            new_paths = find_route(next_router, destinazione, path)
            for p in new_paths:
                all_paths.append(p)
    return all_paths



RS = input("Digitare router sorgente (1..4): ")
RD = input("Digitare router destinazione (1..4): ")
    
if RS.isnumeric() and RD.isnumeric():
    RS = "R"+RS
    RD = "R"+RD

    print(find_route(RS,RD,[]))

else:
    print("error")





