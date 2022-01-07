let image = document.getElementById('image1');
//Change l'image au passage de la souris sur la photo.
image.addEventListener('mouseenter',()=>{
    image.style.src = image.src = "./assets/images/image1_2.jpg";
});
//Change l'image à la sortie de la souris de la photo.
image.addEventListener('mouseleave',()=>{
    image.style.src = image.src = "./assets/images/image1.jpg";
});