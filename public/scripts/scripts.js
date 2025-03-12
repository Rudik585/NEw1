document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.button');
    button.addEventListener('click', () => {
        alert('Button was clicked!');
    });

    const btn = document.querySelector('#language-switch');
    const language = document.querySelector('#languages-dropdown');
    const avatar = document.querySelector('#avatar');
    const menu = document.querySelector('#avatar-details');
    const messages = document.querySelector('#messages');
    const messagesMenu = document.querySelector('#messages-menu');
    const notification = document.querySelector('#notification');
    const notificationMenu = document.querySelector('#notification-menu');
    const settings = document.querySelector('#settings');
    const settingsMenu = document.querySelector('#settings-menu');

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

    avatar.addEventListener('click', () => {
        if (menu.classList.contains('avatar-active') == true) {
            menu.classList.remove('avatar-active');
        } else {
            menu.classList.add('avatar-active');
        }
        if (avatar.classList.contains('avatar-active') == true) {
            avatar.classList.remove('avatar-active');
        } else {
            avatar.classList.add('avatar-active');
        }
        if (avatar.getAttribute('aria-expanded') == 'true') {
            avatar.setAttribute('aria-expanded', 'false');
        } else {
            avatar.setAttribute('aria-expanded', 'true');
        }
    });
    messages.addEventListener('click', () => {
        if (messagesMenu.classList.contains('header-active') == true) {
            messagesMenu.classList.remove('header-active');
        } else {
            messagesMenu.classList.add('header-active');
        }
    });
    notification.addEventListener('click', () => {
        if (notificationMenu.classList.contains('header-active') == true) {
            notificationMenu.classList.remove('header-active');
        } else {
            notificationMenu.classList.add('header-active');
        }
    });
    settings.addEventListener('click', () => {
        if (settingsMenu.classList.contains('header-active') == true) {
            settingsMenu.classList.remove('header-active');
        } else {
            settingsMenu.classList.add('header-active');
        }
    });
});
