// const promiseone = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise One has been Executed")
//         resolve();
//     },1000)
    
// })
// promiseone.then(function(){
//     console.log("Now we are in Then Function")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Statement in Promise 2")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promise 2 then Function")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise Three Executed")
//         resolve({Name:"Hammad Khan",Address:"Tordher",Phone:123456678})
//     },1000)
// })
// promiseThree.then(function(user){
//     console.log(`UserName is ${user.Name} and Users PhoneNumber is ${user.Phone}`)
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err = false;
//         if(!err){
//             resolve({Name:"Hammad Khan",Address:"Tordher",Phone:12345667889})
//         } else{
//             reject('Error: Somethig went Wrong')
//         }
//     }, 2000)
// })
// promiseFour.then(function(user){
//     console.log(`UserName is ${user.Name} and Users Phone Number is ${user.Phone}`)
//     return user.Address;
// }).then(function(userAddress){
//     console.log(`Now we are in Second Then Function and User Address is ${userAddress}`)
// }).catch(function(err){
//     console.log(err);
// }).finally(()=> console.log("the Promise is Either resolved or Rejected"))

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err = false;
//         if(!err){
//             resolve({Name:"Hammad Khan",Address:"Tordher",Phone:12334335});
//         } else{
//             reject('Error: Something went Wrong')
//         }
//     },1000)
// });

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive;
//         console.log(response)
//     } catch(error){
//         console.log(error)
//     }
// }

// consumePromiseFive();

// async function getUser(){
//     try{
//         const response = await fetch('https://api.github.com/users/hammadspace1')
//         const data =  await response.json()
//         console.log(data)

//     } catch(error){
//         console.log("E", error)
//     }
// }

// getUser();

fetch('https://api.github.com/users/hammadspace1').then(function(resolve){
    return resolve.json();
}).then((userdata) => console.log(userdata)).catch((error) => console.log(error))