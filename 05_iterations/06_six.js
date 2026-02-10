// const coding = ["js", "ruby", "java", "python", "dart"]

// const values = coding.forEach((item)=>{
//     console.log(item);// it will return item
//     // return item  // it never return item output will be undefined
    
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//filters
// const newNums = myNums.filter((num)=>{
//  return num > 4
// })
// console.log(newNums);



// forEach
// const newNums = []

//  myNums.forEach((num)=>{
//     if( num > 4){
//         newNums.push(num)
//     }
// }
// )
// console.log(newNums);


// Use filter
//  when you want to show only "Electronics" or products "Under $500$".
//  It’s clean and doesn't require you to create an empty array manually.

// Use forEach
//  when you want to perform an action that doesn't create a list, like sending a notification for every item in the cart.

// Your "published" filter correctly uses the return keyword because you opened curly braces {}. Remember: If you open the "Scope" (the braces), you must use return!