const close = document.querySelector('.fa-times');
const openn = document.querySelector('.fa-bars');
const list = document.getElementById('list');
const nav = document.getElementById('nav');

close.addEventListener('click', toggleOnOff);
openn.addEventListener('click', toggleOnOff);

function toggleOnOff() {
    list.classList.toggle('hidden');
    openn.classList.toggle('hidden');
    close.classList.toggle('hidden');
    nav.classList.toggle('hidden');
}
