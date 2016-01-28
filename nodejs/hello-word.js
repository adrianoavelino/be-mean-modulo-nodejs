// hello-world.js
var http = require('http');

var server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Be MEAN");
  response.end();
});

server.listen(3001, function(){
  console.log('Servidor rodando em localhost:3001');
});
