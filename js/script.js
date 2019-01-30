$(document).ready(function() {

	// Used SLick Js by Ken Wheeler: http://kenwheeler.github.io/slick/

	// activating slide shows
var mobileSize = 971;
var pastWidth = $(window).width();
$(window).resize(function(){
  var width = $(this).width();
  if((width < mobileSize && pastWidth > mobileSize) || (width > mobileSize && pastWidth < mobileSize)) {
    $('.nav1').removeClass('small_nav');
  }
  pastWidth = width;
});



	$(".menu").click(function(){
  $(".nav1").toggleClass("small_nav");
  if ( $('.h_menu').attr('src') == 'images/ham.png') {
    $('.h_menu').attr('src', 'images/close.png');
} else {
    $('.h_menu').attr('src', 'images/ham.png');
}
  });
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

});
