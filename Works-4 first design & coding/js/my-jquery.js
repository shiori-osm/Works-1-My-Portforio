
$(document).ready(function() {
  $('header').hide().fadeIn(2500);
  $('header-sp').hide().fadeIn(2500);
});


jQuery(function ($) {
  const fadeIn = $('.fade-in');
  $(window).scroll(function () {
    $(fadeIn).each(function () {
      const offset = $(this).offset().top;
      const scroll = $(window).scrollTop(); 
      const windowHeight = $(window).height();
      if (scroll > offset - windowHeight + 150) {
        $(this).addClass("scroll-in");
      }
    });
  });
});

