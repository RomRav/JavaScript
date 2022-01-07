let number1;
let number2;
let result;
let inputIsNotOk;
//Boucle tant que la saisie n'est pas correct.
do {
    //Demandande de saisie de deux nombre à virgule.
    number1 = window.prompt("Merci de saisir un nombre à virgule : ");
    number2 = window.prompt("Merci de saisir un autre nombre à virgule : ");
    //Verifie si la saisie est valide.
if( isFloat(number1) == true && isFloat(number2) == true)
{
    //Transformation du 1er nombre en entier.
    number1 = parseInt(number1);
    //Multiplication des deux nombres.
    result = number1*parseFloat(number2)
    //Affichage du résultat de la multiplication.
    alert(`${number1} X ${number2} = ${result}.`);
    inputIsNotOk = false;
}
else
{
    //Affiche un message d'erreur de saisie.
    alert("Une ou les deux saisie sont incorrect.");
    inputIsNotOk = true;
}   
} while (inputIsNotOk);

//Verifie si la donnée envoyé en paramétre est bien un nombre flotant.
function isFloat(n){
    return !isNaN(n) && n % 1 !== 0;
}