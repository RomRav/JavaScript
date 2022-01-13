let card;
let imgCard;
let cardBody;
let cardTitle;
let cardText;
let productId = 0;
let productsDiv = document.getElementById('product-list');
let selectedCategoryTab = [];
let painChocolat = {
    name: 'Pain au chocolat',
    img: 'pains-au-chocolat.jpg',
    detail: 'Pâte levée feuilletée fourrée de deux barres de chocolat.',
    category: 'Viennoiseries',
    prix: 1.50
};
let croissant = {
    name: 'Croissant',
    img: 'croissant.jpg',
    detail: 'Pâte levée feuilletée.',
    category: 'Viennoiseries',
    prix: 1.30
};
let eclaire = {
    name: 'Eclaire au chocolat',
    img: 'eclaire.jpg',
    detail: 'Pâte à choux foirrée de crème au chocolat.',
    category: 'Patisseries',
    prix: 3.10
};
let choux = {
    name: 'Choux à la crème',
    img: 'choux.jpg',
    detail: 'Pâte à choux foirrée de Crème pâtissière.',
    category: 'Patisseries',
    prix: 2
};
let macaron = {
    name: 'Macaron',
    img: 'macarons.jpg',
    detail: 'Assortiment de macarons (Framboise, Café, Chocolat/Passion, Vanille).',
    category: 'Patisseries',
    prix: 4
};
let campagne = {
    name: 'Pain de campagne',
    img: 'campagne.jpg',
    detail: 'Pain aux goûts et caractéristiques du pain ordinaire des campagnes d\'autrefois.',
    category: 'Pains',
    prix: 4
};
let baguette = {
    name: 'Pain baguette',
    img: 'baguettes.jpg',
    detail: 'Pain croustillant de forme allongé.',
    category: 'Pains',
    prix: 1.10
};
let boule = {
    name: 'Boule',
    img: 'boule.jpg',
    detail: 'Pain rustique en forme de boule.',
    category: 'Pains',
    prix: 1.50
};
let products = [baguette, campagne, macaron, choux, eclaire, croissant, painChocolat, boule];
//Ecoute du click
document.addEventListener('click', event =>{
    if(event.target.matches('.Pains'))
    {   
        selectedCategoryManager('Pains');
    }
    if(event.target.matches('.Viennoiseries')){
        selectedCategoryManager('Viennoiseries');
    }
    if(event.target.matches('.Patisseries')){
        selectedCategoryManager('Patisseries');
    }
    if(event.target.matches('.Panier')){}   
});
//Boucle sur les produits et les affiches en fonction de la catégorie choisit.
function selectedCategoryManager(category){
    productsDiv.innerHTML="";
    for (const product of products) {
        console.log('cat : ' + category)
        console.log(product.category)
        if(product.category == category){
            console.log(product.category)
            cardMaker(product);
        }
    }

    /* switch(category){
        case 'Pains' :
            selectedCategoryTab;
            break;
        case 'Patisseries' :

            selectedCategoryTab;
            break;
        case 'Viennoiseries' :
            selectedCategoryTab;
            break;
        default:
            break;
    }
    */
}
//Crée une carte de produit.
function cardMaker(product){
    //Création des élèments de la carte
    card = document.createElement('div');
    card.className = 'card m-auto';
    card.style = 'width: 18rem';
    cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    imgCard = imageMaker(`./images/${product.img}`, 'card-img-top');
    cardTitle = titleMaker(product.name, 'card-title');
    cardText = paragraphMaker(product.detail, 'card-text');
    cardBtn = buttonMaker(productId ,'btn btn-primary');
    //Ajout des élémént dans la carte
    card.appendChild(imgCard);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardBtn);
    card.appendChild(cardBody);
    productsDiv.appendChild(card);
    productId++;
    return card;
}
//Création de l'image de la carte
function imageMaker(img, className){
    let imgElement = new Image();
    imgElement.src = img;
    imgElement.className = className;
    return imgElement;
}
//Création du titre de la carte
function titleMaker(title, className){
    let titleElement = document.createElement('h5');
    titleElement.className = className;
    titleElement.innerText = title;
    return titleElement;
}
//Création de paragraphe
function paragraphMaker(p, className){
    let pElement = document.createElement('p');
    pElement.className = className;
    pElement.innerText = p;
    return pElement
}
//Creation d'un bouton
function buttonMaker(id, className){
    let btnElement = document.createElement('button');
    btnElement.className = className;
    btnElement.id = id;
    btnElement.innerHTML = "Ajoutez au panier";
    return btnElement;
}
