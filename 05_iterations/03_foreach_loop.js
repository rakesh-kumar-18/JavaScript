// foreach

const arr = [1, 2, 3, 4, 5, 6];

// Method: 1
arr.forEach((element) => {
	// console.log(element);
});

// Method: 2
function logNum(ele) {
	// console.log(ele);
}

arr.forEach(logNum);

// Method: 3 (Inside call back function we can also pass 'index' and 'full array' as parameters)
arr.forEach((ele, index, arr) => {
	// console.log(ele, index, arr);
});

const myCoding = [
	{
		name: "JavaScript",
		extension: "js",
	},
	{
		name: "Python",
		extension: "py",
	},
	{
		name: "Java",
		extension: "java",
	},
];

myCoding.forEach((obj) => {
	console.log(obj);
	console.log(obj.extension);
});
