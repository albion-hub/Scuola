package main

import (
    "bufio"
    "fmt"
    "net"
    "os"
    "strings"
)

const RCVBUFSIZE = 64

func main() {
    ipServer := "127.0.0.1"
    remotePort := 6000
    var message string

    // Se passati da linea di comando, sovrascrivo
    if len(os.Args) > 1 {
        message = os.Args[1]
    } else {
        message = "ITIS PR"
    }
    if len(os.Args) > 2 {
        ipServer = os.Args[2]
    }

    addr := fmt.Sprintf("%s:%d", ipServer, remotePort)
    conn, err := net.Dial("tcp", addr)
    if err != nil {
        fmt.Fprintf(os.Stderr, "connect() fallita: %v\n", err)
        os.Exit(1)
    }
    defer conn.Close()

    fmt.Printf("\t------TCP Concorrente------\n")
    fmt.Printf("\tConnessione a IP remoto %s su Porta remota %d\n", ipServer, remotePort)

    reader := bufio.NewReader(os.Stdin)
    buf := make([]byte, RCVBUFSIZE)     //array 

    for {
        txSize := len(message)

        // invio messaggio
        _, err := conn.Write([]byte(message))
        if err != nil {
            fmt.Fprintf(os.Stderr, "send() fallita: %v\n", err)
            return
        }
        fmt.Printf("\n\tTrasmesso: %s\n", message)

        // ricevo risposta (echo)
        totalBytesRcvd := 0
        for totalBytesRcvd < txSize {
            n, err := conn.Read(buf)
            if err != nil {
                fmt.Fprintf(os.Stderr, "recv() fallita: %v\n", err)
                return
            }
            fmt.Printf("\n\tRicevuto: %s\n", string(buf[:n]))
            totalBytesRcvd += n
        }

        fmt.Printf("\n\tClient connesso a Server.\n\tIP remoto=%s; Porta remota=%d Porta Locale: %s\n\t(x: Termina) ", ipServer, remotePort, conn.LocalAddr().String())
        text, _ := reader.ReadString('\n')
        text = strings.TrimSpace(text)
        if len(text) > 0 {
            message = text
        }
        if message == "x" {
            break
        }
    }

    fmt.Printf("\n\tConnessione terminata\n")
}
