window.addEventListener('DOMContentLoaded', function () {
    AOS.init({

  duration: 1200,
disable: 'mobile'

		});

		var swiper = new Swiper('.swiper-container', {
			slidesPerView: '3',
			spaceBetween: 10,
			autoHeight: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
		});
        
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        alertSend = document.querySelector('.alert'),
        alertFail = document.querySelector('.fail');


    /*const path = {
        feedbackForm: './server.php'
    };*/

    const postData = async (url, data) => {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(item);

            postData('./smail.php', formData)
                .then(res => {

                    console.log(res);

                    alertSend.style.display = 'block';

                })
                .catch(() => {

                    alertFail.style.display = 'block';

                })


                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        alertSend.style.display = 'none';
                        alertFail.style.display = 'none';
                    }, 3000);

                });
        });



    });

const toTop = document.getElementById('toTop');

window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
};

toTop.addEventListener('click', function () {
    var smoothJumpUp = function () {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -50);
            setTimeout(smoothJumpUp, 3);
        }
    };

    smoothJumpUp();

});

// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
    animationTime = 300,
    framesCount = 20;

anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
        // убираем стандартное поведение
        e.preventDefault();

        // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
        let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

        // запускаем интервал, в котором
        let scroller = setInterval(function () {
            // считаем на сколько скроллить за 1 такт
            let scrollBy = coordY / framesCount;

            // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
            // и дно страницы не достигнуто
            if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                // то скроллим на к-во пикселей, которое соответствует одному такту
                window.scrollBy(0, scrollBy);
            } else {
                // иначе добираемся до элемента и выходим из интервала
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
            // время интервала равняется частному от времени анимации и к-ва кадров
        }, animationTime / framesCount);
    });
});
		

});