let age;
let inputNotOk = true;
//Boucle tant que la saisie n'est pas correct.
do {
    //Demandande de saisie du prénom utilisateur.
    age = window.prompt("Merci de saisir votre âge : ");
    //Verifie si la saisie est valide
    if(isNaN(age) == false)
    {
        //Affichage un message dans une alert en fonction de l'âge saisie.
        if(age>=18)
        {
            alert("Vous êtes majeur.");
        }
        else
        {
            alert("Vous êtes mineur.");
        }
        inputNotOk = false;
    }
    else
    {
    alert("Saisie incorrect.");
    }
} while (inputNotOk);

