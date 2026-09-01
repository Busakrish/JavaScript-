// Arrays

const myArr = [0,1,2,3,4,5,true,"krish"];
// console.log(myArr[6]);
// console.log(typeof myArr);

const myheros = ["saktiman" , "Naagraj" , "baabrubhut"];
const myarr1 = new Array(1,2,3,4);
// console.log(myheros[0]);
// console.log(myarr1[0]);

// Array method
myarr1.push(123);
myarr1.push(7);
myarr1.pop();

myarr1.unshift(5);
// console.log(myarr1);
myarr1.shift();
// console.log(myarr1);

// console.log(myarr1.includes(9));
// console.log(myarr1.indexOf(9));

// const newarr = myarr1.join();
// console.log(newarr);
// console.log(typeof newarr);

// ----------------- Slice / Splice ---------------------------

console.log("A" , myarr1);

const myn1 = myarr1.slice(1,3);
console.log(myn1);
console.log("B" , myarr1);

const myn2 = myarr1.splice(1,3);
console.log(myn2);
console.log("C" , myarr1);
