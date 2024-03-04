const tinderUser = new Object(); // Sigleton Object

// const tinderUser = {} // Non-sigleton Object

tinderUser.id = "123abc";
tinderUser.name = "Tera";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty("name")); // to check if a key exist in a particular object

const regularUser = {
	email: "rakesh@gmail.com",
	fullname: {
		firstname: "Rakesh",
		lastname: "Sahoo",
	},
};

// console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

const obj4 = { ...obj1, ...obj2 }; // Mostly used syntax to concatinate multiple objects
console.log(obj4);

// const obj5 = Object.assign(obj1, obj2, obj3);

const obj5 = Object.assign({}, obj1, obj2, obj3);
/* Above we take a empty object as an target. it mostly used in production level. 
it doesn't change the original "obj1" object. */

console.log(obj5);
console.log(obj1);

/************************* Destructuring *************************/

const course = {
	name: "js in hindi",
	price: 0,
	instructor: "hitesh",
};

console.log(course.name);

const { name, price, instructor } = course;
/* This is how we destructor the object. Most used syntax. It popularly used in React and Nodejs. */

console.log(name);
