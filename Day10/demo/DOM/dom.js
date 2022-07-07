'use strict';

console.log(document)
document.title = "JS 03"

const divEls = document.getElementsByTagName("div"); // array of tags
const h1El = document.getElementById("headingID");
const pEls = document.getElementsByClassName("paraph");

console.log(pEls[1])

// add content the div

divEls[0].textContent = "Hello World";
divEls[1].textContent = "Starting with DOM";
h1El.textContent = "Welcome to Web Developement";
pEls[0].textContent = "This is a paragraph";

//add styling
// h1El.style.color = "blue";
// // background-color // margin-left
// divEls[0].style.backgroundColor = "gray";

// divEls[0].className = "fromJS";
// divEls[0].classList.add("fromJS"); // correct
/// any attributes
// add attribute ? 
// add class ?
// set attribute ? 


// console.log(divEls[0])


// create an element from js
// three steps:
// 1. create element
const h2El = document.createElement("h2");
// 2. add content or attributes 
h2El.textContent = "This is a new h2";
// 3. append it to the DOM tree
divEls[1].appendChild(h2El);

console.log(h2El);

// img
// 1. create element
const imgEl = document.createElement("img");
// <img src="" alt=""/>
// 2. add content or attributes
imgEl.src = "https://www.worldatlas.com/r/w1200/upload/12/f8/83/coffee-cup.jpg";
imgEl.alt = "Coffee Cup";
// 3. append it to the DOM tree
divEls[1].appendChild(imgEl);

