let InputNumber;
let secretNumber = 45;
let again = true; 
//Boucle tant que la saisie n'est pas correct.
do {
    //Demandande de saisie du prénom utilisateur.
    InputNumber = window.prompt("Saisissez un nombre pour devinez le nombre secret : ");
    //Verifie si la saisie est valide
    if(isNaN(InputNumber) == false)
    {
        //Affiche un message en fonction de la saisie (plus petit/grand).
        if(InputNumber>secretNumber)
        {
            alert("Plus grand.");
        }
        else if(InputNumber<secretNumber)
        {
            alert("Plus petit.");
        }else{
            alert(`Bravo ${InputNumber} est bien le nombre secret.`);
            //Arret la boucle.
            again = false;
        }
    }
    else
    {
        alert("Saisie incorrect.");
    }
} while (again);