// function sayMyName() {
//     console.log("k");
//     console.log("r");
//     console.log("i");
//     console.log("s");
//     console.log("h");
// }

// // sayMyName - Function referance
// // sayMyName() - Funcation call

// function addnum(num1, num2) { // Hear Parameters
//     return (num1 + num2)
// }

// console.log(addnum(1, 2)); // Hear Arguments
// // console.log(addnum(1,null));

// function name(name1) {
//     // if(name1 === undefined){
//     //     return `Please enter a name first.`
//     // }
//     if (!name1) {
//         return `Please enter a name first.`
//     }
//     else {
//         return `hi this is ${name1}`
//     }
// }

// console.log(name("krish"));
// console.log(name());
// // console.log(name1);

function calculatecartPrice(var1,...num1){          // ... is a rest & spread operator 
    return num1;
}

console.log(calculatecartPrice(200,12,12312));

const user = {
    username : "xyz",
    prices: 100
}

function handleObject(anyobj) {
    console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);// chack key name
}

handleObject(user);