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
//
// const $menu = $('nav');
//
// $(document).mouseup(function(e) {
//    if (!$menu.is(e.target) // if the target of the click isn't the container...
//       &&
//       $menu.has(e.target).length === 0) // ... nor a descendant of the container
//    {
//       $menu.removeClass('active');
//    }
// });
//
// $('.mobile-modal').on('click', () => {
//    $('nav').toggleClass('active');
// });
