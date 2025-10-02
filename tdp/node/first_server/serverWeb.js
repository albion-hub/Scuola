// script server_http_hello.js
const http=require("http");
const hostname='127.0.0.1';
const port=3000;

function requestHandler(request,response) {
    console.log("In comes a request to: "+request.url);
    if(request.url === "/"){
      response.end("Hello,World!");
    }
    else if(request.url === "/html"){
      response.writeHead(200,{'Content-Type':'text/html'});
      response.end(`
        <html>
            <body>
                <p>ciao da html </p>
            </body>
        </html>`)
    }
    else if(request.url === "/json"){
      response.writeHead(200,{'Content-Type':'application/json'});
      response.end(`{"ciao":"da json"}`)
    }
}

const server=http.createServer(requestHandler);
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
