class Cliente {
  /* Variabili di istanza, membri dello stato interno
     Con underscore l'attributo è privato e ha bisogno di getter e setter */
  String _ragioneSociale;
  double? _fatturato;

  /// Getter per ragioneSociale
  String get ragioneSociale {
    return _ragioneSociale;
  }

  /// Setter per ragioneSociale
  void set ragioneSociale(String s) {
    if (s.isNotEmpty)
      _ragioneSociale = s;
    else
      _ragioneSociale = "senza nome";
  }

  /// Getter per fatturato
  double? get fatturato => _fatturato;

  /// Setter per fatturato
  // anche questa senza arrow functions o lambda expressions
  // perché difficilmente racchiudibili in una sola espressione
  // IMPORTANTE che il tipo restituito dal getter sia coerente al parametro del setter
  void set fatturato(double? val) {
    if (val != null && val >= 0) {
      _fatturato = val;
    } else
      _fatturato = 0;
  }

  /// Costruttore con parametri misti
  Cliente(this._ragioneSociale, double fatturato) {
    this.fatturato = fatturato; // Invoca setter
  }

  /// Costruttore con parametri opzionali nominali
  // Il parametro _ragioneSociale, dato che è not nullable, è obbligatorio
  // assegnarlo con : altrimenti da errore a meno che settare l'attributo con 'late'
  Cliente.parametriOpzionali(
      {String ragioneSociale = "", double fatturato = 0.0})
      : this._ragioneSociale = ragioneSociale {
    this.fatturato = fatturato; // Invoca setter
  }

  /// Costruttore da mappa
  Cliente.fromMap(Map<String, dynamic> map)
      : _ragioneSociale =
            map["ragioneSociale"] ?? "", // Inizializzazione diretta
        _fatturato = map["fatturato"]; // Inizializzazione diretta
  // Non è necessario alcun corpo del costruttore

  // Override del metodo toString
  @override
  String toString() {
    return "[ragioneSociale: $ragioneSociale, fatturato: $fatturato]";
  }
}

void main() {
  Cliente c1 = Cliente("Pluto", 2400.50);
  print(c1); // [ragioneSociale: Pluto, fatturato: 2400.5]

  var map = {"ragioneSociale": "Pippo", "fatturato": 4093.34};
  print(map.runtimeType); // _Map<String, Object>

  Cliente c2 = Cliente.fromMap(map);
  print(c2); // [ragioneSociale: Pippo, fatturato: 4093.34]

  // Parametri opzionali nominali
  Cliente c3 = Cliente.parametriOpzionali(ragioneSociale: "Pluto");
  print(c3); // [ragioneSociale: Pluto, fatturato: 0.0]

  Cliente c4 = Cliente.parametriOpzionali(fatturato: 2039.50);
  print(c4); // [ragioneSociale: , fatturato: 2039.5]
}
