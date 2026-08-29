const promisone = new Promise((res, reject) => {
    // Do any async tasks;
    setTimeout(() => {
        console.log("Async task is completed.")
        res(); // If you want to run then so this method must be execute.
    }, 1000);
})
promisone.then(() => {
    console.log("Promise consumed.")
})


// in small way
new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Async 2 is executing.....")
        res();
    }, 2000)
}).then(() => {
    console.log("Async 2 is completed.")
})


const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ name: 'Krish', email: 'Krish@gmail.com' });
    }, 3000)
})
promisethree.then((user) => {
    console.log(user)
})


const promisefour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ name: 'Krish', email: 'Krish@gmail.com' });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 4000)
})
promisefour.then((user) => {
    console.log(user)
    return user.email
}).then((email) => {
    console.log(email)
}).catch((error) => {
    console.log(error);
})



const promisefive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ name: 'Krish', email: 'Krish@gmail.com' });
        } else {
            reject("ERROR: JS is not doing well.");
        }
    }, 5000)
})
async function promisefivefunc() {
    try {
        let variable = await promisefive
        console.log(variable)
    } catch (error) {
        console.log(error)
    }
}
promisefivefunc() // remember to call this

async function getalluser(){
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    const data = await response.json()
    console.log(data.html_url)
}
getalluser()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((user)=>{
    console.log(user.followers)
})
.catch((error)=>{
    console.log("Error: ",error)
});