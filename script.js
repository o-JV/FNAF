let telaPreta = document.getElementById("telaPreta");
let jumpscareVideo = document.getElementById("jumpscareVideo");
let menu = document.getElementById("menu");
let tempoParaParar = 25.083; 

document.addEventListener("keydown", function iniciar() {
    document.removeEventListener("keydown", iniciar); 
    
    jumpscareVideo.currentTime = 19; 
    
    setTimeout(() => {
        telaPreta.style.display = "none";
        jumpscareVideo.style.display = "block";
        jumpscareVideo.play();
    }, 200);
});

jumpscareVideo.addEventListener("timeupdate", function verificarTempo() {
    if (jumpscareVideo.currentTime >= tempoParaParar) {
        jumpscareVideo.removeEventListener("timeupdate", verificarTempo);
        jumpscareVideo.currentTime = jumpscareVideo.duration;
        jumpscareVideo.dispatchEvent(new Event("ended")); 
    }
});

jumpscareVideo.addEventListener("ended", function() {
    jumpscareVideo.style.display = "none";
    menu.style.display = "flex";
    menu.style.backgroundImage = 'url("/menu.png")'; 
    menu.style.backgroundSize = "cover"; 
    menu.style.backgroundPosition = "center"; 
});
