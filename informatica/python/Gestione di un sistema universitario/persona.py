class Persona:
    def __init__(self,nome,cognome,eta):
        self.nome = nome
        self.cognome = cognome
        self.eta = eta
    def __str__(self):
        return f"{self.nome} {self.cognome}, Età: {self.eta} anni"
    def descrizione(self):
        return f"Sono {self.nome} {self.cognome} e ho {self.eta} anni"
