linkRouter = [["R1","R2",2 ],["R2","R1",4],["R2", "R3", 2],["R3","R2",5]]
hostRouter = {"a":"R1", "b":"R2", "c":"R3"}

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



addS = input("Digitare indirizzo sorgente (a,b,c): ")
addD = input("Digitare indirizzo destinazione (a,b,c): ")

for route in find_route(hostRouter[addS],hostRouter[addD],[]):
    print(addS," ".join(route),addD)






