let progress = document.getElementById('progress')
let playSong = document.getElementById('play-song')
let pauseSong = document.getElementById('pause-song')
let song = document.getElementById('song')

song.onloadedmetadata = () => {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

let playPause = () => {
    let playStyle = playSong.style.display;
    let pauseStyle = pauseSong.style.display;

    if(playSong.style.display == 'block') {
        playSong.style.display = 'none'
        pauseSong.style.display = 'block'
    }

    else {
        playSong.style.display = 'block'
        pauseSong.style.display = 'none'
    }
}