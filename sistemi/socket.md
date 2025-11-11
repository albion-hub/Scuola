# web socket

## socket
- rappresenta un endpoint (indentifica una macchina e il precesso in esecuzione)
- una communicazione e rappresentata da 2 coppie di socket 

## lato server

- socket()  |   (funzione, costrutore)
- bind()    |   (SO -> riserva la porta -> non la da piu ha nessuno)        | 
- listen()  |
- accept()  |
- recv()    |
- send()    |
- close()   |

## lato clinet
- socket()  |   (ritorna il fd)
- connect() |
- send()    |
- recv()    |

void *threadClient(void *threadArgs) / forma di poliformismo

