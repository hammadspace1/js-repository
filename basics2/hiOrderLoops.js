let arr = [1,2,3,4,5,6,7,8,9,10]

// for (const numbers of arr) {
//     console.log(numbers)
// }

// const str ="hammad Khan"

// for (const num of str) {
//     console.log(num)
// }

const map = new Map()

map.set('Name', "Hammad Khan")
map.set('Email', "hammad@test.com")
map.set('Phone', 03189668328)

// console.log(`UserName is ${map.get('Name')}
// and the Email of the User is ${map.get('Email')}
// and the Phone Number of the User is ${map.get('Phone')}`)

// console.log(map)

// for (const [num, value] of map) {                   //for of for map
//     console.log(`${num} ::: ${value}`)
// }

let obj = {
    Name: "Hammad Khan",
    Email: "hammad@test.com",
    Address: "Tordher"

}

// for (const key in obj) {                // for in loop
//     console.log(obj[key])
//     }

// const myarr = [12,34,43,2,3,45]

// for (const key in myarr) {
//     console.log(myarr[key])  
// }

// const languages = [23,4,56,7,8,67]

// languages.forEach((item, index, arr)=>{                     //for each
//     console.log(item, index, arr)
// })

const UserData = [
    {
        Name: "Hammad Khan",
        Email: "hammad@test.com",
        Address: "Tordher"
    },
    {
        Name: "Abdullah",
        Email: "abd@test.com",
        Address: "Manki"
    },
    {
        Name: "Hasnain",
        Email: "hasnain@test.com",
        Address: "Manki"
    }
]

console.log(typeof UserData)

UserData.forEach( (item) => {
    console.log(`User ${item.Name}`)
})

