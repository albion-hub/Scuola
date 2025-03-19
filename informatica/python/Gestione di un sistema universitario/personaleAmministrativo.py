from persona import Persona

class PersonaleAmministrativo(Persona):
    def __init__(self, nome, cognome, eta,ruolo, stipendio):
        super().__init__(nome, cognome, eta)
        self.ruolo = ruolo
        self.stipendio = stipendio

    def descrizione(self):
        return f"Sono {self.nome} {self.cognome} e lavoro come {self.ruolo}"
    
    def aumenta_stipendio(self,percentuale):
        self.stipendio += self.stipendio*(percentuale/100)