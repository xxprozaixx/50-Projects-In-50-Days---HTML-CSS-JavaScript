const sounds = ['Normal', 'Quick', 'Happy', 'Sad', 'Tire', 'Playful'];

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSong();

        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSong() {
    sounds.forEach((sound) => {
        const song = document.getElementById(sound);
        song.pause();

        song.currentTime = 0;
    });
}
