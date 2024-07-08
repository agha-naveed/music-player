let artistImgDiv = document.querySelector('.artist-image-div')
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
            
            artistImgDiv.style.animation = 'artist-img 50s linear infinite'
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


// ---- Playlist Tag ----
let playlistArrow = document.querySelector('.fa-angle-right')
let playlistTag = document.querySelector('.playlist-tag')
playlistArrow.addEventListener('mouseover', () => {
    setTimeout(() => {
        playlistTag.style.display = 'flex'
    }, 800)
})

let searchDiv = document.querySelector('.search-div')
let searchBox = document.querySelector('.search-div > input')

document.addEventListener('mousemove', (e) => {
    if(!playlistArrow.contains(e.target))
        playlistTag.style.display = 'none'
})
document.addEventListener('click', (e) => {
    if(!searchDiv.contains(e.target)) {
        searchIcn.style.right = '25px'
        searchBox.style.width = 0
        searchBox.style.paddingRight = '10px'
    }
})
