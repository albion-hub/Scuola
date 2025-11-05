const http = require("http");
const fs = require("fs");
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
    const ext = path.extname(filePath).toLowerCase();
    const mimeType = mimeTypes[ext] || "application/octet-stream";
    const fileStream = fs.createReadStream(filePath);

    // Imposta header HTTP
    response.writeHead(200, { 'Content-Type': mimeType });

    // Gestione errori nello stream
    fileStream.on('error', (error) => {
      console.error('Errore nella lettura del file:', error);
      if (error.code === 'ENOENT') {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('File non trovato');
      } else {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end('Errore interno del server');
      }
    });

    // Invia il contenuto del file al client
    fileStream.pipe(response);
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end("Errore interno del server");
  }
}

async function requestHandler(request, response) {
  console.log("In comes a request to:", request.url);
  const filePath = allowedURLPaths[request.url];

  if (filePath) {
    await readFile(filePath, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("Risorsa non trovata");
  }
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
