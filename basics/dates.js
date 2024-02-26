let mydate = new Date()

// console.log(mydate)

// console.log(`${mydate.toString()} :::Type of that String is::: ${typeof(mydate.toString())}`)

// console.log(`${mydate.toDateString()} :::Type of that String is::: ${typeof(mydate.toDateString())}`)

// console.log(`${mydate.toLocalDateString} :::Type of that String is::: ${typeof(mydate.toLocalDateString)}`)

// let localdate = mydate.toLocaleString()

// console.log(localdate)

// console.log(typeof localdate)

// let myDOB = new Date(1999,11,10)

// console.log(myDOB.toDateString())

// let mytimestamp = Date.now()

// console.log(mytimestamp)

let newdate = new Date()

console.log(newdate)

console.log(newdate.getTime())  // to miliseconds

console.log(Math.floor(newdate.getTime()/1000))  // in seconds

console.log(newdate.getDate())

console.log(newdate.getMonth())

console.log(newdate.getFullYear())

