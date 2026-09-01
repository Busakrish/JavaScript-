// typecasting in js


// Into String
let number = 100;
let Bool = true;
let string = String(number);
let string1 = String(Bool);

// console.log(string);
// console.log(typeof string);

// console.log(string1);
// console.log(typeof string1);

// into Number

let Number1 = Number(Bool);
let Number2 = Number(string);


// console.log(Number1);
// console.log(typeof Number1);

// console.log(Number2);
// console.log(typeof Number2);

let result = Number("Hello");
console.log(result);        // NaN (Not a Number)
console.log(typeof result); // "number" 😄

// To String
let n = 50;
console.log(n + "");   // "50"

// To Number
let s = "200";
console.log(+s);       // 200

// To Boolean
let b = "";
console.log(Boolean(b)); // false (empty string is false)