// const is a keyword used to declare a variable
// whose reference cannot be reassigned after initialization.
const temp = 100;
console.log(temp);
// ------------------------
// let is a keyword used to declare a variable
// whose value can be reassigned later.
// It cannot be redeclared in the same scope.

let age = 21;
age = 22; // Allowed
console.log(age); // 22
// ---------------------------------

// var is a keyword used to declare a variable
// whose value can be reassigned and redeclared.
// It is function-scoped rather than block-scoped.

var score = 100;
score = 200; // Allowed
var score = 300; // Allowed
console.log(score); // 300

// string + string = sting (CONCATENATION)
// string + int = string (CONCATENATION)
// int + int = int (add)

// str+str
let firstName = "yo";
let lastName = "ho";

console.log(firstName + lastName);

// str+int
let a = 10;
let b = "20";

console.log(a + b);

// int+int
let a1 = 10;
let b1 = 20;

console.log(a + b);

// TYPE COERCION:
// Type coercion is the automatic conversion of one data type into another data type by JavaScript during an operation.

// 1. String + Number = String (Concatenation)
console.log("10" + 20); // "1020"
// Number 20 is converted into a string.

// 2. Number + String = String (Concatenation)
console.log(10 + "20"); // "1020"
// Number 10 is converted into a string.

// 3. String - Number = Number (Subtraction)
console.log("10" - 5); // 5
// String "10" is converted into a number.

// 4. String * Number = Number (Multiplication)
console.log("10" * 5); // 50
// String "10" is converted into a number.

// 5. String / Number = Number (Division)
console.log("20" / 5); // 4
// String "20" is converted into a number.

// 6. Invalid numeric string
console.log("hello" - 5); // NaN
// JavaScript cannot convert "hello" into a valid number.

// REMEMBER:
// + operator → Can perform addition or concatenation.
// -, *, / operators → Generally convert numeric strings into numbers.
