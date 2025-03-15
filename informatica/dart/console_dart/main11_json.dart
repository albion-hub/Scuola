import 'dart:convert';
/*
  Fondamentalmente in DART la gestione di JSon usa come tipo di passaggio 
  Map<String, dynamic> (Dictionary in python)
  La deSerializzazione è il passaggio Json->Map->Oggetto
  La serializzazione è il passaggio Oggetto->Map->Json
 */
class Utente {
  String nome;
  int eta;

  Utente({required this.nome, required this.eta});
    /*
    In Dart, il costruttore factory è un tipo speciale di costruttore che non 
    crea necessariamente una nuova istanza della classe ogni volta che viene chiamato. 
    A differenza di un costruttore normale, il costruttore factory può:
      ✅ Restituire un'istanza esistente.
      🔁 Restituire istanze diverse a seconda delle condizioni.
      🔎 Eseguire logica aggiuntiva prima di creare un oggetto.
    
    Il costruttore che segue riceve un Map e converte (deserializza) in oggetto 
    Utente passandolo al costruttore 'normale'.
  */
  factory Utente.fromJson(Map<String, dynamic> json) {
    return Utente(
      nome: json['nome'],
      eta: json['eta'],
    );
  }

  // Metodo per la serializzazione
  Map<String, dynamic> toJson() {
    return {
      'nome': nome,
      'eta': eta,
    };
  }

  String toString() {
    return "[nome: $nome; età: $eta]";
  }
}

void main() {
  String jsonString = '{"nome": "Alice", "eta": 25}';
  Map<String, dynamic> jsonMap = jsonDecode(jsonString);

  // Deserializzazione
  Utente utente = Utente.fromJson(jsonMap);
  print(utente); // Output: [nome: Alice; età: 25]

  // Serializzazione
  String nuovoJson = jsonEncode(utente.toJson());
  print(nuovoJson); // Output: {"nome":"Alice","eta":25}
}
