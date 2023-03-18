// Get DOM Elements
const boxes = document.querySelectorAll('.box');

// Fire the scroll event
checkBox();
window.addEventListener('scroll', checkBox);

function checkBox() {
    // Trigger point
    const triggerBottom = (window.innerHeight / 5) * 3.9;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else if (triggerBottom < boxTop) {
            box.classList.remove('show');
        }
    });
}
