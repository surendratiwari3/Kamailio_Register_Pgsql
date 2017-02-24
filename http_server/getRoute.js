var http = require("http");
var server = http.createServer(function(request, response) {

console.log("Request handler random was called.");
response.writeHead(200, {"Content-Type": "application/json"});
var otherArray = ["item1", "item2"];
var json = JSON.stringify({ 
    RouteHeader: "192.168.2.100"
  });
  response.end(json);

});

server.listen(3000);
console.log("Server is listening");
