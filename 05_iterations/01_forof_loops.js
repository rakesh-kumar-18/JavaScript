// for of

const arr = [1, 2, 3, 4, 5, 6];

for (const num of arr) {
	// console.log(num);
}

// for of loop for string
for (const ch of "rakesh") {
	// console.log(ch);
}

// Maps: Only unique 'keys' allowed (Duplicate 'values' can be present but not recommended)

const map = new Map();

map.set("IN", "India");
map.set("JP", "Japan");
map.set("SL", "Sri Lanka");

// map.set("IN", "Rakesh"); // Not allowed (because of duplicate 'key')
// map.set("RK", "India"); // Allowed (because 'key' is not same, although 'value' is same as "India")

// console.log(map);

for (const [key, value] of map) {
	// console.log(key, value);
}

// Note: "for of" loop will not work with "object" but with "map"
