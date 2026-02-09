//there is no this in arrow function
// We use this when we want to access the current object’s values inside its function.
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



function check(){
    // let username = "deepak"
    console.log(this);
    
}

// check()    //output will undefine because username  is in function

// const bhai = () => {
//     let username = "bhaiIs Back"
//     // console.log(this);// this does NOT work in arrow functions, but works in regular functions
//         return username
// }

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


// The Fix (The "Intern Pro" Way):
//  To make it work, the outer method should be a regular function (so it "grabs" the object), 
// and the inner function (inside setTimeout) should be an arrow function (so it "borrows" the object from the outer one).

const smartWatch = {
  brand: "Apple",
  showBrandPerfect: function() {
    // Regular function here captures 'smartWatch' as 'this'
    setTimeout(() => {
      // Arrow function here borrows 'this' from showBrandPerfect
      console.log("Perfect way:", this.brand); 
    }, 1000);
  }
}

smartWatch.showBrandPerfect(); // Prints: Apple

// The Real-World Logic
// In a React internship, you will use this all the time.
//  When you fetch data and want to update the "State" after the data arrives, you must use an arrow function inside your .then() or setTimeout.
//  If you don't, your code won't know which component it’s supposed to update!