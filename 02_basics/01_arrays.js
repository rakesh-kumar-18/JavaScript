// Array

const myArr = [0, 1, 2, 3, 4];
const names = ["rakesh", "rajesh", "kohli"];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2);

/*************** Array methods ***************/

// myArr.push(5);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(7));

// const strArr = myArr.join();
// console.log(strArr);

/*************** Difference between slice and splice ***************/

// console.log("A ", myArr);

// const newArr1 = myArr.slice(1, 4);

// console.log(newArr1);
// console.log("B", myArr);

console.log("A ", myArr);

const newArr2 = myArr.splice(1, 4);

console.log(newArr2);
console.log("B", myArr);
