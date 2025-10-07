# Trasporto

- end to end:
    destinatari finali (processi in esecuzione) tramite la porta (1-1024 porte note, )
    
    tutto quello che sta sotto il livello 4 non e visibile 

- pacchetti denominati *segmenti*

- #### *multiplazione*: tecnica per combinare più flussi di dati in un unico flusso, aggiungendo intestazioni per distinguerli

- #### *demultiplazione*: capacità di identificare e separare correttamente i flussi, riconsegnandoli all’applicazione corretta

- [point to point (le macchine collegati con il cavo)]

- pacchetti -> segmenti 

- multiplazione:
    instradamento di protocolli: portre diverse nello stesso 
    stream nel livello sottostante.
    mette tanti flussi in fila ()
    le porte permettono la multiplazione. 

- demultiplazione: 
    separazione dei segmenti di ciasun protocollo a partire dal livello 3 

## 

## IGMP
- permetto lo streming (multicast)
- lvl 3  

## UDP (User Datagram Protocol)
protocollo disconesso -> i pacchetti vengono chiamati datagrami
tipo peer to peer -> inviare e ricevere dati direttamente a un altro, senza stabilire prima una connessione.


## Protocollo connesso (TCP)
- conesso: il protocollo mette funzione per garantire un canale l'affidabilita: handsake -> *NO*, checksum -> *NO*. *SI*: Meccaniscmo di controllo del flusso,meccaniscmo di ritrasmisione. gestione congestione  


pacchetto TCP 

-> Acknowledgment number: permette la trasmissione di piu pacchetti informando il mittente se gli arricevuti tutti se non sono stati ricevuti tutti informo il destinario fino ha dove sono arrivato 

-> windows size dimesione(scheda di rete) del buffer per ricevere il flusso di piu pacchetti. 

- three hand shake

durante il three hand shake viene dicisa la sua dimesione in base al hardware. -> riduco la sua dimesione per la congestione della rete o perdo qualche pacchetto. 

Sequence number: sicrioniza la trasmisione
permette di riconoscere i diversi flusi tcp 

- #### *sliding window*
campo window size 
slinding: ARQ
definito durante *handShake* il max viene definito in base al *buffer del NIC*
varia per gestire la *congestione*
"burst"
