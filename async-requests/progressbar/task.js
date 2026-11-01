const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    // Отслеживаем прогресс загрузки (именно upload, а не сам запрос)
    xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            progress.value = event.loaded / event.total;
        }
    });

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
});