const name = "hammad          "

console.log(name.length)

String.prototype.truelength = function(){
    console.log(`Length of Provided String is ${this.trim().length}`)
}

const name2 = "hammad           "

name2.truelength();
