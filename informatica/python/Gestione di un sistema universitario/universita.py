class Universita:
    def __init__(self):
        self.persone = []

    def aggiungi_persona(self,persona):
        self.persone.append(persona)

    def mostra_tutte_le_persone(self):
        return "\n".join([persona.descrizione() for persona in self.persone])
    
    def trova_persone_per_tipo(self,tipo):
        return "\n".join([i.descrizione() for i in self.persone if isinstance(i,tipo)])