#include <stdio.h>
#include <netinet/in.h> // per sockaddr_in al posto della libreria windock2.h
#include <arpa/inet.h> // per inet_ntoa in windows: #include <winsock2.h>
#include <errno.h>    // per errno = WSAGetLastError()
#include <string.h>  // memset 
#include <pthread.h>
#include <stdlib.h> // per exit()
#include <unistd.h> // per close()

#define TCP_PORT (6000)
#define MAXPENDIG (5)
#define RCVBUFSIZE (64)

//typedef unsigned long DWORD;

typedef struct{  //alias (t_threadargs invece di struct t_threadargs)
    int intsock; /*socket del client*/
    int remoteport; /*porta effimera*/
} t_threadargs;

int Accept_TCP_Connection(int sockS, int * remoteport);
void *threadClient(void *threadArgs);

void OnError(char *errorMessage){
    fprintf(stderr, "%s: %d\n", errorMessage , errno);
    exit(1);
}

int main(int argc, char* argv[]){
    
    int sockServer;
    int sockClient;
    int remoteport;
    struct sockaddr_in addrServer;
    pthread_t threadID;

    t_threadargs *threadArgs;

    if((sockServer = socket(PF_INET, SOCK_STREAM, IPPROTO_TCP)) < 0) OnError("socket() fallita");

    memset(&addrServer,0,sizeof(addrServer));
    addrServer.sin_family = AF_INET;
    addrServer.sin_addr.s_addr = htonl(INADDR_ANY);
    addrServer.sin_port = htons(TCP_PORT);

    if(bind(sockServer, (struct sockaddr *) &addrServer, sizeof(addrServer)) < 0)
        OnError("bind() fallita");
    
    if(listen(sockServer, MAXPENDIG) < 0) OnError("listen() fallita");
    printf("\t------TCP Concorrente------\n\ttcp Server in listen su porta locale %d\n", TCP_PORT);

    while(1){
        sockClient = Accept_TCP_Connection(sockServer, &remoteport);
        threadArgs = (t_threadargs *) malloc(sizeof(t_threadargs));
        threadArgs->intsock = sockClient;
        threadArgs->remoteport = remoteport;
        if(pthread_create(&threadID, NULL, threadClient, (void*) threadArgs) != 0)
            OnError("pthread_create() fallita"); 
        pthread_detach(threadID);  // Liberiamo risorse automaticamente alla fine del thread

        printf("\n\t(sul thread %ld)\n", (unsigned long )threadID); 
    }
    
    //return 0;
}

int Accept_TCP_Connection(int sockS, int *remoteport){
    int sockC;
    struct sockaddr_in addrClient;
    socklen_t addrSize = sizeof(addrClient); 

    addrSize = sizeof(addrClient);
    // chiamata blocante:
    if ((sockC = accept(sockS, (struct sockaddr *) &addrClient, &addrSize)) < 0)
        OnError("accept() fallita"); 

    *remoteport = ntohs(addrClient.sin_port); 
    printf("\n\n\tConnesso client. IP remoto=%s; Porta remota=%d", inet_ntoa(addrClient.sin_addr), *remoteport); 
    return sockC; 
}

void *threadClient(void *threadArgs){
    int sockC;
    char recvBuff[RCVBUFSIZE];
    int recvBuffSize;
    int remotePort;

    sockC = ((t_threadargs*) threadArgs)->intsock;
    remotePort = ((t_threadargs*) threadArgs)->remoteport;
    free(threadArgs);  

    recvBuff[0] = 0;
    while (recvBuff[0] != 'x')
    {
        recvBuffSize = recv(sockC, recvBuff, RCVBUFSIZE-1, 0); 
        if(recvBuffSize > 0){
            recvBuff[recvBuffSize] = 0;
            send(sockC, recvBuff, recvBuffSize, 0);
            printf("\n\tClient (remote port %d). Ricevuto e risposto: %s ", remotePort,recvBuff);
        }
    }
    close(sockC);  //per windows closesocket
    printf("\n\tClient (remote port %d). Chiuso.", remotePort);
    return(NULL); 
}


// gcc -Wall -Wextra main.c -o server -lpthread