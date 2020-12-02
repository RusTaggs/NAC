$(document).ready(function () {
    const swiper1 = document.querySelector('.slider1');
    const swiper2 = document.querySelector('.slider2');
    const swiper3 = document.querySelector('.slider3');
    
    let slider1 = new Swiper(swiper1, {
                    
        navigation: {
          nextEl: '.nxt-1',
          prevEl: '.prv-1',
        },
        
    });
    let slider2 = new Swiper(swiper2, {
                    
        navigation: {
          nextEl: '.nxt-2',
          prevEl: '.prv-2',
        },
        
    });
    let slider3 = new Swiper(swiper3, {
                    
        navigation: {
          nextEl: '.nxt-3',
          prevEl: '.prv-3',
        },
        
    });
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
               

        
        //swiper init 
            
            
            
            
        //swiper init 
        slider1.update();
        slider2.update();
        slider3.update();
        
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
        
        //swiper init 
        
        var id = $(this).attr('data-id'),
            content = $('.right-item[data-id="' + id + '"]');


        
        
        $('.offer-info.active').find('.left-item.active').removeClass('active');
        
        $(this).addClass('active');
        


        $('.right-item.active').removeClass('active').fadeOut('fast');
        content.fadeIn().addClass('active');
        
            
        
        slider1.update();
        slider2.update();
        slider3.update();
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

$(document).ready(function() {

    $('.footer-form').submit(function(){
        var that = $(this);
        var data = that.serialize();
        
        var sendBtn = $(this).find('.button');
        $.ajax({
            type: 'post',
            url: '/ajax/form-obr.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(true);
                            
                reset ();

            },
            error:function(e){
              console.log(false);
                            
            }
        });
        return false;

    });

    $('.call-form').submit(function(){
        var that = $(this);
        var data = that.serialize();
        
        var sendBtn = $(this).find('.button');
        $.ajax({
            type: 'post',
            url: '/ajax/form-call.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(true);
                            
                reset ();

            },
            error:function(e){
              console.log(false);
                            
            }
        });
        return false;

    })


});