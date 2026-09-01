// Singleton object
// Object.create //using constructure method 
// Singleton Object
const sym = Symbol("key1");

const jsuser = {
    name: "krish",
    age: 18,
    [sym]: Symbol("one"),
    location: "rajkot",
    email:"krish@gmail.com",
    active: true,
    day: ["sunday","monday"]
};

console.log(jsuser.name);     // "krish"
console.log(jsuser["email"]); // "krish@gmail.com"
console.log(jsuser[sym]);     // "mykey1"

const mySymbol = Symbol("id");

const obj = {
  [mySymbol]: "secret",
  name: "Ethan"
};

console.log(obj[mySymbol]); // "secret"
console.log(obj.name);      // "Ethan"

// But symbol keys are not shown in normal loops
for (let key in obj) {
  console.log(key); // only "name", symbol not shown
}