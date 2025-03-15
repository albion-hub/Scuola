import 'dart:math'; // usato per pow()
/// Le funzioni in DART

// Parametri classici posizionali
String generaBottone1(String id, int codice_colore, int larghezza) {
  String html = "<button id='$id'; color='$codice_colore'>";
  return html;
}

// Parametri nominali e opzionali; notare {} e che in quanto opzionali devono avere valore default
String generaBottone2(
    {String id = "", int codice_colore = 0, int larghezza = 0}) {
  String html = "<button id='$id'; color='$codice_colore'>";
  //il resto in base ai parametri
  return html;
}

// Parametri posizionali opzionali
String generaBottone3(
    [String id = "", int codice_colore = 0, int larghezza = 0]) {
  String html = "<button id='$id'; color='$codice_colore'>";
  return html;
}

main() {
  print(generaBottone1("bottoneProva", 12, 12));
  print(generaBottone2(
      id: "bottoneProva",
      codice_colore: 65)); // passa il parametro opzionale nominale
  print(generaBottone3());

  var codici = ["ABC123", "XVW667", "GTU200", "MWQ003"];
  String prefissi = ""; //vogliamo ABCXVWGTUMWQ

  codici.forEach(
      (ele) => prefissi += ele.substring(2, 4)); // indici 2,3 (4 escluso)
 
  print(prefissi);

  // lista di funzioni anonime
  var funzioni = [(n) => n * n, (n) => n * n * n, (b, e) => pow(b, e)];

  print(funzioni[0](6)); // invoca prima funzione passando 6
  print(funzioni[1](6)); // invoca seconda funzione passando 6
  print(funzioni[2](2, 5)); // invoca terza funzione passando 2, 5
}
