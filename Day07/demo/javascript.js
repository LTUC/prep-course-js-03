
// console.log("Hello Can you see me");
// console.log("You should see me too");
// // print
// // cout
// // Writeline 

// // Pop up boxes in JS

// // 1. alert box

// alert("Hello to my page");

// // 2 .   confirm box
// var userAnswer = confirm("Do you love JS");
// // return true: Ok
// // return false: Cancel
// console.log(userAnswer);

// // 3. prompt box

// var userName = prompt("What is your name?")

// console.log("User name is ", userName);

// conditions:

// if (userAnswer) {
//     console.log("We love JS too")
// } else {
//     console.log("Too bad, your lost")
// }


// ternery if:
// (userAnswer) ? console.log("We love JS too") : console.log("Too bad, your lost");

// arrays
var daysOfWeek = ["Sunday", "Friday", "Monday"];
console.log(typeof daysOfWeek);

daysOfWeek[2] = "Tuesday";

// push() , unshift();

// console.log(daysOfWeek[2]);



// console.log(daysOfWeek)


// Loop:
// check if I have "Friday" in my array
// for (var i = 0; i < daysOfWeek.length; i++){
//     console.log(i, daysOfWeek[i]);
//     if (daysOfWeek[i] === "Friday") {
//         console.log("We found Friday");
//         i = daysOfWeek.length;
//         // break;
//     }

// }


// functions:

// a function that console log a hello message
//1.  decalre the function
function welcome() {
    console.log("Hello");
}

// 2. call the function // invoke
welcome();

// Second Example:
// a function that takes in a name, and return a hello message to that name
function welcomeName(username) {
    console.log("Hello " + username);
}

var userName = prompt("What is your name?") // a variable

welcomeName(userName) // pass the variable to the function as a parameter

welcomeName("Omar");

welcomeName(1);

// Third Example , return the username
function muliple(num1, num2) {
    return num1 * num2;
}

var result = muliple(2, 3);

console.log(result);