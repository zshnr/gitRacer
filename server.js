var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var expressLayouts = require('express-ejs-layouts');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(require('express').static(__dirname + '/public'));

http.listen(3000, function(){
  console.log('SERVER 3000')
});

app.get('/', function(req, res){
  res.send('Git Race')
});