// Immediately Invoked Function Expressions (IIFE)

// Name IIFE
(function dbConnect() {
	console.log("DB CONNECTED");
})();

// dbConnect();

// Syntax:
// (function_definition)(invoked / execution)

(() => {
	console.log("Arrow Function");
})();

// Parameterized IIFE
((name) => {
	console.log(name);
})("rakesh");
