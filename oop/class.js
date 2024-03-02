// class User {
//     constructor(UserName,Address,Password){
//         this.UserName = UserName;
//         this.Address = Address;
//         this.Password = Password;
//     }

//     encryptPassword(){
//         return `${this.Password}abc`
//     }

//     capitalName(){
//         return `${this.UserName.toUpperCase()}`
//     }
// }

// const Hammad = new User("Hammad Khan","Tordher",12345)

// console.log(Hammad.Password)

// console.log(Hammad.encryptPassword())

// console.log(Hammad.capitalName())


function User2(UserName,Address,Password){
    this.UserName = UserName;
    this.Address = Address;
    this.Password = Password;
}

User2.prototype.encryptPassword = function(){
    return `${this.Password}werrdf`
}

User2.prototype.capitalName = function(){
    return `${this.UserName.toUpperCase()}`
}

let zeeshan = new User2("Zeeshan","Nabi",22334)

console.log(zeeshan.encryptPassword())
console.log(zeeshan.capitalName())