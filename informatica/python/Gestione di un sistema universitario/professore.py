from persona import Persona

class Professore(Persona):
    def __init__(self, nome, cognome, eta, materia,stipendio):
        super().__init__(nome, cognome, eta)
        self.materia = materia
        self.stipendio = stipendio
    def descrizione(self):
        return f"Sono il professore {self.nome} {self.cognome} e insegno {self.materia}"
    
    def aumenta_stipendio(self,percentuale):
        self.stipendio += self.stipendio*(percentuale/100)

    