// const tinderuser = new Object(); //singleton
 const tinderuser = {}; // non - singleton

tinderuser.id = "123abc";
tinderuser.name = "sammy";
tinderuser.status = true;

// console.log(tinderuser);

const user ={
    email:"krish@Gmail.com",
    Name: {
        fname:"krish",
        sname:"busa"
    }
}
// console.log(user.Name.fname);
// const obj = {tinderuser,user}
// const obj = {...tinderuser , ...user};
// const obj = Object.assign({}/* target */,tinderuser/* object1 */,user/* object2 */)
// console.log(obj);

// When data come from database it come in from array of object 

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(tinderuser.hasOwnProperty("name"));
// console.log(typeof(Object.keys(tinderuser)));

// const keyss = Object.keys(tinderuser);
// console.log(keyss);
// console.log(typeof keyss);

const cource = {
    Courcename : "Web - Team",
    price:"Free",
    Instructure:"krish"
};

const {Instructure : head} = cource; // Destructure Object

// console.log(Instructure);
console.log(head);

// in React-JS
// const navbar = ({company}) => {
// }
// navbar(company = "krish")

//------------------ JSON --------------------------------------------

// {
//     "Courcename" : "Web - Team",
//     "price":"Free",
//     "Instructure":"krish"
// }

// Many time API geeting into array format not in object format

// // Ex.
// [
//     {},
//     {},
//     {},
// ]

// JSON formatter tool for understanding API 
