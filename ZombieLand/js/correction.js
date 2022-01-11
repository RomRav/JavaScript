// Object Zombie 
const zombie = {};
zombie.spriteWidth = 100; // largeur d'une vignette 

// Object Animation avec le nombre de frame par seconde de l'animation (ici 5) 
let animationId = null, 
    position = 0, 
    positionMax = 11, 
    speed = 200

/** Si le DOM est chargé **/
document.addEventListener('DOMContentLoaded', function(){

    // On récupère la zone du DOM
    zombie.elementHtml = document.querySelector('#zombietomb');
    
    // On lance l'animation
    animationId = requestAnimationFrame(zombieAction);
    
});

/** Fonction pour gérer l'animation du Zombie **/
function zombieAction()
{
    // Si on a fini l'animation retour à 0
    if (position > positionMax-1){ 
        return cancelAnimationFrame(animationId) ;
    }   

    // On met à jour le DOM
    zombie.elementHtml.style.background = `url('img/zombie.png') ${-zombie.spriteWidth * position}px 0px `;

    // On modifie la position de l'animation
    position++;
    
    // lance de nouveau la frame 
    setTimeout(function(){ animationId = requestAnimationFrame(zombieAction)}, speed);
}