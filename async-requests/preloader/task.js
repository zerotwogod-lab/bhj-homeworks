const loader = document.getElementById('loader');
const items = document.getElementById('items');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

// ---------- Отрисовка валют ----------
function renderCurrencies(valute) {
    items.innerHTML = '';

    Object.values(valute).forEach(currency => {
        const item = document.createElement('div');
        item.classList.add('item');

        item.innerHTML = `
            <div class="item__code">${currency.CharCode}</div>
            <div class="item__value">${currency.Value}</div>
            <div class="item__currency">руб.</div>
        `;

        items.appendChild(item);
    });
}

// ---------- Загрузка данных ----------
function loadCurrencies() {
    loader.classList.add('loader_active');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('currencies', JSON.stringify(data.response.Valute));
            renderCurrencies(data.response.Valute);
        })
        .catch(error => {
            console.error('Ошибка загрузки:', error);
        })
        .finally(() => {
            loader.classList.remove('loader_active');
        });
}

// ---------- Кэш из localStorage ----------
const cached = localStorage.getItem('currencies');
if (cached) {
    renderCurrencies(JSON.parse(cached));
}

loadCurrencies();