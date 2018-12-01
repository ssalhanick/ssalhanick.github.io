$(document).ready(function() {

   function mobileNav() {
      if (!$('nav').hasClass('active')) {
         $('nav').addClass('active');
      } else {
         $('nav').removeClass('active');
      }
   }

   $('.mobile-modal').click(mobileNav);

   $('#about .slideshow').slick({
      lazyLoad: 'ondemand',
      dots: false,
      infinite: true,
      speed: 300,
      variableWidth: true,
		adaptiveHeight: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [{
            breakpoint: 768,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 3
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               centerMode: true,
               centerPadding: '40px',
               slidesToShow: 1
            }
         }
      ]
   });


});
