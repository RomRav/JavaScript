let text = document.getElementById('text');
let divs = document.querySelectorAll('div');
//Boucle sur le tableau des div.
divs.forEach(element => {
    //Verifie si la div courante contient un attribut color.
    if(element.matches('.color')){
        //Ecoute le clique sur la div et change la couleur du text en fonction de la couleur de la div.
        element.addEventListener('click',()=>{
            console.log(element.classList[1]);
            text.style.color = element.classList[1];
        });
    }
});

