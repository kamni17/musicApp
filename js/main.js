// Define Variables
var Audio = document.getElementById("audioFile");
var progressBar;
var RecordingButton = document.getElementById("RecordAudio");

// Define Song Array to build Play Previous and Play Next function
AudioIndex = 0;
AudioURL = ['../media/Audio/bensound-adventure.mp3','../media/Audio/bensound-betterdays.mp3','../media/Audio/bensound-clearday.mp3',
            '../media/Audio/bensound-dubstep.mp3','../media/Audio/bensound-epic.mp3','../media/Audio/bensound-energy.mp3','../media/Audio/bensound-evolution.mp3',
            '../media/Audio/bensound-funnysong.mp3','../media/Audio/bensound-inspire.mp3','../media/Audio/bensound-moose.mp3',
            '../media/Audio/bensound-onceagain.mp3','../media/Audio/bensound-slowmotion.mp3','../media/Audio/bensound-sunny.mp3',
            '../media/Audio/bensound-sweet.mp3','../media/Audio/bensound-tenderness.mp3','../media/Audio/bensound-tomorrow.mp3'];

AudioTitle = ["Adventure Music","Better Days","Clear Days","Dub-Step Song","Epic Song",
"Energy Song", "Evolution Song","Funny Song","Inspire Song","Moose Song","Once Again",
"Slow Motion","Sunny Song","Sweet Song","Tenderness","Tomorrow"];

AudioAlbum = ['../images/media-images/adventure.jpg','../images/media-images/betterdays.jpg','../images/media-images/clearday.jpg',
'../images/media-images/dubstep.jpg','../images/media-images/epic.jpg','../images/media-images/energy.jpg',
'../images/media-images/evolution.jpg','../images/media-images/funnysong.jpg','../images/media-images/inspire.jpg',
'../images/media-images/moose.jpg','../images/media-images/onceagain.jpg','../images/media-images/slowmotion.jpg',
'../images/media-images/sunny.jpg','../images/media-images/sweet.jpg','../images/media-images/tenderness.jpg','../images/media-images/tomorrow.jpg'];

//Define Functions

// This function Play or Pause Music based on User Interaction with Application
function PlayMusic()
{
    Audio=document.getElementById("audioFile");
    if((Audio.paused) || (Audio.duration ==0))
    {
        Audio.play();
        document.getElementById("playMusic").src = "/images/pause.png";
        document.getElementById("MuteButton").style.backgroundColor = "";
        Audio.volume =0.5;
    }
    else{
        Audio.pause();
        document.getElementById("playMusic").src = "/images/play-button-arrowhead.png";
    }

 Audio.addEventListener('ended',function(){

       PlayNextSong();
   });
    
}
// Play Next Song after current song is ended or user chooses to change Song
function PlayNextSong()
{
    Audio=document.getElementById("audioFile");
    if(AudioIndex==15)
    {
        AudioIndex = 0;
    }
    else
    {
        AudioIndex++;
    }
    
    Audio.src = AudioURL[AudioIndex];
    document.getElementById("Album").src = AudioAlbum[AudioIndex];
    document.getElementById("SongTitle").innerHTML = AudioTitle[AudioIndex];
    document.getElementById("playMusic").src = "/images/pause.png";
    Audio.play();
}
// Play Previous Song
function PlayPreviousSong()
{
    Audio=document.getElementById("audioFile");
    if(AudioIndex==0)
    {
        AudioIndex = 15;
    }
    else
    {
        AudioIndex--;
    }
    
    Audio.src = AudioURL[AudioIndex];
    document.getElementById("Album").src = AudioAlbum[AudioIndex];
    document.getElementById("SongTitle").innerHTML = AudioTitle[AudioIndex];
    document.getElementById("playMusic").src = "/images/pause.png";
    Audio.play();
}
// Mute and UnMute
function Mute()
{
    Audio=document.getElementById("audioFile");
  if (Audio.muted)
  {
      Audio.muted = false;
      Audio.play();
      document.getElementById("playMusic").src = "/images/pause.png";
      document.getElementById("MuteButton").style.backgroundColor = "";
      Audio.volume = 0.5;
      
  }
  else
  {
      Audio.muted = true;
      Audio.pause();
      document.getElementById("playMusic").src = "/images/play-button-arrowhead.png";
      document.getElementById("MuteButton").style.backgroundColor = "red";
  }
}
// Decrease Volume and if volume is minimum set mute on and pause music
function DecVolume()
{
    Audio=document.getElementById("audioFile");
    if(Audio.volume>0.1)
    {
        Audio.volume = Audio.volume - 0.10000;
    }
    if(Audio.volume<0.1)
    {
      Audio.muted = true;
      Audio.pause();
      document.getElementById("playMusic").src = "/images/play-button-arrowhead.png";
      document.getElementById("MuteButton").style.backgroundColor = "red";
    }
}
//Increase Volume
function IncVolume()
{
    Audio=document.getElementById("audioFile");
    if(Audio.volume<0.1)
    {
        Audio.volume = Audio.volume + 0.100000;
        Audio.muted = false;
        Audio.play();
        document.getElementById("playMusic").src = "/images/pause.png";
        document.getElementById("MuteButton").style.backgroundColor = "";
    }

    if(Audio.volume<0.91)
    {
        Audio.volume = Audio.volume + 0.10000;
    }

}
// Play Selected Song by User
function PlaySelectedSong(Song)
{ 
    Audio=document.getElementById("audioFile");
    switch (Song)
    {
        case "Music1":
            
            Audio.src ='../media/Audio/bensound-adventure.mp3';
            document.getElementById("Album").src = '../images/media-images/adventure.jpg';
            document.getElementById("SongTitle").innerHTML = "Adventure Music";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 0;
            Audio.play();
            break;
        
        case "Music2":
            
            Audio.src ='../media/Audio/bensound-betterdays.mp3';
            document.getElementById("Album").src = '../images/media-images/betterdays.jpg';
            document.getElementById("SongTitle").innerHTML = "Better Days";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 1;
            Audio.play();
            break;
        
        case "Music3":
            
            Audio.src ='../media/Audio/bensound-clearday.mp3';
            document.getElementById("Album").src = '../images/media-images/clearday.jpg';
            document.getElementById("SongTitle").innerHTML = "Clear Days";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 2;
            Audio.play();
            break;

            case "Music4":
            
                Audio.src ='../media/Audio/bensound-dubstep.mp3';
                document.getElementById("Album").src = '../images/media-images/dubstep.jpg';
                document.getElementById("SongTitle").innerHTML = "Dub-Step Song";
                document.getElementById("playMusic").src = "/images/pause.png";
                AudioIndex = 3;
                Audio.play();
                break;

            case "Music5":
            
            Audio.src ='../media/Audio/bensound-epic.mp3';
            document.getElementById("Album").src = '../images/media-images/epic.jpg';
            document.getElementById("SongTitle").innerHTML = "Epic Song";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 4;
            Audio.play();
            break;

            case "Music6":
            
            Audio.src ='../media/Audio/bensound-energy.mp3';
            document.getElementById("Album").src = '../images/media-images/energy.jpg';
            document.getElementById("SongTitle").innerHTML = "Energy Song";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 5;
            Audio.play();
            break;

            case "Music7":
            
            Audio.src ='../media/Audio/bensound-evolution.mp3';
            document.getElementById("Album").src = '../images/media-images/evolution.jpg';
            document.getElementById("SongTitle").innerHTML = "Evolution Song";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 6;
            Audio.play();
            break;

            case "Music8":
            
            Audio.src ='../media/Audio/bensound-funnysong.mp3';
            document.getElementById("Album").src = '../images/media-images/funnysong.jpg';
            document.getElementById("SongTitle").innerHTML = "Funny Song";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 7;
            Audio.play();
            break;

            case "Music9":
            
            Audio.src ='../media/Audio/bensound-inspire.mp3';
            document.getElementById("Album").src = '../images/media-images/inspire.jpg';
            document.getElementById("SongTitle").innerHTML = "Inspire Song";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 8;
            Audio.play();
            break;

            case "Music10":
            
            Audio.src ='../media/Audio/bensound-moose.mp3';
            document.getElementById("Album").src = '../images/media-images/moose.jpg';
            document.getElementById("SongTitle").innerHTML = "Moose Song";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 9;
            Audio.play();
            break;

            case "Music11":
            
            Audio.src ='../media/Audio/bensound-onceagain.mp3';
            document.getElementById("Album").src = '../images/media-images/onceagain.jpg';
            document.getElementById("SongTitle").innerHTML = "Once Again";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 10;
            Audio.play();
            break;

            case "Music12":
            
            Audio.src ='../media/Audio/bensound-slowmotion.mp3';
            document.getElementById("Album").src = '../images/media-images/slowmotion.jpg';
            document.getElementById("SongTitle").innerHTML = "Slow Motion";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 11;
            Audio.play();
            break;

            case "Music13":
            
            Audio.src ='../media/Audio/bensound-sunny.mp3';
            document.getElementById("Album").src = '../images/media-images/sunny.jpg';
            document.getElementById("SongTitle").innerHTML = "Sunny Song";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 12;
            Audio.play();
            break;

            case "Music14":
            
            Audio.src ='../media/Audio/bensound-sweet.mp3';
            document.getElementById("Album").src = '../images/media-images/sweet.jpg';
            document.getElementById("SongTitle").innerHTML = "Sweet Song";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 13;
            Audio.play();
            break;

            case "Music15":
            
            Audio.src ='../media/Audio/bensound-tenderness.mp3';
            document.getElementById("Album").src = '../images/media-images/tenderness.jpg';
            document.getElementById("SongTitle").innerHTML = "Tenderness";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 14;
            Audio.play();
            break;

            case "Music16":
            
            Audio.src ='../media/Audio/bensound-tomorrow.mp3';
            document.getElementById("Album").src = '../images/media-images/tomorrow.jpg';
            document.getElementById("SongTitle").innerHTML = "Tomorrow";
            document.getElementById("playMusic").src = "/images/pause.png";
            AudioIndex = 15;
            Audio.play();
            break;
    }
}

// convert song.currentTime and song.duration into MM:SS format
function formatTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
};

// Sync Progress Bar based on Song
function changeProgressBar() {
    progressBar = document.querySelector('#progress-bar');
    Audio=document.getElementById("audioFile");
    Audio.currentTime = progressBar.value;
}
// Update Progress bar and time based on Song
function updateProgressValue() {
    progressBar = document.querySelector('#progress-bar');
    Audio=document.getElementById("audioFile");
    progressBar.max = Audio.duration;
    progressBar.value = Audio.currentTime;
   document.querySelector('.currentTime').innerHTML = (formatTime(Math.floor(Audio.currentTime)));
    if (document.querySelector('.durationTime').innerHTML === "NaN:NaN") {
        document.querySelector('.durationTime').innerHTML = "0:00";
   } else {
       document.querySelector('.durationTime').innerHTML = (formatTime(Math.floor(Audio.duration)));
   }
};

//call Functions
setInterval(updateProgressValue, 500);