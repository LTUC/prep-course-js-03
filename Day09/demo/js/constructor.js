
// blue print, template, function I can over and over again
// constructor , special type of function
// function: camelcase
/*
function name(param1, param2){

}

*/
// constructor: 
/*
function Name(param1, param2){

}

*/
// store all new objects (instances) in an array
const allUsers = [];
// constructor, template
function User(nameVlaue, ageValue, loveDogsValue, favFoodValue) {
    this.name = nameVlaue;
    this.age = ageValue;
    this.loveDogs = loveDogsValue;
    this.favFood = favFoodValue;
    // console.log(this);
    allUsers.push(this);
}

// methods:
User.prototype.walk = function () {
    console.log(`${this.name} loves walking`);
};
// a method that prints age:
User.prototype.printAge = function () {
    console.log(this.age)
}




// create copies of the object, instances of the object
// create a new object

const bayan = new User("Bayan", 30, false, ["Fast food", "Pizza", "Pasta"]);
const mohammad = new User("Mohammad", 27, true, ["Fast food", "Mansaf"]);
const zaid = new User("Zaid", 24, false, ["Fires", "Burger"]);

console.log(allUsers)
// console.log(bayan);
// console.log(mohammad);
// console.log(zaid);

// mohammad.walk();
// bayan.walk();
// zaid.printAge();
