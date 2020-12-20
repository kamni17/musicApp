// Define Variables
var Audio;


//Define Functions

// This function Play or Pause Music based on User Interaction with Application
function PlayMusic()
{
    Audio=document.getElementById("audioFile");
    if((Audio.paused) || (Audio.duration ==0))
    {
        Audio.play();
        document.getElementById("playMusic").src = "/images/pause.png";
    }
    else{
        Audio.pause();
        document.getElementById("playMusic").src = "/images/play-button-arrowhead.png";
    }
    
}

function Mute()
{
    Audio=document.getElementById("audioFile");
  if (Audio.muted)
  {
      Audio.muted = false;
      document.getElementById("MuteButton").style.backgroundColor = "";
      Audio.volume = 0.5;
      
  }
  else
  {
      Audio.muted = true;
      document.getElementById("MuteButton").style.backgroundColor = "red";
  }
}

function DecVolume()
{
    Audio=document.getElementById("audioFile");
    if(Audio.volume>0.1)
    {
        Audio.volume = Audio.volume - 0.20;
    }
    if(Audio.volume<0.1)
    {
      Audio.muted = true;
      document.getElementById("MuteButton").style.backgroundColor = "red";
    }
}
function IncVolume()
{
    Audio=document.getElementById("audioFile");
    if(Audio.volume<0.1)
    {
        Audio.volume = Audio.volume + 0.20;
        Audio.muted = false;
        document.getElementById("MuteButton").style.backgroundColor = "";
    }

    if(Audio.volume<1)
    {
        Audio.volume = Audio.volume + 0.20;
    }

}

function PlaySelectedSong(Song)
{ 
    Audio=document.getElementById("audioFile");
    switch (Song)
    {
        case "Music1":
            
            Audio.src ='../media/Audio/bensound-adventure';
            document.getElementsByClassName("Image").src = '../images/media-images/adventure.jpg';
            document.getElementById("SongTitle").innerHTML = "Adventure Music";
            Audio.play();
            break;
        
        case "Music2":
            
            Audio.src ='../media/Audio/bensound-betterdays.mp3';
            document.getElementById("Album").src = '../images/media-images/betterdays.jpg';
            document.getElementById("SongTitle").innerHTML = "Better Days";
            Audio.play();
            break;
        
        case "Music3":
            
            Audio.src ='../media/Audio/bensound-clearday.mp3';
            document.getElementById("Album").src = '../images/media-images/clearday.jpg';
            document.getElementById("SongTitle").innerHTML = "Clear Days";
            Audio.play();
            break;

            case "Music4":
            
                Audio.src ='../media/Audio/bensound-dubstep.mp3';
                document.getElementById("Album").src = '../images/media-images/dubstep.jpg';
                document.getElementById("SongTitle").innerHTML = "Dub-Step";
                Audio.play();
                break;

            case "Music5":
            
            Audio.src ='../media/Audio/bensound-epic.mp3';
            document.getElementById("Album").src = '../images/media-images/epic.jpg';
            document.getElementById("SongTitle").innerHTML = "Epic";
            Audio.play();
            break;

            case "Music6":
            
            Audio.src ='../media/Audio/bensound-energy.mp3';
            document.getElementById("Album").src = '../images/media-images/energy.jpg';
            document.getElementById("SongTitle").innerHTML = "Energy";
            Audio.play();
            break;

            case "Music7":
            
            Audio.src ='../media/Audio/bensound-evolution.mp3';
            document.getElementById("Album").src = '../images/media-images/evolution.jpg';
            document.getElementById("SongTitle").innerHTML = "Evolution";
            Audio.play();
            break;

            case "Music8":
            
            Audio.src ='../media/Audio/bensound-funnysong.mp3';
            document.getElementById("Album").src = '../images/media-images/funnysong.jpg';
            document.getElementById("SongTitle").innerHTML = "Funny Song";
            Audio.play();
            break;

            case "Music9":
            
            Audio.src ='../media/Audio/bensound-inspire.mp3';
            document.getElementById("Album").src = '../images/media-images/inspire.jpg';
            document.getElementById("SongTitle").innerHTML = "Inspire Song";
            Audio.play();
            break;

            case "Music10":
            
            Audio.src ='../media/Audio/bensound-moose.mp3';
            document.getElementById("Album").src = '../images/media-images/moose.jpg';
            document.getElementById("SongTitle").innerHTML = "Moose Song";
            Audio.play();
            break;

            case "Music11":
            
            Audio.src ='../media/Audio/bensound-onceagain.mp3';
            document.getElementById("Album").src = '../images/media-images/onceagain.jpg';
            document.getElementById("SongTitle").innerHTML = "Once Again";
            Audio.play();
            break;

            case "Music12":
            
            Audio.src ='../media/Audio/bensound-slowmotion.mp3';
            document.getElementById("Album").src = '../images/media-images/slowmotion.jpg';
            document.getElementById("SongTitle").innerHTML = "Slow Motion";
            Audio.play();
            break;

            case "Music13":
            
            Audio.src ='../media/Audio/bensound-sunny.mp3';
            document.getElementById("Album").src = '../images/media-images/sunny.jpg';
            document.getElementById("SongTitle").innerHTML = "Sunny Song";
            Audio.play();
            break;

            case "Music14":
            
            Audio.src ='../media/Audio/bensound-sweet.mp3';
            document.getElementById("Album").src = '../images/media-images/sweet.jpg';
            document.getElementById("SongTitle").innerHTML = "Sweet Song";
            Audio.play();
            break;

            case "Music15":
            
            Audio.src ='../media/Audio/bensound-tenderness.mp3';
            document.getElementById("Album").src = '../images/media-images/tenderness.jpg';
            document.getElementById("SongTitle").innerHTML = "Tenderness";
            Audio.play();
            break;

            case "Music16":
            
            Audio.src ='../media/Audio/bensound-tomorrow.mp3';
            document.getElementById("Album").src = '../images/media-images/tomorrow.jpg';
            document.getElementById("SongTitle").innerHTML = "Tomorrow";
            Audio.play();
            break;


    }
}

//call Functions