var http = require('http'),
    server = http.createServer( function(req, res) {
      res.writeHead(200, {'Content-Type':'text/plain'});
      res.end('#GRIDLIFE instagrator!');
    });

server.listen(process.env.PORT || 5000, function(){
  console.log('ready!');
});