const marvel_heros = ["ironman", "thor", "spiderman"];
const dc_heros = ["superman", "batman", "wonderwoman"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const heros = marvel_heros.concat(dc_heros);
// console.log(heros);

const all_heros = [...marvel_heros, ...dc_heros];
console.log(all_heros);

const arr = [1, 2, 3, [4, 5, 6], 7];
const flat_arr = arr.flat(Infinity);
console.log(flat_arr);

console.log(Array.isArray("rakesh"));
console.log(Array.isArray(["r", "a", "k", "e", "s", "h"]));
console.log(Array.from("rakesh"));

console.log(Array.from({ name: "rakesh" })); // Interesting

let num1 = 1;
let num2 = 2;
let num3 = 3;

console.log(Array.of(num1, num2, num3));
