
let songIndex = 0;
let audioElement = new Audio('./Aanewala Pal Janewala Hai - Gol Maal 320 Kbps.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar =  document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));


let songs= [
    {songName: "Aanewala pal Janewala hai" , filePath:"\music website\Aanewala Pal Janewala Hai - Gol Maal 320 Kbps.mp3", coverPath:"./golmaal cover.jpg"},
    {songName: "ajeeb dastan hai yeh" , filePath:"\music website\Aanewala Pal Janewala Hai - Gol Maal 320 Kbps.mp3", coverPath:"./golmaal cover.jpg"},
    {songName: "Zindagi kaise hai pheli" , filePath:"\music website\Aanewala Pal Janewala Hai - Gol Maal 320 Kbps.mp3", coverPath:"./golmaal cover.jpg"},
    {songName: "kahi baar yuh bhi" , filePath:"\music website\Aanewala Pal Janewala Hai - Gol Maal 320 Kbps.mp3", coverPath:"./golmaal cover.jpg"},
    {songName: "Gaata rahe mera dil" , filePath:"\music website\Aanewala Pal Janewala Hai - Gol Maal 320 Kbps.mp3", coverPath:"./golmaal cover.jpg"},
    {songName: "Gaata rahe mera dil" , filePath:"\music website\Aanewala Pal Janewala Hai - Gol Maal 320 Kbps.mp3", coverPath:"./golmaal cover.jpg"},
    

]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName('img')[0].src=songs[i].filePath;
    element.getElementsByTagName("span")[0].innerText = songs[i].songName;
})


//audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-regular fa-circle-play')
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-regular fa-circle-play');
    gif.style.opacity=0;
}
})

// listen to events....

audioElement.addEventListener('timeupdate', ()=>{
    // update Seekbaar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

});

Array.from(document.getElementsByClassName('songlistplay').forEach(()=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
    })

})
)
