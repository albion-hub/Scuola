void printOrderMessage() async {
  try {
    print('Attendi ordine...');
    var order = await fetchUserOrder();
    print(order);
  } catch (err) {
    print("Errore: $err");
  }
}

Future<String> fetchUserOrder() {
  // Solleva forzatamente un'eccezione (es. connessione https fallita)
  var str =
      Future.delayed(Duration(seconds: 4), () => throw 'Non trovo ordine');
  return str;
}

void main() {
  print("prima");
  printOrderMessage();
  print("dopo"); // viene eseguita subito perché non c'è await
}
