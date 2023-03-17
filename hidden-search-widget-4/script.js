const button = document.querySelector('.btn');
const search = document.querySelector('.search');
const input = document.querySelector('.input');
// let counter = 0;

console.log(search);

button.addEventListener('click', () => {
    // if (counter % 2 === 0) {
    //     search.classList.add('active');
    // } else if (counter % 2 === 1) {
    //     search.classList.remove('active');
    // }
    // counter++;
    search.classList.toggle('active');
    input.focus();
});
