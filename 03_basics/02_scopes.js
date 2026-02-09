let a = 10
const b = 20
var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


//DOM  => Document object model


//* Nested scope

function one(){
    const username = "deepak"

    function two(){
        const website = "youtube"
console.log(username);

        
    }
    // console.log(website);// it will not work out of scope
    two()//if it not called than the function one will never executed

}

one()

//++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++

function addone(num){//it is function
    return num + 1
}

addone(5)

const addTwo = function(num){//it is function also called as expression
    return num + 2
}

addTwo(5)

// The "Interesting" Part: Hoisting
// Notice the difference between your two functions:

// Function Declaration (addone): You can call this function even before you write it in your code.
//  JavaScript moves it to the top automatically.

// Function Expression (addTwo): Because you stored it in a const variable,
//  you cannot call it before it is defined. If you try, the code will crash. In the office, 
// we prefer expressions because they force you to be organized.


//const discount = 10

function calculatePrice(){
  const discount = 20
  return ` this is the discount ${discount}`
}

console.log(calculatePrice())

//
 
 greetUser()
 const greetUser = function(){
  // var x = "hello"
  let x = "hello"
   
 }
 
 console.log(x)

// Problem 1: Perfect.
// The Logic: When calculatePrice runs, it looks in its own "room" (local scope) first. It finds discount = 20
//  and stops looking. It never even checks the global $10$.
 
//  Problem 2:
//   The Error BreakdownThe Hoisting Error: 
// You called greetUser() before defining it as a const.Why? const and let variables are in a "Temporal Dead Zone." They exist,
//    but you aren't allowed to touch them until the code execution reaches the line where they are defined.
// The Reference Error:
//  You tried to console.log(x) outside the function.Why? Variables defined with let, const, or even var inside a function are Function Scoped.
//     They are born when the function starts and die when the function ends. They are not accessible from the "outside world.

