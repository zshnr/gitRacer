function GhApiConnector(){
  this.client_id = process.env.GITHUB_CLIENT_ID;
  this.client_secret = process.env.GITHUB_CLIENT_SECRET;
  this.apiAuthorizationKey = process.env.GITHUB_AUTHORIZATION_KEY;
  var GitHubCommits = require("github-commits");
  this.github = new GitHubCommits(this.apiAuthorizationKey);
};


GhApiConnector.prototype.validateUserName = function(username, callback) {
  var githubUserApi = require('github');
  var githubUser = new githubUserApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    timeout: 5000
  });

  githubUser.authenticate({
    type: "oauth",
    key: this.client_id,
    secret: this.client_secret
  });

  githubUser.user.getFrom({user: username}, function(err, data){
    if (err) {
      console.log("Error")
      callback(0);
    }
    else {
      console.log("OK")
      callback(1);
    }
  });
};

GhApiConnector.prototype.getCommits = function(username, callback) {
  // var GitHubCommits = require("github-commits");
  console.log('right here')
  // var date = new Date();
  // var time = date.toISOString();
  var commits = this.github.forUser(username)
              .commitsSince("2014-11-14T23:59:59Z")
              .sumCommits(function(sum){
                console.log(sum);
               callback(sum);
              });
};

module.exports = GhApiConnector;
