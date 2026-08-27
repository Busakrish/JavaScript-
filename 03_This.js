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


let foo2 = function foo1(){
    let a = 1
    console.log(this.a)
}
foo2() //undefined  

let foo3 = () => {
    let a = 1
    console.log(this)
}
foo3() //{} 
