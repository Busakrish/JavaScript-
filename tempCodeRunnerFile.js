// in node
console.log(this) //{}
// in browser
console.log(this) //window

function foo(){
    console.log(this)
}
foo() //Object [global] 

let person ={
    name : "Krish",
    email : "krishbusa@gmail.com",
    id : 5,
    thisFunc :function name() {
        console.log(this)
    }
}
person.thisFunc() // person object
