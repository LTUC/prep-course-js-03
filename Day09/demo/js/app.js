'use strict';

const allDrinks = []; // menu

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
    console.log(`${this.name} : ${this.price} JD  \n`);
    document.write(`<p>${this.name} : ${this.price} JD\n </p>`)
}

const mocha = new Drink("Mocha", ["coffee", "milk", "sugar"], "../assets/mocha.png", true, false, 5);
const latte = new Drink("Latte", ["coffee", "milk", "sugar", "espresso"], "../assets/latte.png", true, true, 1);
const tea = new Drink("Tea", ["tea", "milk", "sugar"], "", true, false, 2);


for (let i = 0; i < allDrinks.length; i++){
    // string interporlation // ES6
    // console.log(allDrinks[i]);
    allDrinks[i].printMenu();
}


// mocha.printMenu();
// latte.printMenu();
// tea.printMenu();
// milk.
document.write("Welcome to our Caffee")



// console.dir(document);