var express = require('express');
var favicon = require('serve-favicon');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.listen(port, function() {
  console.log('Server listening on port:', port);
});
