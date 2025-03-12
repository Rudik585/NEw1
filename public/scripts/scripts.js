document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.querySelector('#language-button');
    const languageDropdown = document.querySelector('#languages-dropdown');
    const profileButton = document.querySelector('#avatar-button');
    const avatarDropdown = document.querySelector('#avatar-dropdown');
    const messagesButton = document.querySelector('#messages-button');
    const messagesDropdown = document.querySelector('#messages-dropdown');
    const notificationButton = document.querySelector('#notification-button');
    const notificationDropdown = document.querySelector(
        '#notification-dropdown'
    );
    const settingsButton = document.querySelector('#settings-button');
    const settingsDropdown = document.querySelector('#settings-dropdown');

    languageButton.addEventListener('click', () => {
        if (languageDropdown.classList.contains('active') == true) {
            languageDropdown.classList.remove('active');
        } else {
            languageDropdown.classList.add('active');
        }
        if (languageButton.classList.contains('active') == true) {
            languageButton.classList.remove('active');
        } else {
            languageButton.classList.add('active');
        }
        if (languageButton.getAttribute('aria-expanded') == 'true') {
            languageButton.setAttribute('aria-expanded', 'false');
        } else {
            languageButton.setAttribute('aria-expanded', 'true');
        }
    });

    profileButton.addEventListener('click', () => {
        if (avatarDropdown.classList.contains('avatar-active') == true) {
            avatarDropdown.classList.remove('avatar-active');
        } else {
            avatarDropdown.classList.add('avatar-active');
        }
        if (profileButton.classList.contains('avatar-active') == true) {
            profileButton.classList.remove('avatar-active');
        } else {
            profileButton.classList.add('avatar-active');
        }
        if (profileButton.getAttribute('aria-expanded') == 'true') {
            profileButton.setAttribute('aria-expanded', 'false');
        } else {
            profileButton.setAttribute('aria-expanded', 'true');
        }
    });
    messagesButton.addEventListener('click', () => {
        if (messagesDropdown.classList.contains('header-active') == true) {
            messagesDropdown.classList.remove('header-active');
        } else {
            messagesDropdown.classList.add('header-active');
        }
        if (messagesButton.getAttribute('aria-expanded') == 'true') {
            messagesButton.setAttribute('aria-expanded', 'false');
        } else {
            messagesButton.setAttribute('aria-expanded', 'true');
        }
    });
    notificationButton.addEventListener('click', () => {
        if (notificationDropdown.classList.contains('header-active') == true) {
            notificationDropdown.classList.remove('header-active');
        } else {
            notificationDropdown.classList.add('header-active');
        }
        if (notificationButton.getAttribute('aria-expanded') == 'true') {
            notificationButton.setAttribute('aria-expanded', 'false');
        } else {
            notificationButton.setAttribute('aria-expanded', 'true');
        }
    });
    settingsButton.addEventListener('click', () => {
        if (settingsDropdown.classList.contains('header-active') == true) {
            settingsDropdown.classList.remove('header-active');
        } else {
            settingsDropdown.classList.add('header-active');
        }
        if (settingsButton.getAttribute('aria-expanded') == 'true') {
            settingsButton.setAttribute('aria-expanded', 'false');
        } else {
            settingsButton.setAttribute('aria-expanded', 'true');
        }
    });
});
