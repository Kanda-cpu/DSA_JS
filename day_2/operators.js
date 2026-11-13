//       ARITHMETIC OPERATORS IN JS

// Arithmetic operators are used to perform mathematical
// calculations on numeric values.

let a = 10;
let b = 3;

// 1. ADDITION (+)
// Adds two numbers.
console.log(a + b); // 13

// 2. SUBTRACTION (-)
// Subtracts RHS from LHS.
console.log(a - b); // 7

// 3. MULTIPLICATION (*)
// Multiplies two numbers.
console.log(a * b); // 30

// 4. DIVISION (/)
// Divides two numbers.
console.log(a / b); // 3.3333333333333335

// 5. MODULUS (%)
// Returns the remainder after division.
console.log(a % b); // 1

// 6. EXPONENTIATION (**)
// Raises the LHS number to the power of RHS.
console.log(a ** b); // 1000 (10 * 10 * 10)

// 7. INCREMENT (++)
// Increases a variable's value by 1.
let x = 5;
x++;
console.log(x); // 6

// 8. DECREMENT (--)
// Decreases a variable's value by 1.
let y = 5;
y--;
console.log(y); // 4

// 9. PRE-INCREMENT (++x)
// Increments first, then returns the updated value.
let p = 5;
console.log(++p); // 6

// 10. POST-INCREMENT (x++)
// Returns the current value first, then increments.
let q = 5;
console.log(q++); // 5
console.log(q); // 6

// 11. PRE-DECREMENT (--x)
// Decrements first, then returns the updated value.
let r = 5;
console.log(--r); // 4

// 12. POST-DECREMENT (x--)
// Returns the current value first, then decrements.
let s = 5;
console.log(s--); // 5
console.log(s); // 4

//       IMPORTANT DSA NUMBER TRICKS

// 1. GET THE LAST DIGIT OF A NUMBER
// Modulus (%) with 10 gives the last digit.

let num = 12345;
console.log(num % 10); // 5

// 2. REMOVE THE LAST DIGIT OF A NUMBER
// Math.floor() with division by 10 removes the last digit.

console.log(Math.floor(num / 10)); // 1234

// 3. GET ALL DIGITS OF A NUMBER (RIGHT TO LEFT)
// Repeatedly use % 10 to extract the last digit.
// Then use Math.floor(num / 10) to remove it.

let n = 12345;

while (n > 0) {
  let digit = n % 10; // Extract last digit
  console.log(digit); // Print digit
  n = Math.floor(n / 10); // Remove last digit
}

// 4. COUNT THE NUMBER OF DIGITS

let number = 12345;
let count = 0;

while (number > 0) {
  count++;
  number = Math.floor(number / 10);
}

console.log(count); // 5

// 5. SUM OF ALL DIGITS

let value = 12345;
let sum = 0;

while (value > 0) {
  let digit = value % 10;
  sum += digit;
  value = Math.floor(value / 10);
}

console.log(sum); // 15

// 6. REVERSE A NUMBER

let original = 12345;
let reverse = 0;

while (original > 0) {
  let digit = original % 10;
  reverse = reverse * 10 + digit;
  original = Math.floor(original / 10);
}

console.log(reverse); // 54321

//       COMPARISON OPERATORS IN JS

// Comparison operators compare two values.
// They always return a Boolean: true or false.

// 1. EQUAL TO (==)
// Compares two values after performing type coercion if needed.
// It does NOT strictly check the data type.

console.log(10 == 10); // true
console.log(10 == "10"); // true (string converted to number)

// 2. STRICT EQUAL TO (===)
// Compares both value AND data type.
// Does NOT perform type coercion.

console.log(10 === 10); // true
console.log(10 === "10"); // false (number !== string)

// 3. NOT EQUAL TO (!=)
// Checks whether two values are different.
// Performs type coercion if needed.

console.log(10 != 20); // true
console.log(10 != "10"); // false

// 4. STRICT NOT EQUAL TO (!==)
// Checks whether values OR their data types are different.
// Does NOT perform type coercion.

console.log(10 !== 20); // true
console.log(10 !== "10"); // true (different data types)

// 5. GREATER THAN (>)
// Checks whether LHS is greater than RHS.

console.log(20 > 10); // true
console.log(10 > 20); // false

// 6. LESS THAN (<)
// Checks whether LHS is smaller than RHS.

console.log(10 < 20); // true
console.log(20 < 10); // false

// 7. GREATER THAN OR EQUAL TO (>=)
// Checks whether LHS is greater than OR equal to RHS.

console.log(20 >= 10); // true
console.log(10 >= 10); // true
console.log(5 >= 10); // false

// 8. LESS THAN OR EQUAL TO (<=)
// Checks whether LHS is smaller than OR equal to RHS.

console.log(10 <= 20); // true
console.log(10 <= 10); // true
console.log(20 <= 10); // false

//              QUICK REMEMBER

// ==   -> Equal (allows type coercion)
// ===  -> Strict equal (value + data type)
// !=   -> Not equal (allows type coercion)
// !==  -> Strict not equal (value + data type)
// >    -> Greater than
// <    -> Less than
// >=   -> Greater than or equal to
// <=   -> Less than or equal to

//          IMPORTANT BEST PRACTICE

// Prefer === and !== in modern JavaScript.
// They avoid unexpected results caused by type coercion.

console.log(5 == "5"); // true
console.log(5 === "5"); // false

// QUICK REMEMBER

// num % 10               -> Get last digit
// Math.floor(num / 10)   -> Remove last digit
// num % 2                -> Check even or odd
// num ** 2               -> Square a number
// num ** 3               -> Cube a number
// x++                    -> Use first, increment later
// ++x                    -> Increment first, use later
