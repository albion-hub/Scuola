from persona import Persona

class Studente(Persona):
    def __init__(self, nome, cognome, eta, matricola):
        super().__init__(nome, cognome, eta)
        self.matricola = matricola

    def descrizione(self):
        return f"Sono uno studente {self.nome} {self.cognome}, matricola: {self.matricola}"
    
    def stampa_info(self):
        return f"{super().descrizione()}, matricola: {self.matricola}"
    