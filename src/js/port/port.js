$(document).ready(function () {
    // $(window).scroll(function () {
    //     if($(this).scrollTop() > 1450) {     
    //         $('.tortslogo').addClass('port-logo')
    //         $('.tortslogo').fadeIn(3000)       
    //         }   
    //    })

       $('.port-slide').slick({
        dots: true, 
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
         arrows:false,
        //  autoplay:true,
        //  autoplaySpeed: 2000,
       });

       

      
    
       
});


 //PORTFOLIO.HTML / TABS
(function($) {
    $(function() {
      
      $('.tabs__caption').on('click', 'div:not(.active)', function() {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
      
    });
    })(jQuery);



  // PORTFOLIO SLIDE
  $(document).ready(function(){
    $('.ports-slides').slick(
      {
        dots:false,
        prevArrow: '<button type="button" class="ports-prev"><img src="icons/main-portfolio/prev.svg"></button>',
        nextArrow: '<button type="button" class="ports-next"><img src="icons/main-portfolio/next.svg"></button>',
      }
    );

    $('.ports-prev').addClass("ports-prevanim")
    $('.ports-next').addClass("ports-prevanim")
  });
