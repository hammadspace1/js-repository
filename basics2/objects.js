let mysym = Symbol('cs116')

let user = {
    name: "Hammad",
    "full Name": "Hammad Khan",
    [mysym]: "cs111",
    Email: "hammad@google.com",
    Phone: "0234343344"
}

// console.log(user.Phone)
// console.log(user["full Name"])
// console.log(typeof user[mysym])

// Object.freeze(user)

user.name = "aslam"

console.log(user)

user.greeting = function(){
    console.log("Hello User")
}

console.log(user.greeting())

user.greeting2 = function(){
    console.log(`Hello User ${this["full Name"]}`)
}
console.log(user.greeting2())