$( document ).ready(function() {

	$('#about .slideshow').slick({
     dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  centerMode: true,
  variableWidth: true
   });

	function mobileNav(){
			if (! $('nav').hasClass('active')) {
				$('nav').addClass('active');
			} else {
				$('nav').removeClass('active');
			}
		}

		$('.mobile-modal').click(mobileNav);




});
