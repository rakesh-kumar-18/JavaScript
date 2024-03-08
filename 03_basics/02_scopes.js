let a = 100;

if (true) {
	let a = 10;
	const b = 20;
	// var c = 30;
	// console.log(`inner a: ${a}`);
}

// console.log(a); // will give 'a' is not defined
// console.log(b); // 'b' is not defined
// console.log(c); // 30 ("var" violets the block scope functionality)

function outer() {
	const username = "Rakesh";

	function inner() {
		const age = 23;
		console.log(username);
	}

	// console.log(age);
	inner();
}

outer();

/******************** Interesting ********************/

// Function Declaration / Statement
function addOne(num1) {
	return num1 + 1;
}

addOne(10);

// Function Expression
const addTwo = function (num) {
	return num + 2;
};

addTwo(20);
