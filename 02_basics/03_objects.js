// sigleton
// Object.create

// object literals
const mySym = Symbol("key1"); // Imp: how to add a symbol as a key to an object

const JsUser = {
	name: "Rakesh",
	"full name": "Rakesh Sahoo",
	[mySym]: "myKey1",
	age: 21,
	location: "Jajpur",
	email: "rakesh@vscode.com",
	isLoggedIn: false,
	lastLoginDays: ["Sunday", "Friday"],
};

console.log(JsUser.age);
console.log(JsUser["age"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "rakesh@docker.com";
// Object.freeze(JsUser);
JsUser.email = "rakesh@gmail.com";
console.log(JsUser);

JsUser.greeting = function () {
	console.log("Hello JS user");
};

JsUser.greetingUser = function () {
	console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingUser());
