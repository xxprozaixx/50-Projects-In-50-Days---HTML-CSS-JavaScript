// const dropDowns = document.querySelectorAll('.fa-chevron-down');
// const closeOptions = document.querySelectorAll('.fa-times');
// const hidden = document.querySelectorAll('.hidden');
// const faq = document.querySelector('.faq.active .faq-text');
// console.log(closeOptions);
// console.log(dropDowns);

// console.log(faq);

// closeOptions.forEach((close) =>
//     close.addEventListener('click', () => {
//         close.classList.toggle('faq');
//     })
// );

// dropDowns.forEach((drop) => {
//     drop.addEventListener('click', () => {
//         drop.classList.toggle('faq');
//     });
// });
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});
