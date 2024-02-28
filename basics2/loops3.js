let myarray = [12,23,4,5,56,33,43,4,43,434,4,3,4,1,3]

// const filterarr = myarray.filter( (num) => num > 56)            //filter method

const filterarr = myarray.filter( (num) => {                    
    return num>56
})

console.log(filterarr)

let final = []

myarray.forEach( (item) => {
    if(item > 56){
        final.push(item)
    }

})

console.log(final)

let libraryData = [
    {
        BookName: "English", Author: "Hasnain", PublishDate: "2000", Price: 1000
    },
    {
        BookName: "Islamiyat", Author: "Abdullah", PublishDate: "2001",Price: 3000
    },
    {
        BookName: "Urdu", Author: "Bilal", PublishDate: "2002", Price: 900
    },
    {
        BookName: "Maths", Author: "Aslam", PublishDate: "2003", Price: 2800
    },
    {
        BookName: "PakStudy", Author: "Jibran", PublishDate: "2004", Price: 300
    },
    {
        BookName: "Chemistry", Author: "Shahid", PublishDate: "2005", Price: 3800
    }
]

 let filterData = libraryData.filter((item) =>{
    return item.PublishDate > 2003
})

console.log(filterData)

let newarr = [1,2,3,4,5,6,7,8]

let newarr2 = newarr.map((item) => { return item*10})

console.log(newarr)

console.log(newarr2)

let arr3 = newarr.map( (item) => { return item*20}).map( (item) => { return item + 2}).filter( (item) => { return item>100})

console.log(arr3)

let cost = libraryData.reduce( (acc, item) => (item.Price + acc),0)

console.log(cost)