$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 350) {
    $(".header").addClass("transparent");
  } else {
    $(".header").removeClass("transparent");
  }
});