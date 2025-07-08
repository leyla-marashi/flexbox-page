const btn = document.getElementsByClassName('btn')[0];
const ul = document.getElementsByClassName('ul-container')[0];
const li1 = document.getElementsByClassName('li-sidebar')[0];
const li2 = document.getElementsByClassName('li-sidebar')[1];
const li3 = document.getElementsByClassName('li-sidebar')[2];
// console.log(li);
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