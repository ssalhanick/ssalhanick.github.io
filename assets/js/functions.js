$( document ).ready(function() {

	$('#about .slideshow').slick({
     lazyLoad: 'ondemand',
	  autoplay: true,
     autoplaySpeed: 2000,
     slidesToShow: 1,
     adaptiveHeight: true,
	  dots: true,
     infinite: true
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
