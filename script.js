const video = document.getElementById("video");

function reproducir()
{
   video.play();
   console.log("afuera")
}

function pausar()
{
    video.pause();
    console.log("estoy dentro")
}