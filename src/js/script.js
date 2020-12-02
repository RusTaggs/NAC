// Сообщение об отправке формы
function alertMessage(btn, data, className) {
    $(btn).addClass(className);
    let text = $(btn).text();
    data = 'Отправлено';
    if (className == 'error') {
        data = 'Ошибка';
        
    } 
    else if(className == 'success'){
        data = 'Отправлено';
        
    }
    $(btn).text(data);
    function sayBy() {
        $(btn).removeClass(className);
        $(btn).text(text);
    }
    setTimeout(sayBy, 5000);
}

function reset () {
    $('textarea').val('');
    $('input[type=text]').val('');
};

$(document).ready(function() {

    $('.footer-form').submit(function(){
        var that = $(this);
        var data = that.serialize();
		
		var sendBtn = $(this).find('.button');
        $.ajax({
            type: 'post',
            url: '/ajax/form-rev.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(true);
								alertMessage(sendBtn, data, 'success');
                reset ();

            },
            error:function(e){
              console.log(false);
							alertMessage(sendBtn, data, 'error');
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
            url: '/ajax/form-rev.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(true);
								alertMessage(sendBtn, data, 'success');
                reset ();

            },
            error:function(e){
              console.log(false);
							alertMessage(sendBtn, data, 'error');
            }
        });
        return false;

    })


});