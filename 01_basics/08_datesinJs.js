let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCustomDate = new Date(2023, 1, 28);
console.log(myCustomDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myDate.getTime());
