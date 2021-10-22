$(document).ready(function () {
    $('.header-gallery a').click(function(e) {
        $('.photo').show()
        if($('.photo img').attr('src') !== $(this).attr('href')) {
            $('.photo img').hide().attr('src', $(this).attr('href')).fadeIn(1000)
            
        }
        $('.photo-close').show()
        e.preventDefault()
    })
    $('.photo-close').on('click', function() {
        $(this).toggle()
        $('.photo').toggle()
        
    })
    $('.header-nav').fadeIn(1200)

    // $(window).scroll(function () {
    
    //     if($(this).scrollTop() > 500) {
            
    //         $('.photo').hide(2000)
    //         $('.photo-close').hide()
    //         }   
               
    
    //    })

});
