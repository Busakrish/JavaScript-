

console.log ("1" + 2); 
console.log (1 + "2");
console.log("1" + 2 + 2); // if first is string then all are string (based in presedance learn in depth)
console.log (1 + 2 + "2"); // if last was striing then first operation is performed then converted into string
console.log (typeof (1 + 2 + "2")); 
console.log (typeof ("1" + 2 + 2)); 

console.log(true);
console.log(+true); // converted into Number
console.log(+"123");
console.log(typeof +"123");


let num1, num2, num3;
num1 = num2 = num3 = 12 + 2;
console.table([num1,num2,num3]);

let gameCounter = 100
console. log (gameCounter++);
console. log (++gameCounter);