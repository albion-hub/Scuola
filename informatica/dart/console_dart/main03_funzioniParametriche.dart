/// Dart: funzioni e parametri funzionali
class Cliente {
  String ragioneSociale;
  double fatturato = 0;
  int ordiniSettimanali = 0;
  Cliente(this.ragioneSociale, this.fatturato, this.ordiniSettimanali);
}

// minoreDi Parametro funzionale
void ordina(Function minoreDi, List<Cliente> clienti) {
  Cliente temp;
  for (int i = 0; i < clienti.length - 1; i++)
    for (int j = i + 1; j < clienti.length; j++)
      // minoreDi è un reference della funzione criterioFatturato
      if (minoreDi(clienti[j], clienti[i])) {
        temp = clienti[i];
        clienti[i] = clienti[j];
        clienti[j] = temp;
      }
}

main() {
  var clienti = [Cliente("Pippo", 12326, 4), Cliente("Eta Beta", 903, 10)];
  // criterioFatturato è una funzione e diventerà parametro di ordina()
  var criterioFatturato = (Cliente a, Cliente b) => a.fatturato < b.fatturato;
  var criterioOrdiniSettimanali =
      (Cliente a, Cliente b) => a.ordiniSettimanali < b.ordiniSettimanali;
  ordina(criterioFatturato, clienti);
  clienti.forEach((element) {
    print(element.ragioneSociale + " " + element.fatturato.toString());
  });
  ordina(criterioOrdiniSettimanali, clienti);
  clienti.forEach((element) {
    print(element.ragioneSociale + " " + element.ordiniSettimanali.toString());
  });
}
