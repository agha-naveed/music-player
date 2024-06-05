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


song.addEventListener('timeupdate', () => {
    progress.value = song.currentTime;
});

progress.addEventListener('input', () => {
    song.currentTime = progress.value
    controlIcn.classList.add('fa-pause')
    controlIcn.classList.remove('fa-play')
    song.play()
})


let main_player = document.querySelector('.player')
let playlist_player = document.querySelector('.player-2')
let arrow = document.querySelector('.arrow-down > i')

arrow.addEventListener('click', () => {
    arrow.classList.toggle('turn-arrow')
    main_player.classList.toggle('hide-l-player')
    playlist_player.classList.toggle('hide-r-player')
})
