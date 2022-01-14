let card;
let imgCard;
let cardBody;
let cardTitle;
let cardText;
let refPriceText;
let basketContent = document.getElementById('basket-content');
let basketTotal = document.getElementById('basket-footer');
let productsDiv = document.getElementById('product-list');
let amount;
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
    if(event.target.matches('.Panier')){
        document.getElementById('basket-content').innerHTML="";
        basketMaker();
    }  
    if(event.target.matches('.addProductBtn')){
        toBasket(findProduct(event.target.id));
    } 
    if(event.target.matches('.lessBtn')){
        moreOrLessQuantity('-', event.target.id);
    }
    if(event.target.matches('.moreBtn')){
        moreOrLessQuantity( '+', event.target.id);
    }
    if(event.target.matches('.empty-basket')){
        removeProductFromBasket(event.target.id);
    }
});
//Supprimez un ou tous les produits qui sont dans le panier.
function removeProductFromBasket(id){
    if(id != undefined){
        for(let i = 0; i<basket.length;i++){
            if(basket[i].product.ref == id){
                console.log(i);
                basket.splice(i,1);
            }
        }
    }else{
        basket = [];
    }
    basketMaker();
}
//incrémente ou décrement la quantité de produit dans le panier.
function moreOrLessQuantity(operateur, productRef){
    for(productToModifiy of basket){     
        if(productToModifiy.product.ref == productRef){
            if(operateur == '+'){
                productToModifiy.quantity++;
            }else if(operateur == '-'){
                productToModifiy.quantity--;
            }
        }
    }
    basketMaker();
}
//Verifie si un produit est présent dans le panier
function isInBasket(productToCheck){
    let isIn = false;
    for(basketEl of basket){
        if(basketEl.product.ref == productToCheck.ref){
            basketEl.quantity++;
            isIn = true;
        }
    }
    return isIn;
}
//Ajout le produit au panier
function toBasket(product){
    if(!isInBasket(product)){
        productInBasket = new Object();
        productInBasket.product = product;
        productInBasket.quantity = 1;
        basket.push(productInBasket);
    }
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
//Crée la liste de produits dans le panier
function liBasketMaker(){
    let ulElement = listMaker('list-group');
    for(productBasket of basket){
        let liElement = listRowMaker('list-group-item');
        let textElement = paragraphMaker(productBasket.product.name,  '');
        let qtyManagerDiv = createEle('div');
        qtyManagerDiv.className = 'd-flex';
        let priceText = paragraphMaker(`Prix unitaire : ${(productBasket.product.price).toFixed(2)}€`);
        let totalProductText = paragraphMaker(`Total : ${(productBasket.product.price * productBasket.quantity).toFixed(2)}€`)
        let lessQtyBtn = buttonMaker(productBasket.product.ref, 'btn btn-danger ms-auto me-1 lessBtn', '-');
        let moreQtyBtn = buttonMaker(productBasket.product.ref, 'btn btn-success ms-1 me-1 moreBtn', '+');
        let quantitytextElement = paragraphMaker(`Qté: ${(productBasket.quantity)}`,'text-end');
        qtyManagerDiv.appendChild(priceText);
        qtyManagerDiv.appendChild(lessQtyBtn);
        qtyManagerDiv.appendChild(quantitytextElement);
        qtyManagerDiv.appendChild(moreQtyBtn);
        qtyManagerDiv.appendChild(totalProductText);
        liElement.appendChild(textElement);
        liElement.appendChild(buttonMaker(productBasket.product.ref, "empty-basket btn btn-danger" , "<i class=\"bi bi-trash-fill\"></i>"));
        liElement.appendChild(qtyManagerDiv);
        ulElement.appendChild(liElement);
    }
    return ulElement;
}
//Crée le panier
function basketMaker(){
    basketContent.innerHTML = '';
    basketTotal.innerHTML = '';
    let basketDiv = createEle('div');
    let ulElement = liBasketMaker()
    let emptyBasket = buttonMaker("", "empty-basket btn btn-danger" , "<i class=\"bi bi-trash-fill\"></i>")
    basketDiv.appendChild(ulElement);
    basketContent.appendChild(basketDiv);
    basketAmount();
    basketTotal.appendChild(emptyBasket);
    basketTotal.appendChild(paragraphMaker(`Total : ${(amount).toFixed(2)}€`));
}
//Calcule du montant du panier
function basketAmount(){
    amount = 0;
    for(prod of basket){
        amount += (prod.product.price * prod.quantity);
    }
}
//Crée une carte de produit.
function cardMaker(product){
    //Création des élèments de la carte
    //carte
    card = divMaker('card m-auto', 'width: 18rem');
    //corp de la carte
    cardBody = divMaker('card-body',"");
    //image de la carte
    imgCard = imageMaker(`./images/${product.img}`, 'card-img-top');
    //Titre de la carte
    cardTitle = titleMaker(product.name, 'card-title');
    //Texte de la carte
    cardText = paragraphMaker(product.detail, 'card-text');
    //Référence et prix
    refPriceText = paragraphMaker(`ref : ${product.ref} / Prix : ${(product.price).toFixed(2)}€`, 'card-text')
    //Bouton de la carte
    cardBtn = buttonMaker(product.ref ,'btn btn-primary addProductBtn', "Ajoutez au panier");
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
//Création d'une div
function divMaker(className, style){
    let divElement = createEle('div');
    divElement.className = className;
    divElement.style = style;
    return divElement;
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
    let titleElement = createEle('h5');
    titleElement.className = className;
    titleElement.innerText = title;
    return titleElement;
}
//Création de paragraphe
function paragraphMaker(p, className){
    let pElement = createEle('p');
    pElement.className = className;
    pElement.innerText = p;
    return pElement
}
//Création d'un bouton
function buttonMaker(id, className, text){
    let btnElement = createEle('button');
    btnElement.className = className;
    btnElement.id = id;
    btnElement.innerHTML = text;
    return btnElement;
}
//Création d'une liste
function listMaker(className){
    let liElement = createEle('ul');
    liElement.className = className;
    return liElement;
}
//Création d'une ligne de liste
function listRowMaker(className){
    let liElement = createEle('li');
    liElement.className = className;
    return liElement;
}
//Création d'un element
function createEle(element){
    return document.createElement(element);
}
