'use strict';

// Creating an object:
// const user = "Ayad";

const user = {
    // properties:
    name: "Bayan",
    age: 30,
    loveDogs: true,
    favFood: ["Fast food", "Pizza", "Pasta"],

    // methods:
    walk: function () {
        // console.log("Bayan loves walking");
         
        return "Bayan loves walking";
    },

    greeting: function () {
        console.log("Greetings from Bayan")
    },
    printInfo: function () {
        console.log(this)
        // print the info of this user
        // add strings with
        // concatation  +
        console.log("My name is " + this.name)
        // Interpolation 
        console.log("My age is " + this.age);
        console.log(`My age is ${this.age}`);
         
        if (this.loveDogs) {
             console.log( this.name + " loves dogs");
        } else {
            console.log(this.name + " doesn't love dogs");
        }
    
        console.log(this.name, this.age, this.loveDogs);
       
    }

}

user.printInfo();



// console.log(user)
// access a  specific property
// dot notation
// user.name
// 



user.age = 24;

// console.log("Bayan's age is ", user.age)


const result = user.walk();
// console.log(result);

// console.log("walk method: ", user.walk())

// user.walk();
// user.greeting();

// Barket Notation:

user["age"] = 30;



// console.log(user['age'])

// add a new property:

user.favColor = "black";

user.eat = function () {
    console.log("Bayan loves fast food");
}
// user["eat"]();


// console.log(user.favFood);


// delete a property:

 user.favFood;

// console.log(user)

// loop through an object:
for (const key in user) {
    // console.log("key",key)
    // console.log("value",user[key])
}


// at()

let resutl = user.favFood.at(-2);
// user.favFood[user.favFood.length - 1];

console.log(resutl)
