function GhApiConnector(){
  this.client_id = process.env.GITHUB_CLIENT_ID;
  this.client_secret = process.env.GITHUB_CLIENT_SECRET;
  //this.gitUrlUsers = 'https://api.github.com/users/';
   var GitHubCommits = require("github-commits");

  var gitHubUrl = "https://api.github.com";
  var apiAuthorizationKey = 'bf26f98fce6025767afb543fe78da47096a5d347';

  //Can specify the GitHub api authorization key for the private or enterprise instance
  this.github = new GitHubCommits(apiAuthorizationKey,gitHubUrl);
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
  var commits = this.github.forUser(username)
              .commitsSince("2014-11-11T23:59:59Z")
              .sumCommits(function(sum){
                console.log(sum);
               callback(sum);
              });
};

// GhApiConnector.prototype.getCommits = function(username) {

//   var ghrepouri = gitUrlUsers + username + '/repos?per_page=100&client_id='+client_id+'&client_secret='+client_secret;
  
//   $.getJSON(ghrepouri, function(repositories){
//     if(repositories.length === 0){
//       return -1;
//     }
//     else{
//       var commitsNumber=0;
//       $.each(repositories, function (index){
//         var repoName =repositories[index].name;
//         var noMoreEvents = false;
//         for(var i=1; i < 11; i++){
//           $.getJSON('https://api.github.com/repos/'+ username +'/'+repoName+'/events?page='+ i +'&client_id='+this.client_id+'&client_secret='+ this.client_secret ,
//           function (events){
//             if(events.length === 0 ){
//               noMoreEvents = true;
//             }
//             else{
//               $.each(events, function (index){
//                 if(events[index]['type'] == 'PushEvent'){
//                   commits = events[index]['payload']['commits'];
//                   commitsNumber += commits.length;
//                 }
//               });
//             }
//           });
//           if(noMoreEvents) break;
//         }
//      });
//      return commitsNumber;
//     }
//   }
// };

module.exports = GhApiConnector;







// $('#getghusername').on('click', function(e) {
//     e.preventDefault();
//     var username = $('#ghusername').val();
//     var source = $('#newtemplate').html();    // this is the id of the <template>
//     var template = Handlebars.compile(source);
 
//     var ghprofuri = 'https://api.github.com/users/' + username + '?client_id=105a140f1cf546a14c96&client_secret=0720e817925e73b3f387ba2dcbe979b429a88309'
//     var ghrepouri = 'https://api.github.com/users/' + username + '/repos?per_page=100&client_id=105a140f1cf546a14c96&client_secret=0720e817925e73b3f387ba2dcbe979b429a88309'
//     getData();
 
//     $('#ghusername').val('')
 
 
//       function getData(){
//         $.ajax({
//           url: ghprofuri,
//           type: 'GET',
//           data_type: 'json',
//           success: function(githubProfile){
//                 console.log(githubProfile);
//                   $('#profile').append(template(githubProfile));
//                   numberOfRepos = githubProfile['public_repos'];
//                   //public_repos
//                 },
//           error: function() { alert("Profile not found!"); }
//         });
 
//         var commits;
 
//         $.getJSON(ghrepouri, function(json){
//            repositories = json;
//            var temp = getCommits();
//         });
 
//         var commitsNumber=0;
//         var commitsHTML;
 
//         function getCommits() {
//           if(repositories.length === 0) {
//               commitsHTML = '<p>No commits!</p>';
//               $('#' + username + 'commits').html(commitsHTML);
//             }
//             else
//             {
//               $.each(repositories, function (index){
//                 var client_id ='105a140f1cf546a14c96';
//                 var client_secret = '0720e817925e73b3f387ba2dcbe979b429a88309';
//                 var repoName =repositories[index].name;
//                 var noMoreEvents = false;
//                 for(var i=1; i < 11; i++){
//                   $.getJSON('https://api.github.com/repos/'+ username +'/'+repoName+'/events?page='+ i +'&client_id='+client_id+'&client_secret='+ client_secret ,
//                   function (events){
//                     if(events.length === 0 ){
//                       noMoreEvents = true;
//                     }
//                     else{
//                       var commitsPerRepo=0;
//                       $.each(events, function (index){
//                         if(events[index]['type'] == 'PushEvent'){
//                           commits = events[index]['payload']['commits'];
//                           commitsNumber += commits.length;
//                           commitsPerRepo +=commits.length;
//                         }
//                         console.log('I have ' + commitsPerRepo + ' commits for repo:' + repositories[index].name)
//                       });
                      
//                       commitsHTML = '<p>'+commitsNumber+' commits!</p>';
//                       $('#'+username+'commits').html(commitsHTML);
//                     }
//                   });
//                   if(noMoreEvents) break;
//                 }
//               });
//             }
//           }
//         }
//     }); 