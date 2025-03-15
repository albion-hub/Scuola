// Dart: OOP, ereditarietà, varietà di costruttori
class Persona {
  // attributi privati '_'
  String _nome;
  int _matricola;

  /// Costruttore vuoto e con parametri opzionali posizionali e valori default
  Persona([this._nome = "", this._matricola = 0]);

  // NON SI PUO' duplicare il nome costruttore Persona (es: java)
  /// Costruttore con parametro obbligatorio per attributo nome e assegnazione
  /// default per attributo matricola */
  Persona.nome(this._nome) : _matricola = 0;

  String get nome => _nome;
  int get matricola => _matricola;

  String metodoOverride() => "metodo classe Persona";

  @override
  String toString() {
    return "[nome = $nome; matricola = $matricola]";
  }
}

/// la classe Studente eredita attributi (nome, matricola) e metodi dalla classe Persona
class Studente extends Persona {
  // aggiunge attributo specializzazione
  String _specializzazione;

  /// Costruttore con parametro obbligatorio e opzionali che invoca il costruttore (super)
  /// di classe antenata sfruttandolo per l'assegnazione del campo ereditato nome
  Studente(this._specializzazione, {String nome = "", int matricola = 0})
      : super(nome, matricola);

  /// Costruttore che assegna solo a attributo n sfruttando costruttore antenato
  Studente.nome(String nome)
      : _specializzazione = "",
        super(nome); // _matricola = 0

  @override
  String metodoOverride() => "metodo classe Studente";

  /// toString() in override che sfrutta quello antenato
  @override
  String toString() {
    return super.toString() + " [Specializzazione = $_specializzazione]";
  }
}

class Docente extends Persona {
  double _stipendio;
  double get stipendio => _stipendio;

  Docente(this._stipendio, {String nome = "", int matricola = 0})
      : super(nome, matricola);

  Docente.parametri({String nome = "", int matricola = 0, double stipendio = 0})
      : _stipendio = stipendio,
        super(nome, matricola);
  @override
  String toString() {
    return super.toString() + " [Stipendio = $_stipendio]";
  }
}

main() {
  Persona p1 = Persona("Pippo");
  print(p1.metodoOverride()); // metodo classe Persona
  print(p1); // [nome = Pippo; matricola = 0]

  Studente s1 = Studente("Informatica", nome: "Pluto", matricola: 101); // costruttore Studente
  print(s1.metodoOverride()); // metodo classe Studente
  // invoca il toString() di Studente
  print(s1); // [nome = Pluto; matricola = 101; specializzazione = informatica]

  Studente s2 = Studente.nome("Eta Beta");
  print(s2.metodoOverride()); // metodo classe Studente
  print(s2); // [nome = Eta Beta; matricola = 0] [Specializzazione = ]

  // Conformità di tipo: p2 è tipo Persona ma può essere istanziato come Studente
  // si dice Polimorfismo o Late binding.
  Persona p2 = Studente("Elettronica", nome: "Paperino");
  print("Tipo: ${p2.runtimeType}"); // Tipo: Studente
  print(p2.metodoOverride()); // metodo classe Studente
  /* per ottenere il riferimento ai metodi di Studente
     bisogna forzare (casting) l'accesso a p2 come Studente*/

  print(
      p2); // [nome = Paperino; matricola = 0] [Specializzazione = Elettronica]

  /// Passaggio valori a costruttore con parametri nominali
  Docente d1 =
      Docente.parametri(nome: "Archimede", stipendio: 1500, matricola: 127);
  print(d1);  // [nome = Archimede; matricola = 127] [Stipendio = 1500.0]
}
