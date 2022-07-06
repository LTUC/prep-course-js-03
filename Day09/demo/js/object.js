'use strict';
// DRY : Don't repeat yourself

const user = {
    name: "Bayan",
    age: 30,
    loveDogs: true,
    favFood: ["Fast food", "Pizza", "Pasta"],
    walk: function () {
        return `${this.name} loves walking`;
    },
    greeting: function () {
        console.log("Greetings from " + this.name);
    },
}

const mohammad = {
    name: "Mohammad",
    age: 27,
    loveDogs: true,
    favFood: ["Fast food", "Mansaf"],
    walk: function () {
        return `${this.name} loves walking`;
    },
    greeting: function () {
        console.log("Greetings from " + this.name);
    },
}

mohammad.walk()


const zaid = {
    name: "Zaid",
    age: 24,
    loveDogs: false,
    favFood: ["Fires", "Burger"],
    walk: function () {
        return `${this.name} loves walking`;
    },
    greeting: function () {
        console.log("Greetings from " + this.name);
    },
}