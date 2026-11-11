const VARIANT = 16;

document.addEventListener('DOMContentLoaded', () => {
    setupTheme();
    saveSystemInfo();
    showSystemInfo();
    loadComments();
    setupModal();
});

function saveSystemInfo() {
    const info = {
        'Браузер (userAgent)': navigator.userAgent,
        'Платформа': navigator.platform,
        'Мова': navigator.language,
        'Cookies увімкнені': navigator.cookieEnabled ? 'так' : 'ні',
        'Кількість ядер процесора': navigator.hardwareConcurrency,
        'Роздільна здатність екрана': `${screen.width}x${screen.height}`,
        'Часовий пояс': Intl.DateTimeFormat().resolvedOptions().timeZone
    };
    localStorage.setItem('systemInfo', JSON.stringify(info));
}

function showSystemInfo() {
    const footerInfo = document.getElementById('system-info');
    const info = JSON.parse(localStorage.getItem('systemInfo')) || {};

    footerInfo.innerHTML = '';
    for (const key in info) {
        const line = document.createElement('div');
        line.textContent = `${key}: ${info[key]}`;
        footerInfo.appendChild(line);
    }
}

async function loadComments() {
    const container = document.getElementById('comments-container');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const comments = await response.json();

        container.innerHTML = ''; 

        comments.forEach(comment => {
            const card = document.createElement('div');
            card.className = 'comment-card';

            const name = document.createElement('strong');
            name.textContent = comment.name;

            const email = document.createElement('span');
            email.textContent = ` (${comment.email})`;

            const body = document.createElement('p');
            body.textContent = comment.body;

            card.append(name, email, body);
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Помилка:', error);
        container.textContent = 'Не вдалося завантажити коментарі.';
    }
}

function setupModal() {
    const modal = document.getElementById('feedback-modal');
    const closeModalBtn = document.getElementById('close-modal');

    setTimeout(() => {
        modal.style.display = 'block';
    }, 60000);

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

function setupTheme() {
    const currentHour = new Date().getHours();
    document.body.className = (currentHour >= 7 && currentHour < 21) ? 'light' : 'dark';
    document.getElementById('theme-toggle').addEventListener('click', () => {
        document.body.className = document.body.className === 'light' ? 'dark' : 'light';
    });
}


