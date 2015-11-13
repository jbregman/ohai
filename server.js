var express = require('express');
var app = express();

app.set('trust proxy','uniquelocal');
app.get('/', function (req, res) {
  var ip = req.ip;
  res.send('Hello ip='+ip);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
