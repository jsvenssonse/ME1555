var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

var server = app.listen(1337, '192.168.1.112', function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('Listening at ' + host + ':' + port);
});
