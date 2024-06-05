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
        else {
            song.pause()
            icon.remove('fa-pause')
            icon.add('fa-play')
        }
    } catch(err) {
        console.warn(err)
    }
}

let fn = async () => {
    if(await song.play() == true) {
        setInterval(() => {
            progress.value = song.currentTime;
        })
    }
}
fn()

progress.addEventListener('change', () => {
    try {
        song.play()
        song.currentTime = progress.value
        controlIcn.classList.add('fa-pause')
        controlIcn.classList.add('fa-play')
    } catch(err) {
        console.warn(err)
    }
})