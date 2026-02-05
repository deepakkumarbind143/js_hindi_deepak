const { response } = require("express");

const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    //DB calls, cryptography, network

    setTimeout(function(){
        console.log("async task is complete");
        resolve()
    }, 1000)
} )

promiseOne.then(function(){
    console.log("promise consume");
    
})

new Promise(function( resolve, reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
    }, 1000)

}).then(function(){
    console.log("async 2 resolved")
})


const promiseThree = new Promise(function(resolve, rejected){
    setTimeout(function(){
        resolve({username: "deepak", email: "deepak@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){

    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "deepak", password: "1244"})
        }else{
            reject(' ERROr:  somenthing went wrong')
        }
    }, 1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username
    
})
.then((username)=> {
    console.log(username)
})
.catch(function(error){
console.log(error);

}).finally(()=> console.log("the promise is either resolved or rejected"))


const promisefive = new Promise(function(resolve, reject){
        setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", password: "1244"})
        }else{
            reject(' ERROr:  somenthing went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {const response = await promisefive
    console.log(response);
}catch (error){
    console.log(error);
}

    
}

consumePromiseFive()


// //
// async function getAllUsers() {
// try{  const response =  await fetch('https://randomuser.me/api/')

    
//  const data =  await response.json()
//  console.log(data);
 
// }catch(error){
//     console.log("E:", error );
    
// }}

// getAllUsers()


fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))