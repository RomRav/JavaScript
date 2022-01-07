let text = document.querySelector('p');
let buttons = document.querySelectorAll('a');
//Boucle sur le tableau des liens.
buttons.forEach(element => {
    //Crée une écoute sur chanque liens.
    element.addEventListener('click',(ev)=>{
        //Verifie le text du lien et en fonction affiche ou cache le texte.
        if(ev.target.text == "Afficher")
        {
            text.style.display = "block";
        }
        else
        {
            text.style.display = "none";
        }
    });
});
