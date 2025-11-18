const http = require("http");
const fs = require("fs").promises;
const querystring = require("querystring");
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

async function requestHandler(request, response) {
    console.log("In comes a request to:", request.url);
    let oggettourl = url.parse(request.url, true);
    const file_path = oggettourl.pathname;

    if (allowedURLPaths[file_path]) {
        try {
            const data = await fs.readFile(allowedURLPaths[file_path]);
            const exe = path.extname(allowedURLPaths[file_path]).toLowerCase();
            const mimeType = mimeTypes[exe] || "application/octet-stream"; //recupro l'estensione
            response.writeHead(200, { "Content-Type": mimeType });
            response.end(data);
        } catch (error) {
            console.error("Errore interno:", error);
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.end("500 - Errore interno del server");
        }
    } 
    else if(file_path === "/dati" && request.method === "POST"){
        let body = '';
        request.on('data', function (data) {
            body += data;
        });

        request.on('end', function () {
            const post = querystring.parse(body);

            response.writeHead(200, { "Content-Type": "text/plain" });
            response.end(post.nome);

        });         

    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Risorsa non trovata");
    }

}

// Crea e avvia il server
const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log(`Server in esecuzione su → http://${hostname}:${port}/`);
});
