// filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const res = nums.filter((num) => num > 4);
console.log(res);

// Map
const resMap = nums.map((num) => {
	return num * 2;
});

console.log(resMap);

// Reduce
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
