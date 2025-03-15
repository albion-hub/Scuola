/*
Dart possiede un modello a singolo thread basato su event loop. 
Del codice bloccante eseguito sul thread comporterebbe il blocco dello stesso. 
É possibile quindi fare uso della programmazione asincrona per eseguire 
operazioni in modo asincrono. Il tipo Future è un’operazione asincrona
che produce un risultato di tipo T.
Quando viene invocata una funzione che restituisce un Future accadono due cose:

  1. la funzione accoda le operazioni da eseguire
  2. al termine delle operazioni il Future viene completato con il risultato o 
    con un errore

Async e Await
async e await sono di supporto alla programmazione asincrona.
Async viene utilizzata nella signature delle funzioni che restituiscono un Future o
che ne fanno uso al loro interno, mentre await permette letteralmente di "aspettare"
che il Future possa restituire un risultato. Await non è bloccante, semplicemente
permette all’event loop di proseguire con gli eventi in coda e quando l’azione long-
running è terminata allora l’event loop riprenderà l’esecuzione del Future che ha
prodotto il risultato, permettendo così di non fare uso delle callbacks.

Questa funzione simula un'attesa non quantificabile a priori 
  perché dipende da fattori esterni: connessione http, apertura file, ecc..
  e quindi da eseguire in modo asincrono

Await ha lo scopo di interrompere il flusso del processo fino al completamento del metodo
Tutto ciò che è al di sotto della funzione di attesa verrà eseguito al termine della funzione Future.

La funzione qui sotto, se invocata con await, attenderà 5 secondi quindi restituirà la stringa "Cavolfiore"
e successivamente stamperà la stringa restituita.
*/
Future<String> fetchOrdineUtente() =>
    Future.delayed(Duration(seconds: 5), () => 'Cavolfiore');

void main() async {
  print("Attendi ordine...");
  /* fetchOrdineUtente() senza await ritorna un tipo Future: 
    Tuo ordine: Instance of 'Future<String>' perché l'elaborazione è ancora incompleta;
    non attende i 5 secondi perché le operazioni vengono svolte asincrone MA
    senza attesa del completamento del processo
  */
  var ordineFuture = fetchOrdineUtente();
  print("Ordine: $ordineFuture");

  print("\nAttendi ordine...");
  /* ritorna String: 'Tuo ordine: 'Cavolfiore' perché il Future è completato 
    in quanto con await si è atteso il completamento del processo e quindi
    l'attesa dei 5 secondi
  */
  var ordineString = await fetchOrdineUtente();
  print("Ordine: $ordineString");
}
