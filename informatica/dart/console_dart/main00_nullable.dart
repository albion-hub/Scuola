/*
In Dart, il concetto di nullable è legato alla gestione dei valori nulli, 
ovvero quei valori che non rappresentano un oggetto o un dato valido, ma 
piuttosto l'assenza di un valore. Questo concetto è diventato particolarmente 
importante con l'introduzione di **null safety** in Dart a partire dalla versione 2.12.

Che cos'è un tipo nullable?
Un tipo nullable è un tipo di dato che può contenere o un valore valido o `null`. 
In Dart, per indicare che una variabile può essere nullable, si aggiunge un punto 
interrogativo (`?`) al tipo di dato. Ad esempio:

int? numero = null; // Questa variabile può essere un intero o null

- Se non usi il punto interrogativo, la variabile non può essere null
 (è non-nullable per impostazione predefinita).
- Se usi il punto interrogativo, la variabile può essere null.

**Vantaggi di null safety**
1. Meno errori a runtime: Il compilatore ti avvisa se stai usando un valore null 
  in modo non sicuro.
2. Codice più chiaro: Sapere se una variabile può essere null rende il codice più 
  leggibile e mantenibile.
3. Migliore produttività: Evita bug comuni legati ai null reference.

In sintesi, il concetto di nullable in Dart è un modo per gestire in modo sicuro 
i valori nulli, migliorando la robustezza e l'affidabilità del codice. 😊
*/
void main() {

  int numero = 10; // Questa variabile deve sempre contenere un valore intero
  int? numero2 = 10; // Questa variabile può contenere un intero o null
  numero2 = null; // OK: La variabile è null

  // nel dubbio che non si sappia in anticipo se la viariabile è valorizzata
  // per evitare errori di runtime...
  String? nome = null;
  print(nome?.length); // Stampa null senza generare un errore
    
  //Usare un controllo esplicito con `if`:
  if (nome != null) {
    print(nome.length); // Stampa la lunghezza solo se nome non è null
  }

  //Assegnazione di default con `??`
  // Puoi fornire un valore di default se la variabile è `null` usando l'operatore `??`
  String? nome2 = null;
  print(nome2 ?? "Ospite"); // Stampa "Ospite" se nome2 è null

  //Forzare un valore non-null con `!`
  //Se sei sicuro che una variabile nullable non è `null`, puoi forzare il
  //compilatore a trattarla come non-nullable usando l'operatore `!`:
  int? numero3 = 10; // prova a non valorizzare
  print(numero3! + 5); // Stampa 15, perché numero non è null

  //ATTENZIONE: se usi `!` su una variabile che è effettivamente `null`,
  //il programma genererà un'eccezione (runtime error).
}