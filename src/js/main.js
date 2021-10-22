

$(document).ready(function () {
    $(window).scroll(function () {



        const big= window.matchMedia("(max-width: 2500px)")
        if (big.matches) {   
            if($(this).scrollTop() >500) {
                $('.pageup').show()
            } else {
                $('.pageup').hide()
            }

            
        }
        
        const exl= window.matchMedia("(max-width: 1440px)")
        if (exl.matches) {   
            if($(this).scrollTop() >500) {
                $('.pageup').show()
            } else {
                $('.pageup').hide()
            }
        }
        const large= window.matchMedia("(max-width: 1200px)")
        if (large.matches) {   
            if($(this).scrollTop() >500) {
                $('.pageup').show()
            } else {
                $('.pageup').hide()
            }
        }
        const medium= window.matchMedia("(max-width: 992px)")
        if (medium.matches) {   
            if($(this).scrollTop() >1000) {
                $('.pageup').show()
            } else {
                $('.pageup').hide()
            }
        }
        const small= window.matchMedia("(max-width: 768px)")
        if (small.matches) {   
            if($(this).scrollTop() >2100) {
                $('.pageup').show()
            } else {
                $('.pageup').hide()
            }
        }
        const exsm= window.matchMedia("(max-width: 576px)")
        if (exsm.matches) {   
            if($(this).scrollTop() >2150) {
                $('.pageup').show()
            } else {
                $('.pageup').hide()
            }
        }

    // skills
   

       })
});

// 

    


