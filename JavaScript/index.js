let audio = new Audio('SongFile/1/1.mp3');
let masterplay = document.getElementById('masterplay');
let gif = document.getElementById('gif');
let progressElement = document.getElementById('progres-bar');

//Song ka information
let i = 0, index = 0;

// Here we have to create  == :: ==
var FileSongData;
var songPageNo = -1;
var songImageNo = 0;
var songData = 0;
var org_data;
var lengthOfSong=0;
// Here Set the Cover Of Song - ......( 1 )

var SongCoverImage = ['cover1.jpg', 'cover2.jpg', 'cover3.jpg', 'cover4.jpg', 'cover5.jpg'];
//Here Set The Song Name ........ ( 2 ) 
var SongName = ['Mukesh old','kishor kumar','lata mangaskar','mohammad rafi ','kumar sanu '];

// And Then At Last Movement Set the Song On SongFileFolder only set { 1 2 3 4 5... like( set name ) }  Beacause it not neccesry Beacause Name Already Decleard

const Fitpro = async () => {
    console.log("Run Async")

    var server_Data = await fetch('/nextpage', { method: "get" });

    var org_data = await server_Data.json();

    nextpage(org_data);

}
const nextpage = (org_data) => {

    songPageNo = songPageNo + 1;
    songImageNo = songImageNo + 1;
    songData  =  songData + 1;
    if(songPageNo==5 && songImageNo==6){
        songPageNo = 0;
        songImageNo = 1;
        songData = 1;
    }
    console.log(songPageNo,songImageNo)
    for (var i = 0; i < 5; i++) {
        console.log("Chnage name")
        SongName[i] = org_data[songPageNo].ser_songName[i];
    }
    changeSongName();
    changeSongImage(songImageNo);
    for (var i = 0; i < 5; i++) {
        console.log(SongName[i]);
    }

};

document.getElementById('ServerFetchData').addEventListener('click', nextpage);

const prepage = () => {

};

masterplay.addEventListener('click', () => {
    if (audio.paused || audio.currentTime <= 0) {
        ChangeMasterAudioImage();
        gif.style.opacity = 1;
        audio.play();

    } else {
        ChangeMasterAudioImageBack();
        gif.style.opacity = 0;
        audio.pause();
    }
});

function ChangeMasterAudioImage() {
    var tr = document.getElementById('masterplay');
    if (tr.src.match('Button-Layout/play-button.png')) {
        gif.style.opacity = 1;
        tr.src = 'Button-Layout/paused.png';
    }
}
function ChangeMasterAudioImageBack() {
    var tr = document.getElementById('masterplay');
    if (tr.src.match('Button-Layout/paused.png')) {
        gif.style.opacity = 0;
        tr.src = 'Button-Layout/play-button.png';
    }
}
audio.addEventListener('timeupdate', () => {
    let progress = parseInt((audio.currentTime / audio.duration) * 100);
    console.log(progress);
    progressElement.value = progress;
});
progressElement.addEventListener('change', () => {
    audio.currentTime = (progressElement.value * audio.duration / 100);
});
// let songElement = document.querySelectorAll('.songlist div');
//console.log(songElement);
let SongCover = document.querySelectorAll('.songitem img');
let TittleOfSong = document.querySelectorAll('.songitem span');

function changeSongImage(songImageNo) {
    i=0;
    index=0;
    while (i <= 8) {
        // `SongFile/1/${index}.mp3`
        // 'cover/' +'1'+'/'+ SongCoverImage[index];      `SongFile/1/${index}.mp3`
        SongCover[i].src =   `cover/${songImageNo}/`+SongCoverImage[index];  // This ****
        i = i + 2;
        index = index + 1;
    }
}
changeSongImage(songImageNo);
function changeSongName() {
    i = 0;
    index = 0;
    while (i <= 12) {
        TittleOfSong[i].innerHTML = SongName[index];
        i = i + 3;
        index = index + 1;
    }
}
changeSongName();
const makeAllplay = () => {
    Array.from(document.getElementsByClassName('playsong')).forEach((element) => {
        element.src = 'Button-Layout/play-button.png';
    })
}
function ChangePlayPaused(e) {
    if (e.target.src.match('Button-Layout/paused.png')) {
        e.target.src = 'Button-Layout/play-button.png';
        return;
    }
    else {
        e.target.src = 'Button-Layout/paused.png';
        return;
    }
}
function songListSet(e) {
    console.log("RAM RAM RAM")
    makeAllplay();
    index = parseInt(e.target.id);
    console.log(index);
    ChangePlayPaused(e);
    ChangeMasterAudioImage();
    console.log(e.target.src);
    audio.currentTime = 0;
    audio.src = `SongFile/${songData}/${index}.mp3`; // This ****
    audio.play();
}

Array.from(document.getElementsByClassName('playsong')).forEach((element) => {
    element.addEventListener('click',songListSet)
});

let nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
    makeAllplay();
    if (index >= 5) {
        index = 1;
    } else {
        index += 1;
    }
    audio.currentTime = 0;
    audio.src = `SongFile/${songData}/${index}.mp3`; // This ****
    audio.play();
});

let previousButton = document.getElementById('previous');
previousButton.addEventListener('click', (e) => {
    makeAllplay();
    if (index == 1) {
        index = 5;
    } else {
        index -= 1;
        audio.currentTime = 0;
        audio.src = `SongFile/${songData}/${index}.mp3`;    // This ****
        audio.play();
    }
    console.log(e.target.src);
    console.log("Song Index" + index);
});


document.getElementById('ServerFetchData').addEventListener('click', Fitpro);


document.getElementById('link1').addEventListener('click',(evt)=>{
    evt.preventDefault();
    window.location.href='/index';

});

document.getElementById('link2').addEventListener('click',(evt)=>{
    evt.preventDefault();
    window.location.href='/about';

});

document.getElementById('link3').addEventListener('click',(evt)=>{
    evt.preventDefault();
    window.location.href='/SignUp';

});

document.getElementById('link4').addEventListener('click',(evt)=>{
    evt.preventDefault();
    window.location.href='/Login';

});








