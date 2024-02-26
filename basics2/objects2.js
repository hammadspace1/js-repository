const usr = new Object()

usr.Name = "hammad Khan"
usr.Email = "hammd@test.com"

// console.log(usr)

usr1data = {
    1: "bilal",
    2: "hasnain"
}

usr2data ={
    3: "shahid",
    4: "abdullah"
}

// totaldata = Object.assign({},usr1data,usr2data)

// console.log(totaldata)

const totaldata2 ={...usr1data, ...usr2data}

console.log(totaldata2)

console.log(Object.keys(usr))
console.log(Object.values(usr))
console.log(Object.entries(usr))

console.log(usr.hasOwnProperty("Email"))