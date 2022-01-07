//Change l'image courante au passage de la souris.
function changeImage(image){
    image.style.src = image.src = image.src = image.src.replace(".jpg", "_2.jpg");
}
//Remet l'image d'origine à la sortie de la souris. 
function reChangeImage(image){
    image.style.src = image.src = image.src = image.src.replace("_2.jpg", ".jpg");
}