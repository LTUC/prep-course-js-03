'use strict';

console.log(localStorage);
// 1. localStorage.clear(): it will clear all the data in the local storage
localStorage.clear();
// 2. localStorage.setItem("key", "value") : it will save data in the local storage
// what is the input/ type of the input, what does it return, type of the output
localStorage.setItem("name", "Sedra");
localStorage.setItem("name", "21");
// 3. localStorage.getItem(): it will get the value of specific key
localStorage.getItem("last name")// null
let nameValue = localStorage.getItem("name")// Sedra
console.log(nameValue);
let ageValue = localStorage.getItem("age")// 21
console.log(ageValue);
// 4. localStorage.removeItem(): it will remove the value of specific key
// localStorage.removeItem("age");