const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and the currval: ${currval}`);
    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc, curr)=> acc + curr, 0)
console.log(myTotal);



//performing reduce iteration on object
// const shopping = [
//     {
//         itemnames: "js cource",
//         price: 290,
//     },
//     {
//         itemnames: "python",
//         price: 290,
//     },
//     {
//         itemnames: "mobile dev",
//         price: 290,
//     },
//     {
//         itemnames: "data scientist",
//         price: 290,
//     },
// ]

//  const priceToPay = shopping.reduce((acc, item)=> acc + item.price, 0 )
// console.log(priceToPay);

// (acc, item, index, arr)
// Why _ is commonly used
// (_, item) => { ... }


// Means:

// “Yes, JS passes this argument, but I’m intentionally not using it.”

// You’ll see this a LOT in professional code.
