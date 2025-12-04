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
            var form_valido = true;

            if (!post.data) {
                html += `<label for="data" style="color:red;">data di nascita</label>
                        <input type="date" id="data" name="data" style="border: 1px solid red;>
                        &nbsp<span style="color:red;">Inserisci data</span><br><br>`
                form_valido = false
            } else {
                html += `<label for="data">Seleziona la data</label>
                        <input type="date" id="data" name="data" value="${post.data}">`
            }
            html += `<label for="nome">Nome:</label>
                        <div class="name-container">`
            if(!post.nome || !/^[^\d\s][\p{L}\s'-]*$/u.test(post.nome)){
                html += `<input type="text" id="nome" name="nome" value="" size="30" style="border: 1px solid red;">
                &nbsp<span style="color:red;">Inserisci un nome valido</span><br><br>`;
                form_valido = false
            }
            else{
                html += `<input type="text" id="nome" name="nome" value="${post.nome}" size="30"><br><br>`;
            }
            if(!post.cognome || !/^[^\d\s][\p{L}\s'-]*$/u.test(post.cognome)){
                html += `<input type="text" id="cognome" name="cognome" value="" size="30" style="border: 1px solid red;">
                &nbsp<span style="color:red;">Inserisci un cognome valido</span><br><br>`;
                form_valido = false
            }
            else{
                html += `<input type="text" id="cognome" name="cognome" value="${post.cognome}" size="30"><br><br>`;
            }

            html +=  ` </div>`
           
            if(!post.email|| !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(post.email)){
                html += `<label for="email" style="color:red;">email:</label><br>
			    <input type="email" id="email" name="email" value="" size="30" style="border: 1px solid red;">&nbsp<span style="color:red;">Inserisci un email valido</span><br><br>`;
                form_valido = false
            }
            else{
                html += `
                <label for="email">email:</label><br>
                <input type="email" id="email" name="email" value="${post.email}" size="30"><br><br>`;
            }

            if (!post.altezza || !/^\d{3}$/.test(post.altezza)) {
                html += `<label for="altezza" style="color:red;">altezza:</label><br>
			    <input type="number" id="altezza" name="altezza" value="" size="30" style="border: 1px solid red;">&nbsp<span style="color:red;">Inserisci un altezza valida</span><br><br>`;
                form_valido = false
            } else {
                html += `
                <label for="altezza">altezza:</label><br>
                <input type="number" id="altezza" name="altezza" value="${post.altezza}" size="30"><br><br>`;
            }
            if (!post.pesso || !/^\d{2,3}$/.test(post.pesso)) {
                html += `<label for="pesso" style="color:red;">pesso:</label><br>
			    <input type="number" id="pesso" name="pesso" value="" size="30" style="border: 1px solid red;">&nbsp<span style="color:red;">Inserisci un pesso valida</span><br><br>`;
                form_valido = false
            } else {
                html += `
                <label for="pesso">pesso:</label><br>
                <input type="number" id="pesso" name="pesso" value="${post.pesso}" size="30"><br><br>`;
            }

            if (!post.obbietivo) {
                html += `<fieldset>
                    <legend style="color:red;">i miei obbietivi principali sono:</legend>
                    <label><input type="checkbox" name="obbietivo" value="peso" >perdina di peso</label>
                    <label><input type="checkbox" name="obbietivo" value="musculatura" >guadagno musculatura</label>
                    <label><input type="checkbox" name="obbietivo" value="forza" >guadagno di forza</label>
                    <label><input type="checkbox" name="obbietivo" value="atletiche" >prestazioni atletiche</label>
                    <div style="display: flex;flex-direction: row; gap: 10px;">
                        <label>altro</label><input type="text" name="obbietivo" value="" style="width: 100px;"></label>
                    </div>
                </fieldset>`
                form_valido = false
            }
            
            html += `<button type="submit">Invia</button>
                     <button type="reset">reset</button>
                        </form>
                    </main>
                    </body>
                    </html>`

            if (form_valido) {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end("<div>dati ricevuti in modo corretto</div>");
                console.log(`${post.data}\n${post.nome}\n${post.cognome}\n${post.altezza}\n${post.pesso}\n${post.email}\n${post.obbietivo}\n${post.richieste}\n`)
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(html);
            }

        });  
    }
    else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Risorsa non trovata");
    }

}

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log(`Server in esecuzione su → http://${hostname}:${port}/`);
});

