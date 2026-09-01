// String in Stack becouse of Primitive DS.[Copy the value]
let name1 = "krish";
let name2 = name1;
 
name2 = "jamku";

console.log(name1);
console.log(name2);


// Object in Heap becouse of Non-Primitive DS.[Pass the refrance]
let user1 = {
    name : "krish",
    email : "abc@google.com"
}
let user2 = user1;

user2.name  = "jamku";
user2.email =  "xyz@google.com";

console.log(user1);
