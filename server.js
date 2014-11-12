var express = require('express')
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var connector = require('/src/ghApiConnector');

var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.render('index');
});



module.exports = server
if (!module.parent) {
  console.log('Server running on http://localhost:3000')
  server.listen(3000)
}