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

//call Functions