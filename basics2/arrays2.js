let class1id = ["arsalan","ahmad","mansoor"]

let class2id = ["aslam","raheel"]

let combine = class1id.concat(class2id)

console.log(combine)

let combine2 = [...class1id, ...class2id]

console.log(combine2)

let class3 = ["bilal","Hammad","Hasnain",["shahid","abdullah"]]

console.log(class3)

let class3flat = class3.flat(Infinity)
console.log(class3flat)

console.log(Array.isArray("Hammad"))

console.log(Array.from("Hammad"))

let score1 = 200
let score2 = 300
let score3 = 400

let total = Array.of(score1,score2,score3)
console.log(total)