var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  var ips = req.ips;
  var ip = req.ip;
  res.send('Hello ips='+ips+" ip="+ip);
});


app.post('/', function(req,res) {
  
  console.log(req.body);
  
  var ohai = req.body;
  res.send(ohai.current_user);
  
  
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
