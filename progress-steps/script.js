// Getting Elements from DOM
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let currentActive = 1;

// When press next inc currentIndex
next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    updateProgress();
});

prev.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    updateProgress();
});

function updateProgress() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) circle.classList.add('active');
        else circle.classList.remove('active');
    });

    const active = document.querySelectorAll('.active');
    progress.style.width =
        ((active.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
