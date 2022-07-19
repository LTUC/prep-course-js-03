'use strict';
// order of excustion
const allDrinks = [];
const parentEl = document.getElementById("menu");
const form = document.getElementById("formID");

function Drink(name, ingredients, image, isCold, isHot, price) {
    this.name = name;
    this.ingredients = ingredients;
    this.image = image;
    this.isCold = isCold;
    this.isHot = isHot;
    this.price = price;
    allDrinks.push(this);
}


Drink.prototype.printMenu = function () {
    // 1. create Element
    const pEl = document.createElement("p");
    // 2. add content or attributes 
    pEl.textContent = `${this.name} : ${this.price} JD`;
    // 3. append to the DOM
    parentEl.appendChild(pEl);
}
console.log(1)

new Drink("Mocha", ["coffee", "milk", "sugar"], "../assets/mocha.png", true, false, 5);
new Drink("Latte", ["coffee", "milk", "sugar", "espresso"], "../assets/latte.png", true, true, 1);
new Drink("Tea", ["tea", "milk", "sugar"], "", true, false, 2);
// allDrinks should have 3 objects

// Event Listener // event driven
form.addEventListener('submit', handleSubmit);

getData();


// functions:
function handleSubmit(event) {
    event.preventDefault();
    console.log(3);
    let drinkname = event.target.drinkname.value;
    let ingredients = event.target.ingredients.value;
    let image = event.target.image.value;
    let price = event.target.drinkprice.value;
    let isCold = event.target.cold.checked;
    let isHot = event.target.hot.checked;

    const newDrink = new Drink(drinkname, ingredients, image, isCold, isHot, price);
    newDrink.printMenu();
    saveData();
}
// Local Storage
// optional chaning
function saveData() {
    console.log(4);
    let strifyedData = JSON.stringify(allDrinks);
    localStorage.setItem("Drinks", strifyedData);
    console.info('Local Storage Updated');
}
function getData() {
    console.log(2);
    let retrivedData = localStorage.getItem("Drinks");
    let parsedData = JSON.parse(retrivedData)
    console.log("Data from ls", parsedData);
    if (parsedData != null) {
        for (let i = 0; i < parsedData.length; i++) { //3 // allDrinks[3]?.name
            if (allDrinks[i]?.name !== parsedData[i].name) { 
                new Drink(parsedData[i].name, parsedData[i].ingredients, parsedData[i].image, parsedData[i].isCold, parsedData[i].isHot, parsedData[i].price);
            }

        }
    }
    // spreading the array
    // [... new Set(allDrinks)]
    // the erorr is hapening in he allDrinks
    console.log("Data from constructor", allDrinks);
    for (let i = 0; i < allDrinks.length; i++) {
        allDrinks[i].printMenu();
    }
}

