// Stack (Primitive), Heap (Non-Primitive)

let name = "rakesh";
let anotherName = name;
anotherName = "rajesh";

console.log(name);
console.log(anotherName);

let user = {
	email: "rakesh@rakesh.com",
	name: "rakesh",
	password: "123",
};

let anotherUser = user;
anotherUser.password = "148";

console.log(user);
console.log(anotherUser);
