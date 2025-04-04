document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.js-dropdown__button');

    dropdownButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('active') == true) {
                button.classList.remove('active');
            } else {
                button.classList.add('active');
            }

            if (button.getAttribute('aria-expanded') == 'true') {
                button.setAttribute('aria-expanded', 'false');
            } else {
                button.setAttribute('aria-expanded', 'true');
            }

            if (
                button.nextElementSibling.classList.contains('active') == true
            ) {
                button.nextElementSibling.classList.remove('active');
            } else {
                button.nextElementSibling.classList.add('active');
            }
        });
    });
});
