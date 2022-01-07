let image = document.getElementById('image1');
//Ajoute une bordure rouge au passage de la souris sur la photo.
image.addEventListener('mouseenter',()=>{
    image.style.border = "3px solid red";
});
//Retire la bordure à la sortie de la souris de la photo.
image.addEventListener('mouseleave',()=>{
    image.style.border = "none";
});