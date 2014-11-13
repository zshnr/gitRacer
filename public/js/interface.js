$(document).ready(function(){
  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller({ barColor: '#fc6' });
  $('#bar4').barfiller({ barColor: '#900', duration: 3000 })

  $('#content h1').fadeIn(3000);

    $('#octocat').on('click', function() {
        $('#octocat').fadeOut(1500, function() {
          $('#octocat').remove();
          $('.sign-in').fadeIn(1500, function() {
        });
    });

      // $('#sign-in-button').on('click', function(event) {
      //   event.preventDefault();
      //     $('.sign-in').fadeOut(1500, function() {
      //     $('#bar1').delay(350).fadeIn();
      //     $('#bar2').delay(750).fadeIn();
      //     $('#bar3').delay(1250).fadeIn();
      //     $('#bar4').delay(1750).fadeIn();
      //     });
      // });
  });
});

var socket = io.connect('http://localhost')
socket.on('updateCommit', function(data) {
  $('.fill').attr()
});
