const accId = 12345;
let accEmail = "rakesh@rakesh.com";
var accPass = "rakesh123";
accCity = "Jajpur";
let accState;

// accId = 12222 // Not allowed

accEmail = "rakesh@google.com";
accPass = "1234";
accCity = "Bengaluru";

console.log(accId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accId, accEmail, accPass, accCity, accState]);
