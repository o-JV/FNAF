let telaPreta = document.getElementById("telaPreta");
let jumpscareVideo = document.getElementById("jumpscareVideo");
let menu = document.getElementById("menu");
let tempoParaParar = 25.083; 
let iniciarButton = document.getElementsByClassName("glitch-text-iniciar")

document.addEventListener("keydown", function iniciar() {
    document.removeEventListener("keydown", iniciar); 
    
    jumpscareVideo.currentTime = 19;  //test, 19s
    
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
    logo.style.display = "flex"
    menu.style.display = "flex";
    menu.style.backgroundImage = 'url("/menu/menu.png")'; 
    menu.style.backgroundSize = "cover"; 
});

window.addEventListener("DOMContentLoaded", () => {

    const glitchTexts = document.querySelectorAll(".glitch-text-iniciar, .glitch-text-opcoes, .glitch-text-creditos, .glitch-text-sair");

    glitchTexts.forEach(el => {
     
      const delay = (Math.random() * 5).toFixed(2) + 's';
      el.style.animationDelay = delay;
    });
  });

  function startGame(){
        window.location.href = "/game/game.html"
  }