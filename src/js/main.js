

$(document).ready(function () {
    //SWIPER
    const slider1 = document.querySelector('.slider1');
    const slider2 = document.querySelector('.slider2');
    const slider3 = document.querySelector('.slider3');

    let mySwiper1 = new Swiper(slider1, {
        // Optional parameters
       // direction: 'vertical',
        // Navigation arrows
        navigation: {
          nextEl: '.nxt-1',
          prevEl: '.prv-1',
        },
        
    });
    let mySwiper2 = new Swiper(slider2, {
        // Optional parameters
       // direction: 'vertical',
        // Navigation arrows
        navigation: {
          nextEl: '.nxt-2',
          prevEl: '.prv-2',
        },
        
    });
    let mySwiper3 = new Swiper(slider3, {
        // Optional parameters
       // direction: 'vertical',
        // Navigation arrows
        navigation: {
          nextEl: '.nxt-3',
          prevEl: '.prv-3',
        },
        
    });
    

       //offers block

       //ARROW UP/DOWN
    $('.show-more').click(function(){
        $(this).closest(".offers-main").find(".offer-arrow").removeClass('rotate'); // close all other

        $(this).closest(".main-item").find(".offer-arrow").addClass('rotate'); // open current 

    });

   //INFO TABS
    $('.show-more').click(function () {
        
        var id = $(this).attr('data-tab'),
            content = $('.offer-info[data-tab="' + id + '"]');
            
                $('.main-item.active').removeClass('active');
                $(this).parent('.main-item').addClass('active');
                $('.offer-info.active').removeClass('active').slideUp();
                content.slideDown().addClass('active').css('display','flex');
               

        $('.close-info').click(function () {
            content.slideUp().removeClass('active');
            $('.main-item.active').removeClass('active');
            $('.show-more').closest(".offers-main").find(".offer-arrow").removeClass('rotate'); // close all other
        });
        //swiper init update
        mySwiper1.update();
        mySwiper2.update();
        mySwiper3.update();
    });

    $('.show-more.mobile').click(function () {
        var id = $(this).attr('data-tab2'),
            content = $('.offer-info.mobile[data-tab2="' + id + '"]');
        

           
                $('.offer-info.mobile').slideUp();
                $(this).parent('.main-item.mobile.active').removeClass('active');
                
                $('.show-more').closest(".offers-main").find(".offer-arrow").removeClass('rotate'); // close all other 
                $('.show-more').closest(".offers-main").find(".offer-arrow").removeClass('rotate'); // close all other 

                if(!$(this).next().is(':visible')){
                    $(this).next().slideDown();
                    $(this).parent('.main-item.mobile').addClass('active');
                    $(this).closest(".main-item").find(".offer-arrow").addClass('rotate'); // open current 

                }

         
            

        
    });
    $(".offer-info.mobile").hide();
    //INFO TABS MOBILE
    $('.left-item').click(function () {
        var id = $(this).attr('data-id'),
            content = $('.right-item[data-id="' + id + '"]');

        $('.left-item.active').removeClass('active');
        $(this).addClass('active');
        


        $('.right-item.active').removeClass('active').fadeOut('fast');
        content.fadeIn().addClass('active');
        //swiper init update
        mySwiper1.update();
        mySwiper2.update();
        mySwiper3.update();
    });
      
    //MAIN MENU
    $('.sub-about').click(function(){
        $('.sub-about-list').slideToggle();
    });

   

    //close cookie
    $('.close-cookie').click(function () {
        $('.cookie, .cookie-mobile').fadeOut();
    });


    //menu mobile fixed
    $('.toggler').click(function () {
        $('body').toggleClass('stopper');
    });



    //menu desktop
    $('.menu li').hover(function () {


        clearTimeout($.data(this, 'timer'));

        $('ul', this).stop(true, true).fadeIn(400).css("display", 'flex');
        $('.sub', this).addClass('active');
    }, function () {

        $.data(this, 'timer', setTimeout($.proxy(function () {

            $('ul', this).stop(true, true).fadeOut(400);
            $('.sub', this).removeClass('active');
        }, this), 100));

    });




});