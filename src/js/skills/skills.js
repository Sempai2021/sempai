$(document).ready(function(){
  
        
   $(window).scroll(function () {
   

    const big= window.matchMedia("(max-width: 2500px)")
        if (big.matches) {   
            if($(this).scrollTop() >500) {
              $('.prosent, .simpro').fadeIn(5000)
              $('.skills-progress__items95_item').addClass('anim-skills')
            } else {
             
              $('.skills-progress__items95_item').removeClass('anim-skills')
            }

            
        }

        const exl= window.matchMedia("(max-width: 1440px)")
        if (exl.matches) {   
            if($(this).scrollTop() >850) {
              $('.prosent, .simpro').fadeIn(5000)
              $('.skills-progress__items95_item').addClass('anim-skills')
            } else {
             
              $('.skills-progress__items95_item').removeClass('anim-skills')
            }
        }

        const large= window.matchMedia("(max-width: 1200px)")
        if (large.matches) {   
            if($(this).scrollTop() >890) {
              $('.prosent, .simpro').fadeIn(5000)
              $('.skills-progress__items95_item').addClass('anim-skills')
            } else {
            
              $('.skills-progress__items95_item').removeClass('anim-skills')
            }
        }
        const medium= window.matchMedia("(max-width: 992px)")
        if (medium.matches) {   
            if($(this).scrollTop() >900) {
              $('.prosent, .simpro').fadeIn(5000)
              $('.skills-progress__items95_item').addClass('anim-skills')
            } else {
             
              $('.skills-progress__items95_item').removeClass('anim-skills')
            }
        }

        const small= window.matchMedia("(max-width: 768px)")
        if (small.matches) {   
            if($(this).scrollTop() >2200) {
              $('.prosent, .simpro').fadeIn(5000)
              $('.skills-progress__items95_item').addClass('anim-skills')
            } else {
             
              $('.skills-progress__items95_item').removeClass('anim-skills')
            }
        }

        const exsm= window.matchMedia("(max-width: 576px)")
        if (exsm.matches) {   
            if($(this).scrollTop() >2550) {
              $('.prosent, .simpro').fadeIn(5000)
              $('.skills-progress__items95_item').addClass('anim-skills')
            } else {
             
              $('.skills-progress__items95_item').removeClass('anim-skills')
            }
        }
  

   
           

   })
    
  });



 