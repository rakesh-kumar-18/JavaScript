const fName = "Rakesh";
const lName = "Sahoo";

// console.log(fName + "kumar" + lName);

console.log(`${fName} Kumar ${lName}`);

const gitName = new String("rakeshkumar18");

console.log(gitName.length);
console.log(gitName.toUpperCase());
console.log(fName.charAt(1));
console.log(fName.indexOf("a"));

const newFName = fName.substring(0, 3); // Negative index not allowed in substring() method.
console.log(newFName);

const newLName = lName.slice(0); // Negative index allowed in slice method.
console.log(newLName);
