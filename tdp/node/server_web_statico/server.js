const http=require("http");
let fs = require("fs");

const hostname='127.0.0.1';
const port=3000;

async function readFile(path, statusError, statusCode, response) {
    fs.readFile(path, function (error, data) {
        if (error) {
            response.writeHead(statusError, { "Content-Type": "text/plain" });
            response.end("Errore interno del server");
        } else {
            response.writeHead(statusCode, { "Content-Type": "text/html" });
            response.end(data, "utf8");
        }
    });         
}

function requestHandler(request,response){
    console.log("In comes a request to: "+request.url);
    switch (request.url) {
        case "/":
             readFile("./public/index.html", 500,200,response)
            break;
        case "/pagina1":
            readFile("./public/pagina1.html", 500,200,response)
            break
        case "/pagina2":
            readFile("./public/pagina2.html", 500,200,response)
            break
        case "/stile.css":
            fs.readFile("./Css/stile.css", function (error, data) {
            if (error) {
                response.writeHead(500, { "Content-Type": "text/plain" });
                response.end("Errore interno del server");
            } else {
                response.writeHead(200, { "Content-Type": "text/css" });
                response.end(data, "utf8");
            }
        });
            break
        default:
            response.end("Error");
    }
}

const server=http.createServer(requestHandler);
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});


//aggiungere css