$( document ).ready(function() {

	function mobileNav(){
			if (! $('nav').hasClass('active')) {
				$('nav').addClass('active');
			} else {
				$('nav').removeClass('active');
			}
		}

		$('.mobile-modal').click(mobileNav);




});
