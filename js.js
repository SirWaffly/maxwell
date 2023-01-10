const meow = new Audio();
const bg = new Audio('bgmusic.mp3');
meow.src = "meow.mp3";
var repetir = true;

function playbgmusic() {
    if (repetir = true) {
        bg.play();
        bg.loop = true;
    }
    repetir = false;
}

function changeBg() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";  
    document.body.style.background = bgColor;
}