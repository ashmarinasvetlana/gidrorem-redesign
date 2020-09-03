

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});

$('input[type="tel"]').mask("+7 (999) 999-99-99");


$('form').submit(function(event) {
    event.preventDefault();
    $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        alert("Сообщение успешно отправлено, Мы Вам перезвоним");
        $("form").trigger("reset");
        $(".popup").hide();
    });
    return false;
});

 
$(function() {
 
    $(window).scroll(function() {
     
    if($(this).scrollTop() != 0) {
     
    $('#toTop').fadeIn();
     
    } else {
     
    $('#toTop').fadeOut();
     
    }
     
    });
     
    $('#toTop').click(function() {
     
    $('body,html').animate({scrollTop:0},800);
     
    });
     
    });
     
     


  