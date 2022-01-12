let inputNumber;
let parseIntInput;
let again = true; 
let tryCounter = 1;
let button = document.getElementById('valBtn');
//Création du nombre mystére.
let secretNumber = randomNumberDispenser();
//Message d'affichage du compteur.
let counterMessage;
//Ecoute le click sur le bouton
button.addEventListener('click',()=>{
    //Récupére l'élément de saisie et le convertie en entier.
    inputNumber = document.getElementById('inputNumber');
    parseIntInput = parseInt(inputNumber.value,10);
    //Verifie si la saisie est valide
    if(Number.isInteger(parseIntInput))
    {
        showCounter(tryCounter++);
        checkInput(parseIntInput);
    }
    else
    {
        alert("Saisie incorrect.");
    }
});
//Renvoie un nombre aléatoire compris entre 0 et 100.
function randomNumberDispenser(){
    return Math.floor(Math.random() * 100);
}

//Change l'affichage du compte d'essaie.
function showCounter(counter){
    counterMessage= document.getElementById('counter');
    console.log(counter);
    if(counter<=1){
        counterMessage.textContent = `${counter} essai`;
    }else if(counter>=2){
        counterMessage.textContent = `${counter} essais`;
    }
    if(counter>=5){
        counterMessage.style.color = 'red';
    }
}
//Verifie la saisie et affiche un message en fonction du résultat de la vérification.
function checkInput(number){
    //Affiche un message en fonction de la saisie (plus/moins).
    if(number > secretNumber)
    {
        alert("moins.");
    }
    else if(number < secretNumber)
    {
        alert("Plus.");
    }else{
        //Message de felicitation, remise à zero du compteur d'essai et relance un nouveau nombre aléatoir.
        alert(`Bravo ${number} est bien le nombre secret.`);
        tryCounter = o;
        secretNumber = randomNumberDispenser();
    }
}