package main

import (
    "bufio"
    "fmt"
    "net"
    "os"
)

const (
    TCP_PORT   = 6000
    RCVBUFSIZE = 64
)

func handleClient(conn net.Conn) {
    defer conn.Close()

    remoteAddr := conn.RemoteAddr().(*net.TCPAddr)
    fmt.Printf("\n\n\tConnesso client. IP remoto=%s; Porta remota=%d\n", remoteAddr.IP.String(), remoteAddr.Port)

    reader := bufio.NewReader(conn)
    for {
        buff := make([]byte, RCVBUFSIZE)   //array
        n, err := reader.Read(buff)
        if err != nil {
            fmt.Printf("\n\tClient (remote port %d). Chiuso.\n", remoteAddr.Port)
            return
        }

        msg := string(buff[:n])
        fmt.Printf("\n\tClient (remote port %d). Ricevuto: %s\n", remoteAddr.Port, msg)

        // Echo back
        _, err = conn.Write(buff[:n])
        if err != nil {
            fmt.Printf("\n\tClient (remote port %d). Errore scrittura: %v\n", remoteAddr.Port, err)
            return
        }

        if len(msg) > 0 && msg[0] == 'x' {
            fmt.Printf("\n\tClient (remote port %d). Ricevuto comando di terminazione.\n", remoteAddr.Port)
            return
        }
    }
}

func main() {
    addr := fmt.Sprintf(":%d", TCP_PORT)       //tutte le interfaccie
    listener, err := net.Listen("tcp", addr)
    if err != nil {
        fmt.Fprintf(os.Stderr, "Errore listen: %v\n", err)
        os.Exit(1)
    }
    defer listener.Close()  //chiudi quando (da capire quando e SE viene lanciato) 

    fmt.Printf("\t------TCP Concorrente------\n\ttcp Server in listen su porta locale %d\n", TCP_PORT)

    for {
        conn, err := listener.Accept()
        if err != nil {
            fmt.Fprintf(os.Stderr, "Errore accept: %v\n", err)
            continue 
        }
        go handleClient(conn) // goroutine concorrente per ogni client  (thread legero)
    }
}
