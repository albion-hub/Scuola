const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const allowedURLPaths = {
  '/': './public/html/index.html',
  '/style.css': './public/css/style.css',
};

const mimeTypes = {
    ".html": "text/html; charset=UTF-8",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".ico": "image/x-icon",
    ".js": "application/javascript; charset=UTF-8",
    ".css": "text/css; charset=UTF-8",
    ".json": "application/json; charset=UTF-8",
    ".svg": "image/svg+xml",
};

async function readFileSafe(filePath, response) {
    try {
        const data = await fs.readFile(filePath);
        const ext = path.extname(filePath).toLowerCase();
        const mimeType = mimeTypes[ext] || "application/octet-stream";
        response.writeHead(200, { "Content-Type": mimeType });
        response.end(data);
    } catch (error) {
        console.error("Errore interno:", error);
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end("500 - Errore interno del server");
    }
}

// Funzione principale di gestione richieste
async function requestHandler(request, response) {
    console.log("In comes a request to:", request.url);
    console.log("In comes a request to:", request.method);
    let oggettourl = url.parse(request.url, true);
    const path = oggettourl.pathname;


    if (allowedURLPaths[path]) {
        await readFileSafe(allowedURLPaths[path], response);
    } 
    else if(path == "/dati"){
        if(request.method == "GET"){
            const nome = oggettourl.query.nome || "ospite";
            const email = oggettourl.query.email || "";
            const password = oggettourl.query.password || "";
            const genere = oggettourl.query.genere || "";
            const interessi = oggettourl.query.interessi || "";
            const citta = oggettourl.query.citta || "";
            const lingue  = oggettourl.query.lingue || "";
            const note  = oggettourl.query.note || "";
    
            console.log(`nome: ${nome}\ncognome: ${email}\npassword: ${password}\ngenere: ${genere}\ninteressi: ${interessi}\ncittà: ${citta}\nlingue: ${lingue}\nnote: ${note}`)
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end("<h1>dati inviati :)</h1>");
        }
        else{
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end("<h1>metodo non autorizato :(</h1>");
        }

    }else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Risorsa non trovata");
    }

}

// Crea e avvia il server
const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log(`Server in esecuzione su → http://${hostname}:${port}/`);
});
