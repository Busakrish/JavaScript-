var counter = 100;

(function () {
    var counter = 0;

    counter++;
    console.log(counter);
})();

console.log(counter);

// IIFE is Immediate Invoke Function Expresion 
// it run function just after decleration 

let a = (function greet() {
    console.log("Hello");
});
a(); // Automatic Semicolon Insertion (ASI)
// Now it is a function expression


(function greet1() {
    console.log("Hello");
})();
// Now we are calling expression


// All concept in one code
const result = (function (name) {
    // Local variable
    const message = `Hello ${name}`;

    // Function-local variable
    let count = 0;
    count++;

    console.log(message);
    console.log("Count:", count);

    // Return a value immediately
    return count;
})("Krish");

console.log("Result:", result);