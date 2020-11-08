

$(document).ready(function(){
    // $('.show-more').click(function(){
    //     $(this).closest(".offers-main").find(".offer-arrow").removeClass('rotate'); // close all other
        
    //     $(this).closest(".main-item").find(".offer-arrow").addClass('rotate'); // open current 
        
    // });
    
    $('.show-more').click(function() {
        var id = $(this).attr('data-tab'),
            content = $('.offer-info[data-tab="'+ id +'"]');
        
        $('.show-more.active').removeClass('active');
        $(this).addClass('active');
        
        $('.offer-info.active').removeClass('active').slideUp();
        content.slideDown().addClass('active');
        
        $('.close-info').click(function(){
            content.slideUp().removeClass('active');
        });
     });
     
    $('.close-cookie').click(function(){
        $('.cookie').fadeOut();
    });

    $('.toggler').click(function(){
        $('body').toggleClass('stopper');
    });
	

    

    $('.menu li').hover(function () {
        

             clearTimeout($.data(this,'timer'));
            
             $('ul',this).stop(true,true).fadeIn(400).css("display",'flex');
             $('.sub', this).addClass('active');
          }, function () {
        
            $.data(this,'timer', setTimeout($.proxy(function() {
        
              $('ul',this).stop(true,true).fadeOut(400);
                $('.sub',this).removeClass('active');
            }, this), 100));
    
          });
    
          
        

});