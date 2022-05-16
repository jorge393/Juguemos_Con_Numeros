var sound = new Audio();
    sound.src = "/SOUND/correcto.mp3";
function cambiarA(){
    
    sound.play();
    setTimeout(() => {
        location.href = "/HTML/Retos/RetoNumeros2.html";
    }, 3000);

    
}
