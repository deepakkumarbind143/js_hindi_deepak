let score="deepak"

// console.log(typeof score)
// console.log(typeof(score));

let valueInNumber= Number(score)
// console.log(typeof valueInNumber)//number
// console.log(valueInNumber)// Nan

//"33" =>33    // we convert this in number
//"33an"=>NaN  // we canont convert this in number
//true =>1; false=>0  

let isLoggedIn="d"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0=>false
//"" =>false
// "Deepak" =>true

let someNumber =33
let stringNumber = String(someNumber)
// console.log( typeof stringNumber);//string
// console.log(  stringNumber);//33
// console.log("check git push");


//*****************************Operations******************** 


let value=3
let negValue= -value
// console.log(negValue);//-3

let str1 = "hello"
let str2 = " deepak"
let str3 = str1 + str2
// console.log(str3);// hello deepak


// console.log("1" + 1);        // 11
// console.log(1 + "2");     //12
// console.log("1" + 2 + 2);  //122
// console.log(1 + 2 + "2"); //32

// console.log((3 + 4) * 5 % 3);

// console.log(+true); //1 //if we add + then we get output 1 / output is true
// console.log(+false);//0
// console.log(+"");//0


// x is 4; y is 3
let x = 3;
const y = x++; // here y will be 3 and return 4 to x variable
// console.log(`x is ${x} , y is ${y}`);


// x2 is 4n; y2 is 3n
let x2 = 3n;
// console.log(typeof x2);// Bingint adding n to last of the assign number

const y2 = x2++;
// console.log(`x is ${x} , y is ${y}`);



// In JavaScript, var does not care about if statements or for loops. It only cares about Functions.


// if (true) {
//   var snack = "Chips";
// }
// console.log(snack); // Works!

// Now the engine starts running the code from top to bottom:

// Line 1: It ignores the var (since it already handled it).

// Line 2: It enters the if (true) block.

// Line 3: It sees snack = "Chips". This is the key! It takes that undefined variable and overwrites it with the string "Chips".

// Line 4: It hits console.log(snack). Since the variable was updated in Step 3, it prints "Chips".


// {
//   // --- START OF BLOCK ---
//   // TDZ Starts here for 'pizza'
  
//   console.log(greeting); // Output: undefined (because of var)
//   console.log(pizza);    // ReferenceError: Cannot access 'pizza' before initialization
//                          // ^ This is the TDZ in action!

//   var greeting = "Hi";
//   let pizza = "Pepperoni"; // TDZ Ends here for 'pizza'
  
//   console.log(pizza);    // Output: "Pepperoni"
// }

/*
In JavaScript, it's about the Temporal Dead Zone (TDZ). 
The variable exists in the block from the moment the code starts running,
 but it's "locked." If you try to touch it before the let or const line, JS throws a Runtime Error.*/


 //************ CONST******** */

 
//  In JS, const only means "The variable name cannot be reassigned." It does not mean the value is immutable (unchangeable)

// const myArray = [1, 2];
// myArray.push(3); // WORKS! You changed the contents, but not the variable itself.

// myArray = [4]; // ERROR! You tried to reassign the name.