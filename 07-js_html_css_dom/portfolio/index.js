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

document.querySelector('#text-size-smaller-button').addEventListener('click', decreaseBaseTextSize)
document.querySelector('#text-size-bigger-button').addEventListener('click', increaseBaseTextSize)

function decreaseBaseTextSize() {
    let textSize = document.querySelector('#text-size');
    textSize.innerText = parseInt(textSize.innerText) - 1;
    let currentFontSize = window.getComputedStyle(document.body).fontSize;
    let newFontSize = parseInt(currentFontSize) - 1;
    document.body.style.fontSize = newFontSize + 'px';
}

function increaseBaseTextSize() {
    let textSize = document.querySelector('#text-size');
    textSize.innerText = parseInt(textSize.innerText) + 1;
    let currentFontSize = window.getComputedStyle(document.body).fontSize;
    let newFontSize = parseInt(currentFontSize) + 1;
    document.body.style.fontSize = newFontSize + 'px';
}