const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    // Находим, какой блок уже активен, и начинаем с него
    let currentIndex = Array.from(cases).findIndex(
        item => item.classList.contains('rotator__case_active')
    );
    // Если активного нет — начинаем с нуля
    if (currentIndex === -1) currentIndex = 0;

    setInterval(() => {
        cases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % cases.length;
        cases[currentIndex].classList.add('rotator__case_active');
    }, 1000);
});