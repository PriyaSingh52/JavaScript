// Primitive

// 7 types: String, Number, BigInt, Boolean, Symbol, null, undefined

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail; 

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId) // false

// const bigNumber = 9007199254740991n;



// Reference  (Non-Primitive)

// Object, Array, Function

const heros = ["Batman", "Superman", "Wonder Woman"];

let myObj = {
    name: "priya",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World")
}
console.log(typeof myFunction) // function



console.log(typeof bigNumber) // undefined
console.log(typeof outsideTemp) // object
console.log(typeof scoreValue) // number
console.log(typeof isLoggedin) // boolean
console.log(typeof userEmail) // undefined
console.log(typeof heros) // object
console.log(typeof myObj) // object
console.log(typeof id) // symbol
console.log(typeof anotherId) // symbolS

// https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "prisept";

let anotherName = myYoutubename;
anotherName = "priya";
console.log(myYoutubename) // prisept
console.log(anotherName) // priya



let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "priya@google.com";

console.log(userOne.email) // priya@google.com'
console.log(userTwo.email) // priya@google.com'