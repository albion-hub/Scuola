# Trasporto

- end to end:
    destinatari finali (processi) tramite la porta
    tutto quello che sta sotto il livello 4 non e visibile 

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

## Protocollo connesso (TCP)
- conesso: il protocollo mette funzione per garantire un canale l'affidabilita: handsake -> *NO*, checksum -> *NO *. *SI*: Meccaniscmo di controllo del flusso,meccaniscmo di ritrasmisione. gestione congestione  

pacchetto TCP 

-> Acknowledgment number: permette la trasmissione di piu pacchetti informando il mittente se gli arricevuti tutti se non sono stati ricevuti tutti informo il destinario fino ha dove sono arrivato 

-> windows size dimesione(scheda di rete) del buffer per ricevere il flusso di piu pacchetti. 

durante il three hand shake viene dicisa la sua dimesione in base al hardware. -> riduco la sua dimesione per la congestione della rete o perdo qualche pacchetto. 

