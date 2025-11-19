const http = require("http");
const fs = require("fs").promises;
const path = require("path");
const url = require("url");
const querystring = require("querystring");

const hostname = "127.0.0.1";
const port = 3000;

const allowedURLPaths = {
  '/': './public/html/index.html',
  '/style.css': './public/css/style.css',
  '/form' : './public/html/form.html'
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

        html = `<!DOCTYPE html>
                    <html lang="it">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Modulo Utente</title>
                    <link rel="stylesheet" href="style.css">
                    </head>
                    <body>
                    <main class="container">
                        <h1>Modulo Informazioni Utente</h1>
                        <form action="/dati" method="POST">`

        let body = '';
        request.on('data', function (data) {
            body += data;
        });

        request.on('end', function () {
            const post = querystring.parse(body);

            if(!post.nome || !/^[^\d\s][\p{L}\s'-]*$/u.test(post.nome)){
                html += `<label for="nome" style="color:red;">nome:</label><br>
			    <input type="text" id="nome" name="nome" value="" size="30" style="border: 1px solid red;">&nbsp<span style="color:red;">Inserisci un nome valido</span><br><br>`;
            }
            else{
                html += `
                <label for="nome">nome:</label><br>
                <input type="text" id="nome" name="nome" value="${post.nome}" size="30"><br><br>`;
            }
            if(!post.cognome || !/^[^\d\s][\p{L}\s'-]*$/u.test(post.cognome)){
                html += `<label for="cognome" style="color:red;">cognome:</label><br>
			    <input type="text" id="cognome" name="cognome" value="" size="30" style="border: 1px solid red;">&nbsp<span style="color:red;">Inserisci un cognome valido</span><br><br>`;
            }
            else{
                html += `
                <label for="cognome">cognome:</label><br>
                <input type="text" id="cognome" name="cognome" value="${post.cognome}" size="30"><br><br>`;
            }
            if(!post.matricola || !/^\d+$/.test(post.matricola)){
                html += `<label for="matricola" style="color:red;">matricola:</label><br>
			    <input type="text" id="matricola" name="matricola" value="" size="30" style="border: 1px solid red;">&nbsp<span style="color:red;">Inserisci un matricola valido</span><br><br>`;
            }
            else{
                html += `
                <label for="matricola">matricola:</label><br>
                <input type="text" id="matricola" name="matricola" value="${post.matricola}" size="30"><br><br>`;
            }
            if(!post.regione){
                html += `<label for="regione">regione di residenza</label>
                <select id="regione" name="regione" style="border: 1px solid red; >
                    <option value="">-- Seleziona --</option>
                    <option value="emilia_romagna">emiglia romagna</option>
                    <option value="veneto">veneto</option>
                    <option value="lazio">lazio</option>
                    <option value="campagnia">campagnia</option>
                </select>&nbsp<span style="color:red;">Inserisci un regione valido</span><br><br>`
            }
            else{
                html += `<select id="regione" name="regione">
                    <option value="${post.regione}">${post.regione}</option>
                    <option value="emilia_romagna">Emilia-Romagna</option>
                    <option value="veneto">Veneto</option>
                    <option value="lazio">Lazio</option>
                    <option value="campania">Campania</option>
                </select>
                `;
            }
            if(!post.email|| /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(post.nome)){
                html += `<label for="email" style="color:red;">email:</label><br>
			    <input type="email" id="email" name="email" value="" size="30" style="border: 1px solid red;">&nbsp<span style="color:red;">Inserisci un email valido</span><br><br>`;
            }
            else{
                html += `
                <label for="email">email:</label><br>
                <input type="email" id="email" name="email" value="${post.email}" size="30"><br><br>`;
            }
            if(!post.telefono|| /^\d{6,15}$/.test(post.nome)){
                html += `<label for="telefono" style="color:red;">telefono:</label><br>
			    <input type="text" id="telefono" name="telefono" value="" size="30" style="border: 1px solid red;">&nbsp<span style="color:red;">Inserisci un telefono valido</span><br><br>`;
            }
            else{
                html += `
                <label for="telefono">telefono:</label><br>
                <input type="text" id="telefono" name="telefono" value="${post.telefono}" size="30"><br><br>`;
            }

            html += `<button type="submit">Invia</button>
                        </form>
                    </main>
                    </body>
                    </html>`
            response.writeHead(200, { "Content-Type": "text/html" });
            response.end(html);

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

