document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });

    const btn = document.querySelector('#language-switch');
    const language = document.querySelector('#languages-dropdown');
    const hov = document.querySelector('#hov');

    btn.addEventListener('click', () => {
        if (language.classList.contains('active') == true) {
            language.classList.remove('active');
        } else {
            language.classList.add('active');
        }
        if (btn.classList.contains('active') == true) {
            btn.classList.remove('active');
        } else {
            btn.classList.add('active');
        }
        if (btn.getAttribute('aria-expanded') == 'true') {
            btn.setAttribute('aria-expanded', 'false');
        } else {
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});
