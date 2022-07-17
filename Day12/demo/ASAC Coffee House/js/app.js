'use strict';

const allDrinks = []; // menu
const parentEl = document.getElementById("menu");

function Drink(name, ingredients, image, isCold, isHot, price) {
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

// new instance, instantiation 
const mocha = new Drink("Mocha", ["coffee", "milk", "sugar"], "../assets/mocha.png", true, false, 5);
const latte = new Drink("Latte", ["coffee", "milk", "sugar", "espresso"], "../assets/latte.png", true, true, 1);
const tea = new Drink("Tea", ["tea", "milk", "sugar"], "", true, false, 2);


// for (let i = 0; i < allDrinks.length; i++) {
//     allDrinks[i].printMenu();
// }


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
    // a new object is added to allDrinks array
    newDrink.printMenu(); // is a method linked to constructor
    saveData(); // is a function
}
// Local Storage
// save my data to the local storage
function saveData() {
    // what do I need to store?
    let strifyedData = JSON.stringify(allDrinks);
    localStorage.setItem("Drinks", strifyedData);
    console.log('Local Storage Updated')
}


// get my data from the local storage// in the menu
// rendering the menu from the local storage

function getData() {
    // pass the key to get the value you want
    let retrivedData = localStorage.getItem("Drinks");
    console.log(retrivedData);
    console.log(typeof retrivedData); // string
    // convert the string to an array
    let parsedData = JSON.parse(retrivedData)
    console.log(parsedData);
    console.log(typeof parsedData); // object , parsedData = allDrinks
    
    // re-instantioation
    // I have items in array, I need to make sure not to save a item that already exists in my array
    if (parsedData != null) {
        for (let i = 0; i < parsedData.length; i++) {

            new Drink(parsedData[i].name, parsedData[i].ingredients, parsedData[i].image, parsedData[i].isCold, parsedData[i].isHot, parsedData[i].price);
            // parsedData[i].printMenu();
        }
    }
  

    for (let i = 0; i < allDrinks.length; i++) {
        allDrinks[i].printMenu();
    }
}

getData();