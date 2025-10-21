#include <stdio.h>
#include <errno.h>
#include <stdlib.h>
#include <netinet/in.h> 
#include <string.h>
#include <arpa/inet.h> // per inet_addr
#include <stdlib.h> // per exit()
#include <unistd.h> // per close()

#define RCVBUFSIZE (64)

void OnError(char *errorMessage){
    fprintf(stderr, "%s: %d\n", errorMessage , errno);
    exit(1);
}

unsigned short GetPort(int sock){
    struct sockaddr_in addrs;
    unsigned int addrsSize;

    addrsSize = sizeof(addrs);
    getsockname(sock, ( struct sockaddr *) &addrs, &addrsSize);
    return htons(addrs.sin_port);
}

int main(int argc, char* argv[]){
    int sock;
    struct sockaddr_in addClient;
    unsigned short remoteport;
    char szIPServer[20];
    char szTx[RCVBUFSIZE], recvBuff[RCVBUFSIZE];
    int txSize, bytesRcvd, totalBytesRcvd;

    //char ch=0;

    strncpy(szIPServer, "127.0.0.1", sizeof(szIPServer));
    strncpy(szTx, "ITIS PR", sizeof(szTx));
    remoteport = 6000;

    if(argc > 1 ) strncpy(szTx, argv[1], sizeof(szTx));
    if(argc > 2 ) strncpy(szIPServer, argv[2], sizeof(szIPServer));

    txSize = strlen(szTx);

    if((sock = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0) OnError("socker() fallita");

    memset(&addClient, 0, sizeof(addClient));
    addClient.sin_family = AF_INET;
    addClient.sin_addr.s_addr = inet_addr(szIPServer);
    addClient.sin_port = htons(remoteport);

    puts("\t------TCP Concorrente------");
    printf("\tConnessione a IP remoto %s su Porta remota %d\n", szIPServer, remoteport);

    if (connect(sock, (struct sockaddr *) &addClient, sizeof(addClient)) < 0) OnError("connect() fallita"); 
    do{
        txSize = strlen(szTx); 
        
        if(send(sock,szTx,txSize,0) != txSize) OnError("send() fallita"); 
        printf("\n\tTrasmesso: %s", szTx);
        
        totalBytesRcvd = 0;
        while (totalBytesRcvd < txSize)
        {
            if((bytesRcvd = recv(sock,recvBuff, RCVBUFSIZE-1, 0)) <= 0) OnError("recv() fallita"); 
            totalBytesRcvd += bytesRcvd;
            recvBuff[bytesRcvd] = 0;
            printf("\n\tRicevuto: %s\n", recvBuff); 
        }
        
        printf("\n\tClient connesso a Server.\n\tIP remoto=%s; Porta remota=%d Porta Locale: %hu\n\t(x: Termina) ", inet_ntoa(addClient.sin_addr), remoteport,GetPort(sock));     
        fgets(szTx,sizeof(szTx), stdin);
    } while (szTx[0] != 'x');

    close(sock); 
    printf("\n\tConnessione terminata\n");
    //sleep(2000);
    exit(0); 
}

//gcc -Wall -Wextra main.c -o client