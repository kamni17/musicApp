// Define Variables
var Audio;


//Define Functions

// This function Play or Pause Music based on User Interaction with Application
function PlayMusic()
{
    
    Audio = document.getElementById("audioFile");
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

//call Functions