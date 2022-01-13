let card;
let imgCard;
let cardBody;
let cardTitle;
let cardText;
let refPriceText;
let productsDiv = document.getElementById('product-list');
let productInBasket;
let basket = [];
let selectedCategoryTab = [];
let painChocolat = {
    name: 'Pain au chocolat',
    img: 'pains-au-chocolat.jpg',
    detail: 'Pâte levée feuilletée fourrée de deux barres de chocolat.',
    category: 'Viennoiseries',
    price: 1.50,
    ref: 1
};
let croissant = {
    name: 'Croissant',
    img: 'croissant.jpg',
    detail: 'Pâte levée feuilletée.',
    category: 'Viennoiseries',
    price: 1.30,
    ref: 2
};
let eclaire = {
    name: 'Eclaire au chocolat',
    img: 'eclaire.jpg',
    detail: 'Pâte à choux foirrée de crème au chocolat.',
    category: 'Patisseries',
    price: 3.10,
    ref: 3
};
let choux = {
    name: 'Choux à la crème',
    img: 'choux.jpg',
    detail: 'Pâte à choux foirrée de Crème pâtissière.',
    category: 'Patisseries',
    price: 2,
    ref: 4
};
let macaron = {
    name: 'Macaron',
    img: 'macarons.jpg',
    detail: 'Assortiment de macarons (Framboise, Café, Chocolat/Passion, Vanille).',
    category: 'Patisseries',
    price: 4,
    ref: 5
};
let campagne = {
    name: 'Pain de campagne',
    img: 'campagne.jpg',
    detail: 'Pain aux goûts et caractéristiques du pain ordinaire des campagnes d\'autrefois.',
    category: 'Pains',
    price: 4,
    ref: 6
};
let baguette = {
    name: 'Pain baguette',
    img: 'baguettes.jpg',
    detail: 'Pain croustillant de forme allongé.',
    category: 'Pains',
    price: 1.10,
    ref: 7
};
let boule = {
    name: 'Boule',
    img: 'boule.jpg',
    detail: 'Pain rustique en forme de boule.',
    category: 'Pains',
    price: 1.50,
    ref: 8
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
    if(event.target.matches('.addProductBtn')){
        toBasket(findProduct(event.target.id));
    } 
});
//Ajout le produit au tableau panier
function toBasket(product){
    productInBasket = new Object();
    productInBasket.product = product;
    productInBasket.quantity = 1;
    basket.push(productInBasket);
    console.log(basket)
}
//Trouve un produit dans la liste des produits
function findProduct(id){
    for (const product of products) {
        if(product.ref == id)
            return product;
    }
}
//Boucle sur les produits et les affiches en fonction de la catégorie choisit.
function selectedCategoryManager(category){
    productsDiv.innerHTML="";
    for (const product of products) {
        if(product.category == category){
            cardMaker(product);
        }
    }
}
//Crée une carte de produit.
function cardMaker(product){
    //Création des élèments de la carte
    //carte
    card = document.createElement('div');
    card.className = 'card m-auto';
    card.style = 'width: 18rem';
    //corp de la carte
    cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    //image de la carte
    imgCard = imageMaker(`./images/${product.img}`, 'card-img-top');
    //Titre de la carte
    cardTitle = titleMaker(product.name, 'card-title');
    //Texte de la carte
    cardText = paragraphMaker(product.detail, 'card-text');
    //Référence et prix
    refPriceText = paragraphMaker(`ref : ${product.ref} / Prix : ${product.price}€`, 'card-text')
    //Bouton de la carte
    cardBtn = buttonMaker(product.ref ,'btn btn-primary addProductBtn');
    //Ajout des élémént dans la carte
    card.appendChild(imgCard);
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(refPriceText);
    cardBody.appendChild(cardBtn);
    card.appendChild(cardBody);
    productsDiv.appendChild(card);
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
