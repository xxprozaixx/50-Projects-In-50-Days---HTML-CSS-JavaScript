// Getting element from DOM
const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0; // Initialize laod (0%) to start from 0
let inc = setInterval(blurring, 30); // Keep invoking function in an interval of 30ms

// Unblur image wile text fade away
function blurring() {
    load++;

    if (load > 99) {
        clearInterval(inc);
    }

    // Inc loading text everytime the function is called
    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
