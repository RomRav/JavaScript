//Cache le formulaire d'ajout de contact et la liste de contact. 
displaySection();
let addContactBtn = document.getElementById('add-contact-btn');
let contact = new Object();
let contacts = [];
let nameInput = document.getElementById('name-input');
let firstNameInput = document.getElementById('firstname-input');
let phoneNumberInput = document.getElementById('phone-number-input');
let message = document.getElementById('message');
let regex = new RegExp('(0|\\+33|0033)[1-9][0-9]{8}');
let table = document.getElementById('tableBody');
let stringContact;
getContactToStorage();
//Ecoute du click sur le bouton d'ajout d'un contact.
addContactBtn.addEventListener('click',()=>{
    if(checkFormInput()){
        contact = new Object();
        contact.name = nameInput.value;
        contact.firstname = firstNameInput.value;
        contact.phoneNumber = phoneNumberInput.value;
        console.log(contacts);
        contacts.push(contact);
        setContactsToStorage();
    }
});
//Verifie la saisie du formulaire d'ajout de contact et affiche un message en fonction du résultat.
function checkFormInput(){
    if(nameInput.style.border.match("green") && firstNameInput.style.border.match("green") && phoneNumberInput.style.border.match("green")){
        message.style.color = 'green';
        message.textContent = `Le contact ${nameInput.value} à bien été enregistré.`;
        return true;
    }else{
        message.style.color = 'red';
        message.textContent = `Saisie incorrect.`;
        return false;
    }
}
//Récupére la liste de contact et la place dans le tableau
function contactsToTable(){  
    table.textContent = "";
    let idContact = 0;
    contacts.forEach(element => {    
        //Création d'une nouvelle ligne.  
        let row = table.insertRow(0);
        //Création des cellules.
        let nameCell = row.insertCell(0);
        let firstNameCell = row.insertCell(1);
        let phoneCell = row.insertCell(2);
        let deleteCell = row.insertCell(3);
        //Création du contenu 
        let nameContent = document.createTextNode(element.name);
        let firstNameContent = document.createTextNode(element.firstname);
        let phoneContent = document.createTextNode(element.phoneNumber);
        let deleteContent = document.createElement('button');
        deleteContent.className = "deleteBtn btn btn-danger";
        deleteContent.id = idContact++;
        deleteContent.textContent = "Supprimez";
        //Met les textes dans les cellules.
        nameCell.appendChild(nameContent);
        firstNameCell.appendChild(firstNameContent);
        phoneCell.appendChild(phoneContent);
        deleteCell.appendChild(deleteContent);
    });
}
//Supprime le contact correspondant à l'id envoyé en paramétre.
function createDeleteBtn(id){ 
    contacts.splice(id,1);
    contactsToTable();
}
//Ecoute le click et si il se trouve sur un bouton de suppression des contacts renvoie à la fonction createDeleteBtn() qui le supprime. 
document.addEventListener('click',(ev)=>{
    if(ev.target.matches(".deleteBtn")){
        createDeleteBtn(ev.target.id);
    }else if(ev.target.matches("#show-contact-btn")){
        contactsToTable();
        displaySection("block", "none");
    }else if(ev.target.matches("#show-add-form-btn")){
        displaySection("none", "block");
    }else if(ev.target.matches("#clear-page-btn")){
        displaySection("none", "none");
    }
});
//Gére l'affichage des sections d'ajout de contact et de liste de contact.
function displaySection(contactListStat = "none", contactAddStat = "none"){
    document.querySelector("#contact-form-div").style.display = contactAddStat;
    document.querySelector("#contact-table-div").style.display = contactListStat;
};
//Ecoute la sortie du champs de saisie du nom.
nameInput.addEventListener('blur',(ev)=>{
    inputCheck(ev);
});
//Ecoute la sortie du champs de saisie du prénom.
firstNameInput.addEventListener('blur',(ev)=>{
    inputCheck(ev);
});
//Ecoute la sortie du champs de saisie du numéro de téléphone.
phoneNumberInput.addEventListener('blur',(ev)=>{
    phoneInputCheck(ev);
});
//Verifie que la saisie ne soit pas numérique
function inputCheck(ev){
    if(isNaN(Number.parseInt(ev.target.value) ) == true && ev.target.value != ""){
        inputBorderColorChanger(ev, "green");
    }else{
        inputBorderColorChanger(ev, "red");
    }
}
//Verifie que la saisie correspond à un numéro de téléphone Français.
function phoneInputCheck(ev){
    if(regex.test(ev.target.value) == true && ev.target.value != ""){
        inputBorderColorChanger(ev, "green");
    }else{
        inputBorderColorChanger(ev, "red");
    }
}
//Change la couleur du champs de saisie en fonction du controle de saisie.
function inputBorderColorChanger(ev , color){
    ev.target.style = `border: 1px solid ${color}`;
}
//Stockage de la liste de contact dans le stockage du navigateur.
function setContactsToStorage(){
    if(localStorage.getItem("contacts") != null){
        localStorage.removeItem('contacts');
    }
    stringContacts = contactsTabToString();
    localStorage.setItem("contacts", stringContacts);
}
//Récupération de la liste de contact dans le stockage du navigateur.
function getContactToStorage(){
    if(localStorage.getItem("contacts") != null){
        stringContactToObjTable(localStorage.getItem("contacts"));
    }else{
        contacts = [];
    }
}
//Transforme le contenu du tableau de contact en une chaîne de caractére.
function contactsTabToString(){
    let contactsInString = "";
    for(let item of contacts){
        contactsInString += `${item.name} ${item.firstname} ${item.phoneNumber},`;
    }
    return contactsInString;
}
//Transforme la chîne de caractére de contacts en tableau d'objet de contact.
function stringContactToObjTable(contactString){
    contacts = [];
    contact = new Object();
    let contactsRows = contactString.split(',');
    for(let row of contactsRows){
        let contactTab = row.split(' ');
        if(contactTab[0]!=""){
            contact.name = contactTab[0];
            contact.firstname = contactTab[1];
            contact.phoneNumber = contactTab[2];
            contacts.push(contact);
            contactsToTable();
        }
    }
}
//localStorage.removeItem('contacts');