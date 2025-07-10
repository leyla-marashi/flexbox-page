const btn = document.getElementsByClassName('btn')[0];
const ul = document.getElementsByClassName('ul-container')[0];
const li1 = document.getElementsByClassName('li-sidebar')[0];
const li2 = document.getElementsByClassName('li-sidebar')[1];
const li3 = document.getElementsByClassName('li-sidebar')[2];
btn.addEventListener('click', function () {
    ul.classList.toggle('close');
    li1.classList.toggle('close');
    li2.classList.toggle('close');
    li3.classList.toggle('close');
    ul.classList.toggle('show');
    li1.classList.toggle('show');
    li2.classList.toggle('show');
    li3.classList.toggle('show');
})

// theme

const btnTheme = document.getElementById('theme-switch');
const body = document.getElementsByTagName('body')[0];
btnTheme.addEventListener('click', function () {
    body.classList.toggle('lightmode');
    body.classList.toggle('darkmode');
})