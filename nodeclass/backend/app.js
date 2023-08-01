var http = require("http")
var fs = require("fs");
const { log } = require("console");


let a = 7
let b = 4
console.log(a+b);
 
function sendError(response){
    response.writeHead(404, {"content-type": "text/html"});
      response.write("look for another website");
    response.end();
  

}

function onRequest(request, response){
    switch (true) {
        case request.method == "GET" && request.url == "/" :
            response.writeHead(200, {"content-Type": "text/html"});
            fs.createReadStream("./index.html").pipe(response);
            break;
        case request.method == "GET" && request.url == "/tolu"  :
            response.writeHead(200, {"content-Type": "text/html"});
            fs.createReadStream("./tolu.html").pipe(response);
            break;
           
        default:
            sendError(response);
            break;
    }
   
}
http.createServer(onRequest).listen(1805) 