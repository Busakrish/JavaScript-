const numbers = [10, 20, 30, 40, 50];

const [first, second,, ...rest] = numbers;

// Here value 30 is skipped 
console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [40, 50]

// Used in swepping variables (no need of extra variable)
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10


// Object destructuring 
// property names matter
const student1 = {
    name: "Krish",
    age: 21
};

const { name: studentName, age: studentAge } = student1;

console.log(studentName); // Krish
console.log(studentAge);  // 21


// Real usecase
function introduce({ name, age }) {
    console.log(`My name is ${name} and I am ${age}`);
}

const student2 = {
    name: "Krish",
    age: 21
};

introduce(student2);