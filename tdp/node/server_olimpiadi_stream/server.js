const http = require("http");
const fs = require("fs").promises; // uso fs.promises
const path = require("path");

const hostname = '127.0.0.1';
const port = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.jpeg': 'image/jpeg',
    '.jfif': 'image/jfif',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.ico': 'image/x-icon',
    '.jpg': 'image/jpeg',
};

const allowedURLPaths = {
    '/': './public/html/index.html',
    '/favicon.ico': './public/image/basketball.ico',
    '/styles.css': './public/css/style.css',
};

async function readFile(filePath, response) {
    try {
        const data = await fs.readFile(filePath);
        const ext = path.extname(filePath).toLowerCase();
        const mimeType = mimeTypes[ext] || "application/octet-stream";
        response.writeHead(200, { "Content-Type": mimeType });
        response.end(data);
    } catch (error) {
        response.writeHead(500, { "Content-Type": "text/plain" });
        response.end("Errore interno del server");
    }
}

async function requestHandler(request, response) {
    console.log("In comes a request to: " + request.url);
    const filePath = allowedURLPaths[request.url];

    if (filePath) {
        await readFile(filePath, response);
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Risorsa non trovata");
    }
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});
