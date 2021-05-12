$(function() {
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});


$(".theTarget").skippr({
  transition : 'fade',
  speed : 1000,
  easing : 'easeOutQuart',
  navType : 'block',
  childrenElementType : 'div',
  arrows : true,
  autoPlay : true,
  autoPlayDuration : 2000,
  keyboardOnAlways : false,
  hidePrevious : false
});