// Находим все блоки, которые должны появляться
const reveals = document.querySelectorAll('.reveal');

// Функция проверки: находится ли элемент в поле зрения
function checkReveal() {
    // Проходим по всем блокам
    reveals.forEach(reveal => {
        // Получаем координаты элемента относительно окна браузера
        const revealTop = reveal.getBoundingClientRect().top;
        // Высота окна браузера
        const windowHeight = window.innerHeight;

        // Если верх элемента меньше высоты окна (элемент показался),
        // добавляем класс активности
        if (revealTop < windowHeight) {
            reveal.classList.add('reveal_active');
        }
    });
}

// Вызываем функцию один раз при загрузке, чтобы показать блоки, которые уже видны
checkReveal();

// Добавляем слушатель события прокрутки
window.addEventListener('scroll', checkReveal);