$(document).ready(function() {
    $('.ryu').on('mouseenter',function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    });
    $('.ryu').mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    });
    $('.ryu').mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-cool').hide();
        $('.ryu-throwing').show();
        $('.hadouken').show().finish().animate(
          {'left': '900px'},
          500,
          function() {
            $('.hadouken').hide();
            $('.hadouken').css('left', '475px');
          }
        );
    });
    $('.ryu').mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });
    $('body').keydown(function(e) {
        e.preventDefault();
        if (e.which == 88) {
            $('.ryu-still').hide();
            $('.ryu-cool').show();
            $('.ryu-ready').hide();
            $('.ryu-throwing').hide();
        }
    });
    $('body').keyup(function(e) {
        e.preventDefault();
        if (e.which == 88) {
            $('.ryu-ready').show();
            $('.ryu-cool').hide();
            $('.ryu-throwing').hide();
            $('.ryu-still').hide();
        }
    });
    function playHadouken () {
      $('#hadouken-sound')[0].volume = 0.5;
      $('#hadouken-sound')[0].load();
      $('#hadouken-sound')[0].play();
    }
});
