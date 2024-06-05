let progress = document.getElementById('progress')
let controlIcn = document.getElementById('control-icon')
let song = document.getElementById('song')

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

let playPause = () => {
    try {
        let icon = controlIcn.classList
        if(icon.contains('fa-play')) {
            song.play()
            icon.remove('fa-play')
            icon.add('fa-pause')
        }
        else if(icon.contains('fa-pause')) {
            song.pause()
            icon.remove('fa-pause')
            icon.add('fa-play')
        }
    } catch(err) {
        console.warn(err)
    }
}


controlIcn.addEventListener('click', playPause);

song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});

progress.addEventListener('input', () => {
    song.play()
    song.currentTime = progress.value
    controlIcn.classList.add('fa-pause')
    controlIcn.classList.remove('fa-play')
})