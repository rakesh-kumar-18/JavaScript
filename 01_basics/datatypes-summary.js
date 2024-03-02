// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 18;
const score2 = 18.5;

const isLoggedIn = false;
const temp = null;
let userEmail;

const id = Symbol("123");
const idTwo = Symbol("123");

console.log(typeof id);

// console.table([id, idTwo]);
console.log(id);
console.log(idTwo);
console.log(id === idTwo);

// Non-Primitive (Reference type)

// 1 type: Objects, Array, Functions (Array & Functions are not special data types. they are just special type of object.)

/*************************************** Array ***************************************/
const heros = ["iron man", "thor", "black widow", "hulk"];
console.log(typeof heros);

/*************************************** Object ***************************************/
const myDetails = {
	name: "rakesh",
	age: 23,
};
console.log(typeof myDetails);

/*************************************** Function ***************************************/
const sayHi = function () {
	console.log("Hi");
};
sayHi();

console.log(typeof sayHi);
