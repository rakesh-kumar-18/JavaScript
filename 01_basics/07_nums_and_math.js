const score = 100;
// console.log(score);

const balance = new Number(200);
// console.log(balance);

// console.log(score.toString());
// console.log(balance.toFixed(2));

const num = 123.2545;
console.log(num.toPrecision(4));

const price = 1000000;
// console.log(price.toLocaleString());
// console.log(price.toLocaleString("en-IN"));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++++++++ */

// console.log(Math);
// console.log(Math.abs(-10));
// console.log(Math.round(5.5));
// console.log(Math.ceil(2.1));
// console.log(Math.floor(8.9));

console.log(Math.random());
let randomNum = Math.random() * 10;
console.log(Math.floor(randomNum));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
