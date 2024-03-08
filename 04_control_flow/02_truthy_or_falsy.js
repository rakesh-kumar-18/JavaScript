// const userEmail = "rakesh@vscode.com"; // will resulted true (truthy value)
const userEmail = ""; // will resulted false (falsy value)

if (userEmail) {
	console.log("got user email");
} else {
	console.log("don't get the email");
}

/*************** Falsy Values ***************/

// false, 0, -0, BigInt(0n), "", null, undefined, NaN;

/*************** Truthy Values ***************/

// "0", "false", " ", [], {}, function(){}

/* Nullish Coalescing Operator (??): null undefined */

let val1;
let val2;
let val3;
let val4;
val1 = 5 ?? 10;
val2 = null ?? 10;
val3 = undefined ?? 15;
val4 = null ?? 20 ?? 30;

// In case of null and undefined, it will executed the second value as a safety fallback.

console.table([val1, val2, val3, val4]);
