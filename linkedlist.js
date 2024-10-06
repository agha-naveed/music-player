//  ------------------------ Stack --------------------------
class Stack {
    arr = []
    size;
    push(value) {
        this.size = this.arr.length
        this.arr[this.size] = value   
    }

    pop() {
            this.arr.length--
    }

    display() {
        return this.arr
    }
}

// ---------------------- Stack Ended -----------------------
// ----------------------------------------------------------
// ------------------ Doubly Linked List --------------------
class List {
    constructor() {
        this.head = {
            prev: null,
            data: null,
            next: null
        }
        this.tail = this.head
        this.size = 0
    }

    appendNode(Node) {
        let node = {
            prev: this.tail,
            data: Node,
            next: null
        };
        

        this.tail.next = node;
        this.tail = node
        this.size++
    }


    display() {
        return this.head
    }

    size(){
        return this.size
    }
}
// ------------------ Linked List Ended ---------------------
// ----------------------------------------------------------
// ---------------------- Array Ended -----------------------
let playlist = [
    {
        name: 'BG Music',
        item: new List(),
    },
    {
        name: 'National Anthem',
        item: new List()
    },
    {
        name: 'Poem',
        item: new List()
    },
]

// ---------------------- Array Ended -----------------------
// ----------------------------------------------------------
// ------------------------ Audios --------------------------


// ---------  Backgroud Music  -----------

playlist[0].item.appendNode({
    title: 'NIVIRO  Without You feat Justin J Moore  Happy Hardcore  NCS  Copyright Free Music',
    displayTitle: 'NIVIRO Without You',
    artist: 'NoCopyrightSounds',
    year: 2024,
    url: "./Audios/NIVIRO  Without You feat Justin J Moore  Happy Hardcore  NCS  Copyright Free Music.mp3",
    image: "https://i.ytimg.com/vi/z-SdpbalM8k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAWtYNmdwL6UaJcjoF_futgx_Xqgg"
})
playlist[0].item.appendNode({
    title: 'Jim Yosef - Firefly | Progressive House | NCS - Copyright Free Music',
    displayTitle: 'Jim Yosef - Firefly',
    artist: 'NoCopyrightSounds',
    year: 2015,
    url: "./Audios/Jim Yosef  Firefly  Progressive House  NCS  Copyright Free Music.mp3",
    image: "https://i.ytimg.com/vi/x_OwcYTNbHs/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARglIEQofzAP&rs=AOn4CLAXH8UBN_nrHMuvgDwcxWgcjX6GiA"
})
playlist[0].item.appendNode({
    title: 'Robin Hustin x TobiMorrow - Light It Up (feat. Jex) | Future Bounce | NCS - Copyright Free Music',
    displayTitle: 'Robin Hustin x TobiMorrow',
    artist: 'NoCopyrightSounds',
    year: 2018,
    url: "./Audios/Robin Hustin x TobiMorrow  Light It Up feat Jex  Future Bounce  NCS  Copyright Free Music.mp3",
    image: "https://i.ytimg.com/vi/bdE_SyHad90/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhQIB8ofzAP&rs=AOn4CLCYMnS-TsUZ-635keySASgyr_JtJg"
})


// ---------  National Anthem  -----------

playlist[1].item.appendNode({
    title: 'Pakistan National Anthem | پاکستانی قومی ترانہ | Pak Sar Zameen Shaad Baad',
    displayTitle: 'Pakistan National Anthem',
    artist: 'Pakistan',
    year: 1954,
    url: "./Audios/Pakistan National Anthem.mp3",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
})
playlist[1].item.appendNode({
    title: 'National Anthem of Sweden Du gamla, Du fria, Du fjällhöga nord',
    displayTitle: 'Sweden National Anthem',
    artist: 'Sweden',
    year: 1933,
    url: "./Audios/National Anthem of Sweden  Du Gamla Du Fria.mp3",
    image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg"
})
playlist[1].item.appendNode({
    title: 'National Anthem of United States of America (USA) | The Star-Spangled Banner',
    displayTitle: 'American National Anthem',
    artist: 'USA',
    year: 1931,
    url: "./Audios/National anthem of the United States of America.mp3",
    image: "https://thumbs.dreamstime.com/b/american-flag-high-resolution-white-44037781.jpg"
})
playlist[1].item.appendNode({
    title: 'National Anthem of Argentine | Oíd, mortales, el grito sagrado - Libertad, libertad, libertad',
    displayTitle: 'Argentine National Anthem',
    artist: 'Argentina',
    year: 1813,
    url: "./Audios/Argentine National Anthem  Himno Nacional Argentino ESEN.mp3",
    image: "https://cdn.britannica.com/18/147118-050-7F820ED5/flag-Argentina-2010.jpg"
})


// ---------  Poem  -----------

playlist[2].item.appendNode({
    title: 'Wheels On The Bus Go Round And Round | Nursery Rhymes | Baby Songs',
    displayTitle: 'Wheels on the Bus Go Round',
    artist: 'FMD',
    year: 2018,
    url: "./Audios/Wheels On The Bus Go Round And Round  Nursery Rhymes  Baby Songs   No Copyright.mp3",
    image: "https://i.ytimg.com/vi/GNpS4PFXudE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1ORc9m-Bu5jqwgS-ONbBFbFwb5g"
})
playlist[2].item.appendNode({
    title: 'Baa Baa Black Sheep Song  Nursery Rhyme for Kids No Copyright',
    displayTitle: 'Baa Baa Black Sheep',
    artist: 'FMD',
    year: 2018,
    url: "./Audios/Baa Baa Black Sheep Song  Nursery Rhyme for Kids No Copyright.mp3",
    image: "https://cdn.firstcry.com/education/2022/08/24142823/Baa-Baa-Black-Sheep-Nursery-Rhyme.jpg"
})
playlist[2].item.appendNode({
    title: `Japanese Poem | 'Marching March' | Nonochan (Nonoka Murakata) `,
    displayTitle: 'Marching March',
    artist: 'Nonoka Murakata',
    year: 2022,
    url: "./Audios/Nonochan Nonoka Murakata Marching March.mp3",
    image: "https://i.mydramalist.com/Z8EVrJ_5f.jpg"
})


// ---------------------- Audios Ended ----------------------
// ----------------------------------------------------------
// --------------------- Adding Nodes -----------------------

let playListDiv = document.getElementsByClassName("playlist-song")[0]
let index = 0;

let addingToPlaylist = (index = 0, playListDiv) => {
    for(let l of playlist) {  
        playListDiv.innerHTML += `
            <div class="row main-playlist">
                <div id="noha-playlist" class="item-playlist" onClick='togglePlayList(this, "${index}")'>
                    <div class="row-image">
                        <img src="img/Bg_music.webp" alt="" />
                    </div>
                    <div class="row-detail">
                        <h4>`+ l.name +`</h4>
                        <p> ${l.item.size} Items </p>
                    </div>
                    <i class="fa-solid fa-angle-down"></i>
                </div>


                <div class="noha-drop-box">
                    <div class="audio-box-body">
                        
            
                    </div>
                </div>

            </div>
        `
        index++
    }
}

addingToPlaylist(index, playListDiv)



function togglePlayList(div, playlistIndex){
    var dropBox = div.nextSibling.nextSibling

    var dropBoxItemDiv = dropBox.children[0]
    
    let list = displayAllPlaylistItems(playlistIndex)

    dropBoxItemDiv.innerHTML = list
        
    dropBox.classList.toggle('show-audio-list')
}



function displayAllPlaylistItems(playlistIndex) {

    let list = playlist[playlistIndex].item.display()


    let returnData = ``

    let itemIndex = 0
    let current = list.next
    while(current){

        returnData += `
            <div class="audio" onClick="playPlaylist(${playlistIndex}, ${itemIndex})">
                <div class="audio-detail">
                    <div class="marquee-texts">
                        <h4 class="marquee">${current.data.title}</h4>
                    </div>
                    <p>${current.data.year}</p>
                </div>
            </div>
        `

        current = current.next
        itemIndex++
    }

    return returnData

}


// let artistImgDiv = document.querySelector('.artist-image-div')

let currentPlayingNode = null;
function playPlaylist(playlistIndex, itemIndex){

    currentPlayingNode = playlist[playlistIndex].item.display().next

    for(let i=0; i<itemIndex; i++) {
        currentPlayingNode = currentPlayingNode.next
    }
    

    // currentPlayingNode = item;
    // let audioUrl = currentPlayingNode.data.url;
    console.log("Playing:", playlistIndex, itemIndex, currentPlayingNode);
    play()
    
}

let audioTitle = document.querySelector('.s-title')
let artistName = document.querySelector('.ar-name')
let artistImg = document.querySelector('.ar-img')

function play() {
    audioTitle.innerHTML = currentPlayingNode.data.displayTitle;
    artistName.innerHTML = currentPlayingNode.data.artist;
    artistImg.src = currentPlayingNode.data.image

    document.querySelector(".background-image").style.backgroundImage = `url(${currentPlayingNode.data.image})`
    song.src = currentPlayingNode.data.url
    console.log(song)
    artistImgDiv.style.animation = ''
    setTimeout(() => {
        artistImgDiv.style.animation = 'artist-img 50s linear infinite'
    }, 2000)
}


function playNext() {
    if (currentPlayingNode && currentPlayingNode.next) {
        currentPlayingNode = currentPlayingNode.next;
        play()
    }
    else {
        alert("No next audio available");
    }
}

function playPrevious() {
    if (currentPlayingNode && currentPlayingNode.prev.data != null) {
        currentPlayingNode = currentPlayingNode.prev;
        play()
    }
    else {
        alert("No previous audio available");
    }
}



// ------------------- Adding Nodes Ended -------------------
// ----------------------------------------------------------
// ------------------ Searching Algorithm -------------------

let searchIcn = document.querySelector('.fa-magnifying-glass')
let searchItems = document.querySelector('.search-items')
let searchItemsBox = document.querySelector('.search-items > .audio-box-body')

searchIcn.onclick = () => {
    searchBox.style.width = '200px'
    searchIcn.style.right = '20px'
}
searchBox.addEventListener('input', () => {
    let results = new Stack()
    playListDiv.style.display = 'none'
    searchItems.style.display = 'grid'

    for(let pIndex = 0; pIndex<playlist.length; pIndex++) {
        let temp = playlist[pIndex].item.display()
        let itemIndex = 0
        while(temp.next != null) {
            temp = temp.next
            if (temp.data.title.toLowerCase().includes(searchBox.value.toLowerCase())) {
                    results.push({
                        data: temp,
                        pIndex,
                        itemIndex
                    });
            }

            itemIndex++
        }
    }
    
    if(results.display().length == 0)
        count++
    else
        count = 0
    

    console.log(results.display())

    searchItemsBox.innerHTML = ''
    for(let res of results.display()) {
        searchItemsBox.innerHTML += `
            <div class="audio" onClick="playPlaylist(${res.pIndex}, ${res.itemIndex})">
                <div class="audio-detail">
                    <div class="marquee-texts">
                        <h4 class="marquee">${res.data.data.title}</h4>
                    </div>
                    <p>${res.data.data.year}</p>
                </div>
        </div>
        `
    }

    if(searchBox.value == '') {
        playListDiv.style.display = 'grid'
        searchItems.style.display = 'none'
        for(let i=0; i<results.display().length; i++) {
            results.pop()
        }   
    }
})


// --------------- Searching Algorithm Ended ----------------
// ----------------------------------------------------------
// ------------------- Sorting Algorithm --------------------

function sortAudioByDate() {
    let swapped;
    let current;
    let end = null;
    for(let i=0; i<3; i++) {
        do {
            swapped = false;
            current = playlist[i].item.display().next;
            while (current.next !== null) {
                if (current.data.year > current.next.data.year) {
                    const temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }
            end = current;
        } while (swapped);
    }
}

function sortAudioByName() {
    let swapped;
    let current;
    let end = null;
    for(let i=0; i<3; i++) {
        do {
            swapped = false;
            current = playlist[i].item.display().next;
            while (current.next !== null) {
                if (current.data.title > current.next.data.title) {
                    const temp = current.data;
                    current.data = current.next.data;
                    current.next.data = temp;
                    swapped = true;
                }
                current = current.next;
            }
            end = current;
        } while (swapped);
    }
}

const sortDiv = document.getElementById('sort-options')

sortDiv.addEventListener('change', function() {
    if (this.value === 'date') {
        playListDiv.innerHTML = ''
        addingToPlaylist(index, playListDiv)
        sortAudioByDate();
    }
    else if (this.value === 'name') {
        playListDiv.innerHTML = ''
        addingToPlaylist(index, playListDiv)
        sortAudioByName();
    }
});

// ------------------- Sorting Algorithm Ended ------------------------