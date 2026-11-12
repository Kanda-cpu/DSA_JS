let prompt = require("prompt-sync")();

// prompt-sync always accepts string data so if numeric value is required then pares the input

// swap nos with 3 vars
let a = 10;
let b = 20;
let temp = a;

b = a;
a = b;

console.log(a);
console.log(b);
