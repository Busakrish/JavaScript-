// let x = 100
// const y = 299
// var z = 343
// console.log("x is delclared by Let and values is: ", x)
// console.log("y is delclared by const and values is: ", y)
// console.log("z is delclared by Var and values is: ", z)
// console.log("-------------------------------------------------------------")

// // let x = 200  //SyntaxError: Identifier 'x' has already been declared
// // const y = 100   //SyntaxError: Identifier 'y' has already been declared
// var z = 201
// console.log("x is delclared by Let and values is: ", x)
// console.log("y is delclared by const and values is: ", y)
// console.log("z is delclared by Var and values is: ", z)
// console.log("-------------------------------------------------------------")
// x = 2 
// // y = 1   //TypeError: Assignment to constant variable.
// var z = 2
// console.log("x is delclared by Let and values is: ", x)
// console.log("y is delclared by const and values is: ", y)
// console.log("z is delclared by Var and values is: ", z)
// console.log("-------------------------------------------------------------")

function test() {
    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
        var a = 100;   // Same variable
        let b = 200;   // New block variable
        const c = 300; // New block variable

        console.log(a); // 100
        console.log(b); // 200
        console.log(c); // 300
    }

    console.log(a); // 100
    console.log(b); // 20
    console.log(c); // 30
}

test();

// // 1 is True in boolean and 0 is false
// Boolean(false);      // false
// Boolean(0);          // false
// Boolean(-0);         // false
// Boolean("");         // false
// Boolean(null);       // false
// Boolean(undefined);  // false
// Boolean(NaN);        // false

// Boolean(1);          // true
// Boolean("Hello");    // true
// Boolean([]);         // true
// Boolean({});         // true
// Boolean("false");    // true