//---------------------------- Number -----------------------------------

// const score = 400;
// console.log(score);

// const balance = new Number(1000000);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const othernumber = 24.5545;
// console.log(othernumber.toPrecision(1));// precision value

// const num = 10000000;
// console.log(num.toLocaleString());//10,000,000 - by defult US Standard
// console.log(num.toLocaleString('en-IN'));//10,000,000 - Indian Standard


// //------------------------------ Maths ----------------------------------

// console.log(Math); // to view math  objects method in browser console

// console.log(Math.abs(-23));// to get abs value[+ve value]
// console.log(Math.abs(23));

// console.log(Math.round(23.3423)); // For round of number 

// console.log(Math.ceil(23.3423)); // round off in upper number
// console.log(Math.floor(23.9423));// round off in lower number
// console.log(Math.min(3,43,6,74,2,5,6,3,2)); //to get min in array
// console.log(Math.max(3,43,6,74,2,5,6,3,2));// to get max in array

// console.log(Math.random()); // value Between 0 - 1 & 0 or 1 also Occur 
// console.log(Math.floor(Math.random()*10)); 

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // Formula for geting value Between min - max

