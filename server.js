var app = require('express')();
var server = require('http').Server(app)
var io = require('socket.io')(server);
var expressLayouts = require('express-ejs-layouts');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(require('express').static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

module.exports = server
if (!module.parent) {
  console.log('Server running on http://localhost:3000')
  server.listen(3000)
}

io.on('connection', function(socket) {
  setInterval(function() {
    socket.emit('updateCommit', 1000);
  });
});