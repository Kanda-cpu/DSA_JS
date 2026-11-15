//          JAVASCRIPT MATH METHODS

// Math is a built-in JavaScript object that provides
// mathematical properties and methods.

// 1. Math.round()
// Rounds a number to the nearest integer.

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.5)); // 5

// 2. Math.floor()
// Rounds a number DOWN to the nearest integer.

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(-4.1)); // -5

// 3. Math.ceil()
// Rounds a number UP to the nearest integer.

console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(-4.1)); // -4

// 4. Math.trunc()
// Removes the decimal part without rounding.

console.log(Math.trunc(4.9)); // 4
console.log(Math.trunc(4.1)); // 4
console.log(Math.trunc(-4.9)); // -4

// 5. Math.abs()
// Returns the absolute (non-negative) value.

console.log(Math.abs(-10)); // 10
console.log(Math.abs(10)); // 10
console.log(Math.abs(-5.5)); // 5.5

// 6. Math.max()
// Returns the largest number.

console.log(Math.max(10, 20, 30, 5)); // 30

// 7. Math.min()
// Returns the smallest number.

console.log(Math.min(10, 20, 30, 5)); // 5

// 8. Math.sqrt()
// Returns the square root of a number.

console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8

// 9. Math.cbrt()
// Returns the cube root of a number.

console.log(Math.cbrt(27)); // 3
console.log(Math.cbrt(125)); // 5

// 10. Math.pow()
// Raises a number to a specified power.

console.log(Math.pow(2, 3)); // 8 (2 * 2 * 2)

// Alternative using exponentiation operator:
console.log(2 ** 3); // 8

// 11. Math.random()
// Generates a random decimal between 0 (inclusive)
// and 1 (exclusive).

console.log(Math.random()); // Example: 0.7234

// 12. Generate a random integer between 1 and 10.

console.log(Math.floor(Math.random() * 10) + 1);

// 13. Math.sign()
// Returns the sign of a number:
// 1 for positive, -1 for negative, 0 for zero.

console.log(Math.sign(10)); // 1
console.log(Math.sign(-10)); // -1
console.log(Math.sign(0)); // 0



// 14. Math.PI
// Returns the value of PI (approximately 3.14159).

console.log(Math.PI);

//              QUICK REMEMBER

// Math.round()  -> Nearest integer
// Math.floor()  -> Round down
// Math.ceil()   -> Round up
// Math.trunc()  -> Remove decimal part
// Math.abs()    -> Absolute value
// Math.max()    -> Largest number
// Math.min()    -> Smallest number
// Math.sqrt()   -> Square root
// Math.cbrt()   -> Cube root
// Math.pow()    -> Power
// Math.random() -> Random decimal (0 to less than 1)
// Math.sign()   -> Sign of a number
// Math.PI       -> PI constant
