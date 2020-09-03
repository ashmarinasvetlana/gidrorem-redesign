function sendForm(e) {
    e.preventDefault();
    var s = new FormData(e.target),
        t = new XMLHttpRequest;
    t.open("POST", "mail.php"), t.send(s);
    for (var a = statusMessages.length; a--;) tempMessages[a] = statusMessages[a].innerHTML;
    t.onreadystatechange = function () {
        if (t.readyState < 4)
            for (var e = statusMessages.length; e--;) statusMessages[e].innerHTML = message.loading;
        else if (t.status < 300) {
            for (e = statusMessages.length; e--;) {statusMessages[e].innerHTML = message.success;
        } 		setTimeout(function () {
            for (var i = inputs.length; i--;) {
                inputs[i].value = ""
            }
        }, 3000)
    } else
            for (e = statusMessages.length; e--;) statusMessages[e].innerHTML = message.failure;
        setTimeout(function () {
            for (var e = statusMessages.length; e--;) statusMessages[e].innerHTML = tempMessages[e]
        }, 3000)
    }}



var forms = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input"),
    statusMessageMain = document.querySelector(".form__btn"),
    statusMessages = [];
    statusMessages = [statusMessageMain];
for (var tempMessages = [], message = {
        loading: "Идет отправка данных...",
        success: "<span style='color: #089B4C;'>Отправлено</span>",
        failure: "<span style='color: red;'>Ошибка передачи данных!<br>Попробуйте еще раз!</span>"
    }, i = forms.length; i--;) forms[i].addEventListener("submit", function (e) {
    sendForm(e)
});