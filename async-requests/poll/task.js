const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const url = 'https://students.netoservices.ru/nestjs-backend/poll';

let currentPollId = null;

// ---------- Загрузка опроса ----------
function loadPoll() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            currentPollId = data.id;

            // Заголовок опроса
            pollTitle.textContent = data.data.title;

            // Очищаем контейнер с ответами
            pollAnswers.innerHTML = '';

            // Создаём кнопки для каждого ответа
            data.data.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.classList.add('poll__answer');
                button.textContent = answer;

                // По клику — отправляем голос и показываем результаты
                button.addEventListener('click', () => {
                    vote(index);
                });

                pollAnswers.appendChild(button);
            });
        })
        .catch(error => {
            console.error('Ошибка загрузки опроса:', error);
        });
}

// ---------- Голосование и показ результатов (бонус) ----------
function vote(answerIndex) {
    const body = `vote=${currentPollId}&answer=${answerIndex}`;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        body: body
    })
        .then(response => response.json())
        .then(data => {
            // Показываем результаты голосования
            showResults(data.stat);
        })
        .catch(error => {
            console.error('Ошибка голосования:', error);
            // Если бонус не нужен — можно просто alert
            alert('Спасибо, ваш голос засчитан!');
        });
}

// ---------- Отрисовка результатов ----------
function showResults(stat) {
    // Считаем общее число голосов
    const totalVotes = stat.reduce((sum, item) => sum + item.votes, 0);

    // Очищаем контейнер
    pollAnswers.innerHTML = '';

    // Для каждого ответа показываем строку с процентом
    stat.forEach(item => {
        const percent = totalVotes > 0
            ? Math.round((item.votes / totalVotes) * 100)
            : 0;

        const result = document.createElement('div');
        result.classList.add('poll__result');
        result.textContent = `${item.answer}: ${percent}% (${item.votes})`;

        pollAnswers.appendChild(result);
    });
}

// Запускаем загрузку опроса при открытии страницы
loadPoll();