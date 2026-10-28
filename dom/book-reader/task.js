// Находим книгу
const book = document.getElementById('book');

// ---------- Размер шрифта ----------
const fontSizeControls = document.querySelectorAll('.font-size');

fontSizeControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault(); // отменяем переход по ссылке href=""

        // Снимаем активный класс со всех кнопок размера
        fontSizeControls.forEach(item => item.classList.remove('font-size_active'));

        // Ставим активный класс на нажатую
        control.classList.add('font-size_active');

        // Убираем все классы размера у книги
        book.classList.remove('book_fs-small', 'book_fs-big');

        // Добавляем нужный класс в зависимости от data-size
        const size = control.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
        // если data-size нет — обычный размер, классы не добавляем
    });
});

// ---------- Цвет текста (бонус) ----------
const textColorControls = document.querySelectorAll('.text_color_black, .text_color_gray, .text_color_whitesmoke');

textColorControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        textColorControls.forEach(item => item.classList.remove('color_active'));
        control.classList.add('color_active');

        book.classList.remove('book_color-black', 'book_color-gray', 'book_color-whitesmoke');

        const color = control.dataset.textColor;
        if (color) {
            book.classList.add(`book_color-${color}`);
        }
    });
});

// ---------- Цвет фона (бонус) ----------
const bgColorControls = document.querySelectorAll('.bg_color_black, .bg_color_gray, .bg_color_white');

bgColorControls.forEach(control => {
    control.addEventListener('click', (event) => {
        event.preventDefault();

        bgColorControls.forEach(item => item.classList.remove('color_active'));
        control.classList.add('color_active');

        book.classList.remove('book_bg-black', 'book_bg-gray', 'book_bg-white');

        const color = control.dataset.bgColor;
        if (color) {
            book.classList.add(`book_bg-${color}`);
        }
    });
});