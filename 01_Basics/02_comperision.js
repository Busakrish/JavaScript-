console.log("2" * 1); 
console.log(typeof ("2" * 1)); 
console.log("02" > 1);

console. log (null > 0);
 console. log (null == 0);
  console. log (null >= 0);

  console.log("2" === 2); // chack datatype are same or not
  console.log(1 === 2); // if datatype are same then chack about values
  console.log("1" === "1"); // if datatype are same then chack about values
  console.log("1" === "2"); // if datatype are same then chack about values

const id = Symbol ('123')
const anotherId = Symbol('123')
console.log (id === anotherId);
console.log (id);
console.log (anotherId);

const bigNumber = 3456543576654356754n
console.log(bigNumber);
console.log(typeof bigNumber);

const  heros= ["shaktiman", "naagraj", "doga","raone"];
console.log(heros);
console.log(typeof heros);

const numb = [10,11,12,13,14,15];
console.log(numb);
console.log(typeof numb);

let myObj = {
    name: "krish",
    mark: 100,
    
};
console.log(myObj);
console.log(typeof myObj);

const print = function(){
    console.log("hello Krish!");  
}
print();
print();
 
console.log(typeof print);
