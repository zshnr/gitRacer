var app = require('express')();
var server = require('http').Server(app)
var io = require('socket.io')(server);
var expressLayouts = require('express-ejs-layouts');
var GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

var connectorPath = require('./src/GhApiConnector');
var connector = new connectorPath();

// connector.validateUserName('Scully87');
// connector.getCommits('Scully87');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(require('express').static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

app.set('port', (process.env.PORT || 3000))

module.exports = server
if (!module.parent) {
  console.log('Server running on http://localhost:3000')
  server.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'))
  });
};

// io.on('connection', function(socket){
// 	console.log('a user conected');
// 	socket.on('disconnect', function(){
//     console.log('user disconnected');
// 	});
// });

io.on('connection', function(socket){
	socket.on('validate user', function(username){
		console.log("I'm entering validate user")
		console.log(username)
		connector.validateUserName(username, function(valid){

			console.log('validating results')
			socket.emit('validate result', valid);
				setInterval(function() {

				console.log('getting commits for ' + username)
				connector.getCommits(username, function(commits){
					console.log('commits ' + commits)
					socket.emit('commits', commits);
				});
			}, 5000);
		});
	});
});

// io.on('connection', function(socket) {
//   setInterval(function() {
//     socket.emit('updateCommit', 1000);
//   });
// });