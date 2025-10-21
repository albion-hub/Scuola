#!/bin/bash

SERVER="./server/main.c"
OUTPUT_SERVER="server"

CLIENT="./client/main.c"
OUTPUT_CLIENT="client"

echo "Compilazione Server"
gcc -Wall -Wextra "$SERVER" -o "./server/$OUTPUT_SERVER"
if [ $? -ne 0 ]; then
    echo "Errore compilazione server"
    exit 1
fi

echo "Compilazione Client"
gcc -Wall -Wextra "$CLIENT" -o "./client/$OUTPUT_CLIENT"
if [ $? -ne 0 ]; then
    echo "Errore compilazione client"
    exit 1
fi

echo "esecuzione del server e del client"

gnome-terminal -- bash -c "./server/$OUTPUT_SERVER; exec bash"
gnome-terminal -- bash -c "./client/$OUTPUT_CLIENT; exec bash"
