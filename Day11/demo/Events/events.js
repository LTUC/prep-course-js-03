'use strict';

// callback:
// passing numbers as arguments to the function
function sum(c, d) {
    return c + d;
}
sum(2, 3);

// passing funtions as arguments to other function:
function greeting(callback) {

    let userInput = callback("js-03");

    alert(`Hello ${userInput}`);
}

function getName(className) {
    return prompt(`welcome to ${className} Enter your name, `);
}

// greeting(getName);

// events:
// 1. where the event should happen?
const button = document.getElementById("btn");
// 2. what type of event should happen?  click
// 3. what should happen when the event happens? alert("Hello")
button.addEventListener('click', handleClick);

function handleClick() {
    alert("Hello");
}

// when I move my mouse over the second button, I need to change "Surpise" to emoji
// 1 . at the second button
// 2. hover, mouse over
// 3. change the text to emoji

let secondBtn = document.getElementById("secondBtn");
secondBtn.addEventListener("mouseover", handleHover);


function handleHover() {
    secondBtn.textContent = "🚗";
}

// when I submit a form I need to save user data
// 1. form
// 2. submit
// 3. save user data

const formEl = document.getElementById("formID");
formEl.addEventListener("submit", handleSubmit);
// Form sumbission has a default behavior of reloading the page
function handleSubmit(event) {
    event.preventDefault();
    let name = event.target.firstname.value;
    let email = event.target.email.value;

    console.log(name, email);
    // save user data
}
