let pupilName;
let gradeInput;
let nameInputDiv;
let again = true; 
let medium;
let grades = [];
let gradeNumber = 0;
let nameBtn = document.getElementById('valBtn');
let gradeBtn = document.getElementById('gradeBtn');
let message = document.getElementById('message');
let showPupilName = document.getElementById('showPupilName');
let nameForm = document.getElementById('pupile-name-form');
let gradesFrom = document.getElementById('grade-form');
//Cache le formulaire de selection de note.
gradesFrom.hidden = true;
//Ecoute le click sur le bouton du formulaire de saisie du nom de l'élève.
nameBtn.addEventListener('click',()=>{
    pupilName = document.getElementById('pupilName').value;
    //verifie que la saisie correspond à un nom.
    if(pupilName.length >= 1 && pupilName.length <= 47 && isNaN(pupilName) == true){
        showHideInputDiv();
        showPupilName.textContent += pupilName;
        
    }else{
        message.textContent = "Saisie incorrect."
    }  
});
//Ecoute du bouton de validation des notes.
gradeBtn.addEventListener('click',()=>{
    if(grades.length<=4){
        gradeInput = document.getElementById('grade').value;
        grades.push(gradeInput);
        manageMessage();
    }else{
        gradesMedium();
        showHideInputDiv();
        message.innerHTML = `</br> Moyenne de ${pupilName} : ${medium}.`;
        mediumAppreciation();
    }
});
//Affiche et cache les formulaires lors de l'entrée d'un nom d'éléve.
function showHideInputDiv(){
    if(gradesFrom.hidden == true){
        gradesFrom.hidden = false;
        nameForm.hidden = true;
    }else{
        gradesFrom.hidden = true;
        nameForm.hidden = true;
    }
}
//Gére l'affichage des notes.
function manageMessage(){
    message.textContent = "";
    let counter = 0;
    grades.forEach(element => {
        counter++;
        message.innerHTML += `</br> note ${counter} : ${element}`;
    });  
}
//Calcule de la moyenne
function gradesMedium(){
    let sum = 0;
    grades.forEach(element => {  
        sum += Number.parseInt(element);
    });
    medium = sum / grades.length;
}
//Gestion du message d'appreciation de la moyenne.
function mediumAppreciation(){
    message.style.transition = "all 1s";
    if(medium < 10){
        message.innerHTML += `</br> En dessous de la moyenne.`;
        message.style.color = 'white';
        message.style.backgroundColor = 'red';
    }else if(medium < 13){
        message.innerHTML += `</br> Moyen.`;
        message.style.color = 'white';
        message.style.backgroundColor = 'cadetblue';
    }else if(medium < 16){
        message.innerHTML += `</br> Bien.`;
        message.style.color = 'white';
        message.style.backgroundColor = 'aquamarine';
    }else if(medium < 20){
        message.innerHTML += `</br> très bien.`;
        message.style.color = 'white';
        message.style.backgroundColor = 'green';
    }else{
        message.innerHTML += `</br> Excellent.`;
        message.style.color = 'white';
        message.style.background = 'linear-gradient(aquamarine, green)';
    }
}



















//Change l'affichage du compte d'essaie.
function showCounter(counter){
    counterMessage= document.getElementById('counter');
    console.log(counter);
    if(counter<=1){
        counterMessage.textContent = `${counter} essaie`;
    }else if(counter>=2){
        counterMessage.textContent = `${counter} essaies`;
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