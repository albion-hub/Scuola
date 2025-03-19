from persona import Persona
from studente import Studente
from professore import Professore
from personaleAmministrativo import PersonaleAmministrativo
from universita import Universita


def stampa_descrizione(persona):
    print(persona.descrizione())

p = Persona("albion", "shabani", 17)
s = Studente("albion", "shabani", 17, "x")
prof = Professore("albion", "shabani", 21, "informatica", 2000)
pA = PersonaleAmministrativo("albion","shabani", 21, "non lo so", 2100)

p = [p,s,prof,pA]

list(map(stampa_descrizione, p))


u = Universita()
u.aggiungi_persona(p)
u.aggiungi_persona(p)
#print(u.mostra_tutte_le_persone())
#print(u.trova_persone_per_tipo(Studente))