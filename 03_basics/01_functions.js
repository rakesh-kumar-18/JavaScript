function sayMyName() {
	console.log("w");
	console.log("a");
	console.log("l");
	console.log("t");
	console.log("e");
	console.log("r");
}

sayMyName();
console.log(sayMyName);

// function to take unlimited no of parameters by using "rest operation"
function calculateCartPrice(...num1) {
	return num1;
}

console.log(calculateCartPrice(100, 200, 300));

function calculateCartPrice2(num1, num2, ...num3) {
	return num3;
}

console.log(calculateCartPrice2(100, 200, 300, 400, 500, 600));

// Object as a parameter
const user = {
	username: "Rakesh",
	price: 999,
};

function handleUser(anyobject) {
	console.log(
		`Username is ${anyobject.username} and price is ${anyobject.price}`
	);
}

handleUser(user);

// Array as a parameter
const myArr = [1, 2, 3, 4, 5];

function returnFirstEle(getArray) {
	return getArray[0];
}

console.log(returnFirstEle(myArr));
