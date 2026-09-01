function SetUsername(name){
    // console.log("SetUsername is calling");
    this.name = name;
}

function Person(name,email,password){
    SetUsername.call(this, name)
    this.email = email
    this.password = password
}

let krish = new Person("crish", "krish@google.com", 12345678)
// console.log(typeof(krish))
console.log(krish)
console.log(this)