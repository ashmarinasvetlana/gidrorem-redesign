

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




  