var express = require('express');
var http = require('http');
var app = express();

app.set('views', __dirname);
app.set('view engine', 'ejs');
app.use(express.logger('dev'));

if ('development' == app.get('env')) {
  var browserSync = require('browser-sync');
  var sync = browserSync.init([], { debugInfo: false });
  app.use(require('connect-browser-sync')(sync));
}

app.get('/', function(req, res) {
  res.render('index.ejs');
}); 

http.createServer(app).listen(3000, function() {
  console.log('Listening...');
});