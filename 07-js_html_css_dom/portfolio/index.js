document.querySelector('#dark-mode-button').addEventListener('click', darkMode)

function darkMode() {
    let body = document.body;
    let  footer = document.querySelector('#footer');
    let darkModeButton = document.querySelector('#dark-mode-button');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode')
        footer.classList.remove('dark-mode');
        darkModeButton.innerText = 'dark mode';
    } else {
        body.classList.add('dark-mode')
        footer.classList.add('dark-mode');
        darkModeButton.innerText = 'light mode';
    }
}