var sound = new Audio();
    sound.src = "/SOUND/correcto.mp3";

var soundError = new Audio();
    soundError.src = "";

function cambiarA(){
    
    sound.play();
    setTimeout(() => {
        location.href = "/HTML/Retos/RetoNumeros2.html";
    }, 3000);
}
