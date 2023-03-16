// Cart 

let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');

//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

// Cart Working JS

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded",ready);
} else {
    ready();
};

//making function 

function ready() {
    //REMOVE ITEMS FROM CART 
    var removeCartButtons = document.getElementsByClassName("cart-remove");
    console.log(removeCartButtons);
    for (var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i];
        button.addEventListener("click",removeCartItem);
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName("cart-quantity"); 
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

};

//REMOVE ITEMS FROM CART 

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    //updatetotal();
};

//quantity chagnes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
};

//Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++){ 
        var cartBox = cartBoxes[i];
        var priceElement= cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));
        var qauntity = qauntityElement.value;
        total = total + (price * quantityElement);

        document.getElementsByClassName("total-price")[0].innerText = '$' + total;
    }
};