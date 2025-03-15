import 'dart:convert';

/// Un dato json, formato di interscambio dati usatissimo nel web, è come il film
/// qui sotto. E' una collezione di coppie chiave, valore (es chiave 'Titolo'
/// valore 'Jojo Rabbit') che in dart viene direttamente supportato dal tipo
/// Map<String, dynamic>
///
Map<String, String> film = {
  "Titolo": "Jojo Rabbit",
  "Regista": "Waititi",
  "Anno": "2020",
  "Img":
      "https://images-na.ssl-images-amazon.com/images/I/81Uo8zyGdUL._SY445_.jpg"
};

// Qui è incluso in una stringa che andrà convertita con jsonDecode()
String filmJson = '''{
  "Titolo": "Il ponte delle spie",
  "Regista": "Spielberg",
	"Anno": "2016",
    "Img": "https://images-na.ssl-images-amazon.com/images/I/71ylhqePG4L._SY445_.jpg"
  }''';

// un array di json
String filmsJson = '''
[
  {
    "Titolo": "Dunkirk",
    "Regista": "Nolan",
	  "Anno": "2019",
    "Img": "https://images-na.ssl-images-amazon.com/images/I/81781%2BYmMoL._SY445_.jpg"
  },
  {
    "Titolo": "L'età giovane",
    "Regista": "Dardenne",
	  "Anno": "2020",
    "Img": "https://images-na.ssl-images-amazon.com/images/I/71XC8DYfO6L._SY445_.jpg"
  },
  {
    "Titolo": "TeneT",
    "Regista": "Nolan",
	  "Anno": "2020",
    "Img": "https://images-na.ssl-images-amazon.com/images/I/71lg0x8oqTL._SY445_.jpg"
  }
]''';

// la classe che si userà per incapsulare le informazioni di un film
class Film {
  final String titolo;
  final String regista;
  final String anno;

  Film(this.titolo, this.regista, this.anno);

  Film.fromJson(Map<String, dynamic> json)
      : titolo = json['Titolo'],
        regista = json['Regista'],
        anno = json['Anno'];
}

// la classe che si userà per incapsulare le informazioni di più film
class ListaFilm {
  final List<Film> listaFilm;

  ListaFilm({required this.listaFilm});

  /*
    In Dart, il costruttore factory è un tipo speciale di costruttore che non 
    crea necessariamente una nuova istanza della classe ogni volta che viene chiamato. 
    A differenza di un costruttore normale, il costruttore factory può:

      ✅ Restituire un'istanza esistente.
      🔁 Restituire istanze diverse a seconda delle condizioni.
      🔎 Eseguire logica aggiuntiva prima di creare un oggetto.
    
    Il costruttore che segue esegue logica aggiuntiva ricevendo una Lista di Map 
    e convertendo (deserializza) come ListaFilm poi richiama il costruttore 
    'normale' assegnando la lista all'attributo listaFilm.
  */
  factory ListaFilm.fromJson(List<dynamic> parsedJson) {
    // il metodo .map cicla su tutti gli elementi della lista restituendo un tipo Iterable.
    // Finito il ciclo viene convertito Iterable in List con toList()
    // Ottenuta la lista viene restituita un'istanza di questa classe con l'altro costruttore
    // che ha come parametro nominale la lista stessa
    // .map() server per trasformare e restituire una nuova collezione.
    // .forEach() serve per eseguire operazioni senza restituire nulla.
    List<Film> listaFilm = parsedJson.map((film) => Film.fromJson(film)).toList();
    return ListaFilm(
      listaFilm: listaFilm,
    );
  }
}

main() {
  print("Stampa direttamente dal tipo Map");
  print("${film['Titolo']}, ${film['Regista']}, ${film['Anno']}");

  print("Trasforma in Map da stringa json");
  Map<String, dynamic> filmMap = jsonDecode(filmJson);
  print("${filmMap['Titolo']}, ${filmMap['Regista']}, ${filmMap['Anno']}");

  print("Trasforma in classe Film da Map");
  var filmClasse = Film.fromJson(filmMap);
  print('${filmClasse.titolo}, ${filmClasse.regista}, ${filmClasse.anno}');

  print("Trasforma in lista di classe Film da stringa json");
  // La lista viene temporaneamente memorizzata genericamente in tipo dynamic
  List<dynamic> filmsMap = jsonDecode(filmsJson);
  List<Film> films = ListaFilm.fromJson(filmsMap).listaFilm;
  // forEach invoca una funzione anonima passando parametro film a funzione freccia
  films.forEach(
      (film) => print('${film.titolo}, ${film.regista}, ${film.anno}'));
  // in alternativa senza lambda expression
  /*
  films.forEach((film) {
    print('${film.titolo}, ${film.regista}, ${film.anno}');
  });*/
}
