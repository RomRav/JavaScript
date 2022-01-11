//Div contenant le zombie
let imgDiv = document.getElementById('zombietomb');
imgDiv.style.overflow = "hidden";
imgDiv.style.position = "relative";
var moveStep = 25;
var imgDivPositionX = moveStep;
var imgDivPositionY = moveStep;
//Création et ajout dans la div de l'image.
let img = new Image();
img.src = './img/zombie.png';
img.id = 'zombieImg';
img.style.position = "relative";
imgDiv.appendChild(img);
var zombieImg = document.getElementById("zombieImg");
//Definition de la methode requestAnimationFrame en fonction de l'explorateur utilisé.
window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
var start = null;
//Fonction qui anime l'image en la déplaçant en fonction du timestamp.
function step(timestamp) {
  var progress;
  if (start === null) start = timestamp;
  progress = timestamp - start;
  zombieImg.style.right = Math.min(100 * Math.ceil(progress/75), 1000) + "px";
  if (progress < 10000) {
    requestAnimationFrame(step);
  }else{
      cancelAnimationFrame(requestAnimationFrame(step));
  }
}
requestAnimationFrame(step);
//Gestion du déplacement de la div.
addEventListener('keydown',(ev)=>{
    console.log(ev.key);
    switch (ev.key) {
        case "ArrowRight": 
            imgDiv.style.transform = "scalex(-1)";
            imgDivPositionX += moveStep;
            imgDiv.style.left = imgDivPositionX + "px";
            break;
        case "ArrowLeft": 
            if(imgDivPositionX>0){
                imgDiv.style.transform = "scalex(1)";
                imgDivPositionX -= moveStep;
                imgDiv.style.left = imgDivPositionX + "px";
            }
            break;
        case "ArrowUp": 
            if(imgDivPositionY>0){
                console.log();
                imgDivPositionY -= moveStep;
                imgDiv.style.top = imgDivPositionY + "px";
                }
                break;
        case "ArrowDown": 
            if(imgDivPositionY>=0){
                imgDivPositionY += moveStep;
                imgDiv.style.top = imgDivPositionY + "px";
            }
            break;
        default:
            break;
    }
});
