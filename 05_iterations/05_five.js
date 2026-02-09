const coding = ["js", "ruby", "java", "python", "dart"]

// coding.forEach( function(item){  // normal function
//     console.log(item);
    
// })



// coding.forEach(  (item)=>{ //arrow function
// console.log(item);

// })


//calling function with reference

function printMe(item) {
console.log(item);

}
coding.forEach(printMe)


// for each always have value, index, array
// coding.forEach(  (item, index, arr)=>{
//     console.log(item, index, arr);
    
// })


// here you get object value that is in list
// const mycoding = [
//     {
//         languageName: "javascripts",
//         languageFileName: "js"
//     },
//     {
//         languageName: "java",
//         languageFileName: "java"
//     },
//     {
//         languageName: "python",
//         languageFileName: "py"
//     },
//     {
//         languageName: "c++",
//         languageFileName: "cpp"
//     }
// ]

// mycoding.forEach( (item)=>{
// console.log(item.languageName);

// })


// The Real-World Logic: Why use forEach?
// In a real internship, you'll use forEach when you want to do something for every item (like sending an email to a list of users or logging data),
//  but you aren't trying to "change" the array itself.

// Crucial Note:
//  A forEach loop cannot be stopped. Unlike a for loop, you can't use break or continue. 
//  It will run until the very last item no matter what.


//first problem
const tasks =[
  
  {
  taskName: "writing",
  isCompleted: true
},
  {
  taskName: "designing",
  isCompleted: false
},
  {
  taskName: "cooking",
  isCompleted: false
}
  ] 
  
  tasks.forEach((item, index)=>console.log( `Task ${index}: ${item.taskName} is ${item.isCompleted ===true ? "Done": "Pending"}`) )
// Pro Tip: In the condition item.isCompleted === true, 
// you can actually just write item.isCompleted.
//  Since it's already a boolean, JavaScript will treat it as true automatically.
// second solution

const prices = [100, 200, 300, 400]

function applydiscount(val){
  console.log(`Discount prices: ${val * 0.9}`)
}

prices.forEach(applydiscount)

// The Real-World Logic Recap
// Separation of Concerns: Defining applydiscount outside makes your code more testable and reusable.
//  You could use that same function for a single price later without needing a loop.

// The forEach Return: Remember, forEach always returns undefined.
//  If you try to do const result = prices.forEach(...), the result variable will be empty. To get a new array back, we use other methods.