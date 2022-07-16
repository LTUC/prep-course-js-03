'use strict';

const allDrinks = []; // menu
const parentEl = document.getElementById("menu");

function Drink(name ,ingredients, image, isCold, isHot, price ) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = price;
    // console.log(this)
    allDrinks.push(this);
}

// method to print the name drink and the price
Drink.prototype.printMenu = function () {
    // 1. create Element
    const pEl = document.createElement("p");
    // 2. add content or attributes 
    pEl.textContent = `${this.name} : ${this.price} JD`;
    // 3. append to the DOM
    parentEl.appendChild(pEl);


    
}

const mocha = new Drink("Mocha", ["coffee", "milk", "sugar"], "../assets/mocha.png", true, false, 5);
const latte = new Drink("Latte", ["coffee", "milk", "sugar", "espresso"], "../assets/latte.png", true, true, 1);
const tea = new Drink("Tea", ["tea", "milk", "sugar"], "", true, false, 2);


for (let i = 0; i < allDrinks.length; i++){
    allDrinks[i].printMenu();
}


document.write("Welcome to our Caffee");

// Event Listener
const form = document.getElementById("formID");
form.addEventListener('submit', handleSubmit);


function handleSubmit(event) {
    event.preventDefault();

    let drinkname = event.target.drinkname.value;
    let ingredients = event.target.ingredients.value;
    let image = event.target.image.value;
    let price = event.target.drinkprice.value;
    let isCold = event.target.cold.checked; 
    let isHot = event.target.hot.checked; 

    const newDrink = new Drink(drinkname, ingredients, image, isCold, isHot, price);
    newDrink.printMenu();
}

