from persona import Persona
from professore import Professore
class Studente(Persona):
    def __init__(self, nome: str, cognome: str, eta: int, matricola: str,professore_referente: Professore):
        super().__init__(nome, cognome, eta)
        self.matricola = matricola
        self.professore_referente = professore_referente

    def descrizione(self):
        return f"Sono uno studente {self.nome} {self.cognome}, matricola: {self.matricola}"
    
    def stampa_info(self):
        return f"{super().descrizione()}, matricola: {self.matricola}, professore referente: {self.professore_referente}"
    
    def cambia_referente(self,nuovo_professore):
        self.professore_referente = nuovo_professore
    