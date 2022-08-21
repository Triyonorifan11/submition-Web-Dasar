"use strict"
const toggle_dark = document.querySelector('.toggle-dark');
const nav_dark = document.querySelector('nav');
const footer = document.querySelector('footer');
const card = document.querySelectorAll('.card');
const dropdown = document.querySelector('.dropdown-item');

// fungsi dark mode
function runDarkMode() {
    document.body.classList.add('dark');
    nav_dark.classList.add('nav-dark');
    footer.classList.add('nav-dark');
    for (let cardme of card) {
        cardme.classList.add('nav-dark');
    }
    dropdown.classList.add('dropdown-item-dark');
    toggle_dark.innerHTML = 'Light';
    localStorage.setItem('theme', 'Dark');
}

// fungsi light mode
function runLightMode() {
    document.body.classList.remove('dark');
    nav_dark.classList.remove('nav-dark');
    footer.classList.remove('nav-dark');
    for (let cardme of card) {
        cardme.classList.remove('nav-dark');
    }
    dropdown.classList.remove('dropdown-item-dark');
    toggle_dark.innerHTML = 'Dark';
    localStorage.setItem('theme', 'Light');
}

// check theme in local storage
let theme = localStorage.getItem('theme');

if (!theme) {
    localStorage.setItem('theme', 'Light');
}

if (theme === 'Dark') {
    runDarkMode();
}

// klik button dark or light
toggle_dark.addEventListener('click', function (e) {
    let theme_local = localStorage.getItem('theme');
    if (theme_local === 'Light') {
        runDarkMode();
    } else {
        runLightMode();
    }
    e.preventDefault();
})


