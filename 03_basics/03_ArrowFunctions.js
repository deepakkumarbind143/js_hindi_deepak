//there is no this in arrow function

const user = {
    username: "deepak",
    price: 999,
    
    //whenever we use variable in current contex we use "this",
    //we can use this only this with variable only in object
    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to website`);
        // console.log(this);//this talks about current context
        
    }
}

// user.welcomeMessage()
// user.username = "bhai"
// user.welcomeMessage()


// inside browser the golabal object will be window always
// node environment is {} , empty
// console.log(this);



// function check(){
//     // let username = "deepak"
//     console.log(this);
    
// }

// check()    //output will undefine because username  is in function

const bhai = () => {
    let username = "bhaiIs Back"
    console.log(this);//this works in arrow function but not in regular function
        
}

// bhai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }


//* implicit return
// const addTwo = (num1, num2) =>  num1 + num2

//use () for clearification
// const addTwo = (num1, num2) =>  (num1 + num2)


//how to return object value in arrow function
const addTwo = (num1, num2) =>  ({username: "deepak"})
console.log(addTwo(3, 6))