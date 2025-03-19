from persona import Persona
from studente import Studente
from universita import Universita

p = Studente("albion", "shabani", "17", "x")

u = Universita()
u.aggiungi_persona(p)
u.aggiungi_persona(p)
#print(u.mostra_tutte_le_persone())
print(u.trova_persone_per_tipo(Studente))