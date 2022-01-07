let button = document.getElementById('submit');
let confirmPassword = document.getElementById('confirmPassword');
let password = document.getElementById('password');
//Verifie le contenue des deux entrées et change la couleur des zones de saisie, si la saisie est identique.
button.addEventListener('click',()=>{
    if(password.value == confirmPassword.value){
        password.style.border = '';
        confirmPassword.style.border = '';
    }else{
        password.style.border = '1px solid red';
        confirmPassword.style.border = '1px solid red';
    }  
});