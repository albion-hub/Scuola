# Trasporto

* end to end:
  destinatari finali (processi in esecuzione) tramite la porta (1-1024 porte note, o efimere)
  tutto quello che sta sotto il livello 4 non e visibile
* pacchetti denominati *segmenti*
* #### *multiplazione*: tecnica per combinare più flussi di dati in un unico flusso, aggiungendo intestazioni per distinguerli
* #### *demultiplazione*: capacità di identificare e separare correttamente i flussi, riconsegnandoli all’applicazione corretta
* \[point to point (le macchine collegati con il cavo)]
* multiplazione:
  instradamento di protocolli: portre diverse nello stesso
  stream nel livello sottostante.
  mette tanti flussi in fila ()
  le porte permettono la multiplazione.
* demultiplazione:
  separazione dei segmenti di ciasun protocollo a partire dal livello 3

## 

## IGMP

* permetto lo streming (multicast)
* lvl 3

## UDP (User Datagram Protocol)

protocollo disconesso -> i pacchetti vengono chiamati datagrami
tipo peer to peer -> inviare e ricevere dati direttamente a un altro, senza stabilire prima una connessione.



## Protocollo connesso (TCP)

* conesso: il protocollo mette funzione per garantire un canale l'affidabilita: handsake -> *NO*, checksum -> *NO*. *SI*: Meccaniscmo di controllo del flusso,meccaniscmo di ritrasmisione. gestione congestione



pacchetto TCP

-> Acknowledgment number: permette la trasmissione di piu pacchetti informando il mittente se gli arricevuti tutti se non sono stati ricevuti tutti informo il destinario fino ha dove sono arrivato

-> windows size dimesione(scheda di rete) del buffer per ricevere il flusso di piu pacchetti.

* three hand shake

durante il three hand shake viene dicisa la sua dimesione in base al hardware. -> riduco la sua dimesione per la congestione della rete o perdo qualche pacchetto.

Sequence number: sicrioniza la trasmisione
permette di riconoscere i diversi flusi tcp

piggybacking:
full duplex
efficente -> meno pacchetti
come funziona ->

* ### piggybacking

Il piggybacking è una tecnica utilizzata nel livello di trasporto del modello ISO/OSI (ad esempio nel protocollo TCP) per ottimizzare la comunicazione bidirezionale e ridurre la congestione della rete.

Quando un host riceve un pacchetto dati, non invia immediatamente l’ACK.
Attende per un breve intervallo di tempo (pochi millisecondi) per verificare se deve anche trasmettere dei propri dati nella direzione opposta.

Se l’host ha dati da inviare, accoda (o “attacca”) l’ACK al pacchetto dei propri dati.
In questo modo, un unico pacchetto contiene sia i dati dell’host che la conferma di ricezione per i dati precedenti ricevuti.
→ Questo è il vero significato di piggybacking (“andare a cavallo”).

Se invece l’host non ha dati da inviare entro il tempo stabilito, allora invia un ACK separato, per non ritardare troppo la conferma e mantenere efficiente la comunicazione.

* #### *sliding window*

campo window size
slinding: ARQ
definito durante *handShake* il max viene definito in base al *buffer del NIC*
varia per gestire la *congestione*
"burst"

senza no affidabilità
NACK nel caso del TCP no uttiliza i time out
ACK cumulativo

implementazione: se un paccchetto durante la trasmissione dei burst dei pacchetti viene perso il mittente tiene in un buffer tutti gli altri pacchetti per poi mandare l'ACK del pacchheto ricevuto, una volta richevuto mannda ack nel ultimo paccheto del burst



### framentazione

la framentazione avviene solo al livello 3.
relazione con il window sliding:

