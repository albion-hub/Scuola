import 'dart:io'; // usato per stdout
/// Le liste in Dart

main() {
  // Lista mista (tipi misti)
  List testList = [];
  // altrimenti
  // List<int> testList = new List<int>();
  testList.add(10);
  testList.add("stringa");
  testList.add(0.50);
  print(testList); // [10, stringa, 0.5]
  testList.remove("stringa");
  print(testList); // [10, 0.5]
  print("E' vuota? " + testList.isEmpty.toString()); // E' vuota? false
  print("Lunghezza lista: " + testList.length.toString()); // Lunghezza lista: 2
  print("Primo elemento: " + testList.first.toString()); // Primo elemento: 10
  print("Ultimo elemento: " + testList.last.toString()); // Ultimo elemento: 0.5

  // foreach
  for (var e in testList) {
    print(e);  //10, 0.5
  }

  for (int i = 0; i < testList.length; i++) print(testList[i]); // //10, 0.5

  testList.add("elemento stringa finale");
  print("\n");

  // Iterator
  var it = testList.iterator;
  // Valore: 10 Valore: 0.5 Valore: Valore stringa finale
  while (it.moveNext()) stdout.write(" Valore: ${it.current}");
   
  void stampaElemento(var ele) {
    stdout.write(" Valore: $ele");
  }

  print("\n");
  // modello da usare se ci sono più istruzioni nel corpo della funzione
  // Valore: 10 Valore: 0.5 Valore: Valore stringa finale
  testList.forEach(stampaElemento);
  
  print("\n");
  
  // modello da usare con lambda se c'è una istruzione
  List listaCopia = [];
  testList.forEach((var element) => listaCopia.add(element));
  print(listaCopia); // [10, 0.5, elemento stringa finale]

  /* Scambio degli elementi di una lista sfruttando i metodi insert e removeAt
     Notare che removeAt restituisce l'elemento della lista cancellato */
  List miaLista = ["a", "b"];
  print(miaLista); // [a, b]
  miaLista.insert(1, miaLista.removeAt(0));
  print(miaLista);  // [b, a]
  miaLista.insert(1, miaLista.removeAt(0));
  print(miaLista); // [a, b]

  // provare i metodi lista testList.indexWhere e testList.firstWhere
  List<String> lista = ["pippo", "pluto", "paperino"];
  var nome = 'pipp';
  // print(nome + ': ' + lista.firstWhere((s) => s == nome));  // va in errore perché nessun elemento soddisfa il predicato
  // pipp: non trovato
  print(nome +
      ': ' +
      lista.firstWhere((s) => s == nome, orElse: () => "non trovato"));

  /// Le liste in dart per default sono growable, questa è una dichiarazione esplicita:
  /// Lista growable inizializzata con ampiezza base 500 elementi
  List growableList = []..length = 500;
  growableList[9] = 12;
  print("elemento 10 = " + growableList[10].toString()); // null
  print("GrowableList è lunga ${growableList.length}");  // 500

  List<int> noGrowableList = List.filled(3, 0, growable: false); // Lista con dimensione fissa a 3 elementi = 0
  print(noGrowableList); // Output: [0, 0, 0]
  // numeriFissi.add(1); // ❌ Errore: Cannot add to a fixed-length list

  /// Lista growable con 500 elementi di base inizializzati con valore 0
  List<int> growableList2 = List<int>.filled(500, 0, growable: true);
  print("Elemento 45: " + growableList2[45].toString()); //Elemento 45: 0

  // La differenza dei costruttori filled e generate è che il primo inserisce
  // valori costanti mentre il secondo valori dinamici anche calcolati in base
  // all'indice passato
  var growableList3 = List.generate(3, (indice) => indice * 2);
  print(growableList3[2]); // 4

  // Lista di 3 liste, utile anche per matrici
  // (_) vuol dire che la funzione aspetta un parametro ma si fornisce anonimo
  var listeMultiple = List.generate(3, (_) => []);
  listeMultiple[0].add("Prima lista");
  listeMultiple[0].add(1);
  listeMultiple[1].add("Seconda lista");
  listeMultiple[1].add(2);
  listeMultiple[2].add("Terza lista");
  listeMultiple[2].add(3);
  listeMultiple[2].add(3);
  print(listeMultiple); // [[Prima lista, 1], [Seconda lista, 2], [Terza lista, 3, 3]]

}