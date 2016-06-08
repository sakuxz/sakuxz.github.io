require('index.scss');

$(function() {
  $('header .menu li').click(function(event) {
    $('html,body').animate({
            scrollTop: $( $(this).data('target') ).offset().top},
            'slow');
  });
});
