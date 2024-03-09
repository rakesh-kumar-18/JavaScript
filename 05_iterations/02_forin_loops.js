// for in

// for in with objects
const me = {
	fname: "Rakesh",
	lname: "sahoo",
};

for (const key in me) {
	// console.log(key);
	// console.log(me[key]);
}

// for in with arrays
const arr = [1, 2, 3, 4, 5, 6];

for (const num in arr) {
	console.log(num);
	console.log(arr[num]);
}
