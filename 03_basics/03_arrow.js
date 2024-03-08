const user = {
	username: "rakesh",
	email: "rakesh@youtube.com",
	welcomMessage: function () {
		console.log(`${this.username}, welcome to my website`);
		console.log(this); // will refer to current context
	},
};

// user.welcomMessage();
user.username = "rajesh";
// user.welcomMessage();

function hello() {
	let name = "rakesh";
	console.log(this);
	console.log(this.name); // it will not work. context works inside the object. not inside a function.
}

// hello();

const hello2 = function () {
	let name = "rakesh";
	console.log(this.name); // it will not work. context works inside the object. not inside a function.
};

// hello2();

const hello3 = () => {
	let name = "rakesh";
	console.log(this);
	console.log(this.name);
};

// hello3();

/********************* Arrow function *********************/

// method-1

// const addTwo = (num1, num2) => {
// 	return num1 + num2;
// };

// method-2

const addTwo = (num1, num2) => num1 + num2;
/* if there is only one statement inside the function no need to use curly braces and 'return' keyword */

console.log(addTwo(10, 8));

// method-3

const logUser = (name) => ({ username: name });
/* if we want to return objects without using return keyword we have to use 'parenthesis'.
using 'parenthesis' we don't have to use 'return' keyword */

console.log(logUser("rakesh"));
