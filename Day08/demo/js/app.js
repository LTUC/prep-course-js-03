'use strict';


// console.log("I am alive");

username = "Ayad";
console.log(username)



var username;

// Hoisting

welcome();

function welcome() {
    console.log("Welcome to my website");
}

// welcome();

// Scope:
// Global Scope

// Block Scope // ES6 {}
// var can be accessed outside the block scope
// let and const can't be accessed outside the block scope

if (true) {
    // var testingVar = "I am a variable";
    // let testingLet = "I am a let";
    const testingConst = "I am a const";

    // console.log("inside the block", testingConst);
}

// for (let i = 0; i < 10; i++) { 
//     console.log(i);
// }

// console.log("outside the block", testingConst);


// function Scope

function myFunction(){
    // var testingVar = "I am a variable";
    // let testingLet = "I am a let";
    // const testingConst = "I am a const";
    // console.log("inside the function", testingConst);
    // console.log(testingVar)
    // console.log(testingLet)
    // console.log(testingConst)
}
myFunction();
// console.log("outside the function", testingConst);

// Global Scope:

var testingVar = "I am a variable";
let testingLet = "I am a let";
const testingConst = "I am a const";

testingLet = "new value";
console.log(testingLet);
// const variables can't be reassigned

testingConst = "new const value";
console.log(testingConst);


// 