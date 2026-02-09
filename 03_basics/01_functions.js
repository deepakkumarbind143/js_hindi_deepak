function myName(){
    console.log("D");
    console.log("E");
    console.log("E");
    console.log("P");
    console.log("A");
    console.log("K");
}

// myName() //**myname is refference and myName() is the fuction call
function addTwoNumber(number1, number2){//function defination with parameters
// console.log(number1 + number2);
}
// addTwoNumber(3,5)//function call with arguments


//* 
function addTwoNumber(number1, number2){
// let result = number1 + number2
// return result
return number1 + number2

}

const result = addTwoNumber(4, 6)
// console.log("Result: ", result);// this will give undefine output 

function loginUserMessage(username = "bro"){//bro is default value
    if(!username){
        console.log("please enter user name");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('deepak'))


//this is rest operater ... also know as spread operater varies on use
//rest ,It collects all remaining arguments into an array.
function calculateCartPrice(val1, val2, ...num1){//before adding val1, val2, 
//...num1 is a rest parameter that gathers all remaining arguments into an array after val1 and val2 are assigned.
return num1
}

console.log(calculateCartPrice(200, 400, 500, 300))

// you can pass object to function
const user = {
    username: "deepak",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}


// handleObject(user)

handleObject({
    username: "sam",
    price: 1999
})

//you can pass array to function
const myNewArray  = [200, 400, 100, 600]

function returnSecondValue(getArray){//in getArray  the reference of myNewArray is stored
    return getArray[1]
}


// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 700, 800, 9000]));


const price = [10, 20, 30, 40, 50]

// .map(): Transforms every item in an array.

const salesprice = price.map(p => p * 0.9)

console.log(salesprice)

// .filter(): Removes items based on a condition. 

const expensive = price.filter(p => p < 40)

console.log(expensive)

// .find(): Grabs the first item that matches.

const specificprice = price.find( p => p === 20)

console.log(`the price range is  ${ specificprice }`)


// In JavaScript, when you use .filter() or .find(),
//  you don't need a for loop. These methods loop through the array for you!

//call back function //p => p.name === "keyboard"

// Problem Statement 2: The "Inventory Search" (Filter & Find)
// A store manager wants to find specific products from a list based on their budget.

// Your Task:

// Create an array of objects called products. Each object should have a name and a price.

// Write a function checkInventory that takes this array as a parameter.

// Inside the function:

// Use .filter() to create a new array of products that cost less than 500.

// Use .find() to find the first product named "Keyboard".

// Return an object containing both the filtered list and the found item.

// Print the final result.

// function checkInventory(arr) {
//   // .filter() returns a new array of items that pass the test
//   const reasonablePrice = arr.filter(p => p.price < 500);

//   // .find() returns the first object where the name matches
//   const keyboard = arr.find(p => p.name === "keyboard");

//   // Simply return an object with the results
//   return {
//     offer: reasonablePrice, // behiind the sene a temporary object is created
//     foundItem: keyboard
//   };
// }
