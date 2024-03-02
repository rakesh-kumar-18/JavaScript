let score = "rakesh";

console.log(typeof score);

let valInNum = Number(score);

console.log(typeof valInNum);
console.log(valInNum);

console.log(typeof NaN);

// "33" => 33
// "33ab" => NaN
// null => 0
// true => 1
// false => 0
// undefined => NaN

let isLoggedIn = NaN;

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn);

// 1 => true
// <1 => true
// 0 => false
// "" => false
// "rakesh" => true
// null => false
// undefined => false
// NaN => false

let num = 18;

let stringNum = String(num);
console.log(stringNum);
console.log(typeof stringNum);
