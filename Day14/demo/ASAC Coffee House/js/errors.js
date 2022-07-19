'use strict';


// 1. SyntaxError:
// document.write("hi');
// document.write("hi";
// const arr = ["Subday", "Monday" "Tuesday"]


// 2. ReferenceError:
// const y = x;

// 3. TypeError:
// Document.write("Something")
// document.Write("Something")
let object = {};
// object.print();


const x = 0;
function test() {
    try {
        console.log("inside try");
        console.log(x =2);
    } catch (error) {
        console.log("inside catch");
        console.log(error.cause)
    }
}

test();

