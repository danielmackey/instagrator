var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('#GRIDLIFE instagrator');
});

app.get('/instagram/', function(req, res) {
  if(req.query['hub.verify_token'] === 'myVerifyToken') {
    res.send(200, req.query['hub.challenge']);
  } else {
    res.send(401, null);
  }
});

var port = process.env.PORT || 5000;
app.listen(port, function(){
  console.log("ready captain on port " + port);
});